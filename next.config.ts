import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/chat",
        destination: "http://20.212.103.178:8000/chat",
      },
    ];
  },
};

export default nextConfig;
