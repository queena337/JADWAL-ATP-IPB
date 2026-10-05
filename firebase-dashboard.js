import { auth } from "./firebase-config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { startRealtimeDataSync, saveRealtimeData } from "./firebase-sync.js";

// PENTING: dashboard TIDAK lagi dilempar otomatis ke halaman login.
//
// Sebelumnya, begitu Firebase melaporkan sesi tidak aktif (mis. sesi login
// kedaluwarsa karena dibiarkan semalaman, atau koneksi sedang bermasalah),
// halaman langsung di-redirect ke index.html. Akibatnya pengguna yang sedang
// mengelola jadwal tiba-tiba terlempar ke halaman Login dan melihat
// "kalender kosong" — padahal kegiatan masih tersimpan lengkap di server.
//
// Sekarang pengguna cukup diberi tahu lewat console dan tetap bisa melihat
// serta mengelola jadwal yang tersimpan. Login tetap diperlukan agar data
// bisa tersinkron ke server.
onAuthStateChanged(auth, (user) => {
  if (!user) {
    console.warn(
      "⚠️ Sesi login tidak aktif. Jadwal tetap tampil dari data tersimpan; " +
        "silakan login ulang agar perubahan tersinkron ke server.",
    );
  }
});

window.simpanDataRealtime = async function (data) {
  try {
    await saveRealtimeData(data);
    console.log("✅ Data berhasil disimpan ke Firestore");
  } catch (error) {
    console.error("❌ Gagal menyimpan ke Firestore:", error);
    alert(
      "Data lokal tersimpan, tetapi gagal tersinkron ke server. Periksa koneksi dan aturan Firestore.",
    );
  }
};

startRealtimeDataSync(
  (data) => {
    window.terapkanDataRealtimeAdmin?.(data);
  },
  (error) => {
    console.error("❌ Gagal membaca data realtime:", error);
  },
  () => {
    if (window.getDataRealtimeAdmin) {
      window.simpanDataRealtime(window.getDataRealtimeAdmin());
    }
  },
);
