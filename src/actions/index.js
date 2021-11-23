import axios from 'axios';
import { ARTICLELIST, DECREASE, INCREASE, RESET } from './actionTypes';

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

export const fetchArticleDetails = () => {
  return (dispatch) => {
    return axios
      .get('http://jsonplaceholder.typicode.com/users')
      .then(({ data }) => {
        dispatch(setArticleDetails(data));
        return data;
      });
  };
};
