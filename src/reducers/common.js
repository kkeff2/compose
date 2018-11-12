import {
  ASYNC_CALL_START,
  ASYNC_CALL_OK,
  ASYNC_CALL_ERROR
} from '../constants/actionTypes';
import layout from '../constants/layout';

const initialState = {
  isLoading: false,
  response: null,
  errorMessage: null,
  layout: layout
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ASYNC_CALL_START: {
      return {
        ...state,
        isLoading: true,
        response: null,
        errorMessage: null
      };
    }
    case ASYNC_CALL_OK: {
      debugger;
      return {
        ...state,
        isLoading: false,
        response: action.test,
        errorMessage: null
      };
    }
    case ASYNC_CALL_ERROR: {
      return {
        ...state,
        isLoading: false,
        response: null,
        errorMessage: action.error
      };
    }
    default: {
      return state;
    }
  }
};
