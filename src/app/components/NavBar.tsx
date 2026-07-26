"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CONTACT_HREF =
  "mailto:founder@overbyindustries.space?subject=Overby%20Industries%20Services%20Inquiry&body=Hello,%0A%0AI'm%20interested%20in%20investing%20in%20your%20space%20debris%20reclamation%20services.";

type SubLink = { label: string; href: string };
type NavItem = { label: string; href: string; links?: SubLink[] };

const NAV_ITEMS: NavItem[] = [
  {
    label: "Aerospace",
    href: "/aerospace",
    links: [
      { label: "Propulsion", href: "/aerospace/propulsion" },
      { label: "Operating Systems", href: "/aerospace/operating-systems" },
      { label: "Flight Controls", href: "/aerospace/flight-controls" },
      { label: "Airframe", href: "/aerospace/airframe" },
    ],
  },
  {
    label: "ISRU",
    href: "/isru",
    links: [
      { label: "Regolith", href: "/isru/regolith" },
      { label: "Precious-Based Metals", href: "/isru/precious-based-metals" },
      { label: "Hydrocarbons", href: "/isru/hydrocarbons" },
      { label: "Water", href: "/isru/water" },
    ],
  },
  {
    label: "Heavy Industry",
    href: "/heavy-industry",
    links: [
      { label: "Asteroid Mining", href: "/heavy-industry/asteroid-mining" },
      { label: "Space Debris Reclamation", href: "/heavy-industry/space-debris-reclamation" },
      { label: "Advanced Manufacturing", href: "/heavy-industry/advanced-manufacturing" },
      { label: "Robotics", href: "/heavy-industry/robotics" },
    ],
  },
  { label: "White Papers", href: "/whitepapers" },
  { label: "Gravastar Project", href: "/the-gravastar-project" },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navLinksRef = useRef<HTMLUListElement>(null);

  // Scroll shadow on nav
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close an open dropdown on outside click
  useEffect(() => {
    if (!openDropdown) return;
    const handler = (e: MouseEvent) => {
      if (!navLinksRef.current?.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [openDropdown]);

  // Intersection Observer for fade-up animations
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".fade-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    // Hero items fire immediately
    document
      .querySelectorAll<HTMLElement>("#hero .fade-up")
      .forEach((el, i) => {
        setTimeout(() => el.classList.add("visible"), 120 + i * 90);
      });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── Navigation ── */}
      <nav className={`nav${scrolled ? "nav-scrolled" : ""}`}>
        <Link href="/" className="nav-logo">
          <Image
            src="/overby-logo.svg"
            alt="Overby Industries"
            width={32}
            height={32}
            style={{
              filter: "brightness(0.3) sepia(1) saturate(3) hue-rotate(10deg)",
            }}
          />
          <span className="nav-logo-text">Overby Industries</span>
        </Link>

        <ul className="nav-links" ref={navLinksRef}>
          {NAV_ITEMS.map((item) =>
            item.links && item.links.length > 0 ? (
              <li key={item.href} className="nav-item-dropdown">
                <span className="nav-item-group">
                  <Link href={item.href}>{item.label}</Link>
                  <button
                    type="button"
                    className={`nav-caret${openDropdown === item.href ? " open" : ""}`}
                    aria-expanded={openDropdown === item.href}
                    aria-label={`${item.label} submenu`}
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === item.href ? null : item.href
                      )
                    }
                  >
                    ▾
                  </button>
                </span>
                {openDropdown === item.href && (
                  <ul className="nav-dropdown">
                    {item.links.map((sub) => (
                      <li key={sub.href}>
                        <Link
                          href={sub.href}
                          onClick={() => setOpenDropdown(null)}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            )
          )}
        </ul>

        <a className="nav-cta" href={CONTACT_HREF}>
          Contact
        </a>

        <button
          type="button"
          className={`hamburger${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen ? "true" : "false"} // Fixed invalid ARIA attribute value
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <nav className={`mobile-menu${menuOpen ? "open" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <div key={item.href} className="mobile-menu-group">
            <Link href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
            {item.links && item.links.length > 0 && (
              <div className="mobile-submenu">
                {item.links.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    className="mobile-submenu-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <a href={CONTACT_HREF} onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </nav>
    </>
  );
}
