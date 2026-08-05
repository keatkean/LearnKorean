/**
 * Iconic Korean Vocabulary Dataset (K-Culture, K-Pop, K-Drama, Daily Essentials)
 * Includes Hangul decomposition breakdown, romanization, translations, and cultural context notes.
 */

export interface VocabItem {
  id: string;
  korean: string;
  romanization: string;
  translation: {
    en: string;
    zh: string;
  };
  category: 'kculture' | 'kdrama' | 'kpop' | 'essential';
  culturalNote: string;
  syllables: string[];
}

export const KOREAN_VOCABULARY: VocabItem[] = [
  {
    id: 'sarang',
    korean: '사랑',
    romanization: 'sa-rang',
    translation: { en: 'Love', zh: '爱 / 爱情' },
    category: 'kculture',
    culturalNote: 'One of the most used words in Korean ballads, K-Dramas (e.g. 사랑해요 - I love you), and lyrics.',
    syllables: ['사', '랑']
  },
  {
    id: 'daebak',
    korean: '대박',
    romanization: 'dae-bak',
    translation: { en: 'Awesome / Jackpot / Wow!', zh: '太棒了 / 大获成功' },
    category: 'kculture',
    culturalNote: 'Famous Korean slang used to express excitement, awe, or surprising good fortune.',
    syllables: ['대', '박']
  },
  {
    id: 'oppa',
    korean: '오빠',
    romanization: 'o-ppa',
    translation: { en: 'Older brother / Male term of endearment', zh: '哥哥 (女性对年长男性尊称)' },
    category: 'kdrama',
    culturalNote: 'Used by females to address an older brother, male friend, or romantic partner.',
    syllables: ['오', '빠']
  },
  {
    id: 'fighting',
    korean: '화이팅',
    romanization: 'hwa-i-ting',
    translation: { en: 'Fighting! / You can do it!', zh: '加油！' },
    category: 'kculture',
    culturalNote: 'Iconic Korean cheer derived from English "fighting", used before exams, sports, or hard work.',
    syllables: ['화', '이', '팅']
  },
  {
    id: 'gamsahamnida',
    korean: '감사합니다',
    romanization: 'gam-sa-ham-ni-da',
    translation: { en: 'Thank you (Formal)', zh: '谢谢 (正式)' },
    category: 'essential',
    culturalNote: 'Standard polite phrase used across South Korea to express sincere gratitude.',
    syllables: ['감', '사', '함', '니', '다']
  },
  {
    id: 'annyeong',
    korean: '안녕',
    romanization: 'an-nyeong',
    translation: { en: 'Hello / Bye (Casual)', zh: '你好 / 再见' },
    category: 'essential',
    culturalNote: 'Literally means "peace/wellness". Combined with "하세요" to become formal "안녕하세요".',
    syllables: ['안', '녕']
  },
  {
    id: 'chingu',
    korean: '친구',
    romanization: 'chin-gu',
    translation: { en: 'Friend', zh: '朋友' },
    category: 'essential',
    culturalNote: 'Specifically refers to someone of the exact same age in traditional Korean age culture.',
    syllables: ['친', '구']
  },
  {
    id: 'hallyu',
    korean: '한류',
    romanization: 'han-ryu',
    translation: { en: 'Korean Wave (K-Culture)', zh: '韩流' },
    category: 'kpop',
    culturalNote: 'Global increase in popularity of South Korean culture, music, movies, and cuisine.',
    syllables: ['한', '류']
  },
  {
    id: 'yeppuda',
    korean: '예쁘다',
    romanization: 'ye-ppeu-da',
    translation: { en: 'Pretty / Beautiful', zh: '漂亮 / 美丽' },
    category: 'kdrama',
    culturalNote: 'Frequently heard compliment in K-Dramas and songs.',
    syllables: ['예', '쁘', '다']
  },
  {
    id: 'haengbok',
    korean: '행복',
    romanization: 'haeng-bok',
    translation: { en: 'Happiness', zh: '幸福' },
    category: 'kculture',
    culturalNote: 'Found in many K-Pop song titles and emotional drama monologues.',
    syllables: ['행', '복']
  }
];
