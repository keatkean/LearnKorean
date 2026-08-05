"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Syllable, getAllSyllableList } from '@/lib/hangulData';
import { Translations } from '@/lib/i18n';
import { X, Volume2, Trophy, CheckCircle2, XCircle, Sparkles } from 'lucide-react';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSpeak: (text: string) => void;
  t: Translations;
}

export const QuizModal: React.FC<QuizModalProps> = ({
  isOpen,
  onClose,
  onSpeak,
  t,
}) => {
  const [allSyllables] = useState<Syllable[]>(() => getAllSyllableList());
  const [target, setTarget] = useState<Syllable | null>(null);
  const [options, setOptions] = useState<Syllable[]>([]);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const audioTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearPendingTimeouts = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (audioTimeoutRef.current) clearTimeout(audioTimeoutRef.current);
  };

  const generateQuestion = () => {
    setSelectedAnswer(null);
    setIsCorrect(null);

    const randomTarget = allSyllables[Math.floor(Math.random() * allSyllables.length)];
    setTarget(randomTarget);

    const wrongChoices: Syllable[] = [];
    while (wrongChoices.length < 3) {
      const choice = allSyllables[Math.floor(Math.random() * allSyllables.length)];
      if (choice.char !== randomTarget.char && !wrongChoices.some((w) => w.char === choice.char)) {
        wrongChoices.push(choice);
      }
    }

    const combined = [randomTarget, ...wrongChoices].sort(() => Math.random() - 0.5);
    setOptions(combined);

    audioTimeoutRef.current = setTimeout(() => {
      onSpeak(randomTarget.char);
    }, 150);
  };

  useEffect(() => {
    if (isOpen) {
      setScore(0);
      setStreak(0);
      generateQuestion();
    } else {
      clearPendingTimeouts();
    }

    return () => {
      clearPendingTimeouts();
    };
  }, [isOpen]);

  if (!isOpen || !target) return null;

  const handleCloseModal = () => {
    clearPendingTimeouts();
    onClose();
  };

  const handleOptionClick = (option: Syllable) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(option.char);
    const correct = option.char === target.char;
    setIsCorrect(correct);

    if (correct) {
      setScore((prev) => prev + 10);
      setStreak((prev) => prev + 1);
    } else {
      setStreak(0);
    }

    timeoutRef.current = setTimeout(() => {
      generateQuestion();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-3xl p-6 max-w-md w-full shadow-2xl relative flex flex-col items-center">
        
        {/* Header */}
        <div className="w-full flex items-center justify-between border-b border-slate-100 dark:border-gray-800 pb-3">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-slate-800 dark:text-gray-100 flex items-center gap-1.5">
              <span>{t.qzTitle}</span>
            </h2>
          </div>
          <button
            onClick={handleCloseModal}
            className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-gray-200 rounded-full hover:bg-slate-100 dark:hover:bg-gray-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scoreboard */}
        <div className="w-full flex items-center justify-between my-3 bg-slate-50 dark:bg-gray-800 p-2.5 rounded-2xl border border-slate-200 dark:border-gray-700 text-xs font-semibold">
          <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
            <Trophy className="w-4 h-4" />
            <span>{t.qzScore}: {score}</span>
          </div>
          <div className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400">
            <Sparkles className="w-4 h-4" />
            <span>{t.qzStreak}: {streak} 🔥</span>
          </div>
        </div>

        {/* Audio Replay Prompt */}
        <div className="my-4 flex flex-col items-center">
          <button
            onClick={() => onSpeak(target.char)}
            className="w-24 h-24 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all group"
            title="Click to replay sound"
          >
            <Volume2 className="w-12 h-12 group-hover:animate-bounce" />
          </button>
          <p className="text-xs text-slate-500 dark:text-gray-400 mt-3 font-medium text-center">
            {t.qzPrompt}
          </p>
        </div>

        {/* Answer Options Grid */}
        <div className="grid grid-cols-2 gap-3 w-full my-2">
          {options.map((opt) => {
            const isSelected = selectedAnswer === opt.char;
            const isTargetChoice = opt.char === target.char;

            let btnStyle =
              'p-4 rounded-2xl border-2 text-center transition-all flex flex-col items-center justify-center cursor-pointer select-none ';

            if (selectedAnswer !== null) {
              if (isTargetChoice) {
                btnStyle += 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-700 dark:text-emerald-300 font-bold scale-105 ';
              } else if (isSelected && !isCorrect) {
                btnStyle += 'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-700 dark:text-rose-300 font-bold ';
              } else {
                btnStyle += 'bg-slate-50 dark:bg-gray-800 border-slate-200 dark:border-gray-700 opacity-50 ';
              }
            } else {
              btnStyle +=
                'bg-white dark:bg-gray-800 border-slate-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-400 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/30 text-slate-800 dark:text-gray-100 font-bold hover:scale-102 ';
            }

            return (
              <button
                key={opt.char}
                onClick={() => handleOptionClick(opt)}
                disabled={selectedAnswer !== null}
                className={btnStyle}
              >
                <span className="text-3xl font-extrabold font-sans">{opt.char}</span>
                <span className="text-xs text-rose-500 mt-1 font-semibold">({opt.rom})</span>
              </button>
            );
          })}
        </div>

        {/* Feedback Message */}
        <div className="h-8 mt-2 flex items-center justify-center text-sm font-bold">
          {isCorrect === true && (
            <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1 animate-bounce">
              <CheckCircle2 className="w-5 h-5" /> {t.qzCorrect}
            </span>
          )}
          {isCorrect === false && (
            <span className="text-rose-600 dark:text-rose-400 flex items-center gap-1">
              <XCircle className="w-5 h-5" /> {t.qzIncorrect} {target.char} [{target.rom}]
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
