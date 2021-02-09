import * as articleActionTypes from './action-type';

export const setTitle = title => ({
  type: articleActionTypes.setTitle,
  value: title,
});

export const setHtml = html => ({
  type: articleActionTypes.setHtml,
  value: html,
});
