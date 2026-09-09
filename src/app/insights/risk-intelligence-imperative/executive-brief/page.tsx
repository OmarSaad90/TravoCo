import type { Metadata } from "next";
import Link from "next/link";

import ExecutiveBrief from "@/components/ExecutiveBrief";
import { ARTICLE_PATH } from "@/lib/executive-brief";
import PrintButton from "./PrintButton";
import "@/components/executive-brief.css";
import "./brief.css";

const TITLE = "Executive Brief — The Risk Intelligence Imperative — TRAVO";
const DESCRIPTION =
  "One-page executive brief: construction and engineering risk intelligence, 2026–2031. Independent, principal-led analysis from TRAVO.";

const OG_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "TRAVO — Total Risk Analysis and Value Optimization",
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: "Dr. Karim S. Karam" }],
  /**
   * The sheet is a condensed rendering of the article's argument, so it points
   * its canonical at the article rather than competing with it. It is also kept
   * out of sitemap.ts for the same reason.
   */
  alternates: { canonical: ARTICLE_PATH },
  openGraph: {
    type: "article",
    siteName: "TRAVO",
    locale: "en_US",
    url: ARTICLE_PATH,
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function ExecutiveBriefPage() {
  return (
    <div className="brief-page">
      <div className="eb-print-hint">
        <span>One-page executive brief · save or print</span>
        <PrintButton />
        <Link href={ARTICLE_PATH}>Read the full outlook</Link>
      </div>

      <div className="eb eb-sheet">
        <ExecutiveBrief headingLevel="h1" showFoot />
      </div>
    </div>
  );
}
