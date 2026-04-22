"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Users, Plus, LogIn } from "lucide-react";

export default function MultiplayerSetupClient() {
  const router = useRouter();
  const [joinCode, setJoinCode] = useState("");
  const [isJoining, setIsJoining] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [vibe, setVibe] = useState("Gen Z Chaos");

  const handleCreateRoom = () => {
    setIsCreating(true);
    const roomId = Math.random().toString(36).substring(2, 8).toUpperCase();
    setTimeout(() => {
      router.push(`/room/${roomId}?vibe=${encodeURIComponent(vibe)}`);
    }, 500);
  };

  const handleJoinRoom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!joinCode.trim()) return;
    setIsJoining(true);
    setTimeout(() => {
      router.push(`/room/${joinCode.toUpperCase()}`);
    }, 500);
  };

  return (
    <main className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-8 relative">
      <Link href="/" className="absolute top-6 left-6 text-slate-400 hover:text-white flex items-center gap-2 transition-colors">
        <ArrowLeft className="w-5 h-5" />
        <span className="font-medium">Back</span>
      </Link>

      <div className="space-y-4 max-w-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full text-primary mb-2">
          <Users className="w-8 h-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Play with Friends</h1>
        <p className="text-lg text-slate-400">
          Sync your brains. Find out if you&apos;re truly besties or just two strangers hanging out.
        </p>
      </div>

      <div className="grid gap-6 w-full max-w-md animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 fill-mode-both">
        <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl w-full space-y-4">
          <div className="space-y-2 text-left">
            <label htmlFor="vibe" className="text-sm font-bold text-slate-300">Select Room Vibe</label>
            <select
              id="vibe"
              value={vibe}
              onChange={(e) => setVibe(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-3 text-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none"
            >
              <option value="Gen Z Chaos">Gen Z Chaos 📱</option>
              <option value="Corporate Hell">Corporate Hell 👔</option>
              <option value="Existential Dread">Existential Dread 🌀</option>
              <option value="Unhinged Romance">Unhinged Romance 💔</option>
            </select>
          </div>
          <button 
            onClick={handleCreateRoom}
            disabled={isCreating}
            className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 disabled:opacity-50 text-slate-950 font-bold text-xl py-4 px-6 rounded-xl transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_30px_-10px_rgba(34,197,94,0.5)]"
          >
            <Plus className="w-6 h-6" />
            <span>{isCreating ? "Creating..." : "Create New Room"}</span>
          </button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-slate-700" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-[#0F172A] px-2 text-slate-500 font-bold">Or</span>
          </div>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl w-full">
          <form onSubmit={handleJoinRoom} className="space-y-4">
            <div className="space-y-2 text-left">
              <label htmlFor="code" className="text-sm font-bold text-slate-300">Room Code</label>
              <input 
                id="code"
                type="text" 
                maxLength={6}
                value={joinCode}
                onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
                placeholder="e.g. ABCD12" 
                className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-3 font-mono text-xl tracking-widest text-center focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary uppercase transition-colors"
                required
              />
            </div>
            <button 
              type="submit"
              disabled={isJoining || !joinCode}
              className="w-full flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 disabled:opacity-50 text-white font-bold text-lg py-4 px-6 rounded-xl transition-all active:scale-95"
            >
              <LogIn className="w-5 h-5" />
              <span>{isJoining ? "Joining..." : "Join Room"}</span>
            </button>
          </form>
        </div>
      </div>
      <section className="w-full max-w-2xl pt-12 space-y-8 text-left animate-in fade-in duration-1000 delay-300 fill-mode-both">
        <div className="h-px w-full bg-slate-800" />
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">How Multiplayer Sync Works</h2>
          <p className="text-slate-400 leading-relaxed">
            SyncOrSink isn&apos;t just about matching answers—it&apos;s about sharing a wavelength. When you and your friend enter a room, our real-time engine ensures you both see the same &ldquo;would you rather&rdquo; questions at the exact same moment. 
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
              <h3 className="text-primary font-bold mb-2">Simultaneous Play</h3>
              <p className="text-slate-500 text-sm">Both players have 10 seconds per question. No time to discuss, only time to react.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
              <h3 className="text-accent font-bold mb-2">Sync Calculation</h3>
              <p className="text-slate-500 text-sm">Our algorithm analyzes your choice patterns to generate a compatibility score and a custom roast.</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Pro Tips for Besties</h2>
          <ul className="space-y-3 text-slate-400">
             <li className="flex gap-3">
                <span className="text-primary font-bold">01.</span>
                <span>Get on a voice call. Hearing your friend&apos;s panic as the 10-second timer runs out is half the experience.</span>
             </li>
             <li className="flex gap-3">
                <span className="text-primary font-bold">02.</span>
                <span>Don&apos;t overthink. Your first gut reaction is usually the most &ldquo;syncable&rdquo; answer.</span>
             </li>
             <li className="flex gap-3">
                <span className="text-primary font-bold">03.</span>
                <span>Share your results! Use the result card to expose your friend&apos;s unhinged choices on social media.</span>
             </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
