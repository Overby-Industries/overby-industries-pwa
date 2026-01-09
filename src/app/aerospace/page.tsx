import Image from "next/image";
import Link from "next/link";

export default function AerospacePage() {
  return (
    <section className="px-8 py-20 text-white">
      <h1 className="text-4xl font-bold mb-6">Aerospace</h1>
      <p className="max-w-2xl text-gray-300 m-4">
              Overby Industries presents Project Helga, a powered flight SSTO Heavy Lift Shuttle that takes off and lands on traditional runways, featuring a hypersonic double delta spline airfoil designed for optimal performance in the upper atmosphere. 
            </p>
            <Image
                        src="/helga.png"
                        alt="Project Helga spline airfoil design"
                        width={1600} // set to the actual height of your SVG
                        height={1600}
                        // fill    // fills the parent dimensions
                        // style={{ objectFit: "contain" }} // keep aspect ratio inside the box
                        // layout="responsive"
                        unoptimized // tells Next.js not to try to process the SVG
                        priority
                      />
            <p className="max-w-2xl text-gray-300 m-4">
              Project Helga is a blended wing lifting body design optimised for stable hypersonic flight, but also, designed for stable flight at slower flight envelopes such as landing approach or flying in the traffic pattern. 
              
            </p>
            <Image
                        src="/helga-top-view.png"
                        alt="Project Helga spline airfoil design"
                        width={1600} // set to the actual height of your SVG
                        height={1600}
                        // fill    // fills the parent dimensions
                        // style={{ objectFit: "contain" }} // keep aspect ratio inside the box
                        // layout="responsive"
                        unoptimized // tells Next.js not to try to process the SVG
                        priority
                      />
            <p className="max-w-2xl text-gray-300 m-4">
              The airframe features a sleek, aerodynamic shape with a focus on minimizing drag and maximizing lift. 
              
            </p>
            <Image
                        src="/helga-spline-foil-starboard-side-profile-view.png"
                        alt="Project Helga spline airfoil design"
                        width={1600} // set to the actual height of your SVG
                        height={1600}
                        // fill    // fills the parent dimensions
                        // style={{ objectFit: "contain" }} // keep aspect ratio inside the box
                        // layout="responsive"
                        unoptimized // tells Next.js not to try to process the SVG
                        priority
                      />
            <p className="max-w-2xl text-gray-300 m-4">
              The spline airfoil design allows for efficient flight at hypersonic speeds, making it ideal for rapid deployment of payloads to orbit.
              With a slight dihedral for stability and a slight canted sweep forward on the trailing edge for a stable high angle of attack re-entry profile, the airframe is optimized for both performance and safety.
            </p>
            <Image
                        src="/helga-rear.png"
                        alt="Project Helga spline airfoil design"
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
