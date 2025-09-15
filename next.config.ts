import type { NextConfig } from "next";

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  // Your existing Next.js config (if any)
});

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
