import { get, ref, set, remove } from "firebase/database";
import { db } from "./firebase";

const adjectives = [
  "Toxic", "Based", "Chaotic", "Sweaty", "Cursed", "Salty", "Cracked", "Malding", 
  "Clueless", "Giga", "Sigma", "Noob", "Tryhard", "Chill", "Sus", "Dank", "Tilted", "Goated"
];

const nouns = [
  "Goblin", "Ninja", "Gamer", "Demon", "Lord", "Sniper", "Bot", "Troll", 
  "Gremlin", "Chad", "Doomer", "Zoomer", "Boomer", "Panda", "Ghost", "SLayer", "God", "King", "Queen"
];

export function generateRandomName(): string {
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return `${adj}${noun}${Math.floor(Math.random() * 1000)}`;
}

export function normalizeName(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9_]/g, "");
}

/**
 * Validates format and checks uniqueness in Firebase `/usernames`
 * @param uid Current user UID
 * @param newName Requested new name
 * @param oldName Old name to release, if any
 * @returns Object { success: boolean, message?: string }
 */
export async function claimUsername(
  uid: string,
  newName: string,
  oldName?: string | null
): Promise<{ success: boolean; message?: string }> {
  const normalized = normalizeName(newName);
  
  if (!normalized || normalized.length < 3) {
    return { success: false, message: "Name must be at least 3 alphanumeric characters." };
  }

  if (normalized.length > 20) {
    return { success: false, message: "Name is too long (max 20 chars)." };
  }

  // Check if it's already exactly what they have
  if (oldName && normalizeName(oldName) === normalized) {
    return { success: true };
  }

  try {
    const nameRef = ref(db, `usernames/${normalized}`);
    const snap = await get(nameRef);
    
    if (snap.exists() && snap.val() !== uid) {
      return { success: false, message: "Name already taken!" };
    }

    // Free the old name if it exists and is different
    if (oldName) {
      const oldNormalized = normalizeName(oldName);
      if (oldNormalized !== normalized) {
        await remove(ref(db, `usernames/${oldNormalized}`));
      }
    }

    // Claim the new name
    await set(nameRef, uid);
    return { success: true };
  } catch (err: any) {
    return { success: false, message: err.message || "Database error" };
  }
}
