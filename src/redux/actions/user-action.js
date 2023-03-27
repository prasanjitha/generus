import { auth } from "../../config/firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import Toast from 'react-native-toast-message';
import { db, storage } from "../../config/firebase";
// import { ref, set } from 'firebase/database';
import { collection, addDoc } from 'firebase/firestore';
import {
    ref,
    uploadBytes,
    getDownloadURL
} from "firebase/storage";
import * as ImagePicker from 'expo-image-picker';

export const IS_LOADING = 'IS_LOADING';
export const PICK_IMAGE = 'PICK_IMAGE';
export const IS_IMAGE_UPLOADING = 'IS_IMAGE_UPLOADING';


export const pickImage = () => async dispatch => {
    try {
        dispatch({
            type: IS_IMAGE_UPLOADING,
            payload: true,
        });
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
            payload: uri,
        });
        dispatch({
            type: IS_IMAGE_UPLOADING,
            payload: false,
        });

    } catch (e) {
        console.log(e);
    }
}


export const uploadItem = (data, navigation) => async dispatch => {
    try {
        dispatch({
            type: IS_LOADING,
            payload: true,
        });
        const docRef = addDoc(collection(db, "generus-item"), data);
        console.log("User account created & signed in! ID: ", docRef.id);
        await new Promise(resolve => setTimeout(resolve, 3000)); // await the programme
        Toast.show({
            type: 'success',
            text1: 'Item Created Success!',
            text2: `Item Created! 👋`
        });
        // navigation.navigate('SignInScreen');
        dispatch({
            type: IS_LOADING,
            payload: false,
        });
    } catch (error) {
        console.log(error);
    }

}