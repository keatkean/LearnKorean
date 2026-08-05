"use client";

import React from 'react';
import { Consonant, Vowel, getSyllableChar } from '@/lib/hangulData';
import { Translations } from '@/lib/i18n';
import { HangulCell } from './HangulCell';

interface HangulTableProps {
  consonants: Consonant[];
  vowels: Vowel[];
  activeText: string | null;
  searchTerm?: string;
  onSpeak: (text: string) => void;
  t: Translations;
}

export const HangulTable: React.FC<HangulTableProps> = ({
  consonants,
  vowels,
  activeText,
  searchTerm = '',
  onSpeak,
  t,
}) => {
  const query = searchTerm.trim().toLowerCase();

  const isMatch = (hangul: string, romaja: string) => {
    if (!query) return false;
    return hangul.toLowerCase().includes(query) || romaja.toLowerCase().includes(query);
  };

  return (
    <div className="w-full overflow-auto max-h-[calc(100vh-260px)] shadow-lg rounded-xl border border-slate-200 dark:border-gray-800 bg-white dark:bg-gray-900 relative">
      <table className="w-full border-collapse text-center min-w-max select-none">
        {/* Header Row (Vowels) - Sticky Top */}
        <thead className="sticky top-0 z-20 bg-slate-100 dark:bg-gray-800 shadow-sm">
          <tr>
            {/* Top-Left Empty Corner - Sticky Top & Left */}
            <th className="sticky left-0 top-0 z-30 bg-slate-200 dark:bg-gray-800 p-2 border border-slate-200 dark:border-gray-700 min-w-[70px] text-xs font-bold text-slate-600 dark:text-gray-300">
              {t.consonantVowelHeader}
            </th>

            {vowels.map((v) => (
              <th key={v.char} className="p-0 border border-slate-200 dark:border-gray-700">
                <HangulCell
                  hangul={v.char}
                  romaja={v.rom}
                  isMissing={v.missing}
                  missingTag={v.missing ? t.vowelTag : undefined}
                  isPlaying={activeText === v.char}
                  isHighlighted={isMatch(v.char, v.rom)}
                  onClick={() => onSpeak(v.char)}
                  isHeader
                  type="vowel"
                />
              </th>
            ))}
          </tr>
        </thead>

        {/* Matrix Body (Consonants × Vowels) */}
        <tbody>
          {consonants.map((c) => (
            <tr key={c.char} className="hover:bg-slate-50 dark:hover:bg-gray-850/50 transition-colors">
              {/* Leftmost Consonant Header Cell - Sticky Left */}
              <th className="sticky left-0 z-10 p-0 border border-slate-200 dark:border-gray-700 bg-slate-50 dark:bg-gray-800 shadow-sm">
                <HangulCell
                  hangul={c.char}
                  romaja={c.rom}
                  isMissing={c.missing}
                  missingTag={c.missing ? t.consonantTag : undefined}
                  isPlaying={activeText === c.char + 'ㅏ'}
                  isHighlighted={isMatch(c.char, c.rom)}
                  onClick={() => onSpeak(c.char + 'ㅏ')}
                  isHeader
                  type="consonant"
                />
              </th>

              {/* Syllable Data Cells */}
              {vowels.map((v) => {
                const syllable = getSyllableChar(c.choIdx, v.jungIdx);
                const romCombo = c.rom + v.rom;
                const isCellMissing = c.missing || v.missing;
                const isPlayingThis = activeText === syllable;
                const isHighlightedThis = isMatch(syllable, romCombo);

                return (
                  <td key={syllable} className="p-0 border border-slate-100 dark:border-gray-800">
                    <HangulCell
                      hangul={syllable}
                      romaja={romCombo}
                      isMissing={isCellMissing}
                      isPlaying={isPlayingThis}
                      isHighlighted={isHighlightedThis}
                      onClick={() => onSpeak(syllable)}
                      type="syllable"
                    />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
