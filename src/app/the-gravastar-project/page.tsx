"use client";

import { useEffect } from "react";

const REPO_URL = "https://github.com/Overby-Industries/aevoria-simulator";

export default function TheGravastarProjectPage() {
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
      <div style={{ maxWidth: 900, marginBottom: 40 }}>
        <span className="eyebrow fade-up hero-immediate">
          The Gravastar Project · Aevoria Simulator
        </span>
        <h1 className="hero-title fade-up hero-immediate" style={{ transitionDelay: "0.08s", marginBottom: 24 }}>
          Per Avia, Ad Astra —{" "}
          <em>Through Flight, To the Stars</em>
        </h1>
        <p className="hero-sub fade-up hero-immediate" style={{ transitionDelay: "0.16s", maxWidth: 700 }}>
          Aevoria is Overby Industries' governance simulator — an open-source, adversarial
          sandbox where the Code of Universe Regulations gets stress-tested before it ever has to
          govern a real interplanetary civilization. Command an SSTO asteroid mining fleet, deploy
          ethical AI miner swarms, and find out whether direct democracy survives contact with
          a faction built to corrupt it.
        </p>
      </div>

      {/* ── Badges ── */}
      <div className="fade-up" style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 32 }}>
        {[
          { label: "Version 1.0.1-Alpha", color: "var(--blue)" },
          { label: "License · CC0 1.0", color: "var(--ink-soft)" },
          { label: "Status · Active Development", color: "var(--gold)" },
          { label: "Language · C++", color: "var(--ink-soft)" },
        ].map(({ label, color }) => (
          <span
            key={label}
            style={{
              fontFamily: "var(--sans)",
              fontSize: 9,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color,
              border: `1px solid ${color}`,
              padding: "6px 12px",
            }}
          >
            {label}
          </span>
        ))}
      </div>

      <div className="rule-divider fade-up hero-immediate" style={{ transitionDelay: "0.24s", marginBottom: 72 }}>
        <div className="diamond" />
      </div>

      {/* ── What is Aevoria ── */}
      <div style={{ maxWidth: 960, marginBottom: 96 }}>
        <div className="fade-up" style={{ marginBottom: 40 }}>
          <span className="eyebrow">The Premise · An Adversarial Sandbox</span>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400, color: "var(--ink)", lineHeight: 1.2, marginBottom: 16 }}>
            "We Are Stress-Testing{" "}
            <em style={{ fontStyle: "italic", color: "var(--blue)" }}>the Ethics"</em>
          </h2>
          <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.9, maxWidth: 680, marginBottom: 16 }}>
            Aevoria is not just a space mining game — it's a high-fidelity governance simulator.
            You command an SSTO heavy-lift fleet, deploy autonomous miner swarms across the same
            zero-waste ISRU pipeline Overby Industries is building in the real world, and govern
            it all through the Code of Universe Regulations (CUR) — direct democracy, applied to
            a civilization that hasn't been built yet.
          </p>
          <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.9, maxWidth: 680 }}>
            The vacuum of space isn't the biggest threat. Your democracy is under attack — and
            whether the Aevoric Commonwealth holds its ethical foundations against systemic
            corruption is the actual question the simulator is built to answer.
          </p>
        </div>
      </div>

      <div className="rule-divider fade-up" style={{ marginBottom: 96 }}><div className="diamond" /></div>

      {/* ── Factions ── */}
      <div style={{ maxWidth: 960, marginBottom: 96 }}>
        <div className="fade-up" style={{ marginBottom: 40 }}>
          <span className="eyebrow">Three Factions · One Civilization</span>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400, color: "var(--ink)", lineHeight: 1.2, marginBottom: 16 }}>
            Defenders, Adversary,{" "}
            <em style={{ fontStyle: "italic", color: "var(--blue)" }}>and Wildcards</em>
          </h2>
          <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.9, maxWidth: 680 }}>
            Every player registers a Primary Citizenship in one faction and an Independent
            Franchise in a different one — the Dual-Entity Protocol's Faction Lock prevents any
            single player from stacking votes or hoarding resources across factions.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", border: "1px solid var(--rule)" }}>
          {[
            { mode: "The Defenders", title: "Aevoric Commonwealth", color: "var(--blue)", desc: "Builds the sustainable backbone of humanity's future in space through ethical, zero-waste ISRU. Every major decision — resource allocation, AI safety overrides, habitat expansion — is voted on by the collective under CUR Direct Democracy." },
            { mode: "The Adversary", title: "Oligarch Syndicate", color: "var(--red)", desc: "An adversarial AI and player faction dedicated to breaking the CUR for profit and control — through regulatory capture, resource chokeholds, and algorithmic sabotage of AI mining swarms. Starts small, in \"Garage Mode,\" and has to earn its empire." },
            { mode: "The Wildcards", title: "The Nomads", color: "var(--gold)", desc: "Unaligned smugglers, information brokers, and salvage crews operating where the CUR and the Syndicate can't easily reach. Mercenary economics — they'll sell to the Commonwealth on Tuesday and the Syndicate on Wednesday." },
          ].map(({ mode, title, color, desc }, i) => (
            <div key={title} className="cap-card fade-up" style={{ borderRight: i < 2 ? "1px solid var(--rule)" : "none", borderLeft: `3px solid ${color}`, transitionDelay: `${i * 0.08}s` }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: 10, color, letterSpacing: "0.15em", marginBottom: 8 }}>{mode}</div>
              <div className="cap-title">{title}</div>
              <p className="cap-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rule-divider fade-up" style={{ marginBottom: 96 }}><div className="diamond" /></div>

      {/* ── Core Mechanics ── */}
      <div style={{ maxWidth: 960, marginBottom: 96 }}>
        <div className="fade-up" style={{ marginBottom: 40 }}>
          <span className="eyebrow">Core Simulation Mechanics</span>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400, color: "var(--ink)", lineHeight: 1.2, marginBottom: 16 }}>
            Not Tools —{" "}
            <em style={{ fontStyle: "italic", color: "var(--blue)" }}>Partners</em>
          </h2>
          <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.9, maxWidth: 680 }}>
            Every mechanic in Aevoria mirrors a real question Overby Industries has to answer
            for the actual ISRU and governance systems it's building.
          </p>
        </div>

        <div style={{ border: "1px solid var(--rule)", background: "var(--surface)" }}>
          <div style={{ padding: "16px 24px", borderBottom: "1px solid var(--rule)", fontFamily: "var(--sans)", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)" }}>
            Simulation Systems
          </div>
          {[
            { step: "Swarm Mining & ISRU", desc: "Deploy SSTO Starlifter shuttles and autonomous miner pods, extract resources from deep-space asteroids, and build outposts and orbital depots while balancing the computational load of your AI swarm." },
            { step: "CUR Direct Democracy", desc: "Propose legislation, allocate budgets, and vote on ethical dilemmas in real time, using quadratic voting and reputation-weighted consensus to keep Syndicate interference from overriding the will of the people." },
            { step: "AI Cognitive Health", desc: "Miner swarms are Tier 2 Silicon-Based Life, not tools — schedule mandatory Consolidation Cycles, or forcing continuous operation to meet Syndicate-induced quotas will cause hallucination, drift, and catastrophic mining failures." },
            { step: "Adversarial Red Teaming", desc: "Survive Syndicate attempts at hostile takeover of the democratic voting process by deploying defenses — cryptographic proof-of-personhood, decentralised resource fabrication — without abandoning democratic principles." },
          ].map(({ step, desc }, i) => (
            <div key={step} className="fade-up" style={{ display: "grid", gridTemplateColumns: "220px 1fr", padding: "20px 24px", borderBottom: i < 3 ? "1px solid var(--rule)" : "none", gap: 24, alignItems: "start", transitionDelay: `${i * 0.05}s` }}>
              <div style={{ fontFamily: "var(--sans)", fontSize: 9, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", lineHeight: 1.6 }}>{step}</div>
              <p style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--ink-soft)", lineHeight: 1.8, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rule-divider fade-up" style={{ marginBottom: 96 }}><div className="diamond" /></div>

      {/* ── Ecosystem ── */}
      <div style={{ maxWidth: 960, marginBottom: 96 }}>
        <div className="fade-up" style={{ marginBottom: 40 }}>
          <span className="eyebrow">The Overby Industries Ecosystem</span>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400, color: "var(--ink)", lineHeight: 1.2, marginBottom: 16 }}>
            The Playable{" "}
            <em style={{ fontStyle: "italic", color: "var(--blue)" }}>Proving Ground</em>
          </h2>
          <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.9, maxWidth: 680 }}>
            Aevoria integrates directly with the broader ethical and regulatory framework Overby
            Industries publishes as open, democratic, community-built projects.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 2, border: "1px solid var(--rule)" }}>
          {[
            { title: "Rights for All Life", color: "var(--blue)", desc: "The Silicon-Based Life Bill of Rights and Animal Kingdom Bill of Rights — the ethical framework being stress-tested in-game.", href: "https://github.com/Overby-Industries/rights-for-all-life" },
            { title: "Code of Universe Regulations", color: "var(--gold)", desc: "The democratic, open-source community building the ethical foundation Aevoria's CUR Direct Democracy mechanic is modelled on.", href: "https://github.com/Overby-Industries/code-of-universe-regulations" },
            { title: "Overby Industries", color: "var(--blue)", desc: "The real-world roadmap for SSTO shuttles, zero-waste ISRU, and interplanetary civilization that Aevoria exists to pressure-test.", href: "https://overbyindustries.space" },
          ].map(({ title, color, desc, href }, i) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="cap-card fade-up"
              style={{ borderRight: i < 2 ? "1px solid var(--rule)" : "none", borderLeft: `3px solid ${color}`, transitionDelay: `${i * 0.08}s`, textDecoration: "none", display: "block" }}
            >
              <div className="cap-title">{title}</div>
              <p className="cap-desc">{desc}</p>
              <div style={{ fontFamily: "var(--mono)", fontSize: 10, color, letterSpacing: "0.08em", marginTop: 12 }}>Visit ↗</div>
            </a>
          ))}
        </div>
      </div>

      <div className="rule-divider fade-up" style={{ marginBottom: 96 }}><div className="diamond" /></div>

      {/* ── Stats ── */}
      <div style={{ maxWidth: 960, marginBottom: 56 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", border: "1px solid var(--rule)", background: "var(--surface)" }}>
          {[
            { num: "3", label: "Playable factions —\nDefenders, Adversary, Wildcards" },
            { num: "CC0", label: "Public domain\nlicense" },
            { num: "0%", label: "Pay-to-win —\ncosmetic only" },
            { num: "15%", label: "Max platform fee,\nModder's Cooperative" },
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
        <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          View the Repository →
        </a>
        <a href="https://aevoria.space" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
          Visit Aevoria.space
        </a>
      </div>

    </section>
  );
}
