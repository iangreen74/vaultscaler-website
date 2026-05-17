import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import aniMascot from "./Forgewing-Ani-Mascot-Transparent.png";
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
  title: "Forgewing | Product Delivery Engine by VaultScaler",
  description:
    "Forgewing is the Product Delivery Engine. Point it at your repo or hand it a brief — production-ready code, deploys to your AWS, and operations come back. Launching June 2026.",
  keywords: [
    "product delivery engine",
    "agentic engineering",
    "AI engineering team",
    "AI software delivery",
    "brief to production",
    "AWS-deployed AI agent",
    "agentic SDLC",
    "product and engineering pod",
    "AI pull requests",
    "AI SRE",
    "full SDLC automation",
    "automated code review",
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
    title: "Forgewing | Product Delivery Engine by VaultScaler",
    description:
      "Point Forgewing at your repo or hand it a brief. Real pull requests come back. Production deploys to your AWS. Operations included.",
    type: "website",
    url: `${SITE.url}/forgewing/`,
    siteName: "VaultScaler",
    locale: "en_US",
    images: [
      {
        url: "/og/forgewing.png",
        width: 1200,
        height: 630,
        alt: "Forgewing — Product Delivery Engine by VaultScaler",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forgewing | Product Delivery Engine by VaultScaler",
    description:
      "Point Forgewing at your repo or hand it a brief. Real pull requests come back. Production deploys to your AWS. Operations included.",
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
      <header className="sticky top-0 z-40 border-b border-[#E0DCD6] bg-white/85 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-4">
          <div className="flex items-baseline gap-2.5 min-w-0">
            <Link
              href="/forgewing/"
              aria-label="Forgewing home"
              className="flex items-baseline gap-2.5"
            >
              <Image
                src={aniMascot}
                alt=""
                width={36}
                height={36}
                priority
                className="h-7 sm:h-8 w-auto self-center"
              />
              <span
                className="text-xl sm:text-2xl leading-none text-[#E8732A]"
                style={{ fontFamily: "var(--font-dm-serif), serif" }}
              >
                Forgewing
              </span>
            </Link>
            <Link
              href="/"
              aria-label="VaultScaler home"
              className="hidden sm:inline text-xs text-[#5A7A8A] leading-none no-underline hover:no-underline"
            >
              by VaultScaler
            </Link>
          </div>
          <Link
            href="/waitlist/"
            className="inline-flex items-center rounded-full bg-[#E8732A] px-4 py-2 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-[#d0651e] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8732A] focus-visible:ring-offset-2 whitespace-nowrap"
          >
            Reserve a spot
          </Link>
        </div>
      </header>

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
