import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ConvertKids - YouTube to MP3 Converter",
  description: "The fastest and safest YouTube to MP3 converter online. Free to use, no registration required, high-quality audio conversion.",
  keywords: "YouTube, MP3, converter, online tool, audio download, video to audio",
  authors: [{ name: "ConvertKids Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "ConvertKids - YouTube to MP3 Converter",
    description: "The fastest and safest YouTube to MP3 converter online",
    type: "website",
    locale: "en_US",
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
