import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
  title: "韩语四十音发音跟读表 | Korean 40-Sound Pronunciation Chart",
  description: "交互式韩语四十音发音跟读表，支持 19 辅音与 21 元音标准发音播放、卡片跟读模式与听力测验。",
  keywords: ["韩语四十音", "韩语发音表", "Korean Hangul", "Korean Pronunciation", "Hangul chart", "韩语学习"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${notoSansKr.variable} antialiased`}>
      <body className="min-h-screen bg-slate-50 dark:bg-gray-950 text-slate-900 dark:text-slate-100 flex flex-col justify-between">
        {children}
      </body>
    </html>
  );
}
