var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

var webpackConfig = {
  target: 'web',
  devtool: 'source-map',
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
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.[hash:8].js',
    chunkFilename: '[name].chunk.[hash:8].js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components|lib)/,
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
      loader: 'style!css?modules&localIdentName=[name]__[local]___[hash:base64:5]&importLoaders=1!postcss!less',
    }, {
      test: /\.(jpe?g|gif|png|svg)$/i,
      loader: 'url-loader?limit=10000',
    }],
  },
  postcss: function() {
    return [autoprefixer({
      browsers: ['> 5%'],
    })];
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    alias: {
      util: path.resolve(__dirname, 'src/util/'),
      components: path.resolve(__dirname, 'src/components/'),
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        CLIENT: JSON.stringify(true),
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
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
