import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * The article lives at /insights/<slug>, so visitors and crawlers will trim
   * the path to /insights. There is no index page there yet — with one article
   * the brief on /research is the entry point — so send them to it rather than
   * to a 404.
   */
  async redirects() {
    return [
      {
        source: "/insights",
        destination: "/research#current-outlook",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
