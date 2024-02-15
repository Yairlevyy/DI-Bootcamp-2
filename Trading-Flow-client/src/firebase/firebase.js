// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAEbxHyBvys0PRBy9HpzfYCs07_JzjigM",
  authDomain: "trading-flow.firebaseapp.com",
  projectId: "trading-flow",
  storageBucket: "trading-flow.appspot.com",
  messagingSenderId: "164058247322",
  appId: "1:164058247322:web:9440b7babc36fe624aef23",
  measurementId: "G-SCB3JM1GQE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export {app, auth, db};

