import { connect } from 'react-redux';
import { compose } from 'redux';

import { callFakeServer } from '../../actions/common';
import ComposeTest from '../../components/ComposeTest/ComposeTest';
// import withSomething from '../../hoc/withSomething';
// import withServiceCall from '../../hoc/withServiceCall';
import withContainer from '../../hoc/withContainer';

const mapStateToProps = state => ({
  layout: state.common.layout.testLayout,
  isLoading: state.common.isLoading,
  response: state.common.response,
  errorMessage: state.common.errorMessage
});

const mapDispatchToProps = dispatch => ({
  onCallService: props =>
    dispatch(callFakeServer(props))
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withContainer
)(ComposeTest);
