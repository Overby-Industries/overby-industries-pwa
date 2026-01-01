import NavBar from "./components/NavBar";
import Hero from "./landing-page/Hero";
import Vision from "./landing-page/Vision";
import WhyOverby from "./landing-page/WhyOverby";
import Contribute from "./landing-page/Contribute";
import RoadmapScroll from "./components/RoadmapScroll";
// import WhitePaperPreview from "./components/WhitePaperPreview";
import Footer from "./components/Footer";
// import { createClient } from '../utils/supabase/server'
import { cookies } from 'next/headers'

export default async function Home() {
  const cookieStore = await cookies()
  //const supabase = createClient(cookieStore)

  // const { data: todos } = await supabase.from('todos').select()
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
