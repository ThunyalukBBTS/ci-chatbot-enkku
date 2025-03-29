import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/chat",
        destination: "http://20.24.166.116:8000/chat",
      },
    ];
  },
};

export default nextConfig;
