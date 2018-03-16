const url = require('url');
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const webpackBaseConfig = require('./webpack.config');

const port = process.env.PORT || 9000;
const https = JSON.parse(process.env.HTTPS);

const config = require('./config')[process.env.NODE_ENV];

const urlObject = url.parse(config.url, true, true);
urlObject.protocol = urlObject.protocol || 'http:';
config.url = '/api';

const webpackDevConfig = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/',
  },
  devServer: {
    hot: true,
    inline: true,
    historyApiFallback: true,
    https,
    host: '0.0.0.0',
    disableHostCheck: true,
    port,
    compress: true,
    contentBase: webpackBaseConfig.output.path,
    publicPath: webpackBaseConfig.output.publicPath,
    proxy: {
      '/api': {
        target: `${urlObject.protocol}//${urlObject.host}`,
        pathRewrite: { '^/api': urlObject.pathname },
        secure: false,
        changeOrigin: true,
      },
    },
    open: true,
    openPage: '',
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.DefinePlugin({ CONFIG: JSON.stringify(config) })],
};

module.exports = merge(webpackBaseConfig, webpackDevConfig);
