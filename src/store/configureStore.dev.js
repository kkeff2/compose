import {
  applyMiddleware,
  createStore,
  compose
} from 'redux';

import reducer from '../reducers';

const configureStore = function (middleware, initialState) {
  const enhancer = compose(applyMiddleware(...middleware));
  const store = createStore(
    reducer,
    initialState,
    enhancer
  );
  // return store;

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(require('../reducers').default);
    });
  }
  return store;
};

export default configureStore;
