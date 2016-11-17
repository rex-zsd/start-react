const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const babelQuery = JSON.parse(fs.readFileSync('./.babelrc'));
const path = require('path');
const pages = require('./page');
console.log(pages);
const webpackConfig = {
    target: 'web',
    entry: {
        common: ['./src/index.jsx'],
        vendor: [
            'react',
            'react-dom',
            'redux',
            'react-redux',
            'react-router',
            'react-router-redux',
            'isomorphic-fetch',
            'babel-polyfill',
            'es5-shim',
            'normalize.css'
        ]
    },
    output: {
        path: `${__dirname}/dist`,
        filename: '[name].bundle.[hash:8].js',
        chunkFilename: '[name].chunk.[hash:8].js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: babelQuery
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.css$/,
            include: /node_modules/,
            exclude: './src/',
            loader: 'style!css!postcss'
        }, {
            test: /\.less$/,
            loader: 'style!css?modules&localIdentName=[name]__[local]___[hash:base64:5]!postcss!less'
        }, {
            test: /\.(jpe?g|gif|png|svg)$/i,
            loader: 'url-loader?limit=10000'
        }]
    },
    postcss: function() {
        return [autoprefixer({
            browsers: ['> 5%']
        })];
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                CLIENT: JSON.stringify(true),
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            },
            PAGES: JSON.stringify(pages)
        }),
        new HtmlWebpackPlugin({
            title: 'start-react',
            inject: true,
            hash: true,
            template: './src/index.html',
            favicon: './src/static/favicon.ico',
            minify: {
                collapseWhitespace: true,
                collapseInlineTagWhitespace: true,
                minifyCSS: true,
                minifyJS: true,
            }
        })
    ]
};

module.exports = webpackConfig;
