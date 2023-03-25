import { initialState } from "../main-reducers";
import { IS_LOADING, LOGIN_USER } from "../actions/auth-action";


function authReducers(state = initialState, action) {
    switch (action.type) {
        case IS_LOADING:
            return { ...state, isLoading: action.payload };
        case LOGIN_USER:
            return { ...state, isLogin: action.payload };
        default:
            return state;
    }
}

export default authReducers;