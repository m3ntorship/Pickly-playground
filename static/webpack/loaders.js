const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssColorMod = require('postcss-color-mod-function');

const JSLoader = {
  test: /\.js$/i,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env']
    }
  }
};

const CSSLoader = {
  test: /\.css$/i,
  exclude: /node_modules/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: path.resolve(__dirname, '../dist/css/')
      }
    },
    {
      loader: 'css-loader',
      options: { importLoaders: 1 }
    },
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          config: path.resolve(__dirname, 'postcss.config.js'),
          plugins: [postcssColorMod()]
        }
      }
    }
  ]
};

//...
module.exports = {
  JSLoader: JSLoader,
  CSSLoader: CSSLoader
};
