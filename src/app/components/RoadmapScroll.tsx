"use client";

import { useRef, useEffect } from "react";
import { roadmap } from "../content/roadmap";

export default function RoadmapScroll() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Map vertical scroll wheel to horizontal scrolling
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY; // vertical wheel → horizontal scroll
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => container.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section className="py-20 bg-gray-950 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Roadmap</h2>

      <div
        ref={containerRef}
        className="flex overflow-x-auto no-scrollbar px-6 space-x-8 snap-x snap-mandatory"
        style={{ scrollBehavior: "smooth" }}
      >
        {roadmap.map((milestone, idx) => (
          <div
            key={idx}
            className="min-w-[18rem] md:min-w-[24rem] lg:min-w-[28rem] flex-shrink-0 
                       bg-gray-900 border border-gray-700 rounded-xl p-6 snap-start 
                       hover:scale-105 hover:bg-gray-800 transition-transform duration-300"
          >
            <h3 className="text-xl font-bold text-cyan-400">{milestone.year}</h3>
            <h4 className="text-2xl font-semibold mt-2">{milestone.title}</h4>
            <p className="text-gray-300 mt-4">{milestone.description}</p>
          </div>
        ))}
      </div>

      <p className="mt-6 text-sm text-gray-400">
        💡 Tip: Use your mouse wheel or swipe to scroll →
      </p>
    </section>
  );
}