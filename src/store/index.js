import { createStore, combineReducers } from 'redux';
import home from './home/reducer';
import article from './article/reducer';

export default createStore(
  combineReducers({
    home,
    article,
  })
);
