"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CONTACT_HREF =
  "mailto:founder@overbyindustries.space?subject=Overby%20Industries%20Services%20Inquiry&body=Hello,%0A%0AI'm%20interested%20in%20investing%20in%20your%20space%20debris%20reclamation%20services.";

export default function Home() {
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
            src="/overby-logo-neon.svg"
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

      {/* ── Hero ── */}
      <section id="hero" className="graph-bg">
        <div className="hero-badge fade-up">
          <span className="diamond" />
          <span className="eyebrow eyebrow--no-margin">
            Ethical · Sustainable · Zero-Waste
          </span>
          <span className="diamond" />
        </div>

        <h1 className="hero-title fade-uphero-title--delay">
          Building a{" "}
          <em>
            Sustainable,
            <br />
            Ethical Industrial
          </em>
          <br />
          Future in Space
        </h1>

        <p className="hero-sub fade-up" style={{ transitionDelay: "0.16s" }}>
          From metals and concrete on asteroids to hydrocarbons on Titan —
          Overby Industries provides everything humanity needs to build an
          interplanetary civilization without harming Earth or the solar system
          itself.
        </p>

        <div className="btn-group fade-up" style={{ transitionDelay: "0.24s" }}>
          <a href="#join" className="btn btn-primary">
            Join the Mission
          </a>
          <a href="#roadmap" className="btn btn-ghost">
            View Roadmap
          </a>
        </div>

        <div className="hero-rule fade-up" style={{ transitionDelay: "0.32s" }}>
          <div className="rule-divider">
            <span className="diamond" />
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section id="mission">
        <div className="mission-inner">
          <div className="fade-up">
            <span className="eyebrow">Mission Statement</span>
            <p className="mission-pull">
              Committed to gathering and refining space resources ethically,
              sustainably, and with zero waste.
            </p>
          </div>
          <div className="fade-up" style={{ transitionDelay: "0.12s" }}>
            <div className="mission-body">
              <p>
                From metals and concrete on asteroids, to hydrocarbons on Titan,
                our mission is to provide everything humanity needs to build an
                interplanetary civilization without harming Earth or the solar
                system itself.
              </p>
              <p>
                We operate under a philosophy of long-term stewardship —
                treating space not as a resource to be extracted, but as an
                ecosystem to be cultivated for generations to come.
              </p>
            </div>
            <ul className="values-list">
              {[
                "Ethical, Zero-Waste Operations",
                "Orbital Space Debris Reclamation Services",
                "Sustainable Space Industry Development",
                "Cutting-Edge Aerospace Engineering",
                "Focus on Long-Term Space Civilizations and Direct Democracy",
              ].map((v) => (
                <li key={v}>
                  <span className="diamond" />
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <div className="stats-bar">
        <div className="stats-inner">
          {[
            { num: "5", label: "Roadmap\nPhases" },
            { num: "0", label: "Waste\nTolerance" },
            { num: "∞", label: "Solar System\nResources" },
            { num: "2026", label: "Founded &\nOperational" },
          ].map(({ num, label }, i) => (
            <div
              className="fade-up"
              key={num}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <span className="stat-num">{num}</span>
              <div className="stat-label" style={{ whiteSpace: "pre-line" }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Capabilities ── */}
      <section id="capabilities">
        <div className="section-header fade-up">
          <span className="eyebrow">Engineering Capabilities</span>
          <h2 className="section-title">
            Full-Spectrum <em>Industrial</em>
            <br />
            Space Operations
          </h2>
          <p className="section-lead">
            Our technical stack spans the complete resource extraction and
            utilization pipeline — from launch vehicle to finished product in
            orbit.
          </p>
        </div>

        <div className="caps-grid">
          {[
            {
              num: "Cap. 01 — ISRU",
              title: "Full-Spectrum ISRU",
              desc: "Metals, stone, plastics, fuels — complete in-situ resource utilization across asteroid and planetary body types.",
            },
            {
              num: "Cap. 02 — Transport",
              title: "Reusable Shuttle Fleet",
              desc: "Starlifter II vehicles with runway landings — fully reusable, dramatically reducing per-mission cost and orbital debris.",
            },
            {
              num: "Cap. 03 — Propulsion",
              title: "Advanced Propulsion",
              desc: "Ion, Lorentz, and Solar Wind Capture systems enable deep-space operations without traditional propellant constraints.",
            },
            {
              num: "Cap. 04 — Platforms",
              title: "Modular Industrial Platforms",
              desc: "Scalable, modular platforms designed for rapid deployment and expansion — adaptable to any operational environment.",
            },
            {
              num: "Cap. 05 — Open Source",
              title: "Open-Source Technology",
              desc: "Commitment to open collaboration and knowledge-sharing accelerates industry-wide development of sustainable space systems.",
            },
            {
              num: "Cap. 06 — Debris",
              title: "Orbital Debris Reclamation",
              desc: "Proprietary reclamation services convert existing orbital debris into raw material feedstock — turning a liability into an asset.",
            },
          ].map(({ num, title, desc }, i) => (
            <div
              className="cap-card fade-up"
              key={title}
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <div className="cap-num">{num}</div>
              <div className="cap-title">{title}</div>
              <p className="cap-desc">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Roadmap ── */}
      <section id="roadmap" className="graph-bg">
        <div className="section-header fade-up">
          <span className="eyebrow">Development Roadmap</span>
          <h2 className="section-title">
            Five Phases to a <em>Solar</em>
            <br />
            <em>Civilization</em>
          </h2>
          <p className="section-lead">
            Each phase builds upon the last — from prototype systems to a
            closed-loop resource economy spanning the entire solar system.
          </p>
        </div>

        <div className="roadmap-list">
          {[
            {
              phase: "Phase I — Foundations",
              name: "Prototype Systems & First Mining Demo",
              desc: "Prototype Starlifter systems and Miner Pods. Zero-debris mining demonstration on a Near-Earth Asteroid. Proof of concept for ethical extraction methodology.",
            },
            {
              phase: "Phase II — Industrial Pilot",
              name: "Operational Fleet & Lunar Depot",
              desc: "Operational Starlifter II fleet. Lunar depot established as staging ground. First profitable asteroid returns delivered to market.",
            },
            {
              phase: "Phase III — Expansion",
              name: "Belt Operations & Mars Staging",
              desc: "Asteroid belt exploitation begins. UHPC space construction deployed at scale. Mars staging posts established for deeper solar system access.",
            },
            {
              phase: "Phase IV — Titan Era",
              name: "Titan Hydrocarbon Extraction",
              desc: "Titan Base begins extracting hydrocarbons for plastics and fuels production. Full ISRU integration across all operational zones achieved.",
            },
            {
              phase: "Phase V — Solar Civilization",
              name: "Closed-Loop Solar Economy",
              desc: "Closed-loop resource economy established across the Solar System. Overby Certification becomes the global standard for ethical space industry operations.",
            },
          ].map(({ phase, name, desc }, i) => (
            <div
              className="roadmap-item fade-up"
              key={phase}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="roadmap-dot" />
              <div className="roadmap-phase">{phase}</div>
              <div className="roadmap-name">{name}</div>
              <p className="roadmap-desc">{desc}</p>
              <span className="funding-badge">Requires Funding</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Join the Mission ── */}
      <section id="join" className="join-section">
        <span className="eyebrow fade-up" style={{ display: "block" }}>
          Join the Mission
        </span>
        <h2 className="join-title fade-up" style={{ transitionDelay: "0.08s" }}>
          Be Part of Humanity's
          <br />
          <em>Next Great Leap</em>
        </h2>
        <p className="join-body fade-up" style={{ transitionDelay: "0.16s" }}>
          Whether as a small donor fueling our first prototypes, contributing
          hands-on experience, or as a major investor partnering for the future
          — your support powers Overby Industries. Every contribution, no matter
          how small, helps us take steps toward a sustainable future in space.
          Join the early supporters and be part of Overby Industries from the
          beginning.
        </p>
        <div
          className="btn-group fade-up"
          style={{ justifyContent: "center", transitionDelay: "0.24s" }}
        >
          <a
            href="mailto:founder@overbyindustries.space?subject=Donation%20Inquiry&body=Hello,%0A%0AI'd%20like%20to%20support%20Overby%20Industries."
            className="btn btn-primary"
          >
            Donate
          </a>
          <a
            href="mailto:founder@overbyindustries.space?subject=Joining%20Overby%20Industries&body=Hello,%0A%0AI'm%20interested%20in%20joining%20the%20Overby%20Industries%20mission."
            className="btn btn-ghost"
          >
            Join
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="site-footer">
        <div className="footer-logo">Overby Industries</div>
        <div className="footer-copy">
          © 2026 Overby Industries. All Rights Reserved.
        </div>
        <div className="footer-tagline">
          Ethical · Sustainable · Zero-Waste Space Economy
        </div>
      </footer>
    </>
  );
}
