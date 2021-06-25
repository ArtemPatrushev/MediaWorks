import { applyMiddleware, combineReducers, createStore } from "redux";

export default combineReducers({
    usersPage: userReducer
});