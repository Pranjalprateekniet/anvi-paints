import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Serve modern formats — Next.js auto-converts PNG/JPG to WebP/AVIF
    formats: ['image/avif', 'image/webp'],

    // Responsive breakpoints aligned with Tailwind sm/md/lg/xl/2xl
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Minimum cache TTL — 7 days for stable product images
    minimumCacheTTL: 60 * 60 * 24 * 7,
  },
};

export default nextConfig;
