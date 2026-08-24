import Link from "next/link";
import TravoWord from "./TravoWord";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-top">
        <div>
          <Link className="wordmark" href="/" aria-label="TRAVO home">
            <img className="brand-logo" src="/brand-logo-footer.png" alt="TRAVO logo" />
            <span className="brand-tagline">Quantified Risk. Disciplined Decisions.</span>
          </Link>
          <p className="footer-tag">Total Risk Analysis and Value Optimization</p>
        </div>
        <nav aria-label="Footer — practice">
          <p className="footer-heading">Practice</p>
          <ul>
            <li>
              <Link href="/lifecycle">
                How <TravoWord /> Works
              </Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/claims">Claims &amp; Disputes</Link>
            </li>
            <li>
              <Link href="/methodology">Methodology</Link>
            </li>
            <li>
              <Link href="/training">Training &amp; Seminars</Link>
            </li>
          </ul>
        </nav>
        <nav aria-label="Footer — firm">
          <p className="footer-heading">Firm</p>
          <ul>
            <li>
              <Link href="/research">Research &amp; Insights</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/methodology#governance">Governance</Link>
            </li>
            <li>
              <Link href="/contact#privacy">Privacy Notice</Link>
            </li>
          </ul>
        </nav>
        <div>
          <p className="footer-heading">Contact</p>
          <p className="footer-contact">
            <span>
              Email:{" "}
              <a href="mailto:principal@travo-advisory.com" style={{ color: "var(--white)" }}>
                principal@travo-advisory.com
              </a>
            </span>
            <span>New Jersey · New York metropolitan region</span>
          </p>
          <p style={{ marginTop: "1rem" }}>
            <Link className="btn btn-primary" href="/contact">
              Request a decision-scoping call
            </Link>
          </p>
        </div>
      </div>
      <div className="footer-bottom-band">
        <div className="wrap footer-bottom">
          <span>
            © 2026 <TravoWord />. All rights reserved.
          </span>
          <span>Independent construction risk assessment &amp; decision analysis.</span>
        </div>
      </div>
    </footer>
  );
}
