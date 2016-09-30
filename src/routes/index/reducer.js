import {
  combineReducers,
} from 'redux';
import {
  LOG_IN,
} from './action';

// 用户信息
function user(state = {}, action) {
  switch (action.type) {
    case LOG_IN:
      return action.user;
    default:
      return state;
  }
}

export default combineReducers({
  user,
});
