/**
 * @Author: Zhong Nan <zhongnan>
 * @Date:   2017-06-04 20:48:02
 * @Email:  zhongnan.zn@120yibao.com
 * @Last modified by:   zhongnan
 * @Last modified time: 2017-06-04 21:00:57
 */

import { combineReducers } from 'redux';

function name(state = 'user', action) {
  switch (action.type) {
    case 'UPDATE':
      return action.payload;
    default:
      return state;
  }
}

export function setName(payload) {
  return {
    type: 'UPDATE',
    payload,
  };
}

export default combineReducers({
  name,
});
