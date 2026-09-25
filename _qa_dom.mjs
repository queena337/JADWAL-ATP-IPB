export default async function run(page, ui) {
  const out = {};

  // Buka halaman Jadwal Harian lewat ref sidebar.
  await ui.click("@e3");
  await page.waitForTimeout(500);
  out.jadwalPageActive = await page
    .locator("#page-jadwal")
    .evaluate((el) => el.classList.contains("active"));

  // Tombol "+ Tambah" (bukan Master Data) -> buka modal jadwal.
  await page
    .locator("#page-jadwal .btn-add", { hasText: "Tambah" })
    .first()
    .click();
  await page.waitForTimeout(400);
  out.jadwalModalOpen = await page
    .locator("#jadwalModal")
    .evaluate((el) => el.classList.contains("active"));

  // Field bertanda required di modal jadwal.
  out.jadwalRequired = await page.$$eval("#jadwalForm [required]", (els) =>
    els.map((e) => e.id || e.tagName),
  );
  out.jadwalOptionalMarks = await page.$$eval(
    "#jadwalModal .opt-mark",
    (els) => els.length,
  );

  // Tutup modal jadwal.
  await page.locator("#jadwalModal .modal-close").click();
  await page.waitForTimeout(250);

  // Buka Master Data dan cek input berdesain baru.
  await page
    .locator("#page-jadwal .btn-add", { hasText: "Master" })
    .first()
    .click();
  await page.waitForTimeout(350);
  out.masterModalOpen = await page
    .locator("#masterModal")
    .evaluate((el) => el.classList.contains("active"));
  out.masterInputClass = await page
    .locator("#inputRuangan")
    .getAttribute("class");
  out.masterBtnClass = await page
    .locator("#masterModal .master-add-btn")
    .first()
    .getAttribute("class");

  // Tambah data master lewat UI baru (bukan prompt).
  await page.locator("#inputRuangan").fill("R. Uji QA");
  await page.locator("#masterModal .master-add-btn").first().click();
  await page.waitForTimeout(300);
  out.masterAdded = await page
    .locator("#listRuangan")
    .evaluate((el) => el.textContent.includes("R. Uji QA"));
  out.dialogKindAfterAdd = await page
    .locator("#appDialog")
    .evaluate((el) => el.classList.contains("active"));
  await page
    .locator("#appDialog .app-dialog-button")
    .click()
    .catch(() => {});
  await page.waitForTimeout(150);

  // Tutup master modal.
  await page.locator("#masterModal .modal-close").click();
  await page.waitForTimeout(200);

  return out;
}
