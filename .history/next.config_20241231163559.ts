import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['bit.ly'], // Add any other domains you need here
  },
};

export default nextConfig;
