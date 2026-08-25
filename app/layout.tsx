import type { Metadata } from "next";
import Script from "next/script";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import SiteFooter from "@/components/SiteFooter";
import JsonLd from "@/components/JsonLd";
import AnalyticsProvider from "@/components/AnalyticsProvider";
import { SITE } from "@/lib/site";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const TITLE = "VaultScaler — private, on-premise computer-vision security";
const DESC =
  "VaultScaler builds private, on-premise computer-vision security — proven first on a working artist's own collection, and built for private collectors, galleries, museums, and other discreet, privacy-sensitive spaces. It watches the whole space, and the owner decides what it remembers — recognise known people and flag unknowns, or obscure every face before anything is stored. Nothing it sees ever leaves the building, and nothing is ever attached to what it protects.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: TITLE, template: "%s" },
  description: DESC,
  keywords: SITE.keywords,
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: SITE.url,
    siteName: "VaultScaler",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: TITLE }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const UMAMI_WEBSITE_ID = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  const UMAMI_SRC = process.env.NEXT_PUBLIC_UMAMI_SRC;
  const UMAMI_HOST_URL = process.env.NEXT_PUBLIC_UMAMI_HOST_URL;
  const UMAMI_DOMAINS = process.env.NEXT_PUBLIC_UMAMI_DOMAINS;

  const organizationLD = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: `${SITE.url}/`,
    logo: `${SITE.url}/brand/vaultscaler-icon-v1.0/svg/vaultscaler-icon-primary.svg`,
    description: SITE.description,
    email: SITE.email,
    foundingDate: "2025",
    areaServed: "Worldwide",
    knowsAbout: [
      "edge computer vision",
      "on-premise security",
      "art security",
      "artwork removal detection",
      "gallery and museum security",
      "private collection and residence security",
      "discreet security consultancy",
    ],
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Private, on-premise computer-vision security",
        serviceType: "On-premise security design for private collectors, galleries, museums, and other discreet, privacy-sensitive spaces",
        description:
          "Bespoke computer-vision security, proven first on a working artist's own collection. VaultScaler designs, specifies, and configures the system; the intelligence runs on hardware the customer owns, in their building — nothing it sees leaves the building, and nothing is attached to what it protects. It watches the whole space, including the people in it; the owner decides whether to recognise known people and flag unknowns, or obscure every face before anything is stored. The system also distinguishes someone pausing to look from something being taken, so it does not cry wolf. Installation is carried out by a licensed contractor.",
        provider: { "@type": "Organization", name: SITE.name },
        areaServed: "Worldwide",
      },
    },
  };

  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <head>
        <JsonLd data={organizationLD} />
      </head>
      <body className="antialiased bg-ink text-bone">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-bone focus:text-ink focus:rounded focus:outline-none"
        >
          Skip to main content
        </a>
        {UMAMI_WEBSITE_ID && UMAMI_SRC ? (
          <Script
            defer
            src={UMAMI_SRC}
            data-website-id={UMAMI_WEBSITE_ID}
            data-do-not-track="true"
            data-exclude-search="true"
            data-exclude-hash="true"
            {...(UMAMI_HOST_URL ? { "data-host-url": UMAMI_HOST_URL } : {})}
            {...(UMAMI_DOMAINS ? { "data-domains": UMAMI_DOMAINS } : {})}
          />
        ) : null}
        <Navigation />
        <AnalyticsProvider />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
