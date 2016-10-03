import { combineReducers } from 'redux';
import { GET_TEXT } from './action';

function str(state = '', action) {
  switch (action.type) {
    case GET_TEXT:
      return action.text;
    default:
      return state;
  }
}

export default combineReducers({
  str,
});
