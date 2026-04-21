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
  title: "VaultScaler | Build More. Manage Less.",
  description: "Lev is an agentic engineering system by VaultScaler. AI engineering that actually delivers. Build quicker and launch with confidence.",
  keywords: ["agentic engineering", "AI engineering team", "AI development tools", "AI coding platform", "automated software delivery", "golden spec", "AI SRE", "full SDLC automation"],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "VaultScaler | Build More. Manage Less.",
    description: "Lev by VaultScaler. Agentic engineering that actually delivers.",
    url: "https://vaultscaler.com",
    siteName: "VaultScaler",
    images: [
      {
        url: "/og/vaultscaler.png",
        width: 1200,
        height: 630,
        alt: "VaultScaler | Build More. Manage Less.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VaultScaler | Build More. Manage Less.",
    description: "Lev by VaultScaler. Agentic engineering that actually delivers.",
    images: ["/og/vaultscaler.png"],
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
    logo: `${SITE.url}/og/vaultscaler.png`,
    description: SITE.description,
    email: SITE.email,
    foundingDate: "2024",
    founder: [
      {
        "@type": "Person",
        name: "Ian Green",
        jobTitle: "Co-Founder & CEO",
        description: "AI platform engineer specializing in Kubernetes and Terraform-driven GPU workload management",
      },
      {
        "@type": "Person",
        name: "Ben Pruess",
        jobTitle: "Co-Founder, COO & President",
        description: "Enterprise solutions leader with 20 years in healthcare tech",
      },
    ],
    owns: [
      {
        "@type": "SoftwareApplication",
        name: "Lev",
        applicationCategory: "AI Engineering",
        description: "Full lifecycle agentic engineering and support. AI engineering that actually delivers. Build quicker, launch with confidence, and let Lev handle upkeep.",
        featureList: [
          "AI engineering",
          "Development acceleration",
          "24/7 support agent",
        ],
      },
    ],
    keywords: SITE.keywords.join(", "),
    sameAs: [
      "https://github.com/iangreen74",
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
        <main id="main-content" className="pt-16">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
