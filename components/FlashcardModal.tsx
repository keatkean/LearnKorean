"use client";

import React, { useState } from 'react';
import { Syllable, getAllSyllableList } from '@/lib/hangulData';
import { saveSRSState, ReviewQuality } from '@/lib/srsStorage';
import { Translations } from '@/lib/i18n';
import { X, Volume2, ChevronLeft, ChevronRight, Shuffle, RotateCw, Brain } from 'lucide-react';

interface FlashcardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSpeak: (text: string) => void;
  t: Translations;
}

export const FlashcardModal: React.FC<FlashcardModalProps> = ({
  isOpen,
  onClose,
  onSpeak,
  t,
}) => {
  const [syllables, setSyllables] = useState<Syllable[]>(() => getAllSyllableList());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  if (!isOpen) return null;

  const currentItem = syllables[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % syllables.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + syllables.length) % syllables.length);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    const shuffled = [...syllables].sort(() => Math.random() - 0.5);
    setSyllables(shuffled);
    setCurrentIndex(0);
  };

  const handleSRSRating = (quality: ReviewQuality) => {
    saveSRSState(currentItem.char, quality);
    handleNext();
  };

  const handlePlaySound = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSpeak(currentItem.char);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-3xl p-6 max-w-md w-full shadow-2xl relative flex flex-col items-center">
        
        {/* Header */}
        <div className="w-full flex items-center justify-between mb-4 border-b border-slate-100 dark:border-gray-800 pb-3">
          <h2 className="text-lg font-bold text-slate-800 dark:text-gray-100 flex items-center gap-2">
            <Brain className="w-5 h-5 text-indigo-500" />
            <span>{t.fcTitle}</span>
            <span className="text-xs bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-semibold px-2 py-0.5 rounded-full">
              {currentIndex + 1} / {syllables.length}
            </span>
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-gray-200 rounded-full hover:bg-slate-100 dark:hover:bg-gray-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 3D Flip Flashcard */}
        <div
          onClick={() => {
            setIsFlipped(!isFlipped);
            onSpeak(currentItem.char);
          }}
          className="w-full h-64 perspective-1000 cursor-pointer my-4 select-none"
        >
          <div
            className={`w-full h-full relative duration-500 transform-style-3d transition-transform ${
              isFlipped ? 'rotate-y-180' : ''
            }`}
          >
            {/* Front Side */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex flex-col items-center justify-center text-white shadow-xl border border-white/20 backface-hidden p-6">
              <span className="text-7xl font-extrabold tracking-widest drop-shadow-md font-sans">
                {currentItem.char}
              </span>
              <p className="text-xs text-indigo-100 mt-4 flex items-center gap-1 font-medium bg-white/10 px-3 py-1 rounded-full">
                <RotateCw className="w-3.5 h-3.5" /> {t.fcHint}
              </p>
            </div>

            {/* Back Side */}
            <div className="absolute inset-0 w-full h-full bg-white dark:bg-gray-800 border-2 border-indigo-500 rounded-2xl flex flex-col items-center justify-center shadow-xl rotate-y-180 backface-hidden p-6">
              <span className="text-5xl font-extrabold text-slate-800 dark:text-gray-100 font-sans">
                {currentItem.char}
              </span>
              <span className="text-2xl font-bold text-rose-500 mt-2">
                [{currentItem.rom}]
              </span>
              <div className="mt-3 flex items-center gap-2 text-xs text-slate-500 dark:text-gray-400 bg-slate-100 dark:bg-gray-700 px-3 py-1 rounded-lg">
                <span>{t.fcCho}: {currentItem.choChar}</span>
                <span>•</span>
                <span>{t.fcJung}: {currentItem.jungChar}</span>
              </div>

              <button
                onClick={handlePlaySound}
                className="mt-4 flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all active:scale-95 shadow-md"
              >
                <Volume2 className="w-4 h-4" />
                {t.fcPlaySound}
              </button>
            </div>
          </div>
        </div>

        {/* SRS Rating Actions (Visible when card is flipped) */}
        {isFlipped && (
          <div className="w-full flex items-center justify-between gap-1.5 my-2 animate-fade-in">
            <button
              onClick={() => handleSRSRating(0)}
              className="flex-1 bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-900 py-2 rounded-xl text-xs font-bold hover:bg-rose-100 transition-colors"
            >
              Again (1d)
            </button>
            <button
              onClick={() => handleSRSRating(1)}
              className="flex-1 bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-900 py-2 rounded-xl text-xs font-bold hover:bg-amber-100 transition-colors"
            >
              Hard (2d)
            </button>
            <button
              onClick={() => handleSRSRating(3)}
              className="flex-1 bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900 py-2 rounded-xl text-xs font-bold hover:bg-blue-100 transition-colors"
            >
              Good (4d)
            </button>
            <button
              onClick={() => handleSRSRating(5)}
              className="flex-1 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900 py-2 rounded-xl text-xs font-bold hover:bg-emerald-100 transition-colors"
            >
              Easy (7d)
            </button>
          </div>
        )}

        {/* Controls */}
        <div className="w-full flex items-center justify-between mt-2">
          <button
            onClick={handlePrev}
            className="flex items-center gap-1 px-4 py-2 bg-slate-100 dark:bg-gray-800 hover:bg-slate-200 dark:hover:bg-gray-700 text-slate-700 dark:text-gray-300 rounded-xl text-xs font-semibold transition-all active:scale-95"
          >
            <ChevronLeft className="w-4 h-4" />
            {t.fcPrev}
          </button>

          <button
            onClick={handleShuffle}
            className="flex items-center gap-1 px-3 py-2 bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-300 rounded-xl text-xs font-semibold hover:bg-purple-100 transition-all active:scale-95"
            title={t.fcShuffle}
          >
            <Shuffle className="w-3.5 h-3.5" />
            {t.fcShuffle}
          </button>

          <button
            onClick={handleNext}
            className="flex items-center gap-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold transition-all active:scale-95 shadow-sm"
          >
            {t.fcNext}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
