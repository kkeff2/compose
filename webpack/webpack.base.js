const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = options => ({
  entry: options.entry,
  devtool: options.devtool,
  output: Object.assign({
    path: path.join(__dirname, '../dist'),
    publicPath: '/'
  }, options.output),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: { sourceMap: true }
            },
            'resolve-url-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ],
          fallback: 'style-loader'
        })
      },
      {test: /\.json$/, loader: 'json-loader'},
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use : [
          {
            loader: 'url-loader',
            query: {
              limit: 10000,
              name: 'fonts/[name].[hash].[ext]'
            }
          }

        ]
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            query: {
              limit: 64000,
              name: 'images/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  externals: options.externals,
  plugins: options.plugins.concat([
    new ExtractTextPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      favicon: 'favicon.ico',
      template: 'src/index.html',
      filename: 'index.html'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    autoprefixer
  ]),
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules']
  }
  // devServer: options.devServer
});
