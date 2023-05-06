// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBz7R46sQSx-p2PYMqJIMpDhPQyMrgvz4g",
  authDomain: "reyansh-s-portfolio.firebaseapp.com",
  projectId: "reyansh-s-portfolio",
  storageBucket: "reyansh-s-portfolio.appspot.com",
  messagingSenderId: "986639271379",
  appId: "1:986639271379:web:e04cfaf3edf7ba9a6a1b26",
  measurementId: "G-4F4EVNG8NX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)