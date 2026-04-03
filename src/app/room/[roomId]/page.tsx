"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { ref, onValue, set, update, get } from "firebase/database";
import { db } from "@/lib/firebase";
import { useAuth } from "@/lib/AuthContext";
import GameInterface from "@/components/GameInterface";
import { Question, getRandomFallbackQuestions } from "@/data/questions";
import { Users, Loader2, Copy } from "lucide-react";

type Player = {
  id: string;
  displayName?: string;
  ready: boolean;
  answers: string[];
};

type RoomState = {
  status: "waiting" | "playing" | "finished";
  players: Record<string, Player>;
  currentQuestionIndex: number;
  questions?: Question[];
};

export default function MultiplayerRoom() {
  const { roomId } = useParams() as { roomId: string };
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, loading: authLoading } = useAuth();
  
  const [roomData, setRoomData] = useState<RoomState | null>(null);
  const [copied, setCopied] = useState(false);
  const [showAd, setShowAd] = useState(false);

  // Use Firebase Auth UID as player ID
  const playerId = user?.uid || "";

  useEffect(() => {
    if (authLoading || !playerId) return;

    const roomRef = ref(db, `rooms/${roomId}`);
    
    // Join logic
    get(roomRef).then(async (snapshot) => {
      if (!snapshot.exists()) {
        const vibe = searchParams.get("vibe") || "Gen Z Chaos";
        let aiQuestions = getRandomFallbackQuestions(10);
        try {
          const res = await fetch("/api/generate-questions", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ vibe })
          });
          if (res.ok) {
            aiQuestions = await res.json();
          }
        } catch(e) { console.error("Error fetching AI questions", e); }

        // Create room
        set(roomRef, {
          status: "waiting",
          currentQuestionIndex: 0,
          questions: aiQuestions,
          players: {
            [playerId]: {
              id: playerId,
              displayName: user?.displayName || "Player 1",
              ready: false,
              answers: []
            }
          }
        });
      } else {
        // Join existing
        const data = snapshot.val() as RoomState;
        if (!data.players[playerId] && (Object.keys(data.players || {}).length >= 10 || data.status !== "waiting")) {
          alert(data.status !== "waiting" ? "Game already started!" : "Room is full!");
          router.push("/multiplayer");
          return;
        }
        
        if (!data.players[playerId]) {
          const currentCount = Object.keys(data.players || {}).length;
          update(ref(db, `rooms/${roomId}/players`), {
            [playerId]: {
              id: playerId,
              displayName: user?.displayName || `Player ${currentCount + 1}`,
              ready: false,
              answers: []
            }
          });
        }
      }
    });

    const unsubscribe = onValue(roomRef, (snapshot) => {
      const data = snapshot.val() as RoomState;
      if (data) {
        setRoomData(data);
        
        // Auto-start game if all players are ready (min 2)
        const playersList = Object.values(data.players || {});
        if (data.status === "waiting" && playersList.length >= 2 && playersList.every(p => p.ready)) {
          update(ref(db, `rooms/${roomId}`), { status: "playing" });
        }
        
        // Next question logic if both answered
        if (data.status === "playing") {
          const currentIdx = data.currentQuestionIndex;
          const totalQ = data.questions ? data.questions.length : 10;
          const bothAnswered = playersList.every(p => p.answers && p.answers.length > currentIdx);
          
          if (bothAnswered) {
            if (currentIdx < totalQ - 1) {
              setTimeout(() => {
                update(ref(db, `rooms/${roomId}`), { currentQuestionIndex: currentIdx + 1 });
              }, 1000);
            } else {
              // Finished
              update(ref(db, `rooms/${roomId}`), { status: "finished" });
              
              const gamesPlayed = parseInt(localStorage.getItem("gamesPlayed") || "0") + 1;
              localStorage.setItem("gamesPlayed", gamesPlayed.toString());

              setTimeout(() => {
                sessionStorage.setItem("multiplayerResult", JSON.stringify(data));
                
                if (gamesPlayed % 2 === 0) {
                  setShowAd(true);
                } else {
                  router.push(`/room/${roomId}/results`);
                }
              }, 1500);
            }
          }
        }
      }
    });

    return () => unsubscribe();
  }, [roomId, router, playerId, authLoading, user?.displayName, searchParams]);

  // Sync display name if user edits it while in room
  useEffect(() => {
    if (playerId && user?.displayName && roomData?.players[playerId]) {
      if (roomData.players[playerId].displayName !== user.displayName) {
        update(ref(db, `rooms/${roomId}/players/${playerId}`), {
          displayName: user.displayName,
        });
      }
    }
  }, [user?.displayName, playerId, roomId, roomData?.players]);

  const handleCopy = () => {
    navigator.clipboard.writeText(roomId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReady = () => {
    update(ref(db, `rooms/${roomId}/players/${playerId}`), { ready: true });
  };

  const handleAnswer = (answer: string) => {
    if (!roomData) return;
    const myAnswers = roomData.players[playerId]?.answers || [];
    
    if (myAnswers.length === roomData.currentQuestionIndex) {
      const newAnswers = [...myAnswers, answer];
      update(ref(db, `rooms/${roomId}/players/${playerId}`), { answers: newAnswers });
    }
  };

  if (showAd) {
    return (
      <main className="fixed inset-0 z-[100] bg-black text-white flex flex-col items-center justify-center p-6 space-y-6">
        <div className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-2 px-3 py-1 bg-slate-900 border border-slate-700/50 rounded-full">
          Advertisement
        </div>
        
        {/* Placeholder Ad Content */}
        <div className="w-full max-w-lg aspect-video bg-neutral-900 border border-neutral-800 rounded-2xl flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
            <span className="text-neutral-500 font-bold tracking-widest">[ GOOGLE AD SPACE ]</span>
        </div>

        <button 
          onClick={() => router.push(`/room/${roomId}/results`)}
          className="mt-8 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all"
        >
          Skip Ad & See Results
        </button>
      </main>
    );
  }

  // Loading states
  if (authLoading) {
    return (
      <main className="flex-1 flex flex-col items-center justify-center p-6 space-y-4">
        <Loader2 className="w-12 h-12 text-primary animate-spin" />
        <p className="text-slate-400 font-medium">Signing you in...</p>
      </main>
    );
  }

  if (!roomData || !playerId) {
    return (
      <main className="flex-1 flex items-center justify-center p-6">
        <Loader2 className="w-12 h-12 text-primary animate-spin" />
      </main>
    );
  }

  const players = Object.values(roomData.players || {});
  const me = roomData.players[playerId];
  const opponent = players.find(p => p.id !== playerId);
  const isOpponentReady = opponent?.ready;

  if (roomData.status === "waiting") {
    return (
      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-8">
        <div className="bg-slate-800/80 border border-slate-700 p-8 rounded-3xl w-full max-w-md space-y-6">
          <div className="space-y-2">
            <h2 className="text-slate-400 font-bold uppercase tracking-widest text-sm">Room Code</h2>
            <div 
              onClick={handleCopy}
              className="group flex flex-col sm:flex-row items-center justify-center gap-4 bg-slate-900 border border-slate-700 py-4 px-6 rounded-xl cursor-pointer hover:border-primary transition-colors"
            >
              <span className="text-4xl font-mono font-black tracking-widest text-white group-hover:text-primary transition-colors">{roomId}</span>
              <div className="flex items-center gap-2 text-sm text-slate-500 group-hover:text-primary">
                <Copy className="w-4 h-4" />
                <span>{copied ? "Copied!" : "Copy"}</span>
              </div>
            </div>
          </div>

          <div className="pt-4 space-y-4">
            <div className="flex items-center justify-between p-4 bg-slate-900 rounded-xl border border-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">You</div>
                <span className="text-white font-medium truncate max-w-[120px]">
                  {me?.displayName || "Player 1"}
                </span>
              </div>
              <span className={`text-sm font-bold ${me?.ready ? 'text-primary' : 'text-slate-500'}`}>
                {me?.ready ? "READY" : "WAITING"}
              </span>
            </div>

            {players.filter(p => p.id !== playerId).map((p, i) => (
              <div key={p.id} className="flex items-center justify-between p-4 bg-slate-900 rounded-xl border border-slate-700">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${i % 2 === 0 ? 'bg-secondary/20 text-secondary' : 'bg-purple-500/20 text-purple-400'}`}>
                    P{i + 2}
                  </div>
                  <span className="text-white font-medium truncate max-w-[120px]">
                    {p.displayName || `Player ${i + 2}`}
                  </span>
                </div>
                <span className={`text-sm font-bold ${p.ready ? 'text-primary' : 'text-slate-500'}`}>
                  {p.ready ? "READY" : "WAITING"}
                </span>
              </div>
            ))}

            {players.length < 10 && (
              <div className="flex items-center justify-center p-4 bg-slate-900/50 border border-slate-800 border-dashed rounded-xl h-[74px]">
                <span className="text-slate-500 animate-pulse flex items-center gap-2"><Loader2 className="w-4 h-4 animate-spin" /> Waiting for friends...</span>
              </div>
            )}
          </div>

          <button 
            onClick={handleReady}
            disabled={me?.ready || players.length < 2}
            className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:hover:bg-primary text-slate-950 font-bold py-4 rounded-xl mt-4 transition-all active:scale-95 text-lg"
          >
            {me?.ready ? "Waiting for other player..." : "I'm Ready"}
          </button>
        </div>
      </main>
    );
  }

  // Finished state
  if (roomData.status === "finished") {
    return (
      <main className="flex-1 flex flex-col items-center justify-center p-6 space-y-6 text-center">
        <Loader2 className="w-12 h-12 text-primary animate-spin" />
        <h2 className="text-3xl font-bold text-white">Match Complete!</h2>
        <p className="text-slate-400">Calculating your Friendship Score...</p>
      </main>
    );
  }

  // Playing state
  const currentIdx = roomData.currentQuestionIndex;
  const waitingForOpponent = (me?.answers?.length || 0) > currentIdx;
  const totalQ = roomData.questions ? roomData.questions.length : 10;
  
  const q = roomData.questions?.[currentIdx];

  if (waitingForOpponent) {
    return (
      <main className="flex-1 flex flex-col items-center justify-center p-6 space-y-6 text-center">
        <Loader2 className="w-12 h-12 text-secondary animate-spin" />
        <h2 className="text-2xl font-bold text-white">Waiting for opponent...</h2>
        <p className="text-slate-400">They&apos;re probably overthinking it.</p>
      </main>
    );
  }

  return (
    <main className="flex-1 flex flex-col justify-center p-4">
      <GameInterface 
        question={q!} 
        currentIndex={currentIdx}
        totalQuestions={totalQ}
        onAnswer={handleAnswer}
      />
    </main>
  );
}
