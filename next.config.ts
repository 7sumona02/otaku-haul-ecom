import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'i.pinimg.com',
      },
      {
        hostname: 'cdn.pixabay.com',
      },
    ],
  },
};

export default nextConfig;
