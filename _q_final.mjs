// Bukti akhir: buka dashboard.html APA ADANYA (tanpa trik redirect),
// lalu hitung kegiatan yang benar-benar tampil di kalender.
export default async function run(page) {
  const log = [];
  page.on("pageerror", (e) => log.push(`[PAGEERROR] ${e.message}`));
  page.on("console", (m) => {
    const t = m.text();
    if (/gagal|error|⚠️|❌|realtime/i.test(t)) log.push(`[${m.type()}] ${t}`);
  });

  await page.goto("http://127.0.0.1:5599/dashboard.html", {
    waitUntil: "load",
  });
  await page.waitForTimeout(6000);

  return await page
    .evaluate(async () => {
      const r = {
        url: location.href,
        title: document.title,
        fungsiPulih: typeof window.pulihkanDataDariServer,
      };

      // Tunggu realtime sync mengisi data (maks 8 detik).
      for (let i = 0; i < 16; i++) {
        const n = (window.getDataRealtimeAdmin?.()?.eventData || []).length;
        if (n > 0) break;
        await new Promise((res) => setTimeout(res, 500));
      }

      const d = window.getDataRealtimeAdmin?.() || {};
      r.dataTerisi = {
        kunjungan: (d.kunjunganData || []).length,
        ruang: (d.ruangData || []).length,
        program: (d.programData || []).length,
        event: (d.eventData || []).length,
      };

      // Kalender Beranda (bulan ini = Oktober 2026).
      window.renderCalendar(9, 2026);
      r.stripBerandaOkt = document.querySelectorAll(
        "#calendarGrid .event-strip",
      ).length;

      // Kalender penuh Juli 2026 (bulan terbanyak).
      window.switchMenu("kalender");
      await new Promise((res) => setTimeout(res, 400));
      window.renderCalendarFull(6, 2026);
      r.stripKalenderJuli = document.querySelectorAll(
        "#calendarGridFull .event-strip",
      ).length;
      r.hariAdaKegiatanJuli = document.querySelectorAll(
        "#calendarGridFull .day.has-event",
      ).length;

      // Tabel jadwal.
      r.barisKunjungan = document.querySelectorAll(
        "#kunjunganTableBody tr",
      ).length;
      r.totalKunjungan = (
        document.getElementById("totalKunjungan")?.innerText || ""
      ).trim();
      r.kegiatanBulanIni = (
        document.getElementById("eventCountBadge")?.textContent || ""
      ).trim();

      return r;
    })
    .then((hasil) => ({ hasil, log }));
}
