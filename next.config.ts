import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: "/join",
        destination:
          "https://docs.google.com/forms/d/e/1FAIpQLSfZgQmxw3Qz-ZGjCDxS4XqCyhsLlAf5Gt2_q2wXAs_ILO_nQw/viewform",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
