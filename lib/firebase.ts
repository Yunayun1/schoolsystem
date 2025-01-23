import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';  // Firebase Authentication
import { getFirestore } from 'firebase/firestore';  // Firestore

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAytKNW8J1-fMI9s0qIbrVlN69RtNYAVxU",
  authDomain: "school-management-system-e7a75.firebaseapp.com",
  projectId: "school-management-system-e7a75",
  storageBucket: "school-management-system-e7a75.firebasestorage.app",
  messagingSenderId: "359071669863",
  appId: "1:359071669863:web:ce8d594903ee2c25e5fec2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
