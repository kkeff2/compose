import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root/Root';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import createMiddleware from './middleware/';
const rootElement = document.getElementById('root');
const middleware = createMiddleware();
const store = configureStore(middleware);

ReactDOM.render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  rootElement
);

if (module.hot) {
  module.hot.accept('./containers/Root/Root', () => {
    const NextRoot = require('./containers/Root/Root').default;
    ReactDOM.render(
      <AppContainer>
        <NextRoot store={store} />
      </AppContainer>,
      rootElement
    );
  });
}
