"use client";

import { useEffect } from "react";

export default function HeavyIndustryPage() {
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

      {/* ── Page Header ── */}
      <div style={{ maxWidth: 900, marginBottom: 72 }}>
        <span className="eyebrow fade-up hero-immediate">
          Heavy Industry Division · Full-Spectrum Operations
        </span>
        <h1
          className="hero-title fade-up hero-immediate"
          style={{ transitionDelay: "0.08s", marginBottom: 24 }}
        >
          The Infrastructure Layer of{" "}
          <em>an Interplanetary<br />Civilization</em>
        </h1>
        <p
          className="hero-sub fade-up hero-immediate"
          style={{ transitionDelay: "0.16s", maxWidth: 720 }}
        >
          Overby Industries does not simply mine resources — it builds and
          operates the complete industrial backbone that humanity will need to
          live, work, and expand permanently beyond Earth. From orbital debris
          reclamation in low Earth orbit to mega-factory habitats in the
          asteroid belt, every facility, every outpost, and every supply chain
          is designed as a node in a single closed-loop solar system economy.
        </p>
        <div
          className="rule-divider fade-up hero-immediate"
          style={{ transitionDelay: "0.24s", marginTop: 40 }}
        >
          <div className="diamond" />
        </div>
      </div>

      {/* ── The String — infrastructure chain overview ── */}
      <div style={{ marginBottom: 96 }}>
        <div className="fade-up" style={{ marginBottom: 40 }}>
          <span className="eyebrow">The Infrastructure String</span>
          <h2
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 400,
              color: "var(--ink)",
              lineHeight: 1.2,
              marginBottom: 16,
            }}
          >
            A Chain of Outposts from{" "}
            <em style={{ fontStyle: "italic", color: "var(--blue)" }}>
              LEO to Titan
            </em>
          </h2>
          <p
            style={{
              fontFamily: "var(--mono)",
              fontSize: 13,
              color: "var(--ink-soft)",
              lineHeight: 1.9,
              maxWidth: 680,
            }}
          >
            Every Overby Industries facility is designed as a self-sustaining
            node connected to the next. Resources, propellant, crew, and
            manufactured goods flow along the string in both directions —
            creating a resilient supply network that no single point of failure
            can sever.
          </p>
        </div>

        {/* String timeline */}
        <div
          style={{
            position: "relative",
            paddingLeft: 52,
            maxWidth: 960,
          }}
        >
          {/* Vertical rule */}
          <div
            style={{
              position: "absolute",
              left: 14,
              top: 8,
              bottom: 8,
              width: 1,
              background: "var(--rule)",
            }}
          />

          {[
            {
              zone: "Low Earth Orbit",
              distance: "200 – 2,000 km",
              name: "Orbital Debris Reclamation Belt",
              color: "var(--gold)",
              desc: "The first permanent Overby presence in space. Reclamation pods operate continuously across the LEO debris field, capturing defunct satellites, expended upper stages, and fragmentation clouds. All recovered material is sorted, compacted, and transferred to the cislunar depot for downstream processing. LEO clearance operations generate immediate service revenue and establish Overby as the responsible steward of near-Earth orbital space.",
            },
            {
              zone: "Cislunar Space",
              distance: "~385,000 km",
              name: "Cislunar Navigation & Logistics Depot",
              color: "var(--blue)",
              desc: "The primary logistics hub and waypoint for all traffic moving between Earth and the deeper solar system. The cislunar depot provides propellant resupply from processed LEO reclamation feedstock and lunar ISRU output, crew transfer and rotation facilities, communications relay and deep-space navigation beacon services, and initial processing of inbound asteroid resource shipments before Earth-delivery or onward transfer.",
            },
            {
              zone: "Lunar Surface",
              distance: "~384,400 km",
              name: "Lunar Industrial Base",
              color: "var(--blue)",
              desc: "The Lunar Industrial Base extracts and processes regolith for silicate aggregates, basalt fiber composites, and aluminium feedstock. Water ice from permanently shadowed polar craters is electrolysed into H₂/O₂ propellant, supplying the cislunar depot and reducing the mass fraction of propellant launched from Earth to near zero. The Lunar Base also serves as the primary training and validation ground for ISRU systems before deployment to more remote asteroid and deep-space environments.",
            },
            {
              zone: "Near-Earth Asteroids",
              distance: "Variable — 0.1 to 1.3 AU",
              name: "NEA Mining Operations",
              color: "var(--gold)",
              desc: "Autonomous miner/refinery pods deploy to high-value near-Earth asteroid targets identified by spectroscopic survey. M-class asteroids yield nickel, iron, cobalt, and platinum-group metals (PGMs). C-class bodies provide carbonaceous feedstock, water ice, and volatile organics. All operations use zero-dust containment excavation — no material enters the surrounding space environment. Refined metal ingots and volatile packages are returned to the cislunar depot aboard autonomous Starlifter cargo variants.",
            },
            {
              zone: "Mars Vicinity",
              distance: "~1.5 AU (average)",
              name: "Mars Staging Post & Navigation Outpost",
              color: "var(--gold)",
              desc: "Not a colony — a strategic waypoint and navigation outpost providing propellant resupply, communications relay, and emergency crew support for vessels transiting between the inner solar system and the asteroid belt. Mars Phobos and Deimos are evaluated as low-gravity anchoring points for depot infrastructure. The Mars Staging Post is deliberately lean — Overby Industries recognises Mars surface operations offer minimal resource advantage compared to asteroid and outer solar system targets and focuses Martian presence on logistics rather than extraction.",
            },
            {
              zone: "Main Asteroid Belt",
              distance: "2.2 – 3.2 AU",
              name: "Belt Industrial Complexes",
              color: "var(--red)",
              desc: "The asteroid belt represents the largest accessible concentration of metal, silicate, and carbonaceous resources in the solar system outside of planetary bodies. Overby Belt Industrial Complexes operate as distributed refinery networks anchored to large stable asteroid bodies, processing raw extracted material into finished metal stock, UHPC construction aggregate, propellant, and manufactured components. Belt output supplies the deep space mega-factory habitat programme and provides the raw material foundation for permanent outer solar system expansion.",
            },
            {
              zone: "Titan — Saturn System",
              distance: "~8.5 – 10.5 AU",
              name: "Titan Hydrocarbon Base",
              color: "var(--blue)",
              desc: "Titan's atmosphere and surface lakes contain the largest accessible hydrocarbon reserves in the solar system — methane, ethane, propane, and complex organic compounds in quantities that dwarf all known Earth reserves. The Titan Base extracts and refines these hydrocarbons into plastics, polymers, synthetic fibres, lubricants, fuels, and chemical feedstocks for distribution across all Overby facilities. Titan's thick nitrogen atmosphere and low gravity make surface operations significantly more accessible than Mars despite the greater distance. Full ISRU integration at Titan marks the point at which the Overby supply network becomes genuinely self-sustaining independent of Earth material inputs.",
            },
          ].map(({ zone, distance, name, color, desc }, i) => (
            <div
              key={zone}
              className="fade-up"
              style={{
                position: "relative",
                paddingBottom: 56,
                transitionDelay: `${i * 0.06}s`,
              }}
            >
              {/* Diamond node */}
              <div
                style={{
                  position: "absolute",
                  left: -44,
                  top: 5,
                  width: 10,
                  height: 10,
                  background: color,
                  transform: "rotate(45deg)",
                }}
              />

              {/* Zone label */}
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 10,
                  color: color,
                  letterSpacing: "0.15em",
                  marginBottom: 4,
                }}
              >
                {zone} · {distance}
              </div>

              {/* Name */}
              <div
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--ink)",
                  marginBottom: 12,
                }}
              >
                {name}
              </div>

              {/* Description */}
              <p
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 12,
                  color: "var(--ink-soft)",
                  lineHeight: 1.85,
                  maxWidth: 680,
                  marginBottom: 14,
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="rule-divider fade-up" style={{ marginBottom: 96 }}>
        <div className="diamond" />
      </div>

      {/* ── Orbital Debris Reclamation — deep dive ── */}
      <div style={{ maxWidth: 960, marginBottom: 96 }}>
        <div className="fade-up" style={{ marginBottom: 40 }}>
          <span className="eyebrow">Service Division · LEO Operations</span>
          <h2
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 400,
              color: "var(--ink)",
              lineHeight: 1.2,
              marginBottom: 16,
            }}
          >
            Orbital Debris Reclamation —{" "}
            <em style={{ fontStyle: "italic", color: "var(--blue)" }}>
              Turning the Problem Into the Product
            </em>
          </h2>
          <p
            style={{
              fontFamily: "var(--mono)",
              fontSize: 13,
              color: "var(--ink-soft)",
              lineHeight: 1.9,
              maxWidth: 680,
            }}
          >
            There are currently over 27,000 tracked debris objects in Earth
            orbit and an estimated 500,000 untracked fragments large enough to
            mission-kill an operational satellite. Overby Industries reframes
            this crisis as the largest pre-positioned raw material stockpile in
            near-Earth space — already in orbit, already at velocity, requiring
            only collection and processing.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            border: "1px solid var(--rule)",
            marginBottom: 40,
          }}
        >
          {[
            {
              num: "27,000+",
              label: "Tracked Debris Objects",
              sub: "in Earth orbit currently",
            },
            {
              num: "500,000+",
              label: "Untracked Fragments",
              sub: ">1cm, mission-kill capable",
            },
            {
              num: "100%",
              label: "Material Recovery Target",
              sub: "zero debris generated by reclamation ops",
            },
          ].map(({ num, label, sub }, i) => (
            <div
              key={label}
              className="fade-up"
              style={{
                padding: "28px 24px",
                borderRight: i < 2 ? "1px solid var(--rule)" : "none",
                background: "var(--surface)",
                transitionDelay: `${i * 0.06}s`,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 32,
                  fontWeight: 800,
                  color: "var(--blue)",
                  display: "block",
                  marginBottom: 8,
                  lineHeight: 1,
                }}
              >
                {num}
              </span>
              <div
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--ink)",
                  marginBottom: 4,
                }}
              >
                {label}
              </div>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  color: "var(--ink-soft)",
                }}
              >
                {sub}
              </div>
            </div>
          ))}
        </div>

        {/* Reclamation service tiers */}
        <div
          style={{
            border: "1px solid var(--rule)",
            background: "var(--surface)",
          }}
        >
          <div
            style={{
              padding: "16px 24px",
              borderBottom: "1px solid var(--rule)",
              fontFamily: "var(--sans)",
              fontSize: 9,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--gold)",
            }}
          >
            Reclamation Service Tiers
          </div>
          {[
            {
              tier: "Lane Clearance Contract",
              desc: "Dedicated orbital lane clearance for satellite operators and launch providers. Overby pods sweep defined inclination bands and altitude shells on contract, delivering clear operational corridors and debris collision risk reports.",
              revenue: "Direct service revenue",
            },
            {
              tier: "Defunct Satellite Recovery",
              desc: "Full recovery and material processing of customer-specified defunct satellite assets. Customer receives material credit against future Overby resource purchases. Eliminates satellite operator deorbit liability.",
              revenue: "Material credit + processing fee",
            },
            {
              tier: "Fragmentation Emergency Response",
              desc: "Rapid-response reclamation deployment following on-orbit fragmentation events. Overby pods mobilise to contain and collect expanding debris clouds before they cascade into additional collision events — preventing Kessler Syndrome progression.",
              revenue: "Emergency contract + agency partnership",
            },
            {
              tier: "Continuous Ambient Reclamation",
              desc: "Standing autonomous operations across high-traffic LEO shells. All recovered material enters the Overby ISRU feedstock pipeline. Revenue generated through downstream material sales rather than direct service contracts.",
              revenue: "Downstream material sales",
            },
          ].map(({ tier, desc, revenue }, i) => (
            <div
              key={tier}
              className="fade-up"
              style={{
                display: "grid",
                gridTemplateColumns: "200px 1fr 180px",
                padding: "20px 24px",
                borderBottom: i < 3 ? "1px solid var(--rule)" : "none",
                gap: 24,
                alignItems: "start",
                transitionDelay: `${i * 0.06}s`,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--ink)",
                  lineHeight: 1.5,
                }}
              >
                {tier}
              </div>
              <p
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 12,
                  color: "var(--ink-soft)",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                {desc}
              </p>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 10,
                  color: "var(--gold)",
                  lineHeight: 1.6,
                }}
              >
                {revenue}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="rule-divider fade-up" style={{ marginBottom: 96 }}>
        <div className="diamond" />
      </div>

      {/* ── ISRU Pipeline ── */}
      <div style={{ maxWidth: 960, marginBottom: 96 }}>
        <div className="fade-up" style={{ marginBottom: 40 }}>
          <span className="eyebrow">ISRU · In-Situ Resource Utilization</span>
          <h2
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 400,
              color: "var(--ink)",
              lineHeight: 1.2,
              marginBottom: 16,
            }}
          >
            Full-Spectrum Resource Pipeline —{" "}
            <em style={{ fontStyle: "italic", color: "var(--blue)" }}>
              Zero Waste, Zero Import
            </em>
          </h2>
          <p
            style={{
              fontFamily: "var(--mono)",
              fontSize: 13,
              color: "var(--ink-soft)",
              lineHeight: 1.9,
              maxWidth: 680,
            }}
          >
            Every resource required to build and sustain an interplanetary
            civilization exists in abundance beyond Earth. The Overby ISRU
            pipeline is engineered to extract, refine, and deliver every
            category of material humanity needs — metals, stone, plastics,
            fuels, gases, and fibres — without a single gram of waste entering
            the surrounding environment.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 2,
            border: "1px solid var(--rule)",
          }}
        >
          {[
            {
              category: "Metallic Resources",
              source: "M-class asteroids · Lunar regolith · Debris reclamation",
              outputs: [
                "Nickel & Iron structural stock",
                "Cobalt for battery and alloy systems",
                "Platinum-Group Metals (PGMs) for catalysis and electronics",
                "Aluminium from lunar anorthosite",
                "Titanium from ilmenite processing",
              ],
              color: "var(--gold)",
            },
            {
              category: "Silicate & Aggregate",
              source: "S-class asteroids · Lunar regolith · Slag reclamation",
              outputs: [
                "Ultra-High Performance Concrete (UHPC) from basalt",
                "Basalt fibre composite structural elements",
                "Sintered regolith bricks and shielding blocks",
                "Silica glass for optical and structural applications",
                "Aggregate for habitat construction fill",
              ],
              color: "var(--blue)",
            },
            {
              category: "Volatiles & Propellants",
              source: "C-class asteroids · Lunar ice · Titan atmosphere",
              outputs: [
                "H₂/O₂ from water ice electrolysis",
                "CH₄ from Titan hydrocarbon extraction",
                "CO₂ capture and conversion to fuel",
                "Nitrogen for habitat atmosphere systems",
                "Noble gas reserves for ion propulsion",
              ],
              color: "var(--blue)",
            },
            {
              category: "Hydrocarbons & Polymers",
              source: "Titan lakes & atmosphere · C-class organics",
              outputs: [
                "Polyethylene and polypropylene for manufacturing",
                "Synthetic fibres for textiles and composites",
                "Lubricants for industrial and mechanical systems",
                "Chemical feedstocks for onsite manufacturing",
                "Fuel for non-electric propulsion applications",
              ],
              color: "var(--gold)",
            },
          ].map(({ category, source, outputs, color }, i) => (
            <div
              key={category}
              className="cap-card fade-up"
              style={{
                transitionDelay: `${i * 0.08}s`,
                borderRight: i % 2 === 0 ? "1px solid var(--rule)" : "none",
                borderBottom: i < 2 ? "1px solid var(--rule)" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 9,
                  letterSpacing: "0.22em",
                  color: color,
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                {category}
              </div>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 10,
                  color: "var(--ink-faint)",
                  marginBottom: 16,
                  fontStyle: "italic",
                }}
              >
                Source: {source}
              </div>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {outputs.map((o) => (
                  <li
                    key={o}
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 12,
                      color: "var(--ink-soft)",
                      lineHeight: 1.7,
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                      marginBottom: 6,
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        width: 5,
                        height: 5,
                        background: color,
                        transform: "rotate(45deg)",
                        flexShrink: 0,
                        marginTop: 6,
                      }}
                    />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="rule-divider fade-up" style={{ marginBottom: 96 }}>
        <div className="diamond" />
      </div>

      {/* ── Mega-Factory Habitats ── */}
      <div style={{ maxWidth: 960, marginBottom: 96 }}>
        <div className="fade-up" style={{ marginBottom: 40 }}>
          <span className="eyebrow">Deep Space Infrastructure · Civilization Scale</span>
          <h2
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 400,
              color: "var(--ink)",
              lineHeight: 1.2,
              marginBottom: 16,
            }}
          >
            Mega-Factory Habitats —{" "}
            <em style={{ fontStyle: "italic", color: "var(--blue)" }}>
              1g Gravity, Built From Asteroids
            </em>
          </h2>
          <p
            style={{
              fontFamily: "var(--mono)",
              fontSize: 13,
              color: "var(--ink-soft)",
              lineHeight: 1.9,
              maxWidth: 680,
              marginBottom: 24,
            }}
          >
            The long-term vision for Overby Heavy Industry is the construction
            of large rotating space habitats in the asteroid belt — self-contained
            industrial and civilian environments providing full 1g simulated
            gravity through rotation, built entirely from asteroid-derived UHPC,
            basalt fibre composites, and metallic structural stock. No Earth
            material required.
          </p>
          <p
            style={{
              fontFamily: "var(--mono)",
              fontSize: 13,
              color: "var(--ink-soft)",
              lineHeight: 1.9,
              maxWidth: 680,
            }}
          >
            These facilities serve simultaneously as manufacturing complexes,
            long-duration crew habitats, research stations, and resource
            distribution hubs. Their location in the asteroid belt places them
            at the centre of the solar system resource network — equidistant
            from inner and outer system operations — making them the natural
            industrial heart of a multi-planetary civilization.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {[
            {
              title: "Rotating Ring Architecture",
              desc: "Toroidal or cylinder habitat designs sized to provide 1g equivalent gravity at comfortable rotation rates (1–3 RPM). Interior surface area scales with radius — larger structures provide more usable space per unit of structural mass, making asteroid-belt construction progressively more efficient as the programme matures.",
              icon: "○",
            },
            {
              title: "All-ISRU Construction",
              desc: "Structural elements fabricated entirely from asteroid-derived materials using onsite robotic manufacturing. UHPC provides compression strength, basalt fibre composites provide tensile reinforcement, and metallic stock from M-class asteroid processing provides primary structural framing and pressure vessel components.",
              icon: "◇",
            },
            {
              title: "Integrated Industrial Production",
              desc: "Habitat interior volume divided between residential, agricultural, research, and heavy manufacturing zones. Microgravity manufacturing bays accessible via central hub allow production of components impossible to fabricate in full gravity — perfect crystal growth, spherical casting, and ultra-pure material processing.",
              icon: "□",
            },
            {
              title: "Direct Democratic Governance",
              desc: "All permanent Overby habitat communities operate under direct democratic governance frameworks developed collaboratively with residents. Overby Industries provides infrastructure and industrial management; community governance, social organisation, and civic decisions remain entirely with the people who live and work there.",
              icon: "△",
            },
          ].map(({ title, desc, icon }) => (
            <div
              key={title}
              className="cap-card fade-up"
              style={{ borderLeft: "3px solid var(--gold)" }}
            >
              <div
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 28,
                  color: "var(--gold)",
                  marginBottom: 12,
                  lineHeight: 1,
                }}
              >
                {icon}
              </div>
              <div className="cap-title">{title}</div>
              <p className="cap-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Zero Waste Standard ── */}
      <div
        className="fade-up"
        style={{
          border: "1px solid var(--rule)",
          background: "var(--surface)",
          padding: "48px 56px",
          maxWidth: 960,
          marginBottom: 56,
        }}
      >
        <span className="eyebrow">Overby Certification Standard</span>
        <h2
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(24px, 3vw, 38px)",
            fontWeight: 400,
            color: "var(--ink)",
            marginBottom: 20,
            lineHeight: 1.2,
          }}
        >
          The Space Zero-Waste Standard —{" "}
          <em style={{ fontStyle: "italic", color: "var(--blue)" }}>
            Every Mission Certified
          </em>
        </h2>
        <p
          style={{
            fontFamily: "var(--mono)",
            fontSize: 13,
            color: "var(--ink-soft)",
            lineHeight: 1.9,
            maxWidth: 680,
            marginBottom: 32,
          }}
        >
          Every Overby Industries operation — mining, reclamation, construction,
          transit — is conducted under the Space Zero-Waste Standard and
          publicly certified on mission completion. The goal is for Overby
          Certification to become the recognised global benchmark for ethical
          space industry operations, adopted by agencies and commercial operators
          worldwide.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 0,
            border: "1px solid var(--rule)",
          }}
        >
          {[
            "Containment-first mining — no dust, no orbital debris generated",
            "Reclamation mode — every miner pod compacts all residual material",
            "Closed-loop ISRU cycles — nothing is left behind at any site",
            "Public transparency — certification report published for every mission",
          ].map((item, i) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 14,
                padding: "16px 20px",
                borderRight: i % 2 === 0 ? "1px solid var(--rule)" : "none",
                borderBottom: i < 2 ? "1px solid var(--rule)" : "none",
                fontFamily: "var(--mono)",
                fontSize: 12,
                color: "var(--ink-soft)",
                lineHeight: 1.7,
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: 6,
                  height: 6,
                  background: "var(--gold)",
                  transform: "rotate(45deg)",
                  flexShrink: 0,
                  marginTop: 5,
                }}
              />
              {item}
            </div>
          ))}
        </div>
        <p
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(16px, 2vw, 22px)",
            fontStyle: "italic",
            color: "var(--ink)",
            marginTop: 32,
            lineHeight: 1.5,
            borderLeft: "3px solid var(--gold)",
            paddingLeft: 24,
          }}
        >
          "Humanity's future in space will be sustainable — or it will fail.
          Overby Industries ensures it will succeed."
        </p>
      </div>

      {/* ── CTA ── */}
      <div
        className="fade-up"
        style={{
          paddingTop: 40,
          borderTop: "1px solid var(--rule)",
          maxWidth: 960,
          display: "flex",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <a href="/isru" className="btn btn-primary">
          Explore ISRU Division →
        </a>
        <a href="/whitepapers" className="btn btn-ghost">
          Read the Whitepaper
        </a>
      </div>

    </section>
  );
}
