import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  layout: PropTypes.object.isRequired,
  something: PropTypes.string
};
const LoadingComponent = ({layout}) => (
  <div className={layout.className} />
)

LoadingComponent.propTypes = propTypes;

export default LoadingComponent;
