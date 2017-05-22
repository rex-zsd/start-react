import { combineReducers } from 'redux';
// import fetch from '../../util/fetch';

function str(state = '', action) {
    switch (action.type) {
        case 'SET_TEXT':
            return action.payload;
        case 'GET_TEXT':
            return action.payload;
        default:
            return state;
    }
}

export function setText(payload) {
    return {
        type: 'SET_TEXT',
        payload,
    };
}

export const fetchDataSync = () => async(dispatch, getState) => {
    const text = await fetch('http://www.baidu.com').then(res => res.text());
    dispatch(setText(text));
};

export default combineReducers({
    str,
});
