"use client";

import Link from "next/link";
import { useAuth } from "@/lib/AuthContext";
import { Zap, LogIn, LogOut, User, Loader2, Pencil, Check, Dices } from "lucide-react";
import { useState } from "react";
import { generateRandomName } from "@/lib/nameGenerator";

import Image from "next/image";

export default function Navbar() {
  const { user, loading, authProcessing, signInWithGoogle, signOut, updatePlayerName } = useAuth();
  const [showMenu, setShowMenu] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [editName, setEditName] = useState("");
  const [nameError, setNameError] = useState("");

  const handleEditInit = () => {
    setEditName(user?.displayName || generateRandomName());
    setIsEditingName(true);
    setNameError("");
  };

  const handleRandomize = () => {
    setEditName(generateRandomName());
    setNameError("");
  };

  const handleSaveName = async () => {
    const trimmed = editName.trim();
    if (trimmed && trimmed !== user?.displayName) {
      const res = await updatePlayerName(trimmed);
      if (!res.success) {
        setNameError(res.message || "Failed to update name");
        return;
      }
    }
    setIsEditingName(false);
    setNameError("");
  };

  const isAnonymous = user?.isAnonymous;
  const displayName = user?.displayName || "Anonymous";
  const photoURL = user?.photoURL;

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image 
            src="/logo-cropped.png" 
            alt="SyncOrSink Logo" 
            width={200} 
            height={50} 
            className="h-10 w-auto object-contain group-hover:scale-[1.02] transition-transform drop-shadow-md"
            priority
          />
        </Link>

        {/* Auth Section */}
        <div className="relative">
          {(loading || authProcessing) ? (
            <Loader2 className="w-5 h-5 text-slate-500 animate-spin" />
          ) : isAnonymous ? (
            <button
              onClick={signInWithGoogle}
              disabled={authProcessing}
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 border border-slate-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all hover:scale-[1.02] active:scale-95"
            >
              <LogIn className="w-4 h-4" />
              <span className="hidden sm:inline">Sign in with Google</span>
              <span className="sm:hidden">Sign in</span>
            </button>
          ) : (
            <div className="relative">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 px-3 py-2 rounded-xl transition-colors"
              >
                {photoURL ? (
                  <img
                    src={photoURL}
                    alt={displayName}
                    className="w-7 h-7 rounded-full"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center">
                    <User className="w-4 h-4 text-primary" />
                  </div>
                )}
                <span className="text-sm font-semibold text-white hidden sm:block max-w-[120px] truncate">
                  {displayName}
                </span>
              </button>

              {showMenu && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setShowMenu(false)}
                  />
                  <div className="absolute right-0 mt-2 w-64 bg-slate-800 border border-slate-700 rounded-xl shadow-xl z-50 overflow-hidden">
                    <div className="px-4 py-3 border-b border-slate-700">
                      {isEditingName ? (
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2">
                            <input
                              type="text"
                              value={editName}
                              onChange={(e) => {
                                setEditName(e.target.value);
                                setNameError("");
                              }}
                              onKeyDown={(e) => e.key === "Enter" && handleSaveName()}
                              className={`bg-slate-900 text-sm text-white px-2 py-1 rounded border w-full focus:outline-none ${nameError ? "border-red-500" : "border-slate-600 focus:border-primary"}`}
                              autoFocus
                              maxLength={20}
                            />
                            <button onClick={handleRandomize} className="p-1 text-slate-400 hover:text-white hover:bg-slate-700 rounded transition-colors" title="Generate Random">
                              <Dices className="w-4 h-4" />
                            </button>
                            <button onClick={handleSaveName} className="p-1 text-green-400 hover:bg-slate-700 rounded transition-colors" title="Save">
                              <Check className="w-4 h-4" />
                            </button>
                          </div>
                          {nameError && (
                            <p className="text-xs text-red-500 font-medium">{nameError}</p>
                          )}
                        </div>
                      ) : (
                        <div className="flex items-center justify-between group/edit">
                          <p className="text-sm font-semibold text-white truncate pr-2">{displayName}</p>
                          <button onClick={handleEditInit} className="text-slate-500 hover:text-white transition-colors opacity-100 sm:opacity-0 group-hover/edit:opacity-100 p-1">
                            <Pencil className="w-3 h-3" />
                          </button>
                        </div>
                      )}
                      <p className="text-xs text-slate-400 truncate mt-1">{user?.email || "Anonymous Account"}</p>
                    </div>
                    <button
                      onClick={async () => {
                        setShowMenu(false);
                        setIsEditingName(false);
                        await signOut();
                        window.location.reload();
                      }}
                      className="w-full flex items-center gap-2 px-4 py-3 text-sm text-red-400 hover:bg-slate-700/50 transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
