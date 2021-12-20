import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firenase";

const initializeFirebase = () => {
  initializeApp(firebaseConfig)
}

export default initializeFirebase;
