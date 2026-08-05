"use client";

import React, { useState, useRef, useEffect } from 'react';
import { HANGUL_STROKE_DATA, getCharacterStrokes } from '@/lib/hangulStrokes';
import { Edit3, Play, Trash2, X, Volume2, Search } from 'lucide-react';
import { Translations } from '@/lib/i18n';

interface StrokeOrderCanvasModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSpeak: (text: string) => void;
  t: Translations;
}

export const StrokeOrderCanvasModal: React.FC<StrokeOrderCanvasModalProps> = ({
  isOpen,
  onClose,
  onSpeak,
  t,
}) => {
  const [selectedChar, setSelectedChar] = useState<string>('ㄱ');
  const [customInput, setCustomInput] = useState<string>('');
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [showDemo, setShowDemo] = useState<boolean>(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const activeCharacter = customInput.trim() ? customInput.trim()[0] : selectedChar;
  const charData = getCharacterStrokes(activeCharacter);

  const handleClear = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  useEffect(() => {
    handleClear();
  }, [selectedChar, customInput]);

  if (!isOpen) return null;

  const startDrawing = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.strokeStyle = '#4f46e5';
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl p-4 sm:p-6 flex flex-col gap-6">

        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 rounded-xl">
              <Edit3 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                {t.strokeTitle}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t.strokeSubtitle}
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

        {/* Custom Input & Quick Selector */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative w-full sm:w-48">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              maxLength={2}
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder={t.strokePlaceholder}
              className="w-full text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl pl-9 pr-3 py-2 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1">
            {Object.keys(HANGUL_STROKE_DATA).slice(0, 16).map((char) => (
              <button
                key={char}
                onClick={() => {
                  setCustomInput('');
                  setSelectedChar(char);
                }}
                className={`w-9 h-9 text-sm font-bold rounded-xl flex-shrink-0 transition-all ${
                  selectedChar === char && !customInput
                    ? 'bg-indigo-600 text-white shadow-md scale-105'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-950'
                }`}
              >
                {char}
              </button>
            ))}
          </div>
        </div>

        {/* Canvas & Reference Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          
          {/* Reference Stroke Order Display */}
          <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 flex flex-col items-center justify-center gap-3 min-h-[260px] relative">
            <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              {charData?.name || `Character ${activeCharacter}`} ({charData?.romanization || 'Hangul'})
            </div>

            {/* SVG Reference Box */}
            <div className="relative w-48 h-48 bg-white dark:bg-slate-900 border border-dashed border-slate-300 dark:border-slate-700 rounded-xl flex items-center justify-center shadow-inner">
              <svg viewBox="0 0 200 200" className="w-full h-full p-2">
                <line x1="100" y1="0" x2="100" y2="200" stroke="#cbd5e1" strokeDasharray="4" strokeWidth="1" />
                <line x1="0" y1="100" x2="200" y2="100" stroke="#cbd5e1" strokeDasharray="4" strokeWidth="1" />

                {/* Direct Vector Paths */}
                {charData?.strokes.map((s, idx) => (
                  <path
                    key={idx}
                    d={s.path}
                    fill="none"
                    stroke={showDemo ? '#4f46e5' : '#94a3b8'}
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={showDemo ? 'animate-pulse' : ''}
                  />
                ))}

                {/* SVG Character Font Watermark Fallback */}
                {(!charData || charData.strokes.length === 0) && (
                  <text
                    x="100"
                    y="140"
                    textAnchor="middle"
                    fill={showDemo ? '#4f46e5' : '#cbd5e1'}
                    fontSize="110"
                    fontWeight="bold"
                    className={showDemo ? 'animate-pulse' : ''}
                  >
                    {activeCharacter}
                  </text>
                )}
              </svg>
            </div>

            <button
              onClick={() => onSpeak(activeCharacter)}
              className="flex items-center gap-1.5 text-xs text-indigo-600 dark:text-indigo-400 font-semibold bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1.5 rounded-lg hover:bg-indigo-100 transition-colors"
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>Pronounce "{activeCharacter}"</span>
            </button>
          </div>

          {/* Interactive Tracing Canvas */}
          <div className="flex flex-col items-center gap-3">
            <div className="relative w-full max-w-[240px] aspect-square bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-900 rounded-2xl shadow-md overflow-hidden">
              <canvas
                ref={canvasRef}
                width={240}
                height={240}
                onPointerDown={startDrawing}
                onPointerMove={draw}
                onPointerUp={stopDrawing}
                onPointerLeave={stopDrawing}
                style={{ touchAction: 'none' }}
                className="w-full h-full cursor-crosshair"
              />
              <div className="absolute top-2 left-2 text-[10px] font-medium text-slate-400 pointer-events-none">
                Draw here
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleClear}
                className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs px-3.5 py-2 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear</span>
              </button>
              <button
                onClick={() => setShowDemo(!showDemo)}
                className="flex items-center gap-1.5 bg-indigo-600 text-white text-xs px-3.5 py-2 rounded-xl hover:bg-indigo-700 shadow-sm transition-colors"
              >
                <Play className="w-3.5 h-3.5" />
                <span>{showDemo ? 'Hide Guide' : 'Show Guide'}</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
