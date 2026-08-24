import type { Metadata } from "next";
import PageEffects from "@/components/PageEffects";

const OG_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "TRAVO — Total Risk Analysis and Value Optimization",
};

export const metadata: Metadata = {
  title: "How TRAVO Works — TRAVO",
  description:
    "One project lifecycle, one repeating Decision Cycle: how TRAVO converts information into risk intelligence, alternatives and a defensible decision.",
  alternates: { canonical: "/lifecycle" },
  openGraph: {
    type: "website",
    siteName: "TRAVO",
    locale: "en_US",
    url: "/lifecycle",
    title: "How TRAVO Works — TRAVO",
    description:
      "One project lifecycle, one repeating Decision Cycle: how TRAVO converts information into risk intelligence, alternatives and a defensible decision.",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "How TRAVO Works — TRAVO",
    description:
      "One project lifecycle, one repeating Decision Cycle: how TRAVO converts information into risk intelligence, alternatives and a defensible decision.",
    images: [OG_IMAGE],
  },
};

export default function LifecyclePage() {
  return (
    <>
      <PageEffects />
      <div className="page" id="page-lifecycle" role="region" aria-label="lifecycle">
      <section className="section page-hero section-ink on-dark" aria-labelledby="lifecycle-title" id="lifecycle">
        <div className="wrap">
          <p className="kicker">How <span className="travo-word">TRAVO</span> works</p>
          <h1 id="lifecycle-title">One project lifecycle. A Decision Cycle that repeats as information changes.</h1>
          <p className="lede editorial"><em>The lifecycle is temporal. The Decision Cycle is analytical. Keeping them separate makes the methodology usable from the first planning decision to the final lesson learned.</em></p>
        </div>
      </section>
      <section className="section reveal" aria-labelledby="project-life-title">
        <div className="wrap">
          <div className="section-head"><p className="kicker">Layer A</p><h2 id="project-life-title">Project Lifecycle</h2><p className="lede col">The project moves forward through planning, organization, construction planning, monitoring, control, and learning. <span className="travo-word">TRAVO</span> can enter at any stage.</p></div>
          <div className="phase-grid">
            <div className="phase"><span className="phase-num mono">01</span><h3>Project Planning</h3><p>Feasibility, financing, alternatives, initial budgets, objectives, and major uncertainties.</p></div>
            <div className="phase"><span className="phase-num mono">02</span><h3>Project Organization</h3><p>Delivery strategy, contracting, procurement structure, responsibility, and risk allocation.</p></div>
            <div className="phase"><span className="phase-num mono">03</span><h3>Construction Planning</h3><p>Estimate, schedule, contingency, resources, constructability, and execution strategy.</p></div>
            <div className="phase"><span className="phase-num mono">04</span><h3>Project Monitoring</h3><p>Actual progress, cost, production, changes, new information, and emerging risks.</p></div>
            <div className="phase"><span className="phase-num mono">05</span><h3>Project Control</h3><p>Reforecasting, mitigation, corrective action, reserves, interventions, and strategy changes.</p></div>
            <div className="phase"><span className="phase-num mono">06</span><h3>Project Learning</h3><p>Closeout, forecast-versus-actual review, calibration, lessons learned, and method improvement.</p></div>
          </div>
        </div>
      </section>
      <section className="section section-soft reveal" aria-labelledby="decision-cycle-title">
        <div className="wrap">
          <div className="section-head"><p className="kicker">Layer B</p><h2 id="decision-cycle-title">The repeating Decision Cycle</h2><p className="lede col">At each material decision point, <span className="travo-word">TRAVO</span> converts information into risk intelligence, risk intelligence into alternatives, and alternatives into a defensible decision.</p></div>
          <div className="cycle-shell">
            <div className="cycle-grid">
              <div className="cycle-step"><h3>Establish the current information state</h3><p>Define the decision, inventory the evidence already available, establish gaps, and determine what is knowable now before deciding whether additional information is worth obtaining.</p></div>
              <div className="cycle-step"><h3>Characterize reality</h3><p>Define the state of nature, variables, dependencies, constraints, and relevant objectives.</p></div>
              <div className="cycle-step"><h3>Build models</h3><p>Create deterministic cost, schedule, production, or other decision models appropriate to the problem.</p></div>
              <div className="cycle-step"><h3>Test sensitivity &amp; scenarios</h3><p>Identify dominant variables and materially different futures before adding probabilistic complexity.</p></div>
              <div className="cycle-step"><h3>Quantify uncertainty</h3><p>Use probability distributions and simulation where appropriate to describe the range and likelihood of outcomes.</p></div>
              <div className="cycle-step"><h3>Assess risk</h3><p>Evaluate vulnerability, consequences, residual exposure, and the risks that should drive attention.</p></div>
              <div className="cycle-step"><h3>Evaluate alternatives</h3><p>Compare mitigation, procurement, funding, intervention, or strategic options under uncertainty.</p></div>
              <div className="cycle-step value-step"><h3>Decision → Value Optimization</h3><p>Select the action that best satisfies the decision-maker&apos;s objectives on a risk-adjusted basis.</p></div>
              <div className="cycle-step"><h3>Act</h3><p>Implement the selected mitigation, funding, reserve, procurement, control, or strategic decision.</p></div>
              <div className="cycle-step" style={{ borderTop: "1px solid var(--rule-c)" }}><h3>Observe &amp; measure</h3><p>Collect new evidence from project performance, changes, field conditions, and outcomes.</p></div>
              <div className="cycle-step" style={{ borderTop: "1px solid var(--rule-c)" }}><h3>Learn &amp; update</h3><p>Update variables, models, probabilities, consequences, and the risk information record.</p></div>
              <div className="cycle-step"><h3>Value of Information — before collection</h3><p>Before collecting more information, estimate how much reducing uncertainty could improve the decision. Compare that expected decision benefit with the cost, delay and effort of obtaining the information; collect it only when the expected value justifies doing so.</p></div>
            </div>
            <div className="cycle-return"><strong>Repeat when new information changes the decision.</strong><span className="mono">OBSERVE → UPDATE → REASSESS → DECIDE ↺</span></div>
          </div>
        </div>
      </section>
      <section className="section reveal" aria-labelledby="conditional-title">
        <div className="wrap">
          <div className="section-head"><p className="kicker">Conditional branch</p><h2 id="conditional-title">Dispute is not a normal project phase. It is one possible path<br />when risk materializes.</h2></div>
          <div className="branch-box">
            <p className="lede">Prospective risk analysis and forensic analysis examine the same project at different points in time: first as uncertainty about the future, later as evidence about what actually happened.</p>
            <div className="branch-flow" aria-label="Conditional distress and dispute branch">
              <span className="branch-node">Monitoring / Control</span><span className="branch-arrow">→</span>
              <span className="branch-node">Risk materializes</span><span className="branch-arrow">→</span>
              <span className="branch-node">Distress / Pre-Claim</span><span className="branch-arrow">→</span>
              <span className="branch-node">Forensic Analysis</span><span className="branch-arrow">↔</span>
              <span className="branch-node">Claim / Dispute / Proceedings</span><span className="branch-arrow">→</span>
              <span className="branch-node">Resolution</span><span className="branch-arrow">→</span>
              <span className="branch-node">Learning</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-ink on-dark reveal" aria-labelledby="memory-title">
        <div className="wrap">
          <div className="section-head"><p className="kicker">Persistent project memory</p><h2 id="memory-title">The risk information record connects decisions across time.</h2></div>
          <div className="risk-memory">
            <div><p className="lede">When <span className="travo-word">TRAVO</span> enters early, the principal prospective record is a live structured risk register. When <span className="travo-word">TRAVO</span> enters later, the history may be reconstructed from the project&apos;s actual records.</p><p>The objective is continuity: what was known, what was assumed, what changed, what action followed, and what ultimately happened.</p></div>
            <div className="memory-rail">
              <div className="memory-item"><strong>Assess</strong><br />Identify and characterize uncertainty.</div>
              <div className="memory-item"><strong>Quantify</strong><br />Add likelihood, consequences, ranges, and relationships.</div>
              <div className="memory-item"><strong>Monitor / Update</strong><br />Record new evidence, mitigation, status, and residual exposure.</div>
              <div className="memory-item"><strong>Resolve</strong><br />Reconstruct the technical history when risk has materialized.</div>
              <div className="memory-item"><strong>Learn</strong><br />Compare forecast with outcome and update future assumptions.</div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-soft reveal" aria-labelledby="worked-risk-title">
        <div className="wrap">
          <div className="section-head"><p className="kicker">Worked risk structure</p><h2 id="worked-risk-title">One risk, followed from identification to residual.</h2><p className="lede col">A headline score can rank a risk; it cannot explain the decision. <span className="travo-word">TRAVO</span> follows the individual risk through its analytical and management history so the response is directed at the dimension actually driving exposure.</p></div>
          <ul className="story-list">
            <li><div><h3>Identify &amp; characterize</h3><p>Define the uncertain event, its cause, affected objectives, dependencies, owner and the evidence available at the time.</p></div></li>
            <li><div><h3>Quantify probability &amp; consequence</h3><p>Represent likelihood and consequence explicitly, including ranges where appropriate rather than relying only on a qualitative score.</p></div></li>
            <li><div><h3>Profile the dimensions</h3><p>Examine the risk across cost, schedule, quality, safety, environmental, stakeholder and regulatory dimensions because equal headline scores can require very different responses.</p></div></li>
            <li><div><h3>Mitigate &amp; assign</h3><p>Document the response, accountable owner, information requirements, action dates and expected effect on probability or consequence.</p></div></li>
            <li><div><h3>Reassess residual risk</h3><p>After mitigation or new evidence, update the remaining exposure and determine whether the decision or contingency should change.</p></div></li>
            <li><div><h3>Observe the outcome</h3><p>Record whether the risk materialized, how the response performed and what the realized outcome teaches the next model and project.</p></div></li>
          </ul>
          <div className="notice notice-neutral mt-block"><span className="notice-label">Why this matters</span><p>It is the difference between a risk register that merely documents and a risk information record that helps decide.</p></div>
        </div>
      </section>
      </div>
    </>
  );
}
