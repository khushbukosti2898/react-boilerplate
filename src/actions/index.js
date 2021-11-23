import axios from 'axios';
import { ARTICLELIST, DECREASE, INCREASE, RESET, LOADING } from './actionTypes';

export const increaseCount = (payload) => ({
  type: INCREASE,
  payload,
});

export const decreaseCount = (payload) => ({
  type: DECREASE,
  payload,
});

export const resetCounter = () => ({
  type: RESET,
  payload: 0,
});

export const setArticleDetails = (data) => ({
  type: ARTICLELIST,
  payload: data,
});

export const loading = (data) => ({
  type: LOADING,
  payload: data,
});

export const fetchArticleDetails = () => {
  return (dispatch) => {
    dispatch(loading(true));
    return axios
      .get('http://jsonplaceholder.typicode.com/users')
      .then(({ data }) => {
        dispatch(setArticleDetails(data));
        dispatch(loading(false));
        return data;
      });
  };
};
