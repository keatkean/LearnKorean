"use client";

import React from 'react';
import { Locale, Translations } from '@/lib/i18n';
import { Volume2, Moon, Sun, Sparkles, BookOpen, GraduationCap, Gamepad2, Globe, Edit3, Keyboard, Mic, Headphones, Activity } from 'lucide-react';

interface HeaderBannerProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
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

export const HeaderBanner: React.FC<HeaderBannerProps> = ({
  locale,
  setLocale,
  t,
  darkMode,
  setDarkMode,
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
  return (
    <header className="relative bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 dark:from-indigo-900 dark:via-purple-950 dark:to-slate-900 text-white py-5 px-4 md:px-8 shadow-xl rounded-b-2xl transition-all duration-300">
      <div className="max-w-6xl mx-auto flex flex-col gap-4">
        
        {/* Title & Brand Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="p-3 bg-white/15 backdrop-blur-md rounded-2xl shadow-inner border border-white/20 flex-shrink-0">
              <span className="text-3xl">🇰🇷</span>
            </div>
            <div>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-wide drop-shadow-sm font-sans leading-tight">
                  {t.title}
                </h1>
                <span className="bg-amber-400/90 text-amber-950 text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full font-bold shadow-sm uppercase tracking-wider flex items-center gap-1 whitespace-nowrap flex-shrink-0">
                  <Sparkles className="w-3 h-3" /> {t.badge}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-indigo-100 dark:text-indigo-300 mt-1 flex items-center justify-center sm:justify-start gap-1 font-medium">
                <Volume2 className="w-4 h-4 text-indigo-200 flex-shrink-0" />
                <span>{t.subtitle}</span>
              </p>
            </div>
          </div>

          {/* Theme & Language Selectors */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-white/15 backdrop-blur-md px-2.5 py-1.5 rounded-xl border border-white/20 text-xs font-semibold whitespace-nowrap">
              <Globe className="w-4 h-4 text-indigo-200" />
              <select
                value={locale}
                onChange={(e) => setLocale(e.target.value as Locale)}
                className="bg-transparent text-white text-xs font-bold outline-none cursor-pointer"
              >
                <option value="zh-CN" className="text-gray-900">🇨🇳 简体中文</option>
                <option value="zh-TW" className="text-gray-900">🇹🇼 繁體中文</option>
                <option value="en" className="text-gray-900">🇺🇸 English</option>
              </select>
            </div>

            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all duration-200 border border-white/20 active:scale-95 shadow-md"
              aria-label="Toggle Theme"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-indigo-100" />}
            </button>
          </div>
        </div>

        {/* Tools Toolbar Grid */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-2 border-t border-white/15">
          <button
            onClick={onOpenBuilder}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white/20 hover:bg-white/30 text-white rounded-xl text-xs font-semibold transition-all border border-white/20 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.btnSyllableBuilder}</span>
          </button>

          <button
            onClick={onOpenStrokeCanvas}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white/20 hover:bg-white/30 text-white rounded-xl text-xs font-semibold transition-all border border-white/20 shadow-sm"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>{t.btnStrokeOrder}</span>
          </button>

          <button
            onClick={onOpenVocalTract}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white/20 hover:bg-white/30 text-white rounded-xl text-xs font-semibold transition-all border border-white/20 shadow-sm"
          >
            <Activity className="w-3.5 h-3.5" />
            <span>{t.btnVocalTract}</span>
          </button>

          <button
            onClick={onOpenTypingGame}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-400 hover:bg-amber-300 text-amber-950 rounded-xl text-xs font-bold transition-all shadow-sm"
          >
            <Keyboard className="w-3.5 h-3.5" />
            <span>{t.btnTypingGame}</span>
          </button>

          <button
            onClick={onOpenEvaluator}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-500 hover:bg-rose-400 text-white rounded-xl text-xs font-bold transition-all shadow-sm"
          >
            <Mic className="w-3.5 h-3.5" />
            <span>{t.btnPronunciation}</span>
          </button>

          <button
            onClick={onOpenVocab}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white/20 hover:bg-white/30 text-white rounded-xl text-xs font-semibold transition-all border border-white/20 shadow-sm"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{t.btnVocabExplorer}</span>
          </button>

          <button
            onClick={onOpenCommuter}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-900/60 hover:bg-indigo-900 text-white rounded-xl text-xs font-semibold transition-all border border-white/20 shadow-sm"
          >
            <Headphones className="w-3.5 h-3.5" />
            <span>{t.btnCommuterMode}</span>
          </button>

          <button
            onClick={onOpenFlashcard}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/90 hover:bg-emerald-400 text-white rounded-xl text-xs font-bold transition-all shadow-sm"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{t.flashcardBtn}</span>
          </button>

          <button
            onClick={onOpenQuiz}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-500 hover:bg-purple-400 text-white rounded-xl text-xs font-bold transition-all shadow-sm"
          >
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>{t.quizBtn}</span>
          </button>

          <button
            onClick={onOpenGuide}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white/20 hover:bg-white/30 text-white rounded-xl text-xs font-semibold transition-all border border-white/20 shadow-sm"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{t.guideBtn}</span>
          </button>
        </div>

      </div>
    </header>
  );
};
