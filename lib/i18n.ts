export type Locale = 'zh-CN' | 'zh-TW' | 'en';

export interface Translations {
  title: string;
  subtitle: string;
  badge: string;
  guideBtn: string;
  flashcardBtn: string;
  quizBtn: string;
  searchPlaceholder: string;
  tabBasic: string;
  tabBasicSub: string;
  tabTense: string;
  tabTenseSub: string;
  tabComplex: string;
  tabComplexSub: string;
  tabFull: string;
  tabFullSub: string;
  consonantVowelHeader: string;
  consonantTag: string;
  vowelTag: string;
  tipText: string;
  stickyNote: string;
  audioStatusReady: string;
  audioStatusPlaying: string;
  audioTip: string;
  audioNotSupported: string;
  speedSlow: string;
  speedMedium: string;
  speedNormal: string;
  speedFast: string;
  stopBtn: string;
  // Flashcard Modal
  fcTitle: string;
  fcHint: string;
  fcCho: string;
  fcJung: string;
  fcPlaySound: string;
  fcPrev: string;
  fcNext: string;
  fcShuffle: string;
  // Quiz Modal
  qzTitle: string;
  qzScore: string;
  qzStreak: string;
  qzPrompt: string;
  qzCorrect: string;
  qzIncorrect: string;
  // Guide Modal
  guideTitle: string;
  guideSubtitle: string;
  guideSec1Title: string;
  guideSec1Desc: string;
  guidePlainTitle: string;
  guidePlainDesc: string;
  guideTenseTitle: string;
  guideTenseDesc: string;
  guideAspTitle: string;
  guideAspDesc: string;
  guideSec2Title: string;
  guideEoVsO: string;
  guideEuVsI: string;
  guideAeVsE: string;
  guideSec3Title: string;
  guideSec3Desc: string;
  guideCloseBtn: string;
}

export const dictionaries: Record<Locale, Translations> = {
  'zh-CN': {
    title: '韩语四十音发音跟读表',
    subtitle: '点击任意音节 Block 即可听取发音 · 涵盖 19 辅音与 21 元音标准发音',
    badge: 'Standard TTS',
    guideBtn: '发音要领',
    flashcardBtn: '卡片跟读',
    quizBtn: '听力测验',
    searchPlaceholder: '搜索韩语/罗马音 (例: ka, 가)',
    tabBasic: '基本音',
    tabBasicSub: '14×10 原图结构',
    tabTense: '⭐ 补全：紧辅音',
    tabTenseSub: '5×10',
    tabComplex: '⭐ 补全：复元音',
    tabComplexSub: '14×11',
    tabFull: '完整四十音总表',
    tabFullSub: '19×21 (399音节)',
    consonantVowelHeader: '辅音 \\ 元音',
    consonantTag: '双辅音',
    vowelTag: '补全',
    tipText: '点击表格内部单元格直接听取字母/双字发音。支持在搜索框中快速查找特定韩语音节或罗马音。',
    stickyNote: '支持响应式横向滚动与首列锁定',
    audioStatusReady: '朗读准备就绪',
    audioStatusPlaying: '正在朗读:',
    audioTip: '提示: 点击表格中的任意拼音均可听取朗读',
    audioNotSupported: '⚠️ 您的浏览器不支持 Speech Synthesis',
    speedSlow: '0.5x 慢速',
    speedMedium: '0.75x 适中',
    speedNormal: '0.85x 标准',
    speedFast: '1.0x 快速',
    stopBtn: '停止',
    fcTitle: '🎓 韩语发音记忆卡片',
    fcHint: '点击卡片翻面看罗马音 & 听读音',
    fcCho: '声母',
    fcJung: '韵母',
    fcPlaySound: '播放发音',
    fcPrev: '上一个',
    fcNext: '下一个',
    fcShuffle: '打乱顺序',
    qzTitle: '🎯 听音辨字小测验',
    qzScore: '得分',
    qzStreak: '连胜',
    qzPrompt: '点击喇叭重听，选出你听到的韩语音节：',
    qzCorrect: '回答正确！太棒了！ 🎉',
    qzIncorrect: '正确答案是:',
    guideTitle: '👩‍🏫 教师发音指导与汉语对照表',
    guideSubtitle: '专门面向中文学习者的韩语发音难点解析与口型助记',
    guideSec1Title: '1. 辅音三分法（松音 vs 紧音 vs 送气音）',
    guideSec1Desc: '韩语辅音最大的难点在于气流与声带肌肉紧张度：',
    guidePlainTitle: '松音 (平音)',
    guidePlainDesc: 'ㄱ, ㄷ, ㅂ, ㅅ, ㅈ。发音时气流平缓。词首发音偏清音(k/t/p/ch)，词中元音间变浊音(g/d/b/j)。',
    guideTenseTitle: '紧音 (双辅音)',
    guideTenseDesc: 'ㄲ, ㄸ, ㅃ, ㅆ, ㅉ。喉部肌肉紧绷，阻断气流后猛然挤压发音，绝对不送气。',
    guideAspTitle: '送气音 (激音)',
    guideAspDesc: 'ㅋ, ㅌ, ㅍ, ㅊ, ㅎ。发音时呼出强烈气流（在嘴前放纸巾测试，纸巾明显被吹开）。',
    guideSec2Title: '2. 易混淆元音辨析与口型要领',
    guideEoVsO: 'ㅓ (eo): 口型半开自然(似拼音 e)，嘴唇不圆。 ㅗ (o): 嘴唇大幅收小聚圆。',
    guideEuVsI: 'ㅡ (eu): 嘴角向两侧用力拉平(咬牙发音)。 ㅣ (i): 嘴型自然放松(似拼音 i)。',
    guideAeVsE: 'ㅐ (ae) vs ㅔ (e): 在现代标准首尔韩语中两者区别已融合，发音类似 ai/ei。',
    guideSec3Title: '3. 7 代表收音（终声 / 韵尾 / 받침）',
    guideSec3Desc: '所有复杂的收音最终归纳为 7 种代表发音：ㄱ[k], ㄴ[n], ㄷ[t], ㄹ[l], ㅁ[m], ㅂ[p], ㅇ[ng]。',
    guideCloseBtn: '知道了，开始练习',
  },
  'zh-TW': {
    title: '韓語四十音發音跟讀表',
    subtitle: '點擊任意音節 Block 即可聽取發音 · 涵蓋 19 輔音與 21 子音標準發音',
    badge: 'Standard TTS',
    guideBtn: '發音要領',
    flashcardBtn: '卡片跟讀',
    quizBtn: '聽力測驗',
    searchPlaceholder: '搜尋韓語/羅馬拼音 (例: ka, 가)',
    tabBasic: '基本音',
    tabBasicSub: '14×10 原圖結構',
    tabTense: '⭐ 補全：緊輔音',
    tabTenseSub: '5×10',
    tabComplex: '⭐ 補全：複元音',
    tabComplexSub: '14×11',
    tabFull: '完整四十音總表',
    tabFullSub: '19×21 (399音節)',
    consonantVowelHeader: '輔音 \\ 母音',
    consonantTag: '雙輔音',
    vowelTag: '補全',
    tipText: '點擊表格內部單元格直接聽取字母/雙字發音。支援在搜尋框中快速尋找特定韓語音節或羅馬拼音。',
    stickyNote: '支援響應式橫向滾動與首列鎖定',
    audioStatusReady: '朗讀準備就緒',
    audioStatusPlaying: '正在朗讀:',
    audioTip: '提示: 點擊表格中的任意拼音均可聽取朗讀',
    audioNotSupported: '⚠️ 您的瀏覽器不支援 Speech Synthesis',
    speedSlow: '0.5x 慢速',
    speedMedium: '0.75x 適中',
    speedNormal: '0.85x 標準',
    speedFast: '1.0x 快速',
    stopBtn: '停止',
    fcTitle: '🎓 韓語發音記憶卡片',
    fcHint: '點擊卡片翻面看羅馬拼音 & 聽讀音',
    fcCho: '聲母',
    fcJung: '韻母',
    fcPlaySound: '播放發音',
    fcPrev: '上一個',
    fcNext: '下一個',
    fcShuffle: '隨機打亂',
    qzTitle: '🎯 聽音辨字小測驗',
    qzScore: '得分',
    qzStreak: '連勝',
    qzPrompt: '點擊喇叭重聽，選出你聽到的韓語音節：',
    qzCorrect: '回答正確！太棒了！ 🎉',
    qzIncorrect: '正確答案是:',
    guideTitle: '👩‍🏫 教師發音指導與漢語對照表',
    guideSubtitle: '專門面向中文學習者的韓語發音難點解析與口型助記',
    guideSec1Title: '1. 輔音三分法（鬆音 vs 緊音 vs 送氣音）',
    guideSec1Desc: '韓語輔音最大的難點在於氣流與聲帶肌肉緊張度：',
    guidePlainTitle: '鬆音 (平音)',
    guidePlainDesc: 'ㄱ, ㄷ, ㅂ, ㅅ, ㅈ。發音時氣流平緩。詞首發音偏清音(k/t/p/ch)，詞中元音間變濁音(g/d/b/j)。',
    guideTenseTitle: '緊音 (雙輔音)',
    guideTenseDesc: 'ㄲ, ㄸ, ㅃ, ㅆ, ㅉ。喉部肌肉緊繃，阻斷氣流後猛然擠壓發音，絕對不送氣。',
    guideAspTitle: '送氣音 (激音)',
    guideAspDesc: 'ㅋ, ㅌ, ㅍ, ㅊ, ㅎ。發音時呼出強烈氣流（在嘴前放紙巾測試，紙巾明顯被吹開）。',
    guideSec2Title: '2. 易混淆母音辨析與口型要領',
    guideEoVsO: 'ㅓ (eo): 口型半開自然，嘴唇不圓。 ㅗ (o): 嘴唇大幅收小聚圓。',
    guideEuVsI: 'ㅡ (eu): 嘴角向兩側用力拉平(咬牙發音)。 ㅣ (i): 嘴型自然放鬆。',
    guideAeVsE: 'ㅐ (ae) vs ㅔ (e): 在現代標準首爾韓語中兩者區別已融合，發音類似 ai/ei。',
    guideSec3Title: '3. 7 代表收音（終聲 / 韻尾 / 받침）',
    guideSec3Desc: '所有複雜的收音最終歸納為 7 種代表發音：ㄱ[k], ㄴ[n], ㄷ[t], ㄹ[l], ㅁ[m], ㅂ[p], ㅇ[ng]。',
    guideCloseBtn: '知道了，開始練習',
  },
  'en': {
    title: 'Korean 40-Sound Hangul Chart',
    subtitle: 'Interactive audio chart for 19 consonants & 21 vowels',
    badge: 'TTS Audio',
    guideBtn: 'Guide',
    flashcardBtn: 'Cards',
    quizBtn: 'Quiz',
    searchPlaceholder: 'Search Hangul/Romaja...',
    tabBasic: 'Basic',
    tabBasicSub: '14×10',
    tabTense: '⭐ Tense',
    tabTenseSub: '5×10',
    tabComplex: '⭐ Complex',
    tabComplexSub: '14×11',
    tabFull: 'Full Chart',
    tabFullSub: '19×21',
    consonantVowelHeader: 'Cons. \\ Vowel',
    consonantTag: 'Tense',
    vowelTag: 'Complex',
    tipText: 'Click any cell to listen to Hangul audio. Search by Hangul or Romaja.',
    stickyNote: 'Sticky row & column headers enabled',
    audioStatusReady: 'Audio Engine Ready',
    audioStatusPlaying: 'Playing:',
    audioTip: 'Tip: Click any syllable cell to listen to standard pronunciation',
    audioNotSupported: '⚠️ Speech Synthesis is not supported in your browser',
    speedSlow: '0.5x',
    speedMedium: '0.75x',
    speedNormal: '0.85x',
    speedFast: '1.0x',
    stopBtn: 'Stop',
    fcTitle: '🎓 Hangul Flashcards',
    fcHint: 'Click card to flip for Romaja & Audio',
    fcCho: 'Consonant',
    fcJung: 'Vowel',
    fcPlaySound: 'Play Sound',
    fcPrev: 'Prev',
    fcNext: 'Next',
    fcShuffle: 'Shuffle',
    qzTitle: '🎯 Listening Practice Quiz',
    qzScore: 'Score',
    qzStreak: 'Streak',
    qzPrompt: 'Listen to the sound and choose the correct Hangul block:',
    qzCorrect: 'Correct answer! Excellent! 🎉',
    qzIncorrect: 'Correct answer was:',
    guideTitle: '👩‍🏫 Korean Pronunciation & Linguistics',
    guideSubtitle: 'Phonetics breakdown & mouth position guide',
    guideSec1Title: '1. Consonant Classification (Plain vs Tense vs Aspirated)',
    guideSec1Desc: 'Korean consonants feature a three-way distinction based on tension & airflow:',
    guidePlainTitle: 'Plain Consonants',
    guidePlainDesc: 'ㄱ, ㄷ, ㅂ, ㅅ, ㅈ. Relaxed airflow. Unvoiced at word start (k/t/p/ch), voiced between vowels (g/d/b/j).',
    guideTenseTitle: 'Tense Consonants',
    guideTenseDesc: 'ㄲ, ㄸ, ㅃ, ㅆ, ㅉ. Tightened glottis and sudden release without aspiration (no puff of air).',
    guideAspTitle: 'Aspirated Consonants',
    guideAspDesc: 'ㅋ, ㅌ, ㅍ, ㅊ, ㅎ. Strong burst of air (test by holding a tissue in front of your mouth).',
    guideSec2Title: '2. Confusing Vowels & Mouth Positions',
    guideEoVsO: 'ㅓ (eo): Open mouth naturally without rounding lips. ㅗ (o): Round lips tightly.',
    guideEuVsI: 'ㅡ (eu): Pull corners of lips flat horizontally. ㅣ (i): Relaxed open lips (like ee).',
    guideAeVsE: 'ㅐ (ae) vs ㅔ (e): Merged in modern Seoul Korean; both sound similar to "ay/eh".',
    guideSec3Title: '3. 7 Representative Batchims (Final Consonants / 받침)',
    guideSec3Desc: 'All final consonants collapse into 7 representative sound endings: ㄱ[k], ㄴ[n], ㄷ[t], ㄹ[l], ㅁ[m], ㅂ[p], ㅇ[ng].',
    guideCloseBtn: 'Got it, start practicing',
  },
};
