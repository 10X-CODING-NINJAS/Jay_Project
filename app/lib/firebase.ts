// lib/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDz5SpsSy_YaIN5LzQGa-SKZy0foTuS4s8',
  authDomain: 'sqac-qr-attendance.firebaseapp.com',
  projectId: 'sqac-qr-attendance',
  storageBucket: 'sqac-qr-attendance.appspot.com',
  messagingSenderId: '583186886076',
  appId: '1:583186886076:web:9d67175e96105b3f824fb9',
  measurementId: 'G-TNC05GLTMT',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
