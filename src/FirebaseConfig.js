import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFLSfJr919ECqLo-SlyqHlJcYk9vOXNbc",
  authDomain: "whats-app-type.firebaseapp.com",
  projectId: "whats-app-type",
  storageBucket: "whats-app-type.appspot.com",
  messagingSenderId: "955734284036",
  appId: "1:955734284036:web:8ae118d870b28592cea251",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
