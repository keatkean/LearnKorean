"use client";

import React, { useState } from 'react';
import { Volume2, X, Info, Activity } from 'lucide-react';
import { Translations, Locale } from '@/lib/i18n';

interface SoundCategory {
  type: string;
  title: Record<Locale, string>;
  examples: string[];
  description: Record<Locale, string>;
  tonguePosition: Record<Locale, string>;
  airflow: Record<Locale, string>;
  svgPath: string;
}

const SOUND_CATEGORIES: SoundCategory[] = [
  {
    type: 'velar',
    title: {
      'zh-CN': '软腭音 / 舌根音 (ㄱ / ㅋ / ㄲ)',
      'zh-TW': '軟顎音 / 舌根音 (ㄱ / ㅋ / ㄲ)',
      'en': 'Velar Consonants (ㄱ / ㅋ / ㄲ)',
    },
    examples: ['ㄱ', 'ㅋ', 'ㄲ'],
    description: {
      'zh-CN': '舌根抬起紧贴软腭阻断气流，然后突然释放发音。',
      'zh-TW': '舌根抬起緊貼軟顎阻斷氣流，然後突然釋放發音。',
      'en': 'Back of tongue touches the soft palate (velum) to block airflow momentarily.',
    },
    tonguePosition: {
      'zh-CN': '舌根后部隆起并抵住软腭部位。',
      'zh-TW': '舌根後部隆起並抵住軟顎部位。',
      'en': 'Raised back of tongue pressed against soft palate.',
    },
    airflow: {
      'zh-CN': '气流在咽喉软腭处爆发性冲出。',
      'zh-TW': '氣流在咽喉軟顎處爆發性衝出。',
      'en': 'Explosive release of air through throat.',
    },
    svgPath: 'M 40,140 Q 90,80 160,110',
  },
  {
    type: 'alveolar',
    title: {
      'zh-CN': '齿龈音 / 舌尖音 (ㄴ / ㄷ / ㅌ / ㄸ / ㄹ)',
      'zh-TW': '齒齦音 / 舌尖音 (ㄴ / ㄷ / ㅌ / ㄸ / ㄹ)',
      'en': 'Alveolar Consonants (ㄴ / ㄷ / ㅌ / ㄸ / ㄹ)',
    },
    examples: ['ㄴ', 'ㄷ', 'ㅌ', 'ㄸ', 'ㄹ'],
    description: {
      'zh-CN': '舌尖抵住上齿龈（上门牙后方），形成阻塞后释放。',
      'zh-TW': '舌尖抵住上齒齦（上門牙後方），形成阻塞後釋放。',
      'en': 'Tip of tongue touches upper teeth ridge (alveolar ridge).',
    },
    tonguePosition: {
      'zh-CN': '舌尖紧贴上门牙背后的上齿龈处。',
      'zh-TW': '舌尖緊貼上門牙背後的上齒齦處。',
      'en': 'Tip of tongue pressed behind upper front teeth.',
    },
    airflow: {
      'zh-CN': '气流冲开齿龈或经鼻腔（如 ㄴ）呼出。',
      'zh-TW': '氣流衝開齒齦或經鼻腔（如 ㄴ）呼出。',
      'en': 'Air released past alveolar ridge or through nose (for ㄴ).',
    },
    svgPath: 'M 40,140 Q 120,60 170,70',
  },
  {
    type: 'labial',
    title: {
      'zh-CN': '双唇音 / 唇音 (ㅁ / ㅂ / ㅍ / ㅃ)',
      'zh-TW': '雙唇音 / 唇音 (ㅁ / ㅂ / ㅍ / ㅃ)',
      'en': 'Bilabial Consonants (ㅁ / ㅂ / ㅍ / ㅃ)',
    },
    examples: ['ㅁ', 'ㅂ', 'ㅍ', 'ㅃ'],
    description: {
      'zh-CN': '上下双唇紧闭形成阻塞，随后快速弹出发音。',
      'zh-TW': '上下雙唇緊閉形成阻塞，隨後快速彈出發音。',
      'en': 'Lips come together to form obstruction before releasing sound.',
    },
    tonguePosition: {
      'zh-CN': '舌头自然平放在口腔底部放松。',
      'zh-TW': '舌頭自然平放在口腔底部放鬆。',
      'en': 'Tongue rests low in mouth.',
    },
    airflow: {
      'zh-CN': '双唇突然张开，气流爆破呼出（或经鼻腔如 ㅁ）。',
      'zh-TW': '雙唇突然張開，氣流爆破呼出（或經鼻腔如 ㅁ）。',
      'en': 'Lips open popping air out.',
    },
    svgPath: 'M 40,140 Q 100,120 180,120',
  },
  {
    type: 'sibilant',
    title: {
      'zh-CN': '齿音 / 擦音 (ㅅ / ㅆ / ㅈ / ㅊ / ㅉ)',
      'zh-TW': '齒音 / 擦音 (ㅅ / ㅆ / ㅈ / ㅊ / ㅉ)',
      'en': 'Dental Sibilants (ㅅ / ㅆ / ㅈ / ㅊ / ㅉ)',
    },
    examples: ['ㅅ', 'ㅆ', 'ㅈ', 'ㅊ', 'ㅉ'],
    description: {
      'zh-CN': '舌面抬起接近上腭形成狭缝，气流摩擦挤出。',
      'zh-TW': '舌面抬起接近上顎形成狹縫，氣流摩擦擠出。',
      'en': 'Air squeezed through narrow gap between tongue blade and roof of mouth.',
    },
    tonguePosition: {
      'zh-CN': '舌面靠近硬腭与齿龈，形成狭窄细缝。',
      'zh-TW': '舌面靠近硬顎與齒齦，形成狹窄細縫。',
      'en': 'Tongue blade raised near palate creating narrow slit.',
    },
    airflow: {
      'zh-CN': '气流持续摩擦挤出发音。',
      'zh-TW': '氣流持續摩擦擠出發音。',
      'en': 'Continuous friction airflow.',
    },
    svgPath: 'M 40,140 Q 110,70 160,85',
  },
];

interface VocalTractGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSpeak: (text: string) => void;
  locale: Locale;
  t: Translations;
}

export const VocalTractGuideModal: React.FC<VocalTractGuideModalProps> = ({
  isOpen,
  onClose,
  onSpeak,
  locale,
  t,
}) => {
  const [activeCategory, setActiveCategory] = useState<SoundCategory>(SOUND_CATEGORIES[0]);

  if (!isOpen) return null;

  const getLangStr = (obj: Record<Locale, string>) => obj[locale] || obj['en'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl p-4 sm:p-6 flex flex-col gap-6">

        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 rounded-xl">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                {t.vocalTitle}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t.vocalSubtitle}
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

        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          {SOUND_CATEGORIES.map((cat) => (
            <button
              key={cat.type}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 text-xs font-bold rounded-xl whitespace-nowrap transition-all ${
                activeCategory.type === cat.type
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-indigo-50 dark:hover:bg-indigo-950'
              }`}
            >
              {getLangStr(cat.title)}
            </button>
          ))}
        </div>

        {/* Anatomical Mouth Profile Diagram & Text Guide */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          
          {/* Mouth Profile SVG Card */}
          <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 relative">
            <svg viewBox="0 0 200 200" className="w-48 h-48">
              {/* Outer Vocal Tract Profile (Head/Lips outline) */}
              <path d="M 20,40 C 40,10 160,10 180,40 C 190,80 190,120 180,160 C 140,190 60,190 20,160 C 10,120 10,80 20,40" fill="none" stroke="#cbd5e1" strokeWidth="3" />
              {/* Hard palate upper arch */}
              <path d="M 40,60 Q 100,50 170,70" fill="none" stroke="#64748b" strokeWidth="4" />
              {/* Dynamic Tongue Curve */}
              <path d={activeCategory.svgPath} fill="none" stroke="#4f46e5" strokeWidth="6" strokeLinecap="round" className="animate-pulse" />
            </svg>

            <span className="text-[10px] text-slate-400 italic text-center">
              {t.vocalDiagramNote}
            </span>
          </div>

          {/* Description Details */}
          <div className="flex flex-col gap-3">
            <h3 className="text-base font-bold text-slate-800 dark:text-slate-100">
              {getLangStr(activeCategory.title)}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {getLangStr(activeCategory.description)}
            </p>

            <div className="bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/50 rounded-xl p-3 flex flex-col gap-1.5 text-xs">
              <div className="font-bold text-indigo-900 dark:text-indigo-300">
                {t.vocalTongueLabel} {getLangStr(activeCategory.tonguePosition)}
              </div>
              <div className="text-indigo-700 dark:text-indigo-400">
                {t.vocalAirflowLabel} {getLangStr(activeCategory.airflow)}
              </div>
            </div>

            {/* Try Sounds Buttons */}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-xs font-semibold text-slate-500">{t.vocalTrySounds}</span>
              {activeCategory.examples.map((ex) => (
                <button
                  key={ex}
                  onClick={() => onSpeak(ex)}
                  className="flex items-center gap-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-800 dark:text-slate-100 transition-colors shadow-xs"
                >
                  <Volume2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  <span>{ex}</span>
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
