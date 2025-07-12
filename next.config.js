/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/schedule",
        destination:
          "https://cal.com/sebastian-papanicolau-9mw3mx/30min?overlayCalendar=true",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
