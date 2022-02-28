import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
// other services is needed


const firebaseConfig = {
  apiKey: "AIzaSyABwXCpUJ2du7wAPzz8lbmoBm-_Rknoo2A",
  authDomain: "challenge-16780.firebaseapp.com",
  projectId: "challenge-16780",
  storageBucket: "challenge-16780.appspot.com",
  messagingSenderId: "190979974900",
  appId: "1:190979974900:web:ba3a6a79c8b946a3a9a0a1",
  measurementId: "G-PRJLQJLL1R"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
