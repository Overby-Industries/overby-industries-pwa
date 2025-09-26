import Hero from './landing-page/Hero';
import Vision from './landing-page/Vision';
import WhyOverby from './landing-page/WhyOverby';
import Contribute from './landing-page/Contribute';
import RoadmapScroll from './landing-page/RoadmapScroll';
// import NavBar from "./components/NavBar";
// import HeroSection from "./components/HeroSection";
// import WhitePaperPreview from "./components/WhitePaperPreview";
import Footer from './components/Footer';
import Starfield from './components/Starfield';
import HeroLogo from './components/HeroLogo';

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen text-white overflow-hidden">
      <HeroLogo />
      {/* <NavBar /> */}
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
      <Starfield />
      <Footer />
    </main>
  );
}
