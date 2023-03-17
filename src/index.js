import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjl_L_F_NVHvpE1XKxEnSKRUA_eWpZIEk",
  authDomain: "ecommerce-react-final.firebaseapp.com",
  projectId: "ecommerce-react-final",
  storageBucket: "ecommerce-react-final.appspot.com",
  messagingSenderId: "760250565294",
  appId: "1:760250565294:web:d56db40089240a5678233f"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
  
);


