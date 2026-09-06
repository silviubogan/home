import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: { unoptimized: true },
  basePath: process.env.NODE_ENV === "production" ? "/home" : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH:
      process.env.NODE_ENV === "production" ? "/home" : "",
  },
  // allowedDevOrigins: ["i.imgur.com"], // not working in Chrome, in FF not
  // needed
};

export default nextConfig;
