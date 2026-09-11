import { startRealtimeDataSync } from "./firebase-sync.js";

startRealtimeDataSync(
  (data) => {
    window.terapkanDataRealtimeUser?.(data);
  },
  (error) => {
    console.error("Gagal membaca data realtime untuk user:", error);
  },
);
