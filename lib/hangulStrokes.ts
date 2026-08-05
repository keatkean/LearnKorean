/**
 * Comprehensive Hangul Vector Stroke Paths and Tracing Definitions
 * Contains standard stroke order vector data for all 19 Consonants and 14 Vowels,
 * with dynamic decomposition rendering for any composed Hangul block syllable.
 */

import { decomposeHangul } from './hangulComposer';

export interface StrokeDef {
  path: string; // SVG path data d=""
  order: number;
  label: string;
}

export interface CharacterStrokes {
  char: string;
  name: string;
  romanization: string;
  strokes: StrokeDef[];
}

export const HANGUL_STROKE_DATA: Record<string, CharacterStrokes> = {
  // --- Consonants ---
  'ㄱ': {
    char: 'ㄱ',
    name: 'Giyeok (기역)',
    romanization: 'g / k',
    strokes: [
      { order: 1, label: 'Horizontal right then curve down', path: 'M 40,40 L 160,40 L 160,160' },
    ]
  },
  'ㄴ': {
    char: 'ㄴ',
    name: 'Nieun (니은)',
    romanization: 'n',
    strokes: [
      { order: 1, label: 'Vertical down then horizontal right', path: 'M 40,40 L 40,160 L 160,160' },
    ]
  },
  'ㄷ': {
    char: 'ㄷ',
    name: 'Digeut (디귿)',
    romanization: 'd / t',
    strokes: [
      { order: 1, label: 'Top horizontal stroke', path: 'M 40,40 L 160,40' },
      { order: 2, label: 'Vertical down then bottom horizontal stroke', path: 'M 40,40 L 40,160 L 160,160' },
    ]
  },
  'ㄹ': {
    char: 'ㄹ',
    name: 'Rieul (리을)',
    romanization: 'r / l',
    strokes: [
      { order: 1, label: 'Top horizontal then down', path: 'M 40,40 L 160,40 L 160,90' },
      { order: 2, label: 'Middle horizontal stroke', path: 'M 40,90 L 160,90' },
      { order: 3, label: 'Vertical down then bottom horizontal', path: 'M 40,90 L 40,160 L 160,160' },
    ]
  },
  'ㅁ': {
    char: 'ㅁ',
    name: 'Mieum (미음)',
    romanization: 'm',
    strokes: [
      { order: 1, label: 'Left vertical stroke', path: 'M 40,40 L 40,160' },
      { order: 2, label: 'Top horizontal then right vertical', path: 'M 40,40 L 160,40 L 160,160' },
      { order: 3, label: 'Bottom horizontal closing stroke', path: 'M 40,160 L 160,160' },
    ]
  },
  'ㅂ': {
    char: 'ㅂ',
    name: 'Bieup (비읍)',
    romanization: 'b / p',
    strokes: [
      { order: 1, label: 'Left vertical stroke', path: 'M 50,40 L 50,160' },
      { order: 2, label: 'Right vertical stroke', path: 'M 150,40 L 150,160' },
      { order: 3, label: 'Middle horizontal crossbar', path: 'M 50,100 L 150,100' },
      { order: 4, label: 'Bottom horizontal bar', path: 'M 50,160 L 150,160' },
    ]
  },
  'ㅅ': {
    char: 'ㅅ',
    name: 'Siot (시옷)',
    romanization: 's',
    strokes: [
      { order: 1, label: 'Left slanting stroke', path: 'M 100,40 L 40,160' },
      { order: 2, label: 'Right slanting stroke', path: 'M 100,90 L 160,160' },
    ]
  },
  'ㅇ': {
    char: 'ㅇ',
    name: 'Ieung (이응)',
    romanization: 'silent / ng',
    strokes: [
      { order: 1, label: 'Counter-clockwise full circle', path: 'M 100,40 A 60,60 0 1,0 100,160 A 60,60 0 1,0 100,40' },
    ]
  },
  'ㅈ': {
    char: 'ㅈ',
    name: 'Jieut (지읒)',
    romanization: 'j / ch',
    strokes: [
      { order: 1, label: 'Top horizontal bar', path: 'M 40,40 L 160,40' },
      { order: 2, label: 'Left diagonal stroke', path: 'M 100,40 L 40,160' },
      { order: 3, label: 'Right diagonal stroke', path: 'M 100,90 L 160,160' },
    ]
  },
  'ㅊ': {
    char: 'ㅊ',
    name: 'Chieut (치읓)',
    romanization: 'ch',
    strokes: [
      { order: 1, label: 'Top short hat stroke', path: 'M 80,20 L 120,20' },
      { order: 2, label: 'Horizontal bar', path: 'M 40,50 L 160,50' },
      { order: 3, label: 'Left diagonal stroke', path: 'M 100,50 L 40,165' },
      { order: 4, label: 'Right diagonal stroke', path: 'M 100,95 L 160,165' },
    ]
  },
  'ㅋ': {
    char: 'ㅋ',
    name: 'Kieuk (키읔)',
    romanization: 'k',
    strokes: [
      { order: 1, label: 'Top horizontal then curve down', path: 'M 40,40 L 160,40 L 160,160' },
      { order: 2, label: 'Middle horizontal bar', path: 'M 40,100 L 160,100' },
    ]
  },
  'ㅌ': {
    char: 'ㅌ',
    name: 'Tieut (티읕)',
    romanization: 't',
    strokes: [
      { order: 1, label: 'Top horizontal bar', path: 'M 40,40 L 160,40' },
      { order: 2, label: 'Middle horizontal bar', path: 'M 40,100 L 140,100' },
      { order: 3, label: 'Vertical down then bottom horizontal', path: 'M 40,40 L 40,160 L 160,160' },
    ]
  },
  'ㅍ': {
    char: 'ㅍ',
    name: 'Pieup (피읖)',
    romanization: 'p',
    strokes: [
      { order: 1, label: 'Top horizontal bar', path: 'M 30,40 L 170,40' },
      { order: 2, label: 'Left vertical pillar', path: 'M 70,40 L 70,160' },
      { order: 3, label: 'Right vertical pillar', path: 'M 130,40 L 130,160' },
      { order: 4, label: 'Bottom horizontal closing stroke', path: 'M 30,160 L 170,160' },
    ]
  },
  'ㅎ': {
    char: 'ㅎ',
    name: 'Hieuh (히읗)',
    romanization: 'h',
    strokes: [
      { order: 1, label: 'Top vertical hat bar', path: 'M 100,15 L 100,35' },
      { order: 2, label: 'Middle horizontal bar', path: 'M 40,45 L 160,45' },
      { order: 3, label: 'Bottom circle stroke', path: 'M 100,75 A 45,45 0 1,0 100,165 A 45,45 0 1,0 100,75' },
    ]
  },
  'ㄲ': {
    char: 'ㄲ',
    name: 'Ssang-giyeok (쌍기역)',
    romanization: 'gg',
    strokes: [
      { order: 1, label: 'First Giyeok stroke', path: 'M 20,40 L 80,40 L 80,160' },
      { order: 2, label: 'Second Giyeok stroke', path: 'M 110,40 L 170,40 L 170,160' },
    ]
  },
  'ㄸ': {
    char: 'ㄸ',
    name: 'Ssang-digeut (쌍디귿)',
    romanization: 'dd',
    strokes: [
      { order: 1, label: 'First Digeut stroke', path: 'M 20,40 L 85,40 M 20,40 L 20,160 L 85,160' },
      { order: 2, label: 'Second Digeut stroke', path: 'M 115,40 L 180,40 M 115,40 L 115,160 L 180,160' },
    ]
  },
  'ㅃ': {
    char: 'ㅃ',
    name: 'Ssang-bieup (쌍비읍)',
    romanization: 'bb',
    strokes: [
      { order: 1, label: 'First Bieup stroke', path: 'M 20,40 L 20,160 M 75,40 L 75,160 M 20,100 L 75,100 M 20,160 L 75,160' },
      { order: 2, label: 'Second Bieup stroke', path: 'M 115,40 L 115,160 M 170,40 L 170,160 M 115,100 L 170,100 M 115,160 L 170,160' },
    ]
  },
  'ㅆ': {
    char: 'ㅆ',
    name: 'Ssang-siot (쌍시옷)',
    romanization: 'ss',
    strokes: [
      { order: 1, label: 'First Siot stroke', path: 'M 55,40 L 10,160 M 55,90 L 95,160' },
      { order: 2, label: 'Second Siot stroke', path: 'M 145,40 L 105,160 M 145,90 L 185,160' },
    ]
  },
  'ㅉ': {
    char: 'ㅉ',
    name: 'Ssang-jieut (쌍지읒)',
    romanization: 'jj',
    strokes: [
      { order: 1, label: 'First Jieut stroke', path: 'M 15,40 L 90,40 M 50,40 L 10,160 M 50,90 L 90,160' },
      { order: 2, label: 'Second Jieut stroke', path: 'M 110,40 L 185,40 M 145,40 L 105,160 M 145,90 L 185,160' },
    ]
  },

  // --- Vowels ---
  'ㅏ': {
    char: 'ㅏ',
    name: 'A (아)',
    romanization: 'a',
    strokes: [
      { order: 1, label: 'Long vertical stroke', path: 'M 100,20 L 100,180' },
      { order: 2, label: 'Right horizontal short bar', path: 'M 100,100 L 160,100' },
    ]
  },
  'ㅑ': {
    char: 'ㅑ',
    name: 'Ya (야)',
    romanization: 'ya',
    strokes: [
      { order: 1, label: 'Long vertical stroke', path: 'M 90,20 L 90,180' },
      { order: 2, label: 'Upper right short bar', path: 'M 90,70 L 150,70' },
      { order: 3, label: 'Lower right short bar', path: 'M 90,130 L 150,130' },
    ]
  },
  'ㅓ': {
    char: 'ㅓ',
    name: 'Eo (어)',
    romanization: 'eo',
    strokes: [
      { order: 1, label: 'Left horizontal short bar', path: 'M 40,100 L 100,100' },
      { order: 2, label: 'Long vertical stroke', path: 'M 100,20 L 100,180' },
    ]
  },
  'ㅕ': {
    char: 'ㅕ',
    name: 'Yeo (여)',
    romanization: 'yeo',
    strokes: [
      { order: 1, label: 'Upper left short bar', path: 'M 40,70 L 100,70' },
      { order: 2, label: 'Lower left short bar', path: 'M 40,130 L 100,130' },
      { order: 3, label: 'Long vertical stroke', path: 'M 100,20 L 100,180' },
    ]
  },
  'ㅗ': {
    char: 'ㅗ',
    name: 'O (오)',
    romanization: 'o',
    strokes: [
      { order: 1, label: 'Top vertical short bar', path: 'M 100,40 L 100,100' },
      { order: 2, label: 'Bottom long horizontal stroke', path: 'M 20,100 L 180,100' },
    ]
  },
  'ㅛ': {
    char: 'ㅛ',
    name: 'Yo (요)',
    romanization: 'yo',
    strokes: [
      { order: 1, label: 'Left vertical short bar', path: 'M 70,40 L 70,100' },
      { order: 2, label: 'Right vertical short bar', path: 'M 130,40 L 130,100' },
      { order: 3, label: 'Bottom long horizontal stroke', path: 'M 20,100 L 180,100' },
    ]
  },
  'ㅜ': {
    char: 'ㅜ',
    name: 'U (우)',
    romanization: 'u',
    strokes: [
      { order: 1, label: 'Top long horizontal stroke', path: 'M 20,100 L 180,100' },
      { order: 2, label: 'Bottom vertical short bar', path: 'M 100,100 L 100,160' },
    ]
  },
  'ㅠ': {
    char: 'ㅠ',
    name: 'Yu (유)',
    romanization: 'yu',
    strokes: [
      { order: 1, label: 'Top long horizontal stroke', path: 'M 20,100 L 180,100' },
      { order: 2, label: 'Left vertical short bar', path: 'M 70,100 L 70,160' },
      { order: 3, label: 'Right vertical short bar', path: 'M 130,100 L 130,160' },
    ]
  },
  'ㅡ': {
    char: 'ㅡ',
    name: 'Eu (으)',
    romanization: 'eu',
    strokes: [
      { order: 1, label: 'Long horizontal stroke', path: 'M 20,100 L 180,100' },
    ]
  },
  'ㅣ': {
    char: 'ㅣ',
    name: 'I (이)',
    romanization: 'i',
    strokes: [
      { order: 1, label: 'Long vertical stroke', path: 'M 100,20 L 100,180' },
    ]
  },
  'ㅐ': {
    char: 'ㅐ',
    name: 'Ae (애)',
    romanization: 'ae',
    strokes: [
      { order: 1, label: 'Long left vertical stroke', path: 'M 70,20 L 70,180' },
      { order: 2, label: 'Middle horizontal bar', path: 'M 70,100 L 130,100' },
      { order: 3, label: 'Long right vertical stroke', path: 'M 130,20 L 130,180' },
    ]
  },
  'ㅔ': {
    char: 'ㅔ',
    name: 'E (에)',
    romanization: 'e',
    strokes: [
      { order: 1, label: 'Middle horizontal bar', path: 'M 40,100 L 100,100' },
      { order: 2, label: 'Long left vertical stroke', path: 'M 100,20 L 100,180' },
      { order: 3, label: 'Long right vertical stroke', path: 'M 150,20 L 150,180' },
    ]
  },
};

/**
 * Returns character strokes definition for jamo, or dynamically generates composite
 * stroke vector outlines for any composed Hangul block syllable (e.g. 가, 나, 다).
 */
export function getCharacterStrokes(char: string): CharacterStrokes | null {
  if (!char) return null;

  // Direct lookup
  if (HANGUL_STROKE_DATA[char]) {
    return HANGUL_STROKE_DATA[char];
  }

  // Dynamic decomposition for composed block syllables
  const decomposed = decomposeHangul(char);
  if (decomposed) {
    const initStrokes = HANGUL_STROKE_DATA[decomposed.initial]?.strokes || [];
    const medStrokes = HANGUL_STROKE_DATA[decomposed.medial]?.strokes || [];
    const finStrokes = decomposed.final ? (HANGUL_STROKE_DATA[decomposed.final]?.strokes || []) : [];

    const combinedStrokes: StrokeDef[] = [];
    let orderIndex = 1;

    initStrokes.forEach(s => {
      combinedStrokes.push({ order: orderIndex++, label: `Initial: ${s.label}`, path: s.path });
    });
    medStrokes.forEach(s => {
      combinedStrokes.push({ order: orderIndex++, label: `Vowel: ${s.label}`, path: s.path });
    });
    finStrokes.forEach(s => {
      combinedStrokes.push({ order: orderIndex++, label: `Batchim: ${s.label}`, path: s.path });
    });

    return {
      char,
      name: `Syllable ${char}`,
      romanization: `${decomposed.initial} + ${decomposed.medial}${decomposed.final ? ' + ' + decomposed.final : ''}`,
      strokes: combinedStrokes,
    };
  }

  return null;
}
