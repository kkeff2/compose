import { compose } from 'redux';
import withSomething from './withSomething';
import withServiceCall from './withServiceCall';
import withLoading from './withLoading';

const getComponent = ({LoadingComponent}) => WrapperComponent => {
  return compose(
    withSomething,
    withServiceCall,
    withLoading(LoadingComponent)
  )(WrapperComponent);
};

export default withContainer;
