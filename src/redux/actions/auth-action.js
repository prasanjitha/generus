import { auth } from "../../config/firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import Toast from 'react-native-toast-message';
import { db, storage } from "../../config/firebase";
// import { ref } from 'firebase/database';
import { collection, addDoc } from 'firebase/firestore';
import {
    ref,
    uploadBytes,
    getDownloadURL
} from "firebase/storage";
import * as ImagePicker from 'expo-image-picker'

export const LOGIN_USER = 'LOGIN_USER';
export const IS_LOADING = 'IS_LOADING';
export const PICK_IMAGE = 'PICK_IMAGE';


export const pickImage = () => async dispatch => {
    try {

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });
        const source = { uri: result.assets[0].uri }
        console.log(source);
        const response = await fetch(source.uri)
        const blob = await response.blob()
        const filename = source.uri.substring(source.uri.lastIndexOf('/') + 1);
        console.log(filename);
        const storageRef = ref(storage, filename);
        await uploadBytes(storageRef, blob)
            .then((snapshot) => {
                console.log('Uploaded!');
            }).catch((error) => {
                console.log(error.message);
            })
        const uri = await getDownloadURL(storageRef);
        dispatch({
            type: PICK_IMAGE,
            payload: uri
        });
    } catch (e) {
        console.log(e);
    }
}


export const registerUser = (data, navigation) => async dispatch => {
    dispatch({
        type: IS_LOADING,
        payload: true,
    });
    createUserWithEmailAndPassword(auth, data.email, data.password)
        .then(() => {
            const docRef = addDoc(collection(db, "generus-users"), {
                username: data.username,
                email: data.email,
            });
            console.log("User account created & signed in! ID: ", docRef.id);
            Toast.show({
                type: 'success',
                text1: 'User Created Success!',
                text2: `Please login 👋`
            });
            dispatch({
                type: IS_LOADING,
                payload: false,
            });
            navigation.navigate('SignInScreen');
        })
        .catch(error => {
            Toast.show({
                type: 'error',
                text1: 'Invlid creadential!',
                text2: `Please try again 👋`
            });
            dispatch({
                type: IS_LOADING,
                payload: false
            });
            if (error.code === 'auth/email-already-in-use') {
                Toast.show({
                    type: 'error',
                    text1: 'That email address is already in use!',
                    text2: `Please try again 👋`
                });
                dispatch({
                    type: IS_LOADING,
                    payload: false,
                });
            }

            if (error.code === 'auth/invalid-email') {
                Toast.show({
                    type: 'error',
                    text1: 'That email address is already in use!',
                    text2: `Please try again 👋`
                });
                dispatch({
                    type: IS_LOADING,
                    payload: false,
                });
            }
            console.error(error);
        });
}

export const loginUser = (data, navigation) => async dispatch => {
    dispatch({
        type: IS_LOADING,
        payload: true,
    });
    signInWithEmailAndPassword(auth, data.username, data.password)
        .then(() => {
            Toast.show({
                type: 'success',
                text1: 'User Login Success!',
                text2: `Hello 👋`
            });
            navigation.navigate('TabHomeScreen');
        })
        .catch(error => {
            Toast.show({
                type: 'error',
                text1: 'Invlid creadential!',
                text2: `Please try again 👋`
            });
            dispatch({
                type: IS_LOADING,
                payload: false
            });
            if (error.code === 'auth/email-already-in-use') {
                Toast.show({
                    type: 'error',
                    text1: 'That email address is already in use!',
                    text2: `Please try again 👋`
                });
                dispatch({
                    type: IS_LOADING,
                    payload: false,
                });
            }

            if (error.code === 'auth/invalid-email') {
                Toast.show({
                    type: 'error',
                    text1: 'That email address is already in use!',
                    text2: `Please try again 👋`
                });
                dispatch({
                    type: IS_LOADING,
                    payload: false,
                });
            }
            console.error(error);
        });
}