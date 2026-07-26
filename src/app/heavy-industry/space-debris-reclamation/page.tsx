"use client";

import { useEffect } from "react";

export default function SpaceDebrisReclamationPage() {
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
          Heavy Industry · Space Debris Reclamation Division
        </span>
        <h1 className="hero-title fade-up hero-immediate" style={{ transitionDelay: "0.08s", marginBottom: 24 }}>
          The Problem Is{" "}
          <em>The Product</em>
        </h1>
        <p className="hero-sub fade-up hero-immediate" style={{ transitionDelay: "0.16s", maxWidth: 700 }}>
          Over 27,000 tracked objects and an estimated 500,000 untracked fragments large enough
          to mission-kill a satellite are already in Earth orbit — already at velocity, already
          positioned. Overby Industries reframes the orbital debris crisis as the largest
          pre-positioned raw material stockpile in near-Earth space.
        </p>
        <div className="rule-divider fade-up hero-immediate" style={{ transitionDelay: "0.24s", marginTop: 40 }}>
          <div className="diamond" />
        </div>
      </div>

      {/* ── Capture Cycle ── */}
      <div style={{ maxWidth: 960, marginBottom: 96 }}>
        <div className="fade-up" style={{ marginBottom: 40 }}>
          <span className="eyebrow">Core Process · Capture &amp; Compaction</span>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400, color: "var(--ink)", lineHeight: 1.2, marginBottom: 16 }}>
            Every Fragment,{" "}
            <em style={{ fontStyle: "italic", color: "var(--blue)" }}>Every Size</em>
          </h2>
          <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.9, maxWidth: 680, marginBottom: 16 }}>
            Debris in Earth orbit ranges from intact defunct satellites down to paint-fleck
            fragments travelling at orbital velocity — a size range no single capture method can
            handle. Overby reclamation pods carry a layered toolkit and select the right method
            for each target rather than forcing every object through the same process.
          </p>
          <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.9, maxWidth: 680 }}>
            Every reclamation operation runs under the Space Zero-Waste Standard — material
            captured stays captured, and nothing recovered is ever released back into orbit.
          </p>
        </div>

        <div style={{ border: "1px solid var(--rule)", background: "var(--surface)" }}>
          <div style={{ padding: "16px 24px", borderBottom: "1px solid var(--rule)", fontFamily: "var(--sans)", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)" }}>
            Reclamation Operating Cycle
          </div>
          {[
            { step: "01 — Track & Approach", desc: "Reclamation pods receive target vectors from ground-based and onboard debris tracking networks, executing rendezvous burns to match velocity with the target object before any capture attempt begins." },
            { step: "02 — Assess", desc: "Onboard sensors classify the target — intact satellite, fragmentation cloud, or loose debris field — and select the appropriate capture method: soft-capture net, magnetic grapple, or wide-area collection sweep." },
            { step: "03 — Capture", desc: "Soft-capture nets envelop intact defunct satellites without generating secondary fragmentation. Magnetic grapple arms pull ferrous debris directly. Fine fragmentation clouds are swept using expandable containment architecture derived from the same bagging concepts used in asteroid mining." },
            { step: "04 — Stabilise & Sort", desc: "Captured material is stabilised against tumbling and preliminarily sorted — metallic, composite, and electronic fractions separated onboard before compaction, maximising the value of the downstream material stream." },
            { step: "05 — Compact", desc: "A compaction press reduces captured debris to standardised shielding-block dimensions or transfer-canister form, eliminating the collision risk of an intact captured object drifting loose again." },
            { step: "06 — Transfer", desc: "Compacted material transfers to the cislunar depot or directly into the ISRU feedstock pipeline, closing the loop between orbital cleanup and productive material use." },
          ].map(({ step, desc }, i) => (
            <div key={step} className="fade-up" style={{ display: "grid", gridTemplateColumns: "180px 1fr", padding: "20px 24px", borderBottom: i < 5 ? "1px solid var(--rule)" : "none", gap: 24, alignItems: "start", transitionDelay: `${i * 0.05}s` }}>
              <div style={{ fontFamily: "var(--sans)", fontSize: 9, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", lineHeight: 1.6 }}>{step}</div>
              <p style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--ink-soft)", lineHeight: 1.8, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rule-divider fade-up" style={{ marginBottom: 96 }}><div className="diamond" /></div>

      {/* ── Service Tiers ── */}
      <div style={{ maxWidth: 960, marginBottom: 96 }}>
        <div className="fade-up" style={{ marginBottom: 40 }}>
          <span className="eyebrow">Commercial Model · Reclamation Service Tiers</span>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400, color: "var(--ink)", lineHeight: 1.2, marginBottom: 16 }}>
            Four Tiers,{" "}
            <em style={{ fontStyle: "italic", color: "var(--blue)" }}>One Standard</em>
          </h2>
          <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.9, maxWidth: 680 }}>
            Reclamation revenue comes from direct service contracts as well as the downstream
            material stream — the same pod fleet serves satellite operators, launch providers,
            and the ISRU pipeline simultaneously.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {[
            { title: "Lane Clearance Contract", color: "var(--blue)", desc: "Dedicated orbital lane clearance for satellite operators and launch providers. Overby pods sweep defined inclination bands and altitude shells on contract, delivering clear operational corridors and collision risk reports." },
            { title: "Defunct Satellite Recovery", color: "var(--gold)", desc: "Full recovery and processing of customer-specified defunct satellite assets. The customer receives material credit against future Overby resource purchases and is relieved of deorbit liability entirely." },
            { title: "Fragmentation Emergency Response", color: "var(--blue)", desc: "Rapid-response reclamation deployment following on-orbit fragmentation events, containing and collecting expanding debris clouds before they cascade into additional collisions — preventing Kessler Syndrome progression." },
            { title: "Continuous Ambient Reclamation", color: "var(--gold)", desc: "Standing autonomous operations across high-traffic LEO shells. Recovered material enters the ISRU feedstock pipeline directly, generating revenue through downstream material sales rather than direct contracts." },
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
            { num: "27,000+", label: "Tracked debris\nobjects in orbit" },
            { num: "500,000+", label: "Untracked fragments\n>1cm, mission-kill capable" },
            { num: "100%", label: "Material recovery\ntarget per mission" },
            { num: "3", label: "Capture methods —\nnet, grapple, sweep" },
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
        <a href="/heavy-industry/asteroid-mining" className="btn btn-ghost">← Asteroid Mining</a>
        <a href="/heavy-industry/advanced-manufacturing" className="btn btn-primary">Advanced Manufacturing →</a>
      </div>

    </section>
  );
}
