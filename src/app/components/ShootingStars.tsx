"use client";

import { useEffect, useState } from "react";

interface Star {
  id: number;
  top: number;
  left: number;
  duration: number;
}

export default function ShootingStars() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      const top = Math.random() * 80; // vertical starting point
      const left = Math.random() * 20 - 20; // start slightly off-screen
      const duration = 2000 + Math.random() * 2000; // 2–4s streak

      setStars((prev) => [...prev, { id, top, left, duration }]);

      // remove after finished
      setTimeout(() => {
        setStars((prev) => prev.filter((s) => s.id !== id));
      }, duration);
    }, 3500); // new shooting star roughly every 3.5s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute h-1 w-1 rounded-full bg-white shadow-[0_0_6px_2px_rgba(255,255,255,0.8)]"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            animation: `shoot ${star.duration}ms linear forwards`,
          }}
        />
      ))}
    </div>
  );
}
