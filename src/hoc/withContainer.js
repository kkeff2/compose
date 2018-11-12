import { compose } from 'redux';
import withSomething from './withSomething';
import withServiceCall from './withServiceCall';
import withLoading from './withLoading';
import withResponse from './withResponse';

const withContainer = ({LoadingComponent, ResponseComponent}) => WrapperComponent => {
  return compose(
    withSomething,
    withServiceCall,
    withLoading(LoadingComponent),
    withResponse(ResponseComponent)
  )(WrapperComponent);
};

export default withContainer;
