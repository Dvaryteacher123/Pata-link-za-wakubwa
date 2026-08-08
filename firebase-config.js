// =========================================================
// FIREBASE CLIENT CONFIG
// Hii SI siri — ni config ya kawaida ya "Firebase Web App" ambayo
// Google yenyewe inasema ni salama kuwa kwenye frontend, kwa sababu
// ulinzi wa kweli wa data upo kwenye Firestore Security Rules
// (angalia firestore.rules), sio kwenye kuficha config hii.
// =========================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  where,
  orderBy,
  serverTimestamp,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Hizi ni config zako halisi kutoka Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyCvQGF9i7EAcUz72-1EriDJzc7Mcxvq-r0",
  authDomain: "pata-link-za-magroup-whatsapp.firebaseapp.com",
  projectId: "pata-link-za-magroup-whatsapp",
  storageBucket: "pata-link-za-magroup-whatsapp.firebasestorage.app",
  messagingSenderId: "603411167221",
  appId: "1:603411167221:web:67c1e724e1cc93299c92bc",
  measurementId: "G-RZJ0E92YF7"
};

// URL rasmi ya backend yako kwenye Render kulingana na jina la mradi wako
export const API_BASE_URL = "https://pata-link-ya-magroup-ya-wakubwa.onrender.com";

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);

export {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  collection,
  doc,
  setDoc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  where,
  orderBy,
  serverTimestamp,
  getDocs,
};
