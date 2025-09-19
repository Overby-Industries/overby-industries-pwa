import Hero from "./components/Hero";
import Vision from "./components/Vision";
import WhyOverby from "./components/WhyOverby";
import Roadmap from "./components/Roadmap";
import Contribute from "./components/Contribute";

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
      <Roadmap />

      {/* CONTRIBUTION / CTA */}
      <Contribute />
    </main>
  );
}