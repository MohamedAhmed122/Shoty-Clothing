import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBmPKBAw8wRb8wGDanbBk3PAcM92KrSL3Q",
  authDomain: "shoty-db.firebaseapp.com",
  databaseURL: "https://shoty-db.firebaseio.com",
  projectId: "shoty-db",
  storageBucket: "shoty-db.appspot.com",
  messagingSenderId: "1050371229893",
  appId: "1:1050371229893:web:3db3789cc62e760b43c8ac",
  measurementId: "G-QL6GXD9J50",
};

// take a specific data from the database to deploy it
// it is async because we are getting the api from the database
export const createUserProfileDocument = async (userAuth, additionalData) => {

  // make user the user signed in
  if (!userAuth) return;

  const userRef = await firestore.doc(`users/${userAuth.uid}`);
  const snapShot = userRef.get();

  //if the snap shot doesnt exisit we create data
  // and we are creating the new data using the useAuth object
  if(! snapShot.exists){
    const {
      displayName,
      email
    } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.error(error)
    }
  }
  return userRef;
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Setup google authentication

//this gives you an access to goole auth class provider
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;