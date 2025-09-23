"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { roadmap } from "../content/roadmap";

export default function RoadmapScroll() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Map vertical wheel scroll → horizontal scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => container.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section className="py-4 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-8">
        Our Roadmap to the Future
      </h2>
      <div
        ref={containerRef}
        className="flex overflow-x-auto no-scrollbar px-4 space-x-8 snap-x snap-mandatory"
        style={{ scrollBehavior: "smooth" }}
      >
        {roadmap.map((milestone, idx) => (
          <RoadmapCard
            key={idx}
            year={milestone.year}
            title={milestone.title}
            description={milestone.description}
          />
        ))}
      </div>
    </section>
  );
}

function RoadmapCard({
  year,
  title,
  description,
}: {
  year: string;
  title: string;
  description: string;
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-w-[18rem] md:min-w-[24rem] lg:min-w-[28rem] flex-shrink-0 
                bg-gray-900 border border-gray-700 rounded-xl p-6 snap-start 
                hover:scale-105 hover:bg-gray-800 transition-transform duration-300"
    >
      <h3 className="text-xl font-bold text-cyan-400">{year}</h3>
      <h4 className="text-2xl font-semibold mt-2">{title}</h4>
      <p className="text-gray-300 mt-4">{description}</p>
    </motion.div>
  );
}