// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAsdTkajPNtKRH6sMYS8wbp1o1-tH4zNg",
  authDomain: "adopcionparatodos.firebaseapp.com",
  projectId: "adopcionparatodos",
  storageBucket: "adopcionparatodos.appspot.com",
  messagingSenderId: "226844783525",
  appId: "1:226844783525:web:84f7dbd933799de732ee4c",
  measurementId: "G-YRT94LC06Q"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;