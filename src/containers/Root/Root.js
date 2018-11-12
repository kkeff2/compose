import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import App from '../../components/App/App';

const propTypes = {
  store: PropTypes.object.isRequired
};

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <div className='root-container'>
        <App />
      </div>
    </Provider>
  );
};

Root.propTypes = propTypes;

export default Root;
