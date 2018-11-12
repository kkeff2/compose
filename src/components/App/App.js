import React from 'react';

import ConnectedComposeTest from '../../containers/ConnectedComposeTest/ConnectedComposeTest';

const App = () => {
  return (
    <div className='app-container' data-test-id='app-container'>
      <ConnectedComposeTest />
    </div>
  );
};

export default App;
