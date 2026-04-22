import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Monitor, Coffee, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Host the Perfect Digital Game Night | SyncOrSink",
  description: "Stop the lag and the lunch! Learn the secrets to hosting a flawless online game night with friends, featuring SyncOrSink and more.",
};

export default function GameNightArticle() {
  return (
    <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-16 md:py-24">
      <article className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <Link href="/articles" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-medium">
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>

        <header className="space-y-6">
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-500">
            <span className="px-3 py-1 rounded-full bg-blue-400/10 text-blue-400 border border-blue-400/20 uppercase tracking-widest text-[10px] font-bold">Guide</span>
            <div className="flex items-center gap-1.5 leading-none">
              <Calendar className="w-4 h-4" />
              April 22, 2026
            </div>
            <div className="flex items-center gap-1.5 leading-none">
              <Clock className="w-4 h-4" />
              6 min read
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
            How to Host the <span className="text-blue-400">Perfect Digital Game Night</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed italic border-l-4 border-slate-800 pl-6">
            Flawless execution, zero technical difficulties, and maximum chaos. Let's build a night to remember.
          </p>
        </header>

        <div className="prose prose-invert prose-slate max-w-none space-y-10">
          <section className="space-y-4">
            <p className="text-lg text-slate-300 leading-relaxed">
              Virtual game nights have moved from a pandemic necessity to a standard way to stay in touch with long-distance friends. However, a bad connection or a confusing game can turn a fun evening into a frustrating video call.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              To help you become the ultimate digital host, we&apos;ve put together this checklist for a seamless, high-energy session.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Monitor className="text-blue-400 w-8 h-8" />
              1. Choose High-Energy, Low-Latency Games
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Avoid games that require heavy downloads or complex setups. <Link href="/" className="text-white hover:text-primary font-bold underline">SyncOrSink</Link> is a perfect choice because it&apos;s browser-based and fast. With 10-second timers, there&apos;s no room for technical lag to ruin the moment. Use fast-paced games as icebreakers or transitions between longer sessions.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Coffee className="text-primary w-8 h-8" />
              2. Curate Your Voice/Video Environment
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Whether you use Discord, Zoom, or Google Meet, make sure everyone has a stable connection. Pro Tip: Have everyone use a browser-based game on one screen while staying on the video call on another (or a phone). Seeing each other&apos;s reactions during a SyncOrSink roast is 90% of the fun.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Zap className="text-accent w-8 h-8" />
              3. The &quot;Vibe&quot; Manager
            </h2>
            <p className="text-slate-300 leading-relaxed">
              As the host, your job is to keep the energy up. If a debate about an answer choice gets too serious, redirect the group to the next question. Use the &quot;Roast&quot; results as conversation starters. A good host knows when to let a funny moment breathe and when to keep the 10-second clock ticking.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-4">The Perfect Lineup</h2>
            <p className="text-slate-300 leading-relaxed">
              Start with a few rounds of SyncOrSink to get everyone in the zone, move into a longer drawing or trivia game, and end with one final &quot;brutal&quot; SyncOrSink session to leave everyone laughing (or crying).
            </p>
          </section>

          <section className="pt-8 border-t border-slate-800 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Ready to host?</h3>
            <Link href="/multiplayer" className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold px-8 py-4 rounded-2xl hover:scale-105 transition-transform">
              Create a Game Room
            </Link>
          </section>
        </div>
      </article>
    </main>
  );
}
