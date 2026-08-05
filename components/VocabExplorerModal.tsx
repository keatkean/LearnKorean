"use client";

import React, { useState, useEffect } from 'react';
import { CURATED_VOCABULARY, VocabItem, getSyllableBlocks, getStoredCustomVocab, saveCustomVocabItem } from '@/lib/koreanVocabData';
import { Sparkles, Volume2, Search, X, Plus, BookOpen, Check } from 'lucide-react';
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
  const [vocabList, setVocabList] = useState<VocabItem[]>(CURATED_VOCABULARY);
  const [isAddingNew, setIsAddingNew] = useState(false);

  // New Word Form State
  const [newKorean, setNewKorean] = useState('');
  const [newRom, setNewRom] = useState('');
  const [newTransEn, setNewTransEn] = useState('');
  const [newTransZh, setNewTransZh] = useState('');
  const [newNote, setNewNote] = useState('');

  useEffect(() => {
    if (isOpen) {
      const customItems = getStoredCustomVocab();
      setVocabList([...customItems, ...CURATED_VOCABULARY]);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleAddCustomWord = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newKorean.trim()) return;

    const newItem: VocabItem = {
      id: `custom_${Date.now()}`,
      korean: newKorean.trim(),
      romanization: newRom.trim() || newKorean.trim(),
      translation: {
        en: newTransEn.trim() || newKorean.trim(),
        zh: newTransZh.trim() || newTransEn.trim() || newKorean.trim(),
      },
      category: 'custom',
      culturalNote: newNote.trim() || 'User added custom vocabulary word.',
    };

    const updated = saveCustomVocabItem(newItem);
    setVocabList([...updated, ...CURATED_VOCABULARY]);

    // Reset Form
    setNewKorean('');
    setNewRom('');
    setNewTransEn('');
    setNewTransZh('');
    setNewNote('');
    setIsAddingNew(false);
  };

  const filteredVocab = vocabList.filter((v) => {
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
                Dynamic K-Culture Vocabulary Explorer
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Explore curated K-Pop/K-Drama words & add your own custom phrases
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

        {/* Search, Filter & Add Word Toolbar */}
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
            {['all', 'kculture', 'kdrama', 'kpop', 'essential', 'custom'].map((cat) => (
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

            <button
              onClick={() => setIsAddingNew(!isAddingNew)}
              className="flex items-center gap-1 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all shadow-sm whitespace-nowrap"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Word</span>
            </button>
          </div>

        </div>

        {/* Custom Word Form Modal Collapse */}
        {isAddingNew && (
          <form
            onSubmit={handleAddCustomWord}
            className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 rounded-2xl p-4 flex flex-col gap-3 animate-fade-in"
          >
            <div className="text-xs font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              <span>Add New Custom Korean Vocabulary Word</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                required
                value={newKorean}
                onChange={(e) => setNewKorean(e.target.value)}
                placeholder="Korean Word (e.g. 우영우)"
                className="text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <input
                type="text"
                value={newRom}
                onChange={(e) => setNewRom(e.target.value)}
                placeholder="Romanization (e.g. Woo Young-woo)"
                className="text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <input
                type="text"
                value={newTransEn}
                onChange={(e) => setNewTransEn(e.target.value)}
                placeholder="English Translation"
                className="text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <input
                type="text"
                value={newTransZh}
                onChange={(e) => setNewTransZh(e.target.value)}
                placeholder="Chinese Translation (中文翻译)"
                className="text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <input
              type="text"
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              placeholder="Cultural Note / Drama Context"
              className="text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />

            <div className="flex justify-end gap-2 mt-1">
              <button
                type="button"
                onClick={() => setIsAddingNew(false)}
                className="text-xs text-slate-500 hover:text-slate-700 px-3 py-1.5"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center gap-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-1.5 rounded-xl shadow-sm"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Save Word</span>
              </button>
            </div>
          </form>
        )}

        {/* Vocabulary Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredVocab.map((item) => {
            const blocks = getSyllableBlocks(item.korean);
            return (
              <div
                key={item.id}
                className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 rounded-2xl p-4 flex flex-col justify-between gap-3 hover:border-indigo-400 dark:hover:border-indigo-600 transition-all shadow-sm relative"
              >
                {item.category === 'custom' && (
                  <span className="absolute top-3 right-12 text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 px-2 py-0.5 rounded-md">
                    Custom
                  </span>
                )}

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
                  <span className="text-[10px] text-slate-400 font-semibold">Dynamic Blocks:</span>
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
