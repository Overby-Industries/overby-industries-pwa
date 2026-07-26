"use client";

import { useEffect } from "react";

export default function WaterPage() {
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
          ISRU Division · Water &amp; Volatile Extraction
        </span>
        <h1 className="hero-title fade-up hero-immediate" style={{ transitionDelay: "0.08s", marginBottom: 24 }}>
          Ice in the Shadows —{" "}
          <em>The Water Pipeline</em>
        </h1>
        <p className="hero-sub fade-up hero-immediate" style={{ transitionDelay: "0.16s", maxWidth: 700 }}>
          Water is the single highest-leverage resource in the solar system — split into hydrogen
          and oxygen, it becomes propellant; kept whole, it becomes life support and radiation
          shielding. Overby Industries extracts water ice from permanently shadowed lunar craters
          and carbonaceous asteroid interiors, closing the propellant loop for every mission that
          follows.
        </p>
        <div className="rule-divider fade-up hero-immediate" style={{ transitionDelay: "0.24s", marginTop: 40 }}>
          <div className="diamond" />
        </div>
      </div>

      {/* ── Processing Cycle ── */}
      <div style={{ maxWidth: 960, marginBottom: 96 }}>
        <div className="fade-up" style={{ marginBottom: 40 }}>
          <span className="eyebrow">Core Process · Thermal Extraction &amp; Electrolysis</span>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400, color: "var(--ink)", lineHeight: 1.2, marginBottom: 16 }}>
            Never Above{" "}
            <em style={{ fontStyle: "italic", color: "var(--blue)" }}>−170°C</em>
          </h2>
          <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.9, maxWidth: 680, marginBottom: 16 }}>
            Lunar polar water ice sits in permanently shadowed crater floors that have not seen
            direct sunlight in billions of years — some of the coldest known locations in the
            solar system. Extraction hardware has to operate reliably at cryogenic temperatures
            with zero solar power available at the excavation site itself.
          </p>
          <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.9, maxWidth: 680 }}>
            C-class asteroid water is bound within hydrated minerals rather than existing as free
            ice, requiring a gentler thermal-release process to avoid destroying the surrounding
            carbonaceous structure.
          </p>
        </div>

        <div style={{ border: "1px solid var(--rule)", background: "var(--surface)" }}>
          <div style={{ padding: "16px 24px", borderBottom: "1px solid var(--rule)", fontFamily: "var(--sans)", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)" }}>
            Water Extraction Cycle
          </div>
          {[
            { step: "01 — Prospect", desc: "Neutron spectrometer surveys identify sub-surface ice concentration across permanently shadowed crater floors and catalogued C-class asteroid targets before any excavation begins." },
            { step: "02 — Power & Shelter", desc: "Extraction rigs deploy with dedicated power reserves — beamed power relay or onboard reactor — since permanently shadowed sites receive zero direct solar input at any point in their orbit." },
            { step: "03 — Excavate Icy Regolith", desc: "Cryogenic-rated augers extract ice-bearing regolith without the thermal shock that would flash-sublimate the ice prematurely, preserving it for controlled processing." },
            { step: "04 — Thermal Extraction", desc: "Sealed thermal extraction chambers gently heat the icy regolith, sublimating water vapour away from the mineral matrix for capture — while hydrated C-class minerals are processed at lower controlled temperatures to release bound water without degrading surrounding organics." },
            { step: "05 — Purification & Storage", desc: "Extracted water vapour is condensed, filtered of particulate contamination, and stored as liquid or ice depending on onward use — propellant production or direct habitat consumption." },
            { step: "06 — Electrolysis", desc: "A dedicated fraction is electrolysed into hydrogen and oxygen gas, cryogenically compressed, and stored as propellant stock ready for Starlifter II refuelling or orbital depot transfer." },
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
          <span className="eyebrow">Output Streams · Propellant &amp; Life Support</span>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400, color: "var(--ink)", lineHeight: 1.2, marginBottom: 16 }}>
            The Molecule That{" "}
            <em style={{ fontStyle: "italic", color: "var(--blue)" }}>Does Everything</em>
          </h2>
          <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.9, maxWidth: 680 }}>
            No other single resource feeds as many downstream systems as water. One extraction
            site supplies propellant, breathable atmosphere, radiation protection, and recovered
            methane in parallel.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {[
            { title: "H₂/O₂ Propellant", color: "var(--blue)", desc: "Electrolysed hydrogen and oxygen supply the cislunar depot and Starlifter II fleet, reducing the mass fraction of propellant that has to be launched from Earth to near zero." },
            { title: "Life Support & Atmosphere", color: "var(--gold)", desc: "Purified water directly supports habitat drinking water and, via electrolysis, breathable oxygen supply for every crewed Overby facility across the network." },
            { title: "Radiation Shielding", color: "var(--blue)", desc: "Water's hydrogen content makes it one of the most effective radiation shielding materials by mass — stored water reserves double as passive habitat wall shielding wherever positioned." },
            { title: "CH₄ Recovery", color: "var(--gold)", desc: "C-class asteroid extraction recovers methane alongside water from the same carbonaceous volatile fraction, supplementing the Titan hydrocarbon stream for inner-solar-system operations." },
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
            { num: "−170°C+", label: "Permanently shadowed\ncrater temperatures" },
            { num: "~0%", label: "Propellant mass\nlaunched from Earth" },
            { num: "2", label: "Source bodies —\nlunar poles & C-class" },
            { num: "4", label: "Systems fed by\none extraction site" },
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
        <a href="/isru/hydrocarbons" className="btn btn-ghost">← Hydrocarbons</a>
        <a href="/isru" className="btn btn-primary">Back to ISRU Overview →</a>
      </div>

    </section>
  );
}
