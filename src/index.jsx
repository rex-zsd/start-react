import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import './style.less';
import createRoutes from './routes';
import configureStore from './redux';

/* eslint no-underscore-dangle: ["error", { "allow": ["__INITIAL_STATE__"] }] */
const store = configureStore(window.__INITIAL_STATE__, browserHistory);
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: state => state.routing,
});

const routes = createRoutes(store);

const App = (
  <Provider store={store}>
    <Router routes={routes} history={history} />
  </Provider>
);

render(App, document.getElementById('J_page'));
