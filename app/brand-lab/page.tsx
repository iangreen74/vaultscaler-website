// Route: /brand-lab (noindex, brand exploration)
import type { Metadata } from "next";
import LevBrand from "./LevBrand";

export const metadata: Metadata = {
  title: "Brand Lab — Lev",
  robots: { index: false, follow: false },
};

export default function BrandLabPage() {
  return <LevBrand />;
}
