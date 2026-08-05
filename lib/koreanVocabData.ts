/**
 * Iconic Korean Vocabulary Dataset & Dynamic Syllable Extractor
 * Supports curated K-Culture, K-Pop, K-Drama, and user-added custom vocabulary.
 */

export interface VocabItem {
  id: string;
  korean: string;
  romanization: string;
  translation: {
    en: string;
    zh: string;
  };
  category: 'kculture' | 'kdrama' | 'kpop' | 'essential' | 'custom';
  culturalNote: string;
}

export function getSyllableBlocks(text: string): string[] {
  return Array.from(text).filter(char => char.trim().length > 0);
}

export const CURATED_VOCABULARY: VocabItem[] = [
  {
    id: 'sarang',
    korean: '사랑',
    romanization: 'sa-rang',
    translation: { en: 'Love', zh: '爱 / 爱情' },
    category: 'kculture',
    culturalNote: 'One of the most used words in Korean ballads, K-Dramas (e.g. 사랑해요 - I love you), and lyrics.'
  },
  {
    id: 'daebak',
    korean: '대박',
    romanization: 'dae-bak',
    translation: { en: 'Awesome / Jackpot / Wow!', zh: '太棒了 / 大获成功' },
    category: 'kculture',
    culturalNote: 'Famous Korean slang used to express excitement, awe, or surprising good fortune.'
  },
  {
    id: 'jinjja',
    korean: '진짜',
    romanization: 'jin-jja',
    translation: { en: 'Really? / Seriously?', zh: '真的吗？/ 确实' },
    category: 'kdrama',
    culturalNote: 'Heard constantly in K-Dramas to confirm truth or express disbelief.'
  },
  {
    id: 'oppa',
    korean: '오빠',
    romanization: 'o-ppa',
    translation: { en: 'Older brother / Male term of endearment', zh: '哥哥 (女性对年长男性尊称)' },
    category: 'kdrama',
    culturalNote: 'Used by females to address an older brother, male friend, or romantic partner.'
  },
  {
    id: 'gwenchana',
    korean: '괜찮아',
    romanization: 'gwen-chan-a',
    translation: { en: "It's okay / No problem", zh: '没关系 / 没事' },
    category: 'kdrama',
    culturalNote: 'Reassuring phrase used in daily life and drama scenes.'
  },
  {
    id: 'bogosipeo',
    korean: '보고싶어',
    romanization: 'bo-go-si-peo',
    translation: { en: 'I miss you', zh: '我想你' },
    category: 'kpop',
    culturalNote: 'Famous title and chorus line in iconic K-Pop OST songs (e.g. BTS Spring Day).'
  },
  {
    id: 'fighting',
    korean: '화이팅',
    romanization: 'hwa-i-ting',
    translation: { en: 'Fighting! / You can do it!', zh: '加油！' },
    category: 'kculture',
    culturalNote: 'Iconic Korean cheer derived from English "fighting", used before exams or hard work.'
  },
  {
    id: 'choeae',
    korean: '최애',
    romanization: 'choe-ae',
    translation: { en: 'Ultimate Bias (Favorite Member)', zh: '本命 / 最爱成员' },
    category: 'kpop',
    culturalNote: 'K-Pop fandom term referring to your absolute favorite member in a group.'
  },
  {
    id: 'simkung',
    korean: '심쿵',
    romanization: 'sim-kung',
    translation: { en: 'Heart-throb / Heartflutter', zh: '心动 / 扑通扑通' },
    category: 'kpop',
    culturalNote: 'Slang combining "심장" (heart) and "쿵" (thump) for sudden romantic attraction.'
  },
  {
    id: 'chimaek',
    korean: '치맥',
    romanization: 'chi-maek',
    translation: { en: 'Chicken & Beer', zh: '炸鸡加啤酒' },
    category: 'kculture',
    culturalNote: 'Iconic food pairing popularized globally by K-Dramas like "My Love from the Star".'
  },
  {
    id: 'gamsahamnida',
    korean: '감사합니다',
    romanization: 'gam-sa-ham-ni-da',
    translation: { en: 'Thank you (Formal)', zh: '谢谢 (正式)' },
    category: 'essential',
    culturalNote: 'Standard polite phrase used across South Korea to express sincere gratitude.'
  },
  {
    id: 'annyeong',
    korean: '안녕',
    romanization: 'an-nyeong',
    translation: { en: 'Hello / Bye (Casual)', zh: '你好 / 再见' },
    category: 'essential',
    culturalNote: 'Literally means "peace/wellness". Combined with "하세요" to become formal "안녕하세요".'
  },
  {
    id: 'chingu',
    korean: '친구',
    romanization: 'chin-gu',
    translation: { en: 'Friend', zh: '朋友' },
    category: 'essential',
    culturalNote: 'Specifically refers to someone of the exact same age in traditional Korean age culture.'
  },
  {
    id: 'hallyu',
    korean: '한류',
    romanization: 'han-ryu',
    translation: { en: 'Korean Wave (K-Culture)', zh: '韩流' },
    category: 'kpop',
    culturalNote: 'Global increase in popularity of South Korean culture, music, movies, and cuisine.'
  },
  {
    id: 'yeppuda',
    korean: '예쁘다',
    romanization: 'ye-ppeu-da',
    translation: { en: 'Pretty / Beautiful', zh: '漂亮 / 美丽' },
    category: 'kdrama',
    culturalNote: 'Frequently heard compliment in K-Dramas and songs.'
  },
  {
    id: 'haengbok',
    korean: '행복',
    romanization: 'haeng-bok',
    translation: { en: 'Happiness', zh: '幸福' },
    category: 'kculture',
    culturalNote: 'Found in many K-Pop song titles and emotional drama monologues.'
  }
];

const CUSTOM_VOCAB_KEY = 'learn_korean_custom_vocab_v1';

export function getStoredCustomVocab(): VocabItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(CUSTOM_VOCAB_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Failed to load custom vocab', e);
    return [];
  }
}

export function saveCustomVocabItem(item: VocabItem): VocabItem[] {
  const existing = getStoredCustomVocab();
  const updated = [item, ...existing];
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(CUSTOM_VOCAB_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save custom vocab', e);
    }
  }
  return updated;
}

export const KOREAN_VOCABULARY = CURATED_VOCABULARY;
