
const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "micro_cardapio",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./Cardapio": "./components/Cardapio.js",
        },
        shared: {},
      })
    );

    return config;
  },
};

module.exports = nextConfig;
