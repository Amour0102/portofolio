import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow the local network to access dev HMR resources (CSS/JS hot reload)
  // so the site renders correctly when opened from another PC on the same network.
  allowedDevOrigins: ["192.168.1.132", "192.168.1.*"],

  images: {
    // Serve AVIF then WebP where supported — preserves PNG alpha (device frames)
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
};

export default nextConfig;
