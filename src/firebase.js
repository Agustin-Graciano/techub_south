import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "supisupi",
  authDomain: "supisupi",
  projectId: "supisupi",
  storageBucket: "supisupi",
  messagingSenderId: "supisupi",
  appId: "supisupi",
  measurementId: "supisupi"
};

initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
