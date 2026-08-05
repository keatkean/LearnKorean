"use client";

import { useState, useEffect, useCallback } from 'react';

export interface UseSpeechRecognitionReturn {
  isListening: boolean;
  transcript: string;
  confidence: number;
  error: string | null;
  isSupported: boolean;
  startListening: (lang?: string) => void;
  stopListening: () => void;
  resetTranscript: () => void;
}

export function useSpeechRecognition(): UseSpeechRecognitionReturn {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [confidence, setConfidence] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [recognition, setRecognition] = useState<any>(null);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

      if (SpeechRecognition) {
        setIsSupported(true);
        const instance = new SpeechRecognition();
        instance.continuous = false;
        instance.interimResults = false;
        instance.lang = 'ko-KR';

        instance.onstart = () => {
          setIsListening(true);
          setError(null);
        };

        instance.onresult = (event: any) => {
          if (event.results && event.results[0] && event.results[0][0]) {
            const res = event.results[0][0];
            setTranscript(res.transcript);
            setConfidence(Math.round((res.confidence || 0.85) * 100));
          }
          setIsListening(false);
        };

        instance.onerror = (event: any) => {
          setError(event.error || 'Speech recognition error');
          setIsListening(false);
        };

        instance.onend = () => {
          setIsListening(false);
        };

        setRecognition(instance);
      } else {
        setIsSupported(false);
      }
    }
  }, []);

  const startListening = useCallback((lang: string = 'ko-KR') => {
    if (!recognition) return;
    try {
      setTranscript('');
      setConfidence(0);
      setError(null);
      recognition.lang = lang;
      recognition.start();
    } catch (e: any) {
      console.error('Speech recognition start error', e);
      setError(e.message || 'Microphone access issue');
      setIsListening(false);
    }
  }, [recognition]);

  const stopListening = useCallback(() => {
    if (!recognition) return;
    try {
      recognition.stop();
    } catch (e) {
      console.error('Speech recognition stop error', e);
    }
    setIsListening(false);
  }, [recognition]);

  const resetTranscript = useCallback(() => {
    setTranscript('');
    setConfidence(0);
    setError(null);
  }, []);

  return {
    isListening,
    transcript,
    confidence,
    error,
    isSupported,
    startListening,
    stopListening,
    resetTranscript,
  };
}
