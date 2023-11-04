/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dliu4mfkb/image/upload/**",
      },
    ],
  },
};

module.exports = nextConfig;
