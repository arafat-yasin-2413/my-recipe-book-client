// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDoQ0ydDlN8ynlQFNh0OE3j0Hr6cn4O_o",
  authDomain: "recipe-book-app-e138e.firebaseapp.com",
  projectId: "recipe-book-app-e138e",
  storageBucket: "recipe-book-app-e138e.firebasestorage.app",
  messagingSenderId: "602964401625",
  appId: "1:602964401625:web:6539063e57be6ccd868dc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);