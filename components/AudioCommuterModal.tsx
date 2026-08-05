"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipForward, Headphones, X, Eye, EyeOff, RotateCcw, Shuffle, Volume2 } from 'lucide-react';
import { Translations, Locale } from '@/lib/i18n';

interface AudioCommuterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSpeak: (text: string) => void;
  locale: Locale;
  t: Translations;
}

interface CommuterItem {
  hangul: string;
  label: Record<Locale, string>;
}

const COMMUTER_DRILL_ITEMS: CommuterItem[] = [
  // Basic Consonant + A Syllables
  { hangul: '가', label: { 'zh-CN': 'ㄱ (기역) + ㅏ = 가', 'zh-TW': 'ㄱ (기역) + ㅏ = 가', 'en': 'Giyeok + A (가)' } },
  { hangul: '나', label: { 'zh-CN': 'ㄴ (니은) + ㅏ = 나', 'zh-TW': 'ㄴ (니은) + ㅏ = 나', 'en': 'Nieun + A (나)' } },
  { hangul: '다', label: { 'zh-CN': 'ㄷ (디귿) + ㅏ = 다', 'zh-TW': 'ㄷ (디귿) + ㅏ = 다', 'en': 'Digeut + A (다)' } },
  { hangul: '라', label: { 'zh-CN': 'ㄹ (리을) + ㅏ = 라', 'zh-TW': 'ㄹ (리을) + ㅏ = 라', 'en': 'Rieul + A (라)' } },
  { hangul: '마', label: { 'zh-CN': 'ㅁ (미음) + ㅏ = 마', 'zh-TW': 'ㅁ (미음) + ㅏ = 마', 'en': 'Mieum + A (마)' } },
  { hangul: '바', label: { 'zh-CN': 'ㅂ (비읍) + ㅏ = 바', 'zh-TW': 'ㅂ (비읍) + ㅏ = 바', 'en': 'Bieup + A (바)' } },
  { hangul: '사', label: { 'zh-CN': 'ㅅ (시옷) + ㅏ = 사', 'zh-TW': 'ㅅ (시옷) + ㅏ = 사', 'en': 'Siot + A (사)' } },
  { hangul: '아', label: { 'zh-CN': 'ㅇ (이응) + ㅏ = 아', 'zh-TW': 'ㅇ (이응) + ㅏ = 아', 'en': 'Ieung + A (아)' } },
  { hangul: '자', label: { 'zh-CN': 'ㅈ (지읒) + ㅏ = 자', 'zh-TW': 'ㅈ (지읒) + ㅏ = 자', 'en': 'Jieut + A (자)' } },
  { hangul: '차', label: { 'zh-CN': 'ㅊ (치읓) + ㅏ = 차', 'zh-TW': 'ㅊ (치읓) + ㅏ = 차', 'en': 'Chieut + A (차)' } },
  { hangul: '카', label: { 'zh-CN': 'ㅋ (키읔) + ㅏ = 카', 'zh-TW': 'ㅋ (키읔) + ㅏ = 카', 'en': 'Kieuk + A (카)' } },
  { hangul: '타', label: { 'zh-CN': 'ㅌ (티읕) + ㅏ = 타', 'zh-TW': 'ㅌ (티읕) + ㅏ = 타', 'en': 'Tieut + A (타)' } },
  { hangul: '파', label: { 'zh-CN': 'ㅍ (피읖) + ㅏ = 파', 'zh-TW': 'ㅍ (피읖) + ㅏ = 파', 'en': 'Pieup + A (파)' } },
  { hangul: '하', label: { 'zh-CN': 'ㅎ (히읗) + ㅏ = 하', 'zh-TW': 'ㅎ (히읗) + ㅏ = 하', 'en': 'Hieut + A (하)' } },

  // Vowel Variation Syllables
  { hangul: '고', label: { 'zh-CN': 'ㄱ + ㅗ = 고 (高/古)', 'zh-TW': 'ㄱ + ㅗ = 고', 'en': 'Giyeok + O (고)' } },
  { hangul: '누', label: { 'zh-CN': 'ㄴ + ㅜ = 누 (谁/姐)', 'zh-TW': 'ㄴ + ㅜ = 누', 'en': 'Nieun + U (누)' } },
  { hangul: '디', label: { 'zh-CN': 'ㄷ + ㅣ = 디 (D)', 'zh-TW': 'ㄷ + ㅣ = 디', 'en': 'Digeut + I (디)' } },
  { hangul: '러', label: { 'zh-CN': 'ㄹ + ㅓ = 러', 'zh-TW': 'ㄹ + ㅓ = 러', 'en': 'Rieul + Eo (러)' } },
  { hangul: '모', label: { 'zh-CN': 'ㅁ + ㅗ = 모 (母/毛)', 'zh-TW': 'ㅁ + ㅗ = 모', 'en': 'Mieum + O (모)' } },
  { hangul: '부', label: { 'zh-CN': 'ㅂ + ㅜ = 부 (富/父)', 'zh-TW': 'ㅂ + ㅜ = 부', 'en': 'Bieup + U (부)' } },
  { hangul: '서', label: { 'zh-CN': 'ㅅ + ㅓ = 서 (书/西)', 'zh-TW': 'ㅅ + ㅓ = 서', 'en': 'Siot + Eo (서)' } },

  // Batchim / Closing Syllables
  { hangul: '한', label: { 'zh-CN': 'ㅎ + ㅏ + ㄴ = 한 (韩/汉)', 'zh-TW': 'ㅎ + ㅏ + ㄴ = 한', 'en': 'Han (韩/Han)' } },
  { hangul: '국', label: { 'zh-CN': 'ㄱ + ㅜ + ㄱ = 국 (国/汤)', 'zh-TW': 'ㄱ + ㅜ + ㄱ = 국', 'en': 'Guk (国/Guk)' } },
  { hangul: '글', label: { 'zh-CN': 'ㄱ + ㅡ + ㄹ = 글 (字/文)', 'zh-TW': 'ㄱ + ㅡ + ㄹ = 글', 'en': 'Geul (文/Writing)' } },

  // High Frequency K-Culture Words
  { hangul: '사랑', label: { 'zh-CN': '사랑 (爱 / Love)', 'zh-TW': '사랑 (愛 / Love)', 'en': 'Sarang (Love)' } },
  { hangul: '대박', label: { 'zh-CN': '대박 (大发 / Awesome)', 'zh-TW': '대박 (大發 / Awesome)', 'en': 'Daebak (Awesome)' } },
  { hangul: '진짜', label: { 'zh-CN': '진짜 (真的 / Really)', 'zh-TW': '진짜 (真的 / Really)', 'en': 'Jinjja (Really)' } },
  { hangul: '영원히', label: { 'zh-CN': '영원히 (永远 / Forever)', 'zh-TW': '영원히 (永遠 / Forever)', 'en': 'Yeong-wonhi (Forever)' } },
  { hangul: '감사합니다', label: { 'zh-CN': '감사합니다 (谢谢 / Thank you)', 'zh-TW': '감사합니다 (謝謝 / Thank you)', 'en': 'Gamsahamnida (Thank you)' } },
  { hangul: '안녕하세요', label: { 'zh-CN': '안녕하세요 (你好 / Hello)', 'zh-TW': '안녕하세요 (你好 / Hello)', 'en': 'Annyeonghaseyo (Hello)' } },
];

export const AudioCommuterModal: React.FC<AudioCommuterModalProps> = ({
  isOpen,
  onClose,
  onSpeak,
  locale,
  t,
}) => {
  const [items, setItems] = useState<CommuterItem[]>(COMMUTER_DRILL_ITEMS);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlayingQueue, setIsPlayingQueue] = useState<boolean>(false);
  const [hideText, setHideText] = useState<boolean>(false); // Audio Blind Test
  const [speedMultiplier] = useState<number>(2500); // 2.5 sec pause

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Helper to ensure SpeechSynthesis is un-paused
  const triggerAudio = (text: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }
    }
    onSpeak(text);
  };

  useEffect(() => {
    if (isPlayingQueue && isOpen && items.length > 0) {
      const current = items[currentIndex];
      triggerAudio(current.hangul);

      timerRef.current = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
      }, speedMultiplier);
    } else {
      if (timerRef.current) clearTimeout(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isPlayingQueue, currentIndex, isOpen, speedMultiplier, items]);

  if (!isOpen) return null;

  const currentItem = items[currentIndex] || items[0];
  const itemLabel = currentItem ? (currentItem.label[locale] || currentItem.label['en']) : '';

  const handleTogglePlay = () => {
    const nextState = !isPlayingQueue;
    setIsPlayingQueue(nextState);
    if (nextState) {
      triggerAudio(currentItem.hangul);
    } else {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    }
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(nextIndex);
    triggerAudio(items[nextIndex].hangul);
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setIsPlayingQueue(false);
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  };

  const handleShuffle = () => {
    const shuffled = [...COMMUTER_DRILL_ITEMS].sort(() => Math.random() - 0.5);
    setItems(shuffled);
    setCurrentIndex(0);
    triggerAudio(shuffled[0].hangul);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl p-4 sm:p-6 flex flex-col gap-6">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 rounded-xl">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                {t.commuterTitle}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t.commuterSubtitle}
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              setIsPlayingQueue(false);
              if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
                window.speechSynthesis.cancel();
              }
              onClose();
            }}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Player Card */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-2xl p-8 flex flex-col items-center justify-center gap-6 shadow-xl relative overflow-hidden">
          
          {/* Audio Blind Test Toggle */}
          <button
            onClick={() => setHideText(!hideText)}
            className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold transition-colors"
          >
            {hideText ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            <span>{hideText ? t.commuterBlindTestActive : t.commuterHideText}</span>
          </button>

          <div className="text-xs uppercase tracking-widest font-semibold text-indigo-200">
            {t.commuterTrackCount} {currentIndex + 1} / {items.length}
          </div>

          {/* Main Character Display - Clickable for Instant Audio */}
          <button
            onClick={() => triggerAudio(currentItem.hangul)}
            className="text-7xl font-black tracking-wider transition-all transform hover:scale-110 active:scale-95 min-h-[96px] flex items-center justify-center text-center px-2 cursor-pointer group"
            title="Click to replay sound"
          >
            <span>{hideText ? '?' : currentItem.hangul}</span>
            <Volume2 className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity ml-2 text-indigo-200" />
          </button>

          <div className="text-xs font-semibold text-indigo-100 bg-white/10 px-4 py-1.5 rounded-full text-center">
            {hideText ? t.commuterBlindHint : itemLabel}
          </div>

          {/* Controls Bar */}
          <div className="flex items-center gap-4 mt-2">
            <button
              onClick={handleShuffle}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              title="Shuffle queue"
            >
              <Shuffle className="w-5 h-5" />
            </button>

            <button
              onClick={handleReset}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              title="Reset queue"
            >
              <RotateCcw className="w-5 h-5" />
            </button>

            <button
              onClick={handleTogglePlay}
              className="p-5 bg-white text-indigo-700 hover:bg-indigo-50 rounded-full shadow-lg transform active:scale-95 transition-all"
            >
              {isPlayingQueue ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 ml-0.5" />}
            </button>

            <button
              onClick={handleNext}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              title="Skip to next"
            >
              <SkipForward className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
