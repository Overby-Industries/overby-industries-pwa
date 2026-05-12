"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function AerospacePage() {
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
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    // Fire hero immediately
    document.querySelectorAll<HTMLElement>(".hero-immediate").forEach((el, i) => {
      setTimeout(() => el.classList.add("visible"), 100 + i * 80);
    });
    return () => observer.disconnect();
  }, []);

  const views = [
    {
      src: "/project-helga.png",
      alt: "Project Helga — perspective view",
      label: "Fig. 01 — Perspective",
      caption:
        "The blended wing lifting body configuration integrates the fuselage and wing into a single continuous aerodynamic surface. This eliminates parasitic drag at the fuselage-wing junction and maximises internal volume for payload, propellant, and ionic liquid thermal management systems.",
    },
    {
      src: "/helga-top.png",
      alt: "Project Helga — top view",
      label: "Fig. 02 — Plan View",
      caption:
        "The double-delta planform provides high lift-to-drag ratios across the full speed envelope from subsonic approach to hypersonic cruise. The cranked leading edge delays flow separation at high angles of attack, preserving control authority during reentry and low-speed landing approach.",
    },
    {
      src: "/helga-port-side.png",
      alt: "Project Helga — port side view",
      label: "Fig. 03 — Port Profile",
      caption:
        "The shallow camber line and slight dihedral are visible in profile. Dihedral provides passive roll stability without requiring active control surface deflection, reducing actuator workload during hypersonic cruise where control surface heating is a primary design constraint.",
    },
    {
      src: "/helga-front.png",
      alt: "Project Helga — front view",
      label: "Fig. 04 — Front Elevation",
      caption:
        "The canted trailing edge sweep creates a stable high angle-of-attack reentry profile. During atmospheric entry the vehicle pitches to a controlled high-AOA attitude, using the broad lower surface as a heat shield while the ionic liquid thermal management system actively redistributes thermal loads away from critical structural elements.",
    },
  ];

  return (
    <>
    <section className="whitepaper-page graph-bg">

      {/* ── Page header ── */}
      <div style={{ maxWidth: 900, marginBottom: 72 }}>
        <span className="eyebrow fade-up hero-immediate">
          Aerospace Division · Project Helga
        </span>
        <h1
          className="hero-title fade-up hero-immediate"
          style={{ transitionDelay: "0.08s", marginBottom: 24 }}
        >
          Starlifter II —{" "}
          <em>Single Stage<br />to Orbit</em>
        </h1>
        <p
          className="hero-sub fade-up hero-immediate"
          style={{ transitionDelay: "0.16s", maxWidth: 680 }}
        >
          Project Helga is a powered-flight SSTO heavy lift shuttle engineered
          for runway takeoff and landing across the full speed envelope — from
          subsonic traffic pattern to hypersonic orbital insertion. The
          hypersonic double-delta blended wing lifting body airframe is
          optimised for stable, efficient flight at every regime it will
          encounter in service.
        </p>
        <div
          className="rule-divider fade-up hero-immediate"
          style={{ transitionDelay: "0.24s", marginTop: 40 }}
        >
          <div className="diamond" />
        </div>
      </div>

      {/* ── Spec strip ── */}
      <div className="fade-up" style={{ marginBottom: 80 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            border: "1px solid var(--rule)",
            background: "var(--surface)",
          }}
        >
          {[
            { label: "Configuration", value: "SSTO Blended Wing Body" },
            { label: "Takeoff / Landing", value: "Conventional Runway" },
            { label: "Airfoil", value: "Double-Delta Hypersonic" },
            { label: "Propulsion", value: "Hybrid ABEP / MHD-Lorentz / IL" },
          ].map(({ label, value }, i) => (
            <div
              key={label}
              style={{
                padding: "20px 24px",
                borderRight: i < 3 ? "1px solid var(--rule)" : "none",
              }}
            >
              <div className="cap-num" style={{ marginBottom: 6 }}>{label}</div>
              <div
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 11,
                  fontWeight: 700,
                  color: "var(--ink)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Engineering views ── */}
      <div style={{ maxWidth: 960 }}>
        {views.map(({ src, alt, label, caption }, i) => (
          <div
            key={label}
            className="fade-up"
            style={{
              marginBottom: 80,
              transitionDelay: `${i * 0.06}s`,
            }}
          >
            {/* Figure label */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginBottom: 16,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 9,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                }}
              >
                {label}
              </span>
              <div style={{ flex: 1, height: 1, background: "var(--rule)" }} />
            </div>

            {/* Image */}
            <div
              style={{
                border: "1px solid var(--rule)",
                background: "var(--surface)",
                overflow: "hidden",
              }}
            >
              <Image
                src={src}
                alt={alt}
                width={1600}
                height={900}
                unoptimized
                priority={i === 0}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>

            {/* Caption */}
            <p
              style={{
                fontFamily: "var(--mono)",
                fontSize: 12,
                color: "var(--ink-soft)",
                lineHeight: 1.8,
                marginTop: 14,
                paddingLeft: 16,
                borderLeft: "2px solid var(--rule)",
              }}
            >
              {caption}
            </p>
          </div>
        ))}
      </div>

      {/* ── Propulsion callout ── */}
      <div
        className="fade-up"
        style={{
          border: "1px solid var(--rule)",
          background: "var(--surface)",
          padding: "40px 48px",
          maxWidth: 960,
          marginTop: 16,
        }}
      >
        <span className="eyebrow">Propulsion Architecture</span>
        <h2
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(24px, 3vw, 36px)",
            fontWeight: 400,
            color: "var(--ink)",
            marginBottom: 16,
            lineHeight: 1.2,
          }}
        >
          Dual-Mode Hybrid Drive —{" "}
          <em style={{ fontStyle: "italic", color: "var(--blue)" }}>
            Unlimited Atmospheric Range
          </em>
        </h2>
        <p
          style={{
            fontFamily: "var(--mono)",
            fontSize: 13,
            color: "var(--ink-soft)",
            lineHeight: 1.9,
            maxWidth: 720,
            marginBottom: 24,
          }}
        >
          The Starlifter II propulsion system is a fully integrated hybrid
          architecture combining inline ABEP ion thrusters, an MHD-Lorentz rail
          accelerator operating in dual boost/generation modes, ionic liquid
          afterburner stages, and deep-space solar wind capture — engineered as
          a single unified drive system rather than discrete propulsion modules.
        </p>
        <a href="/aerospace/propulsion" className="btn btn-primary">
          Full Propulsion Architecture →
        </a>
      </div>

    </section>
    </>
  );
}
