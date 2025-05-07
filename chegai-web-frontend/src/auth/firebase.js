// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHCQRKdu0XvYK8z62u6s-vdx6MT0TAmCA",
  authDomain: "work-59620.firebaseapp.com",
  projectId: "work-59620",
  storageBucket: "work-59620.firebasestorage.app",
  messagingSenderId: "459285562358",
  appId: "1:459285562358:web:91d0111f9b00a9198dbdd7",
  measurementId: "G-FR3Q0SPWZ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);