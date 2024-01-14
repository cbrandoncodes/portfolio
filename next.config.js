/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/linkedin",
        destination: "https://linkedin.com/in/brandon-chikezie",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
