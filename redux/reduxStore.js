import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleWare from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    usersPage: usersReducer
});

const middleWare = [thunkMiddleWare]
let store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleWare)));

// export const wrapper = createWrapper <Store<State>>(store, { debug: true });

// window.store = store;
console.log(store.getState());
export default store;