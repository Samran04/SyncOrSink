import Link from "next/link";
import { Users, User, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-12">
      {/* Hero Section */}
      <div className="space-y-6 max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="inline-block relative">
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full translate-y-2"></div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter relative z-10">
            <span className="text-white">Sync</span>
            <span className="text-accent">Or</span>
            <span className="text-danger">Sink</span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-slate-300 font-medium max-w-lg mx-auto leading-relaxed">
          The ultimate friendship test. Do you think the same way, or are you <span className="text-danger font-bold line-through">enemies</span> opposite species?
        </p>
      </div>

      {/* Action Buttons */}
      <div className="grid gap-6 w-full max-w-md animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-150 fill-mode-both">
        <Link 
          href="/multiplayer" 
          className="group relative w-full flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-slate-950 font-bold text-xl py-5 px-8 rounded-2xl transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_40px_-10px_rgba(34,197,94,0.5)]"
        >
          <Users className="w-6 h-6" />
          <span>Play with Friends</span>
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/10 to-transparent rounded-b-2xl pointer-events-none"></div>
        </Link>

        <Link 
          href="/single-player" 
          className="group relative w-full flex items-center justify-center gap-3 bg-slate-800 hover:bg-slate-700 border-2 border-slate-700 hover:border-slate-600 text-white font-bold text-xl py-5 px-8 rounded-2xl transition-all hover:scale-[1.02] active:scale-95"
        >
          <User className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
          <span>Solo Practice test</span>
        </Link>
      </div>

      {/* Features/Hook */}
      <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl text-left animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300 fill-mode-both">
        <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
          <div className="text-3xl mb-3">⏱️</div>
          <h3 className="text-lg font-bold text-white mb-2">5-Second Pressure</h3>
          <p className="text-slate-400">No time to overthink. Your true chaotic nature will be revealed.</p>
        </div>
        <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
          <div className="text-3xl mb-3">🔥</div>
          <h3 className="text-lg font-bold text-white mb-2">Brutal Roasts</h3>
          <p className="text-slate-400">Get accurately roasted based on your combined friendship choices.</p>
        </div>
        <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
          <div className="text-3xl mb-3">📲</div>
          <h3 className="text-lg font-bold text-white mb-2">Share the Damage</h3>
          <p className="text-slate-400">Generate a viral result card and expose your friend on Instagram.</p>
        </div>
      </div>
    </main>
  );
}
