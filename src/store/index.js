import { createStore, combineReducers } from 'redux';
import pagea from './pagea/reducer';
import pageb from './pageb/reducer';

export default createStore(
  combineReducers({
    pagea,
    pageb,
  })
);
