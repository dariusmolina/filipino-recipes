// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbYH37N59wJzTouJt9MSePQtpdkXF_VzA",
  authDomain: "filipino-recipes-fba8e.firebaseapp.com",
  projectId: "filipino-recipes-fba8e",
  storageBucket: "filipino-recipes-fba8e.appspot.com",
  messagingSenderId: "127836399183",
  appId: "1:127836399183:web:101bcfe9bac2208c626c3a",
  measurementId: "G-K4DMP08X6B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth};