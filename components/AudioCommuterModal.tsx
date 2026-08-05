"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipForward, Headphones, X, Eye, EyeOff, RotateCcw } from 'lucide-react';
import { Translations } from '@/lib/i18n';

interface AudioCommuterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSpeak: (text: string) => void;
  t: Translations;
}

const COMMUTER_DRILL_ITEMS = [
  { hangul: '가', label: 'Giyeok + A (가)' },
  { hangul: '나', label: 'Nieun + A (나)' },
  { hangul: '다', label: 'Digeut + A (다)' },
  { hangul: '라', label: 'Rieul + A (라)' },
  { hangul: '마', label: 'Mieum + A (마)' },
  { hangul: '바', label: 'Bieup + A (바)' },
  { hangul: '사', label: 'Siot + A (사)' },
  { hangul: '아', label: 'Ieung + A (아)' },
  { hangul: '자', label: 'Jieut + A (자)' },
  { hangul: '차', label: 'Chieut + A (차)' },
];

export const AudioCommuterModal: React.FC<AudioCommuterModalProps> = ({
  isOpen,
  onClose,
  onSpeak,
  t,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlayingQueue, setIsPlayingQueue] = useState<boolean>(false);
  const [hideText, setHideText] = useState<boolean>(false); // Audio Blind Test
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(2500); // 2.5 sec pause

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPlayingQueue && isOpen) {
      const current = COMMUTER_DRILL_ITEMS[currentIndex];
      onSpeak(current.hangul);

      timerRef.current = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % COMMUTER_DRILL_ITEMS.length);
      }, speedMultiplier);
    } else {
      if (timerRef.current) clearTimeout(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isPlayingQueue, currentIndex, isOpen, speedMultiplier]);

  if (!isOpen) return null;

  const currentItem = COMMUTER_DRILL_ITEMS[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % COMMUTER_DRILL_ITEMS.length);
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setIsPlayingQueue(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl p-4 sm:p-6 flex flex-col gap-6">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 rounded-xl">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                {t.commuterTitle}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t.commuterSubtitle}
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              setIsPlayingQueue(false);
              onClose();
            }}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Player Card */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-2xl p-8 flex flex-col items-center justify-center gap-6 shadow-xl relative overflow-hidden">
          
          {/* Audio Blind Test Toggle */}
          <button
            onClick={() => setHideText(!hideText)}
            className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold transition-colors"
          >
            {hideText ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            <span>{hideText ? 'Blind Test Active' : 'Hide Text'}</span>
          </button>

          <div className="text-xs uppercase tracking-widest font-semibold text-indigo-200">
            Track {currentIndex + 1} of {COMMUTER_DRILL_ITEMS.length}
          </div>

          {/* Main Character Display */}
          <div className="text-7xl font-black tracking-wider transition-all transform scale-105 min-h-[96px] flex items-center justify-center">
            {hideText ? '?' : currentItem.hangul}
          </div>

          <div className="text-xs font-semibold text-indigo-100 bg-white/10 px-4 py-1.5 rounded-full">
            {hideText ? 'Audio Blind Test (Tap eye to reveal)' : currentItem.label}
          </div>

          {/* Controls Bar */}
          <div className="flex items-center gap-4 mt-2">
            <button
              onClick={handleReset}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              title="Reset queue"
            >
              <RotateCcw className="w-5 h-5" />
            </button>

            <button
              onClick={() => setIsPlayingQueue(!isPlayingQueue)}
              className="p-5 bg-white text-indigo-700 hover:bg-indigo-50 rounded-full shadow-lg transform active:scale-95 transition-all"
            >
              {isPlayingQueue ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 ml-0.5" />}
            </button>

            <button
              onClick={handleNext}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              title="Skip to next"
            >
              <SkipForward className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
