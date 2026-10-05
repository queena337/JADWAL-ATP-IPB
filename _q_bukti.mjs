// Bukti final: dengan login dimatikan, tampilkan berapa kegiatan yang muncul.
export default async function run(page) {
  const log = [];
  page.on("pageerror", (e) => log.push(`[PAGEERROR] ${e.message}`));

  // Cegah redirect ke halaman login (simulasi "sudah login").
  await page.addInitScript(() => {
    const ganti = (v) => {
      if (String(v).includes("index.html")) {
        window.__REDIRECT_DICEGAH__ = v;
        return;
      }
    };
    try {
      window.location.replace = function (u) {
        ganti(u);
      };
    } catch (e) {}
    try {
      Object.defineProperty(window.location, "href", {
        configurable: true,
        set: ganti,
        get: () => document.URL,
      });
    } catch (e) {}
  });

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

  await page.goto("http://127.0.0.1:5599/dashboard.html", {
    waitUntil: "load",
  });
  await page.waitForTimeout(2500);

  const hasil = await page.evaluate(async () => {
    window.alert = function () {};
    const r = {
      title: document.title,
      redirectDicegah: window.__REDIRECT_DICEGAH__ || null,
      fungsiPulih: typeof window.pulihkanDataDariServer,
    };
    if (r.fungsiPulih !== "function") return r;

    // Ambil data server, terapkan, lalu lihat kalender.
    const url =
      "https://firestore.googleapis.com/v1/projects/jadwal-atp-ipb-6e767/" +
      "databases/(default)/documents/sharedData/dashboard" +
      "?key=AIzaSyBa3Jv1Ww_MjQI5WTEh5AJbfiSGzJLQzHM";
    const doc = await (await fetch(url)).json();
    const f = doc.fields || {};
    const obj = (x) => {
      if (!x) return undefined;
      if (x.stringValue !== undefined) return x.stringValue;
      if (x.integerValue !== undefined) return parseInt(x.integerValue, 10);
      if (x.doubleValue !== undefined) return x.doubleValue;
      if (x.booleanValue !== undefined) return x.booleanValue;
      if (x.arrayValue !== undefined)
        return (x.arrayValue.values || []).map((v) => obj(v.mapValue.fields));
      if (x.mapValue !== undefined) return obj(x.mapValue.fields);
      return undefined;
    };
    const arr = (k) =>
      (((f[k] || {}).arrayValue || {}).values || [])
        .map((v) => obj(v.mapValue.fields))
        .filter(Boolean);
    const str = (k) =>
      (((f[k] || {}).arrayValue || {}).values || []).map((v) => v.stringValue);
    const data = {
      kunjunganData: arr("kunjunganData"),
      ruangData: arr("ruangData"),
      balaiData: arr("balaiData"),
      programData: arr("programData"),
      eventData: arr("eventData"),
      capaianData: arr("capaianData"),
      capaianMingguanData: arr("capaianMingguanData"),
      masterRuangan: str("masterRuangan"),
      masterTempat: str("masterTempat"),
      masterPic: str("masterPic"),
      masterInstansi: str("masterInstansi"),
      nextKunjunganId: obj(f.nextKunjunganId) || 1,
      nextRuangId: obj(f.nextRuangId) || 1,
      nextBalaiId: obj(f.nextBalaiId) || 1,
      nextProgramId: obj(f.nextProgramId) || 1,
      nextEventId: obj(f.nextEventId) || 1,
    };

    r.dataServer = {
      kunjungan: data.kunjunganData.length,
      ruang: data.ruangData.length,
      program: data.programData.length,
      event: data.eventData.length,
    };

    window.terapkanDataRealtimeAdmin(data);
    r.eventDiMemori = (window.getDataRealtimeAdmin()?.eventData || []).length;

    // Kalender dashboard (Beranda).
    window.renderCalendar(9, 2026);
    r.stripKalenderBeranda = document.querySelectorAll(
      "#calendarGrid .event-strip",
    ).length;
    r.kegiatanBulanIni = (
      document.getElementById("eventCountBadge")?.textContent || ""
    ).trim();

    // Kalender penuh (menu Kalender).
    window.switchMenu("kalender");
    await new Promise((res) => setTimeout(res, 500));
    window.renderCalendarFull(6, 2026);
    r.stripKalenderJuli = document.querySelectorAll(
      "#calendarGridFull .event-strip",
    ).length;
    r.hariAdaKegiatanJuli = document.querySelectorAll(
      "#calendarGridFull .day.has-event",
    ).length;

    // Daftar event + tabel jadwal.
    r.barisKunjungan = document.querySelectorAll(
      "#kunjunganTableBody tr",
    ).length;
    r.totalKunjungan = (
      document.getElementById("totalKunjungan")?.innerText || ""
    ).trim();

    return r;
  });

  return { hasil, log };
}
