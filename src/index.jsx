import React from 'react';
import browserHistory from 'react-router/lib/browserHistory';
import {render} from 'react-dom';
import {Router} from 'react-router';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import './util/fetch';
import './style.less';
import createRoutes from './routes';
import configureStore from './redux';

/* eslint no-underscore-dangle: ["error", { "allow": ["__INITIAL_STATE__"] }] */
const store = configureStore(window.__INITIAL_STATE__, browserHistory);
const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState: state => state.routing
});

render(
    <Provider store={store}>
        <Router history={history} routes={createRoutes(store)}/>
    </Provider>,
    document.getElementById('J_page')
);
