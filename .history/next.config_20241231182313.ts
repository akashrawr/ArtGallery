import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['itmneflkaorqwzmgfhnr.supabase.co', 'upload.wikimedia.org'], // Corrected syntax
  },
};

export default nextConfig;
