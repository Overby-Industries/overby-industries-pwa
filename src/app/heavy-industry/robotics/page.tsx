"use client";

import { useEffect } from "react";

export default function RoboticsPage() {
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
          Heavy Industry · Robotics Division
        </span>
        <h1 className="hero-title fade-up hero-immediate" style={{ transitionDelay: "0.08s", marginBottom: 24 }}>
          The Field Engineering Corps{" "}
          <em>Never Sleeps</em>
        </h1>
        <p className="hero-sub fade-up hero-immediate" style={{ transitionDelay: "0.16s", maxWidth: 700 }}>
          Every mining site, outpost, and reclamation platform Overby operates depends on a
          standing fleet of autonomous builder and maintainer droids working continuously between
          crewed visits — assembling infrastructure, repairing hardware, and keeping production
          running at sites months or years from the nearest human hand.
        </p>
        <div className="rule-divider fade-up hero-immediate" style={{ transitionDelay: "0.24s", marginTop: 40 }}>
          <div className="diamond" />
        </div>
      </div>

      {/* ── Droid Fleet ── */}
      <div style={{ maxWidth: 960, marginBottom: 96 }}>
        <div className="fade-up" style={{ marginBottom: 40 }}>
          <span className="eyebrow">Fleet Architecture · Purpose-Built Roles</span>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400, color: "var(--ink)", lineHeight: 1.2, marginBottom: 16 }}>
            Specialists,{" "}
            <em style={{ fontStyle: "italic", color: "var(--blue)" }}>Not Generalists</em>
          </h2>
          <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.9, maxWidth: 680 }}>
            Every droid type is purpose-engineered for a specific role rather than built as a
            do-everything humanoid platform. Specialisation keeps each unit simpler, cheaper to
            fabricate from ISRU stock, and easier to diagnose and repair in the field.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {[
            { type: "Builder Droid — Type B", role: "Outpost Assembly", color: "var(--blue)", desc: "Assembles outpost processor nodes from prefabricated structural modules, connects power and data conduits, installs ore transfer manifolds, and expands outpost capacity as production rates increase.", specs: ["6-DOF manipulator arms × 2", "Magnetic anchoring locomotion", "Onboard mini MHD power cell", "Structural welding & fastening tools"] },
            { type: "Maintainer Droid — Type M", role: "Fleet Maintenance & Repair", color: "var(--gold)", desc: "Keeps the miner and reclamation fleet operational without a return trip for servicing — replacing worn parts, clearing dust from sensors, patching micro-damage, and recharging propellant reserves.", specs: ["Diagnostic sensor suite (visual, thermal, ultrasonic)", "Tool magazine — drill heads, patch kits, splicers", "Ionic liquid transfer nozzle for refuelling", "Autonomous fault detection & repair queuing"] },
            { type: "Sentinel Droid — Type S", role: "Site Security & Monitoring", color: "var(--blue)", desc: "Patrols active mining and outpost sites for structural anomalies, micrometeorite damage, and unauthorised proximity events, feeding continuous telemetry back to the outpost processor node.", specs: ["360° optical & thermal surveillance", "Long-endurance ion micro-thrusters", "Direct outpost telemetry uplink", "Autonomous anomaly flagging"] },
            { type: "Courier Droid — Type C", role: "Intra-Site Logistics", color: "var(--gold)", desc: "Shuttles ore canisters, spare parts, and finished components between miner pods, outpost processors, and Starlifter II docking points, keeping material flowing without dedicated human-piloted transport.", specs: ["High-capacity cargo bay", "Automated docking & manifest scanning", "Swarm-coordinated routing", "Redundant micro-propulsion"] },
          ].map(({ type, role, color, desc, specs }, i) => (
            <div key={type} className="cap-card fade-up" style={{ borderLeft: `3px solid ${color}`, transitionDelay: `${i * 0.08}s` }}>
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

      {/* ── Swarm Coordination ── */}
      <div style={{ maxWidth: 960, marginBottom: 96 }}>
        <div className="fade-up" style={{ marginBottom: 40 }}>
          <span className="eyebrow">Autonomy Stack · Swarm Coordination</span>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400, color: "var(--ink)", lineHeight: 1.2, marginBottom: 16 }}>
            No Human in the Loop,{" "}
            <em style={{ fontStyle: "italic", color: "var(--blue)" }}>By Design</em>
          </h2>
          <p style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.9, maxWidth: 680 }}>
            Round-trip communication delay makes real-time teleoperation impossible beyond
            cislunar space, so every droid in the fleet runs an autonomy stack capable of
            planning, executing, and recovering from faults entirely on its own — coordinated
            locally rather than depending on a constant ground link.
          </p>
        </div>

        <div style={{ border: "1px solid var(--rule)", background: "var(--surface)" }}>
          <div style={{ padding: "16px 24px", borderBottom: "1px solid var(--rule)", fontFamily: "var(--sans)", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)" }}>
            Coordination Hierarchy
          </div>
          {[
            { step: "Mothership / Outpost Node", desc: "The Starlifter II mothership or local outpost processor node holds the master task queue for the site, assigning work to individual droids based on priority, droid availability, and proximity." },
            { step: "Local Swarm Coordination", desc: "Droids within a site negotiate task handoffs directly with each other over short-range mesh links — a maintainer droid can flag a fault to the nearest courier droid without routing through the mothership at all." },
            { step: "Individual Fault Recovery", desc: "Each droid carries enough onboard planning capability to safe itself and hold position if it loses contact with the swarm entirely, resuming normal operation automatically once communication is restored." },
          ].map(({ step, desc }, i) => (
            <div key={step} className="fade-up" style={{ display: "grid", gridTemplateColumns: "220px 1fr", padding: "20px 24px", borderBottom: i < 2 ? "1px solid var(--rule)" : "none", gap: 24, alignItems: "start", transitionDelay: `${i * 0.05}s` }}>
              <div style={{ fontFamily: "var(--sans)", fontSize: 9, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", lineHeight: 1.6 }}>{step}</div>
              <p style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--ink-soft)", lineHeight: 1.8, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rule-divider fade-up" style={{ marginBottom: 96 }}><div className="diamond" /></div>

      {/* ── Stats ── */}
      <div style={{ maxWidth: 960, marginBottom: 56 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", border: "1px solid var(--rule)", background: "var(--surface)" }}>
          {[
            { num: "4", label: "Purpose-built\ndroid types" },
            { num: "6", label: "Miner pods serviced\nper maintainer droid" },
            { num: "0", label: "Real-time teleoperation —\nfully autonomous" },
            { num: "24/7", label: "Continuous fleet\noperation" },
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
        <a href="/heavy-industry/advanced-manufacturing" className="btn btn-ghost">← Advanced Manufacturing</a>
        <a href="/heavy-industry" className="btn btn-primary">Back to Heavy Industry →</a>
      </div>

    </section>
  );
}
