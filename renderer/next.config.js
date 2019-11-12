const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

module.exports = withCSS(withSass({
  webpack: (config) => {
    config.target = 'electron-renderer';

    config.module.rules = [
      ...(config.module.rules || []),
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: 'url-loader?limit=100000',
      },
    ];

    return config;
  },
}));
