/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      // Rewrite everything to `pages/index`
      {
        source: '/:any*',
        destination: '/',
      },
    ];
  },
};

module.exports = nextConfig;
