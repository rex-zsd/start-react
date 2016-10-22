import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer as routing, routerMiddleware } from 'react-router-redux';

// 组合异步 reducer 与 location reducer
const reducers = asyncReducers => combineReducers({
  ...asyncReducers,
  routing,
});

export default function configureStore(initialState = {}, history) {
  // Middleware and store enhancers
  const enhancers = [applyMiddleware(thunk, routerMiddleware(history))];

  // 开发环境下启用redux-devTool
  if (process.env.CLIENT && process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension;
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  const store = createStore(reducers(), initialState, compose(...enhancers));

  store.asyncReducers = {};
  store.injectReducer = ({ key, reducer }) => {
    store.asyncReducers[key] = reducer;
    store.replaceReducer(reducers(store.asyncReducers));
  };

  return store;
}
