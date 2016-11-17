import { connect } from 'react-redux';
import Page from './page';
import { getText, fetchDataSync } from './reducer';

// 组织异步action方法
const mapActionCreators = {
  getText,
  fetchDataSync,
};

// 组织注入变量
function mapStateToprops(state) {
  return {
    str: state.user.str,
  };
}

// 注入方法与变量
export default connect(mapStateToprops, mapActionCreators)(Page);
