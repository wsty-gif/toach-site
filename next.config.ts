import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.undraw.co",
      },
      {
        protocol: "https",
        hostname:
          "42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com",
      },
    ],
  },
};

export default nextConfig;
