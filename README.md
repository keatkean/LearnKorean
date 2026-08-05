# 🇰🇷 Learn Korean 40-Sound Hangul Chart | 韩语四十音发音跟读表 | 韓語四十音發音跟讀表

[English](#-english) | [简体中文](#-简体中文) | [繁體中文](#-繁體中文)

---

## 🇺🇸 English

A modern, responsive, high-performance web application for learning Korean Hangul pronunciation (19 Consonants × 21 Vowels = 399 Syllable blocks). Built with Next.js 15, TypeScript, Tailwind CSS, and Web Speech Synthesis API.

### ✨ Features
- 🔊 **Standard Web Speech Synthesis**: Instant audio playback on cell click with speed rate controls (`0.5x`, `0.75x`, `0.85x`, `1.0x`) and voice picker.
- 📐 **Pre-computed 399 Syllable Unicode Matrix**: 0xAC00 Hangul block calculation algorithm.
- 🗺️ **4 Matrix Views**:
  - Basic Sounds (14 Consonants × 10 Vowels = 140 Syllables)
  - Tense Consonants (5 Double Consonants × 10 Vowels = 50 Syllables)
  - Complex Vowels (14 Consonants × 11 Vowels = 154 Syllables)
  - Full Chart (19 Consonants × 21 Vowels = 399 Syllables)
- 🔍 **Real-time Search**: Live search and highlight matching Hangul characters and Revised Romanization (e.g., `ka`, `g`, `가`).
- 🎓 **3D Audio Flashcards**: Interactive flip card mode with sound playback and shuffle functionality.
- 🎯 **Listening Quiz**: Gamified sound quiz with scoring, streak counters, and immediate feedback.
- 👩‍🏫 **Linguistics & Pronunciation Guide**: Detailed phonetics breakdown (Plain vs Tense vs Aspirated consonants, Vowels comparison, 7 Batchims).
- 🌙 **Dark & Light Mode**: Seamless theme switching with custom CSS variables.
- 📱 **Mobile Responsive**: Sticky row (vowels) & column (consonants) headers for smooth dual-axis matrix scrolling.

### 🛠️ Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, CSS Modules
- **Icons & Animation**: Lucide React, Framer Motion
- **Fonts**: Noto Sans KR (Google Fonts), Inter

### 🚀 Getting Started

1. **Clone & Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

3. **Production Build**:
   ```bash
   npm run build
   npm run start
   ```

---

## 🇨🇳 简体中文

基于 Next.js 15 App Router、TypeScript 与 Tailwind CSS 构建的现代响应式韩语四十音发音跟读表（涵盖 19 辅音 × 21 元音 = 399 音节组合）。

### ✨ 核心功能
- 🔊 **标准 Web Speech 朗读引擎**：点击单元格实时播放发音，支持调速（`0.5x 慢速` 至 `1.0x 快速`）与语音库选择。
- 📐 **399 音节 Unicode 算法预计算**：基于 `0xAC00` 偏移公式精确定位每一个韩语音节。
- 🗺️ **4 种结构视图**：基本音 (14×10)、紧辅音 (5×10)、复元音 (14×11) 与四十音总表 (19×21)。
- 🔍 **实时搜索高亮**：输入韩语字母或罗马音（如 `ka`, `g`, `가`）动态高亮匹配单元格。
- 🎓 **3D 立体卡片跟读**：翻面卡片展示声母、韵母、罗马音与语音朗读。
- 🎯 **听音辨字小测验**：听力测试模式，支持积分计分与连胜奖励。
- 👩‍🏫 **面向中文学习者的发音要领**：松音/紧音/送气音三分法对比、易混淆元音辨析与 7 代表收音解析。
- 🌙 **深色/浅色主题**：支持一键切换 Night/Day Mode。
- 📱 **移动端响应式体验**：表头元音行与首列辅音双向 Sticky 锁死，滑动不迷路。

### 🚀 快速开始

1. **安装依赖**：
   ```bash
   npm install
   ```
2. **启动开发服务器**：
   ```bash
   npm run dev
   ```
3. **打包构建**：
   ```bash
   npm run build
   ```

---

## 🇹🇼 繁體中文

基於 Next.js 15 App Router、TypeScript 與 Tailwind CSS 建構的現代響應式韓語四十音發音跟讀表（涵蓋 19 輔音 × 21 母音 = 399 音節組合）。

### ✨ 核心功能
- 🔊 **標準 Web Speech 朗讀引擎**：點擊單元格即時播放發音，支援調速（`0.5x 慢速` 至 `1.0x 快速`）與語音庫選擇。
- 📐 **399 音節 Unicode 演算法預計算**：基於 `0xAC00` 偏移公式精確定位每一個韓語音節。
- 🗺️ **4 種結構檢視**：基本音 (14×10)、緊輔音 (5×10)、複母音 (14×11) 與四十音總表 (19×21)。
- 🔍 **即時搜尋高亮**：輸入韓語字母或羅馬拼音（如 `ka`, `g`, `가`）動態高亮符合單元格。
- 🎓 **3D 立體卡片跟讀**：翻面卡片展示聲母、韻母、羅馬拼音與語音朗讀。
- 🎯 **聽音辨字小測驗**：聽力測試模式，支援積分計分與連勝獎勵。
- 👩‍🏫 **發音要領與語音解析**：鬆音/緊音/送氣音三分法對比、易混淆母音辨析與 7 代表收音解析。
- 🌙 **深色/淺色主題**：支援一鍵切換 Night/Day Mode。
- 📱 **行動端響應式體驗**：表頭母音列與首行輔音雙向 Sticky 鎖死。

---

## 📜 License / 许可证

Distributed under the [MIT License](LICENSE).
