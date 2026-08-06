# 🇰🇷 HangulLab | Korean 40-Sound Hangul Chart | 韩语四十音发音跟读表 | 韓語四十音發音跟讀表

[![Live Demo](https://img.shields.io/badge/Live_App-HangulLab-4f46e5?style=for-the-badge&logo=github)](https://keatkean.github.io/hangul-lab/)

[English](#-english) | [简体中文](#-简体中文) | [繁體中文](#-繁體中文)

---

## 🇺🇸 English

A modern, responsive, high-performance web application for learning Korean Hangul pronunciation (19 Consonants × 21 Vowels = 399 Syllable blocks). Built with Next.js 15, TypeScript, Tailwind CSS, and Web Speech APIs, fully optimized for **Android Chrome** & **iOS Safari**.

🌐 **Live Website**: [https://keatkean.github.io/hangul-lab/](https://keatkean.github.io/hangul-lab/)

### ✨ Features
- 🛠️ **Categorized Mobile Tools Drawer**: Instant access to all 10 interactive learning tools organized into Practice, Games, and Study categories.
- 🧩 **Syllable Builder Sandbox**: Assemble Initial + Medial + Final (Batchim) blocks into composed Unicode Hangul with live audio playback.
- ✍️ **Interactive Vector Stroke Canvas**: Trace consonants & vowels with standard stroke-order direction vectors and real-time canvas clearing/guide controls.
- 🗣️ **Anatomical Vocal Tract Guide**: Visualizing tongue positions, airflow paths, & mouth gestures for velar, alveolar, bilabial, and sibilant sounds.
- ⌨️ **Hangul Speed Typist Game**: Practice typing with 2-Set Dubeolsik keyboard layout, automated composition engine, scoring, & high score tracking.
- 🎙️ **AI Pronunciation Evaluator**: Real-time Web Speech recognition evaluation and confidence scoring.
- 💖 **K-Pop & K-Drama Vocabulary Explorer**: Curated romantic sentences and high-frequency K-Culture expressions with dynamic syllable block breakdowns.
- 🎧 **Hands-Free Audio Commuter Mode**: Auto-advancing audio listening drills with 30+ items, speed control, Shuffle 🔀 queue, and Audio Blind Test mode.
- 🎓 **SuperMemo SM-2 SRS Flashcards**: Adaptive spaced repetition scheduling (`Again`, `Hard`, `Good`, `Easy`) saved to `localStorage`.
- 📲 **Progressive Web App (PWA)**: Full offline capability with Service Worker caching, manifest metadata, and iOS standalone app support.
- 🧪 **Comprehensive Automated Test Suite**: 43 unit tests covering Hangul composition, Dubeolsik mapping, SM-2 SRS engine, and QA data integrity.

### 🛠️ Tech Stack
- **Framework**: Next.js 15 (App Router, Static Export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Testing**: Automated Node runner test suite (`npm test`)

### 🚀 Getting Started

1. **Clone & Install Dependencies**:
   ```bash
   git clone https://github.com/keatkean/hangul-lab.git
   cd hangul-lab
   npm install
   ```

2. **Run Automated Test Suite**:
   ```bash
   npm test
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

4. **Production Build & Static Export**:
   ```bash
   npm run build
   ```

---

## 🇨🇳 简体中文

基于 Next.js 15 App Router、TypeScript 与 Tailwind CSS 构建的现代响应式韩语四十音发音跟读与全套互动学习平台（涵盖 19 辅音 × 21 元音 = 399 音节组合）。完美支持 **Android (Chrome/Edge)** 与 **iOS (Safari)** 移动端体验。

🌐 **在线体验**：[https://keatkean.github.io/hangul-lab/](https://keatkean.github.io/hangul-lab/)

### ✨ 核心功能
- 🛠️ **分类学习工具抽屉 (Mobile Drawer)**：移动端一键直达全部 10 款学习工具（涵盖拼音、笔顺、口型、打字、听力与卡片）。
- 🧩 **拼音组合沙盒**：自由选择 初声(辅音) + 中声(元音) + 终声(收音) 实时合成 Unicode 拼音并听取发音。
- ✍️ **笔顺描红与手写画布**：完整矢量笔顺路径与标准书写顺序指南，支持触屏描红与清除。
- 🗣️ **声道剖面与口型图解**：直观展示软腭音、齿龈音、双唇音与齿音的舌位与气流方向。
- ⌨️ **韩语键盘速打游戏**：内置 두벌식 (2-Set Dubeolsik) 虚拟键盘与实时间拼字引擎，支持得分与最高分记录。
- 🎙️ **AI 麦克风发音评估**：基于 Web Speech API 实时识别韩语朗读，计算发音匹配度与评分。
- 💖 **K-Pop & 影视词典**：精选韩剧浪漫金句与日常高频词汇，支持按字拆解与拼音音节学习。
- 🎧 **随身听跟读模式 (Commuter Mode)**：自动循环播放 30+ 词汇，支持 🔀 随机打乱与盲听跟读测试。
- 🎓 **SuperMemo SM-2 SRS 记忆卡片**：基于间隔重复算法，按 `重来`、`困难`、`良好`、`简单` 智能调度复习计划。
- 📲 **PWA 离线应用 support**：支持一键添加到手机桌面，内建 Service Worker 离线缓存与 iOS 全屏独立应用模式。
- 🧪 **自动化测试套件**：43+ 单元测试覆盖拼音合成、键盘映射、SRS 调度算法与数据校验。

### 🚀 快速开始

1. **克隆与安装依赖**：
   ```bash
   git clone https://github.com/keatkean/hangul-lab.git
   cd hangul-lab
   npm install
   ```
2. **运行单元测试**：
   ```bash
   npm test
   ```
3. **启动开发服务器**：
   ```bash
   npm run dev
   ```
4. **打包构建**：
   ```bash
   npm run build
   ```

---

## 🇹🇼 繁體中文

基於 Next.js 15 App Router、TypeScript 與 Tailwind CSS 建構的現代響應式韓語四十音發音跟讀與全套互動學習平台（涵蓋 19 輔音 × 21 母音 = 399 音節組合）。完美支援 **Android (Chrome/Edge)** 與 **iOS (Safari)** 行動端體驗。

🌐 **線上體驗**：[https://keatkean.github.io/hangul-lab/](https://keatkean.github.io/hangul-lab/)

### ✨ 核心功能
- 🛠️ **分類學習工具抽屜 (Mobile Drawer)**：行動端一鍵直達全部 10 款學習工具（涵蓋拼音、筆順、口型、打字、聽力與卡片）。
- 🧩 **拼音組合沙盒**：自由選擇 初聲(輔音) + 中聲(母音) + 終聲(收音) 實時合成 Unicode 拼音並聽取發音。
- ✍️ **筆順描紅與手寫畫布**：完整向量筆順路徑與標準書寫順序指南，支援觸控描紅與清除。
- 🗣️ **聲道剖面與口型圖解**：直觀展示軟顎音、齒齦音、雙唇音與齒音的舌位與氣流方向。
- ⌨️ **韓語鍵盤速打遊戲**：內置 두벌식 (2-Set Dubeolsik) 虛擬鍵盤與實時間拼字引擎，支援得分與最高分記錄。
- 🎙️ **AI 麥克風發音評估**：基於 Web Speech API 實時識別韓語朗讀，計算發音匹配度與評分。
- 💖 **K-Pop & 影視詞典**：精選韓劇浪漫金句與日常高頻詞彙，支援按字拆解與拼音音節學習。
- 🎧 **隨身聽跟讀模式 (Commuter Mode)**：自動循環播放 30+ 詞彙，支援 🔀 隨機打亂與盲聽跟讀測試。
- 🎓 **SuperMemo SM-2 SRS 記憶卡片**：基於間隔重複演算法，按 `重來`、`困難`、`良好`、`簡單` 智能調度複習計劃。
- 📲 **PWA 離線應用 support**：支援一鍵添加到手機桌面，內建 Service Worker 離線快取與 iOS 全螢幕獨立應用模式。
- 🧪 **自動化測試套件**：43+ 單元測試覆蓋拼音合成、鍵盤映射、SRS 調度演算法與資料校驗。

---

## 📜 License / 许可证

Distributed under the [MIT License](LICENSE).
