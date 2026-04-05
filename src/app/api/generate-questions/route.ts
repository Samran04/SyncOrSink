import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

async function callWithRetry(model: ReturnType<typeof genAI.getGenerativeModel>, prompt: string, maxRetries = 3) {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const result = await model.generateContent(prompt);
      return result.response.text();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      if (msg.includes("429") && attempt < maxRetries - 1) {
        const delay = (attempt + 1) * 5000;
        console.log(`Rate limited, retrying in ${delay}ms (attempt ${attempt + 1}/${maxRetries})`);
        await new Promise(r => setTimeout(r, delay));
      } else {
        throw err;
      }
    }
  }
  throw new Error("Max retries reached");
}

export async function POST(req: NextRequest) {
  try {
    const { vibe } = await req.json();

    if (!vibe) {
      return NextResponse.json({ error: "Vibe is required" }, { status: 400 });
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: "GEMINI_API_KEY not configured" }, { status: 500 });
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      generationConfig: {
        responseMimeType: "application/json",
        temperature: 1.0,
      },
    });

    const wildcards = ["Focus on existential dread", "Focus on awkward social interactions", "Focus on weird pop culture", "Focus on absurd physical challenges", "Focus on taboo topics and mild controversies", "Focus on unhinged internet culture", "Focus on terrifying future scenarios"];
    const randomWildcard = wildcards[Math.floor(Math.random() * wildcards.length)];

    const prompt = `You are an absolutely ruthless, unhinged, and savage writer for a brutal, Gen Z party game called SyncOrSink. Generate 10 NEW and UNIQUE fast-paced 'Would You Rather' questions based on the theme: ${vibe}. Constraint setting for this round: ${randomWildcard}. The questions should be incredibly dark, fiercely debatable, deeply uncomfortable, and force players into agonizing, absurd 5-second gut-reaction choices. Push the boundaries of the vibe. Do NOT repeat classic, basic, or vanilla questions. Avoid predictable patterns. To guarantee variety, here is a random salt: ${Date.now()}-${Math.random()}. Return ONLY a JSON array of objects, where each object has 'question', 'optionA', and 'optionB' properties with string values.`;

    const responseText = await callWithRetry(model, prompt);

    return NextResponse.json(JSON.parse(responseText));
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    console.error("Gemini API Error (Questions):", errMsg);
    return NextResponse.json(
      { error: "Failed to generate questions.", detail: errMsg },
      { status: 500 }
    );
  }
}
