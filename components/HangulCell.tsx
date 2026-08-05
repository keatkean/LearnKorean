"use client";

import React from 'react';

interface HangulCellProps {
  hangul: string;
  romaja: string;
  isMissing?: boolean;
  missingTag?: string;
  isPlaying?: boolean;
  isHighlighted?: boolean;
  onClick: () => void;
  isHeader?: boolean;
  type?: 'consonant' | 'vowel' | 'syllable';
}

export const HangulCell: React.FC<HangulCellProps> = React.memo(
  ({
    hangul,
    romaja,
    isMissing = false,
    missingTag,
    isPlaying = false,
    isHighlighted = false,
    onClick,
    isHeader = false,
    type = 'syllable',
  }) => {
    let baseClass =
      'relative p-2 text-center select-none transition-all duration-150 cursor-pointer min-w-[55px] sm:min-w-[65px] min-h-[55px] flex flex-col items-center justify-center border border-slate-100 dark:border-gray-800/80 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:z-20 ';

    if (isPlaying) {
      baseClass += 'playing-cell ring-2 ring-indigo-500 z-10 scale-105 shadow-lg ';
    } else if (isHighlighted) {
      baseClass += 'ring-2 ring-amber-400 dark:ring-amber-500 bg-amber-50 dark:bg-amber-950/40 z-10 scale-105 shadow-sm ';
    } else if (isMissing) {
      baseClass += 'bg-rose-50/70 dark:bg-rose-950/20 hover:bg-rose-100/90 dark:hover:bg-rose-900/40 ';
    } else {
      baseClass += 'bg-white dark:bg-gray-900 hover:bg-indigo-50/80 dark:hover:bg-indigo-950/50 ';
    }

    if (isHeader) {
      baseClass += 'font-bold bg-slate-50/80 dark:bg-gray-800/80 ';
    }

    return (
      <div
        onClick={onClick}
        className={baseClass}
        role="button"
        tabIndex={0}
        aria-label={`${hangul}, romaja: ${romaja}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick();
          }
        }}
      >
        <span
          className={`font-bold leading-tight font-sans ${
            type === 'syllable'
              ? 'text-lg sm:text-xl text-slate-800 dark:text-gray-100'
              : 'text-base sm:text-lg text-indigo-700 dark:text-indigo-400'
          }`}
        >
          {hangul}
        </span>

        <span className="text-[11px] sm:text-xs font-semibold text-rose-600 dark:text-rose-400 mt-0.5 tracking-tight">
          {romaja ? `(${romaja})` : romaja}
        </span>

        {missingTag && (
          <span className="text-[9px] font-bold text-rose-500 dark:text-rose-400 mt-0.5 px-1 py-0.2 bg-rose-100 dark:bg-rose-900/60 rounded">
            {missingTag}
          </span>
        )}

        {/* Audio active indicator line */}
        {isPlaying && (
          <span className="absolute bottom-0 left-0 right-0 h-1 bg-indigo-600 rounded-b-md animate-pulse" />
        )}
      </div>
    );
  }
);

HangulCell.displayName = 'HangulCell';
