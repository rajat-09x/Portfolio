// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /** Enable static export: `next export` will write to /out */
  output: 'export',

  /** next/image doesn't run the optimizer in export mode unless unoptimized=true */
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        pathname: '/**',
      },
      // add more hostnames if you load remote images
    ],
  },

  eslint: {
    // Allow build to pass even with ESLint warnings/errors (optional)
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
