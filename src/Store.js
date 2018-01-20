
import {createLogger} from "redux-logger"
import {applyMiddleware , combineReducers , createStore} from "redux"
import mathReducer from './reducers/mathReducer';
import userReducer from './reducers/userReducer';
import thunk from 'redux-thunk'

export default createStore(
    combineReducers({
        mathReducer,
        userReducer
    }),
    {},
    applyMiddleware(createLogger(), thunk)
);