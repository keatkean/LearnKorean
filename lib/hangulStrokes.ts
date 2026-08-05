/**
 * Hangul Stroke Vector Paths and Sequence Tracing Definitions
 * Standard stroke order data for consonants and vowels to power the interactive stroke order canvas.
 */

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
  'ㄱ': {
    char: 'ㄱ',
    name: 'Giyeok (기역)',
    romanization: 'g / k',
    strokes: [
      { order: 1, label: 'Horizontal right then curve down', path: 'M 30,30 L 170,30 L 170,170' },
    ]
  },
  'ㄴ': {
    char: 'ㄴ',
    name: 'Nieun (니은)',
    romanization: 'n',
    strokes: [
      { order: 1, label: 'Vertical down then right', path: 'M 30,30 L 30,170 L 170,170' },
    ]
  },
  'ㄷ': {
    char: 'ㄷ',
    name: 'Digeut (디귿)',
    romanization: 'd / t',
    strokes: [
      { order: 1, label: 'Top horizontal stroke', path: 'M 30,30 L 170,30' },
      { order: 2, label: 'Vertical down then bottom horizontal stroke', path: 'M 30,30 L 30,170 L 170,170' },
    ]
  },
  'ㄹ': {
    char: 'ㄹ',
    name: 'Rieul (리을)',
    romanization: 'r / l',
    strokes: [
      { order: 1, label: 'Top horizontal then down', path: 'M 30,30 L 170,30 L 170,90' },
      { order: 2, label: 'Middle horizontal stroke', path: 'M 30,90 L 170,90' },
      { order: 3, label: 'Vertical down then bottom horizontal', path: 'M 30,90 L 30,170 L 170,170' },
    ]
  },
  'ㅁ': {
    char: 'ㅁ',
    name: 'Mieum (미음)',
    romanization: 'm',
    strokes: [
      { order: 1, label: 'Left vertical stroke', path: 'M 30,30 L 30,170' },
      { order: 2, label: 'Top horizontal then right vertical', path: 'M 30,30 L 170,30 L 170,170' },
      { order: 3, label: 'Bottom horizontal closing stroke', path: 'M 30,170 L 170,170' },
    ]
  },
  'ㅂ': {
    char: 'ㅂ',
    name: 'Bieup (비읍)',
    romanization: 'b / p',
    strokes: [
      { order: 1, label: 'Left vertical stroke', path: 'M 50,30 L 50,170' },
      { order: 2, label: 'Right vertical stroke', path: 'M 150,30 L 150,170' },
      { order: 3, label: 'Middle horizontal crossbar', path: 'M 50,100 L 150,100' },
      { order: 4, label: 'Bottom horizontal bar', path: 'M 50,170 L 150,170' },
    ]
  },
  'ㅅ': {
    char: 'ㅅ',
    name: 'Siot (시옷)',
    romanization: 's',
    strokes: [
      { order: 1, label: 'Left slanting stroke', path: 'M 100,30 L 40,170' },
      { order: 2, label: 'Right slanting stroke', path: 'M 100,80 L 160,170' },
    ]
  },
  'ㅇ': {
    char: 'ㅇ',
    name: 'Ieung (이응)',
    romanization: 'silent / ng',
    strokes: [
      { order: 1, label: 'Counter-clockwise full circle', path: 'M 100,30 A 70,70 0 1,0 100,170 A 70,70 0 1,0 100,30' },
    ]
  },
  'ㅈ': {
    char: 'ㅈ',
    name: 'Jieut (지읒)',
    romanization: 'j / ch',
    strokes: [
      { order: 1, label: 'Top horizontal bar', path: 'M 30,30 L 170,30' },
      { order: 2, label: 'Left diagonal stroke', path: 'M 100,30 L 40,170' },
      { order: 3, label: 'Right diagonal stroke', path: 'M 100,80 L 160,170' },
    ]
  },
  'ㅊ': {
    char: 'ㅊ',
    name: 'Chieut (치읓)',
    romanization: 'ch',
    strokes: [
      { order: 1, label: 'Top hat stroke', path: 'M 80,15 L 120,15' },
      { order: 2, label: 'Horizontal bar', path: 'M 30,45 L 170,45' },
      { order: 3, label: 'Left diagonal stroke', path: 'M 100,45 L 40,175' },
      { order: 4, label: 'Right diagonal stroke', path: 'M 100,90 L 160,175' },
    ]
  },
  'ㅏ': {
    char: 'ㅏ',
    name: 'A (아)',
    romanization: 'a',
    strokes: [
      { order: 1, label: 'Long vertical stroke', path: 'M 100,20 L 100,180' },
      { order: 2, label: 'Right horizontal short bar', path: 'M 100,100 L 160,100' },
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
  'ㅗ': {
    char: 'ㅗ',
    name: 'O (오)',
    romanization: 'o',
    strokes: [
      { order: 1, label: 'Top vertical short bar', path: 'M 100,40 L 100,100' },
      { order: 2, label: 'Bottom long horizontal stroke', path: 'M 20,100 L 180,100' },
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
};

export function getCharacterStrokes(char: string): CharacterStrokes | null {
  return HANGUL_STROKE_DATA[char] || null;
}
