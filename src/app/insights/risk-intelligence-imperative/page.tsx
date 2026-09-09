import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Link from "next/link";

import { SITE_URL } from "@/lib/site";
import ArticleEffects from "./ArticleEffects";
import DotField from "./DotField";
import "../insights.css";

/**
 * The article's body face. It is loaded here rather than in the root layout so
 * the eight faces are only fetched for this route — no other page uses it.
 *
 * Loading it at all is what made `--gotham` in globals.css drop its literal
 * "Montserrat" entry: next/font registers Google families under their real
 * name, so a stack that merely *names* a family it never loaded starts matching
 * the moment some other route loads it. See the note there.
 */
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
  display: "swap",
});

const PATH = "/insights/risk-intelligence-imperative";
const TITLE = "The Risk Intelligence Imperative \u2014 TRAVO Insights";
const DESCRIPTION =
  "Construction and engineering risk intelligence, 2026\u20132031: quantified risk, contingency, reference-class forecasting, decision analysis and continuous, auditable risk models. Independent, principal-led analysis from TRAVO \u2014 New Jersey / New York metropolitan region.";
const PUBLISHED = "2026-07-01";
const AUTHOR = "Dr. Karim S. Karam";

const OG_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "TRAVO \u2014 Total Risk Analysis and Value Optimization",
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "construction risk intelligence",
    "quantified risk",
    "project contingency",
    "reference-class forecasting",
    "Monte Carlo cost schedule risk",
    "decision analysis",
    "value of information",
    "independent construction risk advisory",
    "New Jersey New York",
  ],
  authors: [{ name: AUTHOR }],
  alternates: { canonical: PATH },
  openGraph: {
    type: "article",
    siteName: "TRAVO",
    locale: "en_US",
    url: PATH,
    title: TITLE,
    description: DESCRIPTION,
    publishedTime: PUBLISHED,
    authors: [AUTHOR],
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "A 2026\u20132031 outlook on construction and engineering risk intelligence from TRAVO.",
    images: [OG_IMAGE],
  },
};

/**
 * His file carried Article schema of its own. Kept, with the URLs pointed at
 * the real origin \u2014 the reference used a placeholder domain throughout.
 */
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Risk Intelligence Imperative",
  description: DESCRIPTION,
  datePublished: PUBLISHED,
  author: { "@type": "Person", name: AUTHOR },
  publisher: { "@type": "Organization", name: "TRAVO", url: SITE_URL },
  mainEntityOfPage: `${SITE_URL}${PATH}`,
};

export default function RiskIntelligenceImperativePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className={`travo-doc ${montserrat.variable}`} id="page-insight-rii">
        <div id="progress" aria-hidden="true"></div>
        <header className="hero" id="top">
          <div className="hero-in">
            <p className="eyebrow"><span style={{ color: "var(--coral-light)" }}>TRAVO Forecast 2026–2031</span></p>
            <h1>The Risk Intelligence Imperative</h1>
            <p className="hero-dek">By 2031, continuous, AI-enabled risk intelligence will become a condition of competing for many major engineering projects — emerging first through insurance pricing and procurement prequalification, with professional and legal expectations evolving more gradually. Firms that remain dependent on static risk documents will face what we call the <strong>“analog penalty”</strong>: a growing disadvantage in insurance terms, procurement competitiveness, and the defensibility of professional judgment.</p>
            <div className="hero-meta">
              <span><b>A five-year outlook</b> for owners, engineers, insurers, and investors</span>
              <span>by <b>Dr. Karim S. Karam</b> · Principal, TRAVO</span>
              <span>July 2026 · travo.co</span>
            </div>
          </div>
          <DotField />
        </header>

        <div className="doc-main">

        <section className="ti-section" id="why">
          <div className="section-in">
            <div style={{ maxWidth: "72ch", marginLeft: "auto", marginRight: "auto" }}>
            <p className="ti-kicker">Why this question matters</p>
            <blockquote className="pull" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>“We can see every crack in the bridge. Why can&rsquo;t we see the risk in the project?”</blockquote>
            <div className="prose rv">
              <p>A public-works director asked us a version of this question last winter, and it deserves a serious answer. Her agency operates sensors that report structural strain in near real time. Yet the risk assessment governing her <span className="nw">$400 million</span> capital program was a spreadsheet, last updated at the previous stage gate, built on assumptions already three quarters old.</p>
              <p>That gap — between what is now <em>observable</em> and what is actually <em>assessed</em> — defines the next five years of engineering risk management.</p>
              <p>The pressure is arriving from three directions at once. First, the sheer scale of exposure: the American Society of Civil Engineers&rsquo; 2025 Report Card raised US infrastructure to its highest-ever grade, a C, but still identified a <span className="nw">$9.1 trillion</span> investment need through 2033 against roughly <span className="nw">$5.4 trillion</span> in planned funding — a <span className="nw">$3.7 trillion</span> gap that guarantees aging assets will be pushed harder for longer. Second, the record of the profession: across the largest project database ever assembled — more than <span className="nw">16,000</span> major projects — only about one in two hundred delivers on budget, on time, and on benefits. Third, the environment itself: 2025 marked the sixth consecutive year in which insured natural-catastrophe losses exceeded <span className="nw">$100 billion</span>, and insurers are re-pricing accordingly.</p>
              <p>Meanwhile, the tools have finally changed. AI adoption in architecture, engineering, and construction remains a minority practice — roughly a quarter of respondents in a recent industry survey — but nearly all current adopters plan to expand. In parallel, legal and professional commentary is beginning to examine whether the availability of predictive tools could eventually influence how reasonable care is assessed; that channel remains less developed than the insurance and procurement signals in this outlook.</p>
              <p>When observability rises, capital tightens, losses climb, and professional expectations evolve, risk assessment stops being a compliance artifact. It becomes a competitive instrument. This report examines how that transition will unfold between 2026 and 2031 — and what leaders should do before the market prices it for them.</p>
            </div>
            <p className="smallnote" style={{ marginTop: "1.6rem" }}>Sources: ASCE, 2025 Report Card for America&rsquo;s Infrastructure; Flyvbjerg &amp; Gardner, <em>How Big Things Get Done</em> (2023) and the Oxford/ITU megaproject database; Swiss Re Institute, sigma 1/2026; Bluebeam AEC survey, 2025.</p>
            </div>
          </div>
        </section>

        <section className="ti-section" id="summary">
          <div className="section-in">
            <div style={{ maxWidth: "72ch", marginLeft: "auto", marginRight: "auto" }}>
            <p className="ti-kicker">Executive summary</p>
            <h2>Seven things to know</h2>
            <ol className="execlist rv">
              <li><b>The prediction.</b> By 2031, continuous AI-enabled risk intelligence — live data feeds, model-based forecasting, auditable risk registers — will be a de facto condition of doing business on major engineering projects, enforced not by regulation first but by insurers, lenders, and procurement officers.</li>
              <li><b>Why it will happen.</b> Four forces converge this cycle: a <span className="nw">$3.7 trillion</span> US infrastructure funding gap that forces owners to sweat aging assets; six straight years of <span className="nw">$100B+</span> insured catastrophe losses hardening insurance markets; a step-change in sensing and AI capability (AEC AI use is doubling, with 94% of adopters expanding); and an emerging legal and professional debate over whether failing to consider available predictive tools could eventually affect the standard-of-care analysis.</li>
              <li><b>What changes first.</b> Insurance underwriting and owner prequalification. Carriers already price cyber and property risk using increasingly granular data. Our base-case expectation: by 2028, data-conditioned insurance terms and risk-data requirements begin appearing more visibly on major programs.</li>
              <li><b>Who is most affected.</b> Mid-sized engineering and construction firms — large enough to bid instrumented megaprojects, too small to fund enterprise risk platforms alone — face the sharpest squeeze. Owners and insurers capture the early value; unprepared operators absorb the cost.</li>
              <li><b>The economics are asymmetric.</b> With megaproject overruns averaging 30–100% by asset class and only ~0.5% of projects hitting all targets, even modest predictive improvement is worth multiples of its cost. The primary barriers are increasingly less about theoretical ROI than about data quality, governance, implementation, and trust.</li>
              <li><b>What leaders should do now.</b> Inventory risk-relevant data assets; pilot continuous risk monitoring on one live program; assign clear decision rights for model-informed judgments; open early conversations with carriers and lenders about data-for-terms exchanges.</li>
              <li><b>What to watch.</b> Insurer filings that reference telemetry or AI-assisted underwriting for construction lines; owner RFQs requiring live risk dashboards; the first litigated claim turning on non-use of available predictive tools; post-IIJA federal funding decisions in 2026.</li>
            </ol>
            </div>
            <div className="brief-cta no-print" style={{ maxWidth: "72ch", marginLeft: "auto", marginRight: "auto" }}>
              <Link className="ti-btn ti-btn-outline" href="/insights/risk-intelligence-imperative/executive-brief">One-page brief · Print / Save PDF</Link>
              <span className="hint">Board-ready · one page</span>
            </div>
          </div>
        </section>

        <section className="ti-section" id="in-practice">
          <div className="section-in">
            <div style={{ maxWidth: "72ch", marginLeft: "auto", marginRight: "auto" }}>
            <p className="ti-kicker">Where this connects to practice</p>
            <div className="practice-note rv">
              <span className="pn-label">In practice</span>
              <p>The capabilities this outlook describes are not a distant program. <a href="/methodology">TRAVO&apos;s decision-first method</a> already works this way: uncertainty is quantified rather than rated, field evidence updates the model through an observational approach, the Value of Information decides what is worth investigating before commitment, reference-class comparison tests the forecast against how comparable projects actually behaved, and every analytical answer leaves an auditable decision record.</p>
              <p>The entry point is bounded, not enterprise-wide. A <b><a href="/services#svc-a1">Project Risk Screen</a></b> establishes the current information state, isolates the few drivers that matter, and tests whether the existing forecast or reserve is still credible — the first move when a live decision cannot wait for the market to price the difference.</p>
            </div>
            </div>
          </div>
        </section>

        <section className="ti-section" id="prediction">
          <div className="section-in">
            <p className="ti-kicker">The central prediction</p>
            <div className="pred rv">
              <span className="lbl">Our prediction</span>
              <p>By 2031, continuous AI-enabled risk intelligence will become a condition of competing for many major engineering and infrastructure programs in advanced markets. We expect the shift to emerge first through insurance pricing and procurement prequalification, with professional and legal expectations evolving more gradually. The result will be what we call the “analog penalty”: a growing economic and competitive disadvantage for firms that cannot produce timely, auditable evidence of how project risk is changing. Our evidence assessment is <em>strongest for the insurance and procurement channels</em> and <em>more tentative for the legal channel</em>; these labels describe the strength of the supporting evidence and mechanism, not statistical probabilities. Evidence strength: insurance — strong and emerging; procurement — strong directional case; professional/legal — developing.</p>
            </div>
            <div className="tri">
              <div className="why rv">
                <h3>Why now</h3>
                <ul>
                  <li><b>Capital scarcity meets asset age.</b> A <span className="nw">$3.7T</span> US funding shortfall through 2033 means more risk carried per dollar of maintenance.</li>
                  <li><b>Insurance repricing.</b> Six consecutive years above <span className="nw">$100B</span> in insured nat-cat losses; across insurance markets, carriers increasingly use verifiable risk and mitigation data to differentiate capacity and terms. The critical question for this outlook is how quickly that logic extends into construction and professional-risk underwriting.</li>
                  <li><b>Capability inflection.</b> AEC AI use roughly doubled into 2026 from a low base (~27% of firms), with near-universal expansion intent; ~33% CAGR market growth projected.</li>
                  <li><b>Liability migration.</b> Legal and professional commentary is beginning to examine whether available predictive tools could eventually inform reasonable-care expectations; the timing and direction remain uncertain.</li>
                  <li><b>Workforce arithmetic.</b> 20+ job openings per net new job in critical trades makes tacit risk judgment structurally scarcer, forcing codification.</li>
                </ul>
              </div>
              <div className="rv" id="what-changes">
                <h3>What changes</h3>
                <ul>
                  <li>Risk assessment shifts from periodic documents to continuous, versioned, auditable risk models.</li>
                  <li>Insurance and bonding terms become explicitly data-conditioned on major programs.</li>
                  <li>Owner prequalification adds risk-data maturity alongside safety record and financials.</li>
                  <li>The risk engineer&rsquo;s role bifurcates: model stewardship and judgment governance replace manual register maintenance.</li>
                  <li>Reference-class, outside-view forecasting becomes an expected discipline, not an academic novelty.</li>
                </ul>
              </div>
              <div className="rv">
                <h3>What leaders should do</h3>
                <ul>
                  <li>Start with one live decision: establish the current information state, quantify the range, identify the few drivers that matter, and define what new evidence would trigger reassessment.</li>
                  <li>Run one continuous-monitoring pilot on a live program within 12 months, instrumented for before/after comparison; build the enterprise risk-data backbone only after the pilot establishes what information and governance are actually decision-relevant.</li>
                  <li>Codify decision rights: which decisions may rely on model output, with what human review.</li>
                  <li>Negotiate data-for-terms pilots with one carrier and one lender before the market standardizes.</li>
                  <li>Pair senior judgment with model-literate staff before retirements erase the former.</li>
                </ul>
              </div>
            </div>
            <p className="smallnote" style={{ marginTop: "1.6rem" }}>Sources: ASCE 2025 Report Card; Swiss Re Institute sigma 1/2026; Munich Re NatCat 2025; Bluebeam, <em>2026 AEC Technology Outlook</em> (released 2025); McKinsey, “Tradespeople wanted” (2024).</p>
          </div>
        </section>

        <section className="ti-section" id="forces">
          <div className="section-in">
            <p className="ti-kicker">The “why now” forces</p>
            <h2>Five forces, one window</h2>
            <div className="prose rv">
              <p>Each of these forces has existed in some form for a decade. What is new is their simultaneity. Funding pressure without capability would produce rationing; capability without insurance pressure would produce pilots that never scale. Together, they produce a market mechanism: <span className="lead-in">risk data becomes exchangeable for capital, capacity, and work.</span></p>
            </div>

            <figure className="exhibit rv" role="group" aria-label="Exhibit 1">
              <div className="ex-head">
                <span className="ex-no">Exhibit 1</span>
                <p className="ex-title">Five forces are converging on a single window — and each is measurable today.</p>
                <p className="ex-sowhat">The forces reinforce one another; leaders should plan for compound, not sequential, pressure.</p>
              </div>
              <div className="ex-body">
                <svg viewBox="0 0 1000 450" style={{ width: "100%", height: "auto" }} role="img" aria-label="Convergence diagram: five force arrows meeting at a central node labelled risk intelligence becomes priced, 2026 to 2028 window.">
                  <defs>
                    <marker id="ah-t" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L8,4.5 L0,9 Z" fill="#71D2CF" /></marker>
                    <marker id="ah-c" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L8,4.5 L0,9 Z" fill="#FF5B5E" /></marker>
                  </defs>
          
                  <g fontFamily="'Hanken Grotesk',sans-serif">
            
                    <rect x="10" y="14" width="342" height="72" rx="0" fill="#E0F5F4" stroke="#71D2CF" />
                    <text x="26" y="38" fontSize="13.5" fontWeight="700" fill="#242543">Capital &amp; Funding Shift · Tightening</text>
                    <text x="26" y="57" fontSize="11.5" fill="#6E6F83">$3.7T US infrastructure gap;</text>
                    <text x="26" y="74" fontSize="11.5" fill="#6E6F83">IIJA authorizations expire FY2026</text>
                    <line x1="352" y1="50" x2="610" y2="188" stroke="#71D2CF" strokeWidth="2.5" markerEnd="url(#ah-t)" />
            
                    <rect x="10" y="104" width="342" height="72" rx="0" fill="#E0F5F4" stroke="#71D2CF" />
                    <text x="26" y="128" fontSize="13.5" fontWeight="700" fill="#242543">Insurance &amp; Climate Pressure · Hardening</text>
                    <text x="26" y="147" fontSize="11.5" fill="#6E6F83">6th straight year &gt;$100B insured losses;</text>
                    <text x="26" y="164" fontSize="11.5" fill="#6E6F83">LA fires approx. $40B insured</text>
                    <line x1="352" y1="140" x2="612" y2="205" stroke="#71D2CF" strokeWidth="2.5" markerEnd="url(#ah-t)" />
            
                    <rect x="10" y="194" width="342" height="72" rx="0" fill="#E0F5F4" stroke="#71D2CF" />
                    <text x="26" y="218" fontSize="13.5" fontWeight="700" fill="#242543">Technology Shift · Accelerating</text>
                    <text x="26" y="237" fontSize="11.5" fill="#6E6F83">AEC AI use doubling; 94% of adopters expanding;</text>
                    <text x="26" y="254" fontSize="11.5" fill="#6E6F83">~33% CAGR market growth</text>
                    <line x1="352" y1="230" x2="614" y2="222" stroke="#71D2CF" strokeWidth="2.5" markerEnd="url(#ah-t)" />
            
                    <rect x="10" y="284" width="342" height="72" rx="0" fill="#FFE7E8" stroke="#FF5B5E" />
                    <text x="26" y="308" fontSize="13.5" fontWeight="700" fill="#242543">Legal / Standard-of-Care Shift · Emerging</text>
                    <text x="26" y="327" fontSize="11.5" fill="#6E6F83">Non-use of predictive tools entering</text>
                    <text x="26" y="344" fontSize="11.5" fill="#6E6F83">professional and legal debate</text>
                    <line x1="352" y1="320" x2="612" y2="240" stroke="#FF5B5E" strokeWidth="2.5" strokeDasharray="7 5" markerEnd="url(#ah-c)" />
            
                    <rect x="10" y="374" width="342" height="72" rx="0" fill="#E0F5F4" stroke="#71D2CF" />
                    <text x="26" y="398" fontSize="13.5" fontWeight="700" fill="#242543">Workforce Shift · Structural</text>
                    <text x="26" y="417" fontSize="11.5" fill="#6E6F83">&gt;20 openings per net new job in critical trades;</text>
                    <text x="26" y="434" fontSize="11.5" fill="#6E6F83">senior supervisors retiring</text>
                    <line x1="352" y1="410" x2="609" y2="257" stroke="#71D2CF" strokeWidth="2.5" markerEnd="url(#ah-t)" />
            
                    <circle cx="756" cy="222" r="120" fill="#71D2CF" />
                    <circle cx="756" cy="222" r="120" fill="none" stroke="#14403F" strokeWidth="3" />
                    <text x="756" y="193" textAnchor="middle" fontSize="15.5" fontWeight="700" fill="#14403F">TRAVO Base Case:</text>
                    <text x="756" y="215" textAnchor="middle" fontSize="15.5" fontWeight="700" fill="#14403F">Risk Intelligence Priced</text>
                    <text x="756" y="249" textAnchor="middle" fontSize="12" fill="#14403F" fontFamily="'IBM Plex Mono',monospace">2026–28 Activation Window</text>
                  </g>
                </svg>
              </div>
              <figcaption className="ex-src"><b>Source:</b> ASCE (2025); Swiss Re Institute (2026); Munich Re (2026); Bluebeam (2025); McKinsey (2024, 2022); industry legal commentary (2025–26). Dashed coral arrow marks the least certain, highest-consequence force.</figcaption>
            </figure>
          </div>
        </section>

        <section className="ti-section" id="baseline">
          <div className="section-in">
            <p className="ti-kicker">Current state</p>
            <h2>A paradox baseline: total observability, unchanged practice</h2>
            <div className="prose rv" id="baseline-prose">
              <p><span className="lead-in">How risk is assessed today.</span> The modal practice on engineering programs remains stage-gated and document-based: qualitative registers scored on likelihood-impact matrices, quantitative schedule and cost risk analysis at major gates, and contingency set by percentage heuristics. ISO&nbsp;31000 and sector codes shape vocabulary more than cadence. Between gates, the risk picture is effectively frozen.</p>
              <p><span className="lead-in">What it produces.</span> The outside record is unambiguous. In the Oxford-lineage database of more than <span className="nw">16,000</span> major projects, only about 0.5% deliver on budget, on time, and with promised benefits — patterns that have remained remarkably persistent across decades. Whatever improvements the industry has made in documentation and project controls, forecast error remains stubborn.</p>
              <p><span className="lead-in">What has changed underneath.</span> Observability. Structural-health sensors, drone photogrammetry, computer-vision site monitoring, connected equipment telemetry, and digital twins now generate continuous risk-relevant data on ordinary projects — data that mostly never reaches the risk register.</p>
              <p><span className="lead-in">The cost of the gap.</span> Beyond overruns, the churn economics are stark: annual hiring in critical trades runs more than twenty times net new job creation, an estimated <span className="nw">$5.3B</span> per year in acquisition and training costs alone — and every departure removes tacit risk judgment that documents never captured.</p>
            </div>

            <figure className="exhibit rv" role="group" aria-label="Exhibit 2">
              <div className="ex-head">
                <span className="ex-no">Exhibit 2</span>
                <p className="ex-title">Decades of more sophisticated project controls have not eliminated persistent forecasting error.</p>
                <p className="ex-sowhat">The failure is structural, not informational — more of the same assessment practice will not close the gap.</p>
              </div>
              <div className="ex-body">
                <p style={{ fontSize: ".8rem", color: "var(--mut)", marginBottom: "1rem", fontFamily: "var(--mono)" }}>Average real cost overrun at decision-to-build, by asset class (%)</p>
                <div className="bars" id="overrunBars">
                  <div className="bar-row"><span className="bar-label">Roads</span><span className="bar-track"><span className="bar-fill" data-w="12.7"></span></span><span className="bar-val">~20%</span></div>
                  <div className="bar-row"><span className="bar-label">Bridges &amp; tunnels</span><span className="bar-track"><span className="bar-fill" data-w="22.3"></span></span><span className="bar-val">~35%</span></div>
                  <div className="bar-row"><span className="bar-label">Rail</span><span className="bar-track"><span className="bar-fill" data-w="25.5"></span></span><span className="bar-val">~40%</span></div>
                  <div className="bar-row"><span className="bar-label">IT-intensive programs</span><span className="bar-track"><span className="bar-fill" data-w="46.5"></span></span><span className="bar-val">~73%</span></div>
                  <div className="bar-row"><span className="bar-label">Dams</span><span className="bar-track"><span className="bar-fill" data-w="61.1"></span></span><span className="bar-val">~96%</span></div>
                  <div className="bar-row"><span className="bar-label">Olympic-scale programs</span><span className="bar-track"><span className="bar-fill" data-w="100"></span></span><span className="bar-val">~157%</span></div>
                </div>
                <p className="bar-note"><b>Reference line:</b> share of all megaprojects delivered on budget, on time, and on benefits — <b>~0.5%</b>.</p>
              </div>
              <figcaption className="ex-src"><b>Source:</b> Flyvbjerg &amp; Gardner (2023) base-rate appendix; Flyvbjerg et&nbsp;al. (2016–2022); McKinsey (2015). Overruns measured in real terms against the budget at decision to build.</figcaption>
            </figure>
          </div>
        </section>

        <section className="ti-section" id="evidence">
          <div className="section-in">
            <p className="ti-kicker">Evidence base</p>
            <h2>The pricing mechanisms are already moving</h2>
            <div className="prose rv" id="evidence-prose">
              <p><span className="lead-in">Losses are repricing risk transfer.</span> Insured natural-catastrophe losses reached <span className="nw">$107B</span> in 2025 — the sixth consecutive year above <span className="nw">$100B</span> — led by the costliest wildfire event ever recorded (≈<span className="nw">$40B</span> insured, Los Angeles). Reconstruction costs remain ~37% above pre-COVID levels. Carriers respond as they always have to sustained loss trends: tighter terms, more granular data demands, and rewards for verifiable mitigation.</p>
              <p><span className="lead-in">Capability adoption has crossed from novelty to trajectory.</span> Roughly 27% of AEC professionals report operational AI use — a minority, but one that doubled recently — and 94% of adopters plan to expand. Peer-reviewed syntheses converge on the same functional map: machine learning for predictive modeling, computer vision for safety monitoring, NLP for compliance risk — with data quality and interpretability as the binding constraints.</p>
              <p><span className="lead-in">Funding pressure is forcing prioritization discipline.</span> ASCE&rsquo;s 2025 assessment shows owners already shifting toward preservation of fair-condition assets, phased delivery, and programmatic contracting in response to the <span className="nw">$3.7T</span> gap and the FY2026 IIJA cliff — precisely the behaviors that demand better risk instrumentation to defend sequencing decisions.</p>
            </div>

            <figure className="exhibit rv" role="group" aria-label="Exhibit 3">
              <div className="ex-head">
                <span className="ex-no">Exhibit 3</span>
                <p className="ex-title">The pricing environment and the capability curve are crossing.</p>
                <p className="ex-sowhat">TRAVO inference: when sustained loss pressure meets scalable measurement capability, underwriting can become more data-sensitive. Whether construction and professional-risk lines follow that pattern — and how quickly — remains a central uncertainty in this outlook.</p>
              </div>
              <div className="ex-body">
                <svg viewBox="0 0 1000 380" style={{ width: "100%", height: "auto" }} role="img" aria-label="Two-panel chart. Left: Swiss Re global insured natural catastrophe losses in 2025 prices: 2015 to 2024 average 111 billion dollars, 2024 141 billion, and 2025 107 billion; 2025 was the sixth consecutive year above 100 billion. Right: share of AEC survey respondents reporting operational AI use, rising from the low teens to about 27 percent, with an illustrative 2031 scenario band.">
          
                  <rect x="10" y="8" width="490" height="348" fill="none" stroke="#E5E5E8" strokeWidth="1.5" />
                  <rect x="520" y="8" width="470" height="348" fill="none" stroke="#E5E5E8" strokeWidth="1.5" />
          
                  <g fontFamily="'Hanken Grotesk',sans-serif">
                    <text x="30" y="36" fontSize="13" fontWeight="700" fill="#242543">Swiss Re insured nat-cat losses ($B, 2025 prices)</text>
                    <g stroke="#E8F7FF" strokeWidth="1.5">
                      <line x1="60" y1="310" x2="480" y2="310" /><line x1="60" y1="236.7" x2="480" y2="236.7" />
                      <line x1="60" y1="163.3" x2="480" y2="163.3" /><line x1="60" y1="90" x2="480" y2="90" />
                    </g>
                    <g className="svgt" textAnchor="end">
                      <text x="54" y="314">0</text><text x="54" y="241">50</text><text x="54" y="168">100</text><text x="54" y="94">150</text>
                    </g>
                    <g fill="#71D2CF">
                      <rect x="90" y="147.2" width="88" height="162.8" />
                      <rect x="227" y="103.2" width="88" height="206.8" />
                      <rect x="364" y="153.1" width="88" height="156.9" />
                    </g>
                    <g className="svgt b" textAnchor="middle">
                      <text x="134" y="139">111</text><text x="271" y="95">141</text><text x="408" y="145">107</text>
                    </g>
                    <g className="svgt" textAnchor="middle">
                      <text x="134" y="328">2015–24 avg</text><text x="271" y="328">2024</text><text x="408" y="328">2025</text>
                    </g>
                    <line x1="60" y1="163.3" x2="480" y2="163.3" stroke="#FF5B5E" strokeWidth="2.5" strokeDasharray="8 6" />
                    <text x="478" y="157" textAnchor="end" fontSize="11.5" fontWeight="700" fill="#242543">$100B reference · 2025: sixth consecutive year above</text>
                  </g>
          
                  <g fontFamily="'Hanken Grotesk',sans-serif">
                    <text x="540" y="36" fontSize="13" fontWeight="700" fill="#242543">AEC survey respondents reporting operational AI use (%)</text>
                    <g stroke="#E8F7FF" strokeWidth="1.5">
                      <line x1="565" y1="310" x2="978" y2="310" /><line x1="565" y1="240" x2="978" y2="240" />
                      <line x1="565" y1="170" x2="978" y2="170" /><line x1="565" y1="100" x2="978" y2="100" />
                    </g>
                    <g className="svgt" textAnchor="end">
                      <text x="559" y="314">0</text><text x="559" y="244">25</text><text x="559" y="174">50</text><text x="559" y="104">75</text>
                    </g>
                    <path d="M 705,234 L 958,106 L 958,198 L 705,238 Z" fill="#C5ECFE" opacity=".45" />
                    <polyline points="585,274 705,234" fill="none" stroke="#242543" strokeWidth="3.5" />
                    <circle cx="585" cy="274" r="5.5" fill="#242543" />
                    <circle cx="705" cy="234" r="7" fill="#71D2CF" stroke="#242543" strokeWidth="2.5" />
                    <line x1="705" y1="234" x2="958" y2="106" stroke="#242543" strokeWidth="2" strokeDasharray="3 6" />
                    <line x1="705" y1="238" x2="958" y2="198" stroke="#242543" strokeWidth="2" strokeDasharray="3 6" />
                    <g className="svgt" textAnchor="middle">
                      <text x="585" y="328">2024</text><text x="705" y="328">2026 survey</text><text x="958" y="328">2031 scenario</text>
                    </g>
                    <text x="717" y="222" fontSize="12" fontWeight="700" fill="#242543">~27%</text>
                    <text x="595" y="262" fontSize="12" fill="#6E6F83">low teens</text>
                    <text x="805" y="150" fontSize="11.5" fontWeight="600" fill="#242543">illustrative range —</text>
                    <text x="805" y="166" fontSize="11.5" fontWeight="600" fill="#242543">94% of adopters expanding</text>
                  </g>
                </svg>
              </div>
              <figcaption className="ex-src"><b>Source:</b> Swiss Re Institute, <em>sigma</em> 1/2026 — 2024, 2025 and the 2015–2024 average shown on a single 2025-price basis; Bluebeam, <em>2026 AEC Technology Outlook</em> (released 2025); StartUs Insights (2025). The AI adoption points are survey-based; the 2031 range is illustrative of directional intent, not a point forecast.</figcaption>
            </figure>
          </div>
        </section>

        <section className="ti-section" id="toolkit">
          <div className="section-in">
            <p className="ti-kicker">The foresight toolkit</p>
            <h2>Instruments, matched to decisions</h2>
            <div className="prose rv" id="foresight-prose"><p>Prediction in this report is scenario-bounded, not point-certain. The same discipline should govern how leaders consume it. Five instruments, matched to the decisions they inform — and note the pairing rule: no instrument is decision-grade alone. TRAVO methodology pairs <a href="/methodology">reference-class forecasting</a> with stress testing where both are decision-relevant.</p></div>

            <figure className="exhibit rv" role="group" aria-label="Exhibit 4">
              <div className="ex-head">
                <span className="ex-no">Exhibit 4</span>
                <p className="ex-title">Five foresight instruments, matched to the executive decisions they inform.</p>
                <p className="ex-sowhat">The toolkit&rsquo;s value is in pairing — no instrument is decision-grade alone.</p>
              </div>
              <div className="ex-body tbl-scroll">
                <table className="tbl">
                  <thead><tr><th>Instrument</th><th>Purpose</th><th>When to use</th><th>Output</th><th>Executive decision informed</th></tr></thead>
                  <tbody>
                    <tr><td>Horizon scanning</td><td>Detect weak signals in insurance filings, RFQs, case law, standards</td><td>Continuous; quarterly synthesis</td><td>Signal log with confidence ratings</td><td>When to accelerate or pause capability investment</td></tr>
                    <tr><td>Scenario planning</td><td>Structure irreducible uncertainty into plannable futures</td><td>Annually; at major capital decisions</td><td>3–4 scenarios with triggers</td><td>Portfolio posture; hedged vs. concentrated bets</td></tr>
                    <tr><td>Reference-class forecasting</td><td>Correct optimism bias with outside-view base rates</td><td>Every major estimate &amp; contingency setting</td><td>Adjusted P-range forecasts</td><td>Contingency size; go/no-go; bid pricing</td></tr>
                    <tr><td>Stress tests &amp; simulation</td><td>Quantify exposure under tail conditions (climate, funding, supply)</td><td>Semiannually on the live portfolio</td><td>Loss exceedance curves; breakpoints</td><td>Insurance limits; balance-sheet reserves</td></tr>
                    <tr><td>Leadership war games</td><td>Rehearse decision rights under compound crisis</td><td>Before program start; after near-misses</td><td>Decision-rights map; playbooks</td><td>Governance design; delegation thresholds</td></tr>
                  </tbody>
                </table>
              </div>
              <figcaption className="ex-src"><b>Source:</b> <a href="/methodology">TRAVO practice methodology</a>; reference-class method per Flyvbjerg (Oxford) and its documented adoption in public planning practice; ISO&nbsp;31000 family.</figcaption>
            </figure>
          </div>
        </section>

        <section className="ti-section" id="scenarios">
          <div className="section-in">
            <p className="ti-kicker">Scenario planning logic</p>
            <h2>Two uncertainties, four futures</h2>
            <div className="prose rv" id="scenarios-prose">
              <p>Most drivers on the forces map are trends — direction known, pace uncertain. Two are genuine uncertainties.</p>
              <p><span className="lead-in">Critical uncertainty 1 — Trust in machine-informed risk judgment.</span> Does the ecosystem — courts, insurers, licensing boards, engineers themselves — come to treat model-derived risk assessments as reliable and auditable, or does a high-profile model failure stall institutional acceptance?</p>
              <p><span className="lead-in">Critical uncertainty 2 — External risk pressure.</span> Do funding stress, catastrophe losses, and regulatory demands intensify (hard market, post-IIJA austerity, continued <span className="nw">$100B+</span> loss years) or ease (reauthorization, benign loss years, softening cover)?</p>
            </div>

            <figure className="exhibit rv" role="group" aria-label="Exhibit 5">
              <div className="ex-head">
                <span className="ex-no">Exhibit 5</span>
                <p className="ex-title">Four futures for engineering risk assessment, 2026–2031.</p>
                <p className="ex-sowhat">Three of four quadrants reward building risk intelligence now; none requires betting the enterprise on a single forecast.</p>
              </div>
              <div className="ex-body">
                <div className="matrix-wrap">
                  <div className="axis-y">External risk pressure&nbsp; · &nbsp;easing → intensifying</div>
                  <div className="matrix">
                    <div className="quad"><h4>Analog Squeeze</h4><p>Pressure without accepted tools; blunt rationing, rising premiums for all, judgment bottlenecks.</p><span className="ti-tag">Build anyway — scarce trusted capability commands premium fees.</span></div>
                    <div className="quad base"><h4>Priced-In Precision</h4><p>The prediction realized: data-conditioned terms standard; the analog penalty explicit.</p><span className="ti-tag">Build fast — data maturity is priced. The base trajectory.</span></div>
                    <div className="quad"><h4>Patchwork Progress</h4><p>Pilots persist, no forcing function; advantage accrues quietly to early movers.</p><span className="ti-tag">Build selectively — optionality preserved at low cost.</span></div>
                    <div className="quad"><h4>Quiet Upgrade</h4><p>Capability spreads on productivity merits; pricing follows slowly.</p><span className="ti-tag">Build economically — differentiate via client outcomes, not gatekeepers.</span></div>
                  </div>
                  <div></div>
                  <div className="axis-x">Trust in machine-informed judgment&nbsp; · &nbsp;low → high</div>
                </div>
              </div>
              <figcaption className="ex-src"><b>Source:</b> TRAVO scenario workshop, Q2 2026; uncertainties derived from the Exhibits 1–3 evidence base. Tinted quadrant marks the base trajectory.</figcaption>
            </figure>
          </div>
        </section>

        <section className="ti-section" id="outlook">
          <div className="section-in">
            <p className="ti-kicker">Three-scenario outlook</p>
            <h2>Plan on the base, insure the downside, position for the upside</h2>

            <figure className="exhibit rv" role="group" aria-label="Exhibit 6">
              <div className="ex-head">
                <span className="ex-no">Exhibit 6</span>
                <p className="ex-title">Three planning scenarios — the recommended posture is robust across all three.</p>
                <p className="ex-sowhat">The actions that pay off in the base case are also the cheapest hedge in the downside — that asymmetry is the strategy.</p>
              </div>
              <div className="ex-body tbl-scroll">
                <table className="tbl">
                  <thead>
                    <tr>
                      <th style={{ width: "12%", background: "transparent", borderTop: "none", borderLeft: "none", borderRight: "none", borderBottom: "1px solid var(--line)" }}></th>
                      <th style={{ background: "var(--teal)", color: "var(--indigo)" }}><span style={{ fontFamily: "var(--mono)", fontSize: ".72rem", fontWeight: "500", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--indigo)" }}>Base</span><br />“Steady Instrumentation”<br /><small style={{ fontWeight: "400", opacity: ".85" }}>Evidence Support: strong</small></th>
                      <th style={{ background: "var(--blue-light)", color: "var(--indigo)" }}><span style={{ fontFamily: "var(--mono)", fontSize: ".72rem", fontWeight: "500", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--indigo)" }}>Upside</span><br />“Risk Dividend”<br /><small style={{ fontWeight: "400", opacity: ".85" }}>Evidence Support: moderate</small></th>
                      <th style={{ background: "var(--coral-light)", color: "var(--indigo)" }}><span style={{ fontFamily: "var(--mono)", fontSize: ".72rem", fontWeight: "500", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--indigo)" }}>Downside</span><br />“Trust Stall”<br /><small style={{ fontWeight: "400", opacity: ".85" }}>Evidence Support: limited</small></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Narrative</td><td style={{ background: "var(--teal-10)" }}>Insurance and procurement channels adopt data-conditioning progressively, 2027–2030; the legal channel lags but looms. Adoption remains uneven by firm size.</td><td>A visible save — a model-flagged failure averted at scale — plus favorable court treatment accelerates acceptance; premium and capital advantages become quotable by 2029.</td><td>A prominent model-implicated failure or data scandal triggers institutional caution; adoption continues in operations but is excluded from formal risk gatekeeping until standards mature.</td></tr>
                    <tr><td>Key assumptions</td><td style={{ background: "var(--teal-10)" }}>Loss trend persists near <span className="nw">$100B+</span>/yr; post-IIJA funding partially reauthorized; no landmark liability ruling either way.</td><td>At least one carrier publicly ties construction/PL terms to telemetry by 2028; standards bodies issue model-governance guidance.</td><td>High-profile failure attributed (fairly or not) to model reliance; interpretability unresolved; standards fragmented.</td></tr>
                    <tr><td>Strategic implications</td><td style={{ background: "var(--teal-10)" }}>Data maturity becomes table stakes on major programs; the mid-market squeeze materializes.</td><td>Early movers monetize directly: better terms, prequal advantage, premium advisory fees.</td><td>Human-judgment capacity becomes the scarce asset; hybrid (model + documented expert review) is the only bankable posture.</td></tr>
                    <tr><td>Early signals</td><td style={{ background: "var(--teal-10)" }}>Carrier filings referencing project telemetry; owner RFQs with live-dashboard clauses.</td><td>Publicized underwriting pilot results; first “data-for-terms” endorsements.</td><td>Litigation discovery targeting model logs; carrier exclusions for AI-assisted assessments.</td></tr>
                    <tr><td>Recommended response</td><td style={{ background: "var(--teal-10)" }}>Execute the action agenda on schedule.</td><td>Accelerate: expand data-for-terms negotiations; productize the risk-intelligence offer.</td><td>Double down on governance and documentation; market “auditable judgment” as the differentiator.</td></tr>
                  </tbody>
                </table>
                <p className="smallnote" style={{ marginTop: "1rem" }}><em>We deliberately use evidence-support labels, not probabilities: the underlying events (court rulings, single catastrophic failures) are discrete and event-driven, and point probabilities would imply false precision.</em></p>
              </div>
              <figcaption className="ex-src"><b>Source:</b> Scenario construction per Exhibit 5; signal categories from insurance-market reporting (Swiss Re, Aon, Allianz Risk Barometer 2026) and procurement observation.</figcaption>
            </figure>
          </div>
        </section>

        <section className="ti-section" id="stakeholders">
          <div className="section-in">
            <p className="ti-kicker">Strategic implications</p>
            <h2>Who gains, who pays, who must move first</h2>
            <div className="prose rv" style={{ maxWidth: "none" }}><p>Value migrates to whoever owns trusted risk data — every stakeholder&rsquo;s move list follows from that single fact.</p></div>

            <figure className="exhibit rv" role="group" aria-label="Exhibit 7">
              <div className="ex-head">
                <span className="ex-no">Exhibit 7</span>
                <p className="ex-title">Stakeholder impact map.</p>
                <p className="ex-sowhat">The “decide differently” column is the action column — it is where each reader should start.</p>
              </div>
              <div className="ex-body tbl-scroll">
                <table className="tbl">
                  <thead><tr><th>Stakeholder</th><th>What changes</th><th>Key risks</th><th>Key opportunities</th><th style={{ background: "#14403F" }}>Decide differently</th></tr></thead>
                  <tbody>
                    <tr><td>Owners &amp; agencies</td><td>Sequencing the <span className="nw">$3.7T</span> gap requires defensible, data-based prioritization</td><td>Political exposure of transparent risk rankings; vendor lock-in</td><td>Lower lifecycle cost; stronger funding cases; insurance capacity</td><td style={{ background: "var(--teal-10)" }}>Write data-maturity into prequal; procure outcomes, not documents</td></tr>
                    <tr><td>Engineering &amp; construction firms</td><td>Risk-data maturity joins safety record as a bid credential</td><td>Mid-market analog penalty; liability from inappropriate model reliance <em>and, potentially over time,</em> unreasonable failure to consider available decision-support tools</td><td>Premium advisory work; better bonding and insurance terms</td><td style={{ background: "var(--teal-10)" }}>Fund the data backbone as bid-cost, not overhead; codify decision rights</td></tr>
                    <tr><td>Insurers &amp; sureties</td><td>Underwriting shifts from proxies to telemetry</td><td>Adverse selection during transition; model risk on their side</td><td>Portfolio steering; new data-conditioned products</td><td style={{ background: "var(--teal-10)" }}>Launch data-for-terms pilots before competitors set the standard</td></tr>
                    <tr><td>Investors &amp; lenders</td><td>Project risk becomes partially observable pre-close</td><td>Mispricing legacy (analog) exposures</td><td>Alpha from risk-data diligence; infra credit differentiation</td><td style={{ background: "var(--teal-10)" }}>Add risk-data maturity to diligence checklists now</td></tr>
                    <tr><td>Policymakers &amp; regulators</td><td>Standard of care and disclosure norms in motion</td><td>Over- or under-regulating model use; trust erosion after failures</td><td>Cheaper resilience via disclosure levers rather than spending</td><td style={{ background: "var(--teal-10)" }}>Fund open loss/condition data; set model-governance guardrails early</td></tr>
                    <tr><td>Educators &amp; licensure bodies</td><td>Risk-model literacy enters the PE skill set</td><td>Curriculum lag amplifies the workforce gap (&gt;20:1 churn)</td><td>New credential value: “auditable judgment”</td><td style={{ background: "var(--teal-10)" }}>Build model-governance content into CE requirements</td></tr>
                    <tr><td>Communities &amp; users</td><td>Risk rankings become visible and contestable</td><td>Equity concerns in who gets protected first</td><td>Transparent prioritization; faster hazard response</td><td style={{ background: "var(--teal-10)" }}>Demand disclosure of asset risk status</td></tr>
                  </tbody>
                </table>
              </div>
              <figcaption className="ex-src"><b>Source:</b> ASCE (2025) on owner behavior shifts; Swiss Re / Aon (2026) on underwriting direction; McKinsey (2024) on trades churn; TRAVO analysis and principal industry observation.</figcaption>
            </figure>
          </div>
        </section>

        <section className="ti-section" id="capabilities">
          <div className="section-in">
            <p className="ti-kicker">Capabilities required</p>
            <h2>Build now, build next, monitor</h2>
            <div className="prose rv" style={{ maxWidth: "none" }}><p>The two hardest capabilities — data and governance — are also the slowest to build, which is why they must start first.</p></div>

            <figure className="exhibit rv" role="group" aria-label="Exhibit 8">
              <div className="ex-head">
                <span className="ex-no">Exhibit 8</span>
                <p className="ex-title">Capability map: current state → 2031 target, with build priority.</p>
                <p className="ex-sowhat">Coral chips mark the three capabilities that cannot wait.</p>
              </div>
              <div className="ex-body">
                <div className="lanes">
                  <div className="lane"><div className="lane-name">Data &amp; Intelligence<small>Versioned risk-data backbone; telemetry ingestion; outside-view base-rate library</small></div><div className="lane-track"><span className="from"></span><span className="to"></span></div><span className="chip now">Must build now</span></div>
                  <div className="lane"><div className="lane-name">Decision Governance<small>Documented decision rights for model-informed judgment; audit trail on every material risk decision</small></div><div className="lane-track"><span className="from"></span><span className="to"></span></div><span className="chip now">Must build now</span></div>
                  <div className="lane"><div className="lane-name">Talent &amp; Operating Model<small>Paired teams — senior judgment × model literacy; risk engineers as model stewards</small></div><div className="lane-track"><span className="from"></span><span className="to"></span></div><span className="chip now">Must build now</span></div>
                  <div className="lane"><div className="lane-name">Risk Management Core<small>Reference-class forecasting standard on all estimates; continuous registers replacing gate documents</small></div><div className="lane-track"><span className="from"></span><span className="to"></span></div><span className="chip next">Build next</span></div>
                  <div className="lane"><div className="lane-name">Partnerships<small>Data-for-terms agreements with ≥1 carrier, ≥1 lender; sensing/analytics vendor bench</small></div><div className="lane-track"><span className="from"></span><span className="to"></span></div><span className="chip next">Build next</span></div>
                  <div className="lane"><div className="lane-name">Technology Enablement<small>Digital-twin integration where asset value justifies; interoperable, exportable data — no lock-in</small></div><div className="lane-track"><span className="from"></span><span className="to"></span></div><span className="chip next">Build next</span></div>
                  <div className="lane"><div className="lane-name">Communications &amp; Alignment<small>Ability to explain model-informed decisions to boards, courts, and the public</small></div><div className="lane-track"><span className="from"></span><span className="to"></span></div><span className="chip mon">Monitor → build</span></div>
                </div>
              </div>
              <figcaption className="ex-src"><b>Source:</b> TRAVO capability framework; talent constraint per McKinsey (2024); governance need per <em>Journal of Risk Research</em> AI-risk lifecycle synthesis (2025). Dark dot = typical current state; teal dot = 2031 target.</figcaption>
            </figure>
          </div>
        </section>

        <section className="ti-section" id="ai-sidebar">
          <div className="section-in">
            <div className="sidebar-mod rv">
              <p className="sb-eyebrow">Sidebar · Methods</p>
              <h2>Using AI to improve strategic foresight</h2>
              <div className="cols">
                <p><span className="lead-in">Weak-signal detection.</span> Language models can scan insurance filings, RFQ language, standards drafts, and case law at a scale that would be impractical for most analyst teams — surfacing, for example, the first appearances of telemetry clauses in construction underwriting. The value is coverage; the risk is noise. Every machine-flagged signal in a TRAVO watchlist carries a human-assigned confidence rating.</p>
                <p><span className="lead-in">Synthesis at volume.</span> Summarizing thousands of pages of market, policy, and technical material compresses the foresight cycle from quarters to weeks. Peer-reviewed reviews of AI in construction risk consistently find NLP most mature exactly here — document and compliance analysis.</p>
                <p><span className="lead-in">Scenario generation.</span> Models are effective at proposing scenario variants and challenging framing (“what would have to be true”). They widen the option set; they do not choose. Scenario selection remains a leadership act because it allocates real capital.</p>
                <p><span className="lead-in">Stress-testing assumptions.</span> AI can rapidly re-run outlooks under altered assumptions — a funding cliff, a repeat <span className="nw">$40B</span> wildfire, a landmark liability ruling — exposing which conclusions are fragile.</p>
                <p><span className="lead-in">Where AI misleads.</span> Four failure modes matter for foresight: confident extrapolation of trends that are actually regime-dependent; training-data blind spots for genuinely novel risks; opaque reasoning that cannot be defended to a board or a court; and automation bias — the human tendency to defer once a number appears on a dashboard. The last is the most dangerous, because it silently transfers judgment without transferring accountability.</p>
                <p><span className="lead-in">Why judgment and governance remain essential.</span> The professional engineer&rsquo;s signature carries professional accountability; AI does not transfer that responsibility. Between 2026 and 2031, the winning posture is neither manual nor autonomous but <em>auditable</em>: model-informed analysis, documented human review, and decision rights defined before the crisis, not during it.</p>
              </div>
              <p className="smallnote" style={{ marginTop: "1.4rem" }}>Sources: bibliometric review of AI in construction risk management, <em>ScienceDirect</em> (2025); decade review, <em>Journal of Risk Research</em> (2025); TRAVO methodology.</p>
            </div>
          </div>
        </section>

        <section className="ti-section" id="agenda">
          <div className="section-in">
            <p className="ti-kicker">Recommended action agenda</p>
            <h2>Three horizons — every action names its owner</h2>

            <figure className="exhibit rv" role="group" aria-label="Exhibit 9">
              <div className="ex-head">
                <span className="ex-no">Exhibit 9</span>
                <p className="ex-title">A three-horizon action agenda.</p>
                <p className="ex-sowhat">Nothing on this roadmap requires betting on a single future; every 0–6-month action pays off in all three scenarios.</p>
              </div>
              <div className="ex-body">

                <div className="horizon">
                  <div className="hz-head"><span className="rng">0–6 months</span><span className="nm">Prove</span></div>
                  <div className="tbl-scroll"><table className="tbl">
                    <thead><tr><th>Priority action</th><th>Owner</th><th>Output</th><th>Decision enabled</th></tr></thead>
                    <tbody>
                      <tr><td>Establish the current decision and risk-information state on one live project</td><td>Program director / risk lead</td><td>Decision statement, evidence inventory, quantified range, dominant drivers and trigger conditions</td><td>Whether the current forecast, contingency or intervention basis remains credible</td></tr>
                      <tr><td>Select and instrument one continuous-monitoring pilot</td><td>Program director</td><td>Live risk view with defined update triggers on one program</td><td>Scale / no-scale, with evidence</td></tr>
                      <tr><td>Draft decision-rights charter for model-informed judgment</td><td>GC + CRO</td><td>One-page governance charter</td><td>Who signs what, with what review</td></tr>
                      <tr><td>Baseline current insurance terms and loss history</td><td>CFO / Risk</td><td>Terms benchmark</td><td>Data-for-terms negotiating position</td></tr>
                    </tbody>
                  </table></div>
                </div>

                <div className="horizon" id="hz-scale">
                  <div className="hz-head"><span className="rng">6–24 months</span><span className="nm">Scale</span></div>
                  <div className="tbl-scroll"><table className="tbl">
                    <thead><tr><th>Priority action</th><th>Owner</th><th>Output</th><th>Decision enabled</th></tr></thead>
                    <tbody>
                      <tr><td>Stand up the versioned risk-data backbone</td><td>CTO / CRO</td><td>Single source of risk truth</td><td>Portfolio-level risk steering</td></tr>
                      <tr><td>Make reference-class forecasting standard on estimates</td><td>Head of estimating</td><td>RCF-adjusted P-range on every bid</td><td>Contingency and bid pricing</td></tr>
                      <tr><td>Negotiate one data-for-terms pilot (carrier) and one (lender)</td><td>CFO</td><td>Signed pilot endorsements</td><td>Whether data maturity is monetizable now</td></tr>
                      <tr><td>Launch paired-talent program (senior judgment × model literacy)</td><td>CHRO</td><td>Initial cohort of paired senior-domain and model-literate staff</td><td>Succession before the retirement wave</td></tr>
                    </tbody>
                  </table></div>
                </div>

                <div className="horizon" id="hz-lead">
                  <div className="hz-head"><span className="rng">2+ years</span><span className="nm">Lead</span></div>
                  <div className="tbl-scroll"><table className="tbl">
                    <thead><tr><th>Priority action</th><th>Owner</th><th>Output</th><th>Decision enabled</th></tr></thead>
                    <tbody>
                      <tr><td>Productize risk intelligence for clients</td><td>CEO / Practice leads</td><td>Advisory offer with reference cases</td><td>Growth bet sizing</td></tr>
                      <tr><td>Contribute to standards &amp; model-governance guidance</td><td>CRO</td><td>Seat at standards tables</td><td>Shaping vs. absorbing the rules</td></tr>
                      <tr><td>Extend stress testing to climate &amp; funding tails, portfolio-wide</td><td>CFO / CRO</td><td>Annual exceedance report</td><td>Reserves, limits, portfolio mix</td></tr>
                    </tbody>
                  </table></div>
                </div>

              </div>
              <figcaption className="ex-src"><b>Source:</b> TRAVO practice playbooks; sequencing informed by the capability map (Exhibit 8).</figcaption>
            </figure>
          </div>
        </section>

        <section className="ti-section" id="where-travo-fits">
          <div className="section-in">
            <p className="ti-kicker">From outlook to decision</p>
            <h2>Where <span style={{ fontFamily: "var(--body)" }}>TRAVO</span> fits, by role</h2>
            <div className="tbl-scroll rv"><table className="tbl">
              <thead><tr><th>Reader</th><th>The decision in front of you</th><th>Relevant TRAVO entry point</th></tr></thead>
              <tbody>
                <tr><td>Owners &amp; developers</td><td>Commit · reserve · intervene — is the basis credible and is contingency adequate?</td><td><a href="/services#svc-p2">Preconstruction Risk Review</a> · <a href="/services#svc-p3">Independent Risk Peer Review</a></td></tr>
                <tr><td>Lenders &amp; private credit</td><td>Fund · reserve · escalate — will it complete within available capital?</td><td><a href="/services#svc-a1">Project Risk Screen</a> · <a href="/services#svc-a4">Lender Monitoring &amp; Draw Overlay</a></td></tr>
                <tr><td>Sureties &amp; SDI</td><td>Capacity · completion · intervention — is completion exposure increasing?</td><td><a href="/services#svc-a5">Contractor Performance &amp; Completion-Risk Review</a></td></tr>
                <tr><td>Construction counsel</td><td>Evidence · exposure · next step — what does the technical record show?</td><td><a href="/services#svc-f1">Counsel-Directed Project Risk &amp; Quantum Review</a></td></tr>
                <tr><td>Contractors</td><td>Bid · mitigate · recover — which uncertainties threaten margin or delivery?</td><td><a href="/services#svc-p1">Quantitative Risk &amp; Contingency</a> · <a href="/services#svc-p4">Strategic Alternatives</a></td></tr>
                <tr><td>Public agencies &amp; program primes</td><td>Approve · reserve · oversee — are the assumptions independent and defensible?</td><td><a href="/services#svc-p7">Independent Project Risk Review</a></td></tr>
              </tbody>
            </table></div>
            <p className="region-note rv"><b>Regional lens.</b> TRAVO is a focused New Jersey / New York metropolitan practice. The <span className="nw">$3.7&nbsp;trillion</span> national gap, the post-IIJA funding cliff and hardening catastrophe pricing arrive here as concrete questions on regional capital programs — which projects to sequence, how much contingency to hold, and when a live forecast has stopped being credible.</p>
          </div>
        </section>

        <section className="ti-section" id="watchlist">
          <div className="section-in">
            <p className="ti-kicker">Watchlist dashboard</p>
            <h2>The prediction is falsifiable — watch these sixteen signals</h2>
            <div className="prose rv" style={{ maxWidth: "none" }}><p>Strategy reviews should be triggered by signals, not by the calendar. Each entry names the signal, why it matters, the monitoring cadence, and the response if it fires. Baseline: July 2026; status should be refreshed at each review cycle.</p></div>

            <figure className="exhibit rv" role="group" aria-label="Exhibit 10">
              <div className="ex-head">
                <span className="ex-no">Exhibit 10</span>
                <p className="ex-title">Sixteen leading indicators across four signal classes.</p>
                <p className="ex-sowhat">The palette is semantic here: teal confirms, deep-teal accelerates, rose weakens, coral reverses.</p>
              </div>
              <div className="ex-body">
                <div className="watch-grid">
                  <div className="watch confirm">
                    <header>Confirm — prediction on track</header>
                    <ul>
                      <li><b>Carrier filings referencing project telemetry / AI</b> in construction or PL lines · the pricing channel activating · quarterly<span className="resp">Accelerate data-for-terms talks</span></li>
                      <li><b>Owner RFQs requiring live risk dashboards</b> or data maturity · procurement channel activating · monthly (bid pipeline)<span className="resp">Fast-track the backbone build</span></li>
                      <li><b>Standards bodies issue model-governance guidance</b> · trust infrastructure forming · semiannual<span className="resp">Align the charter; seek early conformity</span></li>
                      <li><b>Continued <span className="nw">$100B+</span> insured nat-cat years</b> · loss pressure sustained · annual (sigma / NatCat)<span className="resp">Maintain course</span></li>
                    </ul>
                  </div>
                  <div className="watch accel">
                    <header>Accelerate — faster than base case</header>
                    <ul>
                      <li><b>Publicized underwriting pilot</b> showing loss-ratio improvement from telemetry · proof insurers can&rsquo;t ignore · quarterly<span className="resp">Pull Horizon-2 actions forward</span></li>
                      <li><b>A litigated claim arguing non-use of predictive tools as negligence</b> · the legal channel arriving early · continuous scan<span className="resp">Brief boards; harden documentation</span></li>
                      <li><b>A DOT-scale owner mandates continuous risk monitoring</b> · anchor-client standard-setting · quarterly<span className="resp">Bid aggressively; build the reference case</span></li>
                      <li><b>Post-IIJA reauthorization ties funds to asset-condition data</b> · federal forcing function · legislative calendar<span className="resp">Position for compliance advisory</span></li>
                    </ul>
                  </div>
                  <div className="watch weak">
                    <header>Weaken — slower than base case</header>
                    <ul>
                      <li><b>AEC AI adoption plateaus below ~35%</b> for 4+ quarters · capability curve stalling · quarterly surveys<span className="resp">Stretch investment timeline; keep pilots</span></li>
                      <li><b>Carriers stay on proxy-based pricing</b> despite loss years · pricing channel inert · renewal cycles<span className="resp">Shift the value story to client outcomes</span></li>
                      <li><b>Benign loss years soften the market broadly</b> · pressure easing · annual<span className="resp">Emphasize productivity ROI over terms</span></li>
                      <li><b>Interpretability tools fail to mature</b> · trust bottleneck persists · semiannual<span className="resp">Weight hybrid / judgment positioning</span></li>
                    </ul>
                  </div>
                  <div className="watch reverse">
                    <header>Reverse — thesis broken</header>
                    <ul>
                      <li><b>High-profile failure attributed to model reliance</b> triggers exclusions or bans · trust collapse (“Trust Stall”) · continuous<span className="resp">Execute the downside playbook</span></li>
                      <li><b>Regulation restricts model use</b> in safety-critical assessment · the legal channel inverts · legislative scan<span className="resp">Reposition on auditable human judgment</span></li>
                      <li><b>Insurers exclude AI-assisted assessments</b> from cover · pricing channel inverts · renewal cycles<span className="resp">Same repositioning; document everything</span></li>
                      <li><b>Sustained funding surplus removes prioritization pressure</b> · forcing function gone · annual<span className="resp">Compete on delivery; hold optionality</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <figcaption className="ex-src"><b>Monitoring sources:</b> Swiss Re sigma; Munich Re NatCat; Aon Climate &amp; Catastrophe Insight; Allianz Risk Barometer; state insurance filings; ENR; federal legislative trackers. Baseline: July 2026 · Last reviewed: July 2026.</figcaption>
            </figure>
          </div>
        </section>

        <section className="ti-section" id="questions">
          <div className="section-in">
            <div style={{ maxWidth: "72ch", marginLeft: "auto", marginRight: "auto" }}>
            <p className="ti-kicker">Leadership questions</p>
            <h2>Ten questions for the next board or partner meeting</h2>
            <ol className="qlist rv">
              <li>If a carrier offered a 10% premium reduction for live project telemetry tomorrow, could we technically deliver the data — and would we be comfortable with what it shows?<span className="cat">assumptions · readiness</span></li>
              <li>What share of our current contingency setting is based on outside-view base rates versus internal optimism?<span className="cat">assumptions</span></li>
              <li>Which of our decisions may currently rely on model output — and who has actually signed off on that list?<span className="cat">governance</span></li>
              <li>Where does tacit risk judgment sit in our organization, and how much of it retires in the next five years?<span className="cat">organizational readiness</span></li>
              <li>If a competitor&rsquo;s bid includes a live risk dashboard and ours includes a PDF register, how does the owner score that — today, and in 2028?<span className="cat">competitive exposure</span></li>
              <li>What is our maximum tolerable loss under a repeat of a 2025-scale catastrophe year on our portfolio — and is it reserved, or just assumed?<span className="cat">risk appetite</span></li>
              <li>Are we prepared to defend a model-informed decision in litigation — with logs, versions, and documented human review?<span className="cat">governance · legal</span></li>
              <li>Which single pilot, started this quarter, would generate the most decision-relevant evidence within 12 months?<span className="cat">timing · investment posture</span></li>
              <li>Whose risk gets prioritized when our data makes trade-offs visible — and are we ready for that conversation with communities and clients?<span className="cat">stakeholder impact</span></li>
              <li>If the prediction in this report is wrong, which of our planned investments would we regret — and which would we keep anyway?<span className="cat">robustness test</span></li>
            </ol>
            <div style={{ marginTop: "3rem" }} className="rv">
              <blockquote className="pull deep" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>“The most dangerous risk register is the one that was accurate last quarter.”</blockquote>
            </div>
            </div>
          </div>
        </section>

        <section className="ti-section" id="conclusion">
          <div className="section-in">
            <p className="ti-kicker" style={{ textAlign: "center" }}>Conclusion</p>
            <div className="concl rv">
              <div className="dotrule" style={{ justifyContent: "center" }}><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
              <p style={{ marginBottom: "1.1rem" }}>Across decades, the record of major engineering programs has shown persistent forecasting error and chronic overruns despite increasingly sophisticated documentation and project controls. The instinct has often been to treat that record as fate — the cost of building big things.</p>
              <p style={{ marginBottom: "1.1rem" }}>The next five years break the excuse. The data now exists to see risk as it moves. The analytical capability exists to read it. And three gatekeepers — insurers absorbing their sixth consecutive $100-billion year, owners rationing a <span className="nw">$3.7 trillion</span> gap, and professional and legal expectations beginning to confront what a careful practitioner should reasonably consider when predictive tools are available — have every incentive to start pricing the difference between firms that can see and firms that cannot.</p>
              <p style={{ marginBottom: "1.1rem" }}>Our prediction is specific enough to be wrong, and we have listed the signals that would prove it so. But note the asymmetry that runs through every scenario in this report: the moves that win in the base case — a data backbone, decision governance, paired talent, outside-view forecasting — are the same moves that protect in the downside and compound in the upside. That is rare. Most strategic bets force a choice between futures. This one rewards preparation in all of them.</p>
              <p>The discipline of foresight was never about predicting one future. It is about refusing to be surprised by any of the plausible ones. Our thesis is simple: between now and 2031, engineering risk will increasingly be assessed continuously — or the inability to do so will increasingly carry a price. The firms that internalize that thesis early will not merely avoid the analog penalty.</p>
              <p className="final">They will help set the standard by which everyone else is judged.</p>
              <div className="concl-rule"></div>
            </div>
          </div>
        </section>

        <section className="ti-section" id="engage">
          <div className="section-in">
            <p className="ti-kicker">For a live project</p>
            <h2>Is the risk view supporting your next decision still credible?</h2>
            <p className="lede-dark rv">If a current forecast, contingency, financing, completion, reserve, procurement or intervention decision depends on assumptions that may already be stale, the immediate need is not an enterprise transformation. It is an independent view of what the available evidence supports now, what remains uncertain, and what could materially change the decision.</p>
            <p className="lede-dark rv">TRAVO&apos;s bounded Project Risk Screen is designed as a first step for a live decision under pressure — establishing the current information state, identifying the few drivers that matter, and testing whether the existing forecast or reserve remains credible before deeper reforecasting or monitoring is warranted.</p>
            <div className="cta-actions rv">
              <a className="ti-btn ti-btn-primary" href="mailto:principal@travo-advisory.com?subject=Decision-scoping%20call:%20Risk%20Intelligence%20outlook">Request a decision-scoping call</a>
              <a className="ti-btn ti-btn-ghost" href="mailto:principal@travo-advisory.com?subject=Project%20Risk%20Screen:%20Risk%20Intelligence%20outlook">Discuss the Project Risk Screen</a>
            </div>
            <p className="cta-independence">Independent · principal-led · decision-focused</p>

            <div className="author rv">
              <div className="nm">Dr. Karim S. Karam · Principal, TRAVO</div>
              <p>Dr. Karam studied engineering at Imperial College London, holds master&apos;s and doctoral degrees from MIT, and teaches construction risk and decision-making at Stevens Institute of Technology. He was Co-Founder, Partner and Advisor to the Board of a construction business that completed more than 170 infrastructure projects totaling over $1&nbsp;billion of work. Every TRAVO analytical product is personally reviewed by the principal.</p>
              <p>New Jersey · New York metropolitan region · <a href="mailto:principal@travo-advisory.com">principal@travo-advisory.com</a> · <a href="/about">About the principal</a> · <a href="/methodology">Methodology</a> · <a href="https://travo.co">travo.co</a></p>
            </div>
          </div>
        </section>

        <section className="ti-section meth" id="methodology">
          <div className="section-in">
            <p className="ti-kicker">Methodology &amp; sources</p>
            <h2>How this outlook was built</h2>
            <div className="cols2 rv">
              <p><span className="lead-in">Research approach.</span> This outlook was developed by (1) assembling a quantitative evidence base from government, institutional, insurer, and academic sources; (2) separating trend drivers from genuine uncertainties; (3) constructing scenarios on the two dominant uncertainties — trust in machine-informed judgment and external risk pressure; (4) stress-testing the central prediction against each scenario; and (5) deriving actions that remain valuable across all scenarios. AI-assisted document scanning supported source discovery; all figures were verified against primary or named institutional sources, and all judgments are the author&rsquo;s own. Throughout this report, “observed evidence” refers to sourced data or current market developments; “TRAVO inference” is our interpretation of those signals; a “forecast” is a forward-looking judgment; and a “scenario” is a plausible future used to test whether today&rsquo;s decisions remain robust.</p>
              <p><span className="lead-in">Source categories.</span> Government and quasi-governmental (US BLS, ASCE, legislative records); institutional research (McKinsey &amp; Company published insights); reinsurer research (Swiss Re Institute sigma, Munich Re NatCat, Aon Climate &amp; Catastrophe Insight, Allianz Risk Barometer); academic literature (Flyvbjerg et&nbsp;al., Oxford/ITU megaproject research; peer-reviewed AI-in-construction-risk reviews, 2025); industry surveys (Bluebeam AEC, 2025) and trade press (ENR, Construction Dive) where primary data was unavailable.</p>
              <p><span className="lead-in">Limitations.</span> Adoption statistics vary widely by survey frame; megaproject base rates mix asset classes and eras; legal-channel timing is inherently event-driven and could fall outside the five-year window; insurer strategy is competitive and partially opaque. Scenario evidence-support labels reflect these limits; we deliberately avoided point probabilities.</p>
              <p><span className="lead-in">How Evidence Support was assessed.</span> Strong = multiple independent quantitative sources trending the same direction. Moderate = strong analogy plus early direct signals. Limited = plausible mechanism dependent on discrete triggering events.</p>
            </div>

            <div className="assump rv">
              <h3 style={{ marginTop: "0", color: "var(--indigo)" }}>Key assumptions — labeled</h3>
              <ul>
                <li><b>A1.</b> Insured nat-cat losses remain elevated near or above the ~<span className="nw">$100B</span> trend through the horizon (extrapolation of a six-year pattern; could break in benign years).</li>
                <li><b>A2.</b> AEC AI adoption continues rising from ~27% (survey-based; sampling may skew toward digitally engaged firms).</li>
                <li><b>A3.</b> Post-IIJA federal funding does not fully close the ASCE gap (policy judgment; the largest single political uncertainty in this report).</li>
                <li><b>A4 — load-bearing assumption.</b> Insurer behavior in construction lines follows the telemetry-pricing pattern established in property and cyber (analogical inference rather than a universal observed construction-market fact; this is the report&rsquo;s most consequential assumption).</li>
              </ul>
            </div>

            <h3>Method foundations — peer-reviewed</h3>
            <p className="smallnote" style={{ marginBottom: ".8rem" }}>The decision-analysis methods behind this outlook — Value of Information, exploration under uncertainty, and formal updating — rest on the principal&apos;s published research, applied commercially through TRAVO.</p>
            <ol className="srclist rv">
              <li>Karam, K. S.; Karam, J. S.; Einstein, H. H. (2007). <a href="https://doi.org/10.1061/(ASCE)0733-9364(2007)133:5(344)" rel="external noopener">Decision Analysis Applied to Tunnel Exploration Planning. I: Principles and Case Study</a>. <em>Journal of Construction Engineering and Management</em>, 133(5), 344–353.</li>
              <li>Karam, K. S.; Karam, J. S.; Einstein, H. H. (2007). <a href="https://doi.org/10.1061/(ASCE)0733-9364(2007)133:5(354)" rel="external noopener">Decision Analysis Applied to Tunnel Exploration Planning. II: Consideration of Uncertainty</a>. <em>Journal of Construction Engineering and Management</em>, 133(5), 354–363.</li>
              <li>Sousa, R. L.; Karam, K.; Einstein, H. H. (2014). <a href="https://doi.org/10.1080/17499518.2014.958174" rel="external noopener">Exploration Analysis for Landslide Risk Management</a>. <em>Georisk</em>, 8(3), 155–170.</li>
            </ol>

            <h3>Principal sources</h3>
            <ol className="srclist rv">
              <li><a href="https://infrastructurereportcard.org/economics/" rel="external noopener">ASCE, <em>2025 Report Card for America&rsquo;s Infrastructure</em></a> — grade C; <span className="nw">$9.1T</span> need; <span className="nw">$3.7T</span> gap; IIJA FY2026 expiration.</li>
              <li><a href="https://www.swissre.com/institute/research/sigma-research/sigma-2026-01-natcat-2025-wildfire-storm-risk.html" rel="external noopener">Swiss Re Institute, <em>sigma</em> 1/2026</a> — 2025 insured nat-cat losses <span className="nw">$107B</span>; sixth consecutive <span className="nw">$100B+</span> year; LA wildfires ≈<span className="nw">$40B</span> insured; reconstruction costs +37% vs. pre-COVID.</li>
              <li><a href="https://www.munichre.com/en/company/media-relations/media-information-and-corporate-news/media-information/2026/natural-disaster-figures-2025.html" rel="external noopener">Munich Re, NatCat 2025 media release</a> — overall losses ≈<span className="nw">$224B</span>; record wildfire loss; climate attribution commentary.</li>
              <li><a href="https://www.aon.com/en/insights/reports/climate-and-catastrophe-report" rel="external noopener">Aon, <em>2026 Climate and Catastrophe Insight</em></a> — Palisades/Eaton fires <span className="nw">$41B</span> insured; severe convective storms <span className="nw">$61B</span>; protection-gap trends.</li>
              <li><a href="https://www.penguinrandomhouse.com/books/672118/how-big-things-get-done-by-bent-flyvbjerg-and-dan-gardner/" rel="external noopener">Flyvbjerg &amp; Gardner, <em>How Big Things Get Done</em> (2023)</a> and associated database publications — 16,000+ projects; ~0.5% on budget/time/benefits; overrun base rates by class. Flyvbjerg et&nbsp;al., RCF review, <em>Production Planning &amp; Control</em> (2025).</li>
              <li><a href="https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/tradespeople-wanted-the-need-for-critical-trade-skills-in-the-us" rel="external noopener">McKinsey &amp; Company — “Tradespeople wanted” (2024)</a>; plus McKinsey megaproject and infrastructure-labor research (2015, 2022).</li>
              <li><a href="https://press.bluebeam.com/2025/10/new-bluebeam-report-shows-early-ai-adopters-in-aec-seeing-significant-roi-despite-uneven-adoption/" rel="external noopener">Bluebeam, <em>2026 AEC Technology Outlook</em> (released 2025)</a> — ~27% operational AI use; 94% of adopters expanding.</li>
              <li><a href="https://www.startus-insights.com/innovators-guide/ai-in-construction-a-strategic-guide/" rel="external noopener">StartUs Insights, <em>AI in Construction: A Strategic Guide</em> (2025)</a> — cited market outlook includes a ~33% CAGR projection.</li>
              <li><a href="https://doi.org/10.1080/13669877.2025.2512080" rel="external noopener"><em>Journal of Risk Research</em>, decade review of AI in construction risk management (2025)</a>; <a href="https://www.sciencedirect.com/science/article/pii/S2444569X25000617" rel="external noopener"><em>Journal of Innovation &amp; Knowledge</em>, bibliometric analysis and systematic literature review (2025)</a>.</li>
              <li><a href="https://commercial.allianz.com/news-and-insights/reports/allianz-risk-barometer.html" rel="external noopener">Allianz Risk Barometer 2026</a> — risk-priority shifts across cyber, AI, and natural catastrophe.</li>
              <li>Trade press: <a href="https://www.enr.com/articles/62214-infrastructure-gains-in-new-asce-report-cardbut-progress-hinges-on-post-2026-funds" rel="external noopener">ENR on the 2025 Report Card and the post-2026 funding cliff</a> (Dec 2025); <a href="https://www.constructiondive.com/spons/managing-construction-risk-in-the-ai-era/809149/" rel="external noopener">Construction Dive on AI-era risk management</a> (2026, sponsored content).</li>
            </ol>
            <p className="smallnote" style={{ marginTop: "1.6rem" }}>Exhibit source mapping — Ex.&nbsp;1: items 1–3, 6, 7 · Ex.&nbsp;2: items 5, 6 · Ex.&nbsp;3: items 2–4, 7, 8 · Ex.&nbsp;4: item 5; ISO&nbsp;31000 · Ex.&nbsp;5–6: internal scenario workshop on items 1–8 · Ex.&nbsp;7: items 1, 2, 6 · Ex.&nbsp;8: items 6, 9 · Ex.&nbsp;9: TRAVO practice playbooks · Ex.&nbsp;10: items 2–4, 10, 11 plus filings and legislative trackers.</p>
          </div>
        </section>

        </div>
        <ArticleEffects />
      </div>
    </>
  );
}
