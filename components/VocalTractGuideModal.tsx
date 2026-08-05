"use client";

import React, { useState } from 'react';
import { Volume2, X, Info, Activity } from 'lucide-react';
import { Translations } from '@/lib/i18n';

interface SoundCategory {
  type: string;
  title: string;
  examples: string[];
  description: string;
  tonguePosition: string;
  airflow: string;
  svgPath: string;
}

const SOUND_CATEGORIES: SoundCategory[] = [
  {
    type: 'velar',
    title: 'Velar Consonants (ㄱ / ㅋ / ㄲ)',
    examples: ['ㄱ', 'ㅋ', 'ㄲ'],
    description: 'Back of tongue touches the soft palate (velum) to block airflow momentarily.',
    tonguePosition: 'Raised back of tongue pressed against soft palate.',
    airflow: 'Explosive release of air through throat.',
    svgPath: 'M 40,140 Q 90,80 160,110',
  },
  {
    type: 'alveolar',
    title: 'Alveolar Consonants (ㄴ / ㄷ / ㅌ / ㄸ / ㄹ)',
    examples: ['ㄴ', 'ㄷ', 'ㅌ', 'ㄸ', 'ㄹ'],
    description: 'Tip of tongue touches upper teeth ridge (alveolar ridge).',
    tonguePosition: 'Tip of tongue pressed behind upper front teeth.',
    airflow: 'Air released past alveolar ridge or through nose (for ㄴ).',
    svgPath: 'M 40,140 Q 120,60 170,70',
  },
  {
    type: 'labial',
    title: 'Bilabial Consonants (ㅁ / ㅂ / ㅍ / ㅃ)',
    examples: ['ㅁ', 'ㅂ', 'ㅍ', 'ㅃ'],
    description: 'Lips come together to form obstruction before releasing sound.',
    tonguePosition: 'Tongue rests low in mouth.',
    airflow: 'Lips open popping air out.',
    svgPath: 'M 40,140 Q 100,120 180,120',
  },
  {
    type: 'sibilant',
    title: 'Dental Sibilants (ㅅ / ㅆ / ㅈ / ㅊ / ㅉ)',
    examples: ['ㅅ', 'ㅆ', 'ㅈ', 'ㅊ', 'ㅉ'],
    description: 'Air squeezed through narrow gap between tongue blade and roof of mouth.',
    tonguePosition: 'Tongue blade raised near palate creating narrow slit.',
    airflow: 'Continuous friction airflow.',
    svgPath: 'M 40,140 Q 110,70 160,85',
  },
];

interface VocalTractGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSpeak: (text: string) => void;
  t: Translations;
}

export const VocalTractGuideModal: React.FC<VocalTractGuideModalProps> = ({
  isOpen,
  onClose,
  onSpeak,
  t,
}) => {
  const [activeCategory, setActiveCategory] = useState<SoundCategory>(SOUND_CATEGORIES[0]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl p-4 sm:p-6 flex flex-col gap-6">

        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 rounded-xl">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                {t.vocalTitle}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t.vocalSubtitle}
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

        {/* Category Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-1">
          {SOUND_CATEGORIES.map((cat) => (
            <button
              key={cat.type}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-all ${
                activeCategory.type === cat.type
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-950'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Visual Diagram & Information Panel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          
          {/* Mouth / Tongue Profile Vector Diagram */}
          <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 flex flex-col items-center justify-center relative min-h-[220px]">
            <svg viewBox="0 0 200 180" className="w-48 h-48">
              {/* Head Profile Outline */}
              <path
                d="M 20,20 C 60,10 140,10 170,40 C 180,60 185,80 180,100 C 170,120 150,150 110,160 C 80,165 40,150 20,130"
                fill="none"
                stroke="#cbd5e1"
                strokeWidth="3"
              />
              {/* Hard & Soft Palate */}
              <path
                d="M 80,45 Q 120,40 165,70"
                fill="none"
                stroke="#64748b"
                strokeWidth="5"
                strokeLinecap="round"
              />
              {/* Interactive Tongue Position Path */}
              <path
                d={activeCategory.svgPath}
                fill="none"
                stroke="#4f46e5"
                strokeWidth="8"
                strokeLinecap="round"
                className="animate-pulse"
              />
            </svg>
            <div className="text-[10px] text-slate-400 mt-1">
              Blue line indicates tongue curve & contact zone
            </div>
          </div>

          {/* Details & Sound Examples */}
          <div className="flex flex-col gap-3">
            <h3 className="text-base font-bold text-slate-800 dark:text-slate-100">
              {activeCategory.title}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {activeCategory.description}
            </p>

            <div className="bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900 rounded-xl p-3 text-xs space-y-1">
              <div className="font-semibold text-indigo-700 dark:text-indigo-300">
                Tongue: {activeCategory.tonguePosition}
              </div>
              <div className="text-slate-600 dark:text-slate-400">
                Airflow: {activeCategory.airflow}
              </div>
            </div>

            {/* Example Audio Triggers */}
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs font-semibold text-slate-500">Try Sounds:</span>
              {activeCategory.examples.map((ex) => (
                <button
                  key={ex}
                  onClick={() => onSpeak(ex)}
                  className="flex items-center gap-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs px-3 py-1.5 rounded-lg hover:border-indigo-500 transition-colors shadow-sm"
                >
                  <Volume2 className="w-3.5 h-3.5 text-indigo-500" />
                  <span className="font-bold">{ex}</span>
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
