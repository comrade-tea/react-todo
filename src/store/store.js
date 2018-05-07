import {createStore, applyMiddleware} from "redux";
import reducer from "../reducers";
import thunk from 'redux-thunk'

const enhancer = applyMiddleware(thunk)
const store = new createStore(reducer, {}, enhancer)

window.store = store;

export default store
