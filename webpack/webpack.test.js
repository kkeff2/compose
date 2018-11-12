module.exports = require('./webpack.base') ({
  devtool: 'inline-source-map',
  externals: {
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  plugins: []
});
