import Express from 'express';
import webpack from 'webpack';
import webpackConfig from './webpack.dev';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const path = require('path');
const cors = require('cors')
const compiler = webpack(webpackConfig);
const host = process.env.HOST || 'localhost';
const port = (Number(process.env.PORT)) || 3000;

const serverOptions = {
    contentBase: 'http://' + host + ':' + port,
    quiet: true,
    noInfo: true,
    historyApiFallback: true,
    hot: true,
    inline: true,
    lazy: false,
    publicPath: webpackConfig.output.publicPath,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
    stats: {colors: true}
};

const app = new Express();
app.use(cors())
app.use(webpackDevMiddleware(compiler, serverOptions));
app.use(webpackHotMiddleware(compiler));

app.get('/', function (req, res) {
  res.render('index', {});
});

app.listen(port, function onAppListening(err) {
    if (err) {
        console.error(err);
    } else {
        console.info('==> Webpack development server listening on port %s', port);
    }
});
