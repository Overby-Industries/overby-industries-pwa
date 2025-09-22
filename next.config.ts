import withPWA from 'next-pwa';

// Wrap PWA config
const withPWANextConfig = withPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development', // PWA disabled in dev
  register: true,
  skipWaiting: true,
});

// Define your raw Next.js config (no explicit `NextConfig` typing!)
const nextConfig = {
  reactStrictMode: true,
  // ... any other options
};

// Export final config with PWA applied
export default withPWANextConfig(nextConfig);