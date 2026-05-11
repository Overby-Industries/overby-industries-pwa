import Link from "next/link";
import Image from "next/image";

type SubNavLink = {
  label: string;
  href: string;
};

export default function SubNavbar({
  title,
  links,
}: {
  title: string;
  links: SubNavLink[];
}) {
  return (
    <div className="border-b border-gray-800 bg-gray-950">
      <div className="mx-auto max-w-7xl px-8 py-4">
        <div className="flex min-h-3/4 w-full flex-col items-center justify-center p-4 md:flex-row">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/overby-logo.svg"
            alt="Overby Industries logo"
            width={80} // set to the actual height of your SVG
            height={80}
            style={{
              filter: "brightness(0.3) sepia(1) saturate(3) hue-rotate(10deg)",
            }}
            // fill    // fills the parent dimensions
            // style={{ objectFit: "contain" }} // keep aspect ratio inside the box
            // layout="responsive"
            unoptimized // tells Next.js not to try to process the SVG
            priority
          />
        </Link>
      </div>

        <nav className="flex flex-wrap gap-6 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
