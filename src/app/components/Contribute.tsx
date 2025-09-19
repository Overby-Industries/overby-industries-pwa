export default function Contribute() {
  return (
    <section id="contribute" className="py-20 px-6 bg-gradient-to-t from-black to-gray-900 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Mission</h2>
      <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
        Be part of humanity’s next great leap. Whether as a small donor 
        fueling our first prototypes, or a major investor partnering for 
        the future, your support powers Overby Industries.
      </p>
      <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="mailto:founder@overbyindustries.space"
          className="px-8 py-4 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition text-xl font-semibold"
        >
          🌍 Contribute Fuel
        </a>
        <a
          href="#"
          className="px-8 py-4 rounded-lg border border-cyan-400 hover:bg-cyan-400/10 transition text-xl font-semibold"
        >
          💼 Investor Contact
        </a>
      </div>
    </section>
  );
}