/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'img.shields.io',
      },
      {
        protocol: 'https',
        hostname: 'docs.rs',
      },
      {
        protocol: 'https',
        hostname: 'crates.io',
      },
      {
        protocol: 'https',
        hostname: 'tokio.rs',
      },
      {
        protocol: 'https',
        hostname: 'axum.rs',
      },
      {
        protocol: 'https',
        hostname: 'serde.rs',
      },
    ],
  },
}

module.exports = nextConfig