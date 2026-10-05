// Cari baris tempat dashboard-served.js berhenti dieksekusi.
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

  // Sisipkan pelacak nomor baris di setiap baris atas (top-level) file.
  await page.route("**/dashboard-served.js*", async (route) => {
    const res = await route.fetch();
    const body = await res.text();
    const baris = body.split("\n");
    const hasil = baris
      .map((L, i) => {
        // Hanya tambahkan penanda pada baris yang mulai di kolom 0
        // (pernyataan top-level), supaya tidak merusak sintaks.
        if (/^[A-Za-z_$]/.test(L)) {
          return `window.__TRACE__ = ${i + 1}; ${L}`;
        }
        return L;
      })
      .join("\n");
    await route.fulfill({ response: res, body: hasil });
  });

  await page.goto("http://127.0.0.1:5599/dashboard-served.html", {
    waitUntil: "load",
  });
  await page.waitForTimeout(3000);

  return await page.evaluate(() => ({
    barisTerakhir: window.__TRACE__,
    adaKunjunganData: typeof window.kunjunganData,
    adaRenderCalendarFull: typeof window.renderCalendarFull,
    adaPulihkan: typeof window.pulihkanDataDariServer,
  }));
}
