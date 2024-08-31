// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDD1OSOf1i9Zj6A4cWLkkyMg0PRHAn2qhA",
  authDomain: "authentication-9b070.firebaseapp.com",
  projectId: "authentication-9b070",
  storageBucket: "authentication-9b070.appspot.com",
  messagingSenderId: "672389988327",
  appId: "1:672389988327:web:950a1792c7f8f055620742"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);

 export {auth}
