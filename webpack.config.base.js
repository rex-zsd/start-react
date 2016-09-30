const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const webpackConfig = {
  target: 'web',
  entry: {
    vendor: [
      'react',
      'react-dom',
      'redux',
      'react-redux',
      'react-router',
      'react-router-redux',
      'isomorphic-fetch', // fetch polyfill
      'babel-polyfill', // babel-polyfill
      'es5-shim',
    ],
    common: ['./src/index.jsx'],
  },
  devtool: 'source-map',
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].bundle.[hash:8].js',
    chunkFilename: '[name].chunk.[hash:8].js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: [
          'react', 'es2015', 'stage-0',
        ],
      },
    }, {
      test: /\.json$/,
      loader: 'json',
    }, {
      test: /\.css$/,
      include: /node_modules/,
      exclude: './src/',
      loader: 'style!css',
    }, {
      test: /\.less$/,
      loader: 'style!css?modules&localIdentName=[name]__[local]___[hash:base64:5]!less',
    }, {
      test: /\.(jpe?g|gif|png|svg)$/i,
      loader: 'url-loader?limit=10000',
    }],
  },
  postcss: function postcss() {
    return [autoprefixer({
      browsers: ['> 5%'],
    })];
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        CLIENT: JSON.stringify(true),
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: Infinity,
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
          // removeComments: true
      },
    }),
  ],
};

module.exports = webpackConfig;
