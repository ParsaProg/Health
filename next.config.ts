import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      {
        hostname: "**",
        protocol: "http",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
