const LOGIN_LIST = [
  '/user',
];

function checkAuth(nextState) {
  if (LOGIN_LIST.indexOf(nextState.location.pathname) < 0) {
    return false;
  }
  return true;
}

export function onEnter(nextState, replace, callback) {
  const check = checkAuth(nextState);
  if (check) {
    replace('/login');
  }
  callback();
}

export function onChange(prevState, nextState, replace, callback) {
  const check = checkAuth(nextState);
  if (check) {
    replace('/login');
  }
  callback();
}
