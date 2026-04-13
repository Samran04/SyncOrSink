import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Users, Zap, Heart, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | SyncOrSink",
  description: "Discover the story behind SyncOrSink – the friendship test game designed to reveal your group's true dynamics through rapid-fire challenges.",
};

export default function About() {
  return (
    <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-16 md:py-24">
      <div className="space-y-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <div className="inline-block px-4 py-1.5 mb-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-wider uppercase">
            Our Mission
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight">
            Testing Friendships,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-danger">One Roast at a Time.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            SyncOrSink was born out of a simple question: <span className="italic">&quot;Do we actually think alike, or are we just pretending?&quot;</span>
          </p>
        </section>

        {/* The Story */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">The SyncOrSink Story</h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              We started as a small project to create the ultimate icebreaker. While most friendship tests are a bit too &quot;nice,&quot; we wanted something that captured the chaotic energy of real friend groups.
            </p>
            <p className="text-slate-300 leading-relaxed">
              By combining high-pressure decision making (the 5-second timer) with brutal personality roasts, we created a game that doesn&apos;t just test your friendship—it reveals your group&apos;s true chaotic nature.
            </p>
            <div className="pt-4">
              <Link href="/multiplayer" className="inline-flex items-center gap-2 bg-primary text-slate-950 font-bold px-6 py-3 rounded-xl hover:scale-[1.05] transition-transform">
                Start Playing
              </Link>
            </div>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-danger/20 opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
               <Image 
                src="/icon.png" 
                alt="SyncOrSink Character" 
                width={300} 
                height={300} 
                className="w-48 h-48 drop-shadow-[0_0_30px_rgba(34,197,94,0.3)] group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-primary/30 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Zap className="text-primary w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Chaos First</h3>
            <p className="text-slate-400 text-sm leading-relaxed">We believe the best memories are made in the heat of a 5-second decision.</p>
          </div>
          <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-accent/30 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users className="text-accent w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">True Connection</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Authenticity matters. Our game forces you to be yourself, for better or worse.</p>
          </div>
          <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-danger/30 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-danger/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Heart className="text-danger w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Harmless Fun</h3>
            <p className="text-slate-400 text-sm leading-relaxed">The roasts are brutal, but the intentions are pure. It&apos;s all in the name of friendship.</p>
          </div>
          <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-400/30 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-blue-400/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Shield className="text-blue-400 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Privacy Oriented</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Your answers are your business. We don&apos;t sell your data—we just help you sync.</p>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="text-center py-12 px-6 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
          <h2 className="text-3xl font-bold text-white mb-6">Want to get in touch?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Whether you have a question, a suggestion, or just want to tell us a hilarious game story, we&apos;re all ears.
          </p>
          <Link href="/contact" className="text-white hover:text-primary font-bold underline underline-offset-8 transition-colors">
            Contact Support
          </Link>
        </section>
      </div>
    </main>
  );
}
