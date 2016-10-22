/* eslint-disable */
var webpack = require('webpack');
var merge = require('webpack-merge');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var webpackBaseConfig = require('./webpack.config.base');

var webpackProdConfig = {
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
      compress: {
        warnings: false,
      },
    }),
    new CleanWebpackPlugin(['dist'], {
      root: __dirname, //  An absolute path for the root.
      verbose: true, //  Write logs to console.
      dry: false, // Do not delete anything, good for testing.
    }),
  ]
};

module.exports = merge(webpackBaseConfig, webpackProdConfig);
