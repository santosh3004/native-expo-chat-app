// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import * as firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0VPqgJ7Znde7N1HYe-XHMWE9Prn-Tr7s",
  authDomain: "native-expo-chat.firebaseapp.com",
  projectId: "native-expo-chat",
  storageBucket: "native-expo-chat.appspot.com",
  messagingSenderId: "997000440200",
  appId: "1:997000440200:web:195c497cd649af16ff323d"
};

let app;
// Initialize Firebase
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
}
else {
  app=firebase.app()
}

const db=app.firestore();
const auth=firebase.auth();
export {db,auth}