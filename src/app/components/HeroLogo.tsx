import Image from "next/image";

export default function HeroLogo() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <Image 
        src="/overby-wordmark-gradient.svg"
        alt="Overby Industries logo"
        width={360}
        height={100}
        priority
      />
      <p className="mt-4 text-gray-400 text-lg">
        Sustainable • Ethical • Zero-Waste Space Industry
      </p>
    </div>
  );
}