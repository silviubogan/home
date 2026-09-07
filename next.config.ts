import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: { unoptimized: true },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
  // allowedDevOrigins: ["i.imgur.com"], // not working in Chrome, in FF not
  // needed
};

export default nextConfig;
