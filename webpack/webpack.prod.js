const webpack = require('webpack');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = require('./webpack.base') ({
  devtool: 'eval',
  entry: {
    'index': [
      './src/index.js',
      './src/style/index.scss'
    ]
  },
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].chunk.[hash].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      output: {
        comments: false
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new StyleLintPlugin({
      failOnError: true,
      syntax: "scss"
    })
  ]
});
