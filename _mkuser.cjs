const fs = require("fs");
let html = fs.readFileSync("user.html", "utf8");

// Matikan modul firebase user (biar tidak menunggu koneksi)
html = html.replace(
  '<script type="module" src="firebase-user.js"></script>',
  "<!-- firebase user dinonaktifkan QA -->",
);

const qa = `
<script>
(function(){
  function run(){
    var log = [];
    try {
      // 1) localStorage berisi DATA LAMA (warna merah)
      localStorage.setItem('eventData', JSON.strin `gify([
        { id: 1, nama: 'Kegiatan Lama', tanggalMulai: '2026-09-21', tanggalSelesai: '2026-09-21',
          tanggal: 21, bulan: 9, tahun: 2026, waktu: '09:00 - 10:00', ruangan: 'R. VIP', tempat: 'ATP',
          pic: 'Novi', warna: '#d32f2f', dariJadwal: false }
      ]));

      // 2) Data realtime dari Firestore datang dengan warna BARU (hijau)
      if (typeof window.terapkanDataRealtimeUser === 'function') {
        window.terapkanDataRealtimeUser({
          kunjunganData: [], ruangData: [], balaiData: [], programData: [],
          eventData: [
            { id: 1, nama: 'Kegiatan Lama', tanggalMulai: '2026-09-21', tanggalSelesai: '2026-09-21',
              tanggal: 21, bulan: 9, tahun: 2026, waktu: '09:00 - 10:00', ruangan: 'R. VIP', tempat: 'ATP',
              pic: 'Novi', warna: '#2e7d32', dariJadwal: false }
          ],
          capaianData: [], capaianMingguanData: []
        });
      }
      var stripAfterRealtime = 'n/a';
      var s1 = document.querySelector('.calendar-grid .event-strip, .event-strip');
      if (s1) stripAfterRealtime = s1.getAttribute('style');

      // 3) Simulasi refresh berkala (via event 'storage' yang memanggil refreshData)
      window.dispatchEvent(new StorageEvent('storage', { key: 'eventData' }));

      var stripAfterRefresh = 'n/a';
      var s2 = document.querySelector('.calendar-grid .event-strip, .event-strip');
      if (s2) stripAfterRefresh = s2.getAttribute('style');

      log.push(['stripAfterRealtime', stripAfterRealtime]);
      log.push(['stripAfterRefresh', stripAfterRefresh]);
      log.push(['verdict', (stripAfterRefresh && stripAfterRefresh.indexOf('#2e7d32') !== -1) ? 'PASS' : 'FAIL']);
    } catch(e) {
      log.push(['EXC', e.message]);
    }
    document.title = 'QA:' + JSON.stringify(log);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
})();
</script>
`;
html = html.replace("</body>", qa + "\n</body>");
fs.writeFileSync("_qauser.html", html, "utf8");
console.log("ok");
