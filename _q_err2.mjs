// Cari semua deklarasi ganda (termasuk di dalam blok) pada dashboard.js
// dengan mencoba menjalankannya dan membaca pesan error persisnya.
export default async function run(page) {
  await page.goto("http://127.0.0.1:5599/dashboard.html", {
    waitUntil: "load",
  });
  await page.waitForTimeout(5000);

  const hasil = await page.evaluate(async () => {
    const r = {};
    const teks = await (await fetch("dashboard.js?v=6")).text();
    r.panjang = teks.length;

    // Jalankan sebagai module untuk mendapat error pertama.
    try {
      const blob = new Blob([teks], { type: "text/javascript" });
      const url = URL.createObjectURL(blob);
      await import(/* @vite-ignore */ url);
      r.error = null;
    } catch (e) {
      r.error = String(e && e.message ? e.message : e);
    }
    return r;
  });

  return hasil;
}
