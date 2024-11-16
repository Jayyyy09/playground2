/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    '@xw3/maki',
    '@xw3/maki-quest-hooks'
  ],
  reactStrictMode: true,
};

module.exports = nextConfig