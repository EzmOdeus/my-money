// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyD6FGqTEamLtqPmaVmxG-foqoi16v8Guys",
  authDomain: "ei-traker.firebaseapp.com",
  projectId: "ei-traker",
  storageBucket: "ei-traker.appspot.com",
  messagingSenderId: "963545870703",
  appId: "1:963545870703:web:cddf363c0481676820f89a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

// firebase login
// firebase init
// firebase deploy
