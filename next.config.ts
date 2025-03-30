import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/chat",
        destination: "http://40.119.246.237:8000/chat",
      },
    ];
  },
};

export default nextConfig;
