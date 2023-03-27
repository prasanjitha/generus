import {
    SHOW_MODEL,
} from "./user-action";

export const initialState = {
    isLoading: false,
    isImgUploading: false,
    imageUrl: 'imageUri',
}

function mainReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_MODEL:
            return { ...state, showModel: action.payload };
        default:
            return state;
    }
}

export default mainReducer;