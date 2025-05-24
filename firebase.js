import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCg-SKBUQwXqbOJwvWbI7odyuNVQR1M8q8",
  authDomain: "okulicinproje-7be9f.firebaseapp.com",
  projectId: "okulicinproje-7be9f",
  storageBucket: "okulicinproje-7be9f.firebasestorage.app",
  messagingSenderId: "500512345027",
  appId: "1:500512345027:web:7304ee8d7ebbef79df8b76"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };