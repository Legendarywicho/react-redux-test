import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {createStore , combineReducers , applyMiddleware} from 'redux'
import constants from './Constants'
import {createLogger} from 'redux-logger'
import {Provider} from 'react-redux';

const mathReducer = (state = {
    result : 1 ,
    lastValues : []
} , action) => {
    switch (action.type){
        case constants.add:
            state = {
                ...state,
                result : state.result + action.payload,
                lasValueArray : [...state.lastValues , action.payload]
            }
            break
        case constants.subtract:
            state = {
                ...state ,
                result : state.result + action.payload,
                lasValueArray : [...state.lastValues , action.payload]
            }
            break
    }
    return state;
};

const userReducer = (state = {
    user : "Carl" ,
    age  : 22
} , action) => {
    switch (action.type){
        case constants.set_name:
            state = {
                ...state,
                user: action.payload
            }
            break
        case constants.set_age:
            state = {
                ...state ,
                age : action.payload
            }
            break
    }
    return state;
};


const store = createStore(
    combineReducers({userReducer , mathReducer}),
    {},
    applyMiddleware(createLogger())
);


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
