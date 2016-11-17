export default store => ({
    path: 'user',
    getComponent(location, callback) {
        require.ensure([], (require) => {
            const container = require('./container').default;
            const reducer = require('./reducer').default;

            store.injectReducer({
                key: 'user',
                reducer
            });
            callback(null, container);
        }, 'user');
    },
});
