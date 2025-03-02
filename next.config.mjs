/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Ignora gli errori di ESLint durante il build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignora gli errori di TypeScript durante il build
    ignoreBuildErrors: true,
  },
};

export default nextConfig; 