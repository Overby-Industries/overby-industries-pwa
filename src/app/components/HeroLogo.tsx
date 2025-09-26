import Image from 'next/image';

export default function HeroLogo() {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="flex md:flex-row flex-col items-center justify-center p-4 md:h-38 h-38 w-full">
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
        <h1 className="flex flex-col pt-2 w-full h-fit text-center text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
          Overby Industries
        </h1>
      </div>
      <p className="flex md:flex-row flex-col text-center justify-center text-gray-400 text-lg">
        Sustainable • Ethical • Zero-Waste Space Industry
      </p>
    </div>
  );
}
