/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  strictMode: true,
  images: {
    domains: ["i.pravatar.cc", "picsum.photos"],
    deviceSizes: [640, 750, 828, 1024, 1080, 1200, 1920, 2048, 3840],
  },
};

module.exports = nextConfig;
