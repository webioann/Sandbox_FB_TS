import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore"

// const firebaseConfig = {
//     apiKey: process.env.FIREBASE_API_KEY,
//     authDomain: process.env.FIREBASE_AUTH_DOMAIN,

//     projectId: process.env.FIREBASE_PROJECT_ID,

//     storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.FIREBASE_APP_ID,
// };
// const firebaseConfig = {
//     apiKey: "AIzaSyDZmb_S4gETGhD-Uy4a8nk2ZQAgFTOoE3o",
//     authDomain: "crud-db1d8.firebaseapp.com",
//     projectId: "crud-db1d8",
//     storageBucket: "crud-db1d8.appspot.com",
//     messagingSenderId: "683299538072",
//     appId: "1:683299538072:web:8f183dfefa8b061b917ced"
// };
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: "crud-db1d8",
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
