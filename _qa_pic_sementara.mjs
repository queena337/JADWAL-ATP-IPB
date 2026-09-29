 import fs from "node:fs";

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

  const dashboardJs = fs.readFileSync("dashboard.js", "utf8");

  const result = await page.evaluate(
    ({ src }) => {
      window.__alerts = [];
      window.alert = (m) => window.__alerts.push(String(m));
      window.confirm = () => true;

      const inline = Array.from(document.querySelectorAll("script")).find(
        (s) => !s.src,
      );

      const harness = `
        ${src}
        ${inline.textContent}
        window.__qa = {
          run: function () {
            const out = [];
            const s = (n, v) => out.push({ name: n, value: v });

            // 1) Buka form Tambah Jadwal (menghapus sisa opsi sementara).
            window.tambahJadwal();
            const masterBefore = masterPic.slice();

            // 2) Tambah PIC baru lewat quick-add.
            openQuickAdd("pic");
            document.getElementById("quickAddInput").value = "PIC Dadakan QA";
            submitQuickAdd();

            const sel = document.getElementById("fPic");
            const opts = Array.from(sel.options).map((o) => o.value);
            s("addTemporaryPic", {
              munculDiDropdown: opts.includes("PIC Dadakan QA"),
              langsungTerpilih: sel.value,
              adaDiMasterPIC: masterPic.includes("PIC Dadakan QA"),
              jumlahMasterSebelum: masterBefore.length,
              jumlahMasterSesudah: masterPic.length,
              alerts: window.__alerts.slice(),
            });

            // 3) Cek localStorage TIDAK menyimpan nama sementara.
            const ls = JSON.parse(localStorage.getItem("masterPic") || "[]");
            s("tidakTersimpanPermanen", {
              adaDiLocalStorage: ls.includes("PIC Dadakan QA"),
              jumlahDiLocalStorage: ls.length,
            });

            // 4) Simpan jadwal memakai PIC sementara -> PIC ikut ke data jadwal.
            document.getElementById("formJenis").value = "ruang";
            ubahFormJadwal();
            document.getElementById("fKegiatanRuang").value = "Kegiatan QA Dadakan";
            window.__alerts.length = 0;
            saveJadwal();
            const jadwal = ruangData.find(
              (d) => d.kegiatan === "Kegiatan QA Dadakan",
            );
            s("tersimpanDiJadwalItu", {
              adaJadwal: !!jadwal,
              picJadwal: jadwal ? jadwal.pic : null,
            });

            // 5) Buka form baru lagi -> nama sementara harus HILANG.
            window.tambahJadwal();
            const optsBaru = Array.from(
              document.getElementById("fPic").options,
            ).map((o) => o.value);
            s("hilangSaatFormBaru", {
              masihAda: optsBaru.includes("PIC Dadakan QA"),
              jumlahOpsi: optsBaru.length,
              nilaiTerpilih: document.getElementById("fPic").value,
            });

            // 6) masterPic tetap bersih (tidak bertambah permanen).
            s("masterTetapBersih", {
              jumlahMaster: masterPic.length,
              berisiDadakan: masterPic.includes("PIC Dadakan QA"),
            });

            return out;
          }
        };
      `;
      new Function(harness)();

      return { steps: window.__qa.run() };
    },
    { src: dashboardJs },
  );

  return { ...result, pageErrors: logs };
}
