export default store => ({
  // path: 'home',
  getComponent(location, callback) {
    require.ensure([], (require) => {
      const container = require('./container').default;
      const reducer = require('./reducer').default;

      store.injectReducer({ key: 'home', reducer });
      callback(null, container);
    }, 'home');
  },
});
