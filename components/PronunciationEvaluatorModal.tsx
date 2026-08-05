"use client";

import React, { useState } from 'react';
import { useSpeechRecognition } from '@/lib/useSpeechRecognition';
import { Mic, MicOff, Volume2, AlertCircle, Award, Sparkles, X } from 'lucide-react';
import { Translations } from '@/lib/i18n';

interface PronunciationEvaluatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSpeak: (text: string) => void;
  t: Translations;
}

const SAMPLE_TARGETS = ['가', '나', '다', '사랑', '대박', '감사합니다', '안녕하세요'];

export const PronunciationEvaluatorModal: React.FC<PronunciationEvaluatorModalProps> = ({
  isOpen,
  onClose,
  onSpeak,
  t,
}) => {
  const [currentTarget, setCurrentTarget] = useState<string>('사랑');
  const {
    isListening,
    transcript,
    confidence,
    isSupported,
    error,
    startListening,
    stopListening,
    resetTranscript,
  } = useSpeechRecognition();

  if (!isOpen) return null;

  const isMatch = transcript.trim() === currentTarget.trim() || transcript.includes(currentTarget);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl p-4 sm:p-6 flex flex-col gap-6">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 rounded-xl">
              <Mic className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                {t.evalTitle}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t.evalSubtitle}
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

        {/* Target Words Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">{t.evalTargetLabel}</span>
          {SAMPLE_TARGETS.map((target) => (
            <button
              key={target}
              onClick={() => {
                setCurrentTarget(target);
                resetTranscript();
              }}
              className={`px-3 py-1.5 text-xs font-bold rounded-xl whitespace-nowrap transition-all ${
                currentTarget === target
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-950'
              }`}
            >
              {target}
            </button>
          ))}
        </div>

        {/* Target Word Display Card */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-indigo-950/40 border border-indigo-100 dark:border-indigo-900 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 relative">
          <div className="text-5xl font-black text-slate-800 dark:text-slate-100 tracking-wider">
            {currentTarget}
          </div>

          <button
            onClick={() => onSpeak(currentTarget)}
            className="flex items-center gap-1.5 bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 text-xs font-bold px-4 py-2 rounded-xl shadow-sm border border-indigo-100 dark:border-indigo-900 hover:bg-indigo-50 transition-colors"
          >
            <Volume2 className="w-4 h-4" />
            <span>{t.evalListenReference}</span>
          </button>
        </div>

        {/* Browser Microphone Support Status */}
        {!isSupported ? (
          <div className="bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-900 rounded-xl p-4 text-xs text-amber-800 dark:text-amber-300 flex items-center gap-3">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <span>
              Web Speech API is not supported in this browser environment. Please use Google Chrome, Safari, or Microsoft Edge for microphone evaluation.
            </span>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            
            {/* Microphone Button */}
            <button
              onClick={isListening ? stopListening : () => startListening('ko-KR')}
              className={`w-20 h-20 rounded-full flex items-center justify-center transition-all transform active:scale-90 shadow-xl ${
                isListening
                  ? 'bg-red-500 text-white animate-pulse ring-8 ring-red-200 dark:ring-red-950'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105'
              }`}
            >
              {isListening ? <MicOff className="w-8 h-8" /> : <Mic className="w-8 h-8" />}
            </button>

            <span className="text-xs font-medium text-slate-500">
              {isListening ? t.evalListening : t.evalMicInstruction}
            </span>

            {/* Results Feedback Panel */}
            {transcript && (
              <div className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 flex flex-col items-center gap-2">
                <div className="text-xs text-slate-400 font-semibold uppercase">You Spoke:</div>
                <div className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                  "{transcript}"
                </div>

                <div className="flex items-center gap-2 mt-1">
                  {isMatch ? (
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-lg">
                      <Award className="w-4 h-4" />
                      <span>Perfect Pronunciation! ({confidence}% match)</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950 px-3 py-1 rounded-lg">
                      <Sparkles className="w-4 h-4" />
                      <span>Close! Keep practicing.</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {error && (
              <div className="text-xs text-red-500 font-medium">
                {error}
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
};
