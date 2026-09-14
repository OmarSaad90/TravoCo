"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import TravoWord from "./TravoWord";
import { NAV_LINKS, type NavEntry, type NavItem } from "@/lib/nav";
import { scrollToHash } from "@/lib/scroll-to-hash";

/**
 * The masthead, including the section dropdowns.
 *
 * Two presentations of the same data, split by the 1280px breakpoint the nav
 * already used:
 *   · desktop — a panel that opens on hover or keyboard focus and closes on
 *     pointer-out, Escape, or focus leaving the entry.
 *   · below it — the existing full-width drawer, where each menu becomes a
 *     sub-list behind a +/- disclosure so Services' seventeen entries do not
 *     push the rest of the nav off-screen.
 *
 * One entry is open at a time in both, so `openKey` is a single href rather
 * than a set.
 */

/**
 * The CSS breakpoint below which .site-nav becomes the drawer and every menu
 * grows a disclosure button. Above it the panels are floating popouts driven by
 * pointer and focus; below it the button is the only thing that opens them.
 */
const POPOUT_QUERY = "(min-width: 1280px)";

/**
 * Hover-to-open additionally needs a real pointer. Kept separate from
 * POPOUT_QUERY because a touchscreen laptop at >=1280px has no hover but also
 * has no disclosure button — it still needs focus to open its menus.
 */
const HOVER_QUERY = "(hover: hover) and (min-width: 1280px)";

/**
 * How long the panel survives the pointer leaving it. Covers the 0.85rem gap
 * between a nav entry and its panel (the navbar's own padding-block), which the
 * pointer has to cross on the way down.
 */
const CLOSE_DELAY_MS = 160;

function hasHash(href: string) {
  return href.includes("#");
}

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openKey, setOpenKey] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /**
   * Publish the masthead's height as `--header-h` so the drawer can cap itself
   * at the space actually left below it and scroll the overflow.
   *
   * WHY measured rather than written as a constant: the drawer is absolutely
   * positioned at the header's bottom edge, so its available height is the
   * viewport minus the header — and the header's height is a range, not a
   * value. Its topbar wraps from one line to three between a phone and a
   * laptop, and the brand mark scales with the viewport. A guessed constant is
   * wrong at most widths, and being wrong here strands the last entries of the
   * Services menu below the fold with nothing to scroll.
   */
  useEffect(() => {
    const header = headerRef.current;
    if (!header || typeof ResizeObserver === "undefined") return;
    const publish = () => {
      document.documentElement.style.setProperty(
        "--header-h",
        `${header.getBoundingClientRect().height}px`,
      );
    };
    publish();
    const observer = new ResizeObserver(publish);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current !== null) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenKey(null), CLOSE_DELAY_MS);
  }, [cancelClose]);

  useEffect(() => cancelClose, [cancelClose]);

  /* Both menus close on any navigation started from inside them — including a
     same-page jump, where the pathname does not change but the drawer would
     otherwise stay covering the section just scrolled to. Every link in the
     masthead calls this, so there is no need to watch the pathname for it;
     back/forward is the one route that bypasses a link, and it is handled as a
     `popstate` subscription below. */
  const closeAll = useCallback(() => {
    cancelClose();
    setOpenKey(null);
    setIsOpen(false);
  }, [cancelClose]);

  const matches = (query: string) =>
    typeof window !== "undefined" && window.matchMedia(query).matches;

  /* Hover opens the panel only where there is a real pointer and the popout
     layout is in play; on the drawer the same entries are driven by their
     disclosure buttons, and a touch "hover" would open a panel the reader
     never asked for. */
  const handleEnter = (href: string) => {
    if (!matches(HOVER_QUERY)) return;
    cancelClose();
    setOpenKey(href);
  };

  const handleLeave = () => {
    if (!matches(HOVER_QUERY)) return;
    scheduleClose();
  };

  /* Focus moving into an entry opens it; focus leaving the entry's subtree
     closes it. `relatedTarget` is where focus is going — null when it leaves
     the document entirely, which should also close.

     Both are gated to the popout layout, and that gate is load-bearing on
     touch. A tap fires focus BEFORE click, so on the drawer an unguarded
     handler would open the panel on focus, React would re-render, and the
     disclosure button's own click would then see it already expanded and close
     it again — the button would appear dead. The drawer therefore leaves the
     panels entirely to the button. */
  const handleFocus = (href: string) => {
    if (!matches(POPOUT_QUERY)) return;
    cancelClose();
    setOpenKey(href);
  };

  const handleBlur = (event: React.FocusEvent<HTMLLIElement>) => {
    if (!matches(POPOUT_QUERY)) return;
    const next = event.relatedTarget as Node | null;
    if (next && event.currentTarget.contains(next)) return;
    setOpenKey(null);
  };

  /**
   * Same-page anchors are scrolled here rather than by the router, so the
   * sticky masthead is cleared and a collapsed service panel is opened. When
   * the anchor belongs to another page `scrollToHash` reports false and the
   * navigation proceeds normally — PageEffects resolves it after that page
   * mounts.
   */
  const handleAnchorClick = (href: string) => {
    closeAll();
    if (!hasHash(href)) return;
    // After the click, so the router has applied the new hash to the URL.
    requestAnimationFrame(() => scrollToHash(href.slice(href.indexOf("#"))));
  };

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key !== "Escape") return;
      if (openKey !== null) {
        setOpenKey(null);
        return;
      }
      if (isOpen) {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    }
    function onClick(e: MouseEvent) {
      const target = e.target as Node;
      if (navRef.current?.contains(target) || toggleRef.current?.contains(target)) return;
      setIsOpen(false);
      setOpenKey(null);
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("click", onClick);
    window.addEventListener("popstate", closeAll);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("click", onClick);
      window.removeEventListener("popstate", closeAll);
    };
  }, [isOpen, openKey, closeAll]);

  function renderMenuLink(item: NavItem) {
    return (
      <Link
        href={item.href}
        // The router's own scroll would land the anchor under the masthead and
        // leave a <details> closed; handleAnchorClick does both properly.
        scroll={!hasHash(item.href)}
        onClick={() => handleAnchorClick(item.href)}
      >
        {item.code ? <span className="nav-menu-code">{item.code}</span> : null}
        <span className="nav-menu-label">{item.label}</span>
      </Link>
    );
  }

  function renderEntry(link: NavEntry) {
    const expanded = openKey === link.href;
    const panelId = `nav-menu-${link.href.replace(/\W+/g, "-")}`;

    return (
      <li
        key={link.href}
        className={`nav-item${link.menu ? " has-menu" : ""}${link.wide ? " nav-item-wide" : ""}${
          expanded ? " is-expanded" : ""
        }`}
        onMouseEnter={link.menu ? () => handleEnter(link.href) : undefined}
        onMouseLeave={link.menu ? handleLeave : undefined}
        onFocus={link.menu ? () => handleFocus(link.href) : undefined}
        onBlur={link.menu ? handleBlur : undefined}
      >
        <span className="nav-item-row">
          <Link
            href={link.href}
            aria-current={pathname === link.href ? "page" : undefined}
            onClick={closeAll}
          >
            {link.label}
          </Link>
          {link.menu ? (
            <button
              type="button"
              className="nav-sub-toggle"
              aria-controls={panelId}
              aria-expanded={expanded}
              onClick={() => setOpenKey(expanded ? null : link.href)}
            >
              <span className="nav-sub-toggle-mark" aria-hidden="true" />
              <span className="visually-hidden">
                {expanded ? "Hide" : "Show"} sections under this page
              </span>
            </button>
          ) : null}
        </span>

        {link.menu ? (
          <div className="nav-menu" id={panelId} hidden={!expanded}>
            <div className="nav-menu-inner">
              {link.menu.map((group, index) => {
                // Bound to a local so the click handler below closes over a
                // definite string rather than the optional field.
                const groupHref = group.href;
                return (
                <div className="nav-menu-group" key={group.title ?? index}>
                  {group.title ? (
                    <p className="nav-menu-title">
                      {groupHref ? (
                        <Link
                          href={groupHref}
                          scroll={!hasHash(groupHref)}
                          onClick={() => handleAnchorClick(groupHref)}
                        >
                          {group.title}
                        </Link>
                      ) : (
                        group.title
                      )}
                    </p>
                  ) : null}
                  <ul>
                    {group.items.map((item) => (
                      <li key={item.href}>{renderMenuLink(item)}</li>
                    ))}
                  </ul>
                </div>
                );
              })}
            </div>
          </div>
        ) : null}
      </li>
    );
  }

  return (
    <header className="site-header" ref={headerRef}>
      <div className="topbar">
        <div className="wrap topbar-inner">
          <span>
            <strong>
              <TravoWord />
            </strong>{" "}
            · Total Risk Analysis and Value Optimization
          </span>
          <span>Quantified Risk. Disciplined Decisions.</span>
          <span>New Jersey · New York Metropolitan Region</span>
        </div>
      </div>
      <div className="wrap navbar">
        <Link className="wordmark" href="/" aria-label="TRAVO home">
          <img className="brand-logo" src="/brand-logo.png" alt="TRAVO logo" />
          <span className="brand-tagline">Quantified Risk. Disciplined Decisions.</span>
        </Link>
        <button
          ref={toggleRef}
          aria-controls="site-nav"
          aria-expanded={isOpen}
          className="nav-toggle"
          onClick={() => setIsOpen((open) => !open)}
        >
          Menu
        </button>
        <nav
          ref={navRef}
          aria-label="Primary"
          className={`site-nav${isOpen ? " is-open" : ""}`}
          id="site-nav"
        >
          <ul>{NAV_LINKS.map(renderEntry)}</ul>
          <Link className="btn btn-primary" href="/contact" onClick={closeAll}>
            Request a decision-scoping call
          </Link>
        </nav>
      </div>
    </header>
  );
}
