import Link from "next/link";
import { Users, User } from "lucide-react";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "name": "SyncOrSink",
      "alternateName": ["Sync or Sink", "Sync Or Sink Game", "SyncOrSink Game"],
      "url": "https://syncorsink.app",
      "description": "SyncOrSink is the ultimate free online friendship test game. Answer 'would you rather' questions in 5 seconds with friends, get brutally roasted, and discover your friendship score.",
      "applicationCategory": "GameApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "author": {
        "@type": "Person",
        "name": "Muhammad Samran",
        "url": "https://muhammadsamran.netlify.app/"
      },
      "browserRequirements": "Requires JavaScript. Requires HTML5.",
      "softwareVersion": "1.0",
      "genre": ["Quiz", "Party Game", "Friendship Test"],
      "inLanguage": "en"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is SyncOrSink?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SyncOrSink is a free online friendship test game where you and your friends answer 'would you rather' questions under 5-second time pressure. Based on how similarly (or differently) you answer, you get a friendship sync score and a brutally funny roast of your combined choices."
          }
        },
        {
          "@type": "Question",
          "name": "How do you play Sync or Sink?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Playing is easy! Start a multiplayer room and share the room code with a friend. Both of you answer 10 'would you rather' questions with only 5 seconds per question. At the end, SyncOrSink compares your answers and gives you a sync score plus a personality roast. You can also play solo to discover your own chaotic personality!"
          }
        },
        {
          "@type": "Question",
          "name": "Is SyncOrSink free to play?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! SyncOrSink is completely free to play. No downloads, no sign-ups required — just open the website and start playing with your friends instantly."
          }
        },
        {
          "@type": "Question",
          "name": "Can I play SyncOrSink alone?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! SyncOrSink offers a Solo Practice mode where you answer 10 rapid-fire questions to reveal your true chaotic personality and get roasted — no friends needed!"
          }
        },
        {
          "@type": "Question",
          "name": "How many questions are in SyncOrSink?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Each game round has 10 randomly selected 'would you rather' questions from a pool of 20+ unique questions. The random selection means every game feels different!"
          }
        }
      ]
    }
  ]
};

export default function LandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-1 flex flex-col items-center p-6 text-center">
        {/* Hero Section */}
        <section className="flex-1 flex flex-col items-center justify-center space-y-12 max-w-4xl">
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
              <span>Solo Practice Test</span>
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
        </section>

        {/* How It Works - SEO Section */}
        <section className="w-full max-w-4xl pt-24 pb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-12">
            How to Play <span className="text-primary">Sync</span><span className="text-accent">Or</span><span className="text-danger">Sink</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-3xl font-black text-primary">1</div>
              <h3 className="text-xl font-bold text-white">Create or Join a Room</h3>
              <p className="text-slate-400">Start a new multiplayer room and share the code with your friend, or enter their code to join. It takes 2 seconds!</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-3xl font-black text-accent">2</div>
              <h3 className="text-xl font-bold text-white">Answer 10 Questions in 5 Seconds</h3>
              <p className="text-slate-400">Both players answer the same &ldquo;would you rather&rdquo; questions with a 5-second timer. No overthinking allowed!</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-danger/10 border border-danger/20 flex items-center justify-center text-3xl font-black text-danger">3</div>
              <h3 className="text-xl font-bold text-white">Get Roasted & Scored</h3>
              <p className="text-slate-400">See your sync score, get a hilarious personality roast, and share the results with your friends!</p>
            </div>
          </div>
        </section>

        {/* FAQ Section - SEO Structured Content */}
        <section className="w-full max-w-3xl py-12">
          <h2 className="text-3xl font-black text-white text-center mb-8">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4 text-left">
            <details className="group bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-white text-lg hover:bg-slate-800/80 transition-colors">
                What is SyncOrSink?
                <span className="text-primary ml-4 group-open:rotate-45 transition-transform text-2xl">+</span>
              </summary>
              <div className="px-6 pb-6 text-slate-400 leading-relaxed">
                SyncOrSink is a free online friendship test game where you and your friends answer &ldquo;would you rather&rdquo; questions under 5-second time pressure. Based on how similarly (or differently) you answer, you get a friendship sync score and a brutally funny roast of your combined choices.
              </div>
            </details>

            <details className="group bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-white text-lg hover:bg-slate-800/80 transition-colors">
                How do you play Sync or Sink?
                <span className="text-primary ml-4 group-open:rotate-45 transition-transform text-2xl">+</span>
              </summary>
              <div className="px-6 pb-6 text-slate-400 leading-relaxed">
                Playing is easy! Start a multiplayer room and share the room code with a friend. Both of you answer 10 &ldquo;would you rather&rdquo; questions with only 5 seconds per question. At the end, SyncOrSink compares your answers and gives you a sync score plus a personality roast. You can also play solo to discover your own chaotic personality!
              </div>
            </details>

            <details className="group bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-white text-lg hover:bg-slate-800/80 transition-colors">
                Is SyncOrSink free to play?
                <span className="text-primary ml-4 group-open:rotate-45 transition-transform text-2xl">+</span>
              </summary>
              <div className="px-6 pb-6 text-slate-400 leading-relaxed">
                Yes! SyncOrSink is completely free to play. No downloads, no sign-ups required — just open the website and start playing with your friends instantly.
              </div>
            </details>

            <details className="group bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-white text-lg hover:bg-slate-800/80 transition-colors">
                Can I play SyncOrSink alone?
                <span className="text-primary ml-4 group-open:rotate-45 transition-transform text-2xl">+</span>
              </summary>
              <div className="px-6 pb-6 text-slate-400 leading-relaxed">
                Absolutely! SyncOrSink offers a Solo Practice mode where you answer 10 rapid-fire questions to reveal your true chaotic personality and get roasted — no friends needed!
              </div>
            </details>

            <details className="group bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-white text-lg hover:bg-slate-800/80 transition-colors">
                How many questions are in SyncOrSink?
                <span className="text-primary ml-4 group-open:rotate-45 transition-transform text-2xl">+</span>
              </summary>
              <div className="px-6 pb-6 text-slate-400 leading-relaxed">
                Each game round has 10 randomly selected &ldquo;would you rather&rdquo; questions from a pool of 20+ unique questions. The random selection means every game feels different!
              </div>
            </details>
          </div>
        </section>

        {/* Creator Credit */}
        <div className="pt-4 pb-8 text-sm text-slate-600 animate-in fade-in duration-1000 delay-500 fill-mode-both">
          Made with ❤️ by{" "}
          <a
            href="https://muhammadsamran.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-primary font-semibold transition-colors underline underline-offset-4"
          >
            Muhammad Samran
          </a>
        </div>
      </main>
    </>
  );
}
