import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBy6C0s-vBZk9ZZw9i_Bmmo4kHM490LXCo",
  authDomain: "netfilx-clone-c8d27.firebaseapp.com",
  projectId: "netfilx-clone-c8d27",
  storageBucket: "netfilx-clone-c8d27.firebasestorage.app",
  messagingSenderId: "651575222832",
  appId: "1:651575222832:web:52874ef5d9e544158083f5",
  measurementId: "G-XWDM03CB6B"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);


