 export default async function run(page, ui) {
  await page.route("**/firebase-dashboard.js", (r) => r.abort());
  await page
    .goto("http://localhost:4599/dashboard.html", {
      waitUntil: "domcontentloaded",
    })
    .catch(() => {});
  await page.waitForTimeout(900);
  return { ok: true };
}
