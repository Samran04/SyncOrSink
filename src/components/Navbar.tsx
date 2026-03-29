"use client";

import Link from "next/link";
import { useAuth } from "@/lib/AuthContext";
import { Zap, LogIn, LogOut, User, Loader2 } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const { user, loading, signInWithGoogle, signOut } = useAuth();
  const [showMenu, setShowMenu] = useState(false);

  const isAnonymous = user?.isAnonymous;
  const displayName = user?.displayName || "Anonymous";
  const photoURL = user?.photoURL;

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Zap className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
          <span className="text-lg font-black tracking-tight">
            <span className="text-white">Sync</span>
            <span className="text-accent">Or</span>
            <span className="text-danger">Sink</span>
          </span>
        </Link>

        {/* Auth Section */}
        <div className="relative">
          {loading ? (
            <Loader2 className="w-5 h-5 text-slate-500 animate-spin" />
          ) : isAnonymous ? (
            <button
              onClick={signInWithGoogle}
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all hover:scale-[1.02] active:scale-95"
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
                  <div className="absolute right-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-xl shadow-xl z-50 overflow-hidden">
                    <div className="px-4 py-3 border-b border-slate-700">
                      <p className="text-sm font-semibold text-white truncate">{displayName}</p>
                      <p className="text-xs text-slate-400 truncate">{user?.email}</p>
                    </div>
                    <button
                      onClick={() => {
                        setShowMenu(false);
                        signOut();
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
