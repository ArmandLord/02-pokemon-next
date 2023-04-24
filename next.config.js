/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // para acceder a cualquier imagen de la api pokemon
    domains: ["raw.githubusercontent.com"],
  },
};

module.exports = nextConfig;
