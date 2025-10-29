import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA8YGAReHeU9LZa64X-MUY5x4JxlbYy0-4",
  authDomain: "relatorios-app-93aee.firebaseapp.com",
  projectId: "relatorios-app-93aee",
  storageBucket: "relatorios-app-93aee.firebasestorage.app",
  messagingSenderId: "755495500516",
  appId: "1:755495500516:web:b4262cc77f975866d90af1",
  measurementId: "G-SFMZTLCCE1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

