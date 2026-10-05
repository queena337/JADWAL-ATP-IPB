// Periksa status setiap <script> di dashboard.html.
export default async function run(page) {
  const req = [];
  page.on("response", (r) => {
    if (r.url().includes(".js")) {
      req.push({ url: r.url().split("/").pop(), status: r.status() });
    }
  });
  const err = [];
  page.on("pageerror", (e) => err.push(e.message));
  page.on("console", (m) => {
    if (m.type() === "error") err.push("CONSOLE: " + m.text());
  });

  await page.goto("http://127.0.0.1:5599/dashboard.html", {
    waitUntil: "load",
  });
  await page.waitForTimeout(6000);

  const info = await page.evaluate(() => {
    return [...document.scripts].map((s) => ({
      src: (s.src || "(inline)").split("/").pop(),
      tipe: s.type || "classic",
      async: s.async,
      defer: s.defer,
      // untuk script eksternal: apakah bisa dibaca?
      srcAttr: s.getAttribute("src"),
    }));
  });

  return { info, req, err: err.slice(-10) };
}
