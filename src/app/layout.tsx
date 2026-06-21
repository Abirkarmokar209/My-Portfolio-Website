import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { personalInfo } from "@/data/portfolioData";

/**
 * /* CHANGE_HERE: Swap font families here and in tailwind.config.js to match your brand.
 * These load from Google Fonts at build time — zero runtime cost.
 */
const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

/* CHANGE_HERE: Update metadata with your real name, description, and domain */
export const metadata: Metadata = {
  title: {
    default: `${personalInfo.name} — ${personalInfo.title}`,
    template: `%s | ${personalInfo.name}`,
  },
  description: personalInfo.summary,
  metadataBase: new URL(
    /* CHANGE_HERE: Replace with your production domain */
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://yourportfolio.com"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    title: personalInfo.name,
    description: personalInfo.summary,
    /* CHANGE_HERE: Add /public/og-image.png for social sharing preview */
    // images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    /* CHANGE_HERE: Replace with your Twitter handle */
    creator: "@yourhandle",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}
          font-body bg-surface-800 text-slate-100 antialiased selection:bg-brand-500/30`}
      >
        {/* Ambient background grid */}
        <div className="fixed inset-0 bg-grid-pattern opacity-100 pointer-events-none z-0" />
        {/* Radial hero glow — subtle depth layer */}
        <div className="fixed inset-0 bg-hero-gradient pointer-events-none z-0" />

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
