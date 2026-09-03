import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVMyo8vmiXwJe1hdWACuOE-N-X89aRG20",
  authDomain: "smart-read-d7c40.firebaseapp.com",
  projectId: "smart-read-d7c40",
  storageBucket: "smart-read-d7c40.firebasestorage.app",
  messagingSenderId: "445913798065",
  appId: "1:445913798065:web:fac4c256ec7a350dcd9990",
  measurementId: "G-35F24DTXFG"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
