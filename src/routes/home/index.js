export default store => ({
    // path: 'home',
    getComponent(location, callback) {

        import('./reducer').then(reducer => {
            store.injectReducer({ key: 'home', reducer: reducer.default });
        });

        import('./page').then(page => {
            callback(null, page.default);
        });

    }
});
