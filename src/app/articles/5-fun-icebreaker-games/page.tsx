import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Users, PartyPopper, Sparkles, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "5 Fun Icebreaker Games for Virtual Hangouts | SyncOrSink",
  description: "Ditch the awkward silences! Discover the best online icebreaker games, including SyncOrSink, to make your next virtual hangout unforgettable.",
};

export default function IcebreakerArticle() {
  return (
    <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-16 md:py-24">
      <article className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <Link href="/articles" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-medium">
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>

        <header className="space-y-6">
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-500">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 uppercase tracking-widest text-[10px] font-bold">Social</span>
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
            5 Fun <span className="text-primary">Icebreaker Games</span> for Your Next Virtual Hangout
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed italic border-l-4 border-slate-800 pl-6">
            Stop asking &quot;what did you do today?&quot; and start playing games that actually build connections.
          </p>
        </header>

        <div className="prose prose-invert prose-slate max-w-none space-y-10">
          <section className="space-y-4">
            <p className="text-lg text-slate-300 leading-relaxed">
              We&apos;ve all been there—the Zoom call starts, three people have their cameras off, and the silence is so heavy you can hear your router humming. Virtual hangouts often lack the spontaneous energy of physical gatherings, making icebreakers essential.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              But let&apos;s be honest: most corporate icebreakers are painful. To help you host a session people actually enjoy, we&apos;ve curated a list of 5 virtual games that are high-energy, low-stress, and genuinely fun.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <PartyPopper className="text-primary w-8 h-8" />
              1. SyncOrSink (The Rapid-Fire Test)
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Yes, we&apos;re biased, but for a reason. Most games take too long to explain. <Link href="/" className="text-white hover:text-primary font-bold underline">SyncOrSink</Link> takes 2 seconds to join and 10 seconds to play each question. It forces participants to make split-second decisions, leading to hilarious results and even better roasts. 
            </p>
            <p className="text-slate-300 leading-relaxed">
              It&apos;s the perfect &quot;warm-up&quot; because it gets everyone laughing at their own (and each other&apos;s) chaotic choices before you move into deeper conversations.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Users className="text-accent w-8 h-8" />
              2. Two Truths and a Lie (Digital Style)
            </h2>
            <p className="text-slate-300 leading-relaxed">
              A classic for a reason. Have everyone type their two truths and one lie into the chat at the same time, but DON&apos;T hit enter until the host says &quot;GO!&quot;. Then, everyone has to guess which one is the lie for each person. Using the chat makes it feel like a rapid-fire trivia game.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Sparkles className="text-danger w-8 h-8" />
              3. The &quot;Show and Tell&quot; Scavenger Hunt
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Give your friends 30 seconds to find something in their room that has a story behind it. It could be a weird souvenir, a plant they haven&apos;t killed yet, or a mysterious piece of tech. This is great for virtual calls because it lets people show a bit of their physical world which we usually don&apos;t see on screen.
            </p>
          </section>

          <section className="space-y-6">
             <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Clock className="text-blue-400 w-8 h-8" />
              4. Guess the Desk / Background
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Have everyone send a photo of their desk or a specific corner of their room to the host beforehand. The host shares their screen, and everyone has to guess whose space it is. It&apos;s a fascinating look into your friends&apos; daily lives and personalities.
            </p>
          </section>

          <section className="space-y-6">
             <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Zap className="text-yellow-400 w-8 h-8" />
              5. Most Likely To...
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Prepare a list of funny &quot;Most Likely To&quot; prompts (e.g., &quot;Most likely to survive a zombie apocalypse,&quot; &quot;Most likely to become a billionaire and forget us&quot;). On the count of three, everyone points to someone on their screen or types their name in the chat. It&apos;s a great way to see how you all perceive each other.
            </p>
          </section>

          <section className="pt-8 border-t border-slate-800 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Want to start with the fastest one?</h3>
            <Link href="/multiplayer" className="inline-block bg-primary text-slate-950 font-bold px-8 py-4 rounded-2xl hover:scale-105 transition-transform">
              Start a SyncOrSink Room
            </Link>
          </section>
        </div>
      </article>
    </main>
  );
}
