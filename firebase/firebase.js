import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    signInWithPopup,
    GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyArJ72BloO4hnBRq0SGqAQzZ0FVDRJ7FrM",
    authDomain: "mwa-batch18.firebaseapp.com",
    projectId: "mwa-batch18",
    storageBucket: "mwa-batch18.firebasestorage.app",
    messagingSenderId: "1068620320596",
    appId: "1:1068620320596:web:8b9f292ea69c592128c2c1",
    measurementId: "G-YSQJMDST5N"
};

export{
    initializeApp,
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    signInWithPopup,
    GoogleAuthProvider,
    firebaseConfig
}