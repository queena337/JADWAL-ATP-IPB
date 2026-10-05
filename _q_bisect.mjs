// Bisect: sisipkan penanda di titik-titik tertentu untuk menemukan
// di mana dashboard-served.js berhenti.
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

  await page.route("**/dashboard-served.js*", async (route) => {
    const res = await route.fetch();
    let body = await res.text();
    const lines = body.split("\n");
    const titik = [500, 1000, 1500, 2000, 2500, 3000, 3500, 3600];
    // Sisipkan dari belakang agar indeks tidak bergeser.
    for (let i = titik.length - 1; i >= 0; i--) {
      const n = titik[i];
      lines.splice(n - 1, 0, `window.__TITIK_${n}__ = true;`);
    }
    body = lines.join("\n");
    await route.fulfill({ response: res, body });
  });

  await page.goto("http://127.0.0.1:5599/dashboard-served.html", {
    waitUntil: "load",
  });
  await page.waitForTimeout(3000);

  return await page.evaluate(() => {
    const titik = {};
    [500, 1000, 1500, 2000, 2500, 3000, 3500, 3600].forEach((n) => {
      titik["L" + n] = window["__TITIK_" + n + "__"] === true;
    });
    return {
      titik,
      adaKunjungan: typeof window.kunjunganData,
      adaRender: typeof window.renderCalendarFull,
    };
  });
}
