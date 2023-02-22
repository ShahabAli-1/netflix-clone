import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARxMOAtZ177WQcKe94LpSueI7KdC8_ePw",
  authDomain: "netflix-clone-7d09f.firebaseapp.com",
  projectId: "netflix-clone-7d09f",
  storageBucket: "netflix-clone-7d09f.appspot.com",
  messagingSenderId: "1028202076225",
  appId: "1:1028202076225:web:3c1deb0633547ebe8bcec0"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider(app)
