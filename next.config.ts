import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/chat",
        destination: "http://23.98.127.113:8000/chat",
      },
    ];
  },
};

export default nextConfig;
