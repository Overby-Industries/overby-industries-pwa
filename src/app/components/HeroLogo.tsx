import Image from "next/image";

export default function HeroLogo() {
  return (
    <div className="flex flex-col my-4 w-full min-h-full items-center justify-center">
      <div className="flex flex-col md:flex-row w-full min-h-3/4 items-center justify-center p-4">
        <Image
          src="/overby-logo-neon.svg"
          alt="Overby Industries logo"
          width={80} // set to the actual height of your SVG
          height={80}
          // fill    // fills the parent dimensions
          // style={{ objectFit: "contain" }} // keep aspect ratio inside the box
          // layout="responsive"
          unoptimized // tells Next.js not to try to process the SVG
          priority
        />
        <h1 className="flex h-38 w-fit flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-center text-5xl md:text-7xl font-extrabold text-transparent">
          Overby Industries
        </h1>
      </div>
      <p className="flex flex-col justify-center text-center text-lg text-gray-400 md:flex-row">
        Aerospace • ISRU • Heavy Industry
      </p>
    </div>
  );
}
