import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   /* config options here */
   output: "export",
   images: {
      unoptimized: true,
   },
   experimental: {
      mdxRs: true,
   },
   transpilePackages: ["next-mdx-remote"],
};

export default nextConfig;
