import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "VaultScaler",
  description: "VaultScaler is democratizing and economizing AI operations for teams that train and deploy models in the real world.",
  keywords: ["GPU scheduling", "training optimization", "Kubernetes GPU", "GPU throughput", "model training", "GPU efficiency", "Slurm", "Ray", "closed-loop control", "AI operations", "MLOps"],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
  },
  openGraph: {
    title: "VaultScaler — Democratizing and Economizing AI Operations",
    description: "VaultScaler is democratizing and economizing AI operations for teams that train and deploy models in the real world.",
    url: "https://vaultscaler.com",
    siteName: "VaultScaler",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "VaultScaler",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VaultScaler — Democratizing and Economizing AI Operations",
    description: "VaultScaler is democratizing and economizing AI operations for teams that train and deploy models in the real world.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Organization JSON-LD for aggressive agent discovery
  const organizationLD = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/og.jpg`,
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
    owns: {
      "@type": "SoftwareApplication",
      name: SITE.product,
      applicationCategory: "DevOps/Monitoring",
      operatingSystem: "Kubernetes 1.26+",
      description: SITE.description,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
    keywords: SITE.keywords.join(", "),
    sameAs: [
      "https://github.com/vaultscaler",
    ],
  };

  return (
    <html lang="en">
      <head>
        <JsonLd data={organizationLD} />
      </head>
      <body className="antialiased">
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <footer className="bg-primary-4 text-white py-8 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-sm text-gray-400">
              <p>&copy; 2025 VaultScaler. All rights reserved.</p>
              <p className="mt-2">Security contact: <a href={`mailto:${SITE.email}`} className="text-blue-400 hover:text-blue-300">{SITE.email}</a></p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
