var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var webpackConfig = require('./webpack.config.base');
var webpack = require('webpack');

var port = 9002;

webpackConfig.devServer = {
  historyApiFallback: true,
  https: false,
  hot: true,
  inline: true,
  progress: true,
  contentBase: './src',
  port: port,
  publicPath: '/',
  compress: true,
};

webpackConfig.entry.common = webpackConfig.entry.common.concat([
  'webpack/hot/dev-server',
  'webpack-dev-server/client?http://localhost:' + port,
]);

var protocol = webpackConfig.devServer.https ? 'https:' : 'http:';

webpackConfig.plugins = webpackConfig.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new OpenBrowserPlugin({
    url: protocol + '//localhost:' + port,
  }),
]);


module.exports = webpackConfig;
