import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import mainReducer from "./main-reducers";
import authReducers from "./reducers/auth-reducers";

const rootReducre = combineReducers({ mainReducer, authReducers });
export const Store = createStore(rootReducre, applyMiddleware(thunk));

