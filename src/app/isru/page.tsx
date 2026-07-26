"use client";

import { useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function ISRUPage() {
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
    <>
      {/* ── Hero ── */}
      <section className={`${styles.heroSection} graph-bg`}>
        <div className={styles.inner4xl}>
          <span className="eyebrow fade-up hero-immediate">
            ISRU Division · Full-Spectrum Resource Pipeline
          </span>
          <h1 className={`${styles.heroH1} fade-up hero-immediate`} style={{ transitionDelay: "0.08s" }}>
            Everything Humanity Needs —{" "}
            <em className={styles.blueItalic}>Already Out There</em>
          </h1>
          <p className={`${styles.bodyText} fade-up hero-immediate`} style={{ transitionDelay: "0.16s" }}>
            In-Situ Resource Utilization is the foundation every other Overby division builds on.
            Metals, stone, water, and hydrocarbons already exist in abundance across the asteroid
            belt, the lunar surface, and the Saturn system — Overby ISRU extracts, refines, and
            delivers every category of material an interplanetary civilization needs, without a
            single gram of waste and without shipping a single kilogram up from Earth.
          </p>
          <div className="rule-divider fade-up hero-immediate" style={{ transitionDelay: "0.24s" }}>
            <div className="diamond" />
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className={styles.section}>
        <div className={styles.inner5xl}>
          <div className={styles.statsGrid}>
            {[
              { num: "4", label: "Material Streams", sub: "Metals, silicate, volatiles, hydrocarbons" },
              { num: "0%", label: "Waste Tolerance", sub: "Every gram extracted is a gram used" },
              { num: "100%", label: "Off-World Sourced", sub: "Zero Earth-launched feedstock required" },
            ].map(({ num, label, sub }, i) => (
              <div key={label} className={`${styles.statBlock} fade-up`} style={{ transitionDelay: `${i * 0.08}s` }}>
                <span className={styles.statNumber}>{num}</span>
                <div className={styles.statLabel}>{label}</div>
                <div className={styles.statSub}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={`rule-divider fade-up ${styles.dividerWrapper}`}>
        <div className="diamond" />
      </div>

      {/* ── Resource Pipeline ── */}
      <section className={styles.section}>
        <div className={styles.inner5xl}>
          <div className="fade-up" style={{ marginBottom: 8 }}>
            <span className={styles.goldTag}>The Four Streams</span>
            <h2 className={styles.h2}>
              One Pipeline, <em className={styles.blueItalic}>Four Material Classes</em>
            </h2>
            <p className={styles.bodyText}>
              Every resource category humanity needs to build and sustain a permanent presence
              beyond Earth falls into one of four streams. Each stream has its own dedicated
              extraction hardware, processing chemistry, and delivery chain — explored in full
              on its own page.
            </p>
          </div>

          <div className={styles.resourcesGrid}>
            {[
              {
                title: "Regolith & Silicate",
                source: "S-class asteroids · Lunar regolith",
                items: [
                  "UHPC construction aggregate",
                  "Basalt fibre composites",
                  "Sintered regolith shielding brick",
                  "Aluminium from anorthosite",
                ],
                href: "/isru/regolith",
              },
              {
                title: "Precious-Based Metals",
                source: "M-class asteroids · Debris reclamation",
                items: [
                  "Nickel-iron structural stock",
                  "Cobalt for battery & alloy systems",
                  "Platinum-group metals (PGMs)",
                  "Refined ingots, orbit-ready",
                ],
                href: "/isru/precious-based-metals",
              },
              {
                title: "Hydrocarbons",
                source: "Titan lakes & atmosphere",
                items: [
                  "Polyethylene & polypropylene",
                  "Synthetic fibres & lubricants",
                  "Chemical manufacturing feedstock",
                  "Non-electric propulsion fuel",
                ],
                href: "/isru/hydrocarbons",
              },
              {
                title: "Water & Volatiles",
                source: "Lunar polar ice · C-class asteroids",
                items: [
                  "H₂/O₂ propellant electrolysis",
                  "Life support & radiation shielding",
                  "CH₄ from carbonaceous volatiles",
                  "Closed-loop habitat atmosphere",
                ],
                href: "/isru/water",
              },
            ].map(({ title, source, items, href }, i) => (
              <div key={title} className={`${styles.resourceCol} fade-up`} style={{ transitionDelay: `${i * 0.08}s` }}>
                <h3>{title}</h3>
                <span className={styles.sourceLine}>Source: {source}</span>
                <ul className={styles.resourceList}>
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div style={{ marginTop: 20 }}>
                  <Link href={href} className={styles.ctaLink}>
                    Explore {title} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={`rule-divider fade-up ${styles.dividerWrapper}`}>
        <div className="diamond" />
      </div>

      {/* ── Why ISRU ── */}
      <section className={styles.section}>
        <div className={styles.inner5xl}>
          <div className="fade-up" style={{ marginBottom: 8 }}>
            <span className={styles.goldTag}>Operating Principles</span>
            <h2 className={styles.h2}>
              Why <em className={styles.blueItalic}>In-Situ</em>
            </h2>
            <p className={styles.bodyText}>
              Launching material from Earth is the single largest cost driver in every space
              programme ever flown. ISRU inverts that economics entirely — the raw material is
              already in orbit, already at velocity, and already in more abundance than Earth
              could ever supply.
            </p>
          </div>

          <div className={styles.cardsGrid3}>
            {[
              {
                icon: "○",
                tag: "Cost Structure",
                title: "Zero Earth Dependency",
                desc: "Every kilogram sourced off-world is a kilogram that never needed a rocket. ISRU output directly displaces the highest-cost line item in any deep-space mission — Earth-launched mass.",
              },
              {
                icon: "◇",
                tag: "Environmental Standard",
                title: "Closed-Loop Certified",
                desc: "Every ISRU cycle runs under the Space Zero-Waste Standard. Residual dust, slag, and byproduct streams are repurposed into shielding, aggregate, or feedstock — nothing is discarded, ever.",
              },
              {
                icon: "□",
                tag: "Operating Model",
                title: "Continuous Production",
                desc: "ISRU sites are production facilities, not missions. Autonomous miner and refinery pods keep extracting and processing between resupply visits, building a standing stockpile the network can draw on.",
              },
            ].map(({ icon, tag, title, desc }, i) => (
              <div key={title} className={`${styles.card} fade-up`} style={{ transitionDelay: `${i * 0.08}s` }}>
                <span className={styles.shapeIcon}>{icon}</span>
                <span className={styles.goldTag}>{tag}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={`rule-divider fade-up ${styles.dividerWrapper}`}>
        <div className="diamond" />
      </div>

      {/* ── Technical Challenges ── */}
      <section className={styles.section}>
        <div className={styles.inner5xl}>
          <div className="fade-up" style={{ marginBottom: 8 }}>
            <span className={styles.goldTag}>Engineering Reality</span>
            <h2 className={styles.h2}>
              What Makes ISRU <em className={styles.blueItalic}>Hard</em>
            </h2>
            <p className={styles.bodyText}>
              Extracting and refining resources off-world is not a scaled-up version of terrestrial
              mining. Every stage of the pipeline has to work in conditions no Earth-based process
              was ever designed for.
            </p>
          </div>

          <div className={styles.challengesGrid}>
            {[
              {
                title: "Vacuum & Microgravity Processing",
                desc: "Standard gravity-fed separation, settling, and casting processes don't function in microgravity. Every ISRU process — from ore sorting to metal casting — has to be redesigned around centrifugal, magnetic, or mechanical force substitutes for gravity.",
              },
              {
                title: "Regolith Abrasiveness",
                desc: "Lunar and asteroid regolith is sharp, static-charged, and mechanically abrasive at the micron scale — it degrades seals, bearings, and joints far faster than terrestrial dust. Containment and filtration systems have to be engineered specifically for it.",
              },
              {
                title: "Extreme Thermal Cycling",
                desc: "Surface temperatures swing hundreds of degrees between sunlight and shadow on airless bodies. Processing hardware has to tolerate that cycling indefinitely without thermal fatigue failure, with no atmosphere to moderate the extremes.",
              },
              {
                title: "Autonomous Operation at Light-Lag",
                desc: "Round-trip communication delay makes real-time teleoperation impossible beyond cislunar space. Every ISRU platform has to detect faults, replan around obstacles, and keep production running without a human in the loop.",
              },
            ].map(({ title, desc }, i) => (
              <div key={title} className={`${styles.challengeCard} fade-up`} style={{ transitionDelay: `${i * 0.06}s` }}>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={`${styles.ctaSection} ${styles.textCenter}`}>
        <div className={`${styles.inner3xl} ${styles.ctaBody} fade-up`}>
          <span className={styles.goldTag}>Go Deeper</span>
          <h2 className={styles.h2}>
            Four Streams, <em className={styles.blueItalic}>One Pipeline</em>
          </h2>
          <p className={styles.bodyText} style={{ marginLeft: "auto", marginRight: "auto" }}>
            Each material stream has its own dedicated page covering source bodies, extraction
            hardware, processing chemistry, and delivery chain in full technical depth.
          </p>
          <div className={styles.ctaLinks}>
            <Link href="/isru/regolith" className={styles.ctaLink}>Regolith & Silicate</Link>
            <Link href="/isru/precious-based-metals" className={styles.ctaLink}>Precious-Based Metals</Link>
            <Link href="/isru/hydrocarbons" className={styles.ctaLink}>Hydrocarbons</Link>
            <Link href="/isru/water" className={styles.ctaLink}>Water & Volatiles</Link>
          </div>
        </div>
      </section>
    </>
  );
}
