import Image from "next/image";

export default function HeroLogo() {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="flex h-38 w-full flex-col items-center justify-center p-4 md:h-38 md:flex-row">
        <Image
          src="/overby-logo-neon.svg"
          alt="Overby Industries logo"
          width={100} // set to the actual height of your SVG
          height={100}
          // fill    // fills the parent dimensions
          // style={{ objectFit: "contain" }} // keep aspect ratio inside the box
          // layout="responsive"
          unoptimized // tells Next.js not to try to process the SVG
          priority
        />
        <h1 className="flex h-fit w-full flex-col bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text pt-2 text-center text-5xl font-extrabold text-transparent md:text-7xl">
          Overby Industries
        </h1>
      </div>
      <p className="flex flex-col justify-center text-center text-lg text-gray-400 md:flex-row">
        Sustainable • Ethical • Zero-Waste Space Industry
      </p>
    </div>
  );
}
