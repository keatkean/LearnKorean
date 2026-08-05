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
  const activeUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setIsSupported(false);
      return;
    }

    const updateVoices = () => {
      try {
        const availableVoices = window.speechSynthesis.getVoices();
        const koreanVoices = availableVoices.filter((v) => v.lang.startsWith('ko'));
        setVoices(koreanVoices.length > 0 ? koreanVoices : availableVoices);

        if (koreanVoices.length > 0 && !selectedVoice) {
          const preferred = koreanVoices.find((v) => v.localService) || koreanVoices[0];
          setSelectedVoice(preferred);
        }
      } catch (e) {
        console.warn('Error loading speech voices:', e);
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
      activeUtteranceRef.current = null;
      setIsPlaying(false);
      setActiveText(null);
    }
  }, []);

  const speak = useCallback(
    (text: string, onEnd?: () => void) => {
      if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
        return;
      }

      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ko-KR';
      utterance.rate = rate;

      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }

      // Retain utterance in ref to prevent V8/JS engine garbage collection mid-speech
      activeUtteranceRef.current = utterance;
      onEndCallbackRef.current = onEnd || null;

      utterance.onstart = () => {
        setIsPlaying(true);
        setActiveText(text);
      };

      utterance.onend = () => {
        setIsPlaying(false);
        setActiveText(null);
        activeUtteranceRef.current = null;
        if (onEndCallbackRef.current) {
          onEndCallbackRef.current();
          onEndCallbackRef.current = null;
        }
      };

      utterance.onerror = (e) => {
        console.warn('SpeechSynthesis error:', e);
        setIsPlaying(false);
        setActiveText(null);
        activeUtteranceRef.current = null;
        if (onEndCallbackRef.current) {
          onEndCallbackRef.current();
          onEndCallbackRef.current = null;
        }
      };

      window.speechSynthesis.speak(utterance);
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }
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
