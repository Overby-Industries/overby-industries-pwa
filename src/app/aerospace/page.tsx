import Image from "next/image";
import Link from "next/link";

export default function AerospacePage() {
  return (
    <section className="whitepaper-page graph-bg">
      <h1 className="hero-title fade-uphero-title--delay">Aerospace</h1>
      <p className="hero-sub fade-up">
              Overby Industries presents Project Helga, a powered flight SSTO Heavy Lift Shuttle that takes off and lands on traditional runways, featuring a hypersonic double delta airfoil designed for optimal performance in the upper atmosphere. 
            </p>
            <Image
                        src="/project-helga.png"
                        alt="Project Helga spline airfoil design"
                        className="fade-up mission-body"
                        width={1600} // set to the actual height of your SVG
                        height={1600}
                        // fill    // fills the parent dimensions
                        // style={{ objectFit: "contain" }} // keep aspect ratio inside the box
                        // layout="responsive"
                        unoptimized // tells Next.js not to try to process the SVG
                        priority
                      />
            <p className="hero-sub fade-up">
              Project Helga is a blended wing lifting body design optimised for stable hypersonic flight, but also, designed for stable flight at slower flight envelopes such as landing approach or flying in the traffic pattern. 
              
            </p>
            <Image
                        src="/helga-top.png"
                        alt="Project Helga spline airfoil design"
                        className="fade-up mission-body"
                        width={1600} // set to the actual height of your SVG
                        height={1600}
                        // fill    // fills the parent dimensions
                        // style={{ objectFit: "contain" }} // keep aspect ratio inside the box
                        // layout="responsive"
                        unoptimized // tells Next.js not to try to process the SVG
                        priority
                      />
            <p className="hero-sub fade-up">
              The airframe features a sleek, aerodynamic shape with a focus on minimizing drag and maximizing lift. 
              
            </p>
            <Image
                        src="/helga-port-side.png"
                        alt="Project Helga spline airfoil design"
                        className="fade-up mission-body"
                        width={1600} // set to the actual height of your SVG
                        height={1600}
                        // fill    // fills the parent dimensions
                        // style={{ objectFit: "contain" }} // keep aspect ratio inside the box
                        // layout="responsive"
                        unoptimized // tells Next.js not to try to process the SVG
                        priority
                      />
            <p className="hero-sub fade-up">
              The airfoil design allows for efficient flight at hypersonic speeds, making it ideal for rapid deployment of payloads to orbit.
              With a slight dihedral for stability and a slight canted sweep forward on the trailing edge for a stable high angle of attack re-entry profile, the airframe is optimized for both performance and safety.
            </p>
            <Image
                        src="/helga-front.png"
                        alt="Project Helga spline airfoil design"
                        className="fade-up mission-body"
                        width={1600} // set to the actual height of your SVG
                        height={1600}
                        // fill    // fills the parent dimensions
                        // style={{ objectFit: "contain" }} // keep aspect ratio inside the box
                        // layout="responsive"
                        unoptimized // tells Next.js not to try to process the SVG
                        priority
                      />
    </section>
  );
}
