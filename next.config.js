/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better error handling
  reactStrictMode: true,

  // Optimize images (Cloudflare Pages compatible)
  images: {
    unoptimized: true,
  },

  // Output configuration for Cloudflare Pages
  output: 'export',

  // Disable server-side features that don't work with static export
  trailingSlash: true,

  // Environment variables available to the browser
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    NEXT_PUBLIC_PRODUCT_NAME: process.env.NEXT_PUBLIC_PRODUCT_NAME || 'Pure Herbal Tooth Powder',
  },

  // Webpack configuration
  webpack: (config, { isServer }) => {
    // Fixes for Cloudflare Workers compatibility
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
      };
    }

    return config;
  },
};

module.exports = nextConfig;
