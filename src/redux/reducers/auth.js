import { combineReducers } from 'react-redux';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

function auth(state = '', action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.user;
    case LOGIN_FAIL:
      return action.user;
    default:
      return state;
  }
}

export function login(data) {
  return (dispatch) => {
    fetch('https://www.baidu.com', data)
      .then(res => res.text())
      .then((res) => {
        if (res.length) {
          dispatch({
            type: LOGIN_SUCCESS,
            user: res,
          });
        } else {
          dispatch({
            type: LOGIN_FAIL,
            err: res,
          });
        }
      });
  };
}

export default combineReducers({
  auth,
});
