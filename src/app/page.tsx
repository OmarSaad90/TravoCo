import type { Metadata } from "next";
import Link from "next/link";
import HeroFinale from "@/components/HeroFinale";
import PageEffects from "@/components/PageEffects";

const OG_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "TRAVO — Total Risk Analysis and Value Optimization",
};

export const metadata: Metadata = {
  title: "TRAVO · Risk Assessment · Decision Analysis · Value Optimization",
  description:
    "Independent construction risk assessment and decision analysis before capital is committed, funded, reserved or defended.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "TRAVO",
    locale: "en_US",
    url: "/",
    title: "TRAVO · Risk Assessment · Decision Analysis · Value Optimization",
    description:
      "Independent construction risk assessment and decision analysis before capital is committed, funded, reserved or defended.",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "TRAVO · Risk Assessment · Decision Analysis · Value Optimization",
    description:
      "Independent construction risk assessment and decision analysis before capital is committed, funded, reserved or defended.",
    images: [OG_IMAGE],
  },
};

export default function HomePage() {
  return (
    <>
      <PageEffects />
      <div className="page" id="page-home" role="region" aria-label="home">
      <section aria-labelledby="hero-title" className="premium-hero on-dark" style={{ overflow: "hidden" }}>
        <div className="wrap premium-hero-grid">
          <div className="hero-head">
            <p className="kicker">Independent construction risk advisory</p>
            <h1 id="hero-title">Construction risk, quantified before capital is committed, funded, reserved or defended.</h1>
            <p className="hero-deck"><em>Independent, principal-led cost-and-schedule risk analysis for one decision at a time — starting with a bounded Project Risk Screen.</em></p>
          </div>

          <div className="hero-copy">
            <p className="hero-support">From preconstruction through active delivery, distress and post-project learning, <span className="travo-word">TRAVO</span> converts project information into a defensible range of outcomes, the few drivers that move it, and the contingency, investigation or action the decision requires.</p>
            <p className="mt-block">
              <Link className="btn btn-primary" href="/contact">Request a decision-scoping call</Link>
              <Link className="btn btn-ghost" href="/services#svc-a1">Explore the Project Risk Screen</Link>
              <Link className="btn btn-ghost" href="/methodology">See the methodology</Link>
            </p>
          </div>

          <HeroFinale />

          <aside className="premium-decision-panel" aria-label="TRAVO decision architecture">
            <p className="panel-title">Decision architecture</p>
            <div className="premium-decision-row"><span className="num">01</span><span><strong>Information</strong><span>What do we know — and what is still uncertain?</span></span></div>
            <div className="premium-decision-row"><span className="num">02</span><span><strong>Risk Assessment</strong><span>What can happen, how likely is it, and what are the consequences?</span></span></div>
            <div className="premium-decision-row"><span className="num">03</span><span><strong>Decision Analysis</strong><span>Which alternatives are available, and how do they perform under uncertainty?</span></span></div>
            <div className="premium-decision-row"><span className="num">04</span><span><strong>Value Optimization</strong><span>Which course best serves the objectives that matter?</span></span></div>
            <p className="premium-panel-foot">Enter anywhere in the project lifecycle. Update the decision as evidence changes.</p>
          </aside>
        </div>
      </section>

      <section className="section section-soft reveal" aria-labelledby="why-quantify-title">
        <div className="wrap">
          <div className="premium-section-intro" style={{ display: "block" }}>
            <div>
              <p className="kicker">Why quantify</p>
              <h2 id="why-quantify-title">Why quantify the uncertainty?</h2>
              <p className="lede" style={{ maxWidth: "none" }}>A project forecast is most useful when it shows not only the expected outcome, but the range around it, the drivers that move that range, and the amount of contingency or action required at the confidence level the decision-maker is prepared to accept.</p>
            </div>
          </div>
          <div className="grid grid-2">
            <div className="card home-light-blue-box"><p className="card-label">Industry evidence</p><h3>Downside exposure can be material.</h3><p>HKA&apos;s 2025 CRUX analysis of more than 2,200 construction and engineering projects across 114 countries reports disputed costs averaging 33.4% of contract budgets and claimed extensions of time averaging 65.8% of planned schedules. The dataset is drawn from HKA claims and dispute investigations; it illustrates the potential scale of downside when uncertainty materializes, not an expected outcome for every project.</p><p className="spec">Source: <a href="https://www.hka.com/news/crux-insight-eighth-annual-report-from-insight-to-foresight/">HKA, CRUX Insight Eighth Annual Report (2025)</a>.</p></div>
            <div className="card home-light-blue-box"><p className="card-label">Method shift</p><h3>Move from screening to decision evidence.</h3><p>Qualitative screening → quantified ranges<br />Single-point forecasts → probability distributions and selected decision percentiles tied to stated confidence levels<br />Intuition-set contingency → decision-linked contingency.</p><p>A heat map can be where analysis begins; it need not be where it ends.</p></div>
          </div>
          <div className="notice notice-neutral mt-block home-why-matters-box"><span className="notice-label">Why this matters</span><p>The objective is not to model for its own sake. It is to make uncertainty visible enough that the decision-maker can set contingency, investigate, intervene, compare alternatives or accept the risk deliberately.</p><p><strong>Value is lost in both directions: too little contingency leaves the project exposed, while too much can unnecessarily tie up capital that could serve another project objective.</strong></p></div>
        </div>
      </section>

      <div className="wrap premium-proof-strip" aria-label="TRAVO practice foundations">
        <div className="premium-proof-item"><p className="proof-label">Research</p><strong>MIT-trained risk assessment, decision analysis and value-of-information methods.</strong></div>
        <div className="premium-proof-item"><p className="proof-label">Industry</p><strong>Co-Founder, Partner and Advisor to the Board of a construction business that completed 170+ infrastructure projects totaling more than $1B in work.</strong></div>
        <div className="premium-proof-item"><p className="proof-label">Teaching</p><strong>Construction risk, uncertainty, planning, monitoring and control taught at Stevens.</strong></div>
      </div>

      <section className="purpose-band reveal" aria-labelledby="purpose-title">
        <div className="wrap purpose-band-grid">
          <div>
            <p className="kicker"><span className="travo-word">TRAVO</span> purpose</p>
            <h2 id="purpose-title">Make uncertainty useful to the decision.</h2>
          </div>
          <div>
            <p className="purpose-statement">We make uncertainty visible, alternatives explicit, and decisions defensible.</p>
            <p className="purpose-chain">Risk Analysis → Decision Analysis → Value Optimization</p>
            <p className="purpose-link"><Link href="/methodology">See the decision architecture →</Link></p>
          </div>
        </div>
      </section>

      <section className="section reveal" aria-labelledby="one-discipline-title">
        <div className="wrap">
          <div className="premium-section-intro one-discipline-intro">
            <div>
              <p className="kicker">One discipline</p>
              <h2 id="one-discipline-title">Analysis earns its place only if it can improve the decision.</h2>
            </div>
            <div>
              <p className="lede editorial"><em><span className="travo-word">TRAVO</span> begins with the decision, not the software.</em></p>
              <p>Probability, simulation, risk registers and forecasts are useful only when they expose uncertainty, sharpen the alternatives and support an action that can be explained and defended.</p>
            </div>
          </div>
          <div className="premium-method-rail" aria-label="Three tests for decision-useful analysis">
            <div className="premium-method-item"><span className="step">01 · Relevance</span><h3>Expose what can change the answer.</h3><p>Focus the analysis on the uncertainties, drivers and assumptions that could materially alter the decision.</p></div>
            <div className="premium-method-item"><span className="step">02 · Comparison</span><h3>Make the alternatives explicit.</h3><p>Compare credible courses of action, tradeoffs and the value of additional information rather than stopping at a risk score.</p></div>
            <div className="premium-method-item"><span className="step">03 · Accountability</span><h3>Leave a defensible decision trail.</h3><p>Document the evidence, assumptions, reasoning and principal sign-off behind the recommended course.</p></div>
          </div>
        </div>
      </section>

      <section className="section reveal" aria-labelledby="two-layers-title">
        <div className="wrap">
          <div className="premium-section-intro lifecycle-intro">
            <div>
              <p className="kicker">One lifecycle · repeated decisions</p>
              <h2 id="two-layers-title">The project moves forward. The Decision Cycle repeats.</h2>
            </div>
            <div>
              <p className="lede">The lifecycle tells us <strong>where the project is</strong>. The Decision Cycle tells us <strong>how to analyze the next consequential choice</strong>.</p>
              <p>A client can engage <span className="travo-word">TRAVO</span> at any point. The methodology does not require a cradle-to-close assignment.</p>
            </div>
          </div>
          <div className="premium-layer-stack">
            <div className="premium-layer-row"><strong>Project lifecycle</strong><span>Planning → Organization → Construction Planning → Monitoring → Control → Learning</span></div>
            <div className="premium-layer-row"><strong>Decision Cycle</strong><span>Information → Models → Risk → Alternatives → Decision → Action → Observation → Update ↺</span></div>
          </div>
          <p className="mt-block"><Link className="btn btn-primary" href="/lifecycle">Explore the lifecycle architecture</Link></p>
        </div>
      </section>

      <section className="section section-soft reveal" aria-labelledby="entry-title">
        <div className="wrap">
          <div className="premium-section-intro entry-intro">
            <div>
              <p className="kicker">Common entry points</p>
              <h2 id="entry-title">Four common entry points into the <span className="common-entry-travo"><span className="travo-word">TRAVO</span></span> lifecycle.</h2>
            </div>
            <div><p className="lede">These are not the limits of the practice. They are bounded starting points for a consequential decision; the full catalog on the Services page shows the broader lifecycle applications.</p></div>
          </div>
          <div className="premium-entry-grid">
            <Link className="premium-entry-card service-entry-link" href="/services#svc-a1"><p className="small-caps-note">Primary entry point · Live project</p><p className="decision">Project Risk Screen</p><p>Rapid, bounded triage when a current cost, completion, reserve or intervention decision cannot wait for a full reforecast.</p></Link>
            <Link className="premium-entry-card service-entry-link" href="/services#svc-a2"><p className="small-caps-note">Deeper analysis</p><p className="decision">Full Project Risk Reforecast</p><p>Integrated probabilistic cost/schedule reassessment when the updated range, drivers and alternatives must be established independently.</p></Link>
            <Link className="premium-entry-card service-entry-link" href="/services#svc-f1"><p className="small-caps-note">Counsel-directed</p><p className="decision">Project Risk &amp; Quantum Review</p><p>Technical cost, schedule, controls and quantum analysis when a claim is emerging or positions are beginning to harden.</p></Link>
            <Link className="premium-entry-card service-entry-link" href="/services#svc-p3"><p className="small-caps-note">Independent challenge</p><p className="decision">Risk Peer Review</p><p>A fixed-scope challenge of assumptions, contingency and treatment logic when an existing analysis needs independent scrutiny.</p></Link>
          </div>
          <div className="notice notice-neutral mt-block entry-notice-wide"><span className="notice-label">A bounded rapid-response entry point</span><p>The Project Risk Screen is designed for a live decision under pressure. The question, data gate, scope and delivery target are defined in the engagement proposal.</p></div>
        </div>
      </section>

      <section className="section section-ink on-dark reveal" aria-labelledby="buyer-home-title">
        <div className="wrap">
          <div className="premium-section-intro buyer-home-intro">
            <div>
              <p className="kicker">Buyer perspective</p>
              <h2 id="buyer-home-title">Same project. Different exposure.</h2>
            </div>
            <div><p className="lede"><span className="travo-word">TRAVO</span> follows the same underlying project-risk system from the perspective of the party it is engaged to advise.</p></div>
          </div>
          <div className="premium-buyer-grid">
            <div className="premium-buyer"><span className="buyer-name">Owner / developer</span><strong>Commit · Reserve · Intervene</strong><p>Is the basis credible, is contingency adequate, and has the project changed enough to require action?</p><div className="buyer-service-links"><Link href="/services#svc-p2">Preconstruction Risk Review</Link><Link href="/services#svc-p3">Risk Peer Review</Link></div></div>
            <div className="premium-buyer"><span className="buyer-name">Lender / private credit</span><strong>Fund · Reserve · Escalate</strong><p>Will the project complete within available capital, and what does the next credit decision require?</p><div className="buyer-service-links"><Link href="/services#svc-a1">Project Risk Screen</Link><Link href="/services#svc-a4">Lender Overlay</Link><Link href="/services#svc-p6">Underwriting Risk Assessment</Link></div></div>
            <div className="premium-buyer"><span className="buyer-name">Surety / SDI</span><strong>Capacity · Completion · Intervention</strong><p>Is completion exposure increasing, and which project signals require attention?</p><div className="buyer-service-links"><Link href="/services#svc-a5">Completion-Risk Review</Link></div></div>
            <div className="premium-buyer"><span className="buyer-name">Counsel</span><strong>Evidence · Exposure · Next Step</strong><p>What does the technical record show about delay, cost, controls and quantum?</p><div className="buyer-service-links"><Link href="/services#svc-f1">Counsel-Directed Review</Link></div></div>
            <div className="premium-buyer"><span className="buyer-name">Contractor</span><strong>Bid · Mitigate · Recover</strong><p>Which uncertainties threaten delivery, margin or strategy, and what should change?</p><div className="buyer-service-links"><Link href="/services#svc-p1">Quantitative Risk &amp; Contingency</Link><Link href="/services#svc-p4">Strategic Alternatives</Link></div></div>
            <div className="premium-buyer"><span className="buyer-name">Public decision-maker</span><strong>Approve · Reserve · Oversee</strong><p>Are the assumptions behind the capital decision independent, traceable and defensible?</p><div className="buyer-service-links"><Link href="/services#svc-p7">Independent Project Risk Review</Link></div></div>
          </div>
          <div className="notice mt-block"><span className="notice-label">Independence first</span><p>These are buyer lenses, not simultaneous roles on the same project. Conflicts, reliance and role sequencing are resolved before an engagement proceeds.</p></div>
          <p className="mt-block"><Link className="btn btn-primary" href="/contact">Discuss the decision</Link></p>
        </div>
      </section>

      <section className="section reveal" aria-labelledby="engage-home-title">
        <div className="wrap">
          <div className="premium-section-intro engage-home-intro">
            <div>
              <p className="kicker">When to engage <span className="travo-word">TRAVO</span></p>
              <h2 id="engage-home-title">Bring <span className="travo-word">TRAVO</span> in when the decision must be defensible.</h2>
            </div>
            <div><p className="lede"><span className="travo-word">TRAVO</span> is most useful when uncertainty is material enough to change the decision—and the cost of getting that decision wrong justifies independent analysis.</p></div>
          </div>
          <div className="grid grid-4">
            <div className="card"><h3>Before Commitment &amp; Preconstruction</h3><p>Capital, contingency, procurement or underwriting assumptions are about to be fixed and the range of outcomes needs to be understood.</p></div>
            <div className="card"><h3>When the project changes</h3><p>Actual performance, emerging conditions or new information has made the existing forecast or contingency basis unreliable.</p></div>
            <div className="card"><h3>Before positions harden</h3><p>A significant cost, schedule or commercial issue is developing and the technical record needs independent assessment before it becomes a claim or dispute position.</p></div>
            <div className="card"><h3>When the answer needs challenge</h3><p>An existing risk analysis, forecast, contingency recommendation or project assumption needs independent scrutiny before others rely on it.</p></div>
          </div>
          <p className="mt-block"><Link className="btn btn-primary" href="/contact">Request a decision-scoping call</Link></p>
          <p><Link href="/methodology#engagement-shape-title">See how an engagement works →</Link></p>
        </div>
      </section>
      </div>
    </>
  );
}
