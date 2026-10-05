// QA: tiru kondisi nyata — browser punya data lengkap (seperti hasil sinkron
// Firebase), lalu periksa apakah kalender MENAMPILKAN kegiatan.
export default async function run(page) {
  await page.route("**/firebase-config.js", (route) =>
    route.fulfill({
      status: 200,
      contentType: "text/javascript",
      body: `export const auth = { onAuthStateChanged: function (cb) { cb({ email: "qa@local" }); } }; export const db = {};`,
    }),
  );
  await page.route("**/firebase-dashboard.js", (route) =>
    route.fulfill({
      status: 200,
      contentType: "text/javascript",
      body: "window.__QA_NO_FIREBASE__ = true;",
    }),
  );

  await page.goto("http://127.0.0.1:5599/dashboard-served.html", {
    waitUntil: "domcontentloaded",
  });
  await page.waitForTimeout(2500);

  return await page.evaluate(async () => {
    window.alert = function () {};
    const url =
      "https://firestore.googleapis.com/v1/projects/jadwal-atp-ipb-6e767/" +
      "databases/(default)/documents/sharedData/dashboard" +
      "?key=AIzaSyBa3Jv1Ww_MjQI5WTEh5AJbfiSGzJLQzHM";
    const doc = await (await fetch(url)).json();
    const fields = doc.fields || {};
    const keObjek = (f) => {
      if (!f) return undefined;
      if (f.stringValue !== undefined) return f.stringValue;
      if (f.integerValue !== undefined) return parseInt(f.integerValue, 10);
      if (f.doubleValue !== undefined) return f.doubleValue;
      if (f.booleanValue !== undefined) return f.booleanValue;
      if (f.arrayValue !== undefined)
        return (f.arrayValue.values || []).map((v) =>
          keObjek(v.mapValue.fields),
        );
      if (f.mapValue !== undefined) return keObjek(f.mapValue.fields);
      return undefined;
    };
    const daftar = (k) =>
      (((fields[k] || {}).arrayValue || {}).values || [])
        .map((v) => keObjek(v.mapValue.fields))
        .filter(Boolean);
    const str = (k) =>
      (((fields[k] || {}).arrayValue || {}).values || []).map(
        (v) => v.stringValue,
      );

    const data = {
      kunjunganData: daftar("kunjunganData"),
      ruangData: daftar("ruangData"),
      balaiData: daftar("balaiData"),
      programData: daftar("programData"),
      eventData: daftar("eventData"),
      capaianData: daftar("capaianData"),
      capaianMingguanData: daftar("capaianMingguanData"),
      masterRuangan: str("masterRuangan"),
      masterTempat: str("masterTempat"),
      masterPic: str("masterPic"),
      masterInstansi: str("masterInstansi"),
      nextKunjunganId: keObjek(fields.nextKunjunganId) || 1,
      nextRuangId: keObjek(fields.nextRuangId) || 1,
      nextBalaiId: keObjek(fields.nextBalaiId) || 1,
      nextProgramId: keObjek(fields.nextProgramId) || 1,
      nextEventId: keObjek(fields.nextEventId) || 1,
    };

    const hasil = {};

    // 1) Data langsung (seperti lewat firebase realtime).
    if (typeof window.terapkanDataRealtimeAdmin === "function") {
      window.terapkanDataRealtimeAdmin(data);
      hasil.setelahTerapkan = {
        eventData: (window.getDataRealtimeAdmin()?.eventData || []).length,
      };
    } else {
      hasil.setelahTerapkan = "FUNGSI terapkanDataRealtimeAdmin TIDAK ADA";
    }

    // 2) Gambar kalender Juli 2026 (bulan dengan kegiatan terbanyak).
    if (typeof window.renderCalendarFull === "function") {
      window.renderCalendarFull(6, 2026);
      hasil.stripJuli = document.querySelectorAll(
        "#calendarGridFull .event-strip",
      ).length;
      hasil.selJuli = document.querySelectorAll(
        "#calendarGridFull .day.has-event",
      ).length;
      hasil.adaGrid = !!document.getElementById("calendarGridFull");
      hasil.isiGridAwal = (
        document.getElementById("calendarGridFull")?.innerHTML || ""
      ).slice(0, 120);
    } else {
      hasil.stripJuli = "FUNGSI renderCalendarFull TIDAK ADA";
    }

    // 3) Halaman Kalender (page-kalender) juga.
    if (typeof window.switchMenu === "function") {
      window.switchMenu("kalender");
      await new Promise((r) => setTimeout(r, 300));
      hasil.stripHalamanKalender = document.querySelectorAll(
        "#calendarGridFull .event-strip",
      ).length;
    }

    hasil.jumlahEventDiMemori = data.eventData.length;
    return hasil;
  });
}
