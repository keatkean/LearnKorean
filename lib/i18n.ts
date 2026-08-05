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

  // Feature Modal Action Buttons
  btnSyllableBuilder: string;
  btnStrokeOrder: string;
  btnVocalTract: string;
  btnTypingGame: string;
  btnPronunciation: string;
  btnVocabExplorer: string;
  btnCommuterMode: string;

  // Syllable Builder Modal
  builderTitle: string;
  builderSubtitle: string;
  builderChoLabel: string;
  builderJungLabel: string;
  builderJongLabel: string;
  builderResultLabel: string;
  builderListenSound: string;
  builderReset: string;
  builderNoBatchim: string;
  builderInitialTag: string;
  builderVowelTag: string;
  builderBatchimTag: string;

  // Stroke Order Modal
  strokeTitle: string;
  strokeSubtitle: string;
  strokePlaceholder: string;
  strokeClearBtn: string;
  strokeGuideBtn: string;
  strokeHideGuideBtn: string;
  strokeDrawHere: string;
  strokePronounceBtn: string;

  // Vocal Tract Guide Modal
  vocalTitle: string;
  vocalSubtitle: string;
  vocalDiagramNote: string;
  vocalTrySounds: string;
  vocalTongueLabel: string;
  vocalAirflowLabel: string;

  // Typing Game Modal
  typingTitle: string;
  typingSubtitle: string;
  typingScore: string;
  typingHighScore: string;
  typingReset: string;
  typingTargetLabel: string;
  typingInputPlaceholder: string;
  typingKeyboardHeader: string;
  typingBackspace: string;

  // Pronunciation Evaluator Modal
  evalTitle: string;
  evalSubtitle: string;
  evalStartMic: string;
  evalListening: string;
  evalTargetLabel: string;
  evalListenReference: string;
  evalMicInstruction: string;

  // Vocab Explorer Modal
  vocabTitle: string;
  vocabSubtitle: string;
  vocabSearchPlaceholder: string;

  // Audio Commuter Modal
  commuterTitle: string;
  commuterSubtitle: string;
  commuterBlindTest: string;
  commuterTrackCount: string;
  commuterBlindTestActive: string;
  commuterHideText: string;
  commuterBlindHint: string;

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

    btnSyllableBuilder: '拼音沙盒',
    btnStrokeOrder: '笔顺描红',
    btnVocalTract: '发音口型',
    btnTypingGame: '打字游戏',
    btnPronunciation: '语音评估',
    btnVocabExplorer: 'K-Pop/剧词典',
    btnCommuterMode: '随身听模式',

    builderTitle: '🧩 韩语拼音组合沙盒',
    builderSubtitle: '自由选择 初声(辅音) + 中声(元音) + 终声(收音) 实时合成 Unicode 拼音',
    builderChoLabel: '1. 选择初声 (初声 / 辅音)',
    builderJungLabel: '2. 选择中声 (中声 / 元音)',
    builderJongLabel: '3. 选择终声 (终声 / 收音 - 可选)',
    builderResultLabel: '实时合成 Unicode 拼音 Block:',
    builderListenSound: '听发音',
    builderReset: '重置',
    builderNoBatchim: '无收音 (없음)',
    builderInitialTag: '初声',
    builderVowelTag: '中声',
    builderBatchimTag: '终声',

    strokeTitle: '✍️ 韩语笔顺描红与手写画布',
    strokeSubtitle: '描画任意韩语辅音、元音或组合字，练习标准书写笔顺',
    strokePlaceholder: '输入任意韩字...',
    strokeClearBtn: '清除',
    strokeGuideBtn: '显示笔顺指南',
    strokeHideGuideBtn: '隐藏笔顺指南',
    strokeDrawHere: '在此处书写描红',
    strokePronounceBtn: '发音',

    vocalTitle: '🗣️ 声道剖面与发音口型图解',
    vocalSubtitle: '直观了解舌头位置、气流方向与口型开合要领',
    vocalDiagramNote: '蓝线表示舌头弯曲弧度与发音接触部位',
    vocalTrySounds: '试听发音:',
    vocalTongueLabel: '舌位:',
    vocalAirflowLabel: '气流:',

    typingTitle: '⌨️ 韩语键盘速打游戏',
    typingSubtitle: '练习韩语 두벌식 (2-Set Dubeolsik) 键盘布局与实时拼字',
    typingScore: '得分',
    typingHighScore: '最高分',
    typingReset: '重置',
    typingTargetLabel: '请打出以下目标字词:',
    typingInputPlaceholder: '点击下方虚拟键盘或直接敲击键盘...',
    typingKeyboardHeader: '두벌식 (2-Set) 虚拟键盘布局 — 先按辅音，后按元音',
    typingBackspace: '退格 (Backspace)',

    evalTitle: '🎙️ AI 麦克风发音跟读评估',
    evalSubtitle: '点击麦克风大声朗读，实时识别并评分',
    evalStartMic: '开始录音识别',
    evalListening: '正在倾听中...',
    evalTargetLabel: '目标词汇:',
    evalListenReference: '听示范朗读',
    evalMicInstruction: '点击麦克风，用韩语大声朗读目标词',

    vocabTitle: '💖 K-Pop & 影视韩语词典',
    vocabSubtitle: '探索精选韩剧、K-Pop 浪漫金句与日常高频词汇',
    vocabSearchPlaceholder: '搜索词汇或翻译...',

    commuterTitle: '🎧 随身听跟读模式 (Commuter Mode)',
    commuterSubtitle: '无需手动点击，自动循环播放并朗读韩语词汇',
    commuterBlindTest: '盲听模式 (隐藏韩字)',
    commuterTrackCount: '音轨',
    commuterBlindTestActive: '盲听测试中',
    commuterHideText: '隐藏韩字',
    commuterBlindHint: '盲听跟读测试 (点击眼睛图标取消隐藏)',

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

    btnSyllableBuilder: '拼音沙盒',
    btnStrokeOrder: '筆順描紅',
    btnVocalTract: '發音口型',
    btnTypingGame: '打字遊戲',
    btnPronunciation: '語音評估',
    btnVocabExplorer: 'K-Pop/劇詞典',
    btnCommuterMode: '隨身聽模式',

    builderTitle: '🧩 韓語拼音組合沙盒',
    builderSubtitle: '自由選擇 初聲(輔音) + 中聲(母音) + 終聲(收音) 實時合成 Unicode 拼音',
    builderChoLabel: '1. 選擇初聲 (初聲 / 輔音)',
    builderJungLabel: '2. 選擇中聲 (中聲 / 母音)',
    builderJongLabel: '3. 選擇終聲 (終聲 / 收音 - 可選)',
    builderResultLabel: '實時合成 Unicode 拼音 Block:',
    builderListenSound: '聽發音',
    builderReset: '重置',
    builderNoBatchim: '無收音 (없음)',
    builderInitialTag: '初聲',
    builderVowelTag: '中聲',
    builderBatchimTag: '終聲',

    strokeTitle: '✍️ 韓語筆順描紅與手寫畫布',
    strokeSubtitle: '描畫任意韓語輔音、母音或組合字，練習標準書寫筆順',
    strokePlaceholder: '輸入任意韓字...',
    strokeClearBtn: '清除',
    strokeGuideBtn: '顯示筆順指南',
    strokeHideGuideBtn: '隱藏筆順指南',
    strokeDrawHere: '在此處書寫描紅',
    strokePronounceBtn: '發音',

    vocalTitle: '🗣️ 聲道剖面與發音口型圖解',
    vocalSubtitle: '直觀了解舌頭位置、氣流方向與口型開合要領',
    vocalDiagramNote: '藍線表示舌頭彎曲弧度與發音接觸部位',
    vocalTrySounds: '試聽發音:',
    vocalTongueLabel: '舌位:',
    vocalAirflowLabel: '氣流:',

    typingTitle: '⌨️ 韓語鍵盤速打遊戲',
    typingSubtitle: '練習韓語 두벌식 (2-Set Dubeolsik) 鍵盤佈局與實時拼字',
    typingScore: '得分',
    typingHighScore: '最高分',
    typingReset: '重置',
    typingTargetLabel: '請打出以下目標字詞:',
    typingInputPlaceholder: '點擊下方虛擬鍵盤或直接敲擊鍵盤...',
    typingKeyboardHeader: '두벌식 (2-Set) 虛擬鍵盤佈局 — 先按輔音，後按母音',
    typingBackspace: '退格 (Backspace)',

    evalTitle: '🎙️ AI 麥克風發音跟讀評估',
    evalSubtitle: '點擊麥克風大聲朗讀，實時識別並評分',
    evalStartMic: '開始錄音識別',
    evalListening: '正在傾聽中...',
    evalTargetLabel: '目標詞彙:',
    evalListenReference: '聽示範朗讀',
    evalMicInstruction: '點擊麥克風，用韓語大聲朗讀目標詞',

    vocabTitle: '💖 K-Pop & 影視韓語詞典',
    vocabSubtitle: '探索精選韓劇、K-Pop 浪漫金句與日常高頻詞彙',
    vocabSearchPlaceholder: '搜尋詞彙或翻譯...',

    commuterTitle: '🎧 隨身聽跟讀模式 (Commuter Mode)',
    commuterSubtitle: '無需手動點擊，自動循環播放並朗讀韓語詞彙',
    commuterBlindTest: '盲聽模式 (隱藏韓字)',
    commuterTrackCount: '音軌',
    commuterBlindTestActive: '盲聽測試中',
    commuterHideText: '隱藏韓字',
    commuterBlindHint: '盲聽跟讀測試 (點擊眼睛圖標取消隱藏)',

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

    btnSyllableBuilder: 'Syllable Sandbox',
    btnStrokeOrder: 'Stroke Order',
    btnVocalTract: 'Mouth Guide',
    btnTypingGame: 'Typing Game',
    btnPronunciation: 'Mic Evaluator',
    btnVocabExplorer: 'K-Vocab Explorer',
    btnCommuterMode: 'Audio Commuter',

    builderTitle: '🧩 Hangul Syllable Builder Sandbox',
    builderSubtitle: 'Select Initial + Medial + Final block to compose Hangul',
    builderChoLabel: '1. Initial Consonant (Initial)',
    builderJungLabel: '2. Medial Vowel (Medial)',
    builderJongLabel: '3. Final Consonant (Batchim)',
    builderResultLabel: 'Composed Unicode Syllable:',
    builderListenSound: 'Listen Sound',
    builderReset: 'Reset',
    builderNoBatchim: 'None (없음)',
    builderInitialTag: 'Initial',
    builderVowelTag: 'Vowel',
    builderBatchimTag: 'Batchim',

    strokeTitle: '✍️ Interactive Stroke-Order Canvas',
    strokeSubtitle: 'Trace any consonant, vowel, or composed Hangul character',
    strokePlaceholder: 'Type any Hangul...',
    strokeClearBtn: 'Clear',
    strokeGuideBtn: 'Show Guide',
    strokeHideGuideBtn: 'Hide Guide',
    strokeDrawHere: 'Draw here',
    strokePronounceBtn: 'Pronounce',

    vocalTitle: '🗣️ Vocal Tract & Tongue Guide',
    vocalSubtitle: 'Anatomical mouth position diagrams and airflow guide',
    vocalDiagramNote: 'Blue line indicates tongue curve & contact zone',
    vocalTrySounds: 'Try Sounds:',
    vocalTongueLabel: 'Tongue:',
    vocalAirflowLabel: 'Airflow:',

    typingTitle: '⌨️ Hangul Speed Typist Game',
    typingSubtitle: 'Practice typing with 2-Set Dubeolsik keyboard layout',
    typingScore: 'Score',
    typingHighScore: 'High Score',
    typingReset: 'Reset',
    typingTargetLabel: 'Type This Character:',
    typingInputPlaceholder: 'Tap virtual keys below or type on keyboard...',
    typingKeyboardHeader: '2-SET (두벌식) VIRTUAL KEYBOARD LAYOUT — TAP CONSONANT THEN VOWEL',
    typingBackspace: 'Backspace',

    evalTitle: '🎙️ Pronunciation Evaluator',
    evalSubtitle: 'Speak into your mic for real-time speech recognition scoring',
    evalStartMic: 'Start Recording',
    evalListening: 'Listening...',
    evalTargetLabel: 'Target:',
    evalListenReference: 'Listen Reference Pronunciation',
    evalMicInstruction: 'Tap mic & speak target word in Korean',

    vocabTitle: '💖 K-Pop & K-Drama Vocabulary Explorer',
    vocabSubtitle: 'Explore curated K-Pop & K-Drama words with dynamic syllable breakdowns',
    vocabSearchPlaceholder: 'Search vocabulary...',

    commuterTitle: '🎧 Hands-Free Audio Commuter Mode',
    commuterSubtitle: 'Hands-free audio player for on-the-go learning',
    commuterBlindTest: 'Audio Blind Test (Hide Text)',
    commuterTrackCount: 'Track',
    commuterBlindTestActive: 'Blind Test Active',
    commuterHideText: 'Hide Text',
    commuterBlindHint: 'Audio Blind Test (Tap eye to reveal)',

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
