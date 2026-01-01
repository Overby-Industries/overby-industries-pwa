import NavBar from "./components/NavBar";
import Hero from "./landing-page/Hero";
import Vision from "./landing-page/Vision";
import WhyOverby from "./landing-page/WhyOverby";
import Contribute from "./landing-page/Contribute";
import RoadmapScroll from "./components/RoadmapScroll";
// import WhitePaperPreview from "./components/WhitePaperPreview";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* <NavBar /> */}
      <NavBar />
      {/* VISION */}
      <Vision />
      {/* WHY OVERBY */}
      <WhyOverby />
      {/* ROADMAP */}
      <RoadmapScroll />
      {/* CONTRIBUTION / CTA */}
      <Contribute />
      {/* HERO */}
      <Hero />
      <Footer />
    </main>
  );
}
