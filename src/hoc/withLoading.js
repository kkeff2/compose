/* eslint-disable */
import React from 'react';

import LoadingComponent from '../components/utils/LoadingComponent';

const isLoading = props => {
  return props.isLoading ||
    (!props.response && !props.errorMessage);
}

const withLoading = LoadingComponent => WrapperComponent => props => {
  
  return <WrapperComponent
    LoadingComponent={isLoading(props) ? <LoadingComponent layout={props.layout.loadingComponent} /> : null}
    {...props}/>
};

export default withLoading;
