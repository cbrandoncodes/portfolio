/** @type {import('next').NextConfig} */

const regexEqual = (x, y) =>
  x instanceof RegExp &&
  y instanceof RegExp &&
  x.source === y.source &&
  x.global === y.global &&
  x.ignoreCase === y.ignoreCase &&
  x.multiline === y.multiline;

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
