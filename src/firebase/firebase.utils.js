import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyASwYpZrLdJ1ez415Kj2O40TkCALpS0_u4",
  authDomain: "crwn-db-412b0.firebaseapp.com",
  databaseURL: "https://crwn-db-412b0.firebaseio.com",
  projectId: "crwn-db-412b0",
  storageBucket: "crwn-db-412b0.appspot.com",
  messagingSenderId: "543321776613",
  appId: "1:543321776613:web:355006a95950d55cd60f0c",
  measurementId: "G-G35WTD7HTQ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

// get access to .auth() from 'firebase/auth'
// export this out to anywhere we need to use authentication
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// gives us access to GoogleAuthProvider class from authentication library
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;