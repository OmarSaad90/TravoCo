import type { Metadata } from "next";
import PageEffects from "@/components/PageEffects";

export const metadata: Metadata = {
  title: "About — TRAVO",
  description:
    "TRAVO is the commercial application of Dr. Karim S. Karam's research, industry and teaching experience in construction risk and decision analysis.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageEffects />
      <section className="section page-hero" aria-labelledby="about-title" id="about">
        <div className="wrap">
          <p className="kicker">
            <span className="section-num">09</span>About
          </p>
          <h1 id="about-title">Research. Industry. Teaching. One risk discipline.</h1>
          <p className="lede editorial">
            <em>
              TRAVO is the commercial application of a career spent studying, applying and
              teaching engineering decision-making under uncertainty.
            </em>
          </p>
        </div>
      </section>

      <section className="section reveal" aria-labelledby="background-title">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">
              <span className="section-num">01</span>Founder evidence
            </p>
            <h2 id="background-title">The methodology was developed across three environments.</h2>
          </div>
          <div className="source-triad">
            <div className="card">
              <p className="card-label">Research</p>
              <h3>Risk, uncertainty &amp; decision analysis</h3>
              <p>
                Dr. Karim S. Karam studied civil and environmental engineering at Imperial
                College London before earning master&rsquo;s and doctoral degrees at MIT.
                His Ph.D. thesis, <em>Landslide Risk Assessment and Uncertainties</em>, was
                supervised by Herbert H. Einstein and Daniele Veneziano. His subsequent
                work extended the same analytical foundation into infrastructure risk,
                decision analysis, multi-attribute objectives and the value of additional
                information before a decision is made.
              </p>
            </div>
            <div className="card">
              <p className="card-label">Industry</p>
              <h3>Risk under real project conditions</h3>
              <p>
                As Co-Founder, Partner and Advisor to the Board of Sarooj Construction
                Company, Dr. Karam applied planning, cost, schedule, production and
                decision-analysis thinking across major infrastructure work. That
                operating experience was developed while helping build a construction
                business that completed more than 170 infrastructure projects totaling
                more than $1 billion of work. On selected projects, stochastic
                multi-attribute analysis was used to compare construction strategies
                across competing project objectives.
              </p>
            </div>
            <div className="card">
              <p className="card-label">Teaching</p>
              <h3>Risk as a systematic discipline</h3>
              <p>
                At Stevens Institute of Technology, Dr. Karam teaches construction risk
                assessment, uncertainty, project planning, monitoring and control, and the
                relationship between project information and decision-making. Teaching
                requires the reasoning behind a project decision to be made explicit: what
                is known, what remains uncertain, what assumptions are being made, and how
                the decision should change as evidence changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft reveal" aria-labelledby="mission-vision-title">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">
              <span className="section-num">02</span>Mission &amp; Vision
            </p>
            <h2 id="mission-vision-title">
              A focused practice with a defined purpose and direction.
            </h2>
          </div>
          <div className="grid grid-2">
            <div className="card">
              <p className="card-label">Mission</p>
              <p>
                <strong>
                  Turn project uncertainty into decisions that optimize value under risk.
                </strong>{" "}
                TRAVO converts incomplete information into quantified risk, evaluates
                clear alternatives, and identifies the course that best serves the
                decision-maker&rsquo;s objectives.{" "}
                <strong>
                  TRAVO owns the rigor of the analysis; the decision remains with the
                  decision-maker.
                </strong>
              </p>
            </div>
            <div className="card">
              <p className="card-label">Vision</p>
              <p>
                <strong>
                  To become the trusted regional reference point for independent
                  construction risk assessment and decision analysis in the New Jersey and
                  New York metropolitan market—known for methodological rigor, depth of
                  judgment, and evidence that withstands scrutiny.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section reveal" aria-labelledby="principal-title">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">
              <span className="section-num">03</span>The Principal
            </p>
            <h2 id="principal-title">
              Risk methodology. Operating judgment. Academic discipline.
            </h2>
          </div>
          <div className="col">
            <p className="lede">
              <strong>
                Dr. Karim S. Karam&rsquo;s work has followed one recurring problem: how to
                make consequential project decisions when the information is incomplete,
                the outcome is uncertain, and waiting for certainty is not an option.
              </strong>
            </p>
            <p>
              Research provided the formal methods for describing uncertainty,
              quantifying risk and comparing alternatives. Operating experience tested
              those methods against live project conditions, where assumptions meet
              production, cost, schedule, contractual constraints and the practical
              consequences of being wrong. Teaching requires the same reasoning to be made
              explicit enough to examine, challenge and explain.
            </p>
            <p>
              The combination matters because quantitative analysis alone does not make a
              decision sound. A model depends on the quality of the information entering
              it, the assumptions used to represent what is not known, the judgment
              applied to its outputs, and the alternatives available to the
              decision-maker.
            </p>
            <p>
              <strong>TRAVO brings those disciplines together.</strong> The analysis is
              quantitative where quantification improves the decision, informed by
              operating judgment where models require interpretation, and structured so
              that assumptions, uncertainty, alternatives and the basis for the analytical
              conclusion can be examined under scrutiny.
            </p>
            <p>
              The principal remains accountable for that analytical answer. The objective
              is not to replace the judgment of the owner, lender, surety, counsel,
              contractor or public decision-maker. It is to give that judgment a clearer
              basis: what the available evidence supports, what remains uncertain, what
              can materially change the outcome, and what the decision requires next.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-ink on-dark reveal" aria-labelledby="principles-title">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">
              <span className="section-num">04</span>Operating principles
            </p>
            <h2 id="principles-title">How the practice is accepted, executed and declined.</h2>
          </div>
          <div className="grid grid-3">
            <div className="card on-dark">
              <p className="card-label">Rigor</p>
              <h3>Methodological rigor over methodological theater</h3>
              <p>
                Outputs should be derivable from documented assumptions, traceable inputs
                and a method that can be explained under scrutiny.
              </p>
            </div>
            <div className="card on-dark">
              <p className="card-label">Independence</p>
              <h3>Independence is non-negotiable</h3>
              <p>
                Analysis is not softened to preserve a commercial relationship. Adverse
                roles on the same project are controlled at acceptance, and TRAVO refuses
                referral, fee-sharing, reciprocal-referral or other commercial arrangements
                that could compromise — or reasonably appear to compromise — analytical
                independence.
              </p>
            </div>
            <div className="card on-dark">
              <p className="card-label">Evidence</p>
              <h3>Evidence before positioning</h3>
              <p>
                Case-study language, benchmarking claims, affiliations and
                operating-capability statements should follow evidence rather than precede
                it.
              </p>
            </div>
            <div className="card on-dark">
              <p className="card-label">Accountability</p>
              <h3>Principal accountability for the answer.</h3>
              <p>
                A principal-led specialist model is valuable only if senior accountability
                is real: the analytical answer is reviewed, explained and signed by the
                principal.
              </p>
            </div>
            <div className="card on-dark">
              <p className="card-label">Compounding</p>
              <h3>Engagements should compound</h3>
              <p>
                Where permissions and data rights allow, lessons should improve methods,
                templates, training and the next engagement rather than merely fill the
                calendar.
              </p>
            </div>
            <div className="card on-dark">
              <p className="card-label">Boundaries</p>
              <h3>Specialty practice, not a body shop</h3>
              <p>
                TRAVO does not disguise staff augmentation, general construction
                management or unrelated specialty opinions as quantitative risk advisory.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft reveal" aria-labelledby="independence-title">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">
              <span className="section-num">05</span>Independent practice
            </p>
            <h2 id="independence-title">Principal accountability for every analytical answer.</h2>
          </div>
          <div className="grid grid-2">
            <div>
              <p className="lede">
                TRAVO is a focused construction risk-assessment and decision-analysis
                practice. It does not attempt to replace the project team, act as
                construction manager, or claim every specialty as an in-house capability.
              </p>
              <p>
                Where an assignment requires licensed engineering, field inspection,
                construction accounting, deep forensic scheduling, testimony or another
                specialist discipline, that requirement is identified and appropriately
                qualified partners are brought into the engagement.
              </p>
            </div>
            <div>
              <div className="notice notice-neutral">
                <span className="notice-label">Acceptance principle</span>
                <p>
                  TRAVO follows the project-risk lifecycle from the perspective of the
                  party it has been engaged to advise. Conflicts, prior roles, reliance,
                  professional boundaries and future dispute roles are resolved before the
                  engagement proceeds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section reveal" aria-labelledby="regional-title">
        <div className="wrap">
          <div className="two-col-split">
            <div>
              <p className="kicker">
                <span className="section-num">06</span>Regional focus
              </p>
              <h2 id="regional-title">New Jersey · New York metropolitan construction decisions.</h2>
              <p>
                TRAVO is organized as a focused regional specialty practice rather than a
                generalist national consultancy. The aim is depth of decision support,
                principal accountability and a partner model for disciplines or
                geographic coverage outside the core analytical practice.
              </p>
            </div>
            <div className="notice notice-neutral">
              <span className="notice-label">Capital-at-risk lens</span>
              <p>
                Owners, lenders, private credit, sureties and counsel may enter the same
                project at different decision points. The project reality is shared; the
                exposure and decision are party-specific.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft reveal" aria-labelledby="founder-perspective-title">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">
              <span className="section-num">07</span>Founder perspective
            </p>
            <h2 id="founder-perspective-title">Why this practice exists.</h2>
          </div>
          <details className="service">
            <summary>
              <span className="svc-code">LETTER</span>
              <span className="svc-name">Read the Founder&rsquo;s Perspective</span>
              <span className="svc-marker">+</span>
            </summary>
            <div className="svc-body">
              <article className="letter">
                <hr aria-hidden="true" className="drop-rule" />
                <p>
                  I grew up in construction. Long before I studied risk formally, I
                  learned from job sites that projects are built through
                  judgment—by people making decisions with imperfect information,
                  changing conditions and consequences that are rarely confined to a
                  single cost or schedule number.
                </p>
                <p>
                  What changed for me later was learning that uncertainty did not have to
                  remain something people simply described as &ldquo;high,&rdquo;
                  &ldquo;medium&rdquo; or &ldquo;low.&rdquo; It could be examined
                  systematically. Assumptions could be made explicit. Different outcomes
                  could be represented as ranges rather than single forecasts.
                  Alternatives could be compared. And as new information arrived, the
                  analysis—and therefore the decision—could change.
                </p>
                <p>
                  That idea has stayed with me throughout my career:{" "}
                  <strong>
                    a project plan should not become more certain merely because it has
                    been approved.
                  </strong>{" "}
                  Construction continuously produces new information. Good project
                  decision-making requires us to observe that information, test what it
                  means, and update our view when the evidence changes.
                </p>
                <p>
                  Operating on real projects added an equally important lesson. Analysis
                  earns its place only when it can improve the decision. A model that does
                  not help determine contingency, identify what deserves further
                  investigation, distinguish among alternatives, show when a forecast is
                  no longer credible, or indicate when intervention may be warranted is
                  analytical activity—not decision support.
                </p>
                <p>That is why I created TRAVO.</p>
                <p>
                  The practice begins with the decision rather than the software. We ask
                  what must be decided, what is known, what remains uncertain, what
                  alternatives are available, and what evidence could materially change
                  the answer. Risk analysis makes the uncertainty visible. Decision
                  analysis makes the alternatives explicit. The objective is to identify
                  the course that best serves the decision-maker&rsquo;s objectives under
                  the conditions actually facing the project.
                </p>
                <p>
                  I believe independent analysis also carries a responsibility. The
                  analytical answer should be traceable to evidence, assumptions should be
                  visible, limitations should be stated, and the person responsible for
                  the work should stand behind it. TRAVO owns that rigor. The decision
                  remains with the decision-maker.
                </p>
                <p>
                  <strong>
                    That is the practice I wanted to build: one in which uncertainty is
                    not hidden behind a single forecast, analysis is not performed for its
                    own sake, and better information leads to better decisions.
                  </strong>
                </p>
                <p className="signoff">
                  — Dr. Karim S. Karam
                  <span className="role">Principal, TRAVO</span>
                </p>
              </article>
            </div>
          </details>
        </div>
      </section>
    </>
  );
}
