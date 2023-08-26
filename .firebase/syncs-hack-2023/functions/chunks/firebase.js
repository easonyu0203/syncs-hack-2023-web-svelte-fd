import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB54nr8Kf0B93FP5lCM_u0q0S6KnetybzM",
  authDomain: "syncs-hack-2023.firebaseapp.com",
  projectId: "syncs-hack-2023",
  storageBucket: "syncs-hack-2023.appspot.com",
  messagingSenderId: "889434581645",
  appId: "1:889434581645:web:c6e07f55241380373d50c4",
  measurementId: "G-1TNP3QXPE0"
};
initializeApp(firebaseConfig);
const firestore = getFirestore();
const auth = getAuth();
const storage = getStorage();
export {
  auth as a,
  firestore as f,
  storage as s
};
