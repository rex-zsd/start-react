const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const webpackConfig = require('./webpack.config.base');
const webpack = require('webpack');

const port = 9002;

webpackConfig.devServer = {
  historyApiFallback: true,
  https: false,
  hot: true,
  inline: true,
  progress: true,
  contentBase: './src',
  port,
  publicPath: '/',
  compress: true,
};

webpackConfig.entry.common = webpackConfig.entry.common.concat([
  'webpack/hot/dev-server',
  `webpack-dev-server/client?http://localhost:${port}`,
]);

const protocol = webpackConfig.devServer.https ? 'https:' : 'http:';

webpackConfig.plugins = webpackConfig.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new OpenBrowserPlugin({
    url: `${protocol}//localhost:${port}`,
  }),
]);


module.exports = webpackConfig;
