/** @type {import('next').NextConfig} */
/* eslint-disable no-param-reassign */

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    prependData: "@import '~/core/styles/_mixins';",
  },
  experimental: { images: { layoutRaw: true } },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    config.module.rules
      .find(({ oneOf }) => !!oneOf)
      .oneOf.filter(({ use }) => JSON.stringify(use)?.includes('css-loader'))
      .reduce((acc, { use }) => acc.concat(use), [])
      .forEach(({ options }) => {
        if (options.modules) {
          options.modules.exportLocalsConvention = 'camelCase';
        }
      });

    return config;
  },
};

module.exports = nextConfig;
