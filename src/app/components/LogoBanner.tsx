import Image from "next/image";

export default function LogoBanner() {
  return (
    <div className="flex flex-col items-center">
      <Image
        src="../public/svg/overby-logo-gradient.svg"
        alt="Overby Industries Logo"
        width={80}
        height={80}
        priority
      />
      {/* <h1 className="text-3xl font-bold mt-4 text-cyan-400">Overby Industries</h1> */}
    </div>
  );
}
