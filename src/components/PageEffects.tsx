"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

/**
 * Ports two behaviors the original single-file site handled in its inline
 * router script (showPage()), and adds the scroll reveal it never had:
 *  1. Fade in every `.reveal` section once it's mounted (as the original did).
 *  2. If the URL has a hash (e.g. /services#svc-p1), open it if it's a
 *     <details> element and scroll to it, offset for the sticky header.
 *  3. Stagger every block of text into view as it's scrolled to.
 *
 * The reveal is driven entirely from here rather than from per-page markup:
 * each <section> is walked once at mount and its text-bearing blocks are
 * tagged with `data-reveal`, which is the only thing globals.css hides. So
 * nothing can be left permanently invisible by a JS failure, and no page
 * needs to carry animation classes.
 */

/**
 * Blocks that animate as a single unit. The walk below stops descending the
 * moment it hits one of these, so a `.card`'s label/heading/copy move together
 * instead of cascading against each other, and a <dl>'s term/description pairs
 * stay coupled.
 */
const ITEM_SELECTOR = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "li",
  "dl",
  "figure",
  "table",
  "blockquote",
  "details",
  "aside",
  "form",
  "nav",
  "svg",
  ".card",
  ".notice",
].join(",");

/** Sections plus the footer. The sticky header is deliberately excluded. */
const CONTAINER_SELECTOR = "section, .site-footer";

const STAGGER_MS = 70;
/** Cap the cascade so a long list doesn't trail for seconds. */
const MAX_STAGGER_STEPS = 8;
/** Start the reveal once a block is ~10% up from the bottom edge. */
const ROOT_MARGIN = "0px 0px -10% 0px";

/**
 * The route this ran for last. On a cold load the server HTML has already
 * painted by the time React hydrates, so anything above the fold is left
 * alone — hiding it in order to animate it would flash. On client-side
 * navigation the effect runs before paint, so the whole page can animate.
 * Keying on the path rather than counting mounts keeps StrictMode's
 * double-invoked effect (same route, twice) reading as one cold load, so dev
 * behaves the same as a production build.
 */
let lastRevealedPath: string | null = null;

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/** Collect the outermost animatable blocks under `root`, in document order. */
function collectItems(root: Element, out: Element[]) {
  for (const child of Array.from(root.children)) {
    if (child.matches(ITEM_SELECTOR)) {
      out.push(child);
    } else {
      collectItems(child, out);
    }
  }
}

function isWithinViewport(el: Element) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

export default function PageEffects() {
  const pathname = usePathname();

  useIsomorphicLayoutEffect(() => {
    const coldLoad = lastRevealedPath === null || lastRevealedPath === pathname;
    lastRevealedPath = pathname;

    // The original script's behavior: sections marked `.reveal` are shown as
    // soon as the page is up. Their contents are what animates now.
    document.querySelectorAll(".reveal").forEach((el) => {
      el.classList.add("is-visible");
    });

    // Resolve the hash before measuring what's on screen, so a deep link
    // doesn't leave the section it jumped to counted as below the fold.
    const hash = window.location.hash.replace(/^#/, "");
    if (hash) {
      const target = document.getElementById(hash);
      if (target) {
        if (target.tagName === "DETAILS") {
          (target as HTMLDetailsElement).open = true;
        }
        const header = document.querySelector(".site-header");
        const headerHeight = header ? header.getBoundingClientRect().height : 0;
        const y = target.getBoundingClientRect().top + window.scrollY - headerHeight - 14;
        window.scrollTo(0, Math.max(0, y));
      }
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;

    const items: Element[] = [];
    document.querySelectorAll(CONTAINER_SELECTOR).forEach((container) => {
      collectItems(container, items);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        const arriving = entries.filter((entry) => entry.isIntersecting);
        if (arriving.length === 0) return;

        // A section scrolled into view reports all its blocks in one callback;
        // ordering them by position is what turns that into a cascade. A block
        // reached on its own is alone in its batch and so reveals immediately.
        arriving.sort((a, b) => {
          const relation = a.target.compareDocumentPosition(b.target);
          return relation & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
        });

        arriving.forEach((entry, index) => {
          const el = entry.target as HTMLElement;
          const step = Math.min(index, MAX_STAGGER_STEPS);
          el.style.setProperty("--reveal-delay", `${step * STAGGER_MS}ms`);
          el.classList.add("is-revealed");
          observer.unobserve(el);
        });
      },
      { rootMargin: ROOT_MARGIN, threshold: 0 },
    );

    const claimed: Element[] = [];
    items.forEach((el) => {
      if (coldLoad && isWithinViewport(el)) return;
      el.setAttribute("data-reveal", "");
      claimed.push(el);
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
      claimed.forEach((el) => {
        el.removeAttribute("data-reveal");
        el.classList.remove("is-revealed");
      });
    };
  }, [pathname]);

  return null;
}
