// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAAsdTkajPNtKRH6sMYS8wbp1o1-tH4zNg",
  authDomain: "adopcionparatodos.firebaseapp.com",
  projectId: "adopcionparatodos",
  storageBucket: "adopcionparatodos.appspot.com",
  messagingSenderId: "226844783525",
  appId: "1:226844783525:web:84f7dbd933799de732ee4c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;