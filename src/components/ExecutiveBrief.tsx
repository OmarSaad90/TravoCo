import type { ReactNode } from "react";

import {
  BRIEF_ASK,
  BRIEF_AUTHOR,
  BRIEF_BYLINE_TAIL,
  BRIEF_CONTACT_EMAIL,
  BRIEF_CONTACT_HREF,
  BRIEF_FOOT,
  BRIEF_INDEPENDENCE,
  BRIEF_KICKER,
  BRIEF_LEAD,
  BRIEF_REGION,
  BRIEF_TITLE,
  FIGURES,
  FIGURES_LABEL,
  TAKEAWAYS,
  TAKEAWAYS_LABEL,
} from "@/lib/executive-brief";

type Props = {
  /**
   * The brief is an h1 on its own sheet and an h2 inside /research, which
   * already has a page heading. Nothing else about it changes.
   */
  headingLevel: "h1" | "h2";
  /** Set when the surrounding section labels itself by the brief's heading. */
  titleId?: string;
  /** Extra action rendered in the CTA band — e.g. the link to the full outlook. */
  action?: ReactNode;
  /** Rendered under the CTA band on the standalone sheet only. */
  showFoot?: boolean;
};

/**
 * The client's executive brief. Both places it appears render this component —
 * the A4 sheet and the /research section — so the two can never drift apart the
 * way his two hand-maintained copies had.
 *
 * Class names carry an `eb-` namespace because his originals (.kicker, .grid,
 * .fig, .lead, .rule) collide with names the site already owns. Styling lives
 * in `@/components/executive-brief.css`, which every consumer must import; the
 * `.eb` class on the wrapper is what those rules hang off. Copy lives in
 * `@/lib/executive-brief`.
 */
export default function ExecutiveBrief({ headingLevel, titleId, action, showFoot }: Props) {
  const Heading = headingLevel;

  return (
    <>
      <div className="eb-rule" />
      <p className="eb-kicker">{BRIEF_KICKER}</p>
      <Heading className="eb-title" id={titleId}>
        {BRIEF_TITLE}
      </Heading>
      <p className="eb-byline">
        by <b>{BRIEF_AUTHOR}</b> · {BRIEF_BYLINE_TAIL}
      </p>

      <p className="eb-lead">{BRIEF_LEAD}</p>

      <div className="eb-grid">
        <div>
          <p className="eb-label">{TAKEAWAYS_LABEL}</p>
          <ol className="eb-take">
            {TAKEAWAYS.map((item) => (
              <li key={item.lead}>
                <b>{item.lead}</b>
                {item.rest}
              </li>
            ))}
          </ol>
        </div>

        <aside className="eb-figs">
          <p className="eb-label eb-label-alt">{FIGURES_LABEL}</p>
          {FIGURES.map((figure) => (
            <div className="eb-fig" key={figure.value}>
              <div className="n">{figure.value}</div>
              <div className="t">
                {figure.caption.map((segment, index) =>
                  segment.bold ? (
                    <b key={index}>{segment.text}</b>
                  ) : (
                    <span key={index}>{segment.text}</span>
                  ),
                )}
              </div>
            </div>
          ))}
        </aside>
      </div>

      <div className="eb-cta">
        <div className="eb-tick" />
        <p className="eb-ask">{BRIEF_ASK}</p>
        <p>
          Request a decision-scoping call —{" "}
          <a href={BRIEF_CONTACT_HREF}>{BRIEF_CONTACT_EMAIL}</a>
          {BRIEF_REGION}
        </p>
        {action}
        <p className="eb-ind">{BRIEF_INDEPENDENCE}</p>
      </div>

      {showFoot ? <p className="eb-foot">{BRIEF_FOOT}</p> : null}
    </>
  );
}
