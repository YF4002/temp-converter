import { useEffect } from 'react';
import { Platform } from 'react-native';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithCredential,
  GoogleAuthProvider,
} from 'firebase/auth';
import * as WebBrowser from 'expo-web-browser';
import {
  makeRedirectUri,
  useAuthRequest,
  ResponseType,
} from 'expo-auth-session';
import { auth } from '../firebaseConfig';

WebBrowser.maybeCompleteAuthSession(); // Ensure any incomplete redirect is handled

// Google OAuth discovery
const discovery = {
  authorizationEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
  tokenEndpoint: 'https://oauth2.googleapis.com/token',
};

// Use your own client ID here
const clientId =
  Platform.OS === 'android'
    ? '326349318923-r2bd2el3dsqv989578ja4t0s6jc88tc5.apps.googleusercontent.com'
    : '326349318923-ni9ih2v3j15sqil34qf69ksb8qv7ppit.apps.googleusercontent.com';

// Custom hook for Google Sign-In
export function useGoogleSignIn(onSuccess, onError) {
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId,
      responseType: ResponseType.Token,
      scopes: ['profile', 'email'],
      redirectUri: makeRedirectUri({ useProxy: true }),
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === 'success') {
      const { access_token } = response.params;

      const credential = GoogleAuthProvider.credential(null, access_token);
      signInWithCredential(auth, credential)
        .then((userCredential) => {
          console.log('Google sign-in successful:', userCredential.user);
          onSuccess && onSuccess(userCredential.user);
        })
        .catch((error) => {
          console.error('Firebase sign-in error:', error);
          onError && onError(error);
        });
    } else if (response?.type === 'error') {
      console.error('AuthSession error:', response);
      onError && onError(new Error('Google Sign-In failed'));
    }
  }, [response]);

  return { request, promptAsync };
}

// Email Registration
export const createUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('User registered:', userCredential.user);
    return userCredential.user;
  } catch (error) {
    handleAuthError(error);
    throw error;
  }
};

// Email Sign-In
export const signInUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('User signed in:', userCredential.user);
    return userCredential.user;
  } catch (error) {
    handleAuthError(error);
    throw error;
  }
};

// Common Auth Error Handling
const handleAuthError = (error) => {
  switch (error.code) {
    case 'auth/email-already-in-use':
      console.log('Email address is already in use!');
      break;
    case 'auth/invalid-email':
      console.log('Invalid email address.');
      break;
    case 'auth/weak-password':
      console.log('Password should be at least 6 characters.');
      break;
    case 'auth/user-not-found':
    case 'auth/wrong-password':
      console.log('Invalid email or password.');
      break;
    default:
      console.log('Authentication error:', error.message);
  }
};
