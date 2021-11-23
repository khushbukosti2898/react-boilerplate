import { ARTICLELIST } from '../actions/actionTypes';

const initialState = {
  articleList: [],
};

const articleReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ARTICLELIST:
      return { ...state, articleList: payload };
    default:
      return state;
  }
};

export default articleReducer;
