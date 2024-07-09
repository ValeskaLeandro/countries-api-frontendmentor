/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  }, images: {
    remotePatterns: [{
      hostname: "flagcdn.com"
    }]
  }
};

export default nextConfig;
