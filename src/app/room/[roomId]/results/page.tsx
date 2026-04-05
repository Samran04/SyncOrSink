"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { Share2, Home } from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "@/lib/AuthContext";
import { generateLocalGroupRoasts } from "@/lib/localRoast";

type MatchCategory = {
  emoji: string;
  title: string;
  desc: string[];
};

const getMatchCategory = (score: number): MatchCategory => {
  if (score >= 90) return { emoji: "🤝", title: "Soul Sync", desc: ["You both think the same... it's scary.", "Either best friends or same brain, different body."] };
  if (score >= 70) return { emoji: "😎", title: "Strong Bond", desc: ["You agree on most things... until it matters.", "Still solid though."] };
  if (score >= 40) return { emoji: "🤨", title: "Vibe-Based Friendship", desc: ["No logic, no sync... just vibes.", "Somehow it works."] };
  return { emoji: "💀", title: "Opposite Species", desc: ["You both chose opposite answers every time.", "This is not friendship... this is rivalry."] };
};

export default function MultiplayerResults() {
  const [score, setScore] = useState<number>(0);
  const [category, setCategory] = useState<MatchCategory | null>(null);
  const [roasts, setRoasts] = useState<{title: string, msg: string}[]>([]);
  const { user } = useAuth();
  
  useEffect(() => {
    if (!user) return;
    try {
      const stored = sessionStorage.getItem("multiplayerResult");
      if (stored) {
        const data = JSON.parse(stored);
        const players = Object.values(data.players) as { id: string, displayName?: string, answers: string[] }[];
        if (players.length >= 2) {
          const { questions } = data;
          const myId = user.uid;
          const me = players.find(p => p.id === myId) || players[0];
          
          const maxQuestions = questions?.length || 10;
          let myMatches = 0;
          let context = "";
          
          for (let i = 0; i < maxQuestions; i++) {
            // Find majority answer for question i
            const answerCounts: Record<string, number> = {};
            players.forEach(p => {
               const ans = p.answers[i];
               if (ans) {
                 answerCounts[ans] = (answerCounts[ans] || 0) + 1;
               }
            });
            
            // Find the highest count
            let maxCount = 0;
            let majorityAns = "";
            for (const [ans, count] of Object.entries(answerCounts)) {
              if (count > maxCount) {
                maxCount = count;
                majorityAns = ans;
              }
            }
            
            if (me.answers[i] === majorityAns) {
               myMatches++;
            }
            
            // Context building for Gemini
            if (questions && questions[i]) {
               context += `Q: "${questions[i].question}" -> `;
               players.forEach(p => {
                 if (p.answers[i]) {
                   context += `${p.displayName || 'Player'} chose ${p.answers[i]}, `;
                 }
               });
               context += "\\n";
            }
          }
          
          const finalScore = Math.round((myMatches / maxQuestions) * 100);
          setScore(finalScore);
          setCategory(getMatchCategory(finalScore));

          // Calculate roasts via Gemini API
          const gameDataString = `${players.length} Players match results context:\\n${context}`;
          
          fetch("/api/generate-roast", {
             method: "POST",
             headers: { "Content-Type": "application/json" },
             body: JSON.stringify({ gameData: gameDataString })
          }).then(r => r.json()).then(result => {
             if (result.error || (!result.groupRoast && !result.customAwards)) {
               console.warn("Roast API failed or returned empty, using local fallback:", result.detail || result.error);
               const fallbackRoasts = generateLocalGroupRoasts(players);
               setRoasts(fallbackRoasts);
               return;
             }
             const newRoasts = [];
             if (result.groupRoast) newRoasts.push({ title: "💥 Group Roast", msg: result.groupRoast });
             if (result.customAwards) {
                result.customAwards.forEach((a: { playerName: string; title: string; roast: string }) => {
                  newRoasts.push({ title: `🏆 ${a.playerName}: ${a.title}`, msg: a.roast });
                });
             } else {
                if (result.player1Award) newRoasts.push({ title: `🏆 ${players[0]?.displayName || 'P1'}: ${result.player1Award.title}`, msg: result.player1Award.roast });
                if (result.player2Award) newRoasts.push({ title: `🏆 ${players[1]?.displayName || 'P2'}: ${result.player2Award.title}`, msg: result.player2Award.roast });
             }
             setRoasts(newRoasts);
          }).catch(e => {
             console.warn("Roast fetch error, using local fallback:", e);
             const fallbackRoasts = generateLocalGroupRoasts(players);
             setRoasts(fallbackRoasts);
          });
        }
      } else {
        // Fallback for UI testing
        setScore(20);
        setCategory(getMatchCategory(20));
        setRoasts([{ title: "💀 No Data", msg: "You didn't actually play." }]);
      }
    } catch (e) {
      console.error(e);
    }
  }, [user]);

  const handleShare = async () => {
    if (navigator.share && category) {
      try {
        await navigator.share({
          title: "SyncOrSink Friendship Test",
          text: `My friendship score is ${score}% - ${category.title}! ${category.emoji}\nFind out your score:`,
          url: window.location.origin,
        });
      } catch (e) {
        console.log("Error sharing", e);
      }
    } else {
      alert("Copy this link and share with your friends: " + window.location.origin);
    }
  };

  if (!category) return null;

  return (
    <main className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-8 pb-20">
      
      <div className="space-y-2 animate-in fade-in slide-in-from-top-4 duration-700">
        <h2 className="text-xl text-primary font-bold uppercase tracking-widest">Friendship Analysis</h2>
      </div>

      <motion.div 
        initial={{ scale: 0.9, opacity: 0, rotate: 2 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
        className="relative bg-slate-800/80 border-2 border-slate-700 rounded-3xl p-8 max-w-sm w-full shadow-2xl overflow-hidden backdrop-blur-sm"
      >
        <div className="absolute top-0 left-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative z-10 flex flex-col items-center space-y-6">
          <div className="text-7xl drop-shadow-lg animate-pulse" style={{ animationDuration: '2s' }}>
            {category.emoji}
          </div>
          <div className="space-y-1">
            <div className="text-primary font-black text-5xl">{score}%</div>
            <h1 className="text-2xl font-black text-white">{category.title}</h1>
          </div>
          
          <div className="w-full h-px bg-slate-700/50"></div>
          
          <div className="space-y-4 text-slate-300 font-medium leading-relaxed">
            {category.desc.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>

          {roasts.length > 0 && (
            <div className="w-full text-left bg-slate-900/50 p-4 rounded-xl space-y-3 border border-slate-700/50">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Group Awards</h3>
              {roasts.map((r, i) => (
                <div key={i} className="space-y-1">
                  <div className="font-bold text-white text-sm">{r.title}</div>
                  <div className="text-slate-400 text-sm">{r.msg}</div>
                </div>
              ))}
            </div>
          )}

          <div className="pt-2 text-sm font-bold text-slate-500 uppercase tracking-widest">
            👉 Try this with your friends 😂
            <br />
            <span className="text-primary mt-1 inline-block">syncorsink.app</span>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 w-full max-w-sm"
      >
        <button 
          onClick={handleShare}
          className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-slate-950 font-bold py-4 px-6 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_-5px_rgba(34,197,94,0.4)]"
        >
          <Share2 className="w-5 h-5" />
          <span>Share Result</span>
        </button>
      </motion.div>

      <Link href="/" className="text-slate-500 hover:text-white flex items-center gap-2 transition-colors mt-8">
        <Home className="w-4 h-4" />
        <span>Back to Home</span>
      </Link>
    </main>
  );
}
