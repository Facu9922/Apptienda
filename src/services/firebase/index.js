// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjR0nj4JaOHBvdr3lDH8c5T3f2mpU5nKo",
  authDomain: "tiendazapas-8f695.firebaseapp.com",
  projectId: "tiendazapas-8f695",
  storageBucket: "tiendazapas-8f695.appspot.com",
  messagingSenderId: "33773346729",
  appId: "1:33773346729:web:adbdcc6b2b0b71dc14aeb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app);