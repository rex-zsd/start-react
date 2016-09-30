export const GET_TEXT = 'GET_TEXT';

// 登录行为
export function getText(text) {
  return {
    type: GET_TEXT,
    text,
  };
}
