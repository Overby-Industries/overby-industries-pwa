"use client";

import { useEffect } from "react";

export default function OperatingSystemsPage() {
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

  return (
    <section className="whitepaper-page graph-bg">

      {/* ── Header ── */}
      <div style={{ maxWidth: 900, marginBottom: 72 }}>
        <span className="eyebrow fade-up hero-immediate">
          Aerospace Division · Flight Software &amp; Avionics
        </span>
        <h1 className="hero-title fade-up hero-immediate" style={{ transitionDelay: "0.08s", marginBottom: 24 }}>
          Every Line Written {" "}
          <em>In-House</em>
        </h1>
        <p className="hero-sub fade-up hero-immediate" style={{ transitionDelay: "0.16s", maxWidth: 700 }}>
          Project Helga's flight computer runs a purpose-built real-time operating system written
          entirely in C++ from the avionics bus up — no third-party flight stack, no licensed
          black-box firmware. Every embedded system on the vehicle is documented, versioned, and
          published as part of Overby's open-source engineering commitment.
        </p>
        <div className="rule-divider fade-up hero-immediate" style={{ transitionDelay: "0.24s", marginTop: 40 }}>
          <div className="diamond" />
        </div>
      </div>

      {/* ── Architecture ── */}
      <div style={{ maxWidth: 960, marginBottom: 96 }}>
        <div className="fade-up" style={{ marginBottom: 40 }}>
          <span className="eyebrow">Core Architecture · Redundant Flight Computers</span>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400, color: "var(--ink)", lineHeight: 1.2, marginBottom: 16 }}>
            Triple Redundancy,{" "}
            <em style={{ fontStyle: "italic", color: "var(--blue)" }}>Zero Single Point of Failure</em>
          </h2>
          <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.9, maxWidth: 680, marginBottom: 16 }}>
            Three independent flight computers run the same real-time control loop in lockstep,
            each reading the same sensor bus and voting on actuator commands before any command
            reaches a control surface, thruster, or propulsion subsystem. A disagreement between
            any one computer and the other two is resolved by majority vote and logged for
            post-flight review — the outvoted unit is isolated but never physically shut down
            mid-flight.
          </p>
          <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.9, maxWidth: 680 }}>
            The control loop itself runs at a fixed 1kHz cycle rate across every flight phase —
            atmospheric cruise, orbital insertion, reentry, and runway approach — with no mode
            switch that could introduce a timing discontinuity at the worst possible moment.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", border: "1px solid var(--rule)" }}>
          {[
            { mode: "FC-A", title: "Primary Flight Computer", color: "var(--gold)", features: ["1kHz real-time control loop", "Full sensor bus read access", "Actuator command authority", "Independent power bus"] },
            { mode: "FC-B", title: "Secondary Flight Computer", color: "var(--blue)", features: ["Lockstep control loop replica", "Cross-checks FC-A output", "Voting authority on disagreement", "Independent power bus"] },
            { mode: "FC-C", title: "Tie-Breaker Computer", color: "var(--gold)", features: ["Independent hardware lineage", "Casting vote on 1-1 disagreement", "Continuous self-diagnostic loop", "Independent power bus"] },
          ].map(({ mode, title, color, features }, i) => (
            <div key={title} className="cap-card fade-up" style={{ borderRight: i < 2 ? "1px solid var(--rule)" : "none", borderLeft: `3px solid ${color}`, transitionDelay: `${i * 0.08}s` }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: 10, color, letterSpacing: "0.15em", marginBottom: 8 }}>{mode}</div>
              <div className="cap-title">{title}</div>
              <ul style={{ listStyle: "none", padding: 0, marginTop: 12 }}>
                {features.map((f) => (
                  <li key={f} style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-soft)", lineHeight: 1.7, display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 4 }}>
                    <span style={{ display: "inline-block", width: 4, height: 4, background: color, transform: "rotate(45deg)", flexShrink: 0, marginTop: 7 }} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="rule-divider fade-up" style={{ marginBottom: 96 }}><div className="diamond" /></div>

      {/* ── Software Stack ── */}
      <div style={{ maxWidth: 960, marginBottom: 96 }}>
        <div className="fade-up" style={{ marginBottom: 40 }}>
          <span className="eyebrow">Software Stack · Open-Source Commitment</span>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400, color: "var(--ink)", lineHeight: 1.2, marginBottom: 16 }}>
            Documented Down to{" "}
            <em style={{ fontStyle: "italic", color: "var(--blue)" }}>the Bus Protocol</em>
          </h2>
          <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.9, maxWidth: 680 }}>
            Overby Industries publishes avionics architecture, sensor fusion algorithms, and
            control loop design through accessible public repositories — treating flight software
            transparency as foundational to long-term institutional trust, not a competitive
            liability.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {[
            { title: "Sensor Fusion Layer", color: "var(--blue)", desc: "Inertial, GPS/GNSS, air data, and star-tracker inputs are fused in a custom Kalman filter implementation tuned specifically for the transition between atmospheric and orbital flight regimes." },
            { title: "Guidance & Navigation", color: "var(--gold)", desc: "Trajectory planning and guidance run as a deterministic C++ module with no dynamic memory allocation in the hot path — every timing behaviour is provable ahead of flight, not just tested." },
            { title: "Autonomous Fault Handling", color: "var(--blue)", desc: "The flight computer detects sensor and actuator faults in real time and reconfigures control authority around the failure without ground intervention, critical for phases where light-lag or signal blackout rules out real-time human input." },
            { title: "Ground Telemetry & Logging", color: "var(--gold)", desc: "Full state telemetry is logged onboard and streamed to ground whenever link is available, giving engineers complete post-flight visibility into every control decision the vehicle made." },
          ].map(({ title, color, desc }, i) => (
            <div key={title} className="cap-card fade-up" style={{ borderLeft: `3px solid ${color}`, transitionDelay: `${i * 0.08}s` }}>
              <div className="cap-title">{title}</div>
              <p className="cap-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rule-divider fade-up" style={{ marginBottom: 96 }}><div className="diamond" /></div>

      {/* ── Stats ── */}
      <div style={{ maxWidth: 960, marginBottom: 56 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", border: "1px solid var(--rule)", background: "var(--surface)" }}>
          {[
            { num: "3", label: "Independent flight\ncomputers" },
            { num: "1kHz", label: "Fixed control\nloop rate" },
            { num: "0", label: "Third-party\nflight stack" },
            { num: "100%", label: "Open-source\ndocumentation" },
          ].map(({ num, label }, i) => (
            <div key={label} className="fade-up" style={{ padding: "24px 20px", borderRight: i < 3 ? "1px solid var(--rule)" : "none", textAlign: "center", transitionDelay: `${i * 0.06}s` }}>
              <span style={{ fontFamily: "var(--sans)", fontSize: 32, fontWeight: 800, color: "var(--blue)", display: "block", lineHeight: 1, marginBottom: 8 }}>{num}</span>
              <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-soft)", whiteSpace: "pre-line", lineHeight: 1.6 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="fade-up" style={{ paddingTop: 40, borderTop: "1px solid var(--rule)", maxWidth: 960, display: "flex", gap: 16, flexWrap: "wrap" }}>
        <a href="/aerospace" className="btn btn-ghost">← Back to Aerospace</a>
        <a href="/aerospace/flight-controls" className="btn btn-primary">Flight Controls →</a>
      </div>

    </section>
  );
}
