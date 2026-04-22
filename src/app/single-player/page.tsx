import Link from "next/link";
import { ArrowLeft, Play, Timer, Brain } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solo Practice Test – Discover Your Chaotic Personality",
  description: "Play SyncOrSink solo! Answer 10 rapid-fire 'would you rather' questions under 10-second time pressure and get your personality roasted. Free, no sign-up needed.",
  alternates: { canonical: "/single-player" },
  openGraph: {
    title: "SyncOrSink Solo Mode – Get Your Personality Roasted 🧠",
    description: "10 unhinged questions. 5 seconds each. Discover if you're a Chaos Machine, Golden Retriever Friend, or Certified Betrayer. Play free now!",
  },
};

export default function SinglePlayerSetup() {
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
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Solo Practice Test</h1>
        <p className="text-lg text-slate-400">
          Answer 10 rapid-fire questions to reveal your true chaotic personality. No friends needed to be roasted!
        </p>
      </div>

      <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl w-full max-w-sm space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 fill-mode-both">
        <div className="space-y-4 text-left">
          <div className="flex items-center gap-3 text-slate-300">
            <Timer className="w-5 h-5 text-accent" />
            <span>10 seconds per question</span>
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

      <section className="w-full max-w-2xl pt-12 space-y-6 text-left animate-in fade-in duration-1000 delay-300 fill-mode-both">
        <h2 className="text-2xl font-bold text-white text-center">The Science of the Solo Roast</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
             <h3 className="text-primary font-bold mb-2">No Filters</h3>
             <p className="text-slate-400 text-sm">Playing alone removes the social filter. Your 10-second choices reveal your rawest instincts.</p>
          </div>
          <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
             <h3 className="text-accent font-bold mb-2">Pattern Analysis</h3>
             <p className="text-slate-400 text-sm">We analyze the &ldquo;vibe&rdquo; of your choices to categorize your chaotic energy.</p>
          </div>
        </div>
        <p className="text-slate-500 text-center text-sm pt-4 italic">
          &quot;The most honest conversation you can have is during a rapid-fire choice game.&quot;
        </p>
      </section>
    </main>
  );
}
