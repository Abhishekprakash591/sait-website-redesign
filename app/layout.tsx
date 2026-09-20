import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/layout/LoadingScreen";
import ScrollEnhancements from "@/components/layout/ScrollEnhancements";
import CursorSpotlight from "@/components/interactive/CursorSpotlight";
import MinimalDock from "@/components/interactive/MinimalDock";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SAIT — Students Association of Information Technology | SOE CUSAT",
  description:
    "SAIT is the premier student association under the Division of Information Technology, School of Engineering, CUSAT. Track activities, explore events, connect with 1200+ alumni, and celebrate achievements.",
  keywords: [
    "SAIT",
    "CUSAT",
    "Students Association of Information Technology",
    "SOE CUSAT",
    "IT department",
    "student community",
    "hackathon",
    "placements",
  ],
  authors: [{ name: "SAIT — Division of IT, SOE CUSAT" }],
  robots: "index, follow",
  openGraph: {
    title: "SAIT — Students Association of Information Technology",
    description:
      "Premier student association at Division of IT, School of Engineering, CUSAT.",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080C14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-[#080C14] text-[#F8FAFC] antialiased selection:bg-[#F59E0B]/30 selection:text-white">
        <LoadingScreen />
        <CursorSpotlight />
        <ScrollEnhancements />
        {children}
        <MinimalDock />
      </body>
    </html>
  );
}