/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "product.hstatic.net",
        port: "",
        pathname: "/200000642007/product/**",
      },
    ],
  },
};

export default nextConfig;
