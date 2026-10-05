// Diagnosa: apakah dashboard-served.js benar-benar dijalankan browser?
export default async function run(page) {
  const log = [];
  page.on("pageerror", (e) => log.push(`[PAGEERROR] ${e.message}`));

  // Suntikkan penanda di akhir file yang dilayani, supaya kita tahu
  // apakah script ini benar-benar selesai dieksekusi.
  await page.route("**/dashboard-served.js*", async (route) => {
    const res = await route.fetch();
    let body = await res.text();
    body +=
      "\nwindow.__SERVED_SELESAI__ = true;" +
      "\nconsole.log('SERVED_JS_SELESAI_DIEKSEKUSI');\n";
    await route.fulfill({ response: res, body });
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

  await page.goto("http://127.0.0.1:5599/dashboard-served.html", {
    waitUntil: "load",
  });
  await page.waitForTimeout(3000);

  const hasil = await page.evaluate(() => ({
    servedSelesai: window.__SERVED_SELESAI__ === true,
    adaKunjunganData: typeof window.kunjunganData,
    adaRenderCalendarFull: typeof window.renderCalendarFull,
    adaMasterRuangan: typeof window.masterRuangan,
    title: document.title,
  }));

  return { hasil, log };
}
