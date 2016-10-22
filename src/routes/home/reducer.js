import { combineReducers } from 'redux';
import fetch from 'util/fetch';

export const GET_TEXT = 'GET_TEXT';

function str(state = '', action) {
  switch (action.type) {
    case GET_TEXT:
      return action.text;
    default:
      return state;
  }
}

export function getText(text) {
  return {
    type: GET_TEXT,
    text,
  };
}

export function fetchDataSync() {
  return async(dispatch, getState) => {
    const text = await fetch('http://www.baidu.com')
        .then(res => res.text());
    const state = getState();
    console.log(state);
    console.log(text);
  };
}

export default combineReducers({
  str,
});
