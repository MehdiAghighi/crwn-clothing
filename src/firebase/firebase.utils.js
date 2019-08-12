import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyCKldwcw7jTubW1V6raOfsvSVk2GM_zyMA",
    authDomain: "crwn-db-38423.firebaseapp.com",
    databaseURL: "https://crwn-db-38423.firebaseio.com",
    projectId: "crwn-db-38423",
    storageBucket: "",
    messagingSenderId: "505808754880",
    appId: "1:505808754880:web:061ffbeff0fc20a9"
  };

  export const createUserProfileDocument = async (userAuth , aditionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`/users/${userAuth.uid}`)

    const snapShot = await userRef.get();
    if (!snapShot.exists) {
      const { displayName, email, photoURL } = userAuth;

      const createdAt = new Date();
      try {
        userRef.set({
          displayName, 
          email, 
          photoURL,
          createdAt,
          ...aditionalData
        })
      } catch (err) {
        console.log("There is an error while adding record to firestore database", err.message)
      }
    }

    return userRef;

  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;