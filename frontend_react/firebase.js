// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJXPvXDTrTiZl9Xg6vL4Yfp4K-9hDgThM",
  authDomain: "portfolio-contact-form-4a806.firebaseapp.com",
  projectId: "portfolio-contact-form-4a806",
  storageBucket: "portfolio-contact-form-4a806.appspot.com",
  messagingSenderId: "610097493988",
  appId: "1:610097493988:web:15e2ade5009409ba2f39f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);