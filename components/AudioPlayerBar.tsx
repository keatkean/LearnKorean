"use client";

import React from 'react';
import { Translations } from '@/lib/i18n';
import { Volume2, Gauge, Mic, Square } from 'lucide-react';

interface AudioPlayerBarProps {
  isPlaying: boolean;
  activeText: string | null;
  rate: number;
  setRate: (rate: number) => void;
  voices: SpeechSynthesisVoice[];
  selectedVoice: SpeechSynthesisVoice | null;
  setSelectedVoice: (voice: SpeechSynthesisVoice | null) => void;
  onStop: () => void;
  isSupported: boolean;
  t: Translations;
}

export const AudioPlayerBar: React.FC<AudioPlayerBarProps> = ({
  isPlaying,
  activeText,
  rate,
  setRate,
  voices,
  selectedVoice,
  setSelectedVoice,
  onStop,
  isSupported,
  t,
}) => {
  const speeds = [
    { value: 0.5, label: t.speedSlow },
    { value: 0.75, label: t.speedMedium },
    { value: 0.85, label: t.speedNormal },
    { value: 1.0, label: t.speedFast },
  ];

  return (
    <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-slate-200 dark:border-gray-800 p-3 sm:px-6 shadow-2xl sticky bottom-0 z-30 transition-all">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
        
        {/* Status / Active Playing Indicator */}
        <div className="flex items-center gap-3">
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
              isPlaying
                ? 'bg-indigo-600 text-white animate-pulse shadow-lg shadow-indigo-500/30'
                : 'bg-slate-100 dark:bg-gray-800 text-slate-500 dark:text-gray-400'
            }`}
          >
            <Volume2 className={`w-5 h-5 ${isPlaying ? 'animate-bounce' : ''}`} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-800 dark:text-gray-200">
                {isPlaying ? t.audioStatusPlaying : t.audioStatusReady}
              </span>
              {activeText && (
                <span className="bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-extrabold px-2.5 py-0.5 rounded-lg text-base animate-pulse border border-indigo-200 dark:border-indigo-800">
                  {activeText}
                </span>
              )}
            </div>
            <p className="text-[11px] text-slate-500 dark:text-gray-400">
              {!isSupported ? t.audioNotSupported : t.audioTip}
            </p>
          </div>
        </div>

        {/* Controls: Speed & Voice Selection */}
        <div className="flex items-center gap-2 sm:gap-4 flex-wrap justify-center">
          {/* Rate Selector */}
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-gray-800 p-1 rounded-xl border border-slate-200 dark:border-gray-700">
            <Gauge className="w-4 h-4 text-slate-500 ml-1" />
            {speeds.map((s) => (
              <button
                key={s.value}
                onClick={() => setRate(s.value)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                  rate === s.value
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-gray-300 hover:text-indigo-600'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Voice Selector (if multiple exist) */}
          {voices.length > 1 && (
            <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-gray-800 px-2 py-1 rounded-xl border border-slate-200 dark:border-gray-700">
              <Mic className="w-4 h-4 text-slate-500" />
              <select
                value={selectedVoice?.name || ''}
                onChange={(e) => {
                  const found = voices.find((v) => v.name === e.target.value);
                  if (found) setSelectedVoice(found);
                }}
                className="bg-transparent text-xs font-medium text-slate-700 dark:text-gray-300 outline-none cursor-pointer max-w-[140px] truncate"
              >
                {voices.map((v) => (
                  <option key={v.name} value={v.name} className="dark:bg-gray-900">
                    {v.name.replace('Microsoft ', '').replace('Google ', '')} ({v.lang})
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Stop Button */}
          {isPlaying && (
            <button
              onClick={onStop}
              className="flex items-center gap-1 px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm active:scale-95"
            >
              <Square className="w-3.5 h-3.5 fill-current" />
              {t.stopBtn}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
