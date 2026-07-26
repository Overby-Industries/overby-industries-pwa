"use client";

import { useEffect } from "react";

export default function FlightControlsPage() {
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
          Aerospace Division · Fly-By-Wire Flight Controls
        </span>
        <h1 className="hero-title fade-up hero-immediate" style={{ transitionDelay: "0.08s", marginBottom: 24 }}>
          Control Authority,{" "}
          <em>Subsonic to Hypersonic</em>
        </h1>
        <p className="hero-sub fade-up hero-immediate" style={{ transitionDelay: "0.16s", maxWidth: 700 }}>
          Project Helga's fully fly-by-wire control system has to keep the vehicle stable across
          the widest speed envelope any Overby vehicle will fly — from hypersonic reentry at a
          high angle of attack down to a conventional runway approach at landing speed, with no
          mechanical linkage anywhere between the pilot input and the control surface actuators.
        </p>
        <div className="rule-divider fade-up hero-immediate" style={{ transitionDelay: "0.24s", marginTop: 40 }}>
          <div className="diamond" />
        </div>
      </div>

      {/* ── Control Surfaces ── */}
      <div style={{ maxWidth: 960, marginBottom: 96 }}>
        <div className="fade-up" style={{ marginBottom: 40 }}>
          <span className="eyebrow">Core System · Control Surface Architecture</span>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400, color: "var(--ink)", lineHeight: 1.2, marginBottom: 16 }}>
            Fewer Surfaces,{" "}
            <em style={{ fontStyle: "italic", color: "var(--blue)" }}>Smarter Mixing</em>
          </h2>
          <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.9, maxWidth: 680, marginBottom: 16 }}>
            The blended wing lifting body's double-delta planform doesn't have room for a
            conventional tail, so pitch, roll, and yaw authority all come from a small set of
            control surfaces that the flight computer mixes dynamically depending on speed regime
            — a surface deflection that produces pure roll at subsonic speed produces a coupled
            roll-yaw response at hypersonic speed, and the control laws compensate for that shift
            continuously rather than switching between discrete flight modes.
          </p>
          <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.9, maxWidth: 680 }}>
            Passive dihedral and the canted trailing edge sweep carry part of the stability
            burden aerodynamically, so the active control system only has to correct deviations
            rather than fight the airframe's natural tendencies at every instant.
          </p>
        </div>

        <div style={{ border: "1px solid var(--rule)", background: "var(--surface)" }}>
          <div style={{ padding: "16px 24px", borderBottom: "1px solid var(--rule)", fontFamily: "var(--sans)", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)" }}>
            Control Authority by Flight Phase
          </div>
          {[
            { step: "Hypersonic Reentry", desc: "High-AOA attitude control comes primarily from body-flap deflection and differential thrust vectoring from the MHD-Lorentz nozzle, since conventional control surfaces lose effectiveness in the thin, superheated boundary layer at reentry velocities." },
            { step: "Upper Atmospheric Transition", desc: "As dynamic pressure builds, control authority shifts progressively onto the trailing-edge elevons, with the flight computer blending thrust vectoring and aerodynamic control smoothly rather than switching abruptly between the two." },
            { step: "Atmospheric Cruise", desc: "Full aerodynamic control authority is available — elevons handle pitch and roll, a split rudder on the aft body provides yaw authority, all commanded through the triple-redundant fly-by-wire actuator loop." },
            { step: "Approach & Landing", desc: "At low speed the control laws increase control surface gain to compensate for reduced dynamic pressure, while the landing gear and speed brake deployment sequences are handled as scheduled, computer-managed events rather than raw pilot input." },
          ].map(({ step, desc }, i) => (
            <div key={step} className="fade-up" style={{ display: "grid", gridTemplateColumns: "220px 1fr", padding: "20px 24px", borderBottom: i < 3 ? "1px solid var(--rule)" : "none", gap: 24, alignItems: "start", transitionDelay: `${i * 0.05}s` }}>
              <div style={{ fontFamily: "var(--sans)", fontSize: 9, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", lineHeight: 1.6 }}>{step}</div>
              <p style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--ink-soft)", lineHeight: 1.8, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rule-divider fade-up" style={{ marginBottom: 96 }}><div className="diamond" /></div>

      {/* ── Actuation & Redundancy ── */}
      <div style={{ maxWidth: 960, marginBottom: 96 }}>
        <div className="fade-up" style={{ marginBottom: 40 }}>
          <span className="eyebrow">Actuation · Redundancy &amp; Thermal Survival</span>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400, color: "var(--ink)", lineHeight: 1.2, marginBottom: 16 }}>
            Actuators That Survive{" "}
            <em style={{ fontStyle: "italic", color: "var(--blue)" }}>Reentry Heat</em>
          </h2>
          <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.9, maxWidth: 680 }}>
            Every actuator on the airframe sits in the same thermal environment as the structure
            it moves, so actuation hardware is designed around reentry heating from the start,
            not adapted from a subsonic aircraft baseline.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {[
            { title: "Electromechanical Actuators", color: "var(--blue)", desc: "Each control surface is driven by paired electromechanical actuators rather than hydraulics, eliminating hydraulic fluid lines that would need thermal protection across the full length of the wing." },
            { title: "Triple-Redundant Actuation Loop", color: "var(--gold)", desc: "Each actuator pair takes commands from all three flight computers independently, with a local voting circuit resolving disagreements without waiting for a full flight computer re-sync." },
            { title: "IL-Cooled Actuator Housings", color: "var(--blue)", desc: "Actuator housings near the leading edge share the ionic liquid thermal management loop with the airframe skin, keeping electromechanical components within operating temperature through peak reentry heating." },
            { title: "Graceful Degradation Logic", color: "var(--gold)", desc: "If an actuator pair fails outright, the control laws automatically redistribute authority to adjacent surfaces and flag the loss for the fault-handling layer, rather than requiring a hard failover event." },
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
            { num: "0", label: "Mechanical linkages —\nfully fly-by-wire" },
            { num: "2", label: "Actuators per\ncontrol surface" },
            { num: "4", label: "Distinct flight phases,\none control law" },
            { num: "3×", label: "Redundant command\npath per actuator" },
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
        <a href="/aerospace/operating-systems" className="btn btn-ghost">← Operating Systems</a>
        <a href="/aerospace/airframe" className="btn btn-primary">Airframe →</a>
      </div>

    </section>
  );
}
