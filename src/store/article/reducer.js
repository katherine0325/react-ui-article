import * as articleActionTypes from './action-type';

const defaultState = {
  title: '',
  html: '<div></div>',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case articleActionTypes.setTitle:
      state.title = action.value;
      break;
    case articleActionTypes.setHtml:
      state.html = action.value;
      break;
  }
  return {...state}; 
};
