"use client";

import { useEffect } from "react";

export default function AsteroidMiningPage() {
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
          Heavy Industry · Asteroid Mining Division
        </span>
        <h1 className="hero-title fade-up hero-immediate" style={{ transitionDelay: "0.08s", marginBottom: 24 }}>
          Zero-Dust Mining —{" "}
          <em>The Containment<br />Bag System</em>
        </h1>
        <p className="hero-sub fade-up hero-immediate" style={{ transitionDelay: "0.16s", maxWidth: 700 }}>
          Overby Industries operates the only fully contained, zero-debris asteroid mining system
          in development. Every miner pod carries its own collapsible containment bag — a sealed
          industrial envelope that captures every fragment, every dust particle, and every volatile
          before any material can enter the surrounding space environment.
        </p>
        <div className="rule-divider fade-up hero-immediate" style={{ transitionDelay: "0.24s", marginTop: 40 }}>
          <div className="diamond" />
        </div>
      </div>

      {/* ── The Bag System ── */}
      <div style={{ maxWidth: 960, marginBottom: 96 }}>
        <div className="fade-up" style={{ marginBottom: 40 }}>
          <span className="eyebrow">Core Innovation · Containment Architecture</span>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400, color: "var(--ink)", lineHeight: 1.2, marginBottom: 16 }}>
            The Bag Stays With the Miner —{" "}
            <em style={{ fontStyle: "italic", color: "var(--blue)" }}>Always</em>
          </h2>
          <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.9, maxWidth: 680, marginBottom: 16 }}>
            The containment bag is not a separate piece of equipment — it is an integral structural
            component of every Overby miner pod. It deploys from the miner frame, seals around the
            excavation site, captures all material during drilling and processing, and then collapses
            and folds back into the miner body, ready for redeployment at the next site. The miner
            and the bag operate as a single unified system.
          </p>
          <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.9, maxWidth: 680 }}>
            Ore is crushed, sorted, and pre-refined inside the bag before transfer to the outpost
            processor, maintaining zero-contact with the ambient space environment throughout the
            entire extraction cycle. Inspired by NASA's ARM bagging concepts but operating as an
            active processing environment, not just a collection vessel.
          </p>
        </div>

        <div style={{ border: "1px solid var(--rule)", background: "var(--surface)" }}>
          <div style={{ padding: "16px 24px", borderBottom: "1px solid var(--rule)", fontFamily: "var(--sans)", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)" }}>
            Containment Bag Operating Cycle
          </div>
          {[
            { step: "01 — Anchor", desc: "Miner pod deploys anchor arms and harpoon clamps to the asteroid surface. Electrostatic adhesion pads supplement mechanical grip. Drill reaction forces are absorbed by the frame — the miner stays fixed while drilling proceeds." },
            { step: "02 — Deploy", desc: "The containment bag unfolds and expands from the miner's forward bay, sealing around the target excavation zone. The bag material — a multi-layer metallised polymer composite — is rated for micrometeorite resistance, thermal cycling, and the electrostatic charge environment of asteroid surfaces." },
            { step: "03 — Excavate", desc: "Mechanical rotary drills and abrasive saw heads cut into the asteroid surface. All generated dust, chips, fragments, and volatile gases are captured immediately within the sealed bag environment. Zero material escapes into surrounding space at any stage of excavation." },
            { step: "04 — Process", desc: "Inside the bag, primary sorting begins: electromagnetic separation isolates ferrous metallic material; density separation distinguishes silicate from metallic fractions; volatile capture membranes collect H₂, CO₂, CH₄, and water vapour. The bag functions as a mobile pre-processing plant." },
            { step: "05 — Transfer", desc: "Sorted ore fractions are compacted into sealed transfer canisters and passed through the miner's docking port to the outpost processor for full refining. Residual dust and slag are compacted into standard shielding blocks — no material is discarded." },
            { step: "06 — Collapse & Redeploy", desc: "Once the site is exhausted, the bag collapses and folds back into the miner frame automatically. The miner relocates to the next target site under its own ion thrusters. Full redeployment cycle from collapse to next excavation: under 90 minutes." },
          ].map(({ step, desc }, i) => (
            <div key={step} className="fade-up" style={{ display: "grid", gridTemplateColumns: "160px 1fr", padding: "20px 24px", borderBottom: i < 5 ? "1px solid var(--rule)" : "none", gap: 24, alignItems: "start", transitionDelay: `${i * 0.05}s` }}>
              <div style={{ fontFamily: "var(--sans)", fontSize: 9, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", lineHeight: 1.6 }}>{step}</div>
              <p style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--ink-soft)", lineHeight: 1.8, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rule-divider fade-up" style={{ marginBottom: 96 }}><div className="diamond" /></div>

      {/* ── Modular Platform ── */}
      <div style={{ maxWidth: 960, marginBottom: 96 }}>
        <div className="fade-up" style={{ marginBottom: 40 }}>
          <span className="eyebrow">Platform Architecture · Modularity</span>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400, color: "var(--ink)", lineHeight: 1.2, marginBottom: 16 }}>
            One Platform, <em style={{ fontStyle: "italic", color: "var(--blue)" }}>Multiple Missions</em>
          </h2>
          <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.9, maxWidth: 680 }}>
            The same base vehicle — power unit, propulsion stack, anchor system, and bag deployment
            mechanism — reconfigures in the field for asteroid mining, orbital debris reclamation,
            or outpost construction support. A single platform type serving multiple roles reduces
            fleet complexity, spare parts inventory, and training requirements across all operations.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", border: "1px solid var(--rule)" }}>
          {[
            { mode: "Config A", title: "Asteroid Miner", color: "var(--gold)", features: ["Rotary drill & saw head array", "Full containment bag system", "Ore sorting & pre-processing bay", "Transfer canister docking port", "Volatile capture membrane", "Site-to-site ion thruster mobility"] },
            { mode: "Config B", title: "Debris Reclaimer", color: "var(--blue)", features: ["Soft-capture net deployment", "Magnetic grapple arms for ferrous debris", "Compaction press — debris to shielding blocks", "Multi-size target compatibility", "LEO / MEO / GEO operational envelope", "Real-time debris tracking integration"] },
            { mode: "Config C", title: "Construction Support", color: "var(--gold)", features: ["Builder droid launch & recovery bay", "Material feedstock transfer port", "Outpost assembly coordination relay", "Structural element transport clamps", "Precision positioning thruster suite", "Maintainer droid recharge station"] },
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

      {/* ── Builder & Maintainer Droids ── */}
      <div style={{ maxWidth: 960, marginBottom: 96 }}>
        <div className="fade-up" style={{ marginBottom: 40 }}>
          <span className="eyebrow">Autonomous Systems · Droid Fleet</span>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400, color: "var(--ink)", lineHeight: 1.2, marginBottom: 16 }}>
            Builder & Maintainer Droids —{" "}
            <em style={{ fontStyle: "italic", color: "var(--blue)" }}>The Field Engineering Corps</em>
          </h2>
          <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.9, maxWidth: 680 }}>
            Every miner swarm deploys with a complement of specialised builder and maintainer droids.
            Each droid type is purpose-engineered for a specific role within the mining and outpost
            construction ecosystem, operating autonomously under swarm coordination protocols managed
            by the Starlifter II mothership or the local outpost processor node.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {[
            { type: "Builder Droid — Type B", role: "Outpost Assembly", color: "var(--blue)", desc: "Builder droids assemble outpost processor nodes from prefabricated structural modules, connect power and data conduits, install ore transfer manifolds, and expand outpost capacity as production rates increase. They work continuously in vacuum using magnetic anchoring feet and multi-axis manipulator arms rated for loads up to 800kg in microgravity.", specs: ["6-DOF manipulator arms × 2", "Magnetic anchoring locomotion", "Onboard mini MHD power cell", "Structural welding & fastening tools", "Autonomous assembly from blueprint data"] },
            { type: "Maintainer Droid — Type M", role: "Fleet Maintenance & Repair", color: "var(--gold)", desc: "Maintainer droids keep the miner fleet operational without Starlifter II returning for servicing. They inspect miner pods and outpost components on a continuous cycle, replace worn drill heads and bag segments, clear dust accumulation from sensors, patch micro-damage, and recharge ionic liquid reserves. A single maintainer droid can service up to six miner pods per 24-hour cycle.", specs: ["Diagnostic sensor suite (visual, thermal, ultrasonic)", "Tool magazine: drill heads, patch kits, conduit splicers", "Ionic liquid transfer nozzle for refuelling", "EVA-rated gripper array", "Autonomous fault detection & repair queuing"] },
          ].map(({ type, role, color, desc, specs }) => (
            <div key={type} className="cap-card fade-up" style={{ borderLeft: `3px solid ${color}` }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: 10, color, letterSpacing: "0.15em", marginBottom: 6 }}>{role}</div>
              <div className="cap-title">{type}</div>
              <p className="cap-desc" style={{ marginBottom: 16 }}>{desc}</p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {specs.map((s) => (
                  <li key={s} style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-soft)", display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 4, lineHeight: 1.7 }}>
                    <span style={{ display: "inline-block", width: 4, height: 4, background: color, transform: "rotate(45deg)", flexShrink: 0, marginTop: 7 }} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="rule-divider fade-up" style={{ marginBottom: 96 }}><div className="diamond" /></div>

      {/* ── Outpost Processors ── */}
      <div style={{ maxWidth: 960, marginBottom: 96 }}>
        <div className="fade-up" style={{ marginBottom: 40 }}>
          <span className="eyebrow">Field Infrastructure · Outpost Processors</span>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400, color: "var(--ink)", lineHeight: 1.2, marginBottom: 16 }}>
            Outpost Processors —{" "}
            <em style={{ fontStyle: "italic", color: "var(--blue)" }}>The Production Multiplier</em>
          </h2>
          <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.9, maxWidth: 680, marginBottom: 16 }}>
            Assembled on-site by builder droids using prefabricated modules, each outpost processor
            node accepts ore transfer canisters from multiple simultaneous miner pods, runs full
            refining operations continuously, and builds up a stockpile of finished product ready
            for Starlifter II cargo loading on arrival.
          </p>
          <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.9, maxWidth: 680 }}>
            Critically, outpost processors continue operating after Starlifter II departs. The miner
            swarm keeps excavating, the droids keep maintaining, the processor keeps refining — and
            when Starlifter returns, a full cargo hold of finished ingots, shielding blocks, and
            volatile canisters is waiting. The asteroid site runs as a continuous production
            facility, not a mission.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", border: "1px solid var(--rule)", background: "var(--surface)", marginBottom: 32 }}>
          {[
            { num: "6+", label: "Miner pods\nserviced per node" },
            { num: "24/7", label: "Continuous\noperation" },
            { num: "100%", label: "Waste\nrepurposed" },
            { num: "∞", label: "Runs after\nStarlifter departs" },
          ].map(({ num, label }, i) => (
            <div key={label} className="fade-up" style={{ padding: "24px 20px", borderRight: i < 3 ? "1px solid var(--rule)" : "none", textAlign: "center", transitionDelay: `${i * 0.06}s` }}>
              <span style={{ fontFamily: "var(--sans)", fontSize: 32, fontWeight: 800, color: "var(--blue)", display: "block", lineHeight: 1, marginBottom: 8 }}>{num}</span>
              <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-soft)", whiteSpace: "pre-line", lineHeight: 1.6 }}>{label}</div>
            </div>
          ))}
        </div>

        <div style={{ border: "1px solid var(--rule)", background: "var(--surface)" }}>
          <div style={{ padding: "16px 24px", borderBottom: "1px solid var(--rule)", fontFamily: "var(--sans)", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)" }}>
            Outpost Processor Output Streams
          </div>
          {[
            { stream: "Primary Metal Ingots", desc: "Nickel-iron alloy bars and cobalt ingots cast in standardised dimensions for Starlifter II cargo loading. PGMs electrolytically stripped and sealed in armoured canisters.", destination: "→ Starlifter II cargo hold → Earth delivery or orbital depot" },
            { stream: "Volatile Propellant Packages", desc: "H₂ and O₂ cracked from water ice; CH₄ from carbonaceous asteroid volatiles. Stored as cryogenic gas in pressure vessels. Replenishes Starlifter II propellant tanks on arrival.", destination: "→ Starlifter II refuelling + orbital depot stock" },
            { stream: "Silicate Construction Stock", desc: "UHPC aggregate, basalt fibre composite panels, and sintered regolith bricks produced from non-metallic asteroid fractions and mining waste silicates.", destination: "→ Outpost expansion modules + Starlifter II cargo" },
            { stream: "Shielding & Backfill Blocks", desc: "Dust, slag, and non-recoverable residue compacted into standardised shielding blocks used for outpost radiation protection, backfill of exhausted excavation sites, and traded as orbital construction material.", destination: "→ Outpost shielding + surplus to LEO Space Dock market" },
          ].map(({ stream, desc, destination }, i) => (
            <div key={stream} className="fade-up" style={{ padding: "20px 24px", borderBottom: i < 3 ? "1px solid var(--rule)" : "none", transitionDelay: `${i * 0.06}s` }}>
              <div style={{ fontFamily: "var(--sans)", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink)", marginBottom: 8 }}>{stream}</div>
              <p style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--ink-soft)", lineHeight: 1.8, marginBottom: 8 }}>{desc}</p>
              <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--gold)", letterSpacing: "0.08em" }}>{destination}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="rule-divider fade-up" style={{ marginBottom: 96 }}><div className="diamond" /></div>

      {/* ── LEO Space Dock Market ── */}
      <div style={{ maxWidth: 960, marginBottom: 56 }}>
        <div className="fade-up" style={{ marginBottom: 40 }}>
          <span className="eyebrow">LEO Infrastructure · Commercial Operations</span>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400, color: "var(--ink)", lineHeight: 1.2, marginBottom: 16 }}>
            Overby Space Dock —{" "}
            <em style={{ fontStyle: "italic", color: "var(--blue)" }}>Stellar Deals in LEO</em>
          </h2>
          <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.9, maxWidth: 680, marginBottom: 16 }}>
            The Overby LEO Space Dock is the commercial face of the entire resource network — a
            permanent low Earth orbit marketplace and logistics hub where asteroid-derived materials,
            propellant packages, shielding stock, and construction elements are available for
            immediate transfer to any customer with orbital access. No waiting for a deep-space
            delivery. No Earth launch cost for in-space material. Everything priced against the
            cost of launching from Earth — and significantly cheaper.
          </p>
          <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.9, maxWidth: 680 }}>
            The Space Dock also serves as the primary servicing facility for the Starlifter II
            fleet — propellant resupply, miner pod maintenance, cargo transfer, and crew rotation
            all occur here before and after deep-space missions. It is both a commercial marketplace
            and an operational base, making it the most strategically valuable fixed asset in the
            Overby network.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, border: "1px solid var(--rule)", marginBottom: 40 }}>
          {[
            { title: "Materials Market", color: "var(--gold)", items: ["Nickel-iron alloy ingots — spot and contract pricing", "PGM canister lots — certified purity grades", "UHPC aggregate and basalt fibre panel stock", "Shielding block standard dimensions", "Volatile propellant — H₂, O₂, CH₄ by volume"] },
            { title: "Propellant Depot Services", color: "var(--blue)", items: ["On-orbit refuelling for all compatible vehicles", "Propellant contract pricing vs. Earth-launch equivalent", "Cryogenic storage and transfer infrastructure", "Emergency propellant reserve allocation", "Transfer rate guarantees for time-critical missions"] },
            { title: "Fleet Services", color: "var(--blue)", items: ["Starlifter II turnaround — refuel, restock, redeploy", "Miner pod inspection and reconfiguration", "Droid recharge and software update bay", "Cargo containerisation and manifest processing", "Mission coordination and transit scheduling"] },
            { title: "Debris Reclamation Exchange", color: "var(--red)", items: ["Lane clearance contract listing and booking", "Defunct satellite asset valuation and buyout", "Fragmentation event rapid-response dispatch", "Material credit exchange — debris for resource credit", "Overby Zero-Debris Certification issuance"] },
          ].map(({ title, color, items }, i) => (
            <div key={title} className="cap-card fade-up" style={{ borderRight: i % 2 === 0 ? "1px solid var(--rule)" : "none", borderBottom: i < 2 ? "1px solid var(--rule)" : "none", borderLeft: `3px solid ${color}`, transitionDelay: `${i * 0.08}s` }}>
              <div style={{ fontFamily: "var(--sans)", fontSize: 9, letterSpacing: "0.2em", color, textTransform: "uppercase", marginBottom: 12 }}>{title}</div>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {items.map((item) => (
                  <li key={item} style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--ink-soft)", lineHeight: 1.7, display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 6 }}>
                    <span style={{ display: "inline-block", width: 4, height: 4, background: color, transform: "rotate(45deg)", flexShrink: 0, marginTop: 7 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="fade-up" style={{ border: "1px solid var(--rule)", background: "var(--surface)", padding: "36px 48px" }}>
          <p style={{ fontFamily: "var(--serif)", fontSize: "clamp(20px, 2.5vw, 30px)", fontStyle: "italic", color: "var(--ink)", lineHeight: 1.5, borderLeft: "3px solid var(--gold)", paddingLeft: 24, marginBottom: 16 }}>
            "You need something — we've got it. Already in orbit. No launch window required."
          </p>
          <p style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--ink-soft)", lineHeight: 1.8, maxWidth: 600 }}>
            The Overby Space Dock operates on the same principle as every other node in the Overby
            network: every resource gathered ethically, every product delivered sustainably, every
            transaction certified zero-waste. The market is open. The prices are stellar.
          </p>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="fade-up" style={{ paddingTop: 40, borderTop: "1px solid var(--rule)", maxWidth: 960, display: "flex", gap: 16, flexWrap: "wrap" }}>
        <a href="/heavy-industry" className="btn btn-ghost">← Back to Heavy Industry</a>
        <a href="/heavy-industry/space-debris-reclamation" className="btn btn-primary">Space Debris Reclamation →</a>
      </div>

    </section>
  );
}
