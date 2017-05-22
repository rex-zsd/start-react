const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const webpackBaseConfig = require('./webpack.config');
const config = require('./config')[process.env.NODE_ENV];

const webpackProdConfig = {
    plugins: [
        new webpack.DefinePlugin({
            CONFIG: JSON.stringify(config)
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            minChunks: Infinity
        }),
        new UglifyJSPlugin(),
        new CleanWebpackPlugin(['dist'], {
            root: __dirname, //  An absolute path for the root.
            verbose: true, //  Write logs to console.
            dry: false, // Do not delete anything, good for testing.
        }),
    ]
};

module.exports = merge(webpackBaseConfig, webpackProdConfig);
