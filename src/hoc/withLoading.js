/* eslint-disable */
import React from 'react';

const isLoading = props => {
  return props.isLoading ||
    (!props.response && !props.errorMessage);
}

const withLoading = (LoadingComponent) => WrapperComponent => props => (
  <WrapperComponent
    LoadingComponent={isLoading(props)
      ? <LoadingComponent layout={props.layout.loadingComponent} />
      : null}
    {...props}
  />
);

export default withLoading;
