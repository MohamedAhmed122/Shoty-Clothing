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


export const createUserProfileDocument = async (userAuth, addtionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
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
        ...addtionalData
      })
    } catch (error) {
      console.log('error in creating new user', error.message)
    }
  }
  return userRef;
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;