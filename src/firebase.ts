import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCtePMQGay0yr4Qnu1RXafHR9-AlUG85M8',
  authDomain: 'noname-digital-marketplace.firebaseapp.com',
  projectId: 'noname-digital-marketplace',
  storageBucket: 'noname-digital-marketplace.appspot.com',
  messagingSenderId: '1019893079353',
  appId: '1:1019893079353:web:817550c9027b2f64c85ce8',
  measurementId: 'G-X02Z0EMBS6',
};

initializeApp(firebaseConfig);

export const auth = getAuth();

export const register = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

export const login = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);
