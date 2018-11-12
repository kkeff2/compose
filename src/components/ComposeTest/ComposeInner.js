import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  response: PropTypes.array.isRequired
};

const ComposeInner = ({response: agents}) => {
  debugger;
  return (
    <div>
      {agents.map((a, i) => (<div key={i}>{a}</div>))}
    </div>
  );
};

ComposeInner.propTypes = propTypes;

export default ComposeInner;
