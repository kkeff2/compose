import {
  compose,
  createStore,
  applyMiddleware
} from 'redux';
import reducer from '../reducers';

const configureStore = function (middleware, initialState) {
  const enhancer = compose(applyMiddleware(...middleware));
  const store = createStore(
    reducer,
    initialState,
    enhancer
  );
  return store;
};

export default configureStore;
