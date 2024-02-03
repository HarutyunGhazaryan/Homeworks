import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyD3C_6RzkJWW_FZiSU1N7b4_q7mF0IT-BY',
    authDomain: 'exercise2-fc210.firebaseapp.com',
    projectId: 'exercise2-fc210',
    storageBucket: 'exercise2-fc210.appspot.com',
    messagingSenderId: '452790095732',
    appId: '1:452790095732:web:095c90876b613517832621',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
