import { db } from "./firebase-config.js";
import {
  doc,
  onSnapshot,
  setDoc,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const sharedDataRef = doc(db, "sharedData", "dashboard");

export function startRealtimeDataSync(onData, onError, onMissing) {
  return onSnapshot(
    sharedDataRef,
    (snapshot) => {
      if (snapshot.exists()) {
        onData(snapshot.data());
      } else if (onMissing) {
        onMissing();
      }
    },
    onError,
  );
}

export async function saveRealtimeData(data) {
  await setDoc(sharedDataRef, {
    ...data,
    updatedAt: serverTimestamp(),
  });
}
