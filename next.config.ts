import type { NextConfig } from "next";
import { resolve } from "path";

const nextConfig: NextConfig = {
  turbopack: {
    // Explicitly set the workspace root for Turbopack to avoid warnings when multiple lockfiles exist.
    root: resolve(__dirname),
  },
};

export default nextConfig;
