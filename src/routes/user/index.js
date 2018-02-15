/**
 * @Author: Zhong Nan <zhongnan>
 * @Date:   2017-06-04 20:46:37
 * @Email:  zhongnan.zn@120yibao.com
 * @Last modified by:   zhongnan
 * @Last modified time: 2017-06-04 20:47:23
 */

export default store => ({
  path: 'user',
  getComponent(location, callback) {
    import('./reducer').then((reducer) => {
      store.injectReducer({ key: 'user', reducer: reducer.default });
    });

    import('./page').then((page) => {
      callback(null, page.default);
    });
  },
});
