// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDtY7wrx-2osWiVhZcBEkne73KrwpyG1h4",
  authDomain: "e-mart-e98fa.firebaseapp.com",
  projectId: "e-mart-e98fa",
  storageBucket: "e-mart-e98fa.appspot.com",
  messagingSenderId: "776730111348",
  appId: "1:776730111348:web:2507f6552a46f7063b1021",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
