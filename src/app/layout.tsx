import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "YouTube to MP3 - Free YouTube to MP3 converter",
  description: "Free YouTube to MP3 converter - Transform YouTube videos into high-quality MP3 files instantly. No registration, unlimited downloads, 320kbps audio quality.",
  authors: [{ name: "YouTube to MP3" }],
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  alternates: {
    canonical: "https://www.youtubetomp3.art",
  },
  openGraph: {
    title: "YouTube to MP3",
    description: "Convert YouTube videos to MP3 online instantly with our free, high-quality converter",
    url: "https://www.youtubetomp3.art",
    siteName: "YouTube to MP3",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.youtubetomp3.art/og.png",
        width: 1200,
        height: 630,
        alt: "YouTube to MP3 Converter - Free Online Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube to MP3",
    description: "Convert YouTube videos to MP3 online instantly with our free, high-quality converter",
    site: "@TheEthanYu",
    images: ["https://www.youtubetomp3.art/og.png"],
  },
  manifest: "/manifest.json",
  other: {
    "google-site-verification": "your-google-verification-code",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
