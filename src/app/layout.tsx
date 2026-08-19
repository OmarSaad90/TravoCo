import type { Metadata } from "next";
import { Hanken_Grotesk, IBM_Plex_Mono, Montserrat, Newsreader } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const SITE_URL = "https://travo.co";

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

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "TRAVO · Risk Assessment · Decision Analysis · Value Optimization",
  description:
    "Independent construction risk assessment and decision analysis before capital is committed, funded, reserved or defended.",
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
      className={`${hankenGrotesk.variable} ${ibmPlexMono.variable} ${newsreader.variable} ${montserrat.variable}`}
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
