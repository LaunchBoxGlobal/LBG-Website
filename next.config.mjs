/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cdn.dribbble.com",
      "assets.aceternity.com",
      "images.unsplash.com",
      "aceternity.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blogs0864.wordpress.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/services/mobile-app-development-service",
        destination: "/services/mobile-app-development",
        permanent: true,
      },
      {
        source: "/services/mobile-app-development-services",
        destination: "/services/mobile-app-development",
        permanent: true,
      },
      {
        source: "/services/web-app-development-service",
        destination: "/services/web-app-development",
        permanent: true,
      },
      {
        source: "/services/web-app-development-services",
        destination: "/services/web-app-development",
        permanent: true,
      },
      {
        source: "/services/custom-software-development-service",
        destination: "/services/custom-software-development",
        permanent: true,
      },
      {
        source: "/services/custom-software-development-services",
        destination: "/services/custom-software-development",
        permanent: true,
      },
      {
        source: "/services/ecommerce-development-service",
        destination: "/services/ecommerce-development",
        permanent: true,
      },
      {
        source: "/services/ecommerce-development-services",
        destination: "/services/ecommerce-development",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
