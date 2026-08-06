import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
  title: "韩语四十音发音跟读表 | Korean 40-Sound Pronunciation Chart - HangulLab",
  description: "交互式韩语四十音发音跟读表，支持 19 辅音与 21 元音标准发音播放、卡片跟读模式与听力测验。",
  keywords: ["韩语四十音", "韩语发音表", "Korean Hangul", "Korean Pronunciation", "Hangul chart", "韩语学习", "HangulLab"],
  manifest: "./manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "HangulLab",
  },
  icons: {
    icon: "./icon-192.png",
    apple: "./icon-192.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#4f46e5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('./sw.js').then(function(reg) {
                    console.log('PWA ServiceWorker registered:', reg.scope);
                  }).catch(function(err) {
                    console.log('PWA ServiceWorker failed:', err);
                  });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
