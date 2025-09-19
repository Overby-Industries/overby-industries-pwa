export default function Roadmap() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        The Roadmap
      </h2>
      <div className="space-y-8 text-gray-200">
        <div>
          <h3 className="font-semibold text-cyan-400">2030-2040</h3>
          <p>Prototype Starlifter I, early Miner Pods, proof of zero-debris mining.</p>
        </div>
        <div>
          <h3 className="font-semibold text-cyan-400">2040-2055</h3>
          <p>Operational Starlifter II fleet, Lunar depot support.</p>
        </div>
        <div>
          <h3 className="font-semibold text-cyan-400">2055-2080</h3>
          <p>Asteroid belt harvesting, UHPC concrete & orbital stations.</p>
        </div>
        <div>
          <h3 className="font-semibold text-cyan-400">2080-2100</h3>
          <p>Titan Base established, plastics and fuel economy begins.</p>
        </div>
        <div>
          <h3 className="font-semibold text-cyan-400">2100+</h3>
          <p>Solar system-wide closed-loop economy, Overby Certification standard.</p>
        </div>
      </div>
    </section>
  );
}