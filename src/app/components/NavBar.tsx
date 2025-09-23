import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-950">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/public/icons/android-chrome-192x192.png"
          alt="Overby Industries logo"
          width={80}
          height={80}
          priority={true}
        />
        <span className="text-xl font-bold text-cyan-400">Overby Industries</span>
      </Link>
    </nav>
  );
}