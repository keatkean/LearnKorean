/**
 * Standard 2-Set Korean Keyboard (Dubeolsik / 두벌식) Mapping Table
 * Maps QWERTY key presses to Korean Jamo consonants & vowels.
 */

export const DUBEOLSIK_MAP: Record<string, string> = {
  // Consonants
  r: 'ㄱ', R: 'ㄲ',
  s: 'ㄴ',
  e: 'ㄷ', E: 'ㄸ',
  f: 'ㄹ',
  a: 'ㅁ',
  q: 'ㅂ', Q: 'ㅃ',
  t: 'ㅅ', T: 'ㅆ',
  d: 'ㅇ',
  w: 'ㅈ', W: 'ㅉ',
  c: 'ㅊ',
  z: 'ㅋ',
  x: 'ㅌ',
  v: 'ㅍ',
  g: 'ㅎ',

  // Vowels
  k: 'ㅏ',
  o: 'ㅐ', O: 'ㅒ',
  i: 'ㅑ',
  j: 'ㅓ',
  p: 'ㅔ', P: 'ㅖ',
  u: 'ㅕ',
  h: 'ㅗ',
  y: 'ㅛ',
  n: 'ㅜ',
  b: 'ㅠ',
  m: 'ㅡ',
  l: 'ㅣ',
};

export interface KeyboardKeyInfo {
  qwerty: string;
  qwertyShift?: string;
  hangul: string;
  hangulShift?: string;
  isConsonant: boolean;
}

export const VIRTUAL_KEYBOARD_LAYOUT: KeyboardKeyInfo[][] = [
  [
    { qwerty: 'q', qwertyShift: 'Q', hangul: 'ㅂ', hangulShift: 'ㅃ', isConsonant: true },
    { qwerty: 'w', qwertyShift: 'W', hangul: 'ㅈ', hangulShift: 'ㅉ', isConsonant: true },
    { qwerty: 'e', qwertyShift: 'E', hangul: 'ㄷ', hangulShift: 'ㄸ', isConsonant: true },
    { qwerty: 'r', qwertyShift: 'R', hangul: 'ㄱ', hangulShift: 'ㄲ', isConsonant: true },
    { qwerty: 't', qwertyShift: 'T', hangul: 'ㅅ', hangulShift: 'ㅆ', isConsonant: true },
    { qwerty: 'y', hangul: 'ㅛ', isConsonant: false },
    { qwerty: 'u', hangul: 'ㅕ', isConsonant: false },
    { qwerty: 'i', hangul: 'ㅑ', isConsonant: false },
    { qwerty: 'o', qwertyShift: 'O', hangul: 'ㅐ', hangulShift: 'ㅒ', isConsonant: false },
    { qwerty: 'p', qwertyShift: 'P', hangul: 'ㅔ', hangulShift: 'ㅖ', isConsonant: false },
  ],
  [
    { qwerty: 'a', hangul: 'ㅁ', isConsonant: true },
    { qwerty: 's', hangul: 'ㄴ', isConsonant: true },
    { qwerty: 'd', hangul: 'ㅇ', isConsonant: true },
    { qwerty: 'f', hangul: 'ㄹ', isConsonant: true },
    { qwerty: 'g', hangul: 'ㅎ', isConsonant: true },
    { qwerty: 'h', hangul: 'ㅗ', isConsonant: false },
    { qwerty: 'j', hangul: 'ㅓ', isConsonant: false },
    { qwerty: 'k', hangul: 'ㅏ', isConsonant: false },
    { qwerty: 'l', hangul: 'ㅣ', isConsonant: false },
  ],
  [
    { qwerty: 'z', hangul: 'ㅋ', isConsonant: true },
    { qwerty: 'x', hangul: 'ㅌ', isConsonant: true },
    { qwerty: 'c', hangul: 'ㅊ', isConsonant: true },
    { qwerty: 'v', hangul: 'ㅍ', isConsonant: true },
    { qwerty: 'b', hangul: 'ㅠ', isConsonant: false },
    { qwerty: 'n', hangul: 'ㅜ', isConsonant: false },
    { qwerty: 'm', hangul: 'ㅡ', isConsonant: false },
  ],
];

export function mapKeyToHangul(key: string): string | null {
  return DUBEOLSIK_MAP[key] || null;
}
