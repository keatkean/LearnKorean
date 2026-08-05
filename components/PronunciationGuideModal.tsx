"use client";

import React from 'react';
import { Translations } from '@/lib/i18n';
import { X, BookOpen, Sparkles } from 'lucide-react';

interface PronunciationGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: Translations;
}

export const PronunciationGuideModal: React.FC<PronunciationGuideModalProps> = ({
  isOpen,
  onClose,
  t,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-3xl p-6 max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-gray-800 pb-4 sticky top-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-10">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-300 rounded-xl">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-800 dark:text-gray-100">
                {t.guideTitle}
              </h2>
              <p className="text-xs text-slate-500 dark:text-gray-400">
                {t.guideSubtitle}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-gray-200 rounded-full hover:bg-slate-100 dark:hover:bg-gray-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Section */}
        <div className="space-y-6 my-4 text-xs sm:text-sm text-slate-700 dark:text-gray-300">
          {/* Section 1: Consonant Classification */}
          <section className="bg-slate-50 dark:bg-gray-800/60 p-4 rounded-2xl border border-slate-200 dark:border-gray-700">
            <h3 className="font-bold text-base text-indigo-600 dark:text-indigo-400 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              {t.guideSec1Title}
            </h3>
            <p className="text-xs text-slate-600 dark:text-gray-400 mb-3">
              {t.guideSec1Desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-white dark:bg-gray-900 p-3 rounded-xl border border-indigo-100 dark:border-gray-700 shadow-sm">
                <span className="font-bold text-indigo-700 dark:text-indigo-300 text-sm block mb-1">
                  {t.guidePlainTitle}
                </span>
                <p className="font-semibold text-slate-800 dark:text-gray-200 mb-1">
                  ㄱ, ㄷ, ㅂ, ㅅ, ㅈ
                </p>
                <p className="text-[11px] text-slate-500 dark:text-gray-400">
                  {t.guidePlainDesc}
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-3 rounded-xl border border-rose-100 dark:border-gray-700 shadow-sm">
                <span className="font-bold text-rose-600 dark:text-rose-400 text-sm block mb-1">
                  {t.guideTenseTitle}
                </span>
                <p className="font-semibold text-slate-800 dark:text-gray-200 mb-1">
                  ㄲ, ㄸ, ㅃ, ㅆ, ㅉ
                </p>
                <p className="text-[11px] text-slate-500 dark:text-gray-400">
                  {t.guideTenseDesc}
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-3 rounded-xl border border-amber-100 dark:border-gray-700 shadow-sm">
                <span className="font-bold text-amber-600 dark:text-amber-400 text-sm block mb-1">
                  {t.guideAspTitle}
                </span>
                <p className="font-semibold text-slate-800 dark:text-gray-200 mb-1">
                  ㅋ, ㅌ, ㅍ, ㅊ, ㅎ
                </p>
                <p className="text-[11px] text-slate-500 dark:text-gray-400">
                  {t.guideAspDesc}
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Confusing Vowels Comparison */}
          <section className="bg-slate-50 dark:bg-gray-800/60 p-4 rounded-2xl border border-slate-200 dark:border-gray-700">
            <h3 className="font-bold text-base text-indigo-600 dark:text-indigo-400 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              {t.guideSec2Title}
            </h3>

            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2 bg-white dark:bg-gray-900 p-2.5 rounded-xl border border-slate-200 dark:border-gray-700">
                <span className="bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold px-2 py-0.5 rounded text-xs flex-shrink-0">
                  ㅓ (eo) vs ㅗ (o)
                </span>
                <div className="text-slate-600 dark:text-gray-300 text-[11px]">
                  {t.guideEoVsO}
                </div>
              </div>

              <div className="flex items-start gap-2 bg-white dark:bg-gray-900 p-2.5 rounded-xl border border-slate-200 dark:border-gray-700">
                <span className="bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold px-2 py-0.5 rounded text-xs flex-shrink-0">
                  ㅡ (eu) vs ㅣ (i)
                </span>
                <div className="text-slate-600 dark:text-gray-300 text-[11px]">
                  {t.guideEuVsI}
                </div>
              </div>

              <div className="flex items-start gap-2 bg-white dark:bg-gray-900 p-2.5 rounded-xl border border-slate-200 dark:border-gray-700">
                <span className="bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold px-2 py-0.5 rounded text-xs flex-shrink-0">
                  ㅐ (ae) vs ㅔ (e)
                </span>
                <div className="text-slate-600 dark:text-gray-300 text-[11px]">
                  {t.guideAeVsE}
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Batchim Overview */}
          <section className="bg-slate-50 dark:bg-gray-800/60 p-4 rounded-2xl border border-slate-200 dark:border-gray-700">
            <h3 className="font-bold text-base text-indigo-600 dark:text-indigo-400 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              {t.guideSec3Title}
            </h3>
            <p className="text-xs text-slate-600 dark:text-gray-400 mb-2">
              {t.guideSec3Desc}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-semibold">
              <div className="bg-white dark:bg-gray-900 p-2 rounded-lg border border-slate-200 dark:border-gray-700 text-center">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold">ㄱ [k]</span>: 舌根入声闭气
              </div>
              <div className="bg-white dark:bg-gray-900 p-2 rounded-lg border border-slate-200 dark:border-gray-700 text-center">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold">ㄴ [n]</span>: 前鼻音 n
              </div>
              <div className="bg-white dark:bg-gray-900 p-2 rounded-lg border border-slate-200 dark:border-gray-700 text-center">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold">ㄷ [t]</span>: 舌尖入声闭气
              </div>
              <div className="bg-white dark:bg-gray-900 p-2 rounded-lg border border-slate-200 dark:border-gray-700 text-center">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold">ㄹ [l]</span>: 舌尖卷起抵上齿龈
              </div>
              <div className="bg-white dark:bg-gray-900 p-2 rounded-lg border border-slate-200 dark:border-gray-700 text-center">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold">ㅁ [m]</span>: 闭唇鼻音 m
              </div>
              <div className="bg-white dark:bg-gray-900 p-2 rounded-lg border border-slate-200 dark:border-gray-700 text-center">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold">ㅂ [p]</span>: 双唇入声闭气
              </div>
              <div className="bg-white dark:bg-gray-900 p-2 rounded-lg border border-slate-200 dark:border-gray-700 text-center col-span-2">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold">ㅇ [ng]</span>: 后鼻音 ng
              </div>
            </div>
          </section>
        </div>

        {/* Footer Close */}
        <div className="w-full border-t border-slate-100 dark:border-gray-800 pt-3 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl text-xs sm:text-sm transition-all shadow-md active:scale-95"
          >
            {t.guideCloseBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
