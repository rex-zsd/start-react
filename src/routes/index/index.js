export default store => ({
  path: 'index',
  getComponent(location, callback) {
    require.ensure([], (require) => {
      const Index = require('./container').default;
      const reducer = require('./reducer').default;
      store.injectReducer({ key: 'index', reducer });
      callback(null, Index);
    }, 'index');
  },
});
