import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfhhg7eUqWMVBw7ukMSI98SM6YVAvRQCU",
  authDomain: "assignment4new-82891.firebaseapp.com",
  projectId: "assignment4new-82891",
  storageBucket: "assignment4new-82891.firebasestorage.app",
  messagingSenderId: "521930161684",
  appId: "1:521930161684:web:b67d16449a024c10caf101",
  measurementId: "G-Z3RHHMGSHB"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
