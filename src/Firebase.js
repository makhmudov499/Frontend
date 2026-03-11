import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJOs0V8bB9GCd9jw1m9X9JkvZebb45q4g",
  authDomain: "exclusive-shop-8b492.firebaseapp.com",
  projectId: "exclusive-shop-8b492",
  storageBucket: "exclusive-shop-8b492.firebasestorage.app",
  messagingSenderId: "396351962879",
  appId: "1:396351962879:web:00beda582f5634dce896ca"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;