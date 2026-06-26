import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBOwmrFEvyxSjpbhYYM985dxe00Lu0l7OM",
    authDomain: "jadwal-atp-ipb.firebaseapp.com",
    projectId: "jadwal-atp-ipb",
    storageBucket: "jadwal-atp-ipb.firebasestorage.app",
    messagingSenderId: "436191423677",
    appId: "1:436191423677:web:1b461bc2f4bd7548ef9bd4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);