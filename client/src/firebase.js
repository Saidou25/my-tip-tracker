import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDBR8M6dM6_pkJTaDddP-x-lbxSW7HtE4o",
    authDomain: "my-tip-tracker.firebaseapp.com",
    projectId: "my-tip-tracker",
    storageBucket: "my-tip-tracker.appspot.com",
    messagingSenderId: "596284627841",
    appId: "1:596284627841:web:2c8752ff2b7fe66fb12680",
    measurementId: "G-8Q1QLQY2KZ"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const storage = getStorage(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;


