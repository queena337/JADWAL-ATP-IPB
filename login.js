import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import {
  browserLocalPersistence,
  setPersistence,
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

// ✅ PAKAI EVENT LISTENER, BUKAN onclick
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const loginBtn = document.getElementById("loginBtn");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const errorMessage = document.getElementById("errorMessage");

  loginForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const username = usernameInput.value.trim().toLowerCase();
    const password = passwordInput.value;

    if (username !== "agribusinessandtechnologypark") {
      errorMessage.textContent = "Username salah!";
      errorMessage.style.display = "block";
      return;
    }

    const email =
      "agribusinessandtechnologypark@jadwal-atp-ipb-6e767.firebaseapp.com";

    loginBtn.disabled = true;
    loginBtn.textContent = "Loading...";
    errorMessage.style.display = "none";

    try {
      await setPersistence(auth, browserLocalPersistence);
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "dashboard.html";
    } catch (error) {
      const messages = {
        "auth/invalid-credential": "Username atau password salah.",
        "auth/user-not-found":
          "Akun admin belum dibuat di Firebase Authentication.",
        "auth/invalid-email": "Email teknis admin tidak valid di konfigurasi.",
        "auth/network-request-failed": "Koneksi ke Firebase gagal.",
        "auth/operation-not-allowed":
          "Login Email/Password belum diaktifkan di Firebase Authentication.",
        "auth/too-many-requests":
          "Terlalu banyak percobaan login. Coba lagi nanti.",
      };
      errorMessage.textContent =
        messages[error.code] || `Login gagal: ${error.message}`;
      errorMessage.style.display = "block";
      loginBtn.disabled = false;
      loginBtn.textContent = "Login";
    }
  });
});
