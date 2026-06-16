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
  title: "VaultScaler | Local-first AI for biological discovery.",
  description: "VaultScaler builds evidence-grade systems for observing living systems with cameras, edge compute, and uncertainty-aware interpretation. Studio Habitat Labs is our live public proof.",
  keywords: SITE.keywords,
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "VaultScaler | Local-first AI for biological discovery.",
    description: "Evidence-grade systems for observing living systems with cameras, edge compute, and uncertainty-aware interpretation. Studio Habitat Labs is our live public proof.",
    url: "https://vaultscaler.com",
    siteName: "VaultScaler",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "VaultScaler — local-first AI for biological discovery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VaultScaler | Local-first AI for biological discovery.",
    description: "Evidence-grade systems for observing living systems with cameras, edge compute, and uncertainty-aware interpretation. Studio Habitat Labs is our live public proof.",
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
    owns: [
      {
        "@type": "SoftwareApplication",
        name: "Studio Habitat Labs",
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "AI-assisted phenotyping lab",
        operatingSystem: "Local-first (camera + edge compute)",
        description: "Studio Habitat Labs is VaultScaler's live public proof: an AI-assisted phenotyping lab that measures surface coverage, image quality, anomaly surprise, and evidence validity from local observations. Every reading carries its own uncertainty, separating biological change from measurement artifact. Available now.",
        featureList: [
          "Live AI-assisted phenotyping lab",
          "Local-first observation with camera and edge compute",
          "Evidence packets generated from local observations",
          "Uncertainty-aware measurement",
          "Separates biological change from measurement artifact",
          "No overclaiming — observation treated as evidence",
        ],
      },
      {
        "@type": "SoftwareApplication",
        name: "Studio Habitat Phenotyping Console",
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "Evidence-grade phenotyping software",
        operatingSystem: "Local-first",
        description: "The Studio Habitat Phenotyping Console is the software layer for the lab — surface coverage, image quality, anomaly surprise, and evidence validity computed from local observations, with measurement confidence carried alongside every reading. Coming soon.",
      },
      {
        "@type": "SoftwareApplication",
        name: "Studio Habitat Radio",
        applicationCategory: "MultimediaApplication",
        applicationSubCategory: "Creative stream layer",
        operatingSystem: "Web",
        description: "Studio Habitat Radio is the creative stream layer — an always-on, public, ambient window into the lab as it observes living systems in real time. Available now.",
      },
    ],
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
