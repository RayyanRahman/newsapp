// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDwKGKO7fGJnLFOINgr5VPar73whHzoj-I",
  authDomain: "newsapp-e1106.firebaseapp.com",
  projectId: "newsapp-e1106",
  storageBucket: "newsapp-e1106.appspot.com",
  messagingSenderId: "144846502843",
  appId: "1:144846502843:web:fef347946075491e76a29e",
  measurementId: "G-YL59F151VE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const firestore = getFirestore(app);

export { app, auth, firestore };