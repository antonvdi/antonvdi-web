// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoVD8ICn2vOSOCVqexCJEbifpbrStwQ8k",
  authDomain: "antonirvold-7dce1.firebaseapp.com",
  projectId: "antonirvold-7dce1",
  storageBucket: "antonirvold-7dce1.appspot.com",
  messagingSenderId: "199619374551",
  appId: "1:199619374551:web:84c73f40afc6e60d96af92",
  measurementId: "G-CXKPLV0E74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);