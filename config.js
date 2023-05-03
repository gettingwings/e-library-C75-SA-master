import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBkJM36OdZ7FTVbnPjKGFF1Qo2BoQzvLjA",
  authDomain: "e-library-91750.firebaseapp.com",
  projectId: "e-library-91750",
  storageBucket: "e-library-91750.appspot.com",
  messagingSenderId: "654057090548",
  appId: "1:654057090548:web:916fc623be90dd0a7f5da1"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
