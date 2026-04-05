"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import GameInterface from "@/components/GameInterface";
import { Question, getRandomFallbackQuestions } from "@/data/questions";
import { Loader2 } from "lucide-react";

export default function SinglePlayerGame() {
  const router = useRouter();
  // Pick 10 random questions from the 100+ static pool on mount
  const [gameQuestions] = useState<Question[]>(() => getRandomFallbackQuestions(10));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentIndex < gameQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      finishGame(newAnswers);
    }
  };

  const finishGame = (finalAnswers: string[]) => {
    setIsCalculating(true);
    setTimeout(() => {
      if (typeof window !== "undefined") {
        sessionStorage.setItem("soloAnswers", JSON.stringify({ answers: finalAnswers, questions: gameQuestions }));
        router.push("/results");
      }
    }, 1500);
  };

  if (gameQuestions.length === 0 || isCalculating) {
    return (
      <main className="flex-1 flex flex-col items-center justify-center p-6 space-y-6">
        <Loader2 className="w-12 h-12 text-primary animate-spin" />
        <h2 className="text-2xl font-bold text-white animate-pulse">
          {isCalculating ? "Calculating your true self..." : "Loading questions..."}
        </h2>
      </main>
    );
  }

  return (
    <main className="flex-1 flex flex-col justify-center p-4">
      <GameInterface 
        key={currentIndex}
        question={gameQuestions[currentIndex]} 
        currentIndex={currentIndex}
        totalQuestions={gameQuestions.length}
        onAnswer={handleAnswer}
      />
    </main>
  );
}
