import type { Metadata } from "next";
import PageEffects from "@/components/PageEffects";

const OG_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "TRAVO — Total Risk Analysis and Value Optimization",
};

export const metadata: Metadata = {
  title: "Research & Insights — TRAVO",
  description:
    "How TRAVO's engagement learning, public-data research and published foundations feed back into better risk models and training.",
  alternates: { canonical: "/research" },
  openGraph: {
    type: "website",
    siteName: "TRAVO",
    locale: "en_US",
    url: "/research",
    title: "Research & Insights — TRAVO",
    description:
      "How TRAVO's engagement learning, public-data research and published foundations feed back into better risk models and training.",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Research & Insights — TRAVO",
    description:
      "How TRAVO's engagement learning, public-data research and published foundations feed back into better risk models and training.",
    images: [OG_IMAGE],
  },
};

export default function ResearchPage() {
  return (
    <>
      <PageEffects />
      <div className="page" id="page-research" role="region" aria-label="research">
      <section className="section page-hero section-ink on-dark" aria-labelledby="research-title" id="research">
        <div className="wrap"><p className="kicker">Research &amp; Insights</p><h1 id="research-title">Every completed project should improve the next decision.</h1><p className="lede editorial"><em>Research is the feedback mechanism of the practice: outcomes correct assumptions, better assumptions improve models, and better models improve future decisions.</em></p></div>
      </section>
      <section className="section reveal" aria-labelledby="research-loop-title">
        <div className="wrap"><div className="section-head"><p className="kicker">Feedback loop</p><h2 id="research-loop-title">Engagement → Outcome → Learning → Calibration →<br />Better next engagement.</h2></div>
          <div className="research-levels">
            <div className="research-level"><strong>Level 1 · Client-specific</strong><p>Compare the forecast, assumptions and risks with the realized project outcome.</p></div>
            <div className="research-level"><strong>Level 2 · Anonymized internal learning</strong><p>Only with appropriate rights and permissions, normalize lessons across engagements without identifying the client or project.</p></div>
            <div className="research-level"><strong>Level 3 · Public-data research</strong><p>Use public records and other legitimate sources to study regional construction outcomes and recurring risk patterns.</p></div>
            <div className="research-level"><strong>Level 4 · Benchmarking</strong><p>Offer comparative products only when the evidence base is deep, normalized and governed enough to support the claim.</p></div>
          </div>
          <div className="notice notice-neutral"><span className="notice-label">Data-rights gate</span><p>Client work does not automatically become research data. Any use beyond the engagement follows the applicable consent, confidentiality, anonymization and data-rights controls.</p></div>
        </div>
      </section>
      <section className="section section-ink on-dark reveal" aria-labelledby="research-purpose-title">
        <div className="wrap"><div className="section-head"><p className="kicker">Why research belongs inside <span className="travo-word">TRAVO</span></p><h2 id="research-purpose-title">The objective is calibration, not publication for its own sake.</h2></div>
          <div className="grid grid-3"><div className="card on-dark"><h3>Better priors</h3><p>Replace generic assumptions with better-informed distributions where evidence supports doing so.</p></div><div className="card on-dark"><h3>Better early-warning indicators</h3><p>Learn which project conditions actually precede material cost, schedule or completion deterioration.</p></div><div className="card on-dark"><h3>Better training</h3><p>Convert what the practice learns into improved seminars, workshops, tools and decision processes.</p></div></div>
        </div>
      </section>
      <section className="section reveal" aria-labelledby="research-lines-title">
        <div className="wrap">
          <div className="section-head"><p className="kicker">Lines of inquiry</p><h2 id="research-lines-title">Questions the practice should test, not claims it should assume.</h2><p className="lede col">Research directions are framed as questions to test, not benchmark claims assumed in advance. Comparative products follow only when the supporting evidence is deep, normalized and governed enough to justify them.</p></div>
          <div className="grid grid-2">
            <div className="card"><p className="card-label">01</p><h3>Regional outcome patterns</h3><p>Study cost-overrun, schedule-slippage, contingency and claim-emergence patterns using legitimate public sources and appropriately governed project data.</p></div>
            <div className="card"><p className="card-label">02</p><h3>Contingency adequacy after the fact</h3><p>Compare the contingency held with the realized project outcome to understand where reserves proved insufficient, adequate or excessive.</p></div>
            <div className="card"><p className="card-label">03</p><h3>Risk categories &amp; early-warning indicators</h3><p>Test whether recurring project conditions reliably precede material cost, schedule or completion deterioration, with analytical tools subordinate to expert judgment.</p></div>
            <div className="card"><p className="card-label">04</p><h3>The observational method in construction</h3><p>Study how plans and risk models should update as uncertainty resolves and new field information becomes available.</p></div>
          </div>
        </div>
      </section>
      <section className="section section-soft reveal" aria-labelledby="evidence-framework-title">
        <div className="wrap">
          <div className="section-head"><p className="kicker">Evidence before positioning</p><h2 id="evidence-framework-title">Case evidence follows a repeatable framework.</h2><p className="lede col">Case studies are published only where the underlying engagement is supportable, publication rights permit it, and the result can be stated without implying outcomes that the evidence does not establish.</p></div>
          <div className="grid grid-4">
            <div className="card"><p className="card-label">Decision</p><h3>What had to be decided?</h3><p>State the project stage, client perspective and decision trigger.</p></div>
            <div className="card"><p className="card-label">Method</p><h3>How was uncertainty analyzed?</h3><p>State the information, model, sensitivity/scenario and probabilistic methods actually used.</p></div>
            <div className="card"><p className="card-label">Result</p><h3>What did the analysis show?</h3><p>Report ranges, drivers, alternatives or other decision outputs without invented precision.</p></div>
            <div className="card"><p className="card-label">Outcome &amp; learning</p><h3>What happened later?</h3><p>Where known and publishable, compare the forecast and decision with the realized outcome and lessons.</p></div>
          </div>
        </div>
      </section>
      <section className="section reveal" aria-labelledby="publications-title">
        <div className="wrap">
          <div className="section-head"><p className="kicker">Selected peer-reviewed foundations</p><h2 id="publications-title">Published work behind the decision architecture.</h2><p className="lede col">Selected publications are shown because they directly evidence the principal&apos;s published work in decision analysis, uncertainty, exploration planning, information value and formal updating — methodological foundations now applied through <span className="travo-word">TRAVO</span>. They are academic foundations of the method, not claims of client outcomes.</p></div>
          <div className="grid grid-3">
            <article className="card"><p className="card-label">ASCE · 2007 · Part I</p><h3>Decision Analysis Applied to Tunnel Exploration Planning. I: Principles and Case Study</h3><p>Karam, K.S.; Karam, J.S.; Einstein, H.H. <em>Journal of Construction Engineering and Management</em>, 133(5), 344–353.</p><p className="muted">Decision analysis for tunnel exploration, including assessing the effect of additional exploration before committing to it.</p><p><a href="https://doi.org/10.1061/(ASCE)0733-9364(2007)133:5(344)" rel="external noopener">Publisher record →</a></p></article>
            <article className="card"><p className="card-label">ASCE · 2007 · Part II</p><h3>Decision Analysis Applied to Tunnel Exploration Planning. II: Consideration of Uncertainty</h3><p>Karam, K.S.; Karam, J.S.; Einstein, H.H. <em>Journal of Construction Engineering and Management</em>, 133(5), 354–363.</p><p className="muted">Formal incorporation of uncertainty into exploration-planning decisions.</p><p><a href="https://doi.org/10.1061/(ASCE)0733-9364(2007)133:5(354)" rel="external noopener">Publisher record →</a></p></article>
            <article className="card"><p className="card-label">Georisk · 2014</p><h3>Exploration Analysis for Landslide Risk Management</h3><p>Sousa, R.L.; Karam, K.S.; Einstein, H.H. <em>Georisk: Assessment and Management of Risk for Engineered Systems and Geohazards</em>, 8(3), 155–170.</p><p className="muted">Information collection, virtual exploration, Bayesian updating and decision analysis for determining when additional information is worthwhile.</p><p><a href="https://doi.org/10.1080/17499518.2014.958174" rel="external noopener">Publisher record →</a></p></article>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
