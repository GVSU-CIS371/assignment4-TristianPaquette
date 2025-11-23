import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwRx-X0Y6AgookvlrUmJbIl2JUFr2Y5z8",
  authDomain: "cis371-assignment4-89bab.firebaseapp.com",
  projectId: "cis371-assignment4-89bab",
  storageBucket: "cis371-assignment4-89bab.appspot.com",
  messagingSenderId: "795359785134",
  appId: "1:795359785134:web:07543e373152f280a2fd3f",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
