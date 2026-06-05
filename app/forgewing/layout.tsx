import type { Metadata } from "next";
import Link from "next/link";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import ForgewingHeader from "./ForgewingHeader";
import { SITE } from "@/lib/site";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
});

export const metadata: Metadata = {
  title: "Forgewing | Sovereign Research Assistant by VaultScaler",
  description:
    "Forgewing answers questions over your own documents with grounded, cited answers and generates reports to your own storage — all inside your own AWS account. Your data never leaves your control.",
  keywords: [
    "sovereign research assistant",
    "AI over private documents",
    "grounded cited answers",
    "retrieval augmented generation",
    "AI in your own cloud",
    "report generation",
    "Agent Passport",
    "governed AI agent",
    "data never leaves your control",
  ],
  alternates: {
    canonical: `${SITE.url}/forgewing/`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Forgewing | Sovereign Research Assistant by VaultScaler",
    description:
      "Ask and act on your own documents — inside your own cloud. Grounded, cited answers and reports written to your own storage.",
    type: "website",
    url: `${SITE.url}/forgewing/`,
    siteName: "VaultScaler",
    locale: "en_US",
    images: [
      {
        url: "/og/forgewing.png",
        width: 1200,
        height: 630,
        alt: "Forgewing — Sovereign Research Assistant by VaultScaler",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forgewing | Sovereign Research Assistant by VaultScaler",
    description:
      "Ask and act on your own documents — inside your own cloud. Grounded, cited answers and reports written to your own storage.",
    images: ["/og/forgewing.png"],
  },
};

export default function ForgewingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`${dmSans.variable} ${dmSerif.variable} min-h-screen flex flex-col bg-white text-[#1E3340]`}
      style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}
    >
      <ForgewingHeader />

      <main className="flex-1">{children}</main>

      <footer className="border-t border-[#E0DCD6] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-[#5A7A8A]">
          <div className="flex items-center gap-2">
            <span style={{ fontFamily: "var(--font-dm-serif), serif" }} className="text-sm text-[#1E3340]">
              Forgewing
            </span>
            <Link href="/" className="uppercase tracking-[0.2em] hover:text-[#1E3340] transition-colors">
              by VaultScaler
            </Link>
          </div>
          <span>&copy; 2026 VaultScaler</span>
        </div>
      </footer>
    </div>
  );
}
