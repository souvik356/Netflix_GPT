// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcoagaS37_Aeds9OTkmcnrFaidTo9eo9A",
  authDomain: "netflix-gpt-682e0.firebaseapp.com",
  projectId: "netflix-gpt-682e0",
  storageBucket: "netflix-gpt-682e0.firebasestorage.app",
  messagingSenderId: "906768510212",
  appId: "1:906768510212:web:f6cac41982e6a0db4b7451",
  measurementId: "G-P74GTF2RE6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
