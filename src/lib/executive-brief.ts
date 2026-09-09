/**
 * The copy for the one-page executive brief that accompanies "The Risk
 * Intelligence Imperative".
 *
 * The client sent the brief twice: once as a print-only block inside the
 * article, once as a standalone A4 sheet. They are not the same text — the
 * standalone is a later editorial pass that strips the hedges ("could
 * increasingly appear through less favorable insurance terms" became "the cost
 * of lagging is concrete") and adds the four-number evidence panel. That
 * tightened version is the one here, and it is the only copy of it: the brief
 * renders twice from this module — as a section on /research and as the
 * printable sheet — so the two can never drift the way his did.
 *
 * Bold runs are data rather than markup so both renderers can style them
 * without duplicating the sentences.
 */

export type Segment = { text: string; bold?: boolean };

export const BRIEF_KICKER = "Executive brief · 2026–2031";
export const BRIEF_TITLE = "The Risk Intelligence Imperative";
export const BRIEF_AUTHOR = "Dr. Karim S. Karam";
export const BRIEF_BYLINE_TAIL = "Principal, TRAVO · July 2026 · travo.co";

export const BRIEF_LEAD =
  "By 2031, continuous, auditable risk intelligence becomes a condition of competing for major engineering programs — priced first through insurance and procurement, not regulation. Firms that stay on static risk documents face a growing “analog penalty.”";

export const TAKEAWAYS_LABEL = "What leaders should take away";

export const TAKEAWAYS: { lead: string; rest: string }[] = [
  {
    lead: "Four forces converge now",
    rest: " — a $3.7T US infrastructure funding gap, six straight $100B+ catastrophe-loss years, doubling AEC AI adoption, and a shifting standard of care.",
  },
  {
    lead: "It arrives first through pricing",
    rest: " — insurance underwriting and procurement prequalification move before professional and legal expectations do.",
  },
  {
    lead: "The cost of lagging is concrete",
    rest: " — worse insurance terms, weaker bids, and less defensible professional judgment.",
  },
  {
    lead: "The winning moves pay off in every scenario",
    rest: " — a versioned risk-data backbone, decision governance, paired talent, and outside-view forecasting.",
  },
  {
    lead: "Start with one live decision, not a program",
    rest: " — establish the current risk picture, the few drivers that matter, and whether today’s forecast still holds.",
  },
];

export const FIGURES_LABEL = "The evidence, in four numbers";

export const FIGURES: { value: string; caption: Segment[] }[] = [
  {
    value: "$3.7T",
    caption: [
      { text: "US infrastructure funding " },
      { text: "gap", bold: true },
      { text: " through 2033 (ASCE, 2025)" },
    ],
  },
  {
    value: "6 years",
    caption: [
      { text: "consecutive " },
      { text: "$100B+", bold: true },
      { text: " insured catastrophe seasons (Swiss Re)" },
    ],
  },
  {
    value: "27% → 94%",
    caption: [
      { text: "AEC firms " },
      { text: "using AI", bold: true },
      { text: " / of adopters " },
      { text: "expanding", bold: true },
      { text: " (Bluebeam, 2025)" },
    ],
  },
  {
    value: "~0.5%",
    caption: [
      { text: "of major projects hit " },
      { text: "budget, time and benefits", bold: true },
      { text: " (Flyvbjerg)" },
    ],
  },
];

export const BRIEF_ASK = "The bounded first step is a Project Risk Screen.";
export const BRIEF_CONTACT_EMAIL = "principal@travo-advisory.com";
export const BRIEF_CONTACT_HREF =
  "mailto:principal@travo-advisory.com?subject=Decision-scoping%20call:%20Risk%20Intelligence%20brief";
export const BRIEF_REGION = " · New Jersey / New York metropolitan region.";
export const BRIEF_INDEPENDENCE = "Independent · principal-led · decision-focused";

export const BRIEF_FOOT =
  "Independent, research-informed strategic foresight — not project-specific engineering advice · © 2026 TRAVO";

/** Where the full outlook lives. */
export const ARTICLE_PATH = "/insights/risk-intelligence-imperative";
export const BRIEF_PATH = "/insights/risk-intelligence-imperative/executive-brief";
