const webpack = require('webpack');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const path = require('path');

module.exports = require('./webpack.base') ({
  devtool: 'source-map',
  entry: {
    'index': [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      './src/index.js',
      './src/style/index.scss'
    ]
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new StyleLintPlugin({
      failOnError: false,
      syntax: 'scss'
    })
  ]
});
