import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    if (process.env.NODE_ENV !== "development") return [];
    return [
      {
        source: "/api/ask",
        destination: "http://localhost:8000/api/ask",
      },
    ];
  },
};

export default nextConfig;
