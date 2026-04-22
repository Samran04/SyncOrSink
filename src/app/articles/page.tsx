import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Friendship Guides & Articles | SyncOrSink",
  description: "Read our latest articles on friendship dynamics, icebreakers, and how to host the perfect game night with SyncOrSink.",
};

const articles = [
  {
    slug: "why-would-you-rather-games-matter",
    title: "Why 'Would You Rather' is the Ultimate Friendship Test",
    excerpt: "Discover the psychology behind rapid-fire decision making and why these simple questions reveal so much about your compatibility.",
    date: "April 12, 2026",
    readTime: "5 min read",
    tag: "Psychology",
    color: "primary"
  },
  {
    slug: "5-fun-icebreaker-games",
    title: "5 Fun Icebreaker Games for Your Next Virtual Hangout",
    excerpt: "Stop asking 'what did you do today?' and start playing games that actually build connections.",
    date: "April 22, 2026",
    readTime: "6 min read",
    tag: "Social",
    color: "accent"
  },
  {
    slug: "psychology-of-choice",
    title: "The Psychology of Choice: Why Some Options Are Impossible",
    excerpt: "Understanding the mental tug-of-war that happens during a 10-second countdown.",
    date: "April 22, 2026",
    readTime: "7 min read",
    tag: "Psychology",
    color: "danger"
  },
  {
    slug: "humor-and-compatibility",
    title: "Humor and Compatibility: Why Shared Laughter is the Best Sync",
    excerpt: "If you can laugh together at a 10-second panic choice, you can survive anything.",
    date: "April 22, 2026",
    readTime: "5 min read",
    tag: "Relationships",
    color: "accent"
  },
  {
    slug: "host-perfect-game-night",
    title: "How to Host the Perfect Digital Game Night",
    excerpt: "Flawless execution, zero technical difficulties, and maximum chaos. Let's build a night to remember.",
    date: "April 22, 2026",
    readTime: "6 min read",
    tag: "Guide",
    color: "primary"
  },
  {
    slug: "test-your-friendship-online",
    title: "How to Test Your Friendship Score Online (Properly)",
    excerpt: "A guide on using SyncOrSink to find out if your friend group is 'Soul Sync' or simply 'Opposite Species'.",
    date: "April 10, 2026",
    readTime: "4 min read",
    tag: "Gaming",
    color: "accent"
  }
];

export default function ArticlesHub() {
  return (
    <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        {/* Header */}
        <div className="space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>The Syncer&apos;s Journal</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight">
            Friendship <span className="text-accent">Guides</span> & <span className="text-danger">Articles</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Deep dives into friendship dynamics, game night tips, and the science of the roast.
          </p>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <Link 
              key={article.slug} 
              href={`/articles/${article.slug}`}
              className="group relative flex flex-col p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-primary/50 transition-all hover:scale-[1.02] overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <BookOpen className="w-24 h-24" />
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-${article.color}/10 text-${article.color} border border-${article.color}/20`}>
                  {article.tag}
                </span>
                <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTime}
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors leading-tight">
                {article.title}
              </h2>
              
              <p className="text-slate-400 mb-8 leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>

              <div className="mt-auto flex items-center justify-between">
                <span className="text-slate-500 text-sm">{article.date}</span>
                <div className="flex items-center gap-2 text-primary font-bold group-hover:translate-x-2 transition-transform">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter / CTA */}
        <section className="p-12 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 text-center space-y-6">
          <h3 className="text-2xl font-bold text-white">Never miss a roast.</h3>
          <p className="text-slate-400 max-w-md mx-auto">
            Stay updated with new questions, game modes, and the best friendship guides.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
            />
            <button className="bg-primary hover:bg-primary/90 text-slate-950 font-bold px-6 py-3 rounded-xl transition-all">
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
