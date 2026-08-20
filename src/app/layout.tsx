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
  title: "William Volodarsky | Forward Deployed AI & Systems Engineer",
  description:
    "Personal Digital Flagship & Engineering Showcase of William Volodarsky. Forward Deployed AI Engineer specializing in Compound AI Systems, Business Operations Automation, and Domain Ontologies. Creator of Nexus.",
  keywords: [
    "William Volodarsky",
    "Forward Deployed AI Engineer",
    "Compound AI Systems",
    "Domain Ontology Engineering",
    "Business Operations Automation",
    "LangGraph",
    "Multi-Agent Systems",
    "Deterministic Pre-flight Hydration",
    "LLMOps",
    "Next.js 16",
    "Python",
    "HITL AI",
  ],
  authors: [{ name: "William Volodarsky", url: "https://williamvolodarsky.com" }],
  creator: "William Volodarsky",
  metadataBase: new URL("https://williamvolodarsky.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://williamvolodarsky.com",
    title: "William Volodarsky | Forward Deployed AI & Systems Engineer",
    description:
      "Creator of Nexus (Compound Agentic Personal OS), AI Training Fellow, and BS CS Magna Cum Laude @ Fordham. Explore live agent architectures, eval pipelines, and systems case studies.",
    siteName: "William Volodarsky Flagship",
  },
  twitter: {
    card: "summary_large_image",
    title: "William Volodarsky | Forward Deployed AI Engineer",
    description:
      "Creator of Nexus (Compound Agentic Personal OS), AI Training Fellow, and Systems Architect.",
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
