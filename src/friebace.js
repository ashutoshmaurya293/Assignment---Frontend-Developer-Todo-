import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyALznLNg_jVhVef4EgfyLwvDfo0KWfnm6M",
  authDomain: "todo-554ca.firebaseapp.com",
  projectId: "todo-554ca",
  storageBucket: "todo-554ca.appspot.com",
  messagingSenderId: "831197253321",
  appId: "1:831197253321:web:edeeac7360f02449e08718",
  measurementId: "G-NJZEHS494L",
  databaseURL:"https://todo-554ca-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
