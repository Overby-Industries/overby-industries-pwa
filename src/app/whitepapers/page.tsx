export default function WhitePaper() {
  return (
    <main className="bg-gray-950 text-gray-200 py-16 px-8 max-w-4xl mx-auto leading-relaxed">
      <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-4">
        Overby Industries White Paper
      </h1>
      <h2 className="text-xl text-gray-400 mb-12">
        An Ethical, Zero-Waste Roadmap to Sustainable Space Industry
      </h2>

      <section className="mb-12">
        <h3 className="text-2xl font-bold text-cyan-300 mb-2">1. Executive Summary</h3>
        <p>
          Overby Industries is committed to building the resources backbone of a solar system
          economy without repeating the environmental damage caused by terrestrial extraction.  
          Through reusable shuttlecraft, autonomous extraction units, and distributed ISRU,
          we will deliver metals, aggregates, plastics, and fuels for space construction
          and expansion — with <span className="text-white font-semibold">zero debris, zero waste</span>.
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-bold text-cyan-300 mb-2">2. The Problem</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Earth's resources are finite and environmentally destructive to extract.</li>
          <li>Launching materials from Earth is economically inefficient.</li>
          <li>Without ethical standards, asteroid mining risks repeating Earth's mistakes.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-bold text-cyan-300 mb-2">3. The Vision</h3>
        <p>
          Overby Industries will responsibly exploit asteroids for metals (nickel, iron, PGMs),
          silicate bodies for concrete and basalt fibers, and Titan’s hydrocarbons for plastics and fuels.  
          Everything will operate under a <span className="font-semibold">Zero-Pollution, Zero-Waste Certification</span>.  
        </p>
      </section>

      {/* ...repeat for Core Tech, Ethics, Roadmap, etc... */}

      <section className="mb-12">
        <h3 className="text-2xl font-bold text-cyan-300 mb-2">9. References</h3>
        <ul className="list-disc pl-6 space-y-2 text-sm">
          <li>Johnson, L., et al. (2014). The Asteroid Redirect Mission. NASA ARM Overview.</li>
          <li>Rayman, M., et al. (2007). Dawn: Exploring Vesta and Ceres. NASA/JPL.</li>
          <li>ESA (2018). Tests of Air-Breathing Electric Propulsion.</li>
          <li>Janhunen, P. (2006). The Electric Sail. Journal of Propulsion & Power.</li>
          <li>Lozano, P.C. (2010). Ionic Liquids for Propulsion. MIT.</li>
          <li>Stofan, E.R., et al. (2007). The Lakes of Titan. Nature.</li>
          <li>Sierra Nevada Corp. (2024). Dream Chaser Spaceplane.</li>
        </ul>
      </section>

      <section className="text-center my-16">
        <a
          href="/WHITEPAPERS_OVERBY_INDUSTRIES.pdf"
          download
          className="px-8 py-4 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition text-white font-semibold"
        >
          📄 Download Full PDF
        </a>
      </section>
    </main>
  );
}
