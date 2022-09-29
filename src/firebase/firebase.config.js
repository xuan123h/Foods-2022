import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyD55JOCy54iXg36BiFDEAGvC473f-y-o1o",
  authDomain: "foods-354c9.firebaseapp.com",
  projectId: "foods-354c9",
  storageBucket: "foods-354c9.appspot.com",
  messagingSenderId: "785232679934",
  appId: "1:785232679934:web:9dd3e7ff9c6beff19d66af",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
