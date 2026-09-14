import type { ReactNode } from "react";
import TravoWord from "@/components/TravoWord";

/**
 * The primary navigation, including the section-level dropdowns.
 *
 * PURPOSE: one declaration of what the masthead offers, so Header.tsx carries
 * only the open/close behavior and the markup.
 *
 * WHY the dropdown targets are in-page anchors: the client asked for menus that
 * move the reader to a part of a page rather than to a new page. Every `href`
 * below with a `#` therefore points at an `id` that exists in the corresponding
 * page component — adding an entry here without adding that `id` produces a
 * link that navigates but does not scroll. The ids live at:
 *   /            src/app/page.tsx          #why-quantify #purpose #common-entry-points
 *   /services    src/app/services/page.tsx #predictive #adaptive #forensic #learning
 *                                          #svc-p1..p7 #svc-a1..a5 #svc-f1 #svc-f2 #svc-l1..l3
 *   /projects    src/app/projects/page.tsx #travo-engagements #prior-experience
 *   /claims      src/app/claims/page.tsx   #claims-f1 #claims-f2
 *   /about       src/app/about/page.tsx    #mission-vision #operating-principles #the-principal
 */

export type NavItem = {
  href: string;
  /** Short code (P1, A4, F2 …) shown ahead of the label in the services menu. */
  code?: string;
  label: ReactNode;
};

export type NavGroup = {
  /** Column heading in the services mega-menu. Omitted for single-list menus. */
  title?: string;
  /** Where the heading itself links, when it has one. */
  href?: string;
  items: NavItem[];
};

export type NavEntry = {
  href: string;
  label: ReactNode;
  /** Dropdown contents. Absent means a plain link. */
  menu?: NavGroup[];
  /** Lay the panel out as a full-width, multi-column mega-menu. */
  wide?: boolean;
};

export const NAV_LINKS: NavEntry[] = [
  {
    href: "/",
    label: "Home",
    menu: [
      {
        items: [
          { href: "/#why-quantify", label: "Why quantify risk" },
          { href: "/#purpose", label: "Purpose" },
          { href: "/#common-entry-points", label: "Common entry points" },
        ],
      },
    ],
  },
  {
    href: "/lifecycle",
    label: (
      <>
        How <TravoWord /> Works
      </>
    ),
  },
  {
    href: "/services",
    label: "Services",
    wide: true,
    menu: [
      {
        title: "Preconstruction",
        href: "/services#predictive",
        items: [
          { href: "/services#svc-p1", code: "P1", label: "Quantitative Risk Analysis & Contingency" },
          { href: "/services#svc-p2", code: "P2", label: "Preconstruction Risk Review" },
          { href: "/services#svc-p3", code: "P3", label: "Independent Risk Peer Review" },
          { href: "/services#svc-p4", code: "P4", label: "Strategic Alternatives & Scenario Analysis" },
          { href: "/services#svc-p5", code: "P5", label: "Bid Risk & Procurement Review" },
          { href: "/services#svc-p6", code: "P6", label: "Construction Risk Assessment — Underwriting" },
          { href: "/services#svc-p7", code: "P7", label: "Independent Project Risk Review" },
        ],
      },
      {
        title: "During Construction",
        href: "/services#adaptive",
        items: [
          { href: "/services#svc-a1", code: "A1", label: "Project Risk Screen" },
          { href: "/services#svc-a2", code: "A2", label: "Full Project Risk Reforecast" },
          { href: "/services#svc-a3", code: "A3", label: "Forecast & Risk-Register Refresh" },
          { href: "/services#svc-a4", code: "A4", label: "Lender Monitoring & Draw Overlay" },
          { href: "/services#svc-a5", code: "A5", label: "Contractor Performance & Completion-Risk Review" },
        ],
      },
      {
        title: "Claims & Disputes",
        href: "/services#forensic",
        items: [
          { href: "/services#svc-f1", code: "F1", label: "Counsel-Directed Project Risk & Quantum Review" },
          { href: "/services#svc-f2", code: "F2", label: "Deep Delay, Quantum & Forensic Analysis" },
        ],
      },
      {
        title: "Post Completion",
        href: "/services#learning",
        items: [
          { href: "/services#svc-l1", code: "L1", label: "Post-Project Risk Review & Lessons Learned" },
          { href: "/services#svc-l2", code: "L2", label: "Portfolio Risk Benchmarking" },
          { href: "/services#svc-l3", code: "L3", label: "Methodology Implementation" },
        ],
      },
    ],
  },
  {
    href: "/projects",
    label: "Projects",
    menu: [
      {
        items: [
          {
            href: "/projects#travo-engagements",
            label: (
              <>
                <TravoWord /> Engagements
              </>
            ),
          },
          { href: "/projects#prior-experience", label: "Prior Experience" },
        ],
      },
    ],
  },
  {
    href: "/claims",
    label: "Claims & Disputes",
    menu: [
      {
        items: [
          { href: "/claims#claims-f1", label: "Counsel-Directed Project Risk & Quantum Review" },
          { href: "/claims#claims-f2", label: "Deep Delay, Quantum & Forensic Analysis" },
        ],
      },
    ],
  },
  { href: "/methodology", label: "Methodology" },
  { href: "/training", label: "Training" },
  {
    href: "/research",
    label: "Insights & Research",
    menu: [
      {
        items: [
          { href: "/insights/risk-intelligence-imperative", label: "Insights" },
          { href: "/research", label: "Research" },
        ],
      },
    ],
  },
  {
    href: "/about",
    label: "About",
    menu: [
      {
        items: [
          { href: "/about#mission-vision", label: "Mission & Vision" },
          { href: "/about#operating-principles", label: "Operating principles" },
          { href: "/about#the-principal", label: "The Principal" },
        ],
      },
    ],
  },
  { href: "/contact", label: "Contact" },
];
