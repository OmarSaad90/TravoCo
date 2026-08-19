import type { Metadata } from "next";
import PageEffects from "@/components/PageEffects";

export const metadata: Metadata = {
  title: "Projects — TRAVO",
  description:
    "Selected TRAVO engagements and principal project experience in construction risk assessment and decision analysis.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageEffects />
      <section className="section page-hero" aria-labelledby="projects-title" id="projects">
        <div className="wrap">
          <p className="kicker">
            <span className="section-num">04</span>Projects
          </p>
          <h1 id="projects-title">Selected Project Experience</h1>
          <p className="lede editorial">
            <em>
              Selected infrastructure and construction projects reflecting the
              principal&rsquo;s operating, analytical and advisory experience. TRAVO
              engagements are identified separately where publication is permitted.
            </em>
          </p>
        </div>
      </section>

      <section className="section reveal" aria-labelledby="travo-engagements-title">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">
              <span className="section-num">01</span>TRAVO Engagements
            </p>
            <h2 id="travo-engagements-title">TRAVO engagements, identified separately.</h2>
          </div>
          <p className="lede col">
            Only actual TRAVO engagements are presented in this category, and only where
            client permission, confidentiality obligations and engagement terms permit
            publication. No project is represented as a TRAVO engagement unless it was
            contracted to TRAVO.
          </p>
        </div>
      </section>

      <section className="section section-soft reveal" aria-labelledby="principal-projects-title">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">
              <span className="section-num">02</span>Principal Project Experience
            </p>
            <h2 id="principal-projects-title">
              Earlier operating and professional project experience.
            </h2>
          </div>
          <p className="lede col">
            Projects from the principal&rsquo;s earlier operating and professional career
            are presented separately and clearly identified as principal experience rather
            than TRAVO engagements.
          </p>
        </div>
      </section>
    </>
  );
}
