/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['mongoose', 'bcrypt'],
  },
};

module.exports = nextConfig;
