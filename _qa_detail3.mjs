export default async function run(page, ui) {
  await page.setViewportSize({ width: 1280, height: 900 });

  // Isi localStorage DULU sebelum load, agar dashboard.js membacanya saat init.
  await page.goto("http://localhost:4593/dashboard.html", {
    waitUntil: "load",
  });
  await page.evaluate(() => {
    const kunjungan = {
      id: 501,
      nama: "Kunjungan BMLEH Jerman",
      instansi: "BMLEH Jerman",
      jumlahPengunjung: 25,
      tujuan: "Studi banding agribisnis",
      waktu: "11:30 - 12:30",
      ruangan: "Ruang Rapat VIP",
      tempat: "ATP IPB",
      pic: "Novi Putri Jelita",
      warna: "#1e88e5",
      tanggalMulai: "2026-09-08",
      tanggalSelesai: "2026-09-08",
      tanggal: "2026-09-08",
    };
    const ev = {
      id: 9999,
      nama: "📋 Kunjungan BMLEH Jerman",
      tanggalMulai: "2026-09-08",
      tanggalSelesai: "2026-09-08",
      tanggal: 8,
      bulan: 9,
      tahun: 2026,
      waktu: "11:30 - 12:30",
      ruangan: "Ruang Rapat VIP",
      tempat: "ATP IPB",
      pic: "Novi Putri Jelita",
      warna: "#1e88e5",
      dariJadwal: true,
      sumber: "Kunjungan",
      sumberId: 501,
    };
    localStorage.setItem("kunjunganData", JSON.stringify([kunjungan]));
    localStorage.setItem("ruangData", JSON.stringify([]));
    localStorage.setItem("balaiData", JSON.stringify([]));
    localStorage.setItem("programData", JSON.stringify([]));
    localStorage.setItem("eventData", JSON.stringify([ev]));
  });

  // Reload agar data terbaca, lalu jalankan script inline
  await page.reload({ waitUntil: "load" });
  await page.evaluate(() => {
    const inline = Array.from(document.querySelectorAll("script")).find(
      (s) => !s.getAttribute("src") && s.textContent.length > 1000,
    );
    if (inline) {
      try {
        new Function(inline.textContent)();
      } catch (e) {}
    }
  });
  await page.waitForTimeout(1000);

  // Panggil lihatDetailEvent(id) -- fungsi scope dashboard.js, akses via klik?
  // Coba panggil langsung; kalau tidak ada, klik via renderCalendarFull strip.
  const info = await page.evaluate(() => {
    // coba fungsi global-ish
    let called = "none";
    try {
      if (typeof lihatDetailEvent === "function") {
        lihatDetailEvent(9999);
        called = "lihatDetailEvent";
      }
    } catch (e) {
      called = "err:" + e.message;
    }
    return { called };
  });
  await page.waitForTimeout(800);

  const state = await page.evaluate(() => {
    const modal = document.getElementById("eventDetailModal");
    if (!modal) return { error: "no modal" };
    const extra = document.getElementById("detailEventExtra");
    const h3 = modal.querySelector(".modal-header h3");
    return {
      active: modal.classList.contains("active"),
      eventColorVar: modal.style.getPropertyValue("--event-color"),
      accentBg: h3 ? getComputedStyle(h3, "::before").backgroundColor : "",
      borderTop: getComputedStyle(modal).borderTopColor,
      nama: document.getElementById("detailEventNama").textContent,
      extraText: extra ? extra.textContent.replace(/\s+/g, " ").trim() : "",
    };
  });
  await page.screenshot({ path: "c:/JADWAL-ATP-IPB-main/_shot_detail3.png" });
  return { info, state };
}
