const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pages = require('./page');

const webpackConfig = {
    target: 'web',
    devtool: 'source-map',
    entry: {
        common: [
            'isomorphic-fetch',
            'core-js',
            'normalize.css',
            './src/index.jsx'
        ],
    },
    output: {
        path: `${__dirname}/dist`,
        filename: '[name].bundle.[chunkhash:8].js',
        chunkFilename: '[name].chunk.[chunkhash:8].js',
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                cacheDirectory: true
            }
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.less$/,
            loader: 'style-loader!css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!less-loader'
        }, {
            test: /\.(jpe?g|gif|png|svg)$/i,
            loader: 'url-loader',
            options: {
                limit: 2000,
                mimetype: 'image/png',
                name: '[name]-[hash].[ext]'
            }
        }]
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src/')
        },
        mainFields: ['jsnext:main', 'browser', 'main', 'module'],
        extensions: ['.js', '.jsx', '.json']
    },
    plugins: [
        new webpack.DefinePlugin({
            PAGES: JSON.stringify(pages)
        }),
        new webpack.ProvidePlugin({
            React: 'react'
        }),
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development',
            CLIENT: true,
            APP: false
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
