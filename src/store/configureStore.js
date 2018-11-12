import configureStoreProd from './configureStore.prod';
import configureStoreDev from './configureStore.dev';

module.exports =
  process.env.NODE_ENV === 'development'
    ? configureStoreDev : configureStoreProd;
