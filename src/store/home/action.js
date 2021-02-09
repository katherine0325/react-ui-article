import * as homeActionTypes from './action-type';

export const setList = data => ({
  type: homeActionTypes.setList,
  value: data,
});
