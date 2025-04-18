/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  // Note: 'export' output mode can conflict with i18n functionality that requires server components
  // If you encounter issues, you might need to remove this and use 'standalone' output
  // output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  i18n,
};

module.exports = nextConfig;
