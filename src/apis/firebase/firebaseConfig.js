// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDycqFKREwgze58WMP3BoB6JQi1o56GZPQ",
  authDomain: "apple-clone-3ca75.firebaseapp.com",
  projectId: "apple-clone-3ca75",
  storageBucket: "apple-clone-3ca75.appspot.com",
  messagingSenderId: "1022220957706",
  appId: "1:1022220957706:web:dec449e97f9e7f1a3307f3",
  measurementId: "G-9EM55YHM2C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);