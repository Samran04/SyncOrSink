import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Trophy, Zap, Share2 } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Test Your Friendship Score Online | SyncOrSink",
  description: "A step-by-step guide to measuring your friendship sync score and understanding your roast results.",
};

export default function ArticleTwo() {
  return (
    <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-16 md:py-24">
      <article className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <Link href="/articles" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-medium">
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>

        <header className="space-y-6">
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-500">
            <span className="px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 uppercase tracking-widest text-[10px] font-bold">Gaming</span>
            <div className="flex items-center gap-1.5 line-height-none">
              <Calendar className="w-4 h-4" />
              April 10, 2026
            </div>
            <div className="flex items-center gap-1.5 line-height-none">
              <Clock className="w-4 h-4" />
              4 min read
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
            How to Test Your <span className="text-accent">Friendship Score</span> Online (Properly)
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed italic border-l-4 border-slate-800 pl-6">
            Everything you need to know about starting a session, surviving the timer, and interpreting the roasts.
          </p>
        </header>

        <div className="prose prose-invert prose-slate max-w-none space-y-10">
          <section className="space-y-4">
            <p className="text-lg text-slate-300 leading-relaxed">
              In the age of digital connection, how well do we actually know the people we text every day? Standard quizzes are boring. If you want to find out who your real ride-or-die is, you need a test that puts you under pressure.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              SyncOrSink is designed to be the ultimate online friendship test. But how do you get the most out of a session? Here is our definitive guide.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Zap className="text-primary w-8 h-8" />
              Step 1: The Setup
            </h2>
            <p className="text-slate-300 leading-relaxed">
              First, head over to <Link href="/multiplayer" className="text-white hover:text-primary underline font-bold">Multiplayer Mode</Link>. SyncOrSink works best when you&apos;re either in the same room physically or in a voice call together. The real fun isn&apos;t just the result—it&apos;s the yelling that happens during the 5-second countdown.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li>Create a new room.</li>
              <li>Share the 6-digit code with your friend.</li>
              <li>Wait for both players to mark as &quot;Ready&quot;.</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Trophy className="text-accent w-8 h-8" />
              Step 2: Understanding the Synchronicity Score
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Our algorithm compares your answer choices across 10 rapid-fire questions. But we don&apos;t just look for matching answers. We look for patterns in <span className="text-white italic">why</span> you chose what you chose.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                <h4 className="text-white font-bold mb-2">High Sync (&gt;80%)</h4>
                <p className="text-slate-400 text-sm">You are essentially the same person in different bodies. It&apos;s likely a bit creepy.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                <h4 className="text-white font-bold mb-2">Low Sync (&lt;40%)</h4>
                <p className="text-slate-400 text-sm">You have zero mental overlap. This is the hallmark of a healthy, diverse friendship (or a pending breakup).</p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Share2 className="text-danger w-8 h-8" />
              Step 3: Interpreting the Roast
            </h2>
            <p className="text-slate-300 leading-relaxed">
              The roast is the soul of SyncOrSink. Based on your scores and specific answer combinations, our AI generates a brutally honest breakdown of your dynamic.
            </p>
            <p className="text-slate-300 leading-relaxed italic">
              Pro Tip: If your roast is particularly devastating, we highly recommend generating a result card and sharing it to your Instagram story to expose your friend for the chaotic person they are.
            </p>
          </section>

          <section className="pt-8 border-t border-slate-800">
             <div className="p-8 rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10 border border-slate-700 space-y-4 text-center">
              <h3 className="text-2xl font-bold text-white">Already played?</h3>
              <p className="text-slate-400">Check out our previous article on why <Link href="/articles/why-would-you-rather-games-matter" className="text-white hover:text-primary transition-colors">Would You Rather is psychologically fascinating</Link>.</p>
             </div>
          </section>
        </div>
      </article>
    </main>
  );
}
