// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhSvr92Xv9Re5_gVZQCJMvog1R2SUlArI",
  authDomain: "react-newuser-form.firebaseapp.com",
  databaseURL: "https://react-newuser-form-default-rtdb.firebaseio.com",
  projectId: "react-newuser-form",
  storageBucket: "react-newuser-form.appspot.com",
  messagingSenderId: "779063859217",
  appId: "1:779063859217:web:2b0995697d65b52435f9b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);