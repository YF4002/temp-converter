import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHN5gL_q6GwE01Ae7bo2u8icfTnOZvySw",
  authDomain: "temp-converter-fb8f1.firebaseapp.com",
  projectId: "temp-converter-fb8f1",
  storageBucket: "temp-converter-fb8f1.firebasestorage.app",
  messagingSenderId: "326349318923",
  appId: "1:326349318923:web:c3b6b0b0130986ba2bd00e",
  measurementId: "G-6K8YPT7YZ3"
};

const app = initializeApp(firebaseConfig); 
const provider = new GoogleAuthProvider();


export { provider };

