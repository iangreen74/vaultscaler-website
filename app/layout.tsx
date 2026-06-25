import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import SiteFooter from "@/components/SiteFooter";
import JsonLd from "@/components/JsonLd";
import AnalyticsProvider from "@/components/AnalyticsProvider";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Vivaliux by VaultScaler | Private, local AI that measures, remembers, and predicts living systems.",
  description: "Vivaliux is a private, local-first AI measurement app from VaultScaler for living and controlled systems — it measures with a camera and edge compute, remembers every reading, and tells you what changed and how sure it is. Free to start; a paid model that learns your plants; an on-site edge unit installed by us.",
  keywords: SITE.keywords,
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Vivaliux by VaultScaler | Private, local AI that measures, remembers, and predicts living systems.",
    description: "Vivaliux is a private, local-first AI measurement app from VaultScaler for living and controlled systems. Measure with a camera and edge compute, remember every reading, and see what changed — and how sure it is. Free to start, with paid and on-site tiers.",
    url: "https://vaultscaler.com",
    siteName: "VaultScaler",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Vivaliux by VaultScaler — private, local AI for measuring living systems",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivaliux by VaultScaler | Private, local AI that measures, remembers, and predicts living systems.",
    description: "Vivaliux is a private, local-first AI measurement app from VaultScaler. Measure, remember, and see what changed — and how sure it is. Free to start, with paid and on-site tiers.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const UMAMI_WEBSITE_ID = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  const UMAMI_SRC = process.env.NEXT_PUBLIC_UMAMI_SRC;
  const UMAMI_HOST_URL = process.env.NEXT_PUBLIC_UMAMI_HOST_URL;
  const UMAMI_DOMAINS = process.env.NEXT_PUBLIC_UMAMI_DOMAINS;

  // Organization JSON-LD for aggressive agent discovery
  const organizationLD = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: `${SITE.url}/`,
    logo: `${SITE.url}/brand/vaultscaler-icon-v1.0/svg/vaultscaler-icon-primary.svg`,
    description: SITE.description,
    email: SITE.email,
    foundingDate: "2025",
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "SoftwareApplication",
        name: "Vivaliux",
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "Local-first measurement desktop app",
        operatingSystem: "Local-first desktop (camera + edge compute)",
        description: "Vivaliux is VaultScaler's private, local-first AI measurement desktop app for living and controlled systems. It measures with a camera and on-device vision, remembers every reading in an immutable local record, and reports what changed and how sure it is — separating real change from imaging artifact. Prediction is earned from the local record over time, never claimed before the evidence supports it.",
        featureList: [
          "Local-first measurement with camera and edge compute",
          "Immutable, append-only local record of every reading",
          "Uncertainty-aware measurement (confidence on every reading)",
          "Separates real change from imaging artifact",
          "Private by design — no data leaves the room unless you choose",
          "No overclaiming — measurement language only",
        ],
      },
    },
  };

  return (
    <html lang="en">
      <head>
        <JsonLd data={organizationLD} />
      </head>
      <body className="antialiased">
        {/* Skip to main content link for keyboard accessibility (WCAG 2.4.1) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary-1 focus:text-white focus:rounded focus:outline-none focus:ring-2 focus:ring-white"
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
        <main id="main-content">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
