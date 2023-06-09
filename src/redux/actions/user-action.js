import { auth } from "../../config/firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import Toast from 'react-native-toast-message';
import { db, storage } from "../../config/firebase";
// import { ref, set } from 'firebase/database';
import { collection, addDoc, getDocs, query } from 'firebase/firestore';
import {
    ref,
    uploadBytes,
    getDownloadURL
} from "firebase/storage";
import * as ImagePicker from 'expo-image-picker';

export const IS_LOADING = 'IS_LOADING';
export const PICK_IMAGE = 'PICK_IMAGE';
export const IS_IMAGE_UPLOADING = 'IS_IMAGE_UPLOADING';
export const MY_ALL_ITEMS = 'MY_ALL_ITEMS';
export const GET_LOGGED_USER = 'GET_LOGGED_USER';
export const HIDE_TABBAR = 'HIDE_TABBAR';
export const ALL_POST = 'ALL_POST';


export const hideTabBar = () => async dispatch => {
    try {
        dispatch({
            type: HIDE_TABBAR,
            payload: true,
        });
    } catch (e) {
        console.log(e);
    }
}
export const showTabBar = () => async dispatch => {
    try {
        dispatch({
            type: HIDE_TABBAR,
            payload: false,
        });
    } catch (e) {
        console.log(e);
    }
}

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
        let name = '';
        const userQuery = query(collection(db, "generus-users"));
        const userQuerySnapshot = await getDocs(userQuery);
        userQuerySnapshot.forEach((doc) => {
            if (auth.currentUser.email === doc.data().email) {
                name = doc.data().username;
            }
        });
        data.name = name;
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
export const uploadPost = (data, navigation) => async dispatch => {
    try {
        dispatch({
            type: IS_LOADING,
            payload: true,
        });
        // data.email = auth.currentUser.email;
        const docRef = addDoc(collection(db, "widly-post"), data);
        console.log("Post created created");
        await new Promise(resolve => setTimeout(resolve, 3000)); // await the programme
        Toast.show({
            type: 'success',
            text1: 'Item Created Success!',
            text2: `Item Created! 👋`
        });
        navigation.navigate('SignInScreen');
        dispatch({
            type: IS_LOADING,
            payload: false,
        });
    } catch (error) {
        console.log(error);
    }

}

export const uploadCharity = (data, navigation) => async dispatch => {
    try {
        dispatch({
            type: IS_LOADING,
            payload: true,
        });
        const docRef = addDoc(collection(db, "generus-charity"), data);
        console.log("User account created & signed in! ID: ", docRef.id);
        await new Promise(resolve => setTimeout(resolve, 3000)); // await the programme
        Toast.show({
            type: 'success',
            text1: 'Charity Created Success!',
            text2: `Charity Created! 👋`
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

export const loadMyItems = () => async dispatch => {
    const allData = [];
    try {
        dispatch({
            type: IS_LOADING,
            payload: true,
        });
        const q = query(collection(db, "generus-item"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            const item = {
                id: doc.id,
                imageUrl: doc.data().imageUrl,
                itemName: doc.data().itemName,
                note: doc.data().specialNote,
                ownerName: doc.data().name,
            }
            allData.push(item);
        });
        console.log('print All data');
        console.log(allData);
        dispatch({ type: MY_ALL_ITEMS, payload: allData });
        dispatch({ type: IS_LOADING, payload: false });
    } catch (error) {
        console.log(error);
    }

}

export const getAllPosts = () => async dispatch => {
    const allData = [];
    try {
        dispatch({
            type: IS_LOADING,
            payload: true,
        });
        const q = query(collection(db, "widly-post"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            const item = {
                id: doc.id,
                imageUrl: doc.data().imageUrl,
                itemName: doc.data().title,
                description: doc.data().description,
                category: doc.data().category,
                price: doc.data().price,
                phone: doc.data().phone,
            }
            allData.push(item);
        });
        console.log(allData);
        dispatch({ type: ALL_POST, payload: allData });
        dispatch({ type: IS_LOADING, payload: false });
    } catch (error) {
        console.log(error);
    }

}

export const loadProfile = () => async dispatch => {
    const allData = [];
    try {
        dispatch({
            type: IS_LOADING,
            payload: true,
        });
        const q = query(collection(db, "generus-user-info"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            if (auth.currentUser.email === doc.data().email) {
                const item = {
                    id: doc.id,
                    distric: doc.data().distric,
                    email: doc.data().email,
                    imageUrl: doc.data().imageUrl,
                    mobile: doc.data().mobile,
                    province: doc.data().province,
                    town: doc.data().town,
                }
                allData.push(item);
            } else {
                allData.push({});

            }
        });
        console.log(allData);
        dispatch({ type: GET_LOGGED_USER, payload: allData[0] });
        dispatch({ type: IS_LOADING, payload: false });
    } catch (error) {
        allData.push({});
        dispatch({ type: GET_LOGGED_USER, payload: allData[0] });
        dispatch({ type: IS_LOADING, payload: false });
        console.log(error);
    }

}