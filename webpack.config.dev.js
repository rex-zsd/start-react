const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const port = process.env.PORT;
const https = JSON.parse(process.env.HTTPS);
const protocol = https ? 'https:' : 'http:';
const webpackBaseConfig = require('./webpack.config');

const webpackDevConfig = {
    devServer: {
        historyApiFallback: true,
        https: https,
        hot: true,
        inline: true,
        progress: true,
        port: port,
        compress: false,
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        contentBase: 'http://localhost:' + port,
        quiet: false,
        noInfo: false,
        lazy: false,
        publicPath: webpackBaseConfig.output.publicPath || '/'
    },
    devtool: 'source-map',
    entry: {
        common: [
            'webpack/hot/dev-server',
            `webpack-dev-server/client?${protocol}//localhost:${port}`
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({
            url: `${protocol}//localhost:${port}`
        })
    ]
};

module.exports = merge(webpackBaseConfig, webpackDevConfig);
