import config from '../config';

const assistantHost = config[process.env.NODE_ENV].assistantHost;
const _fetch = window.fetch;

// 序列化query参数
function formatQuery(query) {
  let param = '';
  for (const i in query) {
    if (!param.length) {
      param = `${param}${i}=${query[i]}`;
    } else {
      param = `&${param}${i}=${query[i]}`;
    }
  }
  return param;
}

// 导出自定义fetch方法
export default function myFetch(url, data) {
  const query = formatQuery(data.query);
  // 发起请求
  return _fetch(`${assistantHost}${url}?${query}`, data)
    .then(res => res.json())
    .then(res => res.data);
}
