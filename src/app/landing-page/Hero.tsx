// components/HeroLogo.tsx
// import Logo from '@/public/svg/overby-wordmark-gradient.svg';
import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-4 text-center">
      <div className="flex space-x-4">
        <a
          href="#contribute"
          className="rounded-lg bg-cyan-500 px-4 py-4 transition hover:bg-cyan-600"
        >
          Contribute Resources
        </a>
        <a
          href="#vision"
          className="rounded-lg border border-cyan-400 px-4 py-4 transition hover:bg-cyan-400/10"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
