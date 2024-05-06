// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3OW0nJdyWE_7X4PZVJ_zR2NdFbhPCAHE",
  authDomain: "assignment-todo-66b48.firebaseapp.com",
  projectId: "assignment-todo-66b48",
  storageBucket: "assignment-todo-66b48.appspot.com",
  messagingSenderId: "274435343560",
  appId: "1:274435343560:web:f488feace4626156e751fd",
  measurementId: "G-CH8NKR7RDP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) 
