import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
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

const withMDX = createMDX({});

export default withMDX(nextConfig);
