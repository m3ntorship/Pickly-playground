const path = require('path');
const glob = require('glob');
const _MiniCssExtractPlugin = require('mini-css-extract-plugin');
const _HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
  filename: '[name].bundle.css',
  chunkFilename: '[id].css'
});

const HtmlWebpackPlugins = glob.sync('public/*.html').map(
  htmlFile =>
    new _HtmlWebpackPlugin({
      template: htmlFile,
      filename: path.basename(htmlFile)
    })
);
module.exports = {
  MiniCssExtractPlugin: MiniCssExtractPlugin,
  HtmlWebpackPlugins: HtmlWebpackPlugins
};
