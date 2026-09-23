export default async function run(page, ui) {
  const errs = [];
  page.on("pageerror", (e) => errs.push("PAGEERROR: " + e.message));
  page.on("console", (m) => {
    if (m.type() === "error") errs.push("CONSOLE: " + m.text());
  });
  await page.goto("http://localhost:4593/dashboard.html", {
    waitUntil: "load",
  });
  await page.waitForTimeout(1500);

  const g = await page.evaluate(() => ({
    renderCalendar: typeof renderCalendar,
    lihatDetailEvent: typeof lihatDetailEvent,
    tampilkanDetailEvent: typeof tampilkanDetailEvent,
    eventData: typeof eventData,
    toggleSidebar: typeof toggleSidebar,
    dayCells: document.querySelectorAll("#calendarGrid .day").length,
  }));
  return { g, errs };
}
