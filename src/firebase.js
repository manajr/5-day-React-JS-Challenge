import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCENfkmhrAuyk4BR6JudEKVKQTdfS335pY",
    authDomain: "clone-fc4d0.firebaseapp.com",
    databaseURL: "https://clone-fc4d0.firebaseio.com",
    projectId: "clone-fc4d0",
    storageBucket: "clone-fc4d0.appspot.com",
    messagingSenderId: "245304374507",
    appId: "1:245304374507:web:3cbc05395ec93066acbaae",
    measurementId: "G-W82DV0GEMG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};