// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database';
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
    apiKey: "AIzaSyCdtAKzffo4Ph_nUtTfmKPeJck2W_NBvbA",
    authDomain: "bordima-45b21.firebaseapp.com",
    databaseURL: "https://bordima-45b21-default-rtdb.firebaseio.com",
    projectId: "bordima-45b21",
    storageBucket: "bordima-45b21.appspot.com",
    messagingSenderId: "95041535486",
    appId: "1:95041535486:web:d7d6948fdefc1d051e14af",
    measurementId: "G-XG30CBD9GS"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storange = getStorage(app);
