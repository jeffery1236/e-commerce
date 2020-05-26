import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

let config = {
  apiKey: "AIzaSyAF1avfLYYoX5E5rJuwd7HgXtmcbh39oWY",
  authDomain: "e-commerce-db-e4622.firebaseapp.com",
  databaseURL: "https://e-commerce-db-e4622.firebaseio.com",
  projectId: "e-commerce-db-e4622",
  storageBucket: "e-commerce-db-e4622.appspot.com",
  messagingSenderId: "455306350600",
  appId: "1:455306350600:web:deb87f7fcf74f43b8cc1bd",
  measurementId: "G-B76CT4GHTP",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const sigInWithGoogle = () => auth.signInWithPopup(provider);

export default sigInWithGoogle;
