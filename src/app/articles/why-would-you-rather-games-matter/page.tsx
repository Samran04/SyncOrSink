import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Users, Zap, Brain } from "lucide-react";

export const metadata: Metadata = {
  title: "Why Would You Rather Games Matter | SyncOrSink",
  description: "Deep dive into the psychology of friendship test games and why rapid-fire choices are the best way to test compatibility.",
};

export default function ArticleOne() {
  return (
    <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-16 md:py-24">
      <article className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        {/* Back Link */}
        <Link href="/articles" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-medium">
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>

        {/* Header */}
        <header className="space-y-6">
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-500">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 uppercase tracking-widest text-[10px] font-bold">Psychology</span>
            <div className="flex items-center gap-1.5 line-height-none">
              <Calendar className="w-4 h-4" />
              April 12, 2026
            </div>
            <div className="flex items-center gap-1.5 line-height-none">
              <Clock className="w-4 h-4" />
              5 min read
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Why &quot;Would You Rather&quot; is the Ultimate <span className="text-primary">Friendship Test</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed italic border-l-4 border-slate-800 pl-6">
            In a world of complex personality tests, sometimes the simplest choices reveal the deepest truths.
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-invert prose-slate max-w-none space-y-10">
          <section className="space-y-4">
            <p className="text-lg text-slate-300 leading-relaxed">
              We&apos;ve all been there: sitting around with a group of friends, the conversation starts to lag, and someone throws out the classic: <span className="text-white italic">&quot;Would you rather always have to shout when you speak, or always have to whisper?&quot;</span>
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              It seems like a silly distraction, but beneath the surface of these impossible choices lies a goldmine of psychological data about your relationships. At <span className="text-white font-bold">SyncOrSink</span>, we&apos;ve turned this into a science. Here&apos;s why these games are more than just a way to kill time.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Zap className="text-primary w-8 h-8" />
              1. The Power of the 5-Second Filter
            </h2>
            <p className="text-slate-300 leading-relaxed">
              When you have minutes to think about an answer, you aren&apos;t giving your real opinion—you&apos;re giving the <span className="italic">socially acceptable</span> version of it. You filter your thoughts to match what you think people want to hear.
            </p>
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <p className="text-slate-200 font-medium italic">
                &quot;The 5-second timer on SyncOrSink isn&apos;t just for tension; it&apos;s a psychological barrier-breaker. It bypasses the logical, filtering brain and forces the intuitive, chaotic self to respond.&quot;
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Users className="text-accent w-8 h-8" />
              2. Shared Chaos Builds Bonds
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Laughter is a powerful bonding agent, but shared confusion is even stronger. When you and a friend both choose a totally bizarre option in under 5 seconds, it creates an instant &quot;insider&quot; moment. 
            </p>
            <p className="text-slate-300 leading-relaxed">
              Conversely, when you realize your best friend has a completely opposite stance on something minor—like whether to fight 100 duck-sized horses or one horse-sized duck—it leads to the kind of passionate, low-stakes debate that strengthens friendship roots.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Brain className="text-danger w-8 h-8" />
              3. Testing Your &quot;Sync&quot;
            </h2>
            <p className="text-slate-300 leading-relaxed">
              True friendship &quot;sync&quot; isn&apos;t about agreeing on everything. It&apos;s about understanding the internal logic of the other person. When you play a game like SyncOrSink, you&apos;re testing how well you can predict each other&apos;s movements in a chaotic mental environment.
            </p>
            <ul className="list-disc pl-6 space-y-4 text-slate-300">
              <li><strong className="text-white">Soul Sync (90-100%):</strong> You operate on the same wavelength of chaos. You probably finish each other&apos;s sentences.</li>
              <li><strong className="text-white">Chaotic Duo (60-80%):</strong> Your differences make the friendship interesting. You challenge each other.</li>
              <li><strong className="text-white">Opposite Species (Below 40%):</strong> You are a miracle of coexistence. How do you even go to dinner together?</li>
            </ul>
          </section>

          <section className="pt-8 border-t border-slate-800 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Ready to put your friendship to the test?</h3>
            <Link href="/multiplayer" className="inline-block bg-primary text-slate-950 font-bold px-8 py-4 rounded-2xl hover:scale-105 transition-transform">
              Play SyncOrSink Multiplayer
            </Link>
          </section>
        </div>
      </article>
    </main>
  );
}
