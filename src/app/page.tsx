"use client";

import { useEffect } from "react";
import { roadmap } from "@/app/content/roadmap";
import CustomDonateForm from "@/app/components/CustomDonateForm";
import SignupForm from "@/app/landing-page/SignupForm";

export default function Home() {
  // Intersection Observer for fade-up animations
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
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    // Hero items fire immediately
    document
      .querySelectorAll<HTMLElement>("#hero .fade-up")
      .forEach((el, i) => {
        setTimeout(() => el.classList.add("visible"), 120 + i * 90);
      });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── Hero ── */}
      <section id="hero" className="graph-bg">
        <div className="hero-badge fade-up">
          <span className="diamond" />
          <span className="eyebrow eyebrow--no-margin">
            Ethical · Sustainable · Zero-Waste Space Economy
          </span>
          <span className="diamond" />
        </div>

        <h1 className="hero-title fade-uphero-title--delay">
          Building a{" "}
          <em>
            Sustainable,
            <br />
            Ethical Industrial
          </em>
          <br />
          Future in Space
        </h1>

        <p className="hero-sub fade-up" style={{ transitionDelay: "0.16s" }}>
          From metals and concrete on asteroids to hydrocarbons on Titan —
          Overby Industries provides everything humanity needs to build an
          interplanetary civilization without harming Earth or the solar system
          itself.
        </p>

        <div className="btn-group fade-up" style={{ transitionDelay: "0.24s" }}>
          <a href="#join" className="btn btn-primary">
            Join the Mission
          </a>
          <a href="#roadmap" className="btn btn-ghost">
            View Roadmap
          </a>
        </div>

        <div className="hero-rule fade-up" style={{ transitionDelay: "0.32s" }}>
          <div className="rule-divider">
            <span className="diamond" />
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section id="mission">
        <div className="mission-inner">
          <div className="fade-up">
            <span className="eyebrow">Mission Statement</span>
            <p className="mission-pull">
              Committed to gathering and refining space resources ethically,
              sustainably, and with zero waste.
            </p>
          </div>
          <div className="fade-up" style={{ transitionDelay: "0.12s" }}>
            <div className="mission-body">
              <p>
                From metals and concrete on asteroids, to hydrocarbons on Titan,
                our mission is to provide everything humanity needs to build an
                interplanetary civilization without harming Earth or the solar
                system itself.
              </p>
              <p>
                We operate under a philosophy of long-term stewardship —
                treating space not as a resource to be extracted, but as an
                ecosystem to be cultivated for generations to come.
              </p>
            </div>
            <ul className="values-list">
              {[
                "Ethical, Zero-Waste Operations",
                "Orbital Space Debris Reclamation Services",
                "Sustainable Space Industry Development",
                "Cutting-Edge Aerospace Engineering",
                "Focus on Long-Term Space Civilizations and Direct Democracy",
              ].map((v) => (
                <li key={v}>
                  <span className="diamond" />
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <div className="stats-bar">
        <div className="stats-inner">
          {[
            { num: "8", label: "Roadmap\nPhases" },
            { num: "0", label: "Waste\nTolerance" },
            { num: "∞", label: "Solar System\nResources" },
            { num: "2026", label: "Founded &\nOperational" },
          ].map(({ num, label }, i) => (
            <div
              className="fade-up"
              key={num}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <span className="stat-num">{num}</span>
              <div className="stat-label" style={{ whiteSpace: "pre-line" }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Capabilities ── */}
      <section id="capabilities">
        <div className="section-header fade-up">
          <span className="eyebrow">Engineering Capabilities</span>
          <h2 className="section-title">
            Full-Spectrum <em>Industrial</em>
            <br />
            Space Operations
          </h2>
          <p className="section-lead">
            Our technical stack spans the complete resource extraction and
            utilization pipeline — from launch vehicle to finished product in
            orbit. Hand-crafted aerospace systems engineering rooted in traditional paper-and-pencil drafting, layered systems visualization, and iterative engineering design.
          </p>
        </div>

        <div className="caps-grid">
          {[
            {
              num: "Cap. 01 — ISRU",
              title: "Full-Spectrum ISRU",
              desc: "Metals, stone, plastics, fuels — complete in-situ resource utilization across asteroid and planetary body types. Overby Industries deploys fully integrated In-Situ Resource Utilization pipelines spanning metallic, silicate, volatile, and hydrocarbon extraction across asteroid, lunar, and planetary body environments. Autonomous miner/refinery pod systems perform zero-dust excavation using expandable containment architectures derived from NASA ARM concepts, with all residual slag, dust, and rock repurposed into aggregate shielding, basalt fiber composites, and UHPC construction feedstock. Volatile capture systems recover H₂, O₂, and CH₄ for onsite propellant production, closing the fuel loop for extended deep-space operations without resupply dependency. Every ISRU cycle operates under Zero-Pollution, Zero-Waste Certification — nothing enters the surrounding environment.",
            },
            {
              num: "Cap. 02 — Transport",
              title: "Reusable Shuttle Fleet",
              desc: "Starlifter II vehicles with runway landings — fully reusable Air Breathing Electric Propulsion (ABEP), dramatically reducing per-mission cost and orbital debris. The Starlifter II is a fully reusable runway-landing spacecraft engineered for high-frequency, low-cost access across cislunar and near-Earth operational zones. Hybrid propulsion architectures allow the vehicle to transition seamlessly between atmospheric Air-Breathing Electric Propulsion (ABEP) cruise modes and deep-space ion thrust configurations, eliminating the mass penalty of traditional onboard atmospheric propellant reserves. Ionic liquid thermal management systems actively regulate reentry heat loads, supplementing a conventional ablative shielding with a renewable, multifunctional working fluid. Runway recovery eliminates ocean retrieval logistics entirely, enabling rapid turnaround cycles and dramatically reducing per-mission operational cost and orbital debris generation.",
            },
            {
              num: "Cap. 03 — Propulsion",
              title: "Advanced Propulsion",
              desc: "Hybrid propulsion architectures integrating MHD-Lorentz rail acceleration systems with dual-mode ABEP ion propulsion enables sustained atmospheric and deep-space operations beyond conventional propellant limitations. In atmospheric cruise regimes, inline ABEP (Air-Breathing Electric Propulsion) systems utilize surrounding atmospheric mass as reaction media, theoretically enabling extended or near-unlimited operational range within defined altitude and velocity envelopes without reliance on traditional onboard cruise propellant reserves. Multifunctional ionic liquids stored within auxiliary system tanks serve as primary working media for MHD-Lorentz acceleration systems while simultaneously supporting advanced onboard energy storage electrolytes, thermal management architectures, and adaptive reentry shielding strategies. Integrated solar wind capture concepts further extend deep-space operational endurance by supplementing particle collection for long-duration electric propulsion missions and distributed industrial space operations.",
            },
            {
              num: "Cap. 04 — Platforms",
              title: "Modular Industrial Platforms",
              desc: "Scalable, modular platforms designed for rapid deployment and expansion — adaptable to any operational environment. Overby Industries deploys modular, scalable industrial platform architectures designed for rapid on-orbit assembly and progressive capacity expansion without requiring crewed construction operations. Platform nodes are standardized around common docking interfaces, power distribution rails, and ISRU fluid transfer manifolds, allowing incremental capability stacking as mission requirements evolve. Structural elements are sourced directly from asteroid-derived UHPC and basalt fiber composites wherever operationally feasible, reducing Earth-launched mass fractions and demonstrating closed-loop construction viability at scale. Platform configurations support simultaneous refinery operations, propellant depot services, crew habitation modules, and communications relay functions — serving as the foundational infrastructure layer for permanent cislunar and deep-space industrial presence.",
            },
            {
              num: "Cap. 05 — Open Source",
              title: "Open-Source Technology",
              desc: "Commitment to open collaboration and knowledge-sharing accelerates industry-wide development of sustainable space systems. Overby Industries operates under a foundational commitment to open-source technology development, publishing engineering documentation, avionics architectures, ISRU process designs, and propulsion research through accessible public repositories and peer collaboration frameworks. This approach accelerates industry-wide capability development by eliminating redundant parallel research efforts across the emerging space resource sector, while establishing Overby Industries as the trusted technical authority defining sustainable space industry standards. Open certification frameworks for Zero-Waste mining operations are developed collaboratively with academic institutions, space agencies, and independent engineers — ensuring the Overby Certification standard reflects genuine scientific consensus rather than proprietary gate-keeping. Transparency in operations and technology is treated not as a liability but as the foundation of long-term institutional trust.",
            },
            {
              num: "Cap. 06 — Debris",
              title: "Orbital Debris Reclamation",
              desc: "Proprietary reclamation services convert existing orbital debris into raw material feedstock — turning a liability into an asset. Overby Industries operates dedicated orbital debris reclamation services that reframe existing defunct satellite infrastructure, expended launch vehicle stages, and fragmentation clouds as recoverable raw material feedstock rather than navigational hazards. Reclamation pod systems deploy expandable capture architectures capable of collecting and compacting debris objects across a wide mass and geometry range, with onboard preliminary sorting separating metallic, composite, and electronic material streams for downstream refinery processing. Recovered metals are reintroduced into the ISRU production pipeline, directly reducing demand on primary asteroid extraction operations and improving overall resource economy efficiency. Active debris reclamation also generates standalone service revenue through orbital lane clearance contracts with satellite operators, space agencies, and commercial launch providers — turning the growing low-Earth orbit debris crisis into a self-funding industrial feedstock acquisition program.",
            },
          ].map(({ num, title, desc }, i) => (
            <div
              className="cap-card fade-up"
              key={title}
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <div className="cap-num">{num}</div>
              <div className="cap-title">{title}</div>
              <p className="cap-desc">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Roadmap ── */}
      <section id="roadmap" className="graph-bg">
        <div className="section-header fade-up">
          <span className="eyebrow">Development Roadmap</span>
          <h2 className="section-title">
            Eight Phases to a <em>Solar</em>
            <br />
            <em>Civilization</em>
          </h2>
          <p className="section-lead">
            Each phase builds upon the last — from prototype systems to a
            closed-loop resource economy spanning the entire solar system.
          </p>
        </div>

        <div className="roadmap-list">
          {roadmap.map(({ phase, name, desc, year }, i) => (
            <div
              className="roadmap-item fade-up"
              key={phase}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="roadmap-dot" />
              <div className="roadmap-phase">{phase}</div>
              <div className="roadmap-name">{name}</div>
              <p className="roadmap-desc">{desc}</p>
              <span className="funding-badge">{year}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Join the Mission ── */}
      <section id="join" className="join-section">
        <span className="eyebrow fade-up" style={{ display: "block" }}>
          Join the Mission
        </span>
        <h2 className="join-title fade-up" style={{ transitionDelay: "0.08s" }}>
          Be Part of Humanity's
          <br />
          <em>Next Great Leap</em>
        </h2>
        <p className="join-body fade-up" style={{ transitionDelay: "0.16s" }}>
          Whether as a small donor fueling our first prototypes, contributing
          hands-on experience, or as a major investor partnering for the future
          — your support powers Overby Industries. Every contribution, no matter
          how small, helps us take steps toward a sustainable future in space.
          Join the early supporters and be part of Overby Industries from the
          beginning.
        </p>
        <div
          className="btn-group fade-up"
          style={{ justifyContent: "center", transitionDelay: "0.24s" }}
        >
          <CustomDonateForm />
          <SignupForm />
        </div>
      </section>
    </>
  );
}
