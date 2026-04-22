"use client";

import { useEffect, useState } from "react";
import { Question } from "@/data/questions";
import { Timer as TimerIcon } from "lucide-react";
import { motion } from "framer-motion";

interface GameInterfaceProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  onAnswer: (answer: string) => void;
  timeLimit?: number;
}

export default function GameInterface({
  question,
  currentIndex,
  totalQuestions,
  onAnswer,
  timeLimit = 10
}: GameInterfaceProps) {
  const [timeLeft, setTimeLeft] = useState(timeLimit);

  // Only runs the countdown interval. The component is re-keyed by the parent
  // on each question change (key={currentIndex}), so useState(timeLimit) reinitializes
  // automatically — no need to call setTimeLeft(timeLimit) here.
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0.1) {
          clearInterval(timer);
          onAnswer("Skipped (Ran out of time)");
          return 0;
        }
        return prev - 0.1;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onAnswer]);

  const progressPercentage = (timeLeft / timeLimit) * 100;

  if (!question) return null;

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col h-full justify-between items-center py-8 space-y-8">
      {/* Header / Progress */}
      <div className="w-full space-y-4">
        <div className="flex justify-between items-center text-slate-400 font-bold px-2">
          <span>Question {currentIndex + 1} of {totalQuestions}</span>
          <div className="flex items-center gap-2 text-danger">
            <TimerIcon className="w-5 h-5 animate-pulse" />
            <span className="tabular-nums">{Math.ceil(timeLeft)}s</span>
          </div>
        </div>
        
        {/* Timer Bar */}
        <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-primary"
            initial={{ width: "100%" }}
            animate={{ width: `${progressPercentage}%`, backgroundColor: progressPercentage < 30 ? "#EF4444" : "#22C55E" }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </div>

      {/* Question Text */}
      <div className="flex-1 flex items-center justify-center text-center px-4 w-full">
        <motion.h2 
          key={question.question}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="text-3xl md:text-5xl font-black text-white leading-tight break-words"
        >
          {question.question}
        </motion.h2>
      </div>

      {/* Options */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <OptionButton 
          text={question.optionA} 
          onClick={() => onAnswer(question.optionA)}
          colorClass="bg-secondary/20 border-secondary text-blue-100 hover:bg-secondary hover:text-white shadow-[0_0_15px_-5px_rgba(59,130,246,0.3)]"
          delay={0.1}
        />
        <OptionButton 
          text={question.optionB} 
          onClick={() => onAnswer(question.optionB)}
          colorClass="bg-accent/20 border-accent text-yellow-100 hover:bg-[#EAB308] hover:text-slate-900 shadow-[0_0_15px_-5px_rgba(250,204,21,0.3)]"
          delay={0.2}
        />
      </div>
    </div>
  );
}

function OptionButton({ text, onClick, colorClass, delay }: { text: string, onClick: () => void, colorClass: string, delay: number }) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      onClick={onClick}
      className={`relative w-full p-8 rounded-2xl border-2 font-bold text-xl md:text-2xl transition-all active:scale-95 group overflow-hidden ${colorClass}`}
    >
      <span className="relative z-10">{text}</span>
      <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
    </motion.button>
  );
}

