/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    // Keep Turbopack root on this project to avoid parent lockfile ambiguity.
    root: process.cwd(),
  },
};

export default nextConfig;
