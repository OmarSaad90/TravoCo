import type { Metadata } from "next";
import Link from "next/link";
import PageEffects from "@/components/PageEffects";

export const metadata: Metadata = {
  title: "Training & Seminars — TRAVO",
  description:
    "Executive seminars, short courses and workshops on construction risk assessment, uncertainty and decision analysis from TRAVO.",
  alternates: { canonical: "/training" },
};

export default function TrainingPage() {
  return (
    <>
      <PageEffects />
      <section className="section page-hero" aria-labelledby="training-title" id="training">
        <div className="wrap">
          <p className="kicker">
            <span className="section-num">07</span>Training &amp; Seminars
          </p>
          <h1 id="training-title">Risk assessment for people who make construction decisions.</h1>
          <p className="lede editorial">
            <em>
              TRAVO not only applies the methodology; it can teach professionals and
              organizations how to understand and use it.
            </em>
          </p>
          <p className="lede col">
            Training &amp; Seminars is a commercial professional-service offering. It is
            distinct from university courses or university endorsement, and distinct from
            a deeper Methodology Implementation engagement.
          </p>
        </div>
      </section>

      <section className="section reveal" aria-labelledby="formats-title">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">
              <span className="section-num">01</span>Formats
            </p>
            <h2 id="formats-title">
              From a one-hour decision briefing to a full-day technical workshop.
            </h2>
          </div>
          <div className="training-grid">
            <div className="training-card">
              <p className="card-label">Executive seminars</p>
              <h3>For decision-makers</h3>
              <p>
                Focused sessions for leadership, boards, owners, lenders, sureties and
                agencies on uncertainty, contingency, project drift, early warning and
                decision quality.
              </p>
            </div>
            <div className="training-card">
              <p className="card-label">Executive short courses</p>
              <h3>For deeper professional development</h3>
              <p>
                Multi-session or open-enrollment programs that move from risk fundamentals
                through probability, contingency, the Decision Cycle and project learning.
                Any university affiliation is separate and only stated if specifically
                approved.
              </p>
            </div>
            <div className="training-card">
              <p className="card-label">Professional workshops</p>
              <h3>For technical teams</h3>
              <p>
                Half-day or full-day programs on risk identification, registers,
                probability, cost/schedule risk, Monte Carlo, scenario analysis and project
                learning.
              </p>
            </div>
            <div className="training-card">
              <p className="card-label">Counsel &amp; professional seminars</p>
              <h3>For dispute and advisory audiences</h3>
              <p>
                Sessions on claim emergence, technical early-warning indicators, risk
                records, schedule/cost uncertainty and how prospective project risk evolves
                into a forensic record.
              </p>
            </div>
            <div className="training-card">
              <p className="card-label">Webinars</p>
              <h3>Scalable topic sessions</h3>
              <p>
                Short paid or open-enrollment sessions that address one defined
                construction-risk or decision-analysis topic.
              </p>
            </div>
            <div className="training-card">
              <p className="card-label">Customized training</p>
              <h3>For organizations</h3>
              <p>
                Programs tailored to an owner, contractor, lender, surety, counsel or
                public-agency audience without requiring a full methodology implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft reveal" aria-labelledby="topics-title">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">
              <span className="section-num">02</span>Topics
            </p>
            <h2 id="topics-title">The curriculum follows the same Decision Cycle used in practice.</h2>
          </div>
          <ul className="story-list">
            <li>
              <div>
                <h3>Construction risk assessment &amp; management</h3>
                <p>
                  Risk identification, characterization, allocation, response, mitigation
                  and residual risk.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h3>Probability, statistics &amp; uncertainty</h3>
                <p>How uncertainty should be represented and interpreted in construction decisions.</p>
              </div>
            </li>
            <li>
              <div>
                <h3>Operational vs. strategic risk management</h3>
                <p>
                  When to use probabilistic analysis within a strategy and when to compare
                  materially different scenarios.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h3>Cost &amp; schedule risk / Monte Carlo</h3>
                <p>
                  From deterministic baselines to distributions, contingency, percentiles
                  and sensitivity analysis.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h3>Risk registers as live decision records</h3>
                <p>Building, updating and using the register as project information changes.</p>
              </div>
            </li>
            <li>
              <div>
                <h3>Early warning, disputes &amp; learning</h3>
                <p>
                  How emerging risk information can support earlier action and how
                  completed projects should improve future decisions.
                </p>
              </div>
            </li>
          </ul>
          <p className="mt-block">
            <Link className="btn btn-primary" href="/contact">
              Discuss a seminar or workshop
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
