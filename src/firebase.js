import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyDMRxbGlcYCxVMiPuWJLjM5MxMGMcbG2s4',
    authDomain: 'shopify-eed5f.firebaseapp.com',
    databaseURL:
        'https://shopify-eed5f-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'shopify-eed5f',
    storageBucket: 'shopify-eed5f.appspot.com',
    messagingSenderId: '1060239308734',
    appId: '1:1060239308734:web:1ce37b214e431af4976bef',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
