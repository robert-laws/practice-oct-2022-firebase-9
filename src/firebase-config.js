import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB06GeX_9P1tn9_4aw_dDJJVZrS_L_vrBE',
  authDomain: 'practice-oct-2022-firebase-9.firebaseapp.com',
  projectId: 'practice-oct-2022-firebase-9',
  storageBucket: 'practice-oct-2022-firebase-9.appspot.com',
  messagingSenderId: '29684031053',
  appId: '1:29684031053:web:721b87601f698dae178604',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
