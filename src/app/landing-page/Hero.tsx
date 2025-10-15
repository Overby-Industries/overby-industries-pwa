// components/HeroLogo.tsx
// import Logo from '@/public/svg/overby-wordmark-gradient.svg';
import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-4 px-4">
      <div className="flex space-x-4">
        <a
          href="#contribute"
          className="px-4 py-4 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition"
        >
          Contribute Resources
        </a>
        <a
          href="#vision"
          className="px-4 py-4 rounded-lg border border-cyan-400 hover:bg-cyan-400/10 transition"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
