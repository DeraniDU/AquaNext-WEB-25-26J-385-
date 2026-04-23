import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return [
      {
        source: "/research",
        destination: "/#project-scope",
        permanent: false,
      },
      {
        source: "/research/:path*",
        destination: "/#project-scope",
        permanent: false,
      },
      {
        source: "/about",
        destination: "/#about",
        permanent: false,
      },
      {
        source: "/contact",
        destination: "/#contact",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
