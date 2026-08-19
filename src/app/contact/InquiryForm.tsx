"use client";

import { useRef, useState } from "react";

const CONTACT_EMAIL = "principal@travo-advisory.com";

type Validator = (value: string, field: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) => true | string;

const validators: Record<string, Validator> = {
  name: (v) => v.trim().length >= 2 || "Enter your full name.",
  organization: (v) => v.trim().length >= 2 || "Enter your organization.",
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || "Enter a valid email address.",
  phone: (v) => v.trim() === "" || /^[+()\-.\s\d]{7,20}$/.test(v.trim()) || "Enter a valid phone number.",
  "client-type": (v) => v !== "" || "Select who you are.",
  "project-location": (v) => v.trim().length >= 2 || "Enter the project location.",
  "project-stage": (v) => v !== "" || "Select the project stage.",
  "decision-type": (v) => v !== "" || "Select the decision facing the project.",
  message: (v) =>
    v.trim().length >= 20 ||
    "Describe the decision and what has changed (at least 20 characters).",
  consent: (v, field) => (field as HTMLInputElement).checked || "Confirm consent so we can prepare the inquiry.",
};

export default function InquiryForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<{ text: string; kind: "ok" | "error" | "" }>({
    text: "",
    kind: "",
  });
  const statusRef = useRef<HTMLParagraphElement>(null);

  function validateField(field: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) {
    const fn = validators[field.name];
    if (!fn) return true;
    const result = fn(field.value, field);
    setErrors((prev) => ({ ...prev, [field.name]: result === true ? "" : result }));
    return result === true;
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    validateField(e.target);
  }

  function handleInput(e: React.FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const field = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    if (errors[field.name]) validateField(field);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const fields = Array.from(
      form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
        "input, select, textarea"
      )
    );
    let first: HTMLElement | null = null;
    fields.forEach((field) => {
      const ok = validateField(field);
      if (!ok && !first) first = field;
    });
    if (first) {
      setStatus({
        text: "Some fields need attention. Review the highlighted items above.",
        kind: "error",
      });
      (first as HTMLElement).focus();
      return;
    }

    const val = (id: string) => (form.elements.namedItem(id) as HTMLInputElement | null)?.value.trim() || "";
    const subject = `TRAVO inquiry — ${val("decision-type")} — ${val("organization")}`;
    const body =
      `Name: ${val("name")}\n` +
      `Organization: ${val("organization")}\n` +
      `Email: ${val("email")}\n` +
      `Phone: ${val("phone") || "—"}\n` +
      `Client type: ${val("client-type")}\n` +
      `Project location: ${val("project-location")}\n` +
      `Project stage: ${val("project-stage")}\n` +
      `Decision: ${val("decision-type")}\n\n` +
      `Decision and what has changed:\n${val("message")}\n`;
    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setStatus({
      text: "Your inquiry email is ready. Your email application should open next; review the message and send it when ready.",
      kind: "ok",
    });
    statusRef.current?.focus();
    window.location.href = href;
  }

  return (
    <form className="mt-block" id="inquiry-form" noValidate ref={formRef} onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="name">
            Name{" "}
            <span className="req" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="name"
            aria-describedby="error-name"
            aria-invalid={errors.name ? "true" : "false"}
            name="name"
            required
            onBlur={handleBlur}
            onInput={handleInput}
          />
          <span className="field-error" id="error-name" aria-live="polite">
            {errors.name}
          </span>
        </div>
        <div className="form-field">
          <label htmlFor="organization">
            Organization{" "}
            <span className="req" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="organization"
            aria-describedby="error-organization"
            aria-invalid={errors.organization ? "true" : "false"}
            name="organization"
            required
            onBlur={handleBlur}
            onInput={handleInput}
          />
          <span className="field-error" id="error-organization" aria-live="polite">
            {errors.organization}
          </span>
        </div>
        <div className="form-field">
          <label htmlFor="email">
            Email{" "}
            <span className="req" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="email"
            aria-describedby="error-email"
            aria-invalid={errors.email ? "true" : "false"}
            name="email"
            type="email"
            required
            onBlur={handleBlur}
            onInput={handleInput}
          />
          <span className="field-error" id="error-email" aria-live="polite">
            {errors.email}
          </span>
        </div>
        <div className="form-field">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            aria-describedby="error-phone"
            aria-invalid={errors.phone ? "true" : "false"}
            name="phone"
            type="tel"
            onBlur={handleBlur}
            onInput={handleInput}
          />
          <span className="field-error" id="error-phone" aria-live="polite">
            {errors.phone}
          </span>
        </div>
        <div className="form-field">
          <label htmlFor="client-type">
            You are{" "}
            <span className="req" aria-hidden="true">
              *
            </span>
          </label>
          <select
            id="client-type"
            aria-describedby="error-client-type"
            aria-invalid={errors["client-type"] ? "true" : "false"}
            name="client-type"
            required
            onBlur={handleBlur}
            onChange={handleInput}
          >
            <option value="">Select…</option>
            <option>Owner / developer</option>
            <option>Lender / private credit</option>
            <option>Surety / SDI</option>
            <option>Construction counsel</option>
            <option>Contractor</option>
            <option>Public agency / municipality</option>
            <option>PM / CM / consultant</option>
            <option>Other</option>
          </select>
          <span className="field-error" id="error-client-type" aria-live="polite">
            {errors["client-type"]}
          </span>
        </div>
        <div className="form-field">
          <label htmlFor="project-location">
            Project location{" "}
            <span className="req" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="project-location"
            aria-describedby="error-project-location"
            aria-invalid={errors["project-location"] ? "true" : "false"}
            name="project-location"
            required
            onBlur={handleBlur}
            onInput={handleInput}
          />
          <span className="field-error" id="error-project-location" aria-live="polite">
            {errors["project-location"]}
          </span>
        </div>
        <div className="form-field">
          <label htmlFor="project-stage">
            Project stage{" "}
            <span className="req" aria-hidden="true">
              *
            </span>
          </label>
          <select
            id="project-stage"
            aria-describedby="error-project-stage"
            aria-invalid={errors["project-stage"] ? "true" : "false"}
            name="project-stage"
            required
            onBlur={handleBlur}
            onChange={handleInput}
          >
            <option value="">Select…</option>
            <option>Project planning</option>
            <option>Project organization / procurement</option>
            <option>Construction planning / preconstruction</option>
            <option>Construction — on plan</option>
            <option>Construction — trending negatively</option>
            <option>Distress / pre-claim</option>
            <option>Dispute / forensic phase</option>
            <option>Complete / post-project</option>
            <option>Portfolio / organizational</option>
          </select>
          <span className="field-error" id="error-project-stage" aria-live="polite">
            {errors["project-stage"]}
          </span>
        </div>
        <div className="form-field">
          <label htmlFor="decision-type">
            Decision facing the project{" "}
            <span className="req" aria-hidden="true">
              *
            </span>
          </label>
          <select
            id="decision-type"
            aria-describedby="error-decision-type"
            aria-invalid={errors["decision-type"] ? "true" : "false"}
            name="decision-type"
            required
            onBlur={handleBlur}
            onChange={handleInput}
          >
            <option value="">Select…</option>
            <option>Commit / approve the project</option>
            <option>Set or test contingency / reserve</option>
            <option>Financing / underwriting / next draw</option>
            <option>Contractor / procurement decision</option>
            <option>Forecast credibility / cost-to-complete</option>
            <option>Project drift / recovery / intervention</option>
            <option>Emerging claim / technical exposure</option>
            <option>Forensic / delay / quantum question</option>
            <option>Post-project learning</option>
            <option>Training / seminar / workshop</option>
            <option>Methodology implementation</option>
            <option>Other / not sure</option>
          </select>
          <span className="field-error" id="error-decision-type" aria-live="polite">
            {errors["decision-type"]}
          </span>
        </div>
        <div className="form-field full">
          <label htmlFor="message">
            Describe the decision and what has changed{" "}
            <span className="req" aria-hidden="true">
              *
            </span>
          </label>
          <textarea
            id="message"
            aria-describedby="error-message"
            aria-invalid={errors.message ? "true" : "false"}
            name="message"
            required
            onBlur={handleBlur}
            onInput={handleInput}
          />
          <span className="field-error" id="error-message" aria-live="polite">
            {errors.message}
          </span>
        </div>
        <div className="form-field full">
          <label className="consent">
            <input
              id="consent"
              aria-describedby="error-consent"
              aria-invalid={errors.consent ? "true" : "false"}
              name="consent"
              type="checkbox"
              required
              onBlur={handleBlur}
              onChange={handleInput}
            />
            <span>
              I consent to TRAVO using these details to respond to my inquiry, as
              described in the <a href="#privacy">Privacy Notice</a>.{" "}
              <span className="req" aria-hidden="true">
                *
              </span>
            </span>
          </label>
          <span className="field-error" id="error-consent" aria-live="polite">
            {errors.consent}
          </span>
        </div>
      </div>
      <p className="mt-block">
        <button className="btn btn-primary" type="submit">
          Prepare inquiry email
        </button>
      </p>
      <p
        className={`form-status${status.kind ? ` is-${status.kind}` : ""}`}
        id="form-status"
        role="status"
        tabIndex={-1}
        ref={statusRef}
      >
        {status.text}
      </p>
      <div className="notice notice-neutral">
        <span className="notice-label">How this form works</span>
        <p>
          This website does not transmit or store your form data. The button
          prepares an email in your local email client addressed to{" "}
          <a href="mailto:principal@travo-advisory.com">principal@travo-advisory.com</a>.
          You review and send the email yourself.
        </p>
      </div>
    </form>
  );
}
