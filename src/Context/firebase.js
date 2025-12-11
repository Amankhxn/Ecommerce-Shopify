// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBvvAUjiaec8apOrCJWmyhHrTr8CfWBs4s",
    authDomain: "shopify-13130.firebaseapp.com",
    projectId: "shopify-13130",
    storageBucket: "shopify-13130.firebasestorage.app",
    messagingSenderId: "398190979732",
    appId: "1:398190979732:web:a63cc9fb192177de766281",
    measurementId: "G-PYJN2PLZHR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app)