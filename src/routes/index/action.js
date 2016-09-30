export const LOG_IN = 'LOG_IN';

// 登录行为
export function login(user) {
  return {
    type: LOG_IN,
    user,
  };
}
