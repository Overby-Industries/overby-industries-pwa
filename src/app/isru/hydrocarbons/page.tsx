"use client";

import { useEffect } from "react";

export default function HydrocarbonsPage() {
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
          ISRU Division · Titan Hydrocarbon Extraction
        </span>
        <h1 className="hero-title fade-up hero-immediate" style={{ transitionDelay: "0.08s", marginBottom: 24 }}>
          Lakes of Fuel —{" "}
          <em>The Titan Hydrocarbon Base</em>
        </h1>
        <p className="hero-sub fade-up hero-immediate" style={{ transitionDelay: "0.16s", maxWidth: 700 }}>
          Titan's surface lakes and dense nitrogen atmosphere hold the largest accessible
          hydrocarbon reserve in the solar system — methane, ethane, propane, and complex organics
          in quantities that dwarf every known reserve on Earth. Overby Industries extracts and
          refines this material into the plastics, fuels, and chemical feedstocks a permanent
          off-world civilization depends on.
        </p>
        <div className="rule-divider fade-up hero-immediate" style={{ transitionDelay: "0.24s", marginTop: 40 }}>
          <div className="diamond" />
        </div>
      </div>

      {/* ── Processing Cycle ── */}
      <div style={{ maxWidth: 960, marginBottom: 96 }}>
        <div className="fade-up" style={{ marginBottom: 40 }}>
          <span className="eyebrow">Core Process · Cryogenic Separation &amp; Refining</span>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400, color: "var(--ink)", lineHeight: 1.2, marginBottom: 16 }}>
            Thick Atmosphere,{" "}
            <em style={{ fontStyle: "italic", color: "var(--blue)" }}>Easy Access</em>
          </h2>
          <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.9, maxWidth: 680, marginBottom: 16 }}>
            Titan's thick nitrogen atmosphere and low surface gravity make hydrocarbon extraction
            operations markedly easier than equivalent Mars surface work, despite the far greater
            transit distance. Cryogenic surface temperatures mean methane and ethane are already
            liquid at the lake surface — no drilling or pressurised extraction required.
          </p>
          <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.9, maxWidth: 680 }}>
            Every extraction platform runs a closed cryogenic loop, returning boil-off vapour to
            the process stream rather than venting it to atmosphere.
          </p>
        </div>

        <div style={{ border: "1px solid var(--rule)", background: "var(--surface)" }}>
          <div style={{ padding: "16px 24px", borderBottom: "1px solid var(--rule)", fontFamily: "var(--sans)", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)" }}>
            Hydrocarbon Extraction Cycle
          </div>
          {[
            { step: "01 — Surface Draw", desc: "Floating extraction platforms draw liquid methane and ethane directly from lake surfaces through insulated intake manifolds, requiring no drilling or pressurisation given Titan's cryogenic surface conditions." },
            { step: "02 — Atmospheric Skimming", desc: "Secondary atmospheric processors skim complex organic aerosols and higher hydrocarbons directly from the lower atmosphere, supplementing lake-surface extraction with compounds not present in liquid form." },
            { step: "03 — Cryogenic Separation", desc: "Fractional distillation columns operating at Titan-ambient cryogenic temperatures separate methane, ethane, propane, and heavier organics by boiling point, with all boil-off vapour recaptured into the process loop." },
            { step: "04 — Polymerisation", desc: "Separated hydrocarbon fractions are catalytically polymerised into polyethylene and polypropylene feedstock, or chemically processed into synthetic fibre precursors for textile and composite applications." },
            { step: "05 — Fuel Refining", desc: "A dedicated fraction is refined into stable fuel stock for non-electric propulsion systems and combustion-based surface equipment, stored in insulated cryogenic tankage." },
            { step: "06 — Stockpile & Transfer", desc: "Finished polymer pellets, synthetic fibre stock, and fuel canisters are stockpiled at the Titan Base for onward transfer to the outer-system supply chain, closing the loop on Earth-independent chemical manufacturing." },
          ].map(({ step, desc }, i) => (
            <div key={step} className="fade-up" style={{ display: "grid", gridTemplateColumns: "160px 1fr", padding: "20px 24px", borderBottom: i < 5 ? "1px solid var(--rule)" : "none", gap: 24, alignItems: "start", transitionDelay: `${i * 0.05}s` }}>
              <div style={{ fontFamily: "var(--sans)", fontSize: 9, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", lineHeight: 1.6 }}>{step}</div>
              <p style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--ink-soft)", lineHeight: 1.8, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rule-divider fade-up" style={{ marginBottom: 96 }}><div className="diamond" /></div>

      {/* ── Output Products ── */}
      <div style={{ maxWidth: 960, marginBottom: 96 }}>
        <div className="fade-up" style={{ marginBottom: 40 }}>
          <span className="eyebrow">Output Streams · Chemical Products</span>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400, color: "var(--ink)", lineHeight: 1.2, marginBottom: 16 }}>
            From Raw Methane to{" "}
            <em style={{ fontStyle: "italic", color: "var(--blue)" }}>Finished Polymer</em>
          </h2>
          <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.9, maxWidth: 680 }}>
            Full ISRU integration at Titan marks the point at which the Overby supply network
            becomes genuinely independent of Earth-sourced chemical feedstock — every plastic,
            fibre, and fuel the network needs, refined at the source.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {[
            { title: "Polyethylene & Polypropylene", color: "var(--blue)", desc: "Bulk polymer feedstock for injection moulding, structural panelling, and general manufacturing across every Overby facility — the largest single output stream by volume." },
            { title: "Synthetic Fibres", color: "var(--gold)", desc: "Fibre precursors refined for textile production and composite reinforcement, supplementing basalt fibre in applications requiring flexibility or lighter mass." },
            { title: "Lubricants & Industrial Fluids", color: "var(--blue)", desc: "Refined hydrocarbon lubricants and hydraulic fluids rated for the extreme cryogenic-to-thermal cycling range found across every Overby operational environment." },
            { title: "Non-Electric Propulsion Fuel", color: "var(--gold)", desc: "Stable combustion-grade fuel stock for surface equipment and propulsion applications where electric or ion systems aren't the optimal choice, stored in insulated cryogenic tankage." },
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
            { num: "~8.5 AU", label: "Distance from\nthe inner solar system" },
            { num: "-179°C", label: "Titan surface\ntemperature" },
            { num: "0", label: "Drilling required —\nliquid at surface" },
            { num: "4", label: "Chemical product\nstreams from one base" },
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
        <a href="/isru/precious-based-metals" className="btn btn-ghost">← Precious-Based Metals</a>
        <a href="/isru/water" className="btn btn-primary">Water &amp; Volatiles →</a>
      </div>

    </section>
  );
}
