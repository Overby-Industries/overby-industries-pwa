"use client";

import { useEffect } from "react";

export default function RegolithPage() {
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
          ISRU Division · Regolith &amp; Silicate Processing
        </span>
        <h1 className="hero-title fade-up hero-immediate" style={{ transitionDelay: "0.08s", marginBottom: 24 }}>
          From Dust to Structure —{" "}
          <em>The Regolith Pipeline</em>
        </h1>
        <p className="hero-sub fade-up hero-immediate" style={{ transitionDelay: "0.16s", maxWidth: 700 }}>
          Silicate regolith is the single most abundant solid material in the solar system — and
          the least glamorous. Overby Industries turns it into the structural backbone of every
          off-world facility: UHPC aggregate, basalt fibre composite, sintered shielding brick,
          and refined aluminium, all without importing a single kilogram of raw material from Earth.
        </p>
        <div className="rule-divider fade-up hero-immediate" style={{ transitionDelay: "0.24s", marginTop: 40 }}>
          <div className="diamond" />
        </div>
      </div>

      {/* ── Processing Cycle ── */}
      <div style={{ maxWidth: 960, marginBottom: 96 }}>
        <div className="fade-up" style={{ marginBottom: 40 }}>
          <span className="eyebrow">Core Process · Beneficiation &amp; Sintering</span>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400, color: "var(--ink)", lineHeight: 1.2, marginBottom: 16 }}>
            Sharp, Sterile, and{" "}
            <em style={{ fontStyle: "italic", color: "var(--blue)" }}>Everywhere</em>
          </h2>
          <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.9, maxWidth: 680, marginBottom: 16 }}>
            Lunar and asteroid regolith has never been exposed to wind or water erosion, so its
            grains stay glass-sharp and mechanically interlocking at the micron scale — a property
            that makes it abrasive to machinery, but ideal for sintering into dense, high-strength
            solids once separated by particle size and mineral content.
          </p>
          <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.9, maxWidth: 680 }}>
            Every Overby regolith processor runs a closed dust-handling loop — no fines escape
            into the surrounding environment, and nothing that enters the hopper leaves as waste.
          </p>
        </div>

        <div style={{ border: "1px solid var(--rule)", background: "var(--surface)" }}>
          <div style={{ padding: "16px 24px", borderBottom: "1px solid var(--rule)", fontFamily: "var(--sans)", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)" }}>
            Regolith Processing Cycle
          </div>
          {[
            { step: "01 — Collect", desc: "Bucket-wheel and scraper-blade excavators strip the top 10–30cm of regolith, the depth band with the most consistent mineral distribution. Sealed hoppers prevent fines from becoming an ambient dust hazard around outpost infrastructure." },
            { step: "02 — Screen", desc: "Vibratory sieve stacks separate collected material by grain size. Fine dust (<100 μm) is routed to sintering feedstock; coarser fractions go to aggregate and crushed-rock construction fill." },
            { step: "03 — Beneficiate", desc: "Magnetic and electrostatic separators pull ilmenite and free metallic iron from the silicate matrix. What remains is a mineral-sorted feedstock ready for thermal or chemical processing by target output." },
            { step: "04 — Thermal Process", desc: "Concentrated solar or induction furnaces sinter fine regolith into dense ceramic brick, or melt basalt-rich fractions for fibre drawing. Ilmenite fractions are reduced to extract titanium and oxygen." },
            { step: "05 — Cast & Extrude", desc: "Molten basalt is drawn into continuous fibre for composite reinforcement. UHPC aggregate is mixed with binder and cast into structural panels. Sintered brick is pressed and cured in standard shielding-block dimensions." },
            { step: "06 — Cure & Stockpile", desc: "Finished elements cure under controlled thermal conditions and are stockpiled at the outpost for immediate construction use or Starlifter II cargo loading. Zero fines are discarded at any stage." },
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
          <span className="eyebrow">Output Streams · Structural Materials</span>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400, color: "var(--ink)", lineHeight: 1.2, marginBottom: 16 }}>
            Four Products, <em style={{ fontStyle: "italic", color: "var(--blue)" }}>One Feedstock</em>
          </h2>
          <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.9, maxWidth: 680 }}>
            A single regolith processor supplies every structural material an outpost needs to
            expand — construction aggregate, reinforcement fibre, radiation shielding, and refined
            metal — routing each mineral fraction to the output that suits it best.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {[
            { title: "UHPC Construction Aggregate", color: "var(--blue)", desc: "Ultra-High Performance Concrete cast from sintered basalt aggregate and binder, providing the primary compression-strength structural material for outpost expansion modules and mega-factory habitat framing." },
            { title: "Basalt Fibre Composites", color: "var(--gold)", desc: "Continuous fibre drawn from molten basalt provides tensile reinforcement wherever UHPC alone would fail in tension — floor panels, pressure vessel wrapping, and structural joints throughout the habitat frame." },
            { title: "Sintered Shielding Brick", color: "var(--blue)", desc: "Dense sintered regolith brick, cast in standardised dimensions, provides passive radiation shielding for habitat walls and serves as backfill material over buried outpost modules." },
            { title: "Aluminium & Titanium Stock", color: "var(--gold)", desc: "Anorthosite-derived aluminium and ilmenite-derived titanium are extracted from the beneficiated fines, refined into structural stock for framing, fasteners, and precision components." },
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
            { num: "~40%", label: "Silicon & oxygen\nby mass in regolith" },
            { num: "0", label: "Litres of water\nrequired for sintering" },
            { num: "100%", label: "Fines captured &\nrouted to output" },
            { num: "4", label: "Structural products\nfrom one feedstock" },
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
        <a href="/isru" className="btn btn-ghost">← Back to ISRU</a>
        <a href="/isru/precious-based-metals" className="btn btn-primary">Precious-Based Metals →</a>
      </div>

    </section>
  );
}
