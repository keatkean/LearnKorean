"use client";

import React, { useState } from 'react';
import { CURATED_VOCABULARY, VocabItem, getSyllableBlocks } from '@/lib/koreanVocabData';
import { Sparkles, Volume2, Search, X } from 'lucide-react';
import { Translations, Locale } from '@/lib/i18n';

interface VocabExplorerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSpeak: (text: string) => void;
  locale: Locale;
  t: Translations;
}

export const VocabExplorerModal: React.FC<VocabExplorerModalProps> = ({
  isOpen,
  onClose,
  onSpeak,
  locale,
  t,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  if (!isOpen) return null;

  const filteredVocab = CURATED_VOCABULARY.filter((v) => {
    const matchesCategory = selectedCategory === 'all' || v.category === selectedCategory;
    const matchesSearch =
      v.korean.includes(searchTerm) ||
      v.romanization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.translation.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.translation.zh.includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl p-4 sm:p-6 flex flex-col gap-6">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 rounded-xl">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                K-Pop & K-Drama Vocabulary Explorer
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Explore curated K-Pop & K-Drama words with dynamic syllable block breakdowns
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

        {/* Search & Category Filter Toolbar */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          
          {/* Search Bar */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search vocabulary..."
              className="w-full text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl pl-9 pr-4 py-2.5 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Category Filters */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
            {['all', 'kculture', 'kdrama', 'kpop', 'essential'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-bold rounded-xl capitalize whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-indigo-50 dark:hover:bg-indigo-950'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Vocabulary Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredVocab.map((item) => {
            const blocks = getSyllableBlocks(item.korean);
            return (
              <div
                key={item.id}
                className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl p-4 flex flex-col justify-between gap-3 hover:border-indigo-400 dark:hover:border-indigo-600 transition-all shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-2xl font-black text-slate-800 dark:text-slate-100 tracking-wide">
                      {item.korean}
                    </div>
                    <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
                      [{item.romanization}]
                    </div>
                  </div>

                  <button
                    onClick={() => onSpeak(item.korean)}
                    className="p-2.5 bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white rounded-xl transition-colors shadow-xs"
                    aria-label={`Pronounce ${item.korean}`}
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  {locale === 'zh-CN' ? item.translation.zh : item.translation.en}
                </div>

                {/* Dynamic Syllable Block Extraction */}
                <div className="flex items-center gap-1.5 pt-1 border-t border-slate-200/60 dark:border-slate-700/60">
                  <span className="text-[10px] text-slate-400 font-semibold">Blocks:</span>
                  {blocks.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => onSpeak(s)}
                      className="text-[11px] font-bold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded-md hover:border-indigo-400 cursor-pointer transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>

                <p className="text-[11px] text-slate-500 dark:text-slate-400 italic">
                  {item.culturalNote}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
