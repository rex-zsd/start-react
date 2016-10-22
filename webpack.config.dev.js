/* eslint-disable */
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var webpack = require('webpack');
var merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.config.base');

var port = 9002;
var https = false;
var protocol = https ? 'https:' : 'http:';

var webpackDevConfig = {
  devServer: {
    historyApiFallback: true,
    https: https,
    hot: true,
    inline: true,
    progress: true,
    contentBase: './src',
    port: port,
    publicPath: '/',
    compress: true,
  },
  entry: {
    common: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:' + port,
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({
      url: protocol + '//localhost:' + port,
    })
  ]
}

module.exports = merge(webpackBaseConfig, webpackDevConfig);
