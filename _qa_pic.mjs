export default async function run(page) {
  const logs = [];
  page.on("pageerror", (e) => logs.push(`[pageerror] ${e && e.message}`));

  await page.route("**/firebase-*.js", (r) => r.abort());
  await page.route("https://www.gstatic.com/**", (r) => r.abort());
  await page.waitForTimeout(1200);
  await page.goto("about:blank");
  await page.waitForTimeout(300);
  await page.goto("http://localhost:8123/dashboard.html", {
    waitUntil: "domcontentloaded",
  });
  await page.waitForTimeout(2500);

  // Blok inline override dijalankan dalam scope global yang sama dengan
  // dashboard.js, supaya fungsi & variabel master terlihat.
  await page.evaluate(() => {
    window.__alerts = [];
    window.alert = (m) => window.__alerts.push(String(m));
    window.confirm = () => true;

    const inline = Array.from(document.querySelectorAll("script")).find(
      (s) => !s.src,
    );
    try {
      new Function(inline.textContent)();
    } catch (e) {
      window.__inlineErr = String(e.message);
    }
  });

  const result = await page.evaluate(() => {
    const steps = [];
    const push = (n, v) => steps.push({ name: n, value: v });

    push("inlineErr", window.__inlineErr || null);

    // Buka modal Tambah Jadwal supaya dropdown #fPic ada di DOM.
    window.tambahJadwal();
    const optsBefore = document.querySelectorAll("#fPic option").length;

    // ===== Uji 1: tambah PIC lewat modal quick-add =====
    window.openQuickAdd("pic");
    const modalOpen = document
      .getElementById("quickAddModal")
      .classList.contains("active");
    document.getElementById("quickAddInput").value = "Budi Santoso QA";
    window.submitQuickAdd();

    let opts = Array.from(document.querySelectorAll("#fPic option")).map(
      (o) => o.value,
    );
    push("addPic", {
      quickAddModalOpen: modalOpen,
      optionCountBefore: optsBefore,
      optionCountAfter: opts.length,
      newNameInDropdown: opts.includes("Budi Santoso QA"),
      autoSelected: document.getElementById("fPic").value,
      alerts: window.__alerts.slice(),
    });

    // ===== Uji 2: nama yang DULU diblokir kini boleh =====
    window.__alerts.length = 0;
    window.openQuickAdd("pic");
    document.getElementById("quickAddInput").value = "Nurma Fathiya Test";
    window.submitQuickAdd();
    opts = Array.from(document.querySelectorAll("#fPic option")).map(
      (o) => o.value,
    );
    push("previouslyBlocked", {
      present: opts.includes("Nurma Fathiya Test"),
      autoSelected: document.getElementById("fPic").value,
      alerts: window.__alerts.slice(),
    });

    // ===== Uji 3: nama tetap ada setelah pembersihan data =====
    const saved = JSON.parse(localStorage.getItem("masterPic") || "[]");
    push("localStorage", {
      count: saved.length,
      hasBudi: saved.includes("Budi Santoso QA"),
      hasNurma: saved.includes("Nurma Fathiya Test"),
    });

    return { steps };
  });

  // ===== Uji 4: reload halaman -> nama harus tetap ada =====
  await page.reload({ waitUntil: "domcontentloaded" });
  await page.waitForTimeout(2500);
  const afterReload = await page.evaluate(() => {
    window.__alerts = [];
    window.alert = (m) => window.__alerts.push(String(m));
    const inline = Array.from(document.querySelectorAll("script")).find(
      (s) => !s.src,
    );
    try {
      new Function(inline.textContent)();
    } catch (e) {}
    window.tambahJadwal();
    const opts = Array.from(document.querySelectorAll("#fPic option")).map(
      (o) => o.value,
    );
    return {
      hasBudi: opts.includes("Budi Santoso QA"),
      hasNurma: opts.includes("Nurma Fathiya Test"),
      optionCount: opts.length,
    };
  });

  return { ...result, afterReload, pageErrors: logs };
}
