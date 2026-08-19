import type { Metadata, Viewport } from "next";
import { Outfit, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "William Volodarsky | Agentic AI Engineer & Systems Orchestrator",
  description:
    "Personal Digital Flagship & Engineering Showcase of William Volodarsky. Creator of Nexus, a production multi-agent LangGraph OS with Deterministic Pre-flight Hydration, HITL governance, and 12 deployed automation tools.",
  keywords: [
    "William Volodarsky",
    "Agentic AI Engineer",
    "LangGraph",
    "Multi-Agent Systems",
    "Deterministic Pre-flight Hydration",
    "Next.js",
    "Python",
    "HITL AI",
    "AI Systems Architect",
  ],
  authors: [{ name: "William Volodarsky", url: "https://williamvolodarsky.com" }],
  creator: "William Volodarsky",
  metadataBase: new URL("https://williamvolodarsky.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://williamvolodarsky.com",
    title: "William Volodarsky | Agentic AI Engineer & Systems Orchestrator",
    description:
      "Creator of Nexus (Multi-Agent LangGraph OS), AI Training Fellow, and BS CS Magna Cum Laude @ Fordham. Explore live agent architectures, eval pipelines, and systems case studies.",
    siteName: "William Volodarsky Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "William Volodarsky | Agentic AI Engineer",
    description:
      "Creator of Nexus (Multi-Agent LangGraph OS), AI Training Fellow, and Systems Orchestrator.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#080a0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#080a0f] text-slate-100 antialiased selection:bg-indigo-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
