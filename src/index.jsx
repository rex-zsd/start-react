import React from 'react';
import browserHistory from 'react-router/lib/browserHistory';
import { render } from 'react-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import AppContainer from './containers/AppContainer';

import createRoutes from './routes';
import configureStore from './store';
/* eslint no-underscore-dangle: ["error", { "allow": ["__INITIAL_STATE__"] }] */
const store = configureStore(window.__INITIAL_STATE__, browserHistory);

const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: state => state.routing,
});

render(
  <AppContainer store={store} history={history} routes={createRoutes(store)} />, document.getElementById('J_page'));