import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDrz_45oKtgxHEWFjqvWxpRnRa5nBJhDy0",
    authDomain: "q3-hack.firebaseapp.com",
    projectId: "q3-hack",
    storageBucket: "q3-hack.firebasestorage.app",
    messagingSenderId: "119574261464",
    appId: "1:119574261464:web:eef4756e1579553777f1ad",
    measurementId: "G-KSPNTB4B28"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
