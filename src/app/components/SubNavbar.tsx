import Link from "next/link";

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
        <h2 className="mb-4 text-sm font-semibold tracking-widest text-cyan-400 uppercase">
          {title}
        </h2>

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
