/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pspgmovh8kcwrxa3.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
