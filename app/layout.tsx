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
  title: "VaultScaler | Put AI to work on data you can't let leave.",
  description: "VaultScaler builds AI agents that run entirely inside your own cloud — ask questions of, and act on, your most sensitive data without it ever leaving your control. Every agent ships with an Agent Passport.",
  keywords: SITE.keywords,
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "VaultScaler | Put AI to work on data you can't let leave.",
    description: "AI agents that run entirely inside your own cloud. Your most sensitive data never leaves your control. Every agent ships with an Agent Passport.",
    url: "https://vaultscaler.com",
    siteName: "VaultScaler",
    images: [
      {
        url: "/forgewing/opengraph-image",
        width: 1200,
        height: 630,
        alt: "VaultScaler — AI agents that run inside your own cloud",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VaultScaler | Put AI to work on data you can't let leave.",
    description: "AI agents that run entirely inside your own cloud. Your most sensitive data never leaves your control. Every agent ships with an Agent Passport.",
    images: ["/forgewing/opengraph-image"],
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
        name: "Forgewing",
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "Sovereign Research Assistant",
        operatingSystem: "Cloud (customer-owned AWS)",
        description: "Forgewing is a sovereign research assistant that answers questions over your own documents with grounded, cited answers and generates reports written to your own storage. It runs entirely inside your own AWS account, so your data never leaves your control. Available now.",
        featureList: [
          "Grounded, cited answers over your own documents",
          "Refuses to answer off-corpus questions rather than fabricating",
          "Report generation written to your own storage",
          "Deploys entirely into your own AWS account",
          "No credentials retained after setup",
          "Ships with an Agent Passport that declares and enforces its authority",
        ],
      },
      {
        "@type": "SoftwareApplication",
        name: "Radix Core",
        applicationCategory: "DeveloperApplication",
        applicationSubCategory: "GPU Orchestration",
        operatingSystem: "Cloud",
        description: "Radix Core is a GPU orchestration agent that helps you schedule, scale, and govern AI workloads on the GPU fleet you already own, with no stack changes required. Roadmap product, not yet available.",
      },
      {
        "@type": "SoftwareApplication",
        name: "Redoubt",
        applicationCategory: "SecurityApplication",
        applicationSubCategory: "Intrusion Containment",
        operatingSystem: "Cloud",
        description: "Redoubt is a governed agent intended to contain a breach inside your own environment by isolating a compromised instance, with every action audited. Roadmap product, not yet available.",
      },
      {
        "@type": "SoftwareApplication",
        name: "Warden",
        applicationCategory: "SecurityApplication",
        applicationSubCategory: "DevSecOps",
        operatingSystem: "Cloud",
        description: "Warden is a governed agent intended to run in your CI/CD and enforce your security policy as code ships, before it reaches production. Roadmap product, not yet available.",
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
