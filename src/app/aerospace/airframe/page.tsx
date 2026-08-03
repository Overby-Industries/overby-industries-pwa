"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function AirframePage() {
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
          Aerospace Division · Project Helga — Airframe
        </span>
        <h1 className="hero-title fade-up hero-immediate" style={{ transitionDelay: "0.08s", marginBottom: 24 }}>
          One Surface, {" "}
          <em>Every Speed Regime</em>
        </h1>
        <p className="hero-sub fade-up hero-immediate" style={{ transitionDelay: "0.16s", maxWidth: 700 }}>
          Project Helga's airframe is a blended wing lifting body with a hypersonic double-delta
          planform — a single continuous structure that carries the vehicle from runway takeoff,
          through hypersonic orbital insertion, to a controlled runway landing without a wing,
          fuselage, or control surface ever being optimised for just one part of that envelope.
        </p>
        <div className="rule-divider fade-up hero-immediate" style={{ transitionDelay: "0.24s", marginTop: 40 }}>
          <div className="diamond" />
        </div>
      </div>

      {/* ── Additional views ── */}
      <div style={{ maxWidth: 960, marginBottom: 96 }}>
        <div className="fade-up" style={{ marginBottom: 40 }}>
          <span className="eyebrow">Structural Views · Planform &amp; Perspective</span>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400, color: "var(--ink)", lineHeight: 1.2, marginBottom: 16 }}>
            The Structure Behind {" "}
            <em style={{ fontStyle: "italic", color: "var(--blue)" }}>the Skin</em>
          </h2>
          <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.9, maxWidth: 680 }}>
            The perspective, plan, port, and front views are covered on the{" "}
            <a href="/aerospace" style={{ color: "var(--blue)" }}>Aerospace overview page</a>.
            The planform and three-quarter views below show the double-delta wing sweep
            and blended wing-body integration in full.
          </p>
        </div>

        {[
          {
            src: "/helga-top.png",
            alt: "Project Helga — planform view",
            label: "Fig. 05 — Planform View",
            caption:
              "The top-down planform view shows the double-delta wing sweep in full, illustrating how the cranked leading edge blends continuously into the fuselage without a discrete wing-root junction.",
          },
          {
            src: "/project-helga.png",
            alt: "Project Helga — three-quarter perspective view",
            label: "Fig. 06 — Three-Quarter Perspective",
            caption:
              "The three-quarter view shows the blended wing lifting body as a single continuous surface, carrying the vehicle across its full flight envelope from subsonic approach to hypersonic reentry.",
          },
        ].map(({ src, alt, label, caption }, i) => (
          <div key={label} className="fade-up" style={{ marginBottom: 56, transitionDelay: `${i * 0.06}s` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
              <span style={{ fontFamily: "var(--sans)", fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)" }}>{label}</span>
              <div style={{ flex: 1, height: 1, background: "var(--rule)" }} />
            </div>
            <div style={{ border: "1px solid var(--rule)", background: "var(--surface)", overflow: "hidden" }}>
              <Image src={src} alt={alt} width={1600} height={900} unoptimized style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
            <p style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--ink-soft)", lineHeight: 1.8, marginTop: 14, paddingLeft: 16, borderLeft: "2px solid var(--rule)" }}>
              {caption}
            </p>
          </div>
        ))}
      </div>

      <div className="rule-divider fade-up" style={{ marginBottom: 96 }}><div className="diamond" /></div>

      {/* ── Materials & Construction ── */}
      <div style={{ maxWidth: 960, marginBottom: 96 }}>
        <div className="fade-up" style={{ marginBottom: 40 }}>
          <span className="eyebrow">Structure · Materials &amp; Thermal Protection</span>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400, color: "var(--ink)", lineHeight: 1.2, marginBottom: 16 }}>
            Built for Reentry,{" "}
            <em style={{ fontStyle: "italic", color: "var(--blue)" }}>Not Just Launch</em>
          </h2>
          <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.9, maxWidth: 680 }}>
            Every structural choice on Project Helga is made against the hardest part of the
            flight envelope, not the easiest — hypersonic reentry heating, not runway takeoff.
            The airframe is engineered as a single reusable structure rated for repeated cycles,
            not a one-shot heat shield bonded to an otherwise disposable frame.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {[
            { title: "Blended Wing Lifting Body", color: "var(--blue)", desc: "Fuselage and wing form one continuous aerodynamic surface with no discrete junction, eliminating the parasitic drag and localised heating spikes that occur at a conventional wing root fillet." },
            { title: "Double-Delta Planform", color: "var(--gold)", desc: "A cranked leading edge delays flow separation at high angles of attack, preserving roll and pitch control authority from hypersonic reentry all the way down to final approach speeds." },
            { title: "Active Thermal Management", color: "var(--blue)", desc: "Ionic liquid drawn from the propulsion system's main tank circulates through the airframe's leading edges and lower surface during reentry, actively redistributing heat load rather than relying on ablative shielding alone." },
            { title: "Passive Aerodynamic Stability", color: "var(--gold)", desc: "Slight dihedral and a canted trailing edge sweep provide passive roll stability and a stable high-AOA reentry attitude without active control surface deflection, reducing actuator heating and workload during the hottest flight phase." },
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
            { num: "1", label: "Continuous surface —\nno wing-body junction" },
            { num: "0", label: "Ablative shield\nreplacement per flight" },
            { num: "2", label: "Speed regimes —\nsubsonic to hypersonic" },
            { num: "100%", label: "Runway takeoff\n& landing capable" },
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
        <a href="/aerospace/flight-controls" className="btn btn-ghost">← Flight Controls</a>
        <a href="/aerospace/propulsion" className="btn btn-primary">Propulsion Architecture →</a>
      </div>

    </section>
  );
}
