/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '://cloudinary.com',
        pathname: '/**', // Allows all paths from Cloudinary
      },
    ],
  },
};

export default nextConfig;
