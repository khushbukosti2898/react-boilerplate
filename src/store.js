import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import rooReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = (initialState) => {
  const middleware = [thunk];
  middleware.push(createLogger({ collapsed: true }));

  return createStore(
    rooReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware), (f) => f),
  );
};
export default store;
