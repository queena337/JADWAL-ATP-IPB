// Diagnosa: apa yang sebenarnya terjadi pada dashboard.html saat dimuat?
export default async function run(page) {
  const log = [];
  page.on("pageerror", (e) => log.push(`[PAGEERROR] ${e.message}`));
  page.on("console", (m) => {
    const t = m.text();
    if (/gagal|error|⚠️|❌|realtime|berhasil/i.test(t))
      log.push(`[${m.type()}] ${t}`);
  });

  await page.goto("http://127.0.0.1:5599/dashboard.html", {
    waitUntil: "load",
  });
  await page.waitForTimeout(8000);

  const info = await page.evaluate(() => {
    const g = (id) => document.getElementById(id);
    return {
      title: document.title,
      url: location.href,
      // Fungsi inti dari dashboard.js
      fn: {
        getData: typeof window.getDataRealtimeAdmin,
        renderCalendar: typeof window.renderCalendar,
        renderCalendarFull: typeof window.renderCalendarFull,
        sinkron: typeof window.sinkronkanJadwalKeKalender,
        pulih: typeof window.pulihkanDataDariServer,
        terapkan: typeof window.terapkanDataRealtimeAdmin,
        simpan: typeof window.simpanDataRealtime,
      },
      // Elemen kalender
      adaGridBeranda: !!g("calendarGrid"),
      adaGridFull: !!g("calendarGridFull"),
      isiGridBeranda: (g("calendarGrid")?.innerHTML || "").length,
      isiGridFull: (g("calendarGridFull")?.innerHTML || "").length,
      // Data yang berhasil dimuat
      badgeKegiatan: (g("eventCountBadge")?.textContent || "").trim(),
      totalKunjungan: (g("totalKunjungan")?.innerText || "").trim(),
      barisKunjungan: document.querySelectorAll("#kunjunganTableBody tr")
        .length,
      // localStorage
      lsKeys: Object.keys(localStorage),
      lsKunjungan: JSON.parse(localStorage.getItem("kunjunganData") || "[]")
        .length,
      lsEvent: JSON.parse(localStorage.getItem("eventData") || "[]").length,
      // Data global (dashboard.js pakai let, jadi tidak di window)
      cekKunjungan: typeof window.kunjunganData,
    };
  });

  return { info, log: log.slice(-25) };
}
