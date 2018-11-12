import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  LoadingComponent: PropTypes.element,
  ResponseComponent: PropTypes.element,
  isLoading: PropTypes.bool.isRequired,
  layout: PropTypes.object.isRequired,
  something: PropTypes.string
};

const ComposeTest = ({layout, something, isLoading, LoadingComponent, ResponseComponent}) => {
  console.log(LoadingComponent);
  console.log(isLoading);
  return (
    <div>
      <div className='panel-top'>
        {layout.common.header}
      </div>
      <div className='compose-test'>
        <div>
          {something}
        </div>
        <div>
          {LoadingComponent}
          {ResponseComponent}
        </div>
      </div>
    </div>
  );
};

ComposeTest.propTypes = propTypes;

export default ComposeTest;
