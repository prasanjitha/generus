export const SET_PHONE = 'SET_PHONE';
export const SHOW_MODEL = 'SHOW_MODEL';


export const setPhone = phone => dispatch => {
    dispatch({
        type: SET_PHONE,
        payload: phone
    });
};

export const setModelHide = () => dispatch => {
    dispatch({
        type: SHOW_MODEL,
        payload: false
    });
};

// export const getAllData = () => async dispatch => {
//     try {
//         dispatch({
//             type: SHOW_MODEL,
//             payload: true
//         });
//         const response = await getList.getLists();
//         const data = response.data;
//         console.log(data);
//         dispatch({
//             type: GET_ALL_POSTS,
//             payload: data
//         });

//     } catch (error) {
//         console.log(error);
//     }
// }