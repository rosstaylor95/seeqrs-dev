import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Add your Firebase project configuration here (from Firebase Console > Project Settings)
const firebaseConfig = {
  apiKey: "AIzaSyDBrmie91itNQlNMb_6npm9p89ZpfQF5HI",
  authDomain: "seeqrs-dev.firebaseapp.com",
  projectId: "seeqrs-dev",
  storageBucket: "seeqrs-dev.appspot.com",
  messagingSenderId: "312672461672",
  appId: "1:312672461672:web:694e91bcd44ec48858ecdd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

// Initialize Firestore
export const db = getFirestore(app);