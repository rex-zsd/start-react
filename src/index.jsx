import React, { Component } from 'react';
import { render } from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';

// import './style.less';
// import createRoutes from './routes';
// import configureStore from './redux';

/* eslint no-underscore-dangle: ["error", { "allow": ["__INITIAL_STATE__"] }] */
// const store = configureStore(window.__INITIAL_STATE__, browserHistory);
// const history = syncHistoryWithStore(browserHistory, store, {
//     selectLocationState: state => state.routing
// });
//
// const store = createStore(
//     combineReducers({
//         routing: routerReducer
//     })
// )


function str(state = '', action) {
    switch (action.type) {
        case 'SET_TEXT':
            return action.text;
        default:
            return state;
    }
}

const store = createStore(combineReducers({
    a: str
}));

store.subscribe(() => {
    console.log(store.getState());
});

const Home = () => (
    <div>hello home!</div>
);

const mapStateToProps = (state, ownProps) => {
    return {
        text: state.a
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch({ type: 'SET_TEXT', text: 'hello!' })
        }
    };
}

@connect(mapStateToProps, mapDispatchToProps)
class Admin extends Component {
    constructor() {
        super();
        this.hanldeClick = this.hanldeClick.bind(this);
    }

    hanldeClick(event) {
        console.log(this);
        // this.props.onClick();
        this.props.history.push('/home');
        // store.dispatch({ type: 'SET_TEXT', text: 'hello!' });
    }

    componentWillMount() {
        console.log(this.props);
    }

    render() {
        return (
            <div onClick={this.hanldeClick}>hello my! {this.props.text}</div>
        );
    }
}

const User = () => (
    <div>hello user!</div>
);

const App = () => (
    <Provider store={store}>
        <Router>
            <div>
                <Route path="/home" component={Home}/>
                <Route path="/user" component={User}/>
                <Route path="/admin" component={Admin}/>
            </div>
        </Router>
    </Provider>
);

render(
    App(),
    document.getElementById('J_page')
);
