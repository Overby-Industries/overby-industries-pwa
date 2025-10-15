import ShootingStars from './ShootingStars';

export default function Starfield() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 bg-black">
      {/* Layer 1: tiny far stars */}
      <div className="stars animate-twinkle"></div>
      {/* Layer 2: medium stars */}
      <div className="stars2 animate-twinkle delay-2000"></div>
      {/* Layer 3: larger closer stars */}
      <div className="stars3 animate-twinkle delay-4000"></div>
      {/* Shooting stars container */}
      <div className="shooting-stars"></div>
      <ShootingStars />
    </div>
  );
}
