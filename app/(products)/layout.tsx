// Shared layout for the roadmap product landing pages (Radix Core, Redoubt,
// Warden). It only loads the DM type family so these pages can match
// Forgewing's typographic design language — the global Navigation + SiteFooter
// still compose from the root layout, so these pages keep the family nav.
import { DM_Sans, DM_Serif_Display } from "next/font/google";

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

export default function ProductsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`${dmSans.variable} ${dmSerif.variable} bg-white text-[#1E3340]`}
      style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}
    >
      {children}
    </div>
  );
}
