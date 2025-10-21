import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getMarkdown } from "@/lib/getMarkdown";

export default async function WhitePaperPage() {
  const markdown = await getMarkdown("WHITEPAPER.md");

  return (
    <main className="mx-auto max-w-4xl bg-gray-950 px-8 py-16 leading-relaxed text-gray-200">
      <div className="prose prose-invert prose-headings:text-cyan-400 prose-a:text-cyan-300 prose-strong:text-white max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </div>
      <h1 className="mb-4 text-4xl font-extrabold text-cyan-400 md:text-5xl">
        Overby Industries White Paper
      </h1>
      <h2 className="mb-12 text-xl text-gray-400">
        An Ethical, Zero-Waste Roadmap to Sustainable Space Industry
      </h2>

      <section className="mb-12">
        <h3 className="mb-2 text-2xl font-bold text-cyan-300">
          1. Executive Summary
        </h3>
        <p>
          Overby Industries is committed to building the resources backbone of a
          solar system economy without repeating the environmental damage caused
          by terrestrial extraction. Through reusable shuttlecraft, autonomous
          extraction units, and distributed ISRU, we will deliver metals,
          aggregates, plastics, and fuels for space construction and expansion —
          with{" "}
          <span className="font-semibold text-white">
            zero debris, zero waste
          </span>
          .
        </p>
      </section>

      <section className="mb-12">
        <h3 className="mb-2 text-2xl font-bold text-cyan-300">
          2. The Problem
        </h3>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Earth's resources are finite and environmentally destructive to
            extract.
          </li>
          <li>Launching materials from Earth is economically inefficient.</li>
          <li>
            Without ethical standards, asteroid mining risks repeating Earth's
            mistakes.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h3 className="mb-2 text-2xl font-bold text-cyan-300">3. The Vision</h3>
        <p>
          Overby Industries will responsibly exploit asteroids for metals
          (nickel, iron, PGMs), silicate bodies for concrete and basalt fibers,
          and Titan’s hydrocarbons for plastics and fuels. Everything will
          operate under a{" "}
          <span className="font-semibold">
            Zero-Pollution, Zero-Waste Certification
          </span>
          .
        </p>
      </section>

      {/* ...repeat for Core Tech, Ethics, Roadmap, etc... */}

      <section className="mb-12">
        <h3 className="mb-2 text-2xl font-bold text-cyan-300">9. References</h3>
        <ul className="list-disc space-y-2 pl-6 text-sm">
          <li>
            Johnson, L., et al. (2014). The Asteroid Redirect Mission. NASA ARM
            Overview.
          </li>
          <li>
            Rayman, M., et al. (2007). Dawn: Exploring Vesta and Ceres.
            NASA/JPL.
          </li>
          <li>ESA (2018). Tests of Air-Breathing Electric Propulsion.</li>
          <li>
            Janhunen, P. (2006). The Electric Sail. Journal of Propulsion &
            Power.
          </li>
          <li>Lozano, P.C. (2010). Ionic Liquids for Propulsion. MIT.</li>
          <li>Stofan, E.R., et al. (2007). The Lakes of Titan. Nature.</li>
          <li>Sierra Nevada Corp. (2024). Dream Chaser Spaceplane.</li>
        </ul>
      </section>

      <section className="my-16 text-center">
        <a
          href="/Overby_Industries_WhitePaper_v1.pdf"
          download
          className="rounded-lg bg-cyan-500 px-8 py-4 font-semibold text-white transition hover:bg-cyan-600"
        >
          📄 Download Full PDF
        </a>
      </section>
    </main>
  );
}
