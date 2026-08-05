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
  culturalNote: {
    en: string;
    zh: string;
  };
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
    culturalNote: {
      en: 'The most iconic romantic expression in K-Dramas and K-Pop love songs.',
      zh: '韩剧与 K-Pop 告白情歌中最具代表性的浪漫表达。',
    },
  },
  {
    id: 'yeongwonhi',
    korean: '영원히 사랑해',
    romanization: 'yeong-won-hi sa-rang-hae',
    translation: { en: 'I will love you forever', zh: '我永远爱你' },
    category: 'romance',
    culturalNote: {
      en: 'Classic romantic vow heard in dramatic K-Drama climax confession scenes.',
      zh: '经典浪漫誓言，常见于韩剧高潮告白场景。',
    },
  },
  {
    id: 'nae_gyeote',
    korean: '내 곁에 있어줘',
    romanization: 'nae gyeot-e is-seo-jwo',
    translation: { en: 'Please stay by my side', zh: '请留在我的身边' },
    category: 'romance',
    culturalNote: {
      en: 'Deeply emotional line featured in K-Drama OST lyrics.',
      zh: '深情动人的台词，常出现在韩剧 OST 原声带中。',
    },
  },
  {
    id: 'neobakke',
    korean: '너밖에 없어',
    romanization: 'neo-bak-ke eop-seo',
    translation: { en: 'You are the only one for me', zh: '我只有你 / 你是我的唯一' },
    category: 'romance',
    culturalNote: {
      en: 'Passionate romantic declaration used when expressing exclusive devotion.',
      zh: '深情专一的爱意宣告，表达眼里只有对方。',
    },
  },
  {
    id: 'cheotnun',
    korean: '첫눈에 반했어',
    romanization: 'cheot-nun-e ban-haes-seo',
    translation: { en: 'I fell in love at first sight', zh: '我一见钟情了' },
    category: 'romance',
    culturalNote: {
      en: 'Iconic romance trope phrase used in meet-cute K-Drama scenes.',
      zh: '韩剧浪漫初见场景中最常用的一见钟情金句。',
    },
  },
  {
    id: 'maeum',
    korean: '내 마음을 받아줘',
    romanization: 'nae ma-eum-eul ba-da-jwo',
    translation: { en: 'Please accept my heart / feelings', zh: '请接受我的心意' },
    category: 'romance',
    culturalNote: {
      en: 'Traditional confession phrase when giving a love letter or gift.',
      zh: '送出情书或礼物告白时最地道的韩语表达。',
    },
  },
  {
    id: 'hamkke',
    korean: '너랑 함께하고 싶어',
    romanization: 'neo-rang ham-kke-ha-go si-peo',
    translation: { en: 'I want to be together with you', zh: '我想和你在一起' },
    category: 'romance',
    culturalNote: {
      en: 'Heartfelt proposal sentence expressing the desire to share life together.',
      zh: '真挚动人的求婚/告白金句，表达陪伴的渴望。',
    },
  },
  {
    id: 'yeonin',
    korean: '연인',
    romanization: 'yeon-in',
    translation: { en: 'Lovers / Sweetheart', zh: '恋人 / 爱人' },
    category: 'romance',
    culturalNote: {
      en: 'Poetic Korean noun for romantic partners, hit drama title.',
      zh: '富有诗意的韩文名词，指热恋中的情侣与伴侣。',
    },
  },
  {
    id: 'simjang',
    korean: '심장이 뛰어',
    romanization: 'sim-jang-i ttwi-eo',
    translation: { en: 'My heart is pounding', zh: '我的心在跳动 / 心跳加速' },
    category: 'romance',
    culturalNote: {
      en: 'Describes the physical thrill of being close to the person you love.',
      zh: '形容靠近心上人时怦然心动、心跳加速的感觉。',
    },
  },
  {
    id: 'unmyeong',
    korean: '운명',
    romanization: 'un-myeong',
    translation: { en: 'Destiny / Fate', zh: '命运 (命中注定)' },
    category: 'romance',
    culturalNote: {
      en: 'Famous theme in fantasy romance K-Dramas (e.g. "My Love from the Star" OST).',
      zh: '奇幻浪漫韩剧（如《来自星星的你》）的核心主题。',
    },
  },

  // --- K-Culture, K-Pop, K-Drama Essentials ---
  {
    id: 'sarang',
    korean: '사랑',
    romanization: 'sa-rang',
    translation: { en: 'Love', zh: '爱 / 爱情' },
    category: 'kculture',
    culturalNote: {
      en: 'One of the most used words in Korean ballads, K-Dramas, and lyrics.',
      zh: '韩语情歌抒情曲与影视剧中使用频率极高的核心词。',
    },
  },
  {
    id: 'daebak',
    korean: '대박',
    romanization: 'dae-bak',
    translation: { en: 'Awesome / Jackpot / Wow!', zh: '太棒了 / 大获成功' },
    category: 'kculture',
    culturalNote: {
      en: 'Famous Korean slang used to express excitement, awe, or surprising good fortune.',
      zh: '韩国热门流行俚语，用于表达赞叹、惊喜与成功。',
    },
  },
  {
    id: 'jinjja',
    korean: '진짜',
    romanization: 'jin-jja',
    translation: { en: 'Really? / Seriously?', zh: '真的吗？/ 确实' },
    category: 'kdrama',
    culturalNote: {
      en: 'Heard constantly in K-Dramas to confirm truth or express disbelief.',
      zh: '韩剧中出镜率极高的口头禅，用以确认真实性。',
    },
  },
  {
    id: 'oppa',
    korean: '오빠',
    romanization: 'o-ppa',
    translation: { en: 'Older brother / Male term of endearment', zh: '哥哥 (女性对年长男性尊称)' },
    category: 'kdrama',
    culturalNote: {
      en: 'Used by females to address an older brother, male friend, or romantic partner.',
      zh: '女性对年长哥哥、亲密男同学或男友的亲切称呼。',
    },
  },
  {
    id: 'gwenchana',
    korean: '괜찮아',
    romanization: 'gwen-chan-a',
    translation: { en: "It's okay / No problem", zh: '没关系 / 没事' },
    category: 'kdrama',
    culturalNote: {
      en: 'Reassuring phrase used in daily life and drama scenes.',
      zh: '日常生活与影视剧中最具安慰色彩的温馨日常用语。',
    },
  },
  {
    id: 'bogosipeo',
    korean: '보고싶어',
    romanization: 'bo-go-si-peo',
    translation: { en: 'I miss you', zh: '我想你' },
    category: 'kpop',
    culturalNote: {
      en: 'Famous title and chorus line in iconic K-Pop OST songs (e.g. BTS Spring Day).',
      zh: '经典 K-Pop 主打歌（如 BTS《春日》）高潮副歌歌词。',
    },
  },
  {
    id: 'fighting',
    korean: '화이팅',
    romanization: 'hwa-i-ting',
    translation: { en: 'Fighting! / You can do it!', zh: '加油！' },
    category: 'kculture',
    culturalNote: {
      en: 'Iconic Korean cheer derived from English "fighting", used before exams or hard work.',
      zh: '源于英语 "fighting" 的经典韩式加油助威声。',
    },
  },
  {
    id: 'choeae',
    korean: '최애',
    romanization: 'choe-ae',
    translation: { en: 'Ultimate Bias (Favorite Member)', zh: '本命 / 最爱成员' },
    category: 'kpop',
    culturalNote: {
      en: 'K-Pop fandom term referring to your absolute favorite member in a group.',
      zh: 'K-Pop 追星饭圈用语，指组合中最喜爱的本命爱豆。',
    },
  },
  {
    id: 'simkung',
    korean: '심쿵',
    romanization: 'sim-kung',
    translation: { en: 'Heart-throb / Heartflutter', zh: '心动 / 扑通扑通' },
    category: 'kpop',
    culturalNote: {
      en: 'Slang combining "심장" (heart) and "쿵" (thump) for sudden romantic attraction.',
      zh: '结合 "심장"(心脏) 与 "쿵"(扑通) 的网络流行心动俚语。',
    },
  },
  {
    id: 'chimaek',
    korean: '치맥',
    romanization: 'chi-maek',
    translation: { en: 'Chicken & Beer', zh: '炸鸡加啤酒' },
    category: 'kculture',
    culturalNote: {
      en: 'Iconic food pairing popularized globally by K-Dramas like "My Love from the Star".',
      zh: '由《来自星星的你》风靡全球的韩国炸鸡啤酒夜宵文化。',
    },
  },
  {
    id: 'gamsahamnida',
    korean: '감사합니다',
    romanization: 'gam-sa-ham-ni-da',
    translation: { en: 'Thank you (Formal)', zh: '谢谢 (正式)' },
    category: 'essential',
    culturalNote: {
      en: 'Standard polite phrase used across South Korea to express sincere gratitude.',
      zh: '全韩国最通用礼貌的敬语表达，用于诚挚感谢。',
    },
  },
  {
    id: 'annyeong',
    korean: '안녕',
    romanization: 'an-nyeong',
    translation: { en: 'Hello / Bye (Casual)', zh: '你好 / 再见' },
    category: 'essential',
    culturalNote: {
      en: 'Literally means "peace/wellness". Combined with "하세요" to become formal "안녕하세요".',
      zh: '本意为“平安”。加上 "하세요" 即成为敬语“안녕하세요”。',
    },
  },
  {
    id: 'chingu',
    korean: '친구',
    romanization: 'chin-gu',
    translation: { en: 'Friend', zh: '朋友' },
    category: 'essential',
    culturalNote: {
      en: 'Specifically refers to someone of the exact same age in traditional Korean age culture.',
      zh: '在传统韩国年龄文化中，特指同龄朋友。',
    },
  },
  {
    id: 'hallyu',
    korean: '한류',
    romanization: 'han-ryu',
    translation: { en: 'Korean Wave (K-Culture)', zh: '韩流' },
    category: 'kpop',
    culturalNote: {
      en: 'Global increase in popularity of South Korean culture, music, movies, and cuisine.',
      zh: '指韩国流行音乐、影视与文化在全球范围的蓬勃风潮。',
    },
  },
  {
    id: 'yeppuda',
    korean: '예쁘다',
    romanization: 'ye-ppeu-da',
    translation: { en: 'Pretty / Beautiful', zh: '漂亮 / 美丽' },
    category: 'kdrama',
    culturalNote: {
      en: 'Frequently heard compliment in K-Dramas and songs.',
      zh: '韩剧与高频流行抒情歌中极为常见的赞美词。',
    },
  },
  {
    id: 'haengbok',
    korean: '행복',
    romanization: 'haeng-bok',
    translation: { en: 'Happiness', zh: '幸福' },
    category: 'kculture',
    culturalNote: {
      en: 'Found in many K-Pop song titles and emotional drama monologues.',
      zh: '众多 K-Pop 歌名与影视感人独白中的核心美好词汇。',
    },
  }
];

export const KOREAN_VOCABULARY = CURATED_VOCABULARY;
