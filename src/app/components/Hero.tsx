export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-b from-black to-gray-900">
      <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
        Overby Industries
      </h1>
      <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-300">
        Building a Sustainable, Ethical Industrial Future in Space 🌌
      </p>
      <div className="mt-8 flex gap-4">
        <a
          href="#contribute"
          className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition"
        >
          🚀 Contribute Fuel
        </a>
        <a
          href="#vision"
          className="px-6 py-3 rounded-lg border border-cyan-400 hover:bg-cyan-400/10 transition"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}