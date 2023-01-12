module.exports = {
  experimental: {
    // appDir: true,
  },
  images: {
    domains: ["picsum.photos"],
    unoptimized: true
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.target = 'electron-renderer';
    }

    return config;
  },
};
