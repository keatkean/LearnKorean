"use client";

import React from 'react';
import { ViewMode } from '@/lib/hangulData';
import { Translations } from '@/lib/i18n';
import { Search, X } from 'lucide-react';

interface ViewControlsProps {
  currentMode: ViewMode;
  onSelectMode: (mode: ViewMode) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  t: Translations;
}

export const ViewControls: React.FC<ViewControlsProps> = ({
  currentMode,
  onSelectMode,
  searchTerm,
  setSearchTerm,
  t,
}) => {
  const tabs: { id: ViewMode; label: string; subLabel: string; highlight?: boolean }[] = [
    {
      id: 'basic',
      label: t.tabBasic,
      subLabel: t.tabBasicSub,
    },
    {
      id: 'tense',
      label: t.tabTense,
      subLabel: t.tabTenseSub,
      highlight: true,
    },
    {
      id: 'complex',
      label: t.tabComplex,
      subLabel: t.tabComplexSub,
      highlight: true,
    },
    {
      id: 'full',
      label: t.tabFull,
      subLabel: t.tabFullSub,
    },
  ];

  return (
    <nav className="bg-white/90 dark:bg-gray-900/90 border border-slate-200 dark:border-gray-800 rounded-2xl p-3 sm:p-3.5 sticky top-2 z-20 shadow-sm backdrop-blur-md flex flex-col xl:flex-row items-center justify-between gap-3">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
        {tabs.map((tab) => {
          const isActive = currentMode === tab.id;
          let buttonClass =
            'px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer outline-none select-none border whitespace-nowrap ';

          if (isActive) {
            if (tab.highlight) {
              buttonClass += 'bg-rose-600 text-white border-rose-600 shadow-md shadow-rose-500/20 scale-105';
            } else {
              buttonClass += 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-500/20 scale-105';
            }
          } else {
            if (tab.highlight) {
              buttonClass +=
                'bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-300 border-rose-200 dark:border-rose-800 hover:bg-rose-100 dark:hover:bg-rose-900/60';
            } else {
              buttonClass +=
                'bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-gray-300 border-slate-200 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-300';
            }
          }

          return (
            <button
              key={tab.id}
              onClick={() => onSelectMode(tab.id)}
              className={buttonClass}
              role="tab"
              aria-selected={isActive}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-200 dark:bg-gray-700 text-slate-600 dark:text-gray-300'
                }`}
              >
                {tab.subLabel}
              </span>
            </button>
          );
        })}
      </div>

      {/* Search Input Bar */}
      <div className="relative w-full sm:w-64 flex-shrink-0">
        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={t.searchPlaceholder}
          className="w-full bg-slate-100 dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl pl-9 pr-8 py-1.5 text-xs text-slate-800 dark:text-gray-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-gray-200 p-0.5"
            title="Clear"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </nav>
  );
};
