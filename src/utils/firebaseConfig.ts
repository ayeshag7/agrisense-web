// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC_ZVr5E0QWPUfx95n-KIcKL-SYFklo0p0",
    authDomain: "agrisense-f008b.firebaseapp.com",
    projectId: "agrisense-f008b",
    storageBucket: "agrisense-f008b.firebasestorage.app",
    messagingSenderId: "1030095630598",
    appId: "1:1030095630598:web:8f9dd7c9d98c547f18ae87",
    measurementId: "G-9L83CFM660"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the app object
export { app };