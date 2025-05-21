import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig"; 

export const createUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User registered:", userCredential.user);
    return userCredential.user;
  } catch (error) {
    handleAuthError(error);
    throw error;
  }
};

export const signInUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User signed in:", userCredential.user);
    return userCredential.user;
  } catch (error) {
    handleAuthError(error);
    throw error;
  }
};

const handleAuthError = (error) => {
  switch (error.code) {
    case 'auth/email-already-in-use':
      console.log("Email address is already in use!");
      break;
    case 'auth/invalid-email':
      console.log("Email address is invalid.");
      break;
    case 'auth/weak-password':
      console.log("Password should be at least 6 characters.");
      break;
    case 'auth/user-not-found':
    case 'auth/wrong-password':
      console.log("Invalid email or password.");
      break;
    default:
      console.log("Authentication error:", error.message);
  }
};
