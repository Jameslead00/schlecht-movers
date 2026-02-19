import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // AWS Amplify supports Next.js server-side rendering natively
  // No static export needed
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
