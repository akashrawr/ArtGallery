import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['itmneflkaorqwzmgfhnr.supabase.co'], ['upload.wikimedia.org'] // Add any other domains you need here
  },
};

export default nextConfig;
