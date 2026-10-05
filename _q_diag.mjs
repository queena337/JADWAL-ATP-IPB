// Diagnosa: kenapa dashboard-served.js tidak menghasilkan fungsi apa pun?
export default async function run(page) {
  const log = [];
  page.on("console", (m) => log.push(`[${m.type()}] ${m.text()}`));
  page.on("pageerror", (e) => log.push(`[PAGEERROR] ${e.message}`));
  page.on("requestfailed", (r) =>
    log.push(`[REQFAIL] ${r.url()} :: ${r.failure()?.errorText}`),
  );
  page.on("response", (r) => {
    if (r.url().includes(".js")) log.push(`[RESP ${r.status()}] ${r.url()}`);
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

  const info = await page.evaluate(() => ({
    url: location.href,
    siapState: document.readyState,
    semuaScript: [...document.scripts].map((s) => ({
      src: s.src || "(inline)",
      tipe: s.type || "classic",
      panjang: (s.textContent || "").length,
    })),
    // Apakah ada deklarasi global dari dashboard-served.js?
    adaMasterRuangan: typeof window.masterRuangan,
    adaKunjunganData: typeof window.kunjunganData,
    adaRenderCalendarFull: typeof window.renderCalendarFull,
    adaFungsiGlobal: Object.keys(window).filter((k) =>
      /^(render|terapkan|pulihkan|sinkron|reset|update|switch)/.test(k),
    ).length,
    bodyText: document.body.innerText.slice(0, 80),
  }));

  return { info, log: log.slice(-30) };
}
