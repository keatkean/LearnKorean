"use client";

import React, { useState, useEffect, useRef } from 'react';
import { VIRTUAL_KEYBOARD_LAYOUT, DUBEOLSIK_MAP, mapKeyToHangul } from '@/lib/dubeolsikMap';
import { composeJamoSequence, INITIAL_CONSONANTS, MEDIAL_VOWELS, FINAL_CONSONANTS } from '@/lib/hangulComposer';
import { Keyboard, Trophy, RotateCcw, X, Flame, Delete } from 'lucide-react';
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
  const [jamoBuffer, setJamoBuffer] = useState<string[]>([]);
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

  const currentComposedText = composeJamoSequence(jamoBuffer);

  const handleMatchSuccess = (matchedText: string) => {
    onSpeak(matchedText);
    const newScore = score + 10;
    setScore(newScore);
    if (newScore > highScore) {
      setHighScore(newScore);
      if (typeof window !== 'undefined') {
        localStorage.setItem('learn_korean_typing_highscore', newScore.toString());
      }
    }
    setJamoBuffer([]);
    const nextWord = SAMPLE_WORDS[Math.floor(Math.random() * SAMPLE_WORDS.length)];
    setTargetWord(nextWord);
  };

  const handleVirtualKeyPress = (hangulJamo: string) => {
    onSpeak(hangulJamo);
    const updatedBuffer = [...jamoBuffer, hangulJamo];
    const composed = composeJamoSequence(updatedBuffer);

    if (composed === targetWord) {
      handleMatchSuccess(targetWord);
    } else {
      setJamoBuffer(updatedBuffer);
    }
  };

  const handleBackspace = () => {
    setJamoBuffer((prev) => prev.slice(0, -1));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const key = e.key;
    setPressedKey(key.toLowerCase());
    setTimeout(() => setPressedKey(null), 200);

    if (key === 'Backspace') {
      handleBackspace();
      return;
    }

    // Direct QWERTY key mapping to Korean Dubeolsik Jamos
    const mappedHangul = mapKeyToHangul(key);
    if (mappedHangul) {
      e.preventDefault();
      handleVirtualKeyPress(mappedHangul);
    }
  };

  const handleResetGame = () => {
    setScore(0);
    setJamoBuffer([]);
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

          <div className="relative flex items-center">
            <input
              ref={inputRef}
              type="text"
              readOnly
              value={currentComposedText}
              onKeyDown={handleKeyDown}
              placeholder="Tap virtual keys below..."
              className="w-56 text-center text-2xl font-bold bg-white dark:bg-slate-900 border-2 border-indigo-300 dark:border-indigo-700 rounded-xl px-4 py-2 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-inner"
            />
            {jamoBuffer.length > 0 && (
              <button
                onClick={handleBackspace}
                className="absolute right-2 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                title="Backspace"
              >
                <Delete className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Virtual Keyboard Visualizer */}
        <div className="flex flex-col gap-1.5 bg-slate-100 dark:bg-slate-800/80 p-3 rounded-2xl">
          <div className="text-[10px] font-semibold text-slate-400 uppercase text-center mb-1">
            2-Set (두벌식) Virtual Keyboard Layout — Tap Consonant then Vowel
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

          {/* Bottom Control Row */}
          <div className="flex justify-center mt-1">
            <button
              onClick={handleBackspace}
              className="flex items-center gap-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-4 py-2 rounded-lg text-xs font-bold hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
            >
              <Delete className="w-4 h-4" />
              <span>Backspace</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
