import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyDmkUYSv42KZNW9qnMCJdbRuVO3ifFhScA",
  authDomain: "demoday-cc353.firebaseapp.com",
  databaseURL:
    "https://demoday-cc353-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "demoday-cc353",
  storageBucket: "demoday-cc353.appspot.com",
  messagingSenderId: "1050347449682",
  appId: "1:1050347449682:web:43b5175cf9d9336e029e8b",
  measurementId: "G-W1SBB6Z0GV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
