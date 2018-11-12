/* eslint-disable */
import React from 'react';

const withServiceCall = WrapperComponent => {
  return class extends React.Component {
    componentDidMount () {
      this.props.onCallService(this.props);
    }
    render () {
      return <WrapperComponent {...this.props} />;
    }
  }
};

export default withServiceCall;
