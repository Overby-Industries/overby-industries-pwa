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
      <nav className="mb-4 flex w-full max-w-4xl flex-wrap items-center justify-center gap-6 px-4 text-lg font-medium text-white">
      <Link href="/aerospace" className="flex items-center justify-center px-3 py-2 hover:underline">
        <h2>Aerospace</h2>
      </Link>

      <Link href="/isru" className="flex items-center justify-center px-3 py-2 hover:underline">
        <h2>ISRU</h2>
      </Link>

      <Link href="/heavy-industry" className="flex items-center justify-center px-3 py-2 hover:underline">
        <h2>Heavy Industry</h2>
      </Link>

      <Link
          href="#contribute"
          className="rounded-lg bg-cyan-500 px-4 py-4 transition hover:bg-cyan-600"
        >
          Contact
        </Link>
    </nav>
    </div>
  );
}