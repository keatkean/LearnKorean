"use client";

import React from 'react';
import { Translations } from '@/lib/i18n';
import {
  X,
  Sparkles,
  Edit3,
  Activity,
  Keyboard,
  Mic,
  Headphones,
  GraduationCap,
  Gamepad2,
  BookOpen,
  ChevronRight,
} from 'lucide-react';

interface ToolsDrawerModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: Translations;
  onOpenFlashcard: () => void;
  onOpenQuiz: () => void;
  onOpenGuide: () => void;
  onOpenBuilder: () => void;
  onOpenStrokeCanvas: () => void;
  onOpenVocalTract: () => void;
  onOpenTypingGame: () => void;
  onOpenEvaluator: () => void;
  onOpenVocab: () => void;
  onOpenCommuter: () => void;
}

export const ToolsDrawerModal: React.FC<ToolsDrawerModalProps> = ({
  isOpen,
  onClose,
  t,
  onOpenFlashcard,
  onOpenQuiz,
  onOpenGuide,
  onOpenBuilder,
  onOpenStrokeCanvas,
  onOpenVocalTract,
  onOpenTypingGame,
  onOpenEvaluator,
  onOpenVocab,
  onOpenCommuter,
}) => {
  if (!isOpen) return null;

  const handleLaunch = (action: () => void) => {
    onClose();
    action();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-900/60 backdrop-blur-sm p-0 sm:p-4 transition-all duration-300">
      <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-t-3xl sm:rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950">
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              {t.drawerTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              {t.drawerSubtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 bg-slate-200/60 dark:bg-slate-800 rounded-full transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Categorized Tools List */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* Section 1: Practice & Writing */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3 flex items-center gap-1.5">
              {t.categoryPractice}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <button
                onClick={() => handleLaunch(onOpenBuilder)}
                className="flex items-center justify-between p-3 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/40 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 border border-indigo-100 dark:border-indigo-900 transition-all text-left group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-600 text-white rounded-xl shadow-sm">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-sm text-slate-800 dark:text-slate-100">
                    {t.btnSyllableBuilder}
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-indigo-400 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => handleLaunch(onOpenStrokeCanvas)}
                className="flex items-center justify-between p-3 rounded-2xl bg-slate-100/70 dark:bg-slate-800/60 hover:bg-slate-200/80 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all text-left group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-600 text-white rounded-xl shadow-sm">
                    <Edit3 className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-sm text-slate-800 dark:text-slate-100">
                    {t.btnStrokeOrder}
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => handleLaunch(onOpenVocalTract)}
                className="flex items-center justify-between p-3 rounded-2xl bg-slate-100/70 dark:bg-slate-800/60 hover:bg-slate-200/80 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all text-left group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-600 text-white rounded-xl shadow-sm">
                    <Activity className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-sm text-slate-800 dark:text-slate-100">
                    {t.btnVocalTract}
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Section 2: Speaking & Games */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-3 flex items-center gap-1.5">
              {t.categoryGames}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <button
                onClick={() => handleLaunch(onOpenTypingGame)}
                className="flex items-center justify-between p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/40 hover:bg-amber-100 dark:hover:bg-amber-900/60 border border-amber-200 dark:border-amber-900 transition-all text-left group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-amber-500 text-slate-950 rounded-xl shadow-sm font-bold">
                    <Keyboard className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-sm text-slate-800 dark:text-slate-100">
                    {t.btnTypingGame}
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-amber-500 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => handleLaunch(onOpenEvaluator)}
                className="flex items-center justify-between p-3 rounded-2xl bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 dark:hover:bg-rose-900/60 border border-rose-200 dark:border-rose-900 transition-all text-left group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-rose-600 text-white rounded-xl shadow-sm">
                    <Mic className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-sm text-slate-800 dark:text-slate-100">
                    {t.btnPronunciation}
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-rose-500 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => handleLaunch(onOpenCommuter)}
                className="flex items-center justify-between p-3 rounded-2xl bg-indigo-950/30 hover:bg-indigo-950/50 border border-indigo-900 transition-all text-left group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-900 text-white rounded-xl shadow-sm">
                    <Headphones className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-sm text-slate-800 dark:text-slate-100">
                    {t.btnCommuterMode}
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-indigo-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Section 3: Study & Flashcards */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-1.5">
              {t.categoryStudy}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <button
                onClick={() => handleLaunch(onOpenFlashcard)}
                className="flex items-center justify-between p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 border border-emerald-200 dark:border-emerald-900 transition-all text-left group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-600 text-white rounded-xl shadow-sm">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-sm text-slate-800 dark:text-slate-100">
                    {t.flashcardBtn}
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-emerald-500 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => handleLaunch(onOpenQuiz)}
                className="flex items-center justify-between p-3 rounded-2xl bg-purple-50 dark:bg-purple-950/40 hover:bg-purple-100 dark:hover:bg-purple-900/60 border border-purple-200 dark:border-purple-900 transition-all text-left group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-600 text-white rounded-xl shadow-sm">
                    <Gamepad2 className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-sm text-slate-800 dark:text-slate-100">
                    {t.quizBtn}
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-purple-500 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => handleLaunch(onOpenVocab)}
                className="flex items-center justify-between p-3 rounded-2xl bg-slate-100/70 dark:bg-slate-800/60 hover:bg-slate-200/80 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all text-left group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-600 text-white rounded-xl shadow-sm">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-sm text-slate-800 dark:text-slate-100">
                    {t.btnVocabExplorer}
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => handleLaunch(onOpenGuide)}
                className="flex items-center justify-between p-3 rounded-2xl bg-slate-100/70 dark:bg-slate-800/60 hover:bg-slate-200/80 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all text-left group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-teal-600 text-white rounded-xl shadow-sm">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-sm text-slate-800 dark:text-slate-100">
                    {t.guideBtn}
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
