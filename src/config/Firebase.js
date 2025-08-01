import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD2OXFJwYmJzfnSpP11Ey0j1wq3quUp5ys",
  authDomain: "emotion-choice-79a97.firebaseapp.com",
  projectId: "emotion-choice-79a97",
  storageBucket: "emotion-choice-79a97.firebasestorage.app",
  messagingSenderId: "534835350199",
  appId: "1:534835350199:web:08720612185c8761431b32"
};
const app = initializeApp(firebaseConfig);
export const Auth= getAuth(app)
export const db= getFirestore(app)
export default app