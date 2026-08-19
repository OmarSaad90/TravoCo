"use client";

import { useEffect } from "react";

/**
 * Ports two behaviors the original single-file site handled in its inline
 * router script (showPage()):
 *  1. Fade in every `.reveal` element on the page once it's mounted.
 *  2. If the URL has a hash (e.g. /services#svc-p1), open it if it's a
 *     <details> element and scroll to it, offset for the sticky header.
 */
export default function PageEffects() {
  useEffect(() => {
    document.querySelectorAll(".reveal").forEach((el) => {
      el.classList.add("is-visible");
    });

    const hash = window.location.hash.replace(/^#/, "");
    if (!hash) return;
    const target = document.getElementById(hash);
    if (!target) return;

    if (target.tagName === "DETAILS") {
      (target as HTMLDetailsElement).open = true;
    }

    const header = document.querySelector(".site-header");
    const headerHeight = header ? header.getBoundingClientRect().height : 0;
    const y = target.getBoundingClientRect().top + window.scrollY - headerHeight - 14;
    window.scrollTo(0, Math.max(0, y));
  }, []);

  return null;
}
