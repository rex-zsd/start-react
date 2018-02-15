/**
 * @Author: Zhong Nan <zhongnan>
 * @Date:   2017-06-04 20:47:34
 * @Email:  zhongnan.zn@120yibao.com
 * @Last modified by:   zhongnan
 * @Last modified time: 2017-06-04 21:01:14
 */
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
  name: state.user.name,
});

// stateless组件
const component = props => <span>{props.name}</span>;

export default connect(mapStateToProps)(component);
