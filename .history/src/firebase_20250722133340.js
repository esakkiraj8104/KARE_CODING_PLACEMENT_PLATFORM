// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBn_KcIKLmIVjeTd-o6-IFikeE3ysOJ-PE",
  authDomain: "kare-coding-assesment-platform.firebaseapp.com",
  projectId: "kare-coding-assesment-platform",
  storageBucket: "kare-coding-assesment-platform.firebasestorage.app",
  messagingSenderId: "302623827492",
  appId: "1:302623827492:web:b48501fb63b0acc12bdab1"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
