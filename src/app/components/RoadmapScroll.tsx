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
    <section className="py-4 text-center text-white">
      <h2 className="mb-8 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
        Our Roadmap to the Future
      </h2>
      <div
        ref={containerRef}
        className="no-scrollbar flex snap-x snap-mandatory space-x-8 overflow-x-auto px-4"
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
      className="min-w-[18rem] flex-shrink-0 snap-start rounded-xl border border-gray-700 bg-gray-900 p-6 transition-transform duration-300 hover:scale-105 hover:bg-gray-800 md:min-w-[24rem] lg:min-w-[28rem]"
    >
      <h3 className="text-xl font-bold text-cyan-400">{year}</h3>
      <h4 className="mt-2 text-2xl font-semibold">{title}</h4>
      <p className="mt-4 text-gray-300">{description}</p>
    </motion.div>
  );
}