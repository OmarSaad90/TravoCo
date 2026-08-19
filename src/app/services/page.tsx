import type { Metadata } from "next";
import PageEffects from "@/components/PageEffects";

export const metadata: Metadata = {
  title: "Services — TRAVO",
  description:
    "TRAVO's construction risk and decision-analysis services organized by practice mode — predictive, adaptive, forensic and learning — from the Project Risk Screen to counsel-directed quantum review.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageEffects />
      <section className="section page-hero" aria-labelledby="services-title" id="services">
        <div className="wrap">
          <p className="kicker">
            <span className="section-num">03</span>Intervention points
          </p>
          <h1 id="services-title">
            One risk discipline. Services organized by what the project needs now.
          </h1>
          <p className="lede editorial">
            <em>
              The service catalog is grouped into four practice modes. Methodological
              ownership and delivery readiness are stated separately so a
              specialist-supported engagement is not presented as an in-house capability.
            </em>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="visually-hidden">Four practice modes</h2>
          <p className="small-caps-note">Find your entry point by role</p>
          <nav className="buyer-route-grid" aria-label="Service entry points by buyer role">
            <div className="buyer-route-card">
              <span className="buyer-route-name">Owners &amp; developers</span>
              <div className="buyer-route-links">
                <a href="#svc-p2">P2 · Preconstruction Risk Review</a>
                <a href="#svc-p3">P3 · Independent Risk Peer Review</a>
              </div>
            </div>
            <div className="buyer-route-card">
              <span className="buyer-route-name">Lenders &amp; private credit</span>
              <div className="buyer-route-links">
                <a href="#svc-a1">A1 · Project Risk Screen</a>
                <a href="#svc-a4">A4 · Lender Project-Risk Monitoring &amp; Draw Overlay</a>
                <a href="#svc-p6">
                  P6 · Independent Construction Risk Assessment — Underwriting
                </a>
              </div>
            </div>
            <div className="buyer-route-card">
              <span className="buyer-route-name">Sureties &amp; SDI</span>
              <div className="buyer-route-links">
                <a href="#svc-a5">A5 · Contractor Performance &amp; Completion-Risk Review</a>
              </div>
            </div>
            <div className="buyer-route-card">
              <span className="buyer-route-name">Construction counsel</span>
              <div className="buyer-route-links">
                <a href="#svc-f1">F1 · Counsel-Directed Project Risk &amp; Quantum Review</a>
              </div>
            </div>
            <div className="buyer-route-card">
              <span className="buyer-route-name">Public agencies &amp; program primes</span>
              <div className="buyer-route-links">
                <a href="#svc-p7">P7 · Independent Project Risk Review</a>
                <a href="#public-path-title">Public-sector pathway</a>
              </div>
            </div>
            <div className="buyer-route-card">
              <span className="buyer-route-name">Contractors</span>
              <div className="buyer-route-links">
                <a href="#svc-p1">P1 · Quantitative Risk Analysis &amp; Contingency</a>
                <a href="#svc-p4">P4 · Strategic Alternatives &amp; Scenario Analysis</a>
              </div>
            </div>
          </nav>
          <nav className="practice-nav" aria-label="Service practice areas">
            <a href="#predictive">Predictive Risk</a>
            <a href="#adaptive">Adaptive Risk</a>
            <a href="#forensic">Forensic Analysis</a>
            <a href="#learning">Learning &amp; Calibration</a>
          </nav>
          <div className="practice-grid" aria-label="TRAVO practice modes">
            <div className="practice-card">
              <p className="card-label">Predictive Risk</p>
              <h3>Before commitment</h3>
              <p>
                What might happen, how likely is it, and what should we do before
                committing capital or strategy?
              </p>
            </div>
            <div className="practice-card">
              <p className="card-label">Adaptive Risk</p>
              <h3>While the project is moving</h3>
              <p>
                What has changed since the original assessment, and what decision should be
                made now?
              </p>
            </div>
            <div className="practice-card">
              <p className="card-label">Forensic Analysis</p>
              <h3>Claims &amp; disputes when risk materializes</h3>
              <p>
                What happened, why, when, what is the technical exposure, and what analysis
                should follow?
              </p>
            </div>
            <div className="practice-card">
              <p className="card-label">Learning &amp; Calibration</p>
              <h3>After the outcome</h3>
              <p>What did reality teach us, and how should the next project be better informed?</p>
            </div>
          </div>

          <section className="common-entry-block" aria-labelledby="common-entry-title">
            <div className="section-head">
              <p className="kicker">Common entry points</p>
              <h2 id="common-entry-title">
                Four common entry points into the TRAVO lifecycle.
              </h2>
              <p className="lede col">
                These are not the limits of the practice. They are bounded starting points
                for a consequential decision; the full catalog below shows the broader
                lifecycle applications.
              </p>
            </div>
            <div className="grid grid-4">
              <a className="card service-entry-link" href="#svc-a1">
                <p className="card-label">Live project</p>
                <h3>Project Risk Screen</h3>
                <p>
                  Rapid, bounded triage when a current cost, completion, reserve or
                  intervention decision cannot wait for a full reforecast.
                </p>
              </a>
              <a className="card service-entry-link" href="#svc-a2">
                <p className="card-label">Deeper analysis</p>
                <h3>Full Project Risk Reforecast</h3>
                <p>
                  Integrated probabilistic cost/schedule reassessment when the updated
                  range, drivers and alternatives must be established independently.
                </p>
              </a>
              <a className="card service-entry-link" href="#svc-f1">
                <p className="card-label">Counsel-directed</p>
                <h3>Project Risk &amp; Quantum Review</h3>
                <p>
                  Technical cost, schedule, controls and quantum analysis when a claim is
                  emerging or positions are beginning to harden.
                </p>
              </a>
              <a className="card service-entry-link" href="#svc-p3">
                <p className="card-label">Independent challenge</p>
                <h3>Risk Peer Review</h3>
                <p>
                  A fixed-scope challenge of assumptions, contingency and treatment logic
                  when an existing analysis needs independent scrutiny.
                </p>
              </a>
            </div>
          </section>

          <div className="service-group" id="predictive">
            <div className="service-group-head">
              <div>
                <p className="card-label">Predictive Risk</p>
                <h2>Before commitment</h2>
              </div>
              <p>
                Risk assessment and decision analysis before capital, procurement,
                contingency, or execution choices harden.
              </p>
            </div>
            <details className="service" id="svc-p1">
              <summary>
                <span className="svc-code">P1</span>
                <span className="svc-name">
                  Quantitative Risk Analysis &amp; Contingency{" "}
                  <span className="service-status selective">selective</span>
                </span>
                <span className="svc-marker">+</span>
              </summary>
              <div className="svc-body">
                <p className="svc-q">
                  &ldquo;How much uncertainty is actually embedded in this plan, and what
                  contingency does the decision require?&rdquo;
                </p>
                <dl className="meta-list">
                  <dt>Primary buyer</dt>
                  <dd>
                    Owners, developers, agencies, capital committees, and project teams
                    facing a major baseline or contingency decision.
                  </dd>
                  <dt>Decision supported</dt>
                  <dd>
                    Whether the project basis, reserve, and risk treatment are appropriate
                    for the desired confidence level.
                  </dd>
                  <dt>Method</dt>
                  <dd>
                    Risk identification; deterministic baseline; sensitivity analysis;
                    probability distributions; Monte Carlo cost/schedule analysis where
                    appropriate; scenario analysis; structured risk register.
                  </dd>
                  <dt>Deliverable</dt>
                  <dd>
                    Decision-focused risk report with distributions, dominant drivers,
                    contingency implications, assumptions, data gaps, and recommended
                    actions.
                  </dd>
                  <dt>Delivery</dt>
                  <dd>
                    TRAVO-led analytical core; specialist technical inputs incorporated
                    where the decision requires them.
                  </dd>
                </dl>
              </div>
            </details>
            <details className="service" id="svc-p2">
              <summary>
                <span className="svc-code">P2</span>
                <span className="svc-name">
                  Preconstruction Risk Review{" "}
                  <span className="service-status selective">selective</span>
                </span>
                <span className="svc-marker">+</span>
              </summary>
              <div className="svc-body">
                <p className="svc-q">
                  &ldquo;Is the estimate, schedule and contingency basis strong enough to
                  commit capital?&rdquo;
                </p>
                <dl className="meta-list">
                  <dt>Primary buyer</dt>
                  <dd>
                    Owners, developers, lenders, or PM/CM primes at design-development, GMP,
                    financing, or authorization gates.
                  </dd>
                  <dt>Scope</dt>
                  <dd>
                    Basis of estimate (BOE) and completeness, estimate classification and
                    maturity, design-development allowances, escalation basis, schedule
                    realism, contingency, sequencing and site-logistics risk, and the
                    construction risks most likely to affect value.
                  </dd>
                  <dt>Decision supported</dt>
                  <dd>
                    Whether the cost, schedule, contingency, and execution basis are sound
                    enough to commit.
                  </dd>
                  <dt>Deliverable</dt>
                  <dd>
                    Independent preconstruction risk review memorandum or report with
                    prioritized findings, material risk observations, required
                    clarifications, risk-register additions or revisions, and a decision
                    briefing focused on readiness to proceed.
                  </dd>
                  <dt>Delivery</dt>
                  <dd>
                    TRAVO leads the independent risk analysis. Detailed multidisciplinary
                    constructability engineering is specialist-supported.
                  </dd>
                </dl>
              </div>
            </details>
            <details className="service" id="svc-p3">
              <summary>
                <span className="svc-code">P3</span>
                <span className="svc-name">
                  Independent Risk Peer Review{" "}
                  <span className="service-status">available now</span>
                </span>
                <span className="svc-marker">+</span>
              </summary>
              <div className="svc-body">
                <p className="svc-q">
                  &ldquo;Does this risk analysis actually support the decision we are about
                  to make?&rdquo;
                </p>
                <dl className="meta-list">
                  <dt>Primary buyer</dt>
                  <dd>
                    Institutional/private owners, public agencies through appropriate
                    procurement, or PM/CM primes as subconsultant.
                  </dd>
                  <dt>Trigger</dt>
                  <dd>
                    Gate approval, GMP negotiation, contractor risk submission, contingency
                    decision, or board review.
                  </dd>
                  <dt>Deliverable</dt>
                  <dd>
                    Fixed-scope independent challenge of the register, assumptions,
                    contingency and treatment plan; workshop; ranked findings; executive
                    briefing.
                  </dd>
                  <dt>Position</dt>
                  <dd>
                    A strong entry point when the owner wants an independent check without
                    replacing the existing project-controls team.
                  </dd>
                </dl>
              </div>
            </details>
            <details className="service" id="svc-p4">
              <summary>
                <span className="svc-code">P4</span>
                <span className="svc-name">
                  Strategic Alternatives &amp; Scenario Analysis{" "}
                  <span className="service-status selective">selective</span>
                </span>
                <span className="svc-marker">+</span>
              </summary>
              <div className="svc-body">
                <p className="svc-q">
                  &ldquo;Which materially different path creates the best risk-adjusted
                  result?&rdquo;
                </p>
                <dl className="meta-list">
                  <dt>Use cases</dt>
                  <dd>
                    Delivery strategy, phasing, technology choices, construction strategy,
                    make/buy decisions, recovery strategy, and other alternatives that
                    cannot be represented as small parameter changes.
                  </dd>
                  <dt>Method</dt>
                  <dd>
                    Scenario analysis, multi-criteria decision analysis, real-options
                    thinking, decision utility, and value-of-information analysis where
                    appropriate.
                  </dd>
                  <dt>Deliverable</dt>
                  <dd>
                    Scenario-comparison report with the decision frame, evaluation
                    criteria, comparative risk-adjusted assessment across the relevant
                    objectives, sensitivity on key drivers, and a recommended decision
                    path.
                  </dd>
                  <dt>Value optimization</dt>
                  <dd>Compares alternatives against the objectives that matter — not cost alone.</dd>
                </dl>
              </div>
            </details>
            <details className="service">
              <summary>
                <span className="svc-code">P5</span>
                <span className="svc-name">
                  Bid Risk &amp; Procurement Review{" "}
                  <span className="service-status selective">selective</span>
                </span>
                <span className="svc-marker">+</span>
              </summary>
              <div className="svc-body">
                <p className="svc-q">
                  &ldquo;What risk sits behind the bid price, and what should the award
                  decision account for?&rdquo;
                </p>
                <dl className="meta-list">
                  <dt>Primary buyer</dt>
                  <dd>Private and institutional owners, developers, and PM/CM primes.</dd>
                  <dt>Scope</dt>
                  <dd>
                    Pricing assumptions, schedule exposure, risk transfer, contingency
                    implications, and post-award controls through a quantitative risk lens.
                  </dd>
                  <dt>Deliverable</dt>
                  <dd>
                    Bid-risk review memorandum or report identifying pricing assumptions,
                    latent risk transfer, schedule and contingency implications,
                    bid-comparison observations, and procurement or administration
                    considerations.
                  </dd>
                  <dt>Public work</dt>
                  <dd>
                    On statutory procurements, the analysis supports permissible
                    risk/contingency and administration decisions; it does not purport to
                    re-rank a legally prescribed award.
                  </dd>
                </dl>
              </div>
            </details>
            <details className="service" id="svc-p6">
              <summary>
                <span className="svc-code">P6</span>
                <span className="svc-name">
                  Independent Construction Risk Assessment — Underwriting{" "}
                  <span className="service-status selective">relationship</span>
                </span>
                <span className="svc-marker">+</span>
              </summary>
              <div className="svc-body">
                <p className="svc-q">
                  &ldquo;Is the project risk understandable enough to underwrite this
                  exception or commitment?&rdquo;
                </p>
                <dl className="meta-list">
                  <dt>Primary buyer</dt>
                  <dd>
                    Lenders, private-credit providers, sureties, and investors on complex or
                    distressed collateral.
                  </dd>
                  <dt>Scope</dt>
                  <dd>
                    Independent cost/schedule/completion risk assessment for a defined
                    financing or underwriting decision.
                  </dd>
                  <dt>Deliverable</dt>
                  <dd>
                    Underwriting risk memorandum covering completion exposure, cost and
                    schedule range, reserve implications, material assumptions, key
                    conditions, and the underwriting questions or protections the decision
                    should consider.
                  </dd>
                  <dt>Delivery</dt>
                  <dd>
                    One deal at a time, with reliance, conflicts, insurance and specialist
                    requirements agreed in advance.
                  </dd>
                </dl>
              </div>
            </details>
            <details className="service" id="svc-p7">
              <summary>
                <span className="svc-code">P7</span>
                <span className="svc-name">
                  Independent Project Risk Review{" "}
                  <span className="service-status partner">specialist-supported</span>
                </span>
                <span className="svc-marker">+</span>
              </summary>
              <div className="svc-body">
                <p className="svc-q">
                  &ldquo;Are the construction cost, schedule, contingency, and delivery
                  assumptions behind this proposal credible?&rdquo;
                </p>
                <dl className="meta-list">
                  <dt>Primary buyer</dt>
                  <dd>Public or private decision-makers evaluating a major proposal.</dd>
                  <dt>TRAVO core</dt>
                  <dd>
                    Construction cost, schedule, contingency, delivery assumptions, and
                    infrastructure-related construction risk.
                  </dd>
                  <dt>Deliverable</dt>
                  <dd>
                    Independent project-risk review report focused on the construction risk
                    assumptions, schedule and contingency logic, identified gaps, required
                    follow-up questions, and clearly stated interfaces with any specialist
                    disciplines.
                  </dd>
                  <dt>Boundary</dt>
                  <dd>
                    Grid economics, fiscal-impact analysis, water policy, environmental
                    disciplines, or community-benefit analysis require appropriately
                    qualified specialist partners and are not represented as TRAVO-only
                    opinions.
                  </dd>
                </dl>
              </div>
            </details>
            <div className="notice notice-neutral mt-block">
              <p>
                TRAVO brings particular decision-analysis depth to projects where unresolved
                subsurface conditions materially affect cost, schedule, contingency or the
                value of additional investigation. The principal&apos;s published work
                includes tunnel exploration planning under uncertainty and exploration
                analysis using Bayesian updating and Value of Information. In commercial
                work, this supports questions such as how much additional investigation is
                worth undertaking before commitment; how unresolved subsurface assumptions
                should be represented in cost and schedule risk models; and how those
                uncertainties affect contingency, procurement or other project decisions.
              </p>
              <p>
                Where the contract includes a differing-site-conditions provision or
                establishes a geotechnical baseline, the stated subsurface reference
                conditions can become important inputs to both risk allocation and the
                quantitative model. TRAVO analyzes how the stated baseline, the
                investigation actually performed and the residual subsurface uncertainty
                interact: what assumptions should enter the cost and schedule model, how
                alternative allocations affect modeled exposure, and what contingency or
                additional investigation the remaining uncertainty may justify. The legal
                meaning of the contract, entitlement under the clause and the parties&apos;
                contractual rights remain counsel&apos;s determination.
              </p>
            </div>
          </div>

          <div className="service-group" id="adaptive">
            <div className="service-group-head">
              <div>
                <p className="card-label">Adaptive Risk</p>
                <h2>While the project is moving</h2>
              </div>
              <p>
                Observation creates new information. The model, risk record, and decision
                should change when the evidence changes.
              </p>
            </div>
            <details className="service" id="svc-a1">
              <summary>
                <span className="svc-code">A1</span>
                <span className="svc-name">
                  Project Risk Screen <span className="service-status">available now</span>
                </span>
                <span className="svc-marker">+</span>
              </summary>
              <div className="svc-body">
                <p className="svc-q">
                  &ldquo;Is the current cost and completion forecast still credible — and do
                  we need to act now?&rdquo;
                </p>
                <dl className="meta-list">
                  <dt>Primary buyer</dt>
                  <dd>
                    Lender, surety, owner, board, or other capital decision-maker facing a
                    live project question.
                  </dd>
                  <dt>Trigger</dt>
                  <dd>
                    Adverse trend, upcoming draw, underwriting exception, covenant
                    question, reserve concern, or unexpected project change.
                  </dd>
                  <dt>Decision supported</dt>
                  <dd>Whether to fund, reserve, investigate further, escalate, or intervene.</dd>
                  <dt>Deliverable</dt>
                  <dd>
                    Rapid, bounded triage output: preliminary cost-to-complete / estimate to
                    complete (ETC) and schedule range, dominant drivers, structured risk
                    information record, data-gap log, and executive briefing.
                  </dd>
                  <dt>Response model</dt>
                  <dd>
                    Rapid, bounded triage intended for a live decision under pressure, with
                    the exact scope and deliverable package confirmed in the written
                    proposal.
                  </dd>
                </dl>
              </div>
            </details>
            <details className="service" id="svc-a2">
              <summary>
                <span className="svc-code">A2</span>
                <span className="svc-name">
                  Full Project Risk Reforecast{" "}
                  <span className="service-status">available now</span>
                </span>
                <span className="svc-marker">+</span>
              </summary>
              <div className="svc-body">
                <p className="svc-q">
                  &ldquo;What is the updated range of outcomes, what is driving it, and
                  which response creates the best risk-adjusted result?&rdquo;
                </p>
                <dl className="meta-list">
                  <dt>Trigger</dt>
                  <dd>
                    A Screen confirms material uncertainty or a decision requires a full
                    independent reforecast.
                  </dd>
                  <dt>Deliverable</dt>
                  <dd>
                    Integrated probabilistic cost/schedule reforecast, updated risk
                    information record, scenarios, root-cause drivers, prioritized
                    management alternatives, and an executive decision report.
                  </dd>
                </dl>
              </div>
            </details>
            <details className="service">
              <summary>
                <span className="svc-code">A3</span>
                <span className="svc-name">
                  Forecast &amp; Risk-Register Refresh{" "}
                  <span className="service-status follow">follow-on</span>
                </span>
                <span className="svc-marker">+</span>
              </summary>
              <div className="svc-body">
                <p className="svc-q">&ldquo;What changed since the last decision?&rdquo;</p>
                <dl className="meta-list">
                  <dt>Offered to</dt>
                  <dd>
                    Existing clients following a Screen, Reforecast, or other defined
                    baseline engagement.
                  </dd>
                  <dt>Scope</dt>
                  <dd>
                    Periodic re-run of the model, update/re-prioritization of the live
                    register, and concise exception reporting on what changed and why.
                  </dd>
                  <dt>Deliverable</dt>
                  <dd>
                    Updated forecast package with revised risk information record,
                    documented changes from the prior position, exception notes, and
                    concise decision-focused reporting.
                  </dd>
                  <dt>Update mode</dt>
                  <dd>
                    Designed as a follow-on analytical refresh — not day-to-day register
                    administration or staff augmentation.
                  </dd>
                </dl>
              </div>
            </details>
            <details className="service" id="svc-a4">
              <summary>
                <span className="svc-code">A4</span>
                <span className="svc-name">
                  Lender Project-Risk Monitoring &amp; Draw Overlay{" "}
                  <span className="service-status partner">partner-supported</span>
                </span>
                <span className="svc-marker">+</span>
              </summary>
              <div className="svc-body">
                <p className="svc-q">
                  &ldquo;Is this draw supported, and is completion exposure changing?&rdquo;
                </p>
                <dl className="meta-list">
                  <dt>Primary buyer</dt>
                  <dd>Construction lenders and private-credit providers.</dd>
                  <dt>TRAVO role</dt>
                  <dd>
                    Independent probabilistic project-risk, contingency, schedule and
                    cost-to-complete overlay for the credit decision.
                  </dd>
                  <dt>Deliverable</dt>
                  <dd>
                    Decision memorandum or overlay report addressing draw support,
                    completion exposure, reserve or contingency implications, and material
                    changes in project-risk conditions.
                  </dd>
                  <dt>Delivery boundary</dt>
                  <dd>
                    TRAVO&apos;s analytical overlay may interface with an established
                    partner&apos;s construction loan monitoring, construction budget
                    review, progress monitoring and cost-to-complete review. Field
                    inspections, high-volume draw administration, funds-control functions
                    and broad geographic monitoring networks remain partner-delivered
                    rather than represented as TRAVO-only capabilities.
                  </dd>
                </dl>
              </div>
            </details>
            <details className="service" id="svc-a5">
              <summary>
                <span className="svc-code">A5</span>
                <span className="svc-name">
                  Contractor Performance &amp; Completion-Risk Review{" "}
                  <span className="service-status partner">specialist-supported</span>
                </span>
                <span className="svc-marker">+</span>
              </summary>
              <div className="svc-body">
                <p className="svc-q">
                  &ldquo;Are project-level signals showing that completion exposure is
                  deteriorating?&rdquo;
                </p>
                <dl className="meta-list">
                  <dt>Primary buyer</dt>
                  <dd>Sureties, SDI programs, owners, or lenders with contractor exposure.</dd>
                  <dt>TRAVO core</dt>
                  <dd>
                    Project performance, cost-to-complete, schedule, change exposure,
                    production and early-warning project indicators.
                  </dd>
                  <dt>Deliverable</dt>
                  <dd>
                    Completion-risk review identifying deterioration signals, probable
                    exposure drivers, focused follow-up questions, and the technical
                    implications for reserve, intervention, or escalation decisions.
                  </dd>
                  <dt>Boundary</dt>
                  <dd>
                    Formal financial-statement, WIP, solvency, credit or
                    surety-underwriting interpretation is performed with a construction CPA
                    or surety specialist where required.
                  </dd>
                </dl>
              </div>
            </details>
          </div>

          <div className="service-group" id="forensic">
            <div className="service-group-head">
              <div>
                <p className="card-label">Claims &amp; Disputes</p>
                <h2>Forensic analysis &amp; technical dispute support</h2>
              </div>
              <p>
                When risk materializes or a claim is emerging, the analysis shifts from
                forecasting future uncertainty to reconstructing the project record,
                testing causation and quantifying technical cost and schedule consequences.
              </p>
            </div>
            <details className="service" id="svc-f1">
              <summary>
                <span className="svc-code">F1</span>
                <span className="svc-name">
                  Counsel-Directed Project Risk &amp; Quantum Review{" "}
                  <span className="service-status">available now</span>
                </span>
                <span className="svc-marker">+</span>
              </summary>
              <div className="svc-body">
                <p className="svc-q">
                  &ldquo;What does the technical record tell us before positions
                  harden?&rdquo;
                </p>
                <dl className="meta-list">
                  <dt>Primary buyer</dt>
                  <dd>
                    Construction-litigation counsel facing an emerging claim, notice,
                    mediation, or technical exposure question.
                  </dd>
                  <dt>Role</dt>
                  <dd>
                    Technical early case assessment and dispute-support analysis performed
                    in a consulting (non-testifying) expert role under counsel&apos;s
                    direction.
                  </dd>
                  <dt>Common technical subjects</dt>
                  <dd>
                    Common technical subjects at this phase may include differing site
                    conditions and baseline comparison, preliminary delay and disruption
                    causation, productivity impacts, change-order accumulation, and the
                    cost or schedule consequences of unresolved project conditions.
                  </dd>
                  <dt>Deliverable</dt>
                  <dd>
                    Phase-one consulting-expert memorandum covering the defined
                    document/data set, preliminary delay, cost and quantum exposure,
                    dominant technical drivers, assumptions, exclusions, and data gaps.
                  </dd>
                  <dt>Boundaries</dt>
                  <dd>
                    No legal opinions or claims advocacy. Privilege and work-product
                    questions are addressed by counsel and depend on the engagement
                    structure, applicable law and the circumstances of the matter. Conflict
                    and role sequencing are resolved at engagement acceptance.
                  </dd>
                </dl>
              </div>
            </details>
            <details className="service" id="svc-f2">
              <summary>
                <span className="svc-code">F2</span>
                <span className="svc-name">
                  Deep Delay, Quantum &amp; Forensic Analysis{" "}
                  <span className="service-status partner">specialist-supported</span>
                </span>
                <span className="svc-marker">+</span>
              </summary>
              <div className="svc-body">
                <p className="svc-q">
                  &ldquo;Does the claim or dispute record justify a deeper forensic
                  phase?&rdquo;
                </p>
                <dl className="meta-list">
                  <dt>Scope</dt>
                  <dd>
                    Detailed forensic schedule analysis, including CPM-based delay and
                    disruption analysis, causation reconstruction, quantum/damages
                    modeling, rebuttal and methodology testing as warranted by phase-one
                    findings.
                  </dd>
                  <dt>Deliverable</dt>
                  <dd>
                    Separately scoped deeper forensic package that may include delay
                    analysis, quantum modeling, rebuttal support, and structured technical
                    findings appropriate to the dispute stage.
                  </dd>
                  <dt>Delivery</dt>
                  <dd>
                    Specialist scheduling, quantum and document-review capacity is
                    incorporated where required. Where testimony is required, the
                    testifying-expert role is handled through an appropriately qualified
                    specialist selected for the matter and subject to conflict, prior-role,
                    independence and qualification review.
                  </dd>
                  <dt>Role control</dt>
                  <dd>
                    TRAVO&apos;s own role remains technical and consulting-focused; it does
                    not accept a testifying-expert role on the matter.
                  </dd>
                </dl>
              </div>
            </details>
          </div>

          <div className="service-group" id="learning">
            <div className="service-group-head">
              <div>
                <p className="card-label">Learning &amp; Calibration</p>
                <h2>After the outcome</h2>
              </div>
              <p>
                Close the loop: compare the forecast with reality, improve the methodology,
                and carry evidence into the next project.
              </p>
            </div>
            <details className="service">
              <summary>
                <span className="svc-code">L1</span>
                <span className="svc-name">
                  Post-Project Risk Review &amp; Lessons Learned{" "}
                  <span className="service-status follow">follow-on / selective</span>
                </span>
                <span className="svc-marker">+</span>
              </summary>
              <div className="svc-body">
                <p className="svc-q">
                  &ldquo;What actually drove the outcome, and what should the next project
                  do differently?&rdquo;
                </p>
                <dl className="meta-list">
                  <dt>Primary buyer</dt>
                  <dd>
                    Institutional owners, public agencies, lenders or sureties after a
                    completed or troubled project.
                  </dd>
                  <dt>Scope</dt>
                  <dd>
                    Which risks materialized, which were missed, where mitigation worked,
                    and where cost/schedule departed from plan and why.
                  </dd>
                  <dt>Deliverable</dt>
                  <dd>
                    Post-project review with quantified variance decomposition, lessons
                    learned, and specific updates to future risk methodology, templates,
                    controls and decision processes.
                  </dd>
                  <dt>Boundary</dt>
                  <dd>
                    A technical and risk-management review — not a financial/statutory
                    audit or investigation of individuals.
                  </dd>
                </dl>
              </div>
            </details>
            <details className="service">
              <summary>
                <span className="svc-code">L2</span>
                <span className="svc-name">
                  Portfolio Risk Benchmarking{" "}
                  <span className="service-status develop">developing</span>
                </span>
                <span className="svc-marker">+</span>
              </summary>
              <div className="svc-body">
                <p className="svc-q">
                  &ldquo;How does our portfolio compare with a defensible evidence
                  base?&rdquo;
                </p>
                <dl className="meta-list">
                  <dt>Sequencing</dt>
                  <dd>
                    Available only when the research dataset is sufficiently normalized,
                    governed, and deep to support valid comparison.
                  </dd>
                  <dt>Deliverable</dt>
                  <dd>
                    When the evidence base is ready, portfolio benchmarking would provide
                    comparative ranges, pattern observations, and decision-relevant
                    interpretation rather than unsupported headline rankings.
                  </dd>
                  <dt>Principle</dt>
                  <dd>
                    TRAVO does not sell benchmarking against a dataset that does not yet
                    support the claim.
                  </dd>
                </dl>
              </div>
            </details>
            <details className="service">
              <summary>
                <span className="svc-code">L3</span>
                <span className="svc-name">
                  Methodology Implementation{" "}
                  <span className="service-status develop">later-stage</span>
                </span>
                <span className="svc-marker">+</span>
              </summary>
              <div className="svc-body">
                <p className="svc-q">&ldquo;We want to institutionalize this capability.&rdquo;</p>
                <dl className="meta-list">
                  <dt>Primary buyer</dt>
                  <dd>
                    Institutional owners, public agencies, and large contractors building
                    internal quantitative risk capability.
                  </dd>
                  <dt>Scope</dt>
                  <dd>
                    Methodology framework, governance, templates, tooling configuration,
                    roles, implementation support, and organizational change.
                  </dd>
                  <dt>Deliverable</dt>
                  <dd>
                    Implementation roadmap with governance structure, process design,
                    templates, role definitions, tooling approach, and staged support for
                    embedding the methodology inside the organization.
                  </dd>
                  <dt>Position</dt>
                  <dd>
                    Distinct from seminars and workshops. This developing institutional
                    service is intended for organizations seeking to embed the methodology
                    in their own governance, processes, templates and tools.
                  </dd>
                </dl>
              </div>
            </details>
          </div>

          <div className="notice notice-neutral mt-block">
            <span className="notice-label">What remains outside the catalog</span>
            <p>
              TRAVO is a focused risk-assessment and decision-analysis practice, not a
              generalist construction-management consultancy. Staff augmentation, day-to-day
              project administration, design or engineering-of-record services, legal
              opinions, and claims advocacy sit outside the catalog. Specialist disciplines
              are identified at proposal rather than implied as in-house capabilities.
            </p>
          </div>
          <div className="notice mt-block">
            <span className="notice-label">Commercial terms</span>
            <p>
              Scope, timing, fee, reliance, specialist participation and re-open triggers
              are confirmed in a written proposal. Commercial terms are handled
              consistently at engagement intake rather than published selectively across
              only some services.
            </p>
          </div>
          <div className="two-col-split mt-block" aria-labelledby="public-path-title">
            <div>
              <p className="kicker">
                <span className="section-num">Public</span>Public-sector pathway
              </p>
              <h3 id="public-path-title">
                Specialist risk work that fits established program structures.
              </h3>
              <p>
                Public-sector opportunities are pursued through the registration,
                procurement and teaming requirements applicable to each assignment. For
                major public programs, TRAVO can serve as a specialist quantitative-risk
                subconsultant to established program-management, project-controls or
                oversight primes, subject to applicable procurement and teaming
                requirements. Direct public work proceeds only when the required
                procurement conditions are satisfied.
              </p>
            </div>
            <div className="notice notice-neutral">
              <span className="notice-label">Delivery model</span>
              <p>
                The focus remains construction risk assessment and decision analysis.
                Disciplines outside that core are defined explicitly and incorporated
                through appropriately qualified project partners where needed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
