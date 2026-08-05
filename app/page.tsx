"use client";

import React, { useState, useEffect } from 'react';
import { ViewMode, getFilteredMatrix } from '@/lib/hangulData';
import { useSpeech } from '@/lib/useSpeech';
import { Locale, dictionaries } from '@/lib/i18n';
import { HeaderBanner } from '@/components/HeaderBanner';
import { ViewControls } from '@/components/ViewControls';
import { HangulTable } from '@/components/HangulTable';
import { AudioPlayerBar } from '@/components/AudioPlayerBar';
import { FlashcardModal } from '@/components/FlashcardModal';
import { QuizModal } from '@/components/QuizModal';
import { PronunciationGuideModal } from '@/components/PronunciationGuideModal';
import { SyllableBuilderModal } from '@/components/SyllableBuilderModal';
import { StrokeOrderCanvasModal } from '@/components/StrokeOrderCanvasModal';
import { VocalTractGuideModal } from '@/components/VocalTractGuideModal';
import { TypingGameModal } from '@/components/TypingGameModal';
import { PronunciationEvaluatorModal } from '@/components/PronunciationEvaluatorModal';
import { VocabExplorerModal } from '@/components/VocabExplorerModal';
import { AudioCommuterModal } from '@/components/AudioCommuterModal';
import { Sparkles, Lightbulb } from 'lucide-react';

export default function Home() {
  const [locale, setLocale] = useState<Locale>('zh-CN');
  const [currentMode, setCurrentMode] = useState<ViewMode>('basic');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Modals state
  const [isFlashcardOpen, setIsFlashcardOpen] = useState<boolean>(false);
  const [isQuizOpen, setIsQuizOpen] = useState<boolean>(false);
  const [isGuideOpen, setIsGuideOpen] = useState<boolean>(false);
  const [isBuilderOpen, setIsBuilderOpen] = useState<boolean>(false);
  const [isStrokeCanvasOpen, setIsStrokeCanvasOpen] = useState<boolean>(false);
  const [isVocalTractOpen, setIsVocalTractOpen] = useState<boolean>(false);
  const [isTypingGameOpen, setIsTypingGameOpen] = useState<boolean>(false);
  const [isEvaluatorOpen, setIsEvaluatorOpen] = useState<boolean>(false);
  const [isVocabOpen, setIsVocabOpen] = useState<boolean>(false);
  const [isCommuterOpen, setIsCommuterOpen] = useState<boolean>(false);

  const t = dictionaries[locale];

  const {
    speak,
    stop,
    isPlaying,
    activeText,
    rate,
    setRate,
    voices,
    selectedVoice,
    setSelectedVoice,
    isSupported,
  } = useSpeech();

  // Sync Dark Mode class on html tag
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Register PWA Service Worker
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js').catch((err) => {
        console.log('ServiceWorker registration failed: ', err);
      });
    }
  }, []);

  const matrix = getFilteredMatrix(currentMode);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      {/* Top Navigation Banner */}
      <HeaderBanner
        locale={locale}
        setLocale={setLocale}
        t={t}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenFlashcard={() => setIsFlashcardOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenGuide={() => setIsGuideOpen(true)}
        onOpenBuilder={() => setIsBuilderOpen(true)}
        onOpenStrokeCanvas={() => setIsStrokeCanvasOpen(true)}
        onOpenVocalTract={() => setIsVocalTractOpen(true)}
        onOpenTypingGame={() => setIsTypingGameOpen(true)}
        onOpenEvaluator={() => setIsEvaluatorOpen(true)}
        onOpenVocab={() => setIsVocabOpen(true)}
        onOpenCommuter={() => setIsCommuterOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-3 sm:p-6 flex flex-col gap-4">
        {/* Navigation Tabs & Search Bar */}
        <ViewControls
          currentMode={currentMode}
          onSelectMode={(mode) => setCurrentMode(mode)}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          t={t}
        />

        {/* Matrix Grid Table */}
        <div className="my-2">
          <HangulTable
            consonants={matrix.consonants}
            vowels={matrix.vowels}
            activeText={activeText}
            searchTerm={searchTerm}
            onSpeak={(text) => speak(text)}
            t={t}
          />
        </div>

        {/* Informational Footer Note */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 sm:p-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 flex items-center justify-between gap-2 shadow-sm">
          <div className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-amber-500 flex-shrink-0" />
            <span>{t.tipText}</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-indigo-600 dark:text-indigo-400 font-semibold bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-lg">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.stickyNote}</span>
          </div>
        </div>
      </main>

      {/* Sticky Bottom Audio Player Bar */}
      <AudioPlayerBar
        isPlaying={isPlaying}
        activeText={activeText}
        rate={rate}
        setRate={setRate}
        voices={voices}
        selectedVoice={selectedVoice}
        setSelectedVoice={setSelectedVoice}
        onStop={stop}
        isSupported={isSupported}
        t={t}
      />

      {/* Modals for 10 Tools */}
      <PronunciationGuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
        t={t}
      />

      <FlashcardModal
        isOpen={isFlashcardOpen}
        onClose={() => setIsFlashcardOpen(false)}
        onSpeak={(text) => speak(text)}
        t={t}
      />

      <QuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onSpeak={(text) => speak(text)}
        t={t}
      />

      <SyllableBuilderModal
        isOpen={isBuilderOpen}
        onClose={() => setIsBuilderOpen(false)}
        onSpeak={(text) => speak(text)}
        t={t}
      />

      <StrokeOrderCanvasModal
        isOpen={isStrokeCanvasOpen}
        onClose={() => setIsStrokeCanvasOpen(false)}
        onSpeak={(text) => speak(text)}
        t={t}
      />

      <VocalTractGuideModal
        isOpen={isVocalTractOpen}
        onClose={() => setIsVocalTractOpen(false)}
        onSpeak={(text) => speak(text)}
        t={t}
      />

      <TypingGameModal
        isOpen={isTypingGameOpen}
        onClose={() => setIsTypingGameOpen(false)}
        onSpeak={(text) => speak(text)}
        t={t}
      />

      <PronunciationEvaluatorModal
        isOpen={isEvaluatorOpen}
        onClose={() => setIsEvaluatorOpen(false)}
        onSpeak={(text) => speak(text)}
        t={t}
      />

      <VocabExplorerModal
        isOpen={isVocabOpen}
        onClose={() => setIsVocabOpen(false)}
        onSpeak={(text) => speak(text)}
        locale={locale}
        t={t}
      />

      <AudioCommuterModal
        isOpen={isCommuterOpen}
        onClose={() => setIsCommuterOpen(false)}
        onSpeak={(text) => speak(text)}
        t={t}
      />
    </div>
  );
}
