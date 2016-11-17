/* eslint-disable */
var webpack = require('webpack');
var merge = require('webpack-merge');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var webpackBaseConfig = require('./webpack.config');

var webpackProdConfig = {
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            minChunks: Infinity
        }),
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
