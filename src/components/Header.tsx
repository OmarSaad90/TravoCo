"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import BrandMarkDissolve from "./BrandMarkDissolve";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/lifecycle", label: "How TRAVO Works" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/claims", label: "Claims & Disputes" },
  { href: "/methodology", label: "Methodology" },
  { href: "/training", label: "Training" },
  { href: "/research", label: "Research & Insights" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    }
    function onClick(e: MouseEvent) {
      const target = e.target as Node;
      if (
        navRef.current &&
        !navRef.current.contains(target) &&
        !toggleRef.current?.contains(target)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("click", onClick);
    };
  }, [isOpen]);

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="wrap topbar-inner">
          <span>
            <strong>TRAVO</strong> · Total Risk Analysis and Value Optimization
          </span>
          <span>Quantified Risk. Disciplined Decisions.</span>
          <span>New Jersey · New York Metropolitan Region</span>
        </div>
      </div>
      <div className="wrap navbar">
        <Link className="wordmark" href="/" aria-label="TRAVO home">
          <BrandMarkDissolve />
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
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link className="btn btn-primary" href="/contact" onClick={() => setIsOpen(false)}>
            Request a decision-scoping call
          </Link>
        </nav>
      </div>
    </header>
  );
}
