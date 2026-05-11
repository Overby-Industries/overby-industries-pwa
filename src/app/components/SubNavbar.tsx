"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CONTACT_HREF =
  "mailto:founder@overbyindustries.space?subject=Overby%20Industries%20Services%20Inquiry&body=Hello,%0A%0AI'm%20interested%20in%20investing%20in%20your%20space%20debris%20reclamation%20services.";

export default function SubNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll shadow on nav
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

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

  const expanded = menuOpen;

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

        <ul className="nav-links">
          <li>
            <Link href="/aerospace">Aerospace</Link>
          </li>
          <li>
            <Link href="/isru">ISRU</Link>
          </li>
          <li>
            <Link href="/heavy-industry">Heavy Industry</Link>
          </li>
          <li>
            <Link href="/whitepapers">White Papers</Link>
          </li>
          <li>
            <Link href="/the-gravastar-project">Gravastar Project</Link>
          </li>
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
        <Link href="/aerospace" onClick={() => setMenuOpen(false)}>
          Aerospace
        </Link>
        <Link href="/isru" onClick={() => setMenuOpen(false)}>
          ISRU
        </Link>
        <Link href="/heavy-industry" onClick={() => setMenuOpen(false)}>
          Heavy Industry
        </Link>
        <Link href="/whitepapers" onClick={() => setMenuOpen(false)}>
          White Papers
        </Link>
        <Link href="/the-gravastar-project" onClick={() => setMenuOpen(false)}>
          The Gravastar Project
        </Link>
        <a href={CONTACT_HREF} onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </nav>
    </>
  );
}
