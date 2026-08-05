"use client";

import React from 'react';
import { Locale, Translations } from '@/lib/i18n';
import { Volume2, Moon, Sun, Sparkles, BookOpen, GraduationCap, Gamepad2, Globe } from 'lucide-react';

interface HeaderBannerProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  onOpenFlashcard: () => void;
  onOpenQuiz: () => void;
  onOpenGuide: () => void;
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
}) => {
  return (
    <header className="relative bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 dark:from-indigo-900 dark:via-purple-950 dark:to-slate-900 text-white py-5 px-4 md:px-8 shadow-xl rounded-b-2xl transition-all duration-300">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* Title & Brand */}
        <div className="flex items-center gap-3 text-center lg:text-left">
          <div className="p-3 bg-white/15 backdrop-blur-md rounded-2xl shadow-inner border border-white/20 flex-shrink-0">
            <span className="text-3xl">🇰🇷</span>
          </div>
          <div>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-wide drop-shadow-sm font-sans leading-tight">
                {t.title}
              </h1>
              <span className="bg-amber-400/90 text-amber-950 text-xs px-2.5 py-0.5 rounded-full font-bold shadow-sm uppercase tracking-wider flex items-center gap-1 whitespace-nowrap flex-shrink-0">
                <Sparkles className="w-3 h-3" /> {t.badge}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-indigo-100 dark:text-indigo-300 mt-1 flex items-center justify-center lg:justify-start gap-1 font-medium">
              <Volume2 className="w-4 h-4 text-indigo-200 flex-shrink-0" />
              <span>{t.subtitle}</span>
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap justify-center lg:justify-end flex-shrink-0">
          {/* Language Selector Dropdown */}
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
            onClick={onOpenGuide}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/90 hover:bg-emerald-400 text-white rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 active:scale-95 shadow-md whitespace-nowrap"
            title={t.guideBtn}
          >
            <BookOpen className="w-4 h-4" />
            <span>{t.guideBtn}</span>
          </button>

          <button
            onClick={onOpenFlashcard}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white/20 hover:bg-white/30 text-white rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 backdrop-blur-sm border border-white/20 active:scale-95 shadow-md whitespace-nowrap"
            title={t.flashcardBtn}
          >
            <GraduationCap className="w-4 h-4" />
            <span>{t.flashcardBtn}</span>
          </button>

          <button
            onClick={onOpenQuiz}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-400 hover:bg-amber-300 text-amber-950 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 active:scale-95 shadow-md whitespace-nowrap"
            title={t.quizBtn}
          >
            <Gamepad2 className="w-4 h-4" />
            <span>{t.quizBtn}</span>
          </button>

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
    </header>
  );
};
