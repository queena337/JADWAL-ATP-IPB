// Cek: apakah dashboard-served.js benar-benar dieksekusi sebagai JS?
// Kita suntikkan pelacak di BARIS PALING AWAL file.
export default async function run(page) {
  const log = [];
  page.on("pageerror", (e) => log.push(`[PAGEERROR] ${e.message}`));
  page.on("console", (m) => log.push(`[${m.type()}] ${m.text()}`));

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

  await page.route("**/dashboard-served.js*", async (route) => {
    const res = await route.fetch();
    const body = await res.text();
    const baru =
      "window.__BARIS1__ = true;\n" +
      "window.__PANJANG__ = " +
      body.length +
      ";\n" +
      body +
      "\nwindow.__BARIS_AKHIR__ = true;\n";
    await route.fulfill({ response: res, body: baru });
  });

  await page.goto("http://127.0.0.1:5599/dashboard-served.html", {
    waitUntil: "load",
  });
  await page.waitForTimeout(3000);

  const hasil = await page.evaluate(() => ({
    baris1: window.__BARIS1__ === true,
    panjang: window.__PANJANG__ || null,
    barisAkhir: window.__BARIS_AKHIR__ === true,
    adaKunjungan: typeof window.kunjunganData,
    title: document.title,
    url: location.href,
  }));

  return { hasil, log: log.slice(-15) };
}
