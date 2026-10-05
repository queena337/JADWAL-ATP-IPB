export default async function run(page) {
  const pesan = [];
  page.on("console", (m) => pesan.push(`[${m.type()}] ${m.text()}`));
  page.on("pageerror", (e) => pesan.push(`[PAGEERROR] ${e.message}`));

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
    waitUntil: "domcontentloaded",
  });
  await page.waitForTimeout(3000);

  const info = await page.evaluate(() => ({
    url: location.href,
    fungsiAda: typeof window.getDataRealtimeAdmin,
    pulihAda: typeof window.pulihkanDataDariServer,
    sinkronAda: typeof window.sinkronkanJadwalKeKalender,
    renderAda: typeof window.renderCalendarFull,
    jumlahGlobal: Object.keys(window).filter((k) =>
      /render|terapkan|pulihkan|sinkron|reset/i.test(k),
    ).length,
    scriptSrc: [...document.scripts].map((s) => s.src).filter(Boolean),
  }));

  return { info, pesan: pesan.slice(-25) };
}
