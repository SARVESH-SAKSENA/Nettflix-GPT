// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
      import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBg1Exn7srpYUflso4wY8SQ0bAlw9kNQ84",
  authDomain: "netflix-gpt-41c9d.firebaseapp.com",
  projectId: "netflix-gpt-41c9d",
  storageBucket: "netflix-gpt-41c9d.firebasestorage.app",
  messagingSenderId: "143643014771",
  appId: "1:143643014771:web:db545138a2c47b8d16dc06",
  measurementId: "G-DRYLJVPNSK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
