// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDBrmie91itNQlNMb_6npm9p89ZpfQF5HI",
  authDomain: "seeqrs-dev.firebaseapp.com",
  projectId: "seeqrs-dev",
  storageBucket: "seeqrs-dev.appspot.com",
  messagingSenderId: "312672461672",
  appId: "1:312672461672:web:e2ca0841595f5dcc58ecdd",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
