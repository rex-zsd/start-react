import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer as routing, routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

const asyncReducers = {};

// 组合异步 reducer 与 location reducer
const reducers = asyncReducers => combineReducers({
    ...asyncReducers,
    routing,
});

export default function configureStore(initialState = {}, history) {

    const middleware = [thunk, routerMiddleware(history)];

    const store = createStore(reducers(asyncReducers), initialState, composeWithDevTools(applyMiddleware(...middleware)));

    store.injectReducer = ({ key, reducer }) => {
        asyncReducers[key] = reducer;
        store.replaceReducer(reducers(asyncReducers));
    };

    return store;
}
