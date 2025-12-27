import HeroLogo from "./components/HeroLogo";

import Hero from "./landing-page/Hero";
import Vision from "./landing-page/Vision";
import WhyOverby from "./landing-page/WhyOverby";
import Contribute from "./landing-page/Contribute";
import RoadmapScroll from "./components/RoadmapScroll";
// import NavBar from "./components/NavBar";
// import HeroSection from "./components/HeroSection";
// import WhitePaperPreview from "./components/WhitePaperPreview";
import Footer from "./components/Footer";
import Starfield from "./components/Starfield";


export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <HeroLogo />
      {/* <NavBar /> */}
    
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
      <Starfield />
      <Footer />
    </main>
  );
}
