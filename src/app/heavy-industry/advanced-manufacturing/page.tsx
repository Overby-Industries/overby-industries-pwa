"use client";

import { useEffect } from "react";

export default function AdvancedManufacturingPage() {
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
          Heavy Industry · Advanced Manufacturing Division
        </span>
        <h1 className="hero-title fade-up hero-immediate" style={{ transitionDelay: "0.08s", marginBottom: 24 }}>
          Manufacturing That{" "}
          <em>Never Ships From Earth</em>
        </h1>
        <p className="hero-sub fade-up hero-immediate" style={{ transitionDelay: "0.16s", maxWidth: 700 }}>
          Every component an Overby facility needs — structural elements, precision parts,
          replacement hardware — is fabricated directly from ISRU feedstock at the point of use.
          Advanced Manufacturing is the division that turns refined metal, UHPC, and composite
          stock into finished, deployable hardware without a single part waiting on a supply run.
        </p>
        <div className="rule-divider fade-up hero-immediate" style={{ transitionDelay: "0.24s", marginTop: 40 }}>
          <div className="diamond" />
        </div>
      </div>

      {/* ── Fabrication Cycle ── */}
      <div style={{ maxWidth: 960, marginBottom: 96 }}>
        <div className="fade-up" style={{ marginBottom: 40 }}>
          <span className="eyebrow">Core Process · Additive &amp; Microgravity Fabrication</span>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400, color: "var(--ink)", lineHeight: 1.2, marginBottom: 16 }}>
            No Gravity Required,{" "}
            <em style={{ fontStyle: "italic", color: "var(--blue)" }}>No Gravity Wasted</em>
          </h2>
          <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.9, maxWidth: 680, marginBottom: 16 }}>
            Microgravity manufacturing bays produce components that are difficult or impossible
            to fabricate on Earth — perfect crystal growth without convection currents, spherical
            casting with no gravity-driven distortion, and continuous fibre layup without sag.
            Advanced Manufacturing platforms exploit the absence of gravity rather than working
            around it.
          </p>
          <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.9, maxWidth: 680 }}>
            Every fabrication line accepts feedstock directly from ISRU output streams — metal
            ingot, UHPC aggregate, basalt fibre, and refined polymer — with no intermediate
            processing step required.
          </p>
        </div>

        <div style={{ border: "1px solid var(--rule)", background: "var(--surface)" }}>
          <div style={{ padding: "16px 24px", borderBottom: "1px solid var(--rule)", fontFamily: "var(--sans)", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)" }}>
            Fabrication Cycle
          </div>
          {[
            { step: "01 — Feedstock Intake", desc: "Refined metal ingot, UHPC aggregate, basalt fibre stock, and polymer pellets arrive directly from ISRU processing nodes, sized and sorted for the specific fabrication line requesting them." },
            { step: "02 — Digital Fabrication Queue", desc: "Every part on the platform is produced from a versioned digital blueprint, queued and prioritised automatically based on which facility, vehicle, or expansion module is requesting it." },
            { step: "03 — Additive & Casting Production", desc: "Metal components are produced via directed energy deposition additive manufacturing; UHPC and composite elements are cast or layed up in zero-g moulds; polymer components are injection moulded from Titan-sourced feedstock." },
            { step: "04 — Precision Finishing", desc: "Structural and load-bearing components pass through precision machining and inspection cells, with dimensional and material integrity verification logged against the original digital blueprint before release." },
            { step: "05 — Assembly Staging", desc: "Finished components are staged for builder droid pickup, direct habitat installation, or Starlifter II cargo loading — whichever destination the fabrication request specified." },
          ].map(({ step, desc }, i) => (
            <div key={step} className="fade-up" style={{ display: "grid", gridTemplateColumns: "220px 1fr", padding: "20px 24px", borderBottom: i < 4 ? "1px solid var(--rule)" : "none", gap: 24, alignItems: "start", transitionDelay: `${i * 0.05}s` }}>
              <div style={{ fontFamily: "var(--sans)", fontSize: 9, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", lineHeight: 1.6 }}>{step}</div>
              <p style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--ink-soft)", lineHeight: 1.8, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rule-divider fade-up" style={{ marginBottom: 96 }}><div className="diamond" /></div>

      {/* ── Platform Capabilities ── */}
      <div style={{ maxWidth: 960, marginBottom: 96 }}>
        <div className="fade-up" style={{ marginBottom: 40 }}>
          <span className="eyebrow">Platform Capabilities · Modular &amp; Scalable</span>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400, color: "var(--ink)", lineHeight: 1.2, marginBottom: 16 }}>
            One Platform Type,{" "}
            <em style={{ fontStyle: "italic", color: "var(--blue)" }}>Every Facility</em>
          </h2>
          <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.9, maxWidth: 680 }}>
            Standardised docking interfaces and power rails let manufacturing capacity scale
            incrementally as demand grows, rather than requiring a new bespoke facility design
            for every expansion.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {[
            { title: "Microgravity Casting Bays", color: "var(--blue)", desc: "Zero-g moulding cells produce spherical components, perfect crystal boules, and fibre-wound pressure vessels impossible to cast without distortion under full gravity." },
            { title: "Directed Energy Deposition", color: "var(--gold)", desc: "Metal additive manufacturing cells build structural components layer by layer directly from powdered ISRU-refined metal feedstock, with no tooling changeover between part geometries." },
            { title: "Standardised Docking Interfaces", color: "var(--blue)", desc: "Common docking rings, power distribution rails, and material transfer manifolds allow new fabrication modules to be added incrementally without redesigning the base platform." },
            { title: "Digital Blueprint Library", color: "var(--gold)", desc: "Every producible component is published as an open, versioned blueprint, consistent with Overby's open-source engineering commitment and allowing any facility to fabricate any cataloged part." },
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
            { num: "0", label: "Earth-shipped\ncomponents" },
            { num: "4", label: "Feedstock types\naccepted directly" },
            { num: "100%", label: "Blueprints published\nopen-source" },
            { num: "∞", label: "Scalable via modular\ndocking interfaces" },
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
        <a href="/heavy-industry/space-debris-reclamation" className="btn btn-ghost">← Space Debris Reclamation</a>
        <a href="/heavy-industry/robotics" className="btn btn-primary">Robotics →</a>
      </div>

    </section>
  );
}
