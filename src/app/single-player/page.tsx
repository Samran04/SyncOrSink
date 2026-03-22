"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Play, Timer, Brain } from "lucide-react";

export default function SinglePlayerSetup() {
  const [isReady, setIsReady] = useState(false);

  return (
    <main className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-8 relative">
      <Link href="/" className="absolute top-6 left-6 text-slate-400 hover:text-white flex items-center gap-2 transition-colors">
        <ArrowLeft className="w-5 h-5" />
        <span className="font-medium">Back</span>
      </Link>

      <div className="space-y-4 max-w-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-full text-blue-400 mb-2">
          <Brain className="w-8 h-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Solo Practice test</h1>
        <p className="text-lg text-slate-400">
          Answer 10 rapid-fire questions to reveal your true chaotic personality. No friends needed to be roasted!
        </p>
      </div>

      <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl w-full max-w-sm space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 fill-mode-both">
        <div className="space-y-4 text-left">
          <div className="flex items-center gap-3 text-slate-300">
            <Timer className="w-5 h-5 text-accent" />
            <span>5 seconds per question</span>
          </div>
          <div className="flex items-center gap-3 text-slate-300">
            <Brain className="w-5 h-5 text-accent" />
            <span>10 completely unhinged choices</span>
          </div>
        </div>

        <Link 
          href="/single-player/game" 
          className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold text-lg py-4 px-6 rounded-xl transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_30px_-10px_rgba(59,130,246,0.5)]"
        >
          <Play className="w-5 h-5 fill-current" />
          <span>Start Now</span>
        </Link>
      </div>
    </main>
  );
}
