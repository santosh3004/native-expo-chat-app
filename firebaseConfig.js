// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import * as firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
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