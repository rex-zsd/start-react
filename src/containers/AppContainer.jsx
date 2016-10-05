import React, { PropTypes } from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';

const propTypes = {
  history: PropTypes.object.isRequired,
  routes: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

function AppContainer(props) {
  const { history, routes, store } = props;
  return (
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
  );
}

AppContainer.propTypes = propTypes;

export default AppContainer;
