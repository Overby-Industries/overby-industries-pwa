import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="my-4 flex min-h-full w-full flex-col items-center justify-center">
      <div className="flex min-h-3/4 w-full flex-col items-center justify-center p-4 md:flex-row">
        <Link href="/" className="flex items-center gap-3">
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
          </Link>
          <h1 className="flex h-38 w-fit flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-center text-5xl font-extrabold text-transparent md:text-7xl">
            Overby Industries
          </h1>
      </div>
      <p className="flex flex-col justify-center text-center text-lg text-gray-400 md:flex-row">
        Aerospace • ISRU • Heavy Industry
      </p>
    </div>
  );
}