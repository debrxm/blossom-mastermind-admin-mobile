import firebase from "firebase";
import "firebase/database";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBn4ZfO2hjiVTf4xg18dzWHwtIQYaDtKn8",
  authDomain: "chattie-3eb7b.firebaseapp.com",
  databaseURL: "https://chattie-3eb7b.firebaseio.com",
  projectId: "chattie-3eb7b",
  storageBucket: "chattie-3eb7b.appspot.com",
  messagingSenderId: "241163609783",
  appId: "1:241163609783:web:b17eee746948b9f6e24f32",
  measurementId: "G-CYEEQR3P3H",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
