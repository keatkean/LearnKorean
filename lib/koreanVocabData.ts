/**
 * Iconic Korean Vocabulary Dataset & Dynamic Syllable Extractor
 * Contains curated K-Culture, K-Pop, K-Drama, Romantic Sentences, and Daily Essential phrases.
 */

export interface VocabItem {
  id: string;
  korean: string;
  romanization: string;
  translation: {
    en: string;
    zh: string;
  };
  category: 'kculture' | 'kdrama' | 'kpop' | 'essential' | 'romance';
  culturalNote: string;
}

export function getSyllableBlocks(text: string): string[] {
  return Array.from(text).filter(char => char.trim().length > 0);
}

export const CURATED_VOCABULARY: VocabItem[] = [
  // --- Romantic K-Drama & K-Pop Expressions ---
  {
    id: 'saranghae',
    korean: '사랑해',
    romanization: 'sa-rang-hae',
    translation: { en: 'I love you (Casual / Intimate)', zh: '我爱你' },
    category: 'romance',
    culturalNote: 'The most iconic romantic expression in K-Dramas and K-Pop love songs.'
  },
  {
    id: 'yeongwonhi',
    korean: '영원히 사랑해',
    romanization: 'yeong-won-hi sa-rang-hae',
    translation: { en: 'I will love you forever', zh: '我永远爱你' },
    category: 'romance',
    culturalNote: 'Classic romantic vow heard in dramatic K-Drama climax confession scenes.'
  },
  {
    id: 'nae_gyeote',
    korean: '내 곁에 있어줘',
    romanization: 'nae gyeot-e is-seo-jwo',
    translation: { en: 'Please stay by my side', zh: '请留在我的身边' },
    category: 'romance',
    culturalNote: 'Deeply emotional line featured in K-Drama OST lyrics.'
  },
  {
    id: 'neobakke',
    korean: '너밖에 없어',
    romanization: 'neo-bak-ke eop-seo',
    translation: { en: 'You are the only one for me', zh: '我只有你 / 你是我的唯一' },
    category: 'romance',
    culturalNote: 'Passionate romantic declaration used when expressing exclusive devotion.'
  },
  {
    id: 'cheotnun',
    korean: '첫눈에 반했어',
    romanization: 'cheot-nun-e ban-haes-seo',
    translation: { en: 'I fell in love at first sight', zh: '我一见钟情了' },
    category: 'romance',
    culturalNote: 'Iconic romance trope phrase used in meet-cute K-Drama scenes.'
  },
  {
    id: 'maeum',
    korean: '내 마음을 받아줘',
    romanization: 'nae ma-eum-eul ba-da-jwo',
    translation: { en: 'Please accept my heart / feelings', zh: '请接受我的心意' },
    category: 'romance',
    culturalNote: 'Traditional confession phrase when giving a love letter or gift.'
  },
  {
    id: 'hamkke',
    korean: '너랑 함께하고 싶어',
    romanization: 'neo-rang ham-kke-ha-go si-peo',
    translation: { en: 'I want to be together with you', zh: '我想和你在一起' },
    category: 'romance',
    culturalNote: 'Heartfelt proposal sentence expressing the desire to share life together.'
  },
  {
    id: 'yeonin',
    korean: '연인',
    romanization: 'yeon-in',
    translation: { en: 'Lovers / Sweetheart', zh: '恋人 / 爱人' },
    category: 'romance',
    culturalNote: 'Poetic Korean noun for romantic partners, hit drama title.'
  },
  {
    id: 'simjang',
    korean: '심장이 뛰어',
    romanization: 'sim-jang-i ttwi-eo',
    translation: { en: 'My heart is pounding', zh: '我的心在跳动 / 心跳加速' },
    category: 'romance',
    culturalNote: 'Describes the physical thrill of being close to the person you love.'
  },
  {
    id: 'unmyeong',
    korean: '운명',
    romanization: 'un-myeong',
    translation: { en: 'Destiny / Fate', zh: '命运 (命中注定)' },
    category: 'romance',
    culturalNote: 'Famous theme in fantasy romance K-Dramas (e.g. "My Love from the Star" OST).'
  },

  // --- K-Culture, K-Pop, K-Drama Essentials ---
  {
    id: 'sarang',
    korean: '사랑',
    romanization: 'sa-rang',
    translation: { en: 'Love', zh: '爱 / 爱情' },
    category: 'kculture',
    culturalNote: 'One of the most used words in Korean ballads, K-Dramas, and lyrics.'
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

export const KOREAN_VOCABULARY = CURATED_VOCABULARY;
