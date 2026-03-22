"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import GameInterface from "@/components/GameInterface";
import { Question, getRandomQuestions, Trait } from "@/data/questions";
import { Loader2 } from "lucide-react";

export default function SinglePlayerGame() {
  const router = useRouter();
  const [gameQuestions, setGameQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Trait[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    // Generate random questions on client mount to avoid hydration mismatch
    setGameQuestions(getRandomQuestions(10));
  }, []);

  const handleAnswer = (trait: Trait) => {
    const newAnswers = [...answers, trait];
    setAnswers(newAnswers);

    if (currentIndex < gameQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      finishGame(newAnswers);
    }
  };

  const finishGame = (finalAnswers: Trait[]) => {
    setIsCalculating(true);
    setTimeout(() => {
      if (typeof window !== "undefined") {
        sessionStorage.setItem("soloAnswers", JSON.stringify(finalAnswers));
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
        question={gameQuestions[currentIndex]} 
        currentIndex={currentIndex}
        totalQuestions={gameQuestions.length}
        onAnswer={handleAnswer}
      />
    </main>
  );
}
