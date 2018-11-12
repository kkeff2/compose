/* eslint-disable */
import React from 'react';

const withServiceCall = WrapperComponent => {
  return class extends React.Component {
    componentDidMount () {
      console.log('IS IT SOMETHING???');
      console.log(this.props.something);
      this.props.onCallService(this.props);
    }
    render () {
      return <WrapperComponent {...this.props} />;
    }
  }
  // return <WrapperComponent something='sam thang' {...props} />;
};

export default withServiceCall;
