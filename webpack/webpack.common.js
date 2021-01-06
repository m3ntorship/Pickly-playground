const path = require('path');
const loaders = require('./loaders');
const webpack = require('webpack'); // to access built-in plugins
const plugins = require('./plugins');

module.exports = {
  entry: ['/src/js/app.js'],
  module: {
    rules: [loaders.JSLoader, loaders.CSSLoader]
  },
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  plugins: [
    new webpack.ProgressPlugin(),
    plugins.MiniCssExtractPlugin,
    ...plugins.HtmlWebpackPlugins
  ]
};
