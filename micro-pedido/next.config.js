
const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "micro_pedido",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./Pedido": "./components/Pedidos.js",
        },
        shared: {},
      })
    );

    return config;
  },
};

module.exports = nextConfig;
