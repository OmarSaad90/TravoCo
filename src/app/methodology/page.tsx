import type { Metadata } from "next";
import PageEffects from "@/components/PageEffects";

const OG_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "TRAVO — Total Risk Analysis and Value Optimization",
};

export const metadata: Metadata = {
  title: "Methodology — TRAVO",
  description:
    "TRAVO's decision architecture: how risk analysis, decision analysis and value optimization combine probability, simulation and governance into a defensible result.",
  alternates: { canonical: "/methodology" },
  openGraph: {
    type: "website",
    siteName: "TRAVO",
    locale: "en_US",
    url: "/methodology",
    title: "Methodology — TRAVO",
    description:
      "TRAVO's decision architecture: how risk analysis, decision analysis and value optimization combine probability, simulation and governance into a defensible result.",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Methodology — TRAVO",
    description:
      "TRAVO's decision architecture: how risk analysis, decision analysis and value optimization combine probability, simulation and governance into a defensible result.",
    images: [OG_IMAGE],
  },
};

export default function MethodologyPage() {
  return (
    <>
      <PageEffects />
      <div className="page" id="page-methodology" role="region" aria-label="methodology">
      <section className="section page-hero section-ink on-dark" aria-labelledby="methodology-title" id="methodology">
        <div className="wrap"><p className="kicker">Methodology</p><h1 id="methodology-title">The difference is not the software. It is the decision architecture.</h1><p className="lede editorial"><em>Probability, statistics, scenario analysis and simulation are tools inside a disciplined cycle of information, modeling, decision, observation and learning.</em></p></div>
      </section>
      <section className="section reveal" aria-labelledby="value-method-title">
        <div className="wrap"><div className="section-head"><p className="kicker">Purpose</p><h2 id="value-method-title">Risk analysis is the method. Decision analysis converts it into action. Value optimization is the result.</h2></div>
          <div className="arch-equation">
            <div className="eq-box"><p className="card-label">Information</p><h3>Evidence</h3><p>What do we know, what do we not know, and what information is worth obtaining?</p></div><div className="eq-arrow">→</div>
            <div className="eq-box"><p className="card-label">Risk assessment</p><h3>Uncertainty</h3><p>What can happen, how likely is it, what are the consequences, and which drivers matter?</p></div><div className="eq-arrow">→</div>
            <div className="eq-box"><p className="card-label">Decision analysis</p><h3>Alternatives</h3><p>Which courses of action are available, and how do they perform under uncertainty and stated objectives?</p></div><div className="eq-arrow">→</div>
            <div className="eq-box eq-result"><p className="card-label">Result</p><h3>Value Optimization</h3><p>Select the alternative, mitigation, contingency or strategy that produces the best risk-adjusted outcome for the decision-maker.</p></div>
          </div>
        </div>
      </section>
      <section className="section section-soft reveal" aria-labelledby="op-strat-title">
        <div className="wrap"><div className="section-head"><p className="kicker">Two management modes</p><h2 id="op-strat-title">Operational uncertainty and strategic uncertainty require<br />different treatment.</h2></div>
          <div className="grid grid-2">
            <div className="card"><p className="card-label">Operational management</p><h3>Within a selected strategy</h3><p>Near-term performance and uncertainty treated statistically: sensitivity analysis, probability distributions, Monte Carlo simulation, contingency, cost-to-complete, schedule and control decisions.</p></div>
            <div className="card"><p className="card-label">Strategic management</p><h3>Among materially different paths</h3><p>Longer-horizon alternatives treated through scenarios and decision analysis: delivery strategy, phasing, technology, construction strategy, make/buy, real options and recovery alternatives.</p></div>
          </div>
        </div>
      </section>
      <section className="section reveal" aria-labelledby="model-controls-title">
        <div className="wrap">
          <div className="section-head" style={{ maxWidth: "none", width: "100%" }}><p className="kicker">Model construction controls</p><h2 id="model-controls-title">A probabilistic model is only as defensible as the<br />structure behind its inputs.</h2><p className="lede col"><span className="travo-word">TRAVO</span> documents how uncertainty enters the model, how dependencies and judgment are handled, how risk money is classified, and how alternatives are tied to explicit objectives before simulation results are used to support a decision.</p></div>
          <div className="grid grid-3">
            <div className="card"><p className="card-label">Dependence &amp; correlation</p><h3>Do not assume independence by default</h3><p>Material dependencies, common-cause drivers and shared exposure are identified explicitly. Where inputs move together — through labor conditions, escalation, design maturity, site conditions, production systems or another common driver — the model represents that dependence when it can materially change the range, tails or decision.</p></div>
            <div className="card"><p className="card-label">Structured elicitation</p><h3>Expert judgment needs a protocol</h3><p>When data are incomplete, the uncertain quantity or event is defined precisely, available evidence and analogous experience are established, the rationale for ranges and probabilities is recorded, and the result is challenged for anchoring, optimism, availability effects, inconsistency and double counting before it enters the model.</p></div>
            <div className="card"><p className="card-label">Reference-class comparison</p><h3>Test the model against how comparable projects actually behaved</h3><p>Where relevant comparable projects exist, modeled ranges are compared with outcome history from an appropriately defined reference class rather than relying only on the current team&apos;s expectations. This outside view can reveal optimism, scope-definition effects or systemic uncertainty not adequately represented by project-specific assumptions or discrete event risks. The comparison is used only when the reference class is sufficiently comparable and the underlying data definitions and quality are understood; otherwise that limitation is stated rather than replaced with a convenient assumed distribution.</p></div>
            <div className="card"><p className="card-label">Risk capital</p><h3>Contingency · management reserve · escalation</h3><p>These are treated as different decision quantities rather than one undifferentiated risk allowance. Contingency is tied to modeled uncertainty within the defined project basis; management reserve is governed separately for higher-level or unplanned exposure; escalation represents time-dependent price or cost change. Purpose, control, release rules and potential overlap are made explicit for the engagement.</p></div>
            <div className="card"><p className="card-label">Risk allocation</p><h3>Who controls, bears and prices the uncertainty?</h3><p>Risk is tested as retained, transferred or shared, with attention to which party can control or mitigate it, how allocation affects price and incentives, and whether the practical allocation matches the way the work will actually be delivered. Legal interpretation and entitlement remain counsel&apos;s role. Ground risk is a useful example: a geotechnical baseline can establish the reference conditions against which subsurface uncertainty is priced and allocated, while the investigation supporting that baseline affects how confidently the remaining uncertainty can be characterized and modeled.</p></div>
            <div className="card"><p className="card-label">Objectives structuring</p><h3>Define value before ranking alternatives</h3><p>Before alternatives are compared, the decision frame identifies fundamental objectives, measurable criteria, constraints, preferences and material tradeoffs. Alternatives are then evaluated under uncertainty against that structure. This is the decision mechanics behind Value Optimization rather than a search for the lowest single-point cost.</p></div>
          </div>
          <div className="notice notice-neutral mt-block"><span className="notice-label">Model governance</span><p>Correlation assumptions, elicited inputs, reserve definitions, allocation assumptions and objective weights or preferences are documented at the level appropriate to the decision so that the analytical basis can be reviewed and challenged.</p></div>
        </div>
      </section>
      <section className="section section-ink on-dark reveal" aria-labelledby="experience-risk-title">
        <div className="wrap">
          <div className="section-head"><p className="kicker">Experience base</p><h2 id="experience-risk-title">Judgment has a source, and the source should be stated.</h2></div>
          <div className="two-col-split">
            <div>
              <p>Probability distributions and impact assessments are only as defensible as the information behind them. <span className="travo-word">TRAVO</span> identifies the source of material judgment in the engagement rather than blending different evidence into an unattributed claim of experience.</p>
              <p><strong>Direct operating experience.</strong> The principal served as Co-Founder, Partner and Advisor to the Board of a construction business that completed more than 170 infrastructure projects totaling over $1 billion of work. That operating context informs judgment about how estimates, production, sequencing and site conditions behave in delivery, as distinct from how they are represented in a model.</p>
              <p><strong>Engagement learning, under data rights.</strong> Where engagement work or post-project review produces reusable learning, it informs methods, templates or priors only where consent, confidentiality and data rights permit. Client work does not become research data automatically.</p>
              <p><strong>Public and published evidence.</strong> Legitimate public sources, relevant industry outcome data and peer-reviewed literature provide additional evidence for decision analysis, uncertainty, calibration and information-gathering choices.</p>
              <p><strong>Data gaps remain visible.</strong> Where a specific prior, range or assumption cannot be supported from these sources, the gap is recorded and reflected in the analysis rather than concealed by an assumed distribution.</p>
            </div>
            <div>
              <div className="card on-dark reveal ai-card" style={{ background: "var(--teal-dark)", border: "2px solid var(--coral)", padding: "clamp(1.25rem, 2.5vw, 1.75rem)" }}>
                <p className="card-label">AI-supported analysis — and its limits</p>
                <p>Where it strengthens the process, <span className="travo-word">TRAVO</span> applies analytical tools — informed by the principal&apos;s active research into AI applications in risk assessment — to surface recurring risk categories and early-warning indicators across historical review and lessons-learned data that traditional methods may overlook.</p>
                <p><strong>Such techniques remain strictly subordinate to expert judgment and established quantitative methods.</strong> The principal personally reviews and signs every analytical product.</p>
                <p>Client-specific records are used with such tools only under the applicable engagement, confidentiality, data-rights and approved information-handling controls.</p>
              </div>
              <div className="card on-dark reveal mt-block">
                <p className="card-label">Independence &amp; traceability</p>
                <p><span className="travo-word">TRAVO</span> does not take engagements from contractors and owners on the same project, does not enter referral, fee-sharing, reciprocal-referral or other commercial arrangements that could compromise — or reasonably appear to compromise — the independence of its analysis, and does not soften analysis to maintain client relationships. Every analysis is built on traceable inputs and documented assumptions, so it can be defended under serious scrutiny.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section reveal" aria-labelledby="observational-title">
        <div className="wrap">
          <div className="section-head"><p className="kicker">Observational method</p><h2 id="observational-title">Construction is an information-gathering phase.</h2><p className="lede editorial"><em>The plan is not frozen simply because construction has started. As uncertainty resolves, observations should update the model, the risk record and the decision.</em></p></div>
          <div className="two-col-split">
            <div><p>The observational approach is a direct bridge between the principal&apos;s doctoral risk work and construction management. It treats field performance, changes, production, cost, schedule and conditions as new evidence rather than as reporting after the fact.</p><p>The Decision Cycle expresses the same idea operationally: <strong>observe → learn → update → reassess → decide again.</strong></p></div>
            <div className="notice notice-neutral"><span className="notice-label">Decision consequence</span><p>Monitoring has value only when new information is allowed to change probabilities, consequences, forecasts, mitigation or strategy. A report that cannot change a decision is not the end product.</p></div>
          </div>
        </div>
      </section>
      <section className="section reveal" aria-labelledby="methods-title">
        <div className="wrap"><div className="section-head"><p className="kicker">Analytical methods</p><h2 id="methods-title">Quantification is used where it can change the decision —<br />the action, contingency, investigation, reserve or alternative selected.</h2></div>
          <div className="grid grid-3">
            <div className="card"><p className="card-label">Probability</p><h3>Distributions, not single points</h3><p>Represent uncertain cost and schedule outcomes as ranges with explicit likelihood rather than false precision.</p></div>
            <div className="card"><p className="card-label">Sensitivity</p><h3>Find the variables that matter</h3><p>Rank the assumptions and risk drivers that actually move the decision outcome.</p></div>
            <div className="card"><p className="card-label">Scenario analysis</p><h3>Compare different futures</h3><p>Use scenarios when alternatives are structurally different rather than merely uncertain values inside one plan.</p></div>
            <div className="card"><p className="card-label">Monte Carlo</p><h3>Quantify combined uncertainty</h3><p>Sample uncertain variables repeatedly to estimate the distribution of cost, schedule or other decision outcomes.</p></div>
            <div className="card"><p className="card-label">Decision analysis</p><h3>Alternatives + preferences</h3><p>Make objectives and tradeoffs explicit so the selected response follows from the decision-maker&apos;s priorities.</p></div>
            <div className="card"><p className="card-label">Value of information</p><h3>Evaluate information before you collect it</h3><p>Estimate the expected decision benefit of reducing uncertainty before obtaining more data, compare that benefit with the cost, delay and effort of collection, and gather the information only when its expected value justifies it. Where the decision structure supports formal valuation, <span className="travo-word">TRAVO</span> may express this as the <strong>expected value of perfect information (EVPI)</strong> — the upper bound on what eliminating the relevant uncertainty could be worth — and the <strong>expected value of sample information (EVSI)</strong>, the expected value of a specific imperfect investigation, observation or information-gathering action actually available. That expected benefit is compared with the cost, delay, disruption and other consequences of obtaining the information.</p></div>
          </div>
        </div>
      </section>
      <section className="section reveal" aria-labelledby="technical-depth-title">
        <div className="wrap">
          <div className="section-head"><p className="kicker">Technical depth</p><h2 id="technical-depth-title">The model must represent how project uncertainty<br />actually behaves.</h2><p className="lede col">These controls sit beneath the public Decision Cycle. They are applied where they are material to the engagement rather than forced into every model as a standard template.</p></div>
          <div className="grid grid-2">
            <div className="card"><p className="card-label">Systemic + event risk</p><h3>The risk register is not the whole uncertainty model</h3><p>Discrete event risks are modeled alongside systemic or background uncertainty embedded in estimate accuracy, productivity, design maturity, market conditions, schedule logic and execution assumptions. The analysis distinguishes named events from the common conditions that can move many cost items or activities at once.</p></div>
            <div className="card"><p className="card-label">Distribution selection &amp; validation</p><h3>Shape follows evidence and variable logic</h3><p>Distribution form, bounds, central tendency and tail behavior are selected from the nature of the uncertain variable and the evidence available rather than from a default template. Assumptions are documented and tested through sensitivity, reasonableness checks and comparison with relevant historical evidence where appropriate.</p></div>
            <div className="card"><p className="card-label">Bayesian updating</p><h3>Revise probabilities when evidence arrives</h3><p>Where uncertainty is updated sequentially, <span className="travo-word">TRAVO</span> uses Bayesian methods to combine prior information with new evidence and obtain an updated probability or distribution. This formalizes the observational method when priors and likelihoods can be specified credibly; the update remains traceable to the evidence that changed the model.</p></div>
            <div className="card"><p className="card-label">Schedule-risk note</p><h3>Merge bias · shifting critical paths · criticality · cruciality</h3><p>Deterministic CPM can hide path interaction when multiple predecessor paths converge. Schedule-risk analysis considers merge bias, simulates changing critical paths, and can use criticality index — the share of simulation iterations in which an activity or path is critical — to identify work that repeatedly drives completion risk. <strong>Cruciality</strong> can be expressed through the correlation between an activity&apos;s duration and the simulated project-completion outcome, helping show how strongly variation in that activity is associated with variation in completion. Criticality and cruciality answer different questions: one measures path frequency; the other helps measure outcome influence. Used together — and alongside uncertainty magnitude, controllability and mitigation leverage — they sharpen where management attention should focus. Deep CPM, delay and forensic schedule analysis remains specialist-supported where required. Where the decision requires it, the simulated completion-date distribution can also inform schedule contingency and the amount of time allowance appropriate to the selected confidence level.</p></div>
          </div>
          <div className="notice notice-neutral mt-block"><span className="notice-label">Engagement-specific application</span><p>Dependence structures, distributions, priors, likelihoods, schedule logic and model-validation checks are selected for the decision at hand and recorded in the methodology or QA file. Technical terminology does not substitute for a documented model basis.</p></div>
        </div>
      </section>
      <section className="section section-soft reveal" aria-labelledby="technical-basis-title">
        <div className="wrap">
          <div className="section-head"><p className="kicker">Technical basis</p><h2 id="technical-basis-title">Decision architecture first; technical rigor underneath it.</h2><p className="lede col">The quantitative tools are delivery methods, not the product. They remain visible enough that a buyer, reviewer or opposing expert can understand how the answer was produced.</p></div>
          <div className="grid grid-2">
            <div className="card"><p className="card-label">Percentiles</p><h3>P10 · P50 · P80</h3><p>Report distributions rather than a single point, with the adverse direction stated explicitly so a committee understands what a chosen confidence level means.</p></div>
            <div className="card"><p className="card-label">Sensitivity</p><h3>Tornado / dominant-driver analysis</h3><p>Rank the variables that move the outcome so mitigation effort and information gathering focus on what can actually change the decision.</p></div>
            <div className="card"><p className="card-label">Contingency</p><h3>Derived, not habitual</h3><p>Contingency is related to the modeled distribution and the decision-maker&apos;s selected confidence level rather than carried as an unexplained percentage. This makes visible the cost of both under- and over-holding capital.</p></div>
            <div className="card"><p className="card-label">Integrated analysis</p><h3>Cost + schedule</h3><p>Where the decision requires it, analyze cost and schedule uncertainty together rather than as unrelated narratives.</p></div>
          </div>
          <div className="notice notice-neutral mt-block"><span className="notice-label">Standards &amp; method references</span><p>The source methodology draws on established AACE Recommended Practices, including 41R-08 for risk analysis / contingency using range estimating and 57R-09 for integrated cost-and-schedule risk analysis, together with other applicable AACE quantitative-risk guidance. Where schedule-risk analysis is material to the engagement, relevant schedule-risk guidance, including 64R-11 where applicable, may also inform the analysis. The exact Recommended Practice edition and provisions relied upon are recorded for the engagement. The method is documented, traceable and tool-agnostic; software follows the problem rather than defining the practice.</p></div>
        </div>
      </section><section className="section section-soft reveal" aria-labelledby="graphics-title">
        <div className="wrap">
          <div className="section-head"><p className="kicker">Illustrative analytical graphics</p><h2 id="graphics-title">The outputs should make the decision legible.</h2><p className="lede col">These figures are illustrative methodology examples — not project data. They show the kinds of outputs by which uncertainty, contingency and dominant drivers are communicated.</p></div>
          <div className="grid grid-2">
            <figure className="fig reveal" role="figure" aria-labelledby="fig-dist-t" aria-describedby="fig-dist-d">
              <figcaption className="fig-title" id="fig-dist-t">Fig. 01 — Simulated cost distribution with P10 / P50 / P80</figcaption>
              <svg viewBox="0 0 700 292" role="img" aria-label="Illustrative right-skewed cost distribution from a Monte Carlo simulation. Dashed lines mark P10 on the favorable side, P50 near the center of the distribution in the teal band, and P80 toward the adverse side. Shading moves from dark teal on the lower-cost side through teal at the center, light blue and light coral in transition, to coral in the high-cost adverse tail.">
                <rect x="50" y="227" width="24" height="9" fill="#14403F" /><rect x="79" y="219" width="24" height="17" fill="#14403F" /><rect x="108" y="204" width="24" height="32" fill="#14403F" /><rect x="137" y="184" width="24" height="52" fill="#14403F" /><rect x="166" y="158" width="24" height="78" fill="#14403F" /><rect x="195" y="129" width="24" height="107" fill="#14403F" /><rect x="224" y="100" width="24" height="136" fill="#14403F" /><rect x="253" y="76" width="24" height="160" fill="#71D2CF" /><rect x="282" y="62" width="24" height="174" fill="#71D2CF" /><rect x="311" y="56" width="24" height="180" fill="#71D2CF" /><rect x="340" y="62" width="24" height="174" fill="#71D2CF" /><rect x="369" y="74" width="24" height="162" fill="#71D2CF" /><rect x="398" y="91" width="24" height="145" fill="#C5ECFE" /><rect x="427" y="111" width="24" height="125" fill="#C5ECFE" /><rect x="456" y="132" width="24" height="104" fill="#C5ECFE" /><rect x="485" y="152" width="24" height="84" fill="#C5ECFE" /><rect x="514" y="169" width="24" height="67" fill="#FFB9BB" /><rect x="543" y="187" width="24" height="49" fill="#FFB9BB" /><rect x="572" y="198" width="24" height="38" fill="#FFB9BB" /><rect x="601" y="210" width="24" height="26" fill="#FF5B5E" /><rect x="630" y="219" width="24" height="17" fill="#FF5B5E" /><rect x="659" y="224" width="24" height="12" fill="#FF5B5E" />
                <line x1="178" y1="44" x2="178" y2="236" stroke="#242543" strokeWidth="1.5" strokeDasharray="4 4" /><text x="178" y="36" textAnchor="middle" style={{ fontFamily: "var(--mono)" }} fontSize="12" fill="#242543">P10</text><line x1="323" y1="44" x2="323" y2="236" stroke="#242543" strokeWidth="1.5" strokeDasharray="4 4" /><text x="323" y="36" textAnchor="middle" style={{ fontFamily: "var(--mono)" }} fontSize="12" fill="#242543">P50</text><line x1="468" y1="44" x2="468" y2="236" stroke="#242543" strokeWidth="1.5" strokeDasharray="4 4" /><text x="468" y="36" textAnchor="middle" style={{ fontFamily: "var(--mono)" }} fontSize="12" fill="#242543">P80</text><line x1="44" y1="236" x2="686" y2="236" stroke="#242543" strokeWidth="1" /><text x="50" y="266" style={{ fontFamily: "var(--mono)" }} fontSize="11" fill="#242543" letterSpacing="1">SIMULATED COST AT COMPLETION — ADVERSE DIRECTION: HIGHER COST &#8594;</text>
              </svg>
              <ul className="risk-legend"><li><span className="swatch swatch-teal-dark"></span> Lower risk / controlled side</li><li><span className="swatch swatch-teal"></span> Centered result (P50 region)</li><li><span className="swatch swatch-blue-light"></span> Transition toward center</li><li><span className="swatch swatch-coral-light"></span> Elevated exposure</li><li><span className="swatch swatch-coral"></span> Adverse tail</li></ul>
              <p className="fig-desc" id="fig-dist-d">Each percentile states a point on the simulated cost distribution: P10 means 10 percent of simulated outcomes are at or below this value, P50 is the median, and P80 means 80 percent are at or below this value. The gap between the base estimate and a chosen percentile is the derived contingency. In this figure, higher cost is the adverse direction.</p>
              <p className="spec">Illustrative methodology example — not project data.</p>
            </figure>
            <figure className="fig reveal" role="figure" aria-labelledby="fig-tor-t" aria-describedby="fig-tor-d">
              <figcaption className="fig-title" id="fig-tor-t">Fig. 02 — Tornado (sensitivity) chart</figcaption>
              <svg viewBox="0 0 700 320" role="img" aria-label="Illustrative tornado chart. Five generic risk drivers are ranked from largest to smallest influence on the cost outcome. For each driver, a dark-teal bar extends left of the center line showing favorable swing, and a coral or light-coral bar extends right showing adverse swing; the widest bars sit at the top.">
                <line x1="400" y1="44" x2="400" y2="286" stroke="#242543" strokeWidth="1.5" />
                <text x="24" y="73" style={{ fontFamily: "var(--sans)" }} fontSize="13" fill="#242543">Driver 01 — e.g. subsurface conditions</text><rect x="280" y="58" width="120" height="22" fill="#14403F" /><rect x="400" y="58" width="190" height="22" fill="#FF5B5E" />
                <text x="24" y="117" style={{ fontFamily: "var(--sans)" }} fontSize="13" fill="#242543">Driver 02 — e.g. design maturity at award</text><rect x="304" y="102" width="96" height="22" fill="#14403F" /><rect x="400" y="102" width="158" height="22" fill="#FF5B5E" />
                <text x="24" y="161" style={{ fontFamily: "var(--sans)" }} fontSize="13" fill="#242543">Driver 03 — e.g. labor productivity</text><rect x="318" y="146" width="82" height="22" fill="#71D2CF" /><rect x="400" y="146" width="126" height="22" fill="#FFB9BB" />
                <text x="24" y="205" style={{ fontFamily: "var(--sans)" }} fontSize="13" fill="#242543">Driver 04 — e.g. permitting duration</text><rect x="340" y="190" width="60" height="22" fill="#71D2CF" /><rect x="400" y="190" width="96" height="22" fill="#FFB9BB" />
                <text x="24" y="249" style={{ fontFamily: "var(--sans)" }} fontSize="13" fill="#242543">Driver 05 — e.g. material price escalation</text><rect x="356" y="234" width="44" height="22" fill="#C5ECFE" /><rect x="400" y="234" width="66" height="22" fill="#FFB9BB" />
                <text x="392" y="306" textAnchor="end" style={{ fontFamily: "var(--mono)" }} fontSize="11" fill="#242543" letterSpacing="1">&#8592; FAVORABLE SWING</text><text x="408" y="306" style={{ fontFamily: "var(--mono)" }} fontSize="11" fill="#242543" letterSpacing="1">ADVERSE SWING (HIGHER COST) &#8594;</text>
              </svg>
              <ul className="risk-legend"><li><span className="swatch swatch-teal-dark"></span> Favorable swing</li><li><span className="swatch swatch-teal"></span> Favorable swing (slight)</li><li><span className="swatch swatch-blue-light"></span> Transition swing</li><li><span className="swatch swatch-coral-light"></span> Adverse swing — elevated</li><li><span className="swatch swatch-coral"></span> Adverse swing — largest exposure</li></ul>
              <p className="fig-desc" id="fig-tor-d">Tornado analysis ranks the input uncertainties by their influence on the simulated outcome: each bar shows how far the result swings when one driver moves across its plausible range while others are held at expected values. The ranking directs management attention — and mitigation spend — to the few drivers that actually move the answer.</p>
              <p className="spec">Illustrative methodology example — not project data.</p>
            </figure>
          </div>
        </div>
      </section>

      <section className="section reveal" aria-labelledby="engagement-shape-title">
        <div className="wrap">
          <div className="section-head"><p className="kicker">How an engagement works</p><h2 id="engagement-shape-title">Defined decision. Documented method. Quantified result.<br />Accountable sign-off.</h2></div>
          <div className="grid grid-4">
            <div className="card"><p className="card-label">01</p><h3>A decision to inform</h3><p>Underwriting, contingency, monitoring, drift, procurement, recovery, pre-claim or another consequential project decision.</p></div>
            <div className="card"><p className="card-label">02</p><h3>A documented methodology</h3><p>Sources, assumptions, data gaps, models, sensitivity, scenarios and probability methods appropriate to the question.</p></div>
            <div className="card"><p className="card-label">03</p><h3>A quantified result</h3><p>Ranges, percentiles, dominant drivers, contingency implications or structured alternative comparisons expressed in decision terms.</p></div>
            <div className="card"><p className="card-label">04</p><h3>Principal accountability</h3><p>The analytical answer is reviewed, explained and signed by the principal under the engagement&apos;s stated QA and reliance controls.</p></div>
          </div>
        </div>
      </section>
      <section className="section section-ink on-dark reveal" aria-labelledby="governance-title" id="governance">
        <div className="wrap"><div className="section-head"><p className="kicker">Governance &amp; assurance</p><h2 id="governance-title">A decision others may rely on needs controls they can inspect.</h2><p className="lede">Governance is not a separate service. It is the assurance shell around the Decision Cycle.</p></div>
          <div className="grid grid-2">
            <div className="card on-dark"><p className="card-label">Acceptance</p><h3>Conflict &amp; role sequencing</h3><p>Identify the client, adverse parties, prior roles and future dispute-role constraints before scope is accepted. A monitoring or underwriting role can restrict a later testimony role.</p></div>
            <div className="card on-dark"><p className="card-label">Reliance</p><h3>Scope, purpose &amp; permitted reliance</h3><p>Where reliance is permitted, the engagement terms or reliance letter identify the decision supported, addressee or permitted users, report limitations, permitted reliance, and any insurance or other reliance requirements before delivery.</p></div>
            <div className="card on-dark"><p className="card-label">Quality assurance</p><h3>Traceable inputs · proportionate review · principal sign-off</h3><p>Assumptions, data gaps, source records and model checks remain reviewable. Independent review is used where appropriate to the scope, complexity and reliance of the engagement; every analytical product is personally reviewed and signed by the principal.</p></div>
            <div className="card on-dark"><p className="card-label">Data</p><h3>Confidentiality &amp; research separation</h3><p>Data access, confidentiality, storage, retention and research separation are defined as part of the applicable engagement requirements. Client data does not become research data automatically.</p></div>
            <div className="card on-dark"><p className="card-label">Professional boundary</p><h3>Engineering, accounting, field &amp; forensic specialties</h3><p>Where the question requires a licensed engineer, construction CPA, field monitor, specialist scheduler, quantum expert or other discipline, that role is identified and appropriately qualified support is incorporated.</p></div>
            <div className="card on-dark"><p className="card-label">Disputes</p><h3>Counsel controls legal questions</h3><p><span className="travo-word">TRAVO</span> analyzes technical cost, schedule, controls and quantum. Counsel determines entitlement, legal risk allocation and claim strategy; privilege and work-product questions depend on the engagement structure, applicable law and the circumstances of the matter.</p></div>
            <div className="card on-dark"><p className="card-label">University separation</p><h3>Commercial work stands on its own</h3><p>The principal&apos;s external practice is handled under applicable Stevens outside-activity and conflict requirements. <span className="travo-word">TRAVO</span> commercial engagements and training are separate from university courses and do not imply Stevens endorsement or sponsorship.</p></div>
            <div className="card on-dark"><p className="card-label">Capacity</p><h3>Who does the work is part of the proposal</h3><p>Scope, delivery calendar, principal involvement and specialist participation are stated before engagement so the principal-led specialist model does not imply capacity beyond what is stated.</p></div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
