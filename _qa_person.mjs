export default async function run(page) {
  // Jangan pakai alert bawaan (bisa memblokir headless).
  await page.evaluate(() => {
    window.__alerts = [];
    window.alert = (m) => window.__alerts.push(String(m));
    window.confirm = () => true;
  });

  // 1. Buka modal Tambah Jadwal lewat fungsi aplikasi sebenarnya.
  const modalOpen = await page.evaluate(() => {
    if (typeof window.tambahJadwal !== "function") return "no tambahJadwal";
    window.tambahJadwal();
    const m = document.getElementById("jadwalModal");
    return (
      !!m && (m.classList.contains("active") || m.style.display === "flex")
    );
  });

  // 2. Field person harus ada TEPAT setelah grup PIC.
  const fieldInfo = await page.evaluate(() => {
    const groups = Array.from(
      document.querySelectorAll("#jadwalModal .form-group"),
    );
    const picIdx = groups.findIndex((g) => g.querySelector("#fPic"));
    const personIdx = groups.findIndex((g) => g.querySelector("#fPersonRows"));
    const btn = document.getElementById("btnAddPersonJadwal");
    return {
      rowsExists: !!document.getElementById("fPersonRows"),
      btnExists: !!btn,
      btnLabel: btn ? btn.textContent.replace(/\s+/g, " ").trim() : null,
      counterText: document.getElementById("personJadwalCounter").textContent,
      picGroupIndex: picIdx,
      personGroupIndex: personIdx,
      personRightAfterPic: personIdx === picIdx + 1,
    };
  });

  // 3. Klik tombol tambah 6x -> harus berhenti di 5.
  const afterAdd = await page.evaluate(() => {
    const btn = document.getElementById("btnAddPersonJadwal");
    for (let i = 0; i < 6; i++) {
      if (btn.disabled) break;
      btn.click();
    }
    return {
      slotCount: document.querySelectorAll("#fPersonRows .person-row-input")
        .length,
      counterText: document.getElementById("personJadwalCounter").textContent,
      btnDisabled: btn.disabled,
      alerts: window.__alerts.slice(),
    };
  });

  // 4. Isi 5 nama, cek nilai yang terbaca.
  const saved = await page.evaluate(() => {
    const names = ["Andi", "Budi", "Siti", "Dewi", "Rina"];
    const inputs = document.querySelectorAll("#fPersonRows .person-row-input");
    inputs.forEach((el, i) => {
      el.value = names[i] || "";
      el.dispatchEvent(new Event("input", { bubbles: true }));
    });
    return {
      inputCount: inputs.length,
      values: window.getPersonJadwalValues(),
    };
  });

  // 5. SAVE nyata (jenis "ruang") lalu cek person ikut ke event kalender.
  const saveCheck = await page.evaluate(() => {
    document.getElementById("formJenis").value = "ruang";
    if (typeof window.ubahFormJadwal === "function") window.ubahFormJadwal();
    document.getElementById("fKegiatanRuang").value = "QA Person Test";
    window.saveJadwal();
    const ev = eventData.find(
      (e) => e.dariJadwal && String(e.nama).includes("QA Person Test"),
    );
    return {
      eventFound: !!ev,
      eventPerson: ev ? ev.person : null,
      alerts: window.__alerts.slice(),
    };
  });

  // 6. Hapus satu baris -> counter turun.
  const afterRemove = await page.evaluate(() => {
    const btn = document.querySelector("#fPersonRows .person-row-remove");
    if (btn) btn.click();
    return {
      slotCount: document.querySelectorAll("#fPersonRows .person-row-input")
        .length,
      counterText: document.getElementById("personJadwalCounter").textContent,
    };
  });

  return { modalOpen, fieldInfo, afterAdd, saved, saveCheck, afterRemove };
}
