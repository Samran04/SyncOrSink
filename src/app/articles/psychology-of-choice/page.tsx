import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Brain, Focus, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "The Psychology of Choice: Would You Rather | SyncOrSink",
  description: "Why are some choices impossible? Explore the science of decision-making, cognitive dissonance, and why SyncOrSink reveals your true self.",
};

export default function PsychologyArticle() {
  return (
    <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-16 md:py-24">
      <article className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <Link href="/articles" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-medium">
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>

        <header className="space-y-6">
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-500">
            <span className="px-3 py-1 rounded-full bg-danger/10 text-danger border border-danger/20 uppercase tracking-widest text-[10px] font-bold">Psychology</span>
            <div className="flex items-center gap-1.5 leading-none">
              <Calendar className="w-4 h-4" />
              April 22, 2026
            </div>
            <div className="flex items-center gap-1.5 leading-none">
              <Clock className="w-4 h-4" />
              7 min read
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
            The <span className="text-danger">Psychology of Choice</span>: Why Some Options Are Impossible
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed italic border-l-4 border-slate-800 pl-6">
            Understanding the mental tug-of-war that happens during a 10-second countdown.
          </p>
        </header>

        <div className="prose prose-invert prose-slate max-w-none space-y-10">
          <section className="space-y-4">
            <p className="text-lg text-slate-300 leading-relaxed">
              Every day, we make thousands of decisions. Most are mundane—what to wear, what to eat for breakfast, which email to ignore first. But when you&apos;re presented with two equally absurd or equally attractive options in a game of &quot;Would You Rather&quot;, your brain enters a unique state of activity.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              At <span className="text-white font-bold">SyncOrSink</span>, we use a 10-second timer to amplify this effect. Here&apos;s a look at what&apos;s actually happening inside your head when you&apos;re forced to choose.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Brain className="text-primary w-8 h-8" />
              1. Cognitive Dissonance and Forced Choice
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Cognitive dissonance is the mental discomfort experienced by a person who holds two or more contradictory beliefs, values, or ideas. In a &quot;Would You Rather&quot; game, we often present two &quot;bad&quot; options. Your brain wants to reject both, but the rules of the game (and the ticking clock) force a selection. This mini-crisis reveals your hierarchy of values—even if those values are about something as silly as whether you&apos;d rather have hands for feet or feet for hands.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Focus className="text-accent w-8 h-8" />
              2. System 1 vs. System 2 Thinking
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Psychologist Daniel Kahneman famously described two systems of thought: System 1 (fast, instinctive, and emotional) and System 2 (slower, more deliberative, and logical). A 10-second timer effectively shuts down System 2. You don&apos;t have time to weigh the pros and cons or consider the long-term implications. You react from System 1—the raw, honest, and often unhinged part of your personality.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Zap className="text-danger w-8 h-8" />
              3. The &quot;Sync&quot; Effect
            </h2>
            <p className="text-slate-300 leading-relaxed">
              When two people find themselves in &quot;Sync,&quot; it means their System 1 responses are aligned. This is more significant than just sharing an opinion; it suggests a shared fundamental logic or a similar way of processing absurdity. This is why a high score on SyncOrSink feels so validating—it&apos;s proof of a deep-seated mental connection that bypasses social filters.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-4">Why We Love Impossible Choices</h2>
            <p className="text-slate-300 leading-relaxed">
              Despite the stress of the timer, we find these games immensely satisfying. They provide a safe environment to explore extreme scenarios and, more importantly, to share that exploration with others. Every &quot;Sync&quot; or &quot;Sink&quot; result is a data point in the fascinating experiment that is your friendship.
            </p>
          </section>

          <section className="pt-8 border-t border-slate-800 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Ready to see your System 1 in action?</h3>
            <Link href="/single-player" className="inline-block bg-danger text-white font-bold px-8 py-4 rounded-2xl hover:scale-105 transition-transform">
              Try the Solo Practice Test
            </Link>
          </section>
        </div>
      </article>
    </main>
  );
}
