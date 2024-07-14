/** @type {import('next').NextConfig} */
const nextConfig = {
    ignoreBuildErrors: true,

    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "api.timbu.cloud",
            port: "",
          },
          {
            protocol: "https",
            hostname: "cdni.iconscout.com",
            port: "",
          },
        ],
      },
};

export default nextConfig;
