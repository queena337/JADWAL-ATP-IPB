import { auth } from "./firebase-config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { startRealtimeDataSync, saveRealtimeData } from "./firebase-sync.js";

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.replace("index.html");
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
