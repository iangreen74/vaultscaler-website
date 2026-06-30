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
  title: {
    default: "VaultScaler — an edge computer-vision company",
    template: "%s",
  },
  description: "VaultScaler builds edge computer-vision instruments that measure the physical world honestly — and run entirely on hardware you own. The camera does the seeing; we make the measurement trustworthy. Nothing goes to the cloud.",
  keywords: SITE.keywords,
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "VaultScaler — an edge computer-vision company",
    description: "VaultScaler builds edge computer-vision instruments that measure the physical world honestly — and run entirely on hardware you own. The camera does the seeing; we make the measurement trustworthy. Nothing goes to the cloud.",
    url: "https://vaultscaler.com",
    siteName: "VaultScaler",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "VaultScaler — an edge computer-vision company",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VaultScaler — an edge computer-vision company",
    description: "VaultScaler builds edge computer-vision instruments that measure the physical world honestly — and run on hardware you own. The camera does the seeing; we make the measurement trustworthy.",
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
        description: "Vivaliux is VaultScaler's edge computer-vision instrument for living and controlled systems. It measures with a camera and on-device vision, remembers every reading in an immutable local record, and reports what changed and how sure it is — separating real change from imaging artifact. It runs on hardware you own; nothing leaves your machine unless you choose. Prediction is earned from the local record over time, never claimed before the evidence supports it.",
        featureList: [
          "Edge computer-vision measurement with camera and on-device compute",
          "Immutable, append-only local record of every reading",
          "Uncertainty-aware measurement (confidence on every reading)",
          "Separates real change from imaging artifact",
          "Runs on hardware you own — no data leaves your site unless you choose",
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
