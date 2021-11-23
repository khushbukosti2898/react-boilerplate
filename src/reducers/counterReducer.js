import { DECREASE, INCREASE, RESET } from '../actions/actionTypes';

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  // eslint-disable-next-line no-unused-vars
  const { type, payload } = action;
  switch (type) {
    case INCREASE:
      return { ...state, count: state.count + payload };
    case DECREASE:
      return { ...state, count: state.count - payload };
    case RESET:
      return { ...state, count: payload };
    default:
      return state;
  }
};

export default counterReducer;
