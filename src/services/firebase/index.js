// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqjmbrmYBopL6XTuEuSvEzfQ6yA-rulls",
  authDomain: "sneakersshop-21419.firebaseapp.com",
  projectId: "sneakersshop-21419",
  storageBucket: "sneakersshop-21419.appspot.com",
  messagingSenderId: "844393340159",
  appId: "1:844393340159:web:f9033b402fe2e2509a00ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app);