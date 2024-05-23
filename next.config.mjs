/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "github.com",
        protocol: "https",
        port: "",
        pathname: "/*.*",
      },
    ],
  },
};

export default nextConfig;
