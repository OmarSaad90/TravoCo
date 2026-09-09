"use client";

import { useEffect } from "react";

/**
 * The two behaviors the client's standalone article ran from inline scripts:
 * a scroll-progress rule across the top of the viewport, and a reveal-on-scroll
 * pass that also fills the horizontal bars in the exhibits.
 *
 * The site's own PageEffects is deliberately NOT used on this route. It tags
 * blocks with `data-reveal` and drives them from globals.css, which would fight
 * the article's own `.rv` / `.rv.on` pair for the same elements. One reveal
 * mechanism per page.
 *
 * His third script — the dot-field cover graphic — is not here: it is seeded
 * deterministically and never changes, so it is generated in the page's markup
 * on the server instead of being drawn into an empty <svg> after hydration.
 */
export default function ArticleEffects() {
  useEffect(() => {
    const bar = document.getElementById("progress");
    if (!bar) return;

    function updateProgress() {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      bar!.style.width = `${max > 0 ? (doc.scrollTop / max) * 100 : 0}%`;
    }

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  useEffect(() => {
    const fillBars = (root: ParentNode) =>
      root.querySelectorAll<HTMLElement>(".bar-fill").forEach((fill) => {
        fill.style.width = `${fill.dataset.w}%`;
      });

    const revealables = document.querySelectorAll<HTMLElement>(".travo-doc .rv");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced || typeof IntersectionObserver === "undefined") {
      revealables.forEach((el) => el.classList.add("on"));
      fillBars(document);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("on");
          fillBars(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 },
    );

    revealables.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
