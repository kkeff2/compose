/* eslint-disable */
import React from 'react';

const hasResponse = props => {
  return !!props.response && !!props.response.length;
}

const withResponse = ResponseComponent => WrapperComponent => props => (
  <WrapperComponent
    ResponseComponent={hasResponse(props)
      ? <ResponseComponent {...props} />
      : null}
    {...props}
  />
);

export default withResponse;
