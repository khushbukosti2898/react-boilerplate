import { ARTICLELIST, LOADING } from '../actions/actionTypes';

const initialState = {
  articleList: [],
  loading: false,
};

const articleReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ARTICLELIST:
      return { ...state, articleList: payload };
    case LOADING:
      return { ...state, loading: payload };
    default:
      return state;
  }
};

export default articleReducer;
