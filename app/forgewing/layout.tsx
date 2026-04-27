import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import aniMascot from "./Forgewing-Ani-Mascot-Transparent.png";

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
  title: "Forgewing",
  description: "Full-lifecycle agentic engineering system built for people with the vision.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

export default function ForgewingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`${dmSans.variable} ${dmSerif.variable} -mt-16 min-h-screen flex flex-col bg-white text-[#1E3340]`}
      style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}
    >
      <header className="border-b border-[#E0DCD6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center">
          <Link href="/forgewing/" className="flex items-center gap-3">
            <Image
              src={aniMascot}
              alt="Forgewing"
              width={44}
              height={44}
              priority
              className="h-11 w-auto"
            />
            <span
              className="text-2xl leading-none text-[#E8732A]"
              style={{ fontFamily: "var(--font-dm-serif), serif" }}
            >
              Forgewing
            </span>
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
            <span className="uppercase tracking-[0.2em]">by VaultScaler</span>
          </div>
          <span>&copy; 2026 VaultScaler</span>
        </div>
      </footer>
    </div>
  );
}
