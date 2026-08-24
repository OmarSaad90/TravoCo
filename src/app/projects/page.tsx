import type { Metadata } from "next";
import PageEffects from "@/components/PageEffects";

const OG_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "TRAVO — Total Risk Analysis and Value Optimization",
};

export const metadata: Metadata = {
  title: "Projects — TRAVO",
  description:
    "Selected TRAVO engagements and principal project experience in construction risk assessment and decision analysis.",
  alternates: { canonical: "/projects" },
  openGraph: {
    type: "website",
    siteName: "TRAVO",
    locale: "en_US",
    url: "/projects",
    title: "Projects — TRAVO",
    description:
      "Selected TRAVO engagements and principal project experience in construction risk assessment and decision analysis.",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects — TRAVO",
    description:
      "Selected TRAVO engagements and principal project experience in construction risk assessment and decision analysis.",
    images: [OG_IMAGE],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <PageEffects />
      <div className="page" id="page-projects" role="region" aria-label="projects">
      <section className="section page-hero section-ink on-dark" aria-labelledby="projects-title" id="projects">
        <div className="wrap"><p className="kicker">Projects</p><h1 id="projects-title">Selected Project Experience</h1><p className="lede editorial"><em>Selected infrastructure and construction projects reflecting the principal’s operating, analytical and advisory experience. <span className="travo-word">TRAVO</span> engagements are identified separately where publication is permitted.</em></p></div>
      </section>
      <section className="section reveal" aria-labelledby="travo-engagements-title">
        <div className="wrap">
          <div className="section-head"><p className="kicker"><span className="travo-word">TRAVO</span> Engagements</p><h2 id="travo-engagements-title"><span className="travo-word">TRAVO</span> engagements, identified separately.</h2></div>
          <p className="lede col">Only actual <span className="travo-word">TRAVO</span> engagements are presented in this category, and only where client permission, confidentiality obligations and engagement terms permit publication. No project is represented as a <span className="travo-word">TRAVO</span> engagement unless it was contracted to <span className="travo-word">TRAVO</span>.</p>
        </div>
      </section>
      <section className="section section-soft reveal" aria-labelledby="principal-projects-title">
        <div className="wrap">
          <div className="section-head"><p className="kicker">Principal Project Experience</p><h2 id="principal-projects-title">Earlier operating and professional project experience.</h2></div>
          <p className="lede col">Projects from the principal’s earlier operating and professional career are presented separately and clearly identified as principal experience rather than <span className="travo-word">TRAVO</span> engagements.</p>
        </div>
      </section>
      </div>
    </>
  );
}
