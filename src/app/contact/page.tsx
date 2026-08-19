import type { Metadata } from "next";
import PageEffects from "@/components/PageEffects";
import InquiryForm from "./InquiryForm";

export const metadata: Metadata = {
  title: "Contact — TRAVO",
  description:
    "Start a decision-scoping call with TRAVO to discuss a construction cost, schedule, contingency or dispute decision.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageEffects />
      <section className="section page-hero" aria-labelledby="contact-title" id="contact">
        <div className="wrap">
          <p className="kicker">
            <span className="section-num">10</span>Contact
          </p>
          <h1 id="contact-title">Start with the decision that matters most.</h1>
          <p className="lede editorial">
            <em>
              TRAVO engagements begin at a decision. Describe the decision, the project
              stage, and what has changed. TRAVO will determine whether the question fits
              the practice and what level of analysis is appropriate.
            </em>
          </p>
        </div>
      </section>

      <section className="section section-soft reveal" aria-labelledby="contact-triggers-title">
        <div className="wrap">
          <div className="premium-section-intro">
            <div>
              <p className="kicker">
                <span className="section-num">01</span>Common reasons to call
              </p>
              <h2 id="contact-triggers-title">
                Bring TRAVO in when the decision must be defensible.
              </h2>
            </div>
            <div>
              <p className="lede">
                TRAVO is most useful when uncertainty is material enough to change the
                decision—and the cost of getting that decision wrong justifies
                independent analysis.
              </p>
            </div>
          </div>
          <div className="grid grid-4 mt-block">
            <div className="card contact-trigger-card">
              <p className="small-caps-note">Before commitment</p>
              <h3>Capital or assumptions are about to be fixed.</h3>
              <p>
                Capital, contingency, procurement or underwriting assumptions are about
                to be fixed and the range of outcomes needs to be understood.
              </p>
              <p className="small-caps-note">Typical decisions</p>
              <ul className="contact-trigger-list">
                <li>Setting or testing project contingency</li>
                <li>Reviewing a contractor or project-team risk submission</li>
                <li>Leveling bids or evaluating procurement alternatives</li>
                <li>Comparing materially different project strategies</li>
              </ul>
            </div>
            <div className="card contact-trigger-card">
              <p className="small-caps-note">When the project changes</p>
              <h3>The existing basis is no longer reliable.</h3>
              <p>
                Actual performance, emerging conditions or new information has made the
                existing forecast or contingency basis unreliable.
              </p>
              <p className="small-caps-note">Typical decisions</p>
              <ul className="contact-trigger-list">
                <li>Reassessing a project beginning to drift</li>
                <li>Forecasting cost at completion</li>
                <li>Forecasting schedule at completion</li>
                <li>Determining whether contingency, reserve or intervention should change</li>
              </ul>
            </div>
            <div className="card contact-trigger-card">
              <p className="small-caps-note">Before positions harden</p>
              <h3>A developing issue needs an independent technical view.</h3>
              <p>
                A significant cost, schedule or commercial issue is developing and the
                technical record needs independent assessment before it becomes a claim
                or dispute position.
              </p>
              <p className="small-caps-note">Typical decisions</p>
              <ul className="contact-trigger-list">
                <li>Evaluating an emerging cost or schedule issue</li>
                <li>Testing the technical basis of a developing claim</li>
                <li>Establishing the current range of exposure</li>
                <li>Determining what additional analysis or documentation is needed</li>
              </ul>
            </div>
            <div className="card contact-trigger-card">
              <p className="small-caps-note">When the answer needs challenge</p>
              <h3>Others may rely on an existing conclusion.</h3>
              <p>
                An existing risk analysis, forecast, contingency recommendation or
                project assumption needs independent scrutiny before others rely on it.
              </p>
              <p className="small-caps-note">Typical decisions</p>
              <ul className="contact-trigger-list">
                <li>Independent risk peer review</li>
                <li>Challenging assumptions in an existing forecast</li>
                <li>Reviewing contingency or treatment logic</li>
                <li>Testing whether the evidence supports the conclusion</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="notice notice-neutral">
            <span className="notice-label">30-minute decision-scoping call</span>
            <p>
              Describe the decision, the project stage and what has changed. TRAVO will
              determine whether the question fits the practice, what level of analysis may
              be appropriate, and what falls outside the scope. Do not send confidential or
              privileged material before engagement terms and information-handling
              requirements are established.
            </p>
          </div>
          <InquiryForm />
        </div>
      </section>

      <section className="section" id="privacy" aria-labelledby="privacy-title">
        <div className="wrap">
          <div className="col">
            <h2 id="privacy-title">Privacy Notice</h2>
            <p className="lede editorial">
              <em>
                This notice explains how information entered through the TRAVO website
                inquiry form and sent by email is handled.
              </em>
            </p>
            <h3>Information entered through the inquiry form</h3>
            <p>
              The form may collect your name, organization, email address, optional
              telephone number, client type, project location, project stage, decision
              type, and the message you choose to provide. The website prepares those
              details in a draft email; you review and send the email yourself.
            </p>
            <h3>How TRAVO uses inquiry information</h3>
            <p>
              TRAVO uses inquiry information to respond to you, evaluate whether the
              matter fits the practice, identify potential conflicts or role constraints,
              and prepare an engagement discussion where appropriate.
            </p>
            <h3>Confidential and privileged information</h3>
            <p>
              Submitting the website form does not create a client relationship,
              consulting engagement, attorney-client relationship, privilege or
              work-product protection. Do not send privileged, confidential,
              export-controlled, personal-sensitive, or other restricted project documents
              through the website form before appropriate engagement and confidentiality
              arrangements are in place.
            </p>
            <h3>Transmission and service providers</h3>
            <p>
              This website does not transmit inquiry-form content to TRAVO or to a web
              server. Selecting &ldquo;Prepare inquiry email&rdquo; prepares a draft
              message in your local email application; you decide whether to send it. If
              you send the message, it is then processed through your email provider and
              TRAVO&apos;s email provider under their respective systems. TRAVO does not
              sell or rent inquiry information, does not use it for advertising, and does
              not add inquiry contacts to marketing lists without a separate opt-in. The
              website does not include advertising trackers or analytics cookies by
              default.
            </p>
            <h3>Website inquiry security</h3>
            <p>
              The inquiry form uses client-side validation and does not store form data on
              the website or submit it to a web server. It is not configured to send
              inquiry content to external AI services. The form prepares a local email
              draft, and you control whether that email is sent. Do not submit privileged,
              confidential or sensitive project documents through the website form before
              appropriate engagement and confidentiality arrangements are in place.
            </p>
            <h3>Retention</h3>
            <p>
              Inquiry information is retained only as reasonably necessary to respond,
              evaluate an engagement, maintain appropriate business and conflict records,
              and satisfy applicable legal or professional obligations.
              Engagement-specific retention, legal-hold and destruction requirements are
              governed by the applicable engagement terms and TRAVO operating controls
              rather than by a universal public retention period.
            </p>
            <h3>Research separation</h3>
            <p>
              <strong>Inquiry information is not used as research input.</strong> Client
              work does not become research data automatically; any use beyond the
              engagement follows the applicable consent, confidentiality and data-rights
              controls. Information may be shared with professional advisers, service
              providers or proposed specialists only where appropriate to the purpose,
              confidentiality obligations and engagement context.
            </p>
            <h3>Contact</h3>
            <p>
              Questions about this notice or website inquiry information may be directed
              to <a href="mailto:principal@travo-advisory.com">principal@travo-advisory.com</a>.
            </p>
            <p className="muted">
              <span className="mono">Effective:</span> August 15, 2026.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
