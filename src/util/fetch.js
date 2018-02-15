import config from '../config';

const baseUrl = config[process.env.NODE_ENV].url;
const originFetch = window.fetch;

// 序列化query参数
function formatQuery(query) {
  let param = '';
  Object.keys(query).forEach((key) => {
    if (!param.length) {
      param = `${key}=${query[key]}`;
    } else {
      param = `${param}&${key}=${query[key]}`;
    }
  });
  return param;
}

// 导出自定义fetch方法
export default function (url, data = {}) {
  const query = formatQuery(data.query || {});
  // 发起请求
  return originFetch(`${baseUrl}${url}?${query}`, data);
}
