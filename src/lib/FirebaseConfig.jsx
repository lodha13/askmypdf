// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
    authDomain: "ai-apps-81e24.firebaseapp.com",
    projectId: "ai-apps-81e24",
    storageBucket: "ai-apps-81e24.firebasestorage.app",
    messagingSenderId: "923569170575",
    appId: "1:923569170575:web:2a8ebdb7d6cd8b90d1e8fa",
    measurementId: "G-CMX864S0M2"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//uncomment if analytics is needed
//const analytics = getAnalytics(app);

export const storage = getStorage(app);