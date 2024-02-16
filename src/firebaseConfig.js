import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL4QC47NODtISLdFKFbmhKThFBNEB4ENM",
  authDomain: "a-mais-indicada.firebaseapp.com",
  projectId: "a-mais-indicada",
  storageBucket: "a-mais-indicada.appspot.com",
  messagingSenderId: "265152759807",
  appId: "1:265152759807:web:15d8d6019c18ed089189ca"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
