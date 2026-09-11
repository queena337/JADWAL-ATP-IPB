// ============================================
// FIREBASE-CONFIG.JS - DI FOLDER ADMIN
// ============================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBa3Jv1Ww_MjQI5WTEh5AJbfiSGzJLQzHM",
  authDomain: "jadwal-atp-ipb-6e767.firebaseapp.com",
  projectId: "jadwal-atp-ipb-6e767",
  storageBucket: "jadwal-atp-ipb-6e767.firebasestorage.app",
  messagingSenderId: "412478739151",
  appId: "1:412478739151:web:e34aa2b8eb7ba73c505dba",
  measurementId: "G-QGGXESS3S2",
};

console.log("🔥 Firebase Config loaded!");

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

console.log("✅ Firebase initialized!");
