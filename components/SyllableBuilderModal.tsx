"use client";

import React, { useState } from 'react';
import { INITIAL_CONSONANTS, MEDIAL_VOWELS, FINAL_CONSONANTS, composeHangul } from '@/lib/hangulComposer';
import { Volume2, RefreshCw, X, Sparkles, Plus } from 'lucide-react';
import { Translations } from '@/lib/i18n';

interface SyllableBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSpeak: (text: string) => void;
  t: Translations;
}

export const SyllableBuilderModal: React.FC<SyllableBuilderModalProps> = ({
  isOpen,
  onClose,
  onSpeak,
  t,
}) => {
  const [initial, setInitial] = useState<string>('ㄱ');
  const [medial, setMedial] = useState<string>('ㅏ');
  const [final, setFinal] = useState<string>('');

  if (!isOpen) return null;

  const combinedSyllable = composeHangul(initial, medial, final);

  const handleReset = () => {
    setInitial('ㄱ');
    setMedial('ㅏ');
    setFinal('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl p-4 sm:p-6 flex flex-col gap-6">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 rounded-xl">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                Syllable Builder Sandbox
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Combine Initial (초성), Medial (중성), & Final (종성) into Hangul blocks
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

        {/* Live Result Display Box */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 relative">
          <div className="text-6xl sm:text-7xl font-extrabold text-indigo-600 dark:text-indigo-400 tracking-wider transition-all duration-300 transform scale-105">
            {combinedSyllable}
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300 bg-white/80 dark:bg-slate-900/80 px-4 py-1.5 rounded-full shadow-sm">
            <span>{initial} (Initial)</span>
            <Plus className="w-3 h-3 text-slate-400" />
            <span>{medial} (Vowel)</span>
            {final && (
              <>
                <Plus className="w-3 h-3 text-slate-400" />
                <span>{final} (Batchim)</span>
              </>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onSpeak(combinedSyllable)}
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm px-5 py-2.5 rounded-xl shadow-md hover:shadow-indigo-500/20 active:scale-95 transition-all"
            >
              <Volume2 className="w-4 h-4" />
              <span>Listen Sound</span>
            </button>
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm px-3.5 py-2.5 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Component Selector Grid */}
        <div className="flex flex-col gap-4">
          {/* Initial Consonants */}
          <div>
            <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
              1. Initial Consonant (초성)
            </h3>
            <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto p-1">
              {INITIAL_CONSONANTS.map((c) => (
                <button
                  key={c}
                  onClick={() => setInitial(c)}
                  className={`w-10 h-10 text-base font-bold rounded-xl transition-all ${
                    initial === c
                      ? 'bg-indigo-600 text-white shadow-md scale-105'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-950'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Medial Vowels */}
          <div>
            <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
              2. Medial Vowel (중성)
            </h3>
            <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto p-1">
              {MEDIAL_VOWELS.map((v) => (
                <button
                  key={v}
                  onClick={() => setMedial(v)}
                  className={`w-10 h-10 text-base font-bold rounded-xl transition-all ${
                    medial === v
                      ? 'bg-indigo-600 text-white shadow-md scale-105'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-950'
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Final Consonants (Batchim) */}
          <div>
            <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
              3. Final Consonant / Batchim (종성 - Optional)
            </h3>
            <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto p-1">
              <button
                onClick={() => setFinal('')}
                className={`px-3 h-10 text-xs font-semibold rounded-xl transition-all ${
                  final === ''
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-indigo-50 dark:hover:bg-indigo-950'
                }`}
              >
                None (없음)
              </button>
              {FINAL_CONSONANTS.filter(f => f !== '').map((f) => (
                <button
                  key={f}
                  onClick={() => setFinal(f)}
                  className={`w-10 h-10 text-base font-bold rounded-xl transition-all ${
                    final === f
                      ? 'bg-indigo-600 text-white shadow-md scale-105'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-950'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
