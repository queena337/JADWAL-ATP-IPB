// Uji: setelah login (redirect dimatikan), apakah kalender MENAMPILKAN
// semua kegiatan dari server?
export default async function run(page) {
  // Matikan redirect ke halaman login (simulasi "sudah login").
  await page.addInitScript(() => {
    const asli = window.location.replace.bind(window.location);
    window.location.replace = function (u) {
      if (String(u).includes("index.html")) {
        window.__QA_REDIRECT_DICEGAH__ = u;
        return;
      }
      return asli(u);
    };
    Object.defineProperty(window.location, "href", {
      configurable: true,
      set(v) {
        if (String(v).includes("index.html")) {
          window.__QA_REDIRECT_DICEGAH__ = v;
          return;
        }
      },
      get() {
        return document.URL;
      },
    });
  });

  await page.route("**/firebase-config.js", (route) =>
    route.fulfill({
      status: 200,
      contentType: "text/javascript",
      body: `export const auth = { onAuthStateChanged: function (cb) { cb({ email: "qa@local" }); } }; export const db = {};`,
    }),
  );
  // Realtime dimatikan supaya kita menguji lewat pemulihan manual.
  await page.route("**/firebase-dashboard.js", (route) =>
    route.fulfill({
      status: 200,
      contentType: "text/javascript",
      body: "window.__QA_NO_FIREBASE__ = true;",
    }),
  );

  await page.goto("http://127.0.0.1:5599/dashboard.html", {
    waitUntil: "domcontentloaded",
  });
  await page.waitForTimeout(2500);

  return await page.evaluate(async () => {
    window.alert = function () {};
    const hasil = {
      url: location.href,
      title: document.title,
      redirectDicegah: window.__QA_REDIRECT_DICEGAH__ || null,
      fungsiAda: typeof window.pulihkanDataDariServer,
    };

    if (typeof window.pulihkanDataDariServer !== "function") {
      hasil.catatan = "dashboard.js tidak jalan";
      return hasil;
    }

    // Tarik data dari server (seperti yang dilakukan aplikasi).
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

    hasil.dataServer = {
      kunjungan: data.kunjunganData.length,
      ruang: data.ruangData.length,
      balai: data.balaiData.length,
      program: data.programData.length,
      event: data.eventData.length,
    };

    // Terapkan seperti realtime sync + gambar kalender.
    window.terapkanDataRealtimeAdmin(data);
    hasil.setelahTerapkan = (
      window.getDataRealtimeAdmin()?.eventData || []
    ).length;

    window.renderCalendarFull(6, 2026); // Juli 2026
    hasil.stripJuli2026 = document.querySelectorAll(
      "#calendarGridFull .event-strip",
    ).length;
    hasil.selJuli2026 = document.querySelectorAll(
      "#calendarGridFull .day.has-event",
    ).length;

    window.renderCalendarFull(9, 2026); // Oktober 2026
    hasil.stripOkt2026 = document.querySelectorAll(
      "#calendarGridFull .event-strip",
    ).length;

    // Halaman kalender (menu) juga.
    window.switchMenu("kalender");
    await new Promise((r) => setTimeout(r, 400));
    hasil.stripMenuKalender = document.querySelectorAll(
      "#calendarGridFull .event-strip",
    ).length;

    return hasil;
  });
}
