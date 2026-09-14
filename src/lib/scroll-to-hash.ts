/**
 * PURPOSE: move the viewport to an in-page anchor the way this site needs it —
 * clear of the sticky masthead, and with a collapsed <details> service panel
 * opened first so the reader lands on content rather than on a closed summary.
 *
 * BEHAVIOR: returns false and does nothing when the id is absent from the
 * document. That is the signal callers use to tell "this anchor is on another
 * page" apart from "this anchor is here": the nav calls it on click for the
 * same-page case, and PageEffects calls it again after the next route mounts.
 *
 * WHY the offset is measured rather than written as a CSS `scroll-margin-top`:
 * the masthead is a topbar plus a navbar, both of which wrap at narrow widths,
 * so its height is a range rather than a value. Measuring it keeps one source
 * of truth instead of a constant that has to be re-tuned per breakpoint.
 */

/** Breathing room between the masthead and the element scrolled to, in px. */
const CLEARANCE = 14;

export function scrollToHash(hash: string): boolean {
  const id = hash.replace(/^#/, "");
  if (!id) return false;

  const target = document.getElementById(id);
  if (!target) return false;

  if (target.tagName === "DETAILS") {
    (target as HTMLDetailsElement).open = true;
  }

  const header = document.querySelector(".site-header");
  const headerHeight = header ? header.getBoundingClientRect().height : 0;
  const y = target.getBoundingClientRect().top + window.scrollY - headerHeight - CLEARANCE;
  window.scrollTo(0, Math.max(0, y));
  return true;
}
