import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyCoVD8ICn2vOSOCVqexCJEbifpbrStwQ8k",
  authDomain: "antonirvold-7dce1.firebaseapp.com",
  projectId: "antonirvold-7dce1",
  storageBucket: "antonirvold-7dce1.appspot.com",
  messagingSenderId: "199619374551",
  appId: "1:199619374551:web:84c73f40afc6e60d96af92",
  measurementId: "G-CXKPLV0E74",
};

const app = initializeApp(firebaseConfig);
export const functions = getFunctions(app);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
