/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "product.hstatic.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "haanum.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
