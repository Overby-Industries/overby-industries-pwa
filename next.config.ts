// next.config.ts
import withPWA from "next-pwa";

// -------------------------------------------------
// 1️⃣  Plain Next.js config (will be wrapped later)
// -------------------------------------------------
const nextConfig = {
  reactStrictMode: true,

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  // -----------------------------------------------------------------
  // 2️⃣  Add webpack rule for SVGs using @svgr/webpack
  // -----------------------------------------------------------------
  webpack(config: any) {
    // SVGR loader: treat .svg files as React components when imported from .js/.ts/.jsx/.tsx files
    config.module.rules.push({
      test: /\.svg$/i,
      // Only apply the loader when the import is from a JS/TS file (not from CSS, etc.)
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    // Important: return the modified config object
    return config;
  },

  // -------------------------------------------------
  // 3️⃣  (Optional) If you still want to use next/image with SVGs,
  //      you can also enable the built-in image loader for SVGs:
  // -------------------------------------------------
  // images: {
  //   disableStaticImages: true, // <-- allows import of SVG as a component *and* as a static image
  // },

  // -------------------------------------------------
  // Any other Next.js config options can go here
};
// -------------------------------------------------
// 4️⃣  Wrap the config with PWA
// -------------------------------------------------
const withPWANextConfig = withPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development", // PWA disabled in dev
  register: true,
  skipWaiting: true,
});

// -------------------------------------------------
// 5️⃣  Export the final config (PWA + SVG support)
// -------------------------------------------------
export default withPWANextConfig(nextConfig);
