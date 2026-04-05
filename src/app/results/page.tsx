"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Share2, RotateCcw, Home } from "lucide-react";
import { motion } from "framer-motion";
import { generateLocalRoast } from "@/lib/localRoast";

type PersonalityResult = {
  emoji: string;
  title: string;
  roast: string[];
};

export default function ResultsPage() {
  const [result, setResult] = useState<PersonalityResult | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("soloAnswers");
    if (stored) {
      try {
        const { answers, questions } = JSON.parse(stored);
        if (answers && questions && answers.length > 0) {
          
          let gameData = "Player's answers:\\n";
          for (let i = 0; i < answers.length; i++) {
             gameData += `Q: ${questions[i].question} -> Chose: ${answers[i]}\\n`;
          }
          
          fetch("/api/generate-solo-roast", {
             method: "POST",
             headers: { "Content-Type": "application/json" },
             body: JSON.stringify({ gameData })
          }).then(r => r.json()).then(res => {
             if (res.error || !res.roast || !res.roast.length) {
               console.warn("Roast API failed or returned empty, using local roast:", res.detail || res.error);
               const localResult = generateLocalRoast(answers, questions);
               setResult(localResult);
             } else {
               setResult({
                  title: res.title,
                  emoji: res.emoji,
                  roast: res.roast
               });
             }
          }).catch(e => {
             console.warn("Roast fetch error, using local roast:", e);
             const localResult = generateLocalRoast(answers, questions);
             setResult(localResult);
          });
        }
      } catch (e) {
        console.error(e);
      }
    } else {
      setTimeout(() => {
        setResult({ title: "No Game Data", emoji: "🤡", roast: ["You didn't play.", "Go back and answer some questions first!"] });
      }, 0);
    }
  }, []);

  const handleShare = async () => {
    if (navigator.share && result) {
      try {
        await navigator.share({
          title: "SyncOrSink Friendship Test",
          text: `I just played SyncOrSink and got: ${result.emoji} ${result.title}! Try it with your friends! 😂`,
          url: window.location.origin,
        });
      } catch (e) {
        console.log("Error sharing", e);
      }
    } else {
      alert("Copy this link and share with your friends: " + window.location.origin);
    }
  };

  if (!result) return null;

  return (
    <main className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-8 pb-20">
      
      <div className="space-y-2 animate-in fade-in slide-in-from-top-4 duration-700">
        <h2 className="text-xl text-primary font-bold uppercase tracking-widest">Your Results Are In</h2>
        <p className="text-slate-400">We analyzed your 5-second panic choices.</p>
      </div>

      {/* Shareable Card */}
      <motion.div 
        ref={cardRef}
        initial={{ scale: 0.9, opacity: 0, rotate: -2 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ type: "spring", bounce: 0.5, duration: 0.8, delay: 0.2 }}
        className="relative bg-slate-800/80 border-2 border-slate-700 rounded-3xl p-8 max-w-sm w-full shadow-2xl overflow-hidden backdrop-blur-sm"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-danger/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative z-10 flex flex-col items-center space-y-6">
          <div className="text-7xl drop-shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
            {result.emoji}
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-black text-white">{result.title}</h1>
          </div>
          
          <div className="w-full h-px bg-slate-700/50"></div>
          
          <div className="space-y-4 text-slate-300 font-medium text-lg leading-relaxed">
            {result.roast.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>

          <div className="pt-4 text-sm font-bold text-slate-500 uppercase tracking-widest">
            👉 Try this with your friends 😂
            <br />
            <span className="text-primary mt-1 inline-block">syncorsink.app</span>
          </div>
        </div>
      </motion.div>

      {/* Actions */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 w-full max-w-sm"
      >
        <button 
          onClick={handleShare}
          className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-slate-950 font-bold py-4 px-6 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_-5px_rgba(34,197,94,0.4)]"
        >
          <Share2 className="w-5 h-5" />
          <span>Share Roast</span>
        </button>
        <Link 
          href="/single-player"
          className="flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-bold py-4 px-6 rounded-xl transition-all hover:scale-105 active:scale-95"
        >
          <RotateCcw className="w-5 h-5" />
          <span>Retry</span>
        </Link>
      </motion.div>

      <Link href="/" className="text-slate-500 hover:text-white flex items-center gap-2 transition-colors mt-8">
        <Home className="w-4 h-4" />
        <span>Back to Home</span>
      </Link>
    </main>
  );
}
