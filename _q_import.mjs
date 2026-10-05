// Uji langsung: muat dashboard.js sebagai script dan lihat apa yang terjadi.
export default async function run(page) {
  const err = [];
  page.on("pageerror", (e) => err.push("PAGEERROR: " + e.message));
  page.on("console", (m) => {
    if (m.type() === "error") err.push("CONSOLE: " + m.text());
  });

  await page.goto("http://127.0.0.1:5599/dashboard.html", {
    waitUntil: "load",
  });
  await page.waitForTimeout(5000);

  // Ambil isi dashboard.js dari server, lalu coba jalankan di halaman ini.
  const hasil = await page.evaluate(async () => {
    const r = {};
    const teks = await (await fetch("dashboard.js?v=6")).text();
    r.panjang = teks.length;
    r.awal = teks.slice(0, 60);
    r.akhir = teks.slice(-60);

    // Coba jalankan sebagai module (cara paling ketat) untuk melihat errornya.
    try {
      const blob = new Blob([teks], { type: "text/javascript" });
      const url = URL.createObjectURL(blob);
      await import(/* @vite-ignore */ url);
      r.moduleOk = true;
    } catch (e) {
      r.moduleError = String(e && e.message ? e.message : e);
    }

    r.fnSetelahImport = typeof window.getDataRealtimeAdmin;
    r.jumlahFn = Object.keys(window).filter((k) =>
      /^(render|terapkan|pulih|sinkron|reset)/.test(k),
    ).length;
    return r;
  });

  return { hasil, err: err.slice(-10) };
}
