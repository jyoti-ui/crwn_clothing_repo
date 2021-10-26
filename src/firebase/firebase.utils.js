import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyD2HublHRTF1JRdw-JU7TyUVIT1NJcac60",
    authDomain: "crwndb-52537.firebaseapp.com",
    projectId: "crwndb-52537",
    storageBucket: "crwndb-52537.appspot.com",
    messagingSenderId: "874521121867",
    appId: "1:874521121867:web:74f4e4528cc81fcd2429ce",
    measurementId: "G-TCFL3LFB6W"
  };

  export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    // console.log(snapShot);

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })

      }catch(error){
        console.log('error creating user', error.message)
      }

      return userRef;
    }
  }

  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt : 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;


