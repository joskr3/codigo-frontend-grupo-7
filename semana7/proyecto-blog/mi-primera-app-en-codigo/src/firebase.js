import firebase from "firebase/app";
import "firebase/firestore";
const config = {
  apiKey: "AIzaSyDkosY-zUeOChrlc4CMxn1YL90FeUNkgUc",
  authDomain: "front-codigo.firebaseapp.com",
  projectId: "front-codigo",
  storageBucket: "front-codigo.appspot.com",
  messagingSenderId: "1046325399871",
  appId: "1:1046325399871:web:5459bf0e9f1ad06b94c38a",
};

firebase.initializeApp(config);
export const firestore = firebase.firestore();
export default firebase;
