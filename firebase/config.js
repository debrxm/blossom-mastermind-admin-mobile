import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPps56dbRSSV1wpgEm2u3MV9Fu6SjH09k",

  authDomain: "blossom-mastermind-investment.firebaseapp.com",

  projectId: "blossom-mastermind-investment",

  storageBucket: "blossom-mastermind-investment.appspot.com",

  messagingSenderId: "1060384700723",

  appId: "1:1060384700723:web:bd03f5301480f700926646",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
// firebase.firestore().enablePersistence();

export const auth = firebase.auth();
export const firestore = firebase.firestore();
firestore.enableNetwork();
export default firebase;
