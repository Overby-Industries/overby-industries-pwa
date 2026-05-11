import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Instrument_Serif, Syne, DM_Mono } from "next/font/google";
import NavBar from "@/app/components/NavBar";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const syne = Syne({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Overby Industries — Sustainable Industrial Future in Space",
  description:
    "Committed to gathering and refining space resources ethically, sustainably, and with zero waste.",
  themeColor: "#f5f2eb",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${syne.variable} ${dmMono.variable}`}
    >
      <body>
        <NavBar />
        {children}
      </body>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
