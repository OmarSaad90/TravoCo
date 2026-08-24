import type { Metadata } from "next";
import { Hanken_Grotesk, IBM_Plex_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

import { SITE_URL } from "@/lib/site";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-hanken-grotesk",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  // next/font ships only the `wght` axis by default, which pins Newsreader's
  // optical size instead of letting it track the font size. The client's site
  // loads the full range (`Newsreader:ital,opsz,wght@0,6..72,...`), so its
  // display-size headings render with wider, taller letterforms than ours did
  // — which also shifted `ch`-based measurements like the hero's max-width:14ch
  // and changed where the headline wrapped. Requesting `opsz` matches it.
  axes: ["opsz"],
  variable: "--font-newsreader",
  display: "swap",
});

// Montserrat is deliberately NOT loaded. The reference document's `--gotham`
// stack is "Gotham", "Gotham SSm", "Montserrat", "Hanken Grotesk", … and its
// <link> requests only Hanken Grotesk, IBM Plex Mono and Newsreader — so on the
// client's page every .travo-word falls through to Hanken Grotesk. next/font
// registers Google families under their real name, so importing Montserrat here
// would make that stack match it instead, rendering every "TRAVO" wider and (at
// the single 700 weight we would ship) heavier than the client's.

const SITE_NAME = "TRAVO";
// Kept in /public and referenced explicitly rather than using Next's
// opengraph-image file convention, which only attached the card to "/" and not
// to the nested routes.
const OG_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "TRAVO — Total Risk Analysis and Value Optimization",
};
const SITE_DESCRIPTION =
  "Independent construction risk assessment and decision analysis before capital is committed, funded, reserved or defended.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "TRAVO · Risk Assessment · Decision Analysis · Value Optimization",
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Dr. Karim S. Karam" }],
  creator: "Dr. Karim S. Karam",
  publisher: SITE_NAME,
  // Explicit rather than implied, and it lets rich results show a full-size
  // image and an untruncated snippet instead of Google's conservative default.
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Site-wide defaults. Each route overrides title/description/url and repeats
  // the shared card, because a route's own openGraph object replaces this one
  // rather than merging into it.
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    url: SITE_URL,
    images: [OG_IMAGE],
    title: "TRAVO · Risk Assessment · Decision Analysis · Value Optimization",
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "TRAVO · Risk Assessment · Decision Analysis · Value Optimization",
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "TRAVO",
  alternateName: "TRAVO — Total Risk Analysis and Value Optimization",
  description:
    "Independent construction risk assessment and decision analysis before capital is committed, funded, reserved or defended.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/logo.png`,
  email: "principal@travo-advisory.com",
  areaServed: [
    { "@type": "State", name: "New Jersey" },
    { "@type": "State", name: "New York" },
  ],
  founder: {
    "@type": "Person",
    name: "Dr. Karim S. Karam",
    jobTitle: "Principal",
  },
  slogan: "Quantified Risk. Disciplined Decisions.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${hankenGrotesk.variable} ${ibmPlexMono.variable} ${newsreader.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <SmoothScroll />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
