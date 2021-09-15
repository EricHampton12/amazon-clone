import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC1uAhzhFy8ocEqGG0pX9RihfhxiYYHfYk",
  authDomain: "clone-bcf7e.firebaseapp.com",
  projectId: "clone-bcf7e",
  storageBucket: "clone-bcf7e.appspot.com",
  messagingSenderId: "799698313328",
  appId: "1:799698313328:web:23245fa481b74e6e9d14b5",
  measurementId: "G-QPS9ESLZM6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
