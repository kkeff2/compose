import { compose } from 'redux';
import withSomething from './withSomething';
import withServiceCall from './withServiceCall';

const withContainer = WrapperComponent => {
  return compose(
    withSomething,
    withServiceCall
  )(WrapperComponent);
};

export default withContainer;
