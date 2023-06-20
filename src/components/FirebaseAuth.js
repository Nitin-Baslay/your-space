// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuxQFXG9Qsgre9qLML7cz6bFpoAj4dNgE",
  authDomain: "your-space-8cf31.firebaseapp.com",
  databaseURL: "https://your-space-8cf31-default-rtdb.firebaseio.com",
  projectId: "your-space-8cf31",
  storageBucket: "your-space-8cf31.appspot.com",
  messagingSenderId: "170121206746",
  appId: "1:170121206746:web:2de77fe3947f0ea907fee3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
