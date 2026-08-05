/**
 * Advanced Hangul Composition & Decomposition Automaton Engine
 * Supports initial, medial (including complex vowels like ㅗ+ㅏ=ㅘ),
 * and final consonants (including compound batchims like ㄱ+ㅅ=ㄳ).
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

// Map of 2 consecutive vowels that form complex vowels
export const COMPLEX_VOWEL_MAP: Record<string, string> = {
  'ㅗㅏ': 'ㅘ',
  'ㅗㅐ': 'ㅙ',
  'ㅗㅣ': 'ㅚ',
  'ㅜㅓ': 'ㅝ',
  'ㅜㅔ': 'ㅞ',
  'ㅜㅣ': 'ㅟ',
  'ㅡㅣ': 'ㅢ',
};

// Map of 2 consecutive final consonants that form compound batchims
export const COMPOUND_BATCHIM_MAP: Record<string, string> = {
  'ㄱㅅ': 'ㄳ',
  'ㄴㅈ': 'ㄵ',
  'ㄴㅎ': 'ㄶ',
  'ㄹㄱ': 'ㄺ',
  'ㄹㅁ': 'ㄻ',
  'ㄹㅂ': 'ㄼ',
  'ㄹㅅ': 'ㄽ',
  'ㄹㅌ': 'ㄾ',
  'ㄹㅍ': 'ㄿ',
  'ㄹㅎ': 'ㅀ',
  'ㅂㅅ': 'ㅄ',
};

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

/**
 * Automaton helper to compose a sequence of typed jamo strings into Hangul syllable(s).
 */
export function composeJamoSequence(jamos: string[]): string {
  if (!jamos || jamos.length === 0) return '';
  if (jamos.length === 1) return jamos[0];

  let initial = '';
  let medial = '';
  let final = '';

  let i = 0;

  // 1. Initial consonant
  if (INITIAL_CONSONANTS.includes(jamos[i] as any)) {
    initial = jamos[i];
    i++;
  } else {
    return jamos.join('');
  }

  // 2. Medial vowel (check complex vowel combination)
  if (i < jamos.length && MEDIAL_VOWELS.includes(jamos[i] as any)) {
    medial = jamos[i];
    i++;

    // Check if next jamo combines into complex vowel (e.g. ㅗ + ㅏ = ㅘ)
    if (i < jamos.length) {
      const pair = medial + jamos[i];
      if (COMPLEX_VOWEL_MAP[pair]) {
        medial = COMPLEX_VOWEL_MAP[pair];
        i++;
      }
    }
  } else {
    return initial + jamos.slice(i).join('');
  }

  // 3. Final consonant (batchim)
  if (i < jamos.length && FINAL_CONSONANTS.includes(jamos[i] as any)) {
    final = jamos[i];
    i++;

    // Check if next jamo combines into compound batchim (e.g. ㄱ + ㅅ = ㄳ)
    if (i < jamos.length) {
      const pair = final + jamos[i];
      if (COMPOUND_BATCHIM_MAP[pair]) {
        final = COMPOUND_BATCHIM_MAP[pair];
        i++;
      }
    }
  }

  const composed = composeHangul(initial, medial, final);
  const remaining = jamos.slice(i).join('');
  return composed + remaining;
}
