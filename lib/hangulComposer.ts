/**
 * Hangul Syllable Composition & Decomposition Engine
 * Handles combining Initial (초성), Medial (중성), Final (종성/Batchim) consonants and vowels
 * into valid Unicode Hangul syllables, and vice versa.
 */

export const INITIAL_CONSONANTS = [
  'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
] as const;

export const MEDIAL_VOWELS = [
  'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'
] as const;

export const FINAL_CONSONANTS = [
  '', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
] as const;

const HANGUL_BASE = 0xac00;
const HANGUL_END = 0xd7a3;

export function composeHangul(initial: string, medial: string, final: string = ''): string {
  const initIdx = INITIAL_CONSONANTS.indexOf(initial as any);
  const medIdx = MEDIAL_VOWELS.indexOf(medial as any);
  const finIdx = FINAL_CONSONANTS.indexOf(final as any);

  if (initIdx === -1 || medIdx === -1 || finIdx === -1) {
    return initial + medial + final;
  }

  const unicode = HANGUL_BASE + (initIdx * 588) + (medIdx * 28) + finIdx;
  return String.fromCharCode(unicode);
}

export function decomposeHangul(char: string): { initial: string; medial: string; final: string } | null {
  if (!char || char.length !== 1) return null;
  const code = char.charCodeAt(0);

  if (code < HANGUL_BASE || code > HANGUL_END) {
    return null;
  }

  const relativeCode = code - HANGUL_BASE;
  const finIdx = relativeCode % 28;
  const medIdx = Math.floor((relativeCode % 588) / 28);
  const initIdx = Math.floor(relativeCode / 588);

  return {
    initial: INITIAL_CONSONANTS[initIdx],
    medial: MEDIAL_VOWELS[medIdx],
    final: FINAL_CONSONANTS[finIdx],
  };
}

export function isHangulSyllable(char: string): boolean {
  if (!char || char.length !== 1) return false;
  const code = char.charCodeAt(0);
  return code >= HANGUL_BASE && code <= HANGUL_END;
}
