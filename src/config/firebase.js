// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbaW9z8UKx4CPE5uEz318vuuomlZ3xPsc",
  authDomain: "vite-contact-eb28c.firebaseapp.com",
  projectId: "vite-contact-eb28c",
  storageBucket: "vite-contact-eb28c.firebasestorage.app",
  messagingSenderId: "978115781833",
  appId: "1:978115781833:web:d6569e53888be8a4331918"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);