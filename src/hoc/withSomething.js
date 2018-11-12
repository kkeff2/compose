import React from 'react';

const withSomething = WrapperComponent => props => {
  return <WrapperComponent something='sam thang' {...props} />;
};

export default withSomething;
