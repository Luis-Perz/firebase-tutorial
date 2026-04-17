import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCIm3aC9abxwYq4q9RYLM6LzAB5nowuGas",
    authDomain: "test-s-1e371.firebaseapp.com",
    projectId: "test-s-1e371",
    storageBucket: "test-s-1e371.firebasestorage.app",
    messagingSenderId: "881152746662",
    appId: "1:881152746662:web:75b19313a0c7476374c067"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, provider, db, storage, signInWithPopup };