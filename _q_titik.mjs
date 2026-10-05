// Cari titik tempat dashboard.js berhenti dieksekusi.
export default async function run(page) {
  await page.route("**/dashboard.js*", async (route) => {
    const res = await route.fetch();
    const body = await res.text();
    const lines = body.split("\n");
    // Penanda di baris-baris strategis (disisipkan dari belakang).
    const titik = [
      1, 200, 600, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4300, 4440,
    ];
    for (let i = titik.length - 1; i >= 0; i--) {
      const n = titik[i];
      if (n <= lines.length) {
        lines.splice(n - 1, 0, `window.__T${n}__ = true;`);
      }
    }
    await route.fulfill({ response: res, body: lines.join("\n") });
  });

  await page.goto("http://127.0.0.1:5599/dashboard.html", {
    waitUntil: "load",
  });
  await page.waitForTimeout(8000);

  return await page.evaluate(() => {
    const titik = {};
    [1, 200, 600, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4300, 4440].forEach(
      (n) => {
        titik["L" + n] = window["__T" + n + "__"] === true;
      },
    );
    return {
      titik,
      totalBaris: null,
      fnTerpasang: Object.keys(window).filter((k) =>
        /^(render|terapkan|pulih|sinkron|reset)/.test(k),
      ).length,
    };
  });
}
