import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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

const auth = getAuth(app);
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });


export { auth, provider };

