import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDPbvSKZWOzWQE3EJ9BdmOb0FOeiZbYtvI",
  authDomain: "askale-10c98.firebaseapp.com",
  projectId: "askale-10c98",
  storageBucket: "askale-10c98.appspot.com",
  messagingSenderId: "998682109384",
  appId: "1:998682109384:web:099439debc466090274cfd",
  measurementId: "G-MFH8ES20QB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export const googleAuthProvider = new GoogleAuthProvider();

