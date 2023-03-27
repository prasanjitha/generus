import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import mainReducer from "./main-reducers";
import authReducers from "./reducers/auth-reducers";
import userReducers from "./reducers/user-reducers";

const rootReducre = combineReducers({ mainReducer, authReducers, userReducers });
export const Store = createStore(rootReducre, applyMiddleware(thunk));

