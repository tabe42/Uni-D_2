// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdSwW51B5qup2Kbo5bTcCFCK9YzSRnpYg",
  authDomain: "qrcodescanner1-4a0d4.firebaseapp.com",
  projectId: "qrcodescanner1-4a0d4",
  storageBucket: "qrcodescanner1-4a0d4.appspot.com",
  messagingSenderId: "779057018394",
  appId: "1:779057018394:web:c794145bc35dbf800783a3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
