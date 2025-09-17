import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "YouTube to MP3 - Free YouTube to MP3 Converter",
  description: "Free YouTube to MP3 Converter - Convert YouTube videos to MP3 online. Fast, safe, and high-quality YouTube to MP3 conversion. No registration required.",
  authors: [{ name: "YouTube to MP3" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.youtubetomp3.art",
  },
  openGraph: {
    title: "YouTube to MP3 - Free YouTube to MP3 Converter",
    description: "Free YouTube to MP3 Converter - Convert YouTube videos to MP3 online instantly",
    url: "https://www.youtubetomp3.art",
    siteName: "YouTube to MP3",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube to MP3 - Free YouTube to MP3 Converter",
    description: "Free YouTube to MP3 Converter - Convert YouTube videos to MP3 online instantly",
  },
  manifest: "/manifest.json",
  other: {
    "google-site-verification": "your-google-verification-code",
  },
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
