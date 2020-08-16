import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBpf32LTwC8K1xy4uki5haSuu054mw026g",
  authDomain: "facebook-messanger-clone-ea5a3.firebaseapp.com",
  databaseURL: "https://facebook-messanger-clone-ea5a3.firebaseio.com",
  projectId: "facebook-messanger-clone-ea5a3",
  storageBucket: "facebook-messanger-clone-ea5a3.appspot.com",
  messagingSenderId: "825100069039",
  appId: "1:825100069039:web:80aef389ff611bbb530c5a",
  measurementId: "G-H9C845PJ63",
});

const db = firebaseApp.firestore();
export default db;
