"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import {
  User,
  onAuthStateChanged,
  signInAnonymously as firebaseSignInAnonymously,
  signInWithPopup,
  GoogleAuthProvider,
  signOut as firebaseSignOut,
  linkWithPopup,
  updateProfile,
  signInWithRedirect,
  linkWithRedirect,
  signInWithCredential,
} from "firebase/auth";
import { auth } from "./firebase";
import { generateRandomName, claimUsername } from "./nameGenerator";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  authProcessing: boolean;
  signInAnonymously: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  updatePlayerName: (newName: string) => Promise<{ success: boolean; message?: string }>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  authProcessing: false,
  signInAnonymously: async () => {},
  signInWithGoogle: async () => {},
  signOut: async () => {},
  updatePlayerName: async () => ({ success: true }),
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [authProcessing, setAuthProcessing] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Auto sign-in anonymously if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      firebaseSignInAnonymously(auth).catch(console.error);
    }
  }, [loading, user]);

  const signInAnonymously = async () => {
    try {
      const cred = await firebaseSignInAnonymously(auth);
      // Auto-assign random uniquely generated name if they don't have one
      if (cred.user && !cred.user.displayName) {
        let assigned = false;
        let attempts = 0;
        let freshName = "";
        while (!assigned && attempts < 5) {
          freshName = generateRandomName();
          const check = await claimUsername(cred.user.uid, freshName);
          if (check.success) assigned = true;
          attempts++;
        }
        if (assigned) {
          await updateProfile(cred.user, { displayName: freshName });
          setUser({ ...cred.user });
        }
      }
    } catch (error) {
      console.error("Anonymous sign-in error:", error);
    }
  };

  const signInWithGoogle = async () => {
    if (authProcessing) return;
    
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });

    // Initiate the popup synchronously FIRST to prevent popup-blockers
    const authPromise = user?.isAnonymous && auth.currentUser
      ? linkWithPopup(auth.currentUser, provider)
      : signInWithPopup(auth, provider);

    setAuthProcessing(true);

    try {
      await authPromise;
    } catch (error: any) {
      if (error.code === "auth/credential-already-in-use") {
        try {
          const credential = GoogleAuthProvider.credentialFromError(error);
          if (credential) {
            await signInWithCredential(auth, credential);
            return; // Successful login without opening a second popup
          }
          await signInWithPopup(auth, provider);
        } catch (fallbackError: any) {
           console.error("Fallback sign-in error:", fallbackError);
        }
      } else if (
        error.code === "auth/cancelled-popup-request"
      ) {
        console.warn("Popup closed or cancelled by user.");
      } else if (error.code === "auth/popup-blocked") {
        console.warn("Popup blocked! Falling back to redirect...");
        if (user?.isAnonymous && auth.currentUser) {
          await linkWithRedirect(auth.currentUser, provider);
        } else {
          await signInWithRedirect(auth, provider);
        }
      } else {
        console.error("Google sign-in error:", error);
      }
    } finally {
      setAuthProcessing(false);
    }
  };

  const signOut = async () => {
    if (authProcessing) return;
    setAuthProcessing(true);
    try {
      await firebaseSignOut(auth);
      // Let onAuthStateChanged or useEffect handle auto-anonymous sign-in
    } catch (error) {
      console.error("Sign-out error:", error);
    } finally {
      setAuthProcessing(false);
    }
  };

  const updatePlayerName = async (newName: string): Promise<{ success: boolean; message?: string }> => {
    if (auth.currentUser) {
      const res = await claimUsername(auth.currentUser.uid, newName, auth.currentUser.displayName);
      if (!res.success) {
        return res;
      }
      try {
        await updateProfile(auth.currentUser, { displayName: newName });
        // Force a re-render with the new user object
        setUser({ ...auth.currentUser });
        return { success: true };
      } catch (error: any) {
        console.error("Update profile error:", error);
        return { success: false, message: error.message };
      }
    }
    return { success: false, message: "Not authenticated" };
  };

  return (
    <AuthContext.Provider value={{ user, loading, authProcessing, signInAnonymously, signInWithGoogle, signOut, updatePlayerName }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
