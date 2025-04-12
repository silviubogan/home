import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: { unoptimized: true },
  basePath: process.env.NODE_ENV === "production" ? '/home' : undefined,
};

export default nextConfig;
