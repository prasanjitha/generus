import { initialState } from "../main-reducers";
import { PICK_IMAGE, IS_LOADING, IS_IMAGE_UPLOADING, MY_ALL_ITEMS, GET_LOGGED_USER } from "../actions/user-action";


function userReducers(state = initialState, action) {
    switch (action.type) {
        case IS_LOADING:
            return { ...state, isLoading: action.payload };
        case IS_IMAGE_UPLOADING:
            return { ...state, isImgUploading: action.payload };
        case PICK_IMAGE:
            return { ...state, imageUrl: action.payload };
        case MY_ALL_ITEMS:
            return { ...state, myItems: action.payload };
        case GET_LOGGED_USER:
            return { ...state, loggedUser: action.payload };
        default:
            return state;
    }
}

export default userReducers;