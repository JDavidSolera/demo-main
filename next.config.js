const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const { URL_APP_ORDER, URL_APP_PRODUCT } = process.env
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['catalogo.movistar.com.pe']
  },
  webpack: (config, options) => {
    config.experiments = { topLevelAwait: true };
    const { isServer } = options
    config.plugins.push(
      new NextFederationPlugin({
        name: 'app_main',
        filename: 'static/chunks/app-main.js',
        remotes: {
          'app-product': `app_product@${URL_APP_PRODUCT}/_next/static/${isServer ? 'ssr' : 'chunks'}/app-product.js`,
          'app-order': `app_order@${URL_APP_ORDER}/_next/static/${isServer ? 'ssr' : 'chunks'}/app-order.js`,
        },
        exposes: {
        },
        extraOptions: {
          exposePages: true
        }
      }),
    )

    return config
  },
}

module.exports = nextConfig
