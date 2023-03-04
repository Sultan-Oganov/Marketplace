import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import storage from 'redux-persist/lib/storage';
import { auth, googleProvider } from '../../firebase';

export const register = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

export const login = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const authWithGoogle = () => signInWithPopup(auth, googleProvider);

export const logout = () => {
  storage.removeItem('persist:root');
  signOut(auth);
};
