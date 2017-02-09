import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import months from './months';
import categories from './categories';

const rootReducer = combineReducers({
  months,
  categories,
  routing
});

export default rootReducer;

// TODO: Next thing to do is right tests for the reducers
