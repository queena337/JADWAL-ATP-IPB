export default async function run(page, ui) {
  await page.setViewportSize({ width: 1280, height: 900 });

  // 1) Isi localStorage dengan event + jadwal sumber
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
      tanggal: "2026-09-08",
      tanggalMulai: "2026-09-08",
      tanggalSelesai: "2026-09-08",
    };
    const ev = {
      id: 9999,
      nama: "📋 Kunjungan BMLEH Jerman",
      tanggal: 8,
      bulan: 9,
      tahun: 2026,
      tanggalMulai: "2026-09-08",
      tanggalSelesai: "2026-09-08",
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
    localStorage.setItem("ruangData", "[]");
    localStorage.setItem("balaiData", "[]");
    localStorage.setItem("programData", "[]");
    localStorage.setItem("eventData", JSON.stringify([ev]));
  });
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
  await page.waitForTimeout(1200);

  // 2) Pindah ke menu Kalender
  await page.evaluate(() => {
    const l = document.querySelector('.menu a[data-page="kalender"]');
    if (l) l.click();
  });
  await page.waitForTimeout(800);

  // 3) Cari strip event & klik
  const stripCount = await page.evaluate(() => {
    const strips = document.querySelectorAll("#calendarGridFull .event-strip");
    if (strips.length > 0) {
      strips[0].click();
      return { count: strips.length, clicked: true };
    }
    return { count: 0, clicked: false };
  });
  await page.waitForTimeout(900);

  const state = await page.evaluate(() => {
    const modal = document.getElementById("eventDetailModal");
    const extra = document.getElementById("detailEventExtra");
    const h3 = modal ? modal.querySelector(".modal-header h3") : null;
    if (!modal) return { error: "no modal" };
    const active = modal.classList.contains("active");
    const display = getComputedStyle(modal).display;
    return {
      active,
      display,
      eventColorVar: modal.style.getPropertyValue("--event-color"),
      accentBg: h3 ? getComputedStyle(h3, "::before").backgroundColor : "",
      borderTop: getComputedStyle(modal).borderTopColor,
      nama: document.getElementById("detailEventNama").textContent,
      extraText: extra ? extra.textContent.replace(/\s+/g, " ").trim() : "",
    };
  });
  await page.screenshot({ path: "c:/JADWAL-ATP-IPB-main/_shot_detail4.png" });
  return { stripCount, state };
}
