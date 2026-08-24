"use client";

import { useEffect, useRef, useState } from "react";
import { SITE_URL } from "@/lib/site";

/**
 * The reference document's inquiry form, with the validation and custom-select
 * behaviour its inline script provided moved into React. The markup, the field
 * order, the option lists and the validation messages are the client's,
 * unchanged.
 *
 * Delivery differs from the reference: it built a mailto: draft in the
 * visitor's own mail client, whereas this posts natively to FormSubmit, which
 * relays the fields to CONTACT_EMAIL. Validation still runs first and blocks
 * the post if anything fails.
 *
 * TODO: the Privacy Notice and the "How this form works" panel still describe
 * the old mailto behaviour and state that nothing is transmitted to a web
 * server. That copy is now inaccurate and needs the client's sign-off to
 * change — see the handover note from 2026-08-23.
 */

const CONTACT_EMAIL = "principal@travo-advisory.com";

/**
 * FormSubmit (https://formsubmit.co) relays the submission to CONTACT_EMAIL.
 *
 * ACTIVATION: the first submission triggers a confirmation email to
 * CONTACT_EMAIL containing an activation link. It must be clicked once — until
 * it is, submissions are accepted but NOT delivered. Do this before launch, not
 * after, or live inquiries are silently lost. The submission can be sent from
 * localhost; the site does not need to be deployed.
 *
 * Addressing the endpoint by email rather than by FormSubmit's random alias
 * token is deliberate: the alias exists to keep the address out of the page
 * source, but this site already publishes it in three mailto: links and in the
 * JSON-LD, so the alias would protect nothing and adds a setup step for a
 * non-technical client.
 */
const FORM_ENDPOINT = `https://formsubmit.co/${CONTACT_EMAIL}`;
/** Where FormSubmit sends the visitor afterwards; ?sent=1 shows the confirmation. */
const FORM_RETURN_URL = `${SITE_URL}/contact?sent=1`;

type FieldEl = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
type Validator = (value: string, field: FieldEl) => true | string;

const validators: Record<string, Validator> = {
  name: (v) => v.trim().length >= 2 || "Enter your full name.",
  organization: (v) => v.trim().length >= 2 || "Enter your organization.",
  email: (v) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || "Enter a valid email address.",
  phone: (v) => {
    if (v.trim() === "") return true;
    return /^[+()\-.\s\d]{7,20}$/.test(v.trim()) || "Enter a valid phone number.";
  },
  "client-type": (v) => v !== "" || "Select a client type.",
  "project-location": (v) => v.trim().length >= 2 || "Enter the project location.",
  "project-value": (v) => v !== "" || "Select a project value range.",
  "project-stage": (v) => v !== "" || "Select the project stage.",
  "decision-type": (v) => v !== "" || "Select the type of analysis required.",
  message: (v) =>
    v.trim().length >= 20 ||
    "Describe the decision and what has changed (at least 20 characters).",
  consent: (_v, field) =>
    (field as HTMLInputElement).checked || "Confirm consent so we can prepare the inquiry.",
};

const SELECT_OPTIONS: Record<string, string[]> = {
  "client-type": [
    "Select…",
    "Owner / developer",
    "Lender / private credit",
    "Surety / SDI",
    "Construction counsel",
    "Contractor",
    "Public agency / municipality",
    "PM / CM / consultant",
    "Other"
  ],
  "project-value": [
    "Select…",
    "Under $10M",
    "$10M – $50M",
    "$50M – $150M",
    "$150M – $500M",
    "Over $500M",
    "Portfolio / program"
  ],
  "project-stage": [
    "Select…",
    "Project planning",
    "Project organization / procurement",
    "Construction planning / preconstruction",
    "Construction — on plan",
    "Construction — trending negatively",
    "Distress / pre-claim",
    "Dispute / forensic phase",
    "Complete / post-project",
    "Portfolio / organizational"
  ],
  "decision-type": [
    "Select…",
    "Commit / approve the project",
    "Set or test contingency / reserve",
    "Financing / underwriting / next draw",
    "Contractor / procurement decision",
    "Forecast credibility / cost-to-complete",
    "Project drift / recovery / intervention",
    "Emerging claim / technical exposure",
    "Forensic / delay / quantum question",
    "Post-project learning",
    "Training / seminar / workshop",
    "Methodology implementation",
    "Other / not sure"
  ]
};

function CustomSelect({
  id,
  invalid,
  onPick,
}: {
  id: string;
  invalid: "true" | "false" | undefined;
  onPick: (id: string, value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const wrapRef = useRef<HTMLDivElement>(null);
  const opts = SELECT_OPTIONS[id];

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  function choose(optValue: string) {
    setValue(optValue);
    setOpen(false);
    // The reference validated the native <select> the moment an option was
    // picked; state has not flushed yet, so validate against the new value.
    onPick(id, optValue);
  }

  return (
    <div className="custom-select-wrap" ref={wrapRef}>
      <select
        id={id}
        aria-describedby={"error-" + id}
        aria-invalid={invalid}
        name={id}
        required
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        tabIndex={-1}
      >
        {opts.map((label, i) => (
          <option key={label} value={i === 0 ? "" : label}>
            {label}
          </option>
        ))}
      </select>
      <button
        type="button"
        className={
          "custom-select-btn" + (open ? " is-open" : "") + (value ? " has-value" : "")
        }
        data-for={id}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={(e) => {
          e.stopPropagation();
          setOpen((o) => !o);
        }}
      >
        {value || opts[0]}
      </button>
      <ul
        className={"custom-select-list" + (open ? " is-open" : "")}
        role="listbox"
        aria-labelledby={id}
      >
        {opts.map((label, i) => (
          <li
            key={label}
            className="custom-select-option"
            data-value={i === 0 ? "" : label}
            role="option"
            aria-selected={value === (i === 0 ? "" : label)}
            onClick={() => choose(i === 0 ? "" : label)}
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function InquiryForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLParagraphElement>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<{ text: string; kind: "ok" | "error" | "" }>({
    text: "",
    kind: "",
  });

  function ariaInvalid(name: string): "true" | "false" | undefined {
    if (errors[name]) return "true";
    if (touched[name]) return "false";
    return undefined;
  }

  function validateField(field: FieldEl) {
    const fn = validators[field.name];
    if (!fn) return true;
    const result = fn(field.value, field);
    setTouched((prev) => ({ ...prev, [field.name]: true }));
    setErrors((prev) => ({ ...prev, [field.name]: result === true ? "" : result }));
    return result === true;
  }

  function validateSelect(id: string, value: string) {
    const fn = validators[id];
    if (!fn) return;
    const el = document.getElementById(id) as HTMLSelectElement | null;
    const result = fn(value, el as FieldEl);
    setTouched((prev) => ({ ...prev, [id]: true }));
    setErrors((prev) => ({ ...prev, [id]: result === true ? "" : result }));
  }

  function handleBlur(e: React.FocusEvent<FieldEl>) {
    validateField(e.currentTarget);
  }

  function handleInput(e: React.FormEvent<FieldEl>) {
    const field = e.currentTarget;
    if (errors[field.name]) validateField(field);
  }

  // FormSubmit redirects back here with ?sent=1 once it has accepted the post.
  // This has to run after mount rather than during render: the page is
  // statically prerendered, so reading window.location while rendering would
  // either be unavailable on the server or produce a hydration mismatch. It
  // fires once, sets state once, and cannot cascade.
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("sent") !== "1") return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStatus({
      text: "Thank you \u2014 your inquiry has been sent. You will receive a reply at the email address you provided.",
      kind: "ok",
    });
    statusRef.current?.focus();
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const form = formRef.current;
    if (!form) return;
    const fields = Array.from(form.querySelectorAll<FieldEl>("input, select, textarea"));
    let first: FieldEl | null = null;
    fields.forEach((field) => {
      const ok = validateField(field);
      if (!ok && !first) first = field;
    });
    if (first) {
      // Only block the native POST when something is actually wrong.
      e.preventDefault();
      setStatus({
        text: "Some fields need attention. Review the highlighted items above.",
        kind: "error",
      });
      (first as FieldEl).focus();
      return;
    }
    // Valid: let the browser submit to FormSubmit, which posts the fields on to
    // CONTACT_EMAIL and then returns the visitor to FORM_RETURN_URL.
    setStatus({ text: "Sending your inquiry\u2026", kind: "" });
  }

  return (
    <form
      id="inquiry-form"
      noValidate
      ref={formRef}
      onSubmit={handleSubmit}
      action={FORM_ENDPOINT}
      method="POST"
      acceptCharset="UTF-8"
    >
      {/* FormSubmit control fields. `_honey` is its honeypot: bots fill it in,
          people never see it, and any submission carrying a value is dropped. */}
      <input type="hidden" name="_subject" value="TRAVO website inquiry" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value={FORM_RETURN_URL} />
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ display: "none" }}
      />
          <div className="form-grid" style={{ marginTop: "clamp(2rem,4vw,3rem)" }}>
            <div className="form-field"><label htmlFor="name">Full name <span className="req" aria-hidden="true">*</span></label><input id="name" aria-describedby="error-name" name="name" required aria-invalid={ariaInvalid("name")} onBlur={handleBlur} onInput={handleInput} /><span className="field-error" id="error-name" aria-live="polite">{errors["name"]}</span></div>
            <div className="form-field"><label htmlFor="organization">Organization <span className="req" aria-hidden="true">*</span></label><input id="organization" aria-describedby="error-organization" name="organization" required aria-invalid={ariaInvalid("organization")} onBlur={handleBlur} onInput={handleInput} /><span className="field-error" id="error-organization" aria-live="polite">{errors["organization"]}</span></div>
            <div className="form-field"><label htmlFor="email">Email <span className="req" aria-hidden="true">*</span></label><input id="email" aria-describedby="error-email" name="email" type="email" required aria-invalid={ariaInvalid("email")} onBlur={handleBlur} onInput={handleInput} /><span className="field-error" id="error-email" aria-live="polite">{errors["email"]}</span></div>
            <div className="form-field"><label htmlFor="phone">Phone</label><input id="phone" aria-describedby="error-phone" name="phone" type="tel" aria-invalid={ariaInvalid("phone")} onBlur={handleBlur} onInput={handleInput} /><span className="field-error" id="error-phone" aria-live="polite">{errors["phone"]}</span></div>
            <div className="form-field"><label htmlFor="client-type">Client type <span className="req" aria-hidden="true">*</span></label><CustomSelect id="client-type" invalid={ariaInvalid("client-type")} onPick={validateSelect} /><span className="field-error" id="error-client-type" aria-live="polite">{errors["client-type"]}</span></div>
            <div className="form-field"><label htmlFor="project-location">Project location <span className="req" aria-hidden="true">*</span></label><input id="project-location" aria-describedby="error-project-location" name="project-location" required placeholder="City / county — NJ primary, NY metropolitan secondary" aria-invalid={ariaInvalid("project-location")} onBlur={handleBlur} onInput={handleInput} /><span className="field-error" id="error-project-location" aria-live="polite">{errors["project-location"]}</span></div>
            <div className="form-field"><label htmlFor="project-value">Project value range <span className="req" aria-hidden="true">*</span></label><CustomSelect id="project-value" invalid={ariaInvalid("project-value")} onPick={validateSelect} /><span className="field-error" id="error-project-value" aria-live="polite">{errors["project-value"]}</span></div>
            <div className="form-field"><label htmlFor="project-stage">Project stage <span className="req" aria-hidden="true">*</span></label><CustomSelect id="project-stage" invalid={ariaInvalid("project-stage")} onPick={validateSelect} /><span className="field-error" id="error-project-stage" aria-live="polite">{errors["project-stage"]}</span></div>
            <div className="form-field full"><label htmlFor="decision-type">Type of analysis required <span className="req" aria-hidden="true">*</span></label><CustomSelect id="decision-type" invalid={ariaInvalid("decision-type")} onPick={validateSelect} /><span className="field-error" id="error-decision-type" aria-live="polite">{errors["decision-type"]}</span></div>
            <div className="form-field full"><label htmlFor="message">Message <span className="req" aria-hidden="true">*</span></label><p style={{ fontSize: "var(--fs-meta)", fontFamily: "var(--mono)", color: "var(--teal-dark)", margin: "0 0 0.4rem", letterSpacing: "0.05em" }}>Describe the decision your project is facing and its timing.</p><textarea id="message" aria-describedby="error-message" name="message" required aria-invalid={ariaInvalid("message")} onBlur={handleBlur} onInput={handleInput}></textarea><span className="field-error" id="error-message" aria-live="polite">{errors["message"]}</span></div>
            <div className="form-field full"><div className="notice notice-neutral" style={{ marginBottom: "1.25rem" }}><span className="notice-label">How this form works</span><p>This single-file website does not transmit or store your form data. The button prepares an email in your local email client addressed to <a href="mailto:principal@travo-advisory.com">principal@travo-advisory.com</a>. You review and send the email yourself.</p></div></div>
            <div className="form-field full"><label className="consent"><input id="consent" aria-describedby="error-consent" name="consent" type="checkbox" required aria-invalid={ariaInvalid("consent")} onBlur={handleBlur} onInput={handleInput} /><span>I consent to <span className="travo-word">TRAVO</span> storing the information above for the purpose of responding to this inquiry. <span className="req" aria-hidden="true">*</span></span></label><span className="field-error" id="error-consent" aria-live="polite">{errors["consent"]}</span></div>
          </div>
          <button className="btn btn-submit-full mt-block" type="submit">Submit Inquiry</button>
          <p
            className={"form-status" + (status.kind ? " is-" + status.kind : "")}
            id="form-status"
            role="status"
            tabIndex={-1}
            ref={statusRef}
          >
            {status.text}
          </p>
        </form>
  );
}
