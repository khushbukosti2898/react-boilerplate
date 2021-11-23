import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import articleReducer from './articleReducer';

const rootReducer = combineReducers({
  counterReducer,
  articleReducer,
});
export default rootReducer;
