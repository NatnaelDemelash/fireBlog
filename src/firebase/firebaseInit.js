import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAA7gHJR0qs6Q1JiJbt1QWsnHQepsevYOk",
  authDomain: "fireblog-f6c2b.firebaseapp.com",
  projectId: "fireblog-f6c2b",
  storageBucket: "fireblog-f6c2b.appspot.com",
  messagingSenderId: "880855753011",
  appId: "1:880855753011:web:af4b1139006752b82b1e46",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export default firebaseApp.firestore();
