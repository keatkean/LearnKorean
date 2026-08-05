"use client";

import { useState, useEffect, useCallback, useRef } from 'react';

export interface UseSpeechReturn {
  speak: (text: string, onEnd?: () => void) => void;
  stop: () => void;
  isPlaying: boolean;
  activeText: string | null;
  rate: number;
  setRate: (rate: number) => void;
  voices: SpeechSynthesisVoice[];
  selectedVoice: SpeechSynthesisVoice | null;
  setSelectedVoice: (voice: SpeechSynthesisVoice | null) => void;
  isSupported: boolean;
}

export function useSpeech(): UseSpeechReturn {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeText, setActiveText] = useState<string | null>(null);
  const [rate, setRate] = useState<number>(0.85);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [isSupported, setIsSupported] = useState<boolean>(true);

  const onEndCallbackRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setIsSupported(false);
      return;
    }

    const updateVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      const koreanVoices = availableVoices.filter((v) => v.lang.startsWith('ko'));
      setVoices(koreanVoices.length > 0 ? koreanVoices : availableVoices);

      // Auto-select Korean voice if available
      if (koreanVoices.length > 0 && !selectedVoice) {
        const preferred = koreanVoices.find((v) => v.localService) || koreanVoices[0];
        setSelectedVoice(preferred);
      }
    };

    updateVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = updateVoices;
    }

    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [selectedVoice]);

  const stop = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setActiveText(null);
    }
  }, []);

  const speak = useCallback(
    (text: string, onEnd?: () => void) => {
      if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
        return;
      }

      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ko-KR';
      utterance.rate = rate;

      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }

      onEndCallbackRef.current = onEnd || null;

      utterance.onstart = () => {
        setIsPlaying(true);
        setActiveText(text);
      };

      utterance.onend = () => {
        setIsPlaying(false);
        setActiveText(null);
        if (onEndCallbackRef.current) {
          onEndCallbackRef.current();
          onEndCallbackRef.current = null;
        }
      };

      utterance.onerror = (e) => {
        console.warn('SpeechSynthesis error:', e);
        setIsPlaying(false);
        setActiveText(null);
        if (onEndCallbackRef.current) {
          onEndCallbackRef.current();
          onEndCallbackRef.current = null;
        }
      };

      window.speechSynthesis.speak(utterance);
    },
    [rate, selectedVoice]
  );

  return {
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
  };
}
