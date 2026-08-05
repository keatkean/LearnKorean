"use client";

import React, { useState, useEffect, useRef } from 'react';
import { VIRTUAL_KEYBOARD_LAYOUT, DUBEOLSIK_MAP, mapKeyToHangul } from '@/lib/dubeolsikMap';
import { Keyboard, Trophy, RotateCcw, X, Volume2, Flame } from 'lucide-react';
import { Translations } from '@/lib/i18n';

interface TypingGameModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSpeak: (text: string) => void;
  t: Translations;
}

const SAMPLE_WORDS = ['가', '나', '다', '라', '마', '바', '사', '아', '자', '차', '카', '타', '파', '하', '고', '노', '도', '로', '모', '보', '소', '오', '조', '초'];

export const TypingGameModal: React.FC<TypingGameModalProps> = ({
  isOpen,
  onClose,
  onSpeak,
  t,
}) => {
  const [targetWord, setTargetWord] = useState<string>('가');
  const [userInput, setUserInput] = useState<string>('');
  const [score, setScore] = useState<number>(0);
  const [highScore, setHighScore] = useState<number>(0);
  const [pressedKey, setPressedKey] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('learn_korean_typing_highscore');
      if (saved) setHighScore(parseInt(saved, 10));
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setUserInput(val);

    if (val === targetWord) {
      onSpeak(targetWord);
      const newScore = score + 10;
      setScore(newScore);
      if (newScore > highScore) {
        setHighScore(newScore);
        if (typeof window !== 'undefined') {
          localStorage.setItem('learn_korean_typing_highscore', newScore.toString());
        }
      }
      setUserInput('');
      const nextWord = SAMPLE_WORDS[Math.floor(Math.random() * SAMPLE_WORDS.length)];
      setTargetWord(nextWord);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setPressedKey(e.key.toLowerCase());
    setTimeout(() => setPressedKey(null), 200);
  };

  const handleVirtualKeyPress = (hangulChar: string) => {
    onSpeak(hangulChar);
    setUserInput(hangulChar);
    if (hangulChar === targetWord) {
      const newScore = score + 10;
      setScore(newScore);
      if (newScore > highScore) {
        setHighScore(newScore);
        if (typeof window !== 'undefined') {
          localStorage.setItem('learn_korean_typing_highscore', newScore.toString());
        }
      }
      setTimeout(() => {
        setUserInput('');
        const nextWord = SAMPLE_WORDS[Math.floor(Math.random() * SAMPLE_WORDS.length)];
        setTargetWord(nextWord);
      }, 300);
    }
  };

  const handleResetGame = () => {
    setScore(0);
    setUserInput('');
    setTargetWord(SAMPLE_WORDS[0]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl p-4 sm:p-6 flex flex-col gap-6">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 rounded-xl">
              <Keyboard className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                Hangul Speed Typist Game
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Practice typing with 2-Set Dubeolsik keyboard layout
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Score & Streak Header */}
        <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-800 px-4 py-3 rounded-xl">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400">
            <Flame className="w-4 h-4" />
            <span>Score: {score} pts</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400">
            <Trophy className="w-4 h-4" />
            <span>High Score: {highScore} pts</span>
          </div>
          <button
            onClick={handleResetGame}
            className="text-xs text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 flex items-center gap-1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>

        {/* Game Target Box */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-indigo-950/40 border border-indigo-100 dark:border-indigo-900 rounded-2xl p-6 flex flex-col items-center justify-center gap-4">
          <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
            Type This Character:
          </div>
          <div className="text-6xl font-black text-slate-800 dark:text-slate-100 tracking-wider">
            {targetWord}
          </div>

          <input
            ref={inputRef}
            type="text"
            value={userInput}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Type or tap key below..."
            className="w-48 text-center text-xl font-bold bg-white dark:bg-slate-900 border-2 border-indigo-300 dark:border-indigo-700 rounded-xl px-4 py-2 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-inner"
          />
        </div>

        {/* Virtual Keyboard Visualizer */}
        <div className="flex flex-col gap-1.5 bg-slate-100 dark:bg-slate-800/80 p-3 rounded-2xl">
          <div className="text-[10px] font-semibold text-slate-400 uppercase text-center mb-1">
            2-Set (두벌식) Virtual Keyboard Layout
          </div>
          {VIRTUAL_KEYBOARD_LAYOUT.map((row, rIdx) => (
            <div key={rIdx} className="flex justify-center gap-1">
              {row.map((k) => {
                const isSelected = pressedKey === k.qwerty;
                return (
                  <button
                    key={k.qwerty}
                    onClick={() => handleVirtualKeyPress(k.hangul)}
                    className={`flex flex-col items-center justify-center min-w-[32px] sm:min-w-[40px] h-11 rounded-lg text-xs font-bold transition-all ${
                      isSelected
                        ? 'bg-indigo-600 text-white scale-110 shadow-lg'
                        : 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-indigo-400'
                    }`}
                  >
                    <span className="text-sm font-extrabold">{k.hangul}</span>
                    <span className="text-[9px] text-slate-400 font-mono">{k.qwerty}</span>
                  </button>
                );
              })}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
