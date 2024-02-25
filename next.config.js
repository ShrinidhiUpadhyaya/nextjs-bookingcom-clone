/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/stays",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
