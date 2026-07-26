"use client";

import { useEffect } from "react";

export default function PreciousBasedMetalsPage() {
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
          ISRU Division · Precious-Based Metals Refining
        </span>
        <h1 className="hero-title fade-up hero-immediate" style={{ transitionDelay: "0.08s", marginBottom: 24 }}>
          Single Metallic Asteroids —{" "}
          <em>Worth Entire Economies</em>
        </h1>
        <p className="hero-sub fade-up hero-immediate" style={{ transitionDelay: "0.16s", maxWidth: 700 }}>
          M-class asteroids carry nickel-iron cores at concentrations no terrestrial ore body can
          match, laced with platinum-group metals at economically extraordinary densities. Overby
          Industries refines this material in orbit, delivering structural metal and PGM stock
          without a single tonne of overburden ever touching Earth.
        </p>
        <div className="rule-divider fade-up hero-immediate" style={{ transitionDelay: "0.24s", marginTop: 40 }}>
          <div className="diamond" />
        </div>
      </div>

      {/* ── Processing Cycle ── */}
      <div style={{ maxWidth: 960, marginBottom: 96 }}>
        <div className="fade-up" style={{ marginBottom: 40 }}>
          <span className="eyebrow">Core Process · Separation &amp; Electrolytic Refining</span>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400, color: "var(--ink)", lineHeight: 1.2, marginBottom: 16 }}>
            No Overburden, {" "}
            <em style={{ fontStyle: "italic", color: "var(--blue)" }}>No Waste Rock</em>
          </h2>
          <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.9, maxWidth: 680, marginBottom: 16 }}>
            Terrestrial nickel mining moves tonnes of waste rock for every kilogram of usable
            metal. M-class asteroid material arrives at the refinery already close to pure
            metallic composition, so Overby's processing chain focuses on separation and
            electrochemical purity rather than large-scale ore beneficiation.
          </p>
          <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.9, maxWidth: 680 }}>
            Platinum-group metals are recovered using a chloride volatilisation process adapted
            for vacuum operation — no cyanide, no tailings pond, no liquid effluent of any kind.
          </p>
        </div>

        <div style={{ border: "1px solid var(--rule)", background: "var(--surface)" }}>
          <div style={{ padding: "16px 24px", borderBottom: "1px solid var(--rule)", fontFamily: "var(--sans)", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)" }}>
            Metal Refining Cycle
          </div>
          {[
            { step: "01 — Fragment", desc: "Raw metallic ore delivered from miner pods or debris reclamation is mechanically fragmented into a uniform feedstock size, sized for the electromagnetic separator intake." },
            { step: "02 — Magnetic Separation", desc: "Rotating drum electromagnets pull ferrous and nickel-iron fractions from any residual silicate contamination, producing a high-purity metallic feedstock stream." },
            { step: "03 — Electrolytic Refining", desc: "Molten salt electrolysis deposits pure nickel and iron at the cathode, leaving cobalt and PGM-bearing residues concentrated in the anode sludge for downstream recovery." },
            { step: "04 — Chloride Volatilisation", desc: "Anode sludge is treated with a closed-loop chlorine gas cycle that selectively volatilises platinum-group metal chlorides at controlled temperatures, separating PGMs from base-metal residue with no liquid reagent discharge." },
            { step: "05 — PGM Reduction", desc: "Volatilised PGM chlorides are captured and thermally reduced back to metallic platinum, palladium, iridium, and rhodium — sealed in armoured canisters at certified purity grades." },
            { step: "06 — Ingot Casting", desc: "Refined nickel-iron and cobalt are cast into standardised structural ingots for Starlifter II cargo loading. Chlorine reagent is fully recovered and recycled into the next processing batch." },
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
          <span className="eyebrow">Output Streams · Refined Metal Stock</span>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400, color: "var(--ink)", lineHeight: 1.2, marginBottom: 16 }}>
            From Bulk Structure to{" "}
            <em style={{ fontStyle: "italic", color: "var(--blue)" }}>Precision Alloy</em>
          </h2>
          <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.9, maxWidth: 680 }}>
            One refining line produces the full range of metallic products the Overby network
            depends on — from bulk structural ingots to certified-purity PGM canisters bound for
            the LEO Space Dock market.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {[
            { title: "Nickel-Iron Structural Stock", color: "var(--blue)", desc: "The primary structural metal for habitat framing, pressure vessel components, and heavy manufacturing tooling — cast in standardised ingot dimensions for direct fabrication use." },
            { title: "Cobalt for Battery & Alloy Systems", color: "var(--gold)", desc: "Recovered cobalt supplies high-density battery cathode production and high-strength superalloy manufacturing for propulsion and reentry-rated components." },
            { title: "Platinum-Group Metals", color: "var(--blue)", desc: "Platinum, palladium, iridium, and rhodium at certified purity grades — critical for catalysis, high-reliability electronics, and fuel cell systems, sealed in armoured canisters." },
            { title: "Debris-Reclaimed Metal", color: "var(--gold)", desc: "Ferrous and nickel-alloy fractions recovered from LEO debris reclamation feed directly into the same refining line, reducing dependence on primary asteroid extraction." },
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
            { num: "0", label: "Tonnes of overburden\nper tonne of metal" },
            { num: "0", label: "Litres of liquid\nreagent discharged" },
            { num: "4", label: "PGMs recovered\nper refining batch" },
            { num: "100%", label: "Chlorine reagent\nrecycled" },
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
        <a href="/isru/regolith" className="btn btn-ghost">← Regolith &amp; Silicate</a>
        <a href="/isru/hydrocarbons" className="btn btn-primary">Hydrocarbons →</a>
      </div>

    </section>
  );
}
