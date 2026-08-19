import type { Metadata } from "next";
import Link from "next/link";
import PageEffects from "@/components/PageEffects";

export const metadata: Metadata = {
  title: "Claims & Disputes — TRAVO",
  description:
    "Counsel-directed technical analysis of construction cost, schedule, controls and quantum, before and after positions harden.",
  alternates: { canonical: "/claims" },
};

export default function ClaimsPage() {
  return (
    <>
      <PageEffects />
      <section className="section page-hero" aria-labelledby="claims-title" id="claims">
        <div className="wrap">
          <p className="kicker">
            <span className="section-num">05</span>Claims &amp; Disputes
          </p>
          <h1 id="claims-title">
            Technical analysis behind counsel — before and after positions harden.
          </h1>
          <p className="lede editorial">
            <em>
              When project risk materializes, the analytical question changes from what may
              happen to what the record shows happened, why it happened, and what the
              technical exposure means.
            </em>
          </p>
        </div>
      </section>

      <section className="section reveal" aria-labelledby="claims-role-title">
        <div className="wrap">
          <div className="premium-section-intro">
            <div>
              <p className="kicker">
                <span className="section-num">01</span>Role
              </p>
              <h2 id="claims-role-title">
                Forensic analysis is the method. Claims &amp; disputes are the market
                context.
              </h2>
            </div>
            <div>
              <p className="lede">
                TRAVO provides counsel-directed technical analysis of project cost,
                schedule, controls and quantum (cost and damages quantification). Counsel
                determines entitlement, legal risk allocation, claim strategy and advocacy;
                privilege and work-product questions depend on the engagement structure,
                applicable law and the circumstances of the matter.
              </p>
            </div>
          </div>
          <div className="notice mt-block">
            <span className="notice-label">Why phase one</span>
            <p>
              A bounded phase-one technical review helps counsel identify the principal
              technical issues, preliminary exposure, data gaps, and whether deeper
              forensic analysis is warranted before a larger expert team is engaged. The
              engagement remains technical and counsel-directed; counsel determines legal
              conclusions and claim strategy, and any privilege or work-product protection
              depends on the engagement structure, applicable law and the circumstances of
              the matter.
            </p>
          </div>
          <div className="notice notice-neutral mt-block">
            <span className="notice-label">Conditional branch</span>
            <p>
              Claims and disputes are not a normal project phase. They are one possible
              path when risk materializes. Forensic analysis may begin before a formal
              claim and continue as the record, positions and proceedings develop.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-soft reveal" aria-labelledby="claims-services-title">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">
              <span className="section-num">02</span>Engagements
            </p>
            <h2 id="claims-services-title">Two levels of technical dispute work.</h2>
          </div>
          <div className="grid grid-2">
            <div className="card">
              <p className="card-label">F1 · Available now</p>
              <h3>Counsel-Directed Project Risk &amp; Quantum Review</h3>
              <p>
                Phase-one consulting-expert review of a defined project record to establish
                preliminary delay, cost and quantum exposure, dominant technical drivers,
                assumptions, exclusions and data gaps.
              </p>
              <p>
                <Link href="/services#svc-f1">See detailed deliverable →</Link>
              </p>
            </div>
            <div className="card">
              <p className="card-label">F2 · Specialist-supported</p>
              <h3>Deep Delay, Quantum &amp; Forensic Analysis</h3>
              <p>
                Deeper CPM/delay, causation, quantum, rebuttal or methodology work where
                phase-one findings justify a larger forensic effort and the matter requires
                specialist depth.
              </p>
              <p>
                <Link href="/services#svc-f2">See detailed deliverable →</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-ink on-dark reveal" aria-labelledby="claims-boundaries-title">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">
              <span className="section-num">03</span>Boundaries
            </p>
            <h2 id="claims-boundaries-title">
              Independent technical analysis, with legal and expert roles kept explicit.
            </h2>
          </div>
          <div className="grid grid-2">
            <div className="card on-dark">
              <p className="card-label">Counsel-directed</p>
              <h3>Technical conclusions, not legal conclusions</h3>
              <p>
                TRAVO analyzes technical cost, schedule, controls, causation inputs and
                quantum. It does not provide legal opinions or claims advocacy.
              </p>
            </div>
            <div className="card on-dark">
              <p className="card-label">Privilege</p>
              <h3>Counsel determines legal protection</h3>
              <p>
                Engagement structure, privilege and work-product treatment depend on the
                matter and are determined by counsel rather than promised by TRAVO.
              </p>
            </div>
            <div className="card on-dark">
              <p className="card-label">Role sequencing</p>
              <h3>Prior roles can restrict later roles</h3>
              <p>
                Monitoring, underwriting, retainer or other prior advisory work is reviewed
                for conflict, independence and fact-witness implications before any later
                forensic or testimony role is considered.
              </p>
            </div>
            <div className="card on-dark">
              <p className="card-label">Testifying work</p>
              <h3>Specialist testimony</h3>
              <p>
                TRAVO&apos;s own role remains technical and consulting-focused. Where
                testimony is required, the testifying-expert role is handled through an
                appropriately qualified specialist selected for the matter and reviewed for
                conflicts, prior roles and independence.
              </p>
            </div>
          </div>
          <p className="mt-block">
            <Link className="btn btn-primary" href="/contact">
              Discuss an emerging claim or dispute
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
