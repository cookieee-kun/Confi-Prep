// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase-admin/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDL7CQJmjBXbUsco6vpG86oApGDnvqI0sg",
  authDomain: "confi-prep.firebaseapp.com",
  projectId: "confi-prep",
  storageBucket: "confi-prep.firebasestorage.app",
  messagingSenderId: "1034680957244",
  appId: "1:1034680957244:web:adea546b1c8ca7d9244639",
  measurementId: "G-RJ0EVG896S"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = app;
export const db = getFirestore(app);