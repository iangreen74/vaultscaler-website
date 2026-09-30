// Route: /how-it-works/ — retired consultancy page (noindex). See components/Retired.tsx.
import type { Metadata } from "next";
import Retired, { retiredMetadata } from "@/components/Retired";

export const metadata: Metadata = retiredMetadata("/how-it-works/");
export default function Page() { return <Retired />; }
