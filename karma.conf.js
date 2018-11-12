var webpackConfig = require('./webpack/webpack.test');

var isJenkinsBuild = process.env.NODE_ENV === 'test:ci';

module.exports = function (config) {
  config.set({

    frameworks: ['jasmine'],

    singleRun: isJenkinsBuild,

    files: [
      'node_modules/babel-polyfill/dist/polyfill.min.js',
      'tests.webpack.js'
    ],

    preprocessors: {
      'src/**/*.js': ['coverage'],
      'tests.webpack.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    plugins: [
      require('karma-coverage'),
      require('karma-webpack'),
      require('karma-jasmine'),
      require('karma-phantomjs-launcher'),
      require('karma-sourcemap-loader'),
      require('karma-spec-reporter')
    ],

    webpackMiddleware: {
      noInfo: true
    },

    coverageReporter: {
      dir: 'coverage',
      reporters: [
        isJenkinsBuild
        ? { type: 'lcov', subdir: 'report-lcov' }
        : { type: 'html', subdir: 'report-html' }
      ]
    },

    reporters: ['spec', 'dots', 'progress', 'coverage'],

    autoWatch: true,

    browsers: ['PhantomJS']

  });
};
