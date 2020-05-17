import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBmPKBAw8wRb8wGDanbBk3PAcM92KrSL3Q",
    authDomain: "shoty-db.firebaseapp.com",
    databaseURL: "https://shoty-db.firebaseio.com",
    projectId: "shoty-db",
    storageBucket: "shoty-db.appspot.com",
    messagingSenderId: "1050371229893",
    appId: "1:1050371229893:web:3db3789cc62e760b43c8ac",
    measurementId: "G-QL6GXD9J50"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;