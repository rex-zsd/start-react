import { combineReducers } from 'redux';
// import fetch from '../../util/fetch';

// reducer
function str(state = [], action) {
  switch (action.type) {
    case 'SET_TEXT':
      return [...state, action.payload];
    case 'GET_TEXT':
      return action.payload;
    default:
      return state;
  }
}
// action
export function setText(payload) {
  return {
    type: 'SET_TEXT',
    payload,
  };
}

export const fetchDataSync = () => async (dispatch, getState) => {
  const text = await fetch('http://www.baidu.com').then(res => res.text());
  dispatch(setText(text));
};

export default combineReducers({
  str,
});
