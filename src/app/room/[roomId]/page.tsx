"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ref, onValue, set, update, get } from "firebase/database";
import { db } from "@/lib/firebase";
import GameInterface from "@/components/GameInterface";
import { questions, getRandomQuestions, Trait } from "@/data/questions";
import { Users, Loader2, Copy } from "lucide-react";

type Player = {
  id: string;
  ready: boolean;
  answers: Trait[];
};

type RoomState = {
  status: "waiting" | "playing" | "finished";
  players: Record<string, Player>;
  currentQuestionIndex: number;
  questionIds?: number[];
};

export default function MultiplayerRoom() {
  const { roomId } = useParams() as { roomId: string };
  const router = useRouter();
  
  const [roomData, setRoomData] = useState<RoomState | null>(null);
  const [playerId, setPlayerId] = useState<string>("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Basic local session to remember who we are in this room
    let pid = sessionStorage.getItem(`playerId_${roomId}`);
    if (!pid) {
      pid = `player_${Math.random().toString(36).substring(2, 9)}`;
      sessionStorage.setItem(`playerId_${roomId}`, pid);
    }
    setPlayerId(pid);

    const roomRef = ref(db, `rooms/${roomId}`);
    
    // Join logic
    get(roomRef).then((snapshot) => {
      if (!snapshot.exists()) {
        // Create room
        set(roomRef, {
          status: "waiting",
          currentQuestionIndex: 0,
          questionIds: getRandomQuestions(10).map(q => q.id),
          players: {
            [pid!]: { id: pid, ready: false, answers: [] }
          }
        });
      } else {
        // Join existing
        const data = snapshot.val() as RoomState;
        if (!data.players[pid!] && Object.keys(data.players || {}).length >= 2) {
          alert("Room is full!");
          router.push("/multiplayer");
          return;
        }
        
        if (!data.players[pid!]) {
          update(ref(db, `rooms/${roomId}/players`), {
            [pid!]: { id: pid, ready: false, answers: [] }
          });
        }
      }
    });

    const unsubscribe = onValue(roomRef, (snapshot) => {
      const data = snapshot.val() as RoomState;
      if (data) {
        setRoomData(data);
        
        // Auto-start game if 2 players are both ready
        const playersList = Object.values(data.players || {});
        if (data.status === "waiting" && playersList.length === 2 && playersList.every(p => p.ready)) {
          update(ref(db, `rooms/${roomId}`), { status: "playing" });
        }
        
        // Next question logic if both answered
        if (data.status === "playing") {
          const currentIdx = data.currentQuestionIndex;
          const totalQ = data.questionIds ? data.questionIds.length : 10;
          const bothAnswered = playersList.every(p => p.answers && p.answers.length > currentIdx);
          
          if (bothAnswered) {
            if (currentIdx < totalQ - 1) {
              // Wait 1 second before moving to next question
              setTimeout(() => {
                update(ref(db, `rooms/${roomId}`), { currentQuestionIndex: currentIdx + 1 });
              }, 1000);
            } else {
              // Finished
              update(ref(db, `rooms/${roomId}`), { status: "finished" });
              // Push to comparison results
              setTimeout(() => {
                // Save room data to session storage to pass to results
                sessionStorage.setItem("multiplayerResult", JSON.stringify(data));
                router.push(`/room/${roomId}/results`);
              }, 1500);
            }
          }
        }
      }
    });

    return () => unsubscribe();
  }, [roomId, router]);

  const handleCopy = () => {
    navigator.clipboard.writeText(roomId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReady = () => {
    update(ref(db, `rooms/${roomId}/players/${playerId}`), { ready: true });
  };

  const handleAnswer = (trait: Trait) => {
    if (!roomData) return;
    const myAnswers = roomData.players[playerId]?.answers || [];
    
    // Only answer if we haven't answered this question yet
    if (myAnswers.length === roomData.currentQuestionIndex) {
      const newAnswers = [...myAnswers, trait];
      update(ref(db, `rooms/${roomId}/players/${playerId}`), { answers: newAnswers });
    }
  };

  if (!roomData || !playerId) {
    return (
      <main className="flex-1 flex items-center justify-center p-6">
        <Loader2 className="w-12 h-12 text-primary animate-spin" />
      </main>
    );
  }

  const players = Object.values(roomData.players || {});
  const me = roomData.players[playerId];
  const isOpponentReady = players.find(p => p.id !== playerId)?.ready;

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
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">You</div>
                <span className="text-white font-medium">Player 1</span>
              </div>
              <span className={`text-sm font-bold ${me?.ready ? 'text-primary' : 'text-slate-500'}`}>
                {me?.ready ? "READY" : "WAITING"}
              </span>
            </div>

            {players.length > 1 ? (
              <div className="flex items-center justify-between p-4 bg-slate-900 rounded-xl border border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold">P2</div>
                  <span className="text-white font-medium">Player 2</span>
                </div>
                <span className={`text-sm font-bold ${isOpponentReady ? 'text-primary' : 'text-slate-500'}`}>
                  {isOpponentReady ? "READY" : "WAITING"}
                </span>
              </div>
            ) : (
              <div className="flex items-center justify-center p-4 bg-slate-900/50 border border-slate-800 border-dashed rounded-xl h-[74px]">
                <span className="text-slate-500 animate-pulse flex items-center gap-2"><Loader2 className="w-4 h-4 animate-spin" /> Waiting for friend...</span>
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
  const totalQ = roomData.questionIds ? roomData.questionIds.length : 10;
  
  const currentQId = roomData.questionIds?.[currentIdx];
  const q = currentQId ? questions.find(q => q.id === currentQId) || questions[currentIdx] : questions[currentIdx];

  if (waitingForOpponent) {
    return (
      <main className="flex-1 flex flex-col items-center justify-center p-6 space-y-6 text-center">
        <Loader2 className="w-12 h-12 text-secondary animate-spin" />
        <h2 className="text-2xl font-bold text-white">Waiting for opponent...</h2>
        <p className="text-slate-400">They're probably overthinking it.</p>
      </main>
    );
  }

  return (
    <main className="flex-1 flex flex-col justify-center p-4">
      <GameInterface 
        question={q} 
        currentIndex={currentIdx}
        totalQuestions={totalQ}
        onAnswer={handleAnswer}
      />
    </main>
  );
}
