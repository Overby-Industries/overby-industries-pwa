import React from 'react';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-4 px-4">
      <div className="flex flex-col items-center justify-center md:h-24 h-32 w-full">
        <h1 className="flex flex-col pt-2 w-full h-full text-center text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
          Overby Industries
        </h1>
      </div>
      <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-300">
        Building a Sustainable, Ethical Industrial Future in Space
      </p>
      <div className="mt-4 flex gap-4">
        <a
          href="#contribute"
          className="px-4 py-4 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition"
        >
          Contribute Resources
        </a>
        <a
          href="#vision"
          className="px-4 py-4 rounded-lg border border-cyan-400 hover:bg-cyan-400/10 transition"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
