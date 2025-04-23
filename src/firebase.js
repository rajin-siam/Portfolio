// src/firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // 👈 for Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGbU6sXh_0ew-0r8gy84GaXs4GjeNT-dU",
  authDomain: "portfolio-project-9c206.firebaseapp.com",
  projectId: "portfolio-project-9c206",
  storageBucket: "portfolio-project-9c206.firebasestorage.app",
  messagingSenderId: "922674216406",
  appId: "1:922674216406:web:a2b29789882e61a8717877"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore database
const db = getFirestore(app);

export default db ;