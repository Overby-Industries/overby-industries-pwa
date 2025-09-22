import Hero from "./components/Hero";
import Vision from "./components/Vision";
import WhyOverby from "./components/WhyOverby";
import Contribute from "./components/Contribute";
import RoadmapScroll from "./components/RoadmapScroll";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-950 text-white">
      {/* HERO */}
      <Hero />

      {/* VISION */}
      <Vision />

      {/* WHY OVERBY */}
      <WhyOverby />

      {/* ROADMAP */}
      <RoadmapScroll />

      {/* CONTRIBUTION / CTA */}
      <Contribute />
    </main>
  );
}