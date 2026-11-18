const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack(config, options) {
    const { isServer } = options;

    config.plugins.push(
      new NextFederationPlugin({
        name: "container",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
        micro_cardapio: `micro_cardapio@http://localhost:3001/_next/static/${isServer ? "ssr" : "chunks"}/remoteEntry.js`,
        micro_pedido: `micro_pedido@http://localhost:3002/_next/static/${isServer ? "ssr" : "chunks"}/remoteEntry.js`
        },
        shared: {}
      })
    );

    return config;
  }
};

module.exports = nextConfig;