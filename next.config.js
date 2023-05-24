/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ["mongoose"],
      },
      // "include": ["next-env.d.ts", "types/**/*.ts", "**/*.ts", "**/*.tsx"],
}

module.exports = nextConfig
