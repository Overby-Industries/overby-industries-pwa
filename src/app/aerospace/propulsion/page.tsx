"use client";

import { useEffect } from "react";

export default function PropulsionPage() {
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
    document.querySelectorAll<HTMLElement>(".hero-immediate").forEach((el, i) => {
      setTimeout(() => el.classList.add("visible"), 100 + i * 80);
    });
    return () => observer.disconnect();
  }, []);

  const systems = [
    {
      num: "System 01",
      mode: "Atmospheric Cruise",
      title: "Inline ABEP Ion Thrusters",
      color: "var(--blue)",
      specs: [
        { label: "Working Medium", value: "Ingested Atmospheric Mass" },
        { label: "Operational Range", value: "Theoretically Unlimited (atm.)" },
        { label: "Altitude Envelope", value: "0 – 80 km (density dependent)" },
        { label: "Propellant Dependency", value: "Zero onboard cruise propellant" },
      ],
      desc: `Air-Breathing Electric Propulsion systems ionize and accelerate ambient atmospheric mass as reaction media, eliminating the need for stored onboard propellant during atmospheric cruise operations entirely. Within the defined altitude and velocity envelope, ABEP thrusters provide continuous thrust from ingested air alone — theoretically enabling unlimited operational range without refuelling stops.

As altitude increases and atmospheric density decreases, ABEP thrust output tapers naturally. The propulsion management system monitors inlet mass flow rates and transitions thrust augmentation to the MHD-Lorentz system and onboard ionic liquid reserves to maintain continuous acceleration through the upper atmospheric transition zone into orbital insertion.`,
    },
    {
      num: "System 02",
      mode: "Boost & Generation",
      title: "MHD-Lorentz Rail Accelerator",
      color: "var(--gold)",
      specs: [
        { label: "Operating Mode A", value: "Primary Boost Accelerator" },
        { label: "Operating Mode B", value: "MHD Power Generator" },
        { label: "Working Medium", value: "Ionic Liquid (IL)" },
        { label: "Secondary Function", value: "Onboard Power Supply" },
      ],
      desc: `The MHD-Lorentz rail accelerator is a dual-mode system that functions as both the primary high-thrust boost stage and as a magnetohydrodynamic power generator depending on operational phase. In boost mode, ionic liquid propellant is accelerated through the magnetic rail architecture at extremely high exhaust velocities, providing the primary thrust impulse for take-off, orbital insertion, deep-space maneuvering, and high-energy trajectory changes.

In generation mode, the same MHD architecture operates in reverse — harvesting kinetic energy from fluid flow to supply onboard electrical power to ABEP systems, avionics, and ionic liquid thermal management circuits. This dual-mode capability means the propulsion system actively powers itself during cruise phases, reducing total energy storage requirements and improving overall system efficiency significantly.`,
    },
    {
      num: "System 03",
      mode: "High-Thrust Augmentation",
      title: "Ionic Liquid Afterburner",
      color: "var(--red)",
      specs: [
        { label: "Location", value: "Rear Nacelle Section" },
        { label: "Working Medium", value: "Ionic Liquid (IL)" },
        { label: "Function", value: "Thrust Augmentation Stage" },
        { label: "Secondary Function", value: "Thermal Management / Reentry Shield" },
      ],
      desc: `The ionic liquid afterburner section occupies the rear nacelle and provides high-thrust augmentation during launch acceleration, maximum-performance climb during take-off, and orbital insertion burn phases. Ionic liquids are introduced into the hot exhaust stream downstream of the MHD-Lorentz accelerator exit, where they flash-vaporize and expand through the nozzle to produce additional thrust without requiring a separate combustion chamber architecture.

Beyond thrust augmentation from the separate IL propellent tank, ionic liquids serve a critical primary function throughout the vehicle as the primary thermal management working fluid. Separate IL reserves in the main tank circulate through the airframe's thermal control system during hypersonic flight and reentry, actively absorbing and redistributing heat loads away from structural elements and avionics — effectively supplementing conventional ablative heat shield approaches with a renewable, multifunctional active system.`,
    },
    {
      num: "System 04",
      mode: "Deep Space",
      title: "Solar Wind Particle Capture",
      color: "var(--blue)",
      specs: [
        { label: "Capture Method", value: "Electromagnetic Sail / Particle Collection" },
        { label: "Operational Zone", value: "Deep Space / Heliosphere" },
        { label: "Output", value: "Continuous Low-Level Electric Thrust" },
        { label: "Propellant Dependency", value: "Zero — ambient solar wind" },
      ],
      desc: `In deep-space operational zones beyond the inner solar system, where atmospheric ABEP ingestion is unavailable and ionic liquid reserves in the propellent tank must be conserved for high-priority maneuvers, the solar wind capture system provides a continuous low-level electric thrust supplement from the ambient solar wind particle flux. Electromagnetic sail architectures deflect and concentrate incoming solar wind particles, converting their momentum into usable thrust while simultaneously harvesting particle energy for onboard electrical power generation, supplementing the main MHD power generators.

Solar wind capture thrust levels are low compared to primary drive systems but operate continuously and indefinitely without consuming any stored propellant. For long-duration transit missions across the asteroid belt, to Titan, or across the outer solar system, this continuous trickle thrust meaningfully reduces total trip time and IL propellant consumption over extended operational periods.`,
    },
  ];

  return (
    <section className="whitepaper-page graph-bg">

      {/* ── Header ── */}
      <div style={{ maxWidth: 900, marginBottom: 72 }}>
        <span className="eyebrow fade-up hero-immediate">
          Aerospace · Propulsion Architecture
        </span>
        <h1
          className="hero-title fade-up hero-immediate"
          style={{ transitionDelay: "0.08s", marginBottom: 24 }}
        >
          Hybrid Drive —{" "}
          <em>Four Systems,<br />One Architecture</em>
        </h1>
        <p
          className="hero-sub fade-up hero-immediate"
          style={{ transitionDelay: "0.16s", maxWidth: 700 }}
        >
          The Starlifter II does not use discrete propulsion modes selected
          between — it uses a single unified hybrid drive architecture where all
          four systems operate in coordination, managed by a propulsion
          controller that continuously optimizes thrust, efficiency, and energy
          generation across every phase of flight from runway roll to deep-space
          transit.
        </p>
        <div
          className="rule-divider fade-up hero-immediate"
          style={{ transitionDelay: "0.24s", marginTop: 40 }}
        >
          <div className="diamond" />
        </div>
      </div>

      {/* ── Flight phase overview strip ── */}
      <div className="fade-up" style={{ marginBottom: 80 }}>
        <span className="eyebrow" style={{ marginBottom: 16 }}>
          Active Systems by Flight Phase
        </span>
        <div
          style={{
            border: "1px solid var(--rule)",
            background: "var(--surface)",
            overflow: "hidden",
          }}
        >
          {[
            {
              phase: "Takeoff & Climb",
              active: ["ABEP", "MHD-Lorentz (Boost)", "IL Afterburner"],
              inactive: ["Solar Wind"],
            },
            {
              phase: "Atmospheric Cruise",
              active: ["ABEP", "MHD-Lorentz (Generation)"],
              inactive: ["IL Afterburner", "Solar Wind"],
            },
            {
              phase: "Upper Atm. Transition",
              active: ["ABEP (tapering)", "MHD-Lorentz (Boost)", "IL Afterburner"],
              inactive: ["Solar Wind"],
            },
            {
              phase: "Orbital Insertion",
              active: ["MHD-Lorentz (Boost)", "IL Afterburner"],
              inactive: ["ABEP", "Solar Wind"],
            },
            {
              phase: "Deep Space Transit",
              active: ["MHD-Lorentz (low)", "Solar Wind"],
              inactive: ["ABEP", "IL Afterburner"],
            },
            {
              phase: "Reentry & Landing",
              active: ["IL Thermal Mgmt.", "ABEP (approach)"],
              inactive: ["MHD-Lorentz", "Solar Wind"],
            },
          ].map(({ phase, active, inactive }, i) => (
            <div
              key={phase}
              style={{
                display: "grid",
                gridTemplateColumns: "220px 1fr 1fr",
                borderBottom: i < 5 ? "1px solid var(--rule)" : "none",
                padding: "14px 24px",
                alignItems: "center",
                gap: 24,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--ink)",
                }}
              >
                {phase}
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {active.map((s) => (
                  <span
                    key={s}
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 10,
                      color: "var(--blue)",
                      border: "1px solid var(--blue)",
                      padding: "2px 8px",
                      opacity: 0.9,
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {inactive.map((s) => (
                  <span
                    key={s}
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 10,
                      color: "var(--ink-faint)",
                      border: "1px solid var(--rule)",
                      padding: "2px 8px",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── System deep dives ── */}
      <div style={{ maxWidth: 960 }}>
        {systems.map(({ num, mode, title, color, specs, desc }, i) => (
          <div
            key={num}
            className="fade-up"
            style={{
              marginBottom: 72,
              transitionDelay: `${i * 0.06}s`,
              borderLeft: `3px solid ${color}`,
              paddingLeft: 32,
            }}
          >
            {/* System header */}
            <div style={{ marginBottom: 20 }}>
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 10,
                  color: color,
                  letterSpacing: "0.15em",
                  display: "block",
                  marginBottom: 4,
                }}
              >
                {num} — {mode}
              </span>
              <h2
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(22px, 3vw, 34px)",
                  fontWeight: 400,
                  color: "var(--ink)",
                  lineHeight: 1.2,
                }}
              >
                {title}
              </h2>
            </div>

            {/* Spec table */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                border: "1px solid var(--rule)",
                background: "var(--surface)",
                marginBottom: 24,
              }}
            >
              {specs.map(({ label, value }, j) => (
                <div
                  key={label}
                  style={{
                    padding: "12px 20px",
                    borderRight: j % 2 === 0 ? "1px solid var(--rule)" : "none",
                    borderBottom: j < 2 ? "1px solid var(--rule)" : "none",
                  }}
                >
                  <div className="cap-num" style={{ marginBottom: 4 }}>{label}</div>
                  <div
                    style={{
                      fontFamily: "var(--sans)",
                      fontSize: 10,
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

            {/* Description */}
            {desc.split("\n\n").map((para, pi) => (
              <p
                key={pi}
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 13,
                  color: "var(--ink-soft)",
                  lineHeight: 1.9,
                  marginBottom: 16,
                }}
              >
                {para}
              </p>
            ))}
          </div>
        ))}
      </div>

      {/* ── Back link ── */}
      <div
        className="fade-up"
        style={{
          paddingTop: 40,
          borderTop: "1px solid var(--rule)",
          maxWidth: 960,
        }}
      >
        <a href="/aerospace" className="btn btn-ghost">
          ← Back to Aerospace
        </a>
      </div>

    </section>
  );
}
