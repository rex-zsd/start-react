import { connect } from 'react-redux';
import Index from './components/index/';
import { getText } from './action';

// 组织异步action方法
const mapActionCreators = {
  getText,
};
// 组织注入变量
function mapStateToprops(state) {
  return {
    str: state.index.str,
  };
}
// 注入方法与变量
export default connect(mapStateToprops, mapActionCreators)(Index);
