export interface Consonant {
  char: string;
  rom: string;
  choIdx: number;
  missing: boolean;
  type: 'plain' | 'tense' | 'aspirated' | 'sonorant';
  typeName: string; // e.g. "松音", "紧音", "送气音", "响音"
  pinyinHint: string; // Chinese learning mnemonic
}

export interface Vowel {
  char: string;
  rom: string;
  jungIdx: number;
  missing: boolean;
  type: 'basic' | 'complex';
  typeName: string; // e.g. "单元音", "双元音/复元音"
  pinyinHint: string; // Chinese learning mnemonic
}

export interface Syllable {
  char: string;
  rom: string;
  choChar: string;
  jungChar: string;
  isMissing: boolean;
}

export type ViewMode = 'basic' | 'tense' | 'complex' | 'full';

// 14 Basic Consonants + 5 Tense Consonants = 19 Total
// Standard Revised Romanization (RR) & Official Chinese Teaching Standards
export const CHOSEONG: Consonant[] = [
  { char: 'ㄱ', rom: 'g', choIdx: 0, missing: false, type: 'plain', typeName: '松音', pinyinHint: '词首似 k, 词中似 g' },
  { char: 'ㄴ', rom: 'n', choIdx: 2, missing: false, type: 'sonorant', typeName: '响音/鼻音', pinyinHint: '似拼音 n' },
  { char: 'ㄷ', rom: 'd', choIdx: 3, missing: false, type: 'plain', typeName: '松音', pinyinHint: '词首似 t, 词中似 d' },
  { char: 'ㄹ', rom: 'r/l', choIdx: 5, missing: false, type: 'sonorant', typeName: '响音/边音', pinyinHint: '词首弹舌 r, 韵尾 l' },
  { char: 'ㅁ', rom: 'm', choIdx: 6, missing: false, type: 'sonorant', typeName: '响音/鼻音', pinyinHint: '似拼音 m' },
  { char: 'ㅂ', rom: 'b', choIdx: 7, missing: false, type: 'plain', typeName: '松音', pinyinHint: '词首似 p, 词中似 b' },
  { char: 'ㅅ', rom: 's', choIdx: 9, missing: false, type: 'plain', typeName: '松音', pinyinHint: '似拼音 s' },
  { char: 'ㅇ', rom: '', choIdx: 11, missing: false, type: 'sonorant', typeName: '不发音', pinyinHint: '作初声时不发音' },
  { char: 'ㅈ', rom: 'j', choIdx: 12, missing: false, type: 'plain', typeName: '松音', pinyinHint: '似拼音 j / z' },
  { char: 'ㅊ', rom: 'ch', choIdx: 14, missing: false, type: 'aspirated', typeName: '送气音', pinyinHint: '似拼音 q / ch (强烈强气)' },
  { char: 'ㅋ', rom: 'k', choIdx: 15, missing: false, type: 'aspirated', typeName: '送气音', pinyinHint: '似拼音 k (强烈喷气)' },
  { char: 'ㅌ', rom: 't', choIdx: 16, missing: false, type: 'aspirated', typeName: '送气音', pinyinHint: '似拼音 t (强烈喷气)' },
  { char: 'ㅍ', rom: 'p', choIdx: 17, missing: false, type: 'aspirated', typeName: '送气音', pinyinHint: '似拼音 p (强烈喷气)' },
  { char: 'ㅎ', rom: 'h', choIdx: 18, missing: false, type: 'aspirated', typeName: '送气音', pinyinHint: '似拼音 h' },
  // 5 Tense Consonants (Double Consonants)
  { char: 'ㄲ', rom: 'gg', choIdx: 1, missing: true, type: 'tense', typeName: '紧音/双辅音', pinyinHint: '喉部紧绷，不送气 k' },
  { char: 'ㄸ', rom: 'dd', choIdx: 4, missing: true, type: 'tense', typeName: '紧音/双辅音', pinyinHint: '喉部紧绷，不送气 t' },
  { char: 'ㅃ', rom: 'bb', choIdx: 8, missing: true, type: 'tense', typeName: '紧音/双辅音', pinyinHint: '喉部紧绷，不送气 p' },
  { char: 'ㅆ', rom: 'ss', choIdx: 10, missing: true, type: 'tense', typeName: '紧音/双辅音', pinyinHint: '喉部紧绷，强擦音 s' },
  { char: 'ㅉ', rom: 'jj', choIdx: 13, missing: true, type: 'tense', typeName: '紧音/双辅音', pinyinHint: '喉部紧绷，不送气 j' }
];

// 10 Basic Vowels + 11 Complex Vowels = 21 Total
export const JUNGSEONG: Vowel[] = [
  // 10 Basic Vowels
  { char: 'ㅏ', rom: 'a', jungIdx: 0, missing: false, type: 'basic', typeName: '单元音', pinyinHint: '似拼音 a (大张嘴)' },
  { char: 'ㅑ', rom: 'ya', jungIdx: 2, missing: false, type: 'basic', typeName: '单元音', pinyinHint: '似拼音 ya' },
  { char: 'ㅓ', rom: 'eo', jungIdx: 4, missing: false, type: 'basic', typeName: '单元音', pinyinHint: '似拼音 e (不圆唇)' },
  { char: 'ㅕ', rom: 'yeo', jungIdx: 6, missing: false, type: 'basic', typeName: '单元音', pinyinHint: '似拼音 ye' },
  { char: 'ㅗ', rom: 'o', jungIdx: 8, missing: false, type: 'basic', typeName: '单元音', pinyinHint: '似拼音 o (小嘴圆唇)' },
  { char: 'ㅛ', rom: 'yo', jungIdx: 12, missing: false, type: 'basic', typeName: '单元音', pinyinHint: '似拼音 yo' },
  { char: 'ㅜ', rom: 'u', jungIdx: 13, missing: false, type: 'basic', typeName: '单元音', pinyinHint: '似拼音 u (突出嘴唇)' },
  { char: 'ㅠ', rom: 'yu', jungIdx: 17, missing: false, type: 'basic', typeName: '单元音', pinyinHint: '似拼音 yu' },
  { char: 'ㅡ', rom: 'eu', jungIdx: 18, missing: false, type: 'basic', typeName: '单元音', pinyinHint: '咬牙发音 (拉平嘴唇)' },
  { char: 'ㅣ', rom: 'i', jungIdx: 20, missing: false, type: 'basic', typeName: '单元音', pinyinHint: '似拼音 i' },
  // 11 Complex Vowels
  { char: 'ㅐ', rom: 'ae', jungIdx: 1, missing: true, type: 'complex', typeName: '复元音', pinyinHint: '口型开较宽，音似 ai/ei' },
  { char: 'ㅒ', rom: 'yae', jungIdx: 3, missing: true, type: 'complex', typeName: '复元音', pinyinHint: '音似 yai/ye' },
  { char: 'ㅔ', rom: 'e', jungIdx: 5, missing: true, type: 'complex', typeName: '复元音', pinyinHint: '口型稍窄，音似 ei' },
  { char: 'ㅖ', rom: 'ye', jungIdx: 7, missing: true, type: 'complex', typeName: '复元音', pinyinHint: '音似 ye' },
  { char: 'ㅘ', rom: 'wa', jungIdx: 9, missing: true, type: 'complex', typeName: '复元音', pinyinHint: 'ㅗ + ㅏ，音似 wa' },
  { char: 'ㅙ', rom: 'wae', jungIdx: 10, missing: true, type: 'complex', typeName: '复元音', pinyinHint: 'ㅗ + ㅐ，音似 wai/way' },
  { char: 'ㅚ', rom: 'oe', jungIdx: 11, missing: true, type: 'complex', typeName: '复元音', pinyinHint: 'ㅗ + ㅣ，现代韩语读 we' },
  { char: 'ㅝ', rom: 'wo', jungIdx: 14, missing: true, type: 'complex', typeName: '复元音', pinyinHint: 'ㅜ + ㅓ，音似 wo' },
  { char: 'ㅞ', rom: 'we', jungIdx: 15, missing: true, type: 'complex', typeName: '复元音', pinyinHint: 'ㅜ + ㅔ，音似 we' },
  { char: 'ㅟ', rom: 'wi', jungIdx: 16, missing: true, type: 'complex', typeName: '复元音', pinyinHint: 'ㅜ + ㅣ，音似 wi' },
  { char: 'ㅢ', rom: 'ui', jungIdx: 19, missing: true, type: 'complex', typeName: '复元音', pinyinHint: 'ㅡ + ㅣ，读 ui / i' }
];

/**
 * Computes combined Hangul Unicode block character from initial consonant and vowel index.
 * Formula: 0xAC00 + (choIdx * 588) + (jungIdx * 28)
 */
export function getSyllableChar(choIdx: number, jungIdx: number): string {
  const unicode = 0xac00 + choIdx * 588 + jungIdx * 28;
  return String.fromCharCode(unicode);
}

/**
 * Returns filtered lists of consonants and vowels based on selected view mode
 */
export function getFilteredMatrix(mode: ViewMode): { consonants: Consonant[]; vowels: Vowel[] } {
  const basicConsonants = CHOSEONG.filter((c) => !c.missing);
  const tenseConsonants = CHOSEONG.filter((c) => c.missing);
  const basicVowels = JUNGSEONG.filter((v) => !v.missing);
  const complexVowels = JUNGSEONG.filter((v) => v.missing);

  switch (mode) {
    case 'basic':
      return { consonants: basicConsonants, vowels: basicVowels };
    case 'tense':
      return { consonants: tenseConsonants, vowels: basicVowels };
    case 'complex':
      return { consonants: basicConsonants, vowels: complexVowels };
    case 'full':
      return { consonants: CHOSEONG, vowels: JUNGSEONG };
  }
}

/**
 * Generates flat array of all valid syllables for flashcards or quiz modes
 */
export function getAllSyllableList(): Syllable[] {
  const list: Syllable[] = [];
  CHOSEONG.forEach((c) => {
    JUNGSEONG.forEach((v) => {
      list.push({
        char: getSyllableChar(c.choIdx, v.jungIdx),
        rom: c.rom + v.rom,
        choChar: c.char,
        jungChar: v.char,
        isMissing: c.missing || v.missing,
      });
    });
  });
  return list;
}
