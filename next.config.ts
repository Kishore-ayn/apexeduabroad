import type { NextConfig } from "next";

// Set by `npm run build:static` to produce a static export for Hostinger
// shared hosting, which has no Node process to run the /api/contact route
// or Next's image optimizer. Regular `npm run build` (Vercel) is unaffected.
const isStaticExport = process.env.STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  ...(isStaticExport && {
    output: "export",
    trailingSlash: true,
    images: { unoptimized: true },
  }),
};

export default nextConfig;
