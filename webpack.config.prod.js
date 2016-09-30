var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var webpackConfig = require('./webpack.config.base');

webpackConfig.plugins = webpackConfig.plugins.concat([
  new webpack.optimize.UglifyJsPlugin({
    output: {
      comments: false
    },
    compress: {
      warnings: false
    }
  }),
  new CleanWebpackPlugin(['dist'], {
    root: __dirname, //  An absolute path for the root.
    verbose: true, //  Write logs to console.
    dry: false //  Do not delete anything, good for testing.
  })
]);

module.exports = webpackConfig;
