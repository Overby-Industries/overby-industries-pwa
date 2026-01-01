"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { roadmap } from "../content/roadmap";

export default function Roadmap() {
  return (
    <section className="py-20 text-white">
      <h2 className="mb-16 text-center bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
        Our Roadmap to the Future
      </h2>

      <div className="mx-auto max-w-5xl space-y-12 px-4">
        {roadmap.map((milestone, idx) => (
          <RoadmapCard
            key={idx}
            year={milestone.year}
            title={milestone.title}
            description={milestone.description}
            align={idx % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </section>
  );
}

/* =========================
   Internal helper component
   ========================= */

function RoadmapCard({
  year,
  title,
  description,
  align,
}: {
  year: string;
  title: string;
  description: string;
  align: "left" | "right";
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

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
        hidden: {
          opacity: 0,
          x: align === "left" ? -40 : 40,
          y: 20,
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
        },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="rounded-xl border border-gray-700 bg-gray-900 p-6 md:p-8"
    >
      <h3 className="text-xl font-bold text-cyan-400">{year}</h3>
      <h4 className="mt-2 text-2xl font-semibold">{title}</h4>
      <p className="mt-4 text-gray-300">{description}</p>
    </motion.div>
  );
}
