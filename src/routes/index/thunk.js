import fetch from 'util/fetch';

function fetchData() {
  return fetch('http://www.baidu.com')
  .then(res => res.text());
}

export default function fetchDataSync() {
  return async (dispatch, getState) => {
    const res = await fetchData();
    const state = getState();
    console.log(state);
    console.log(res);
  };
}
