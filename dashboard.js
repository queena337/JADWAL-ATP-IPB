// ============================================
// MASTER DATA
// ============================================

let masterRuangan = ['R. Meeting 1', 'R. Meeting 2', 'R. VIP', 'Lab. Komputer', 'Aula Utama', 'Training Center', 'Aula Lantai 2'];
let masterTempat = ['Gedung A Lantai 2', 'Gedung B Lantai 3', 'Gedung C Lantai 2', 'Gedung A Lantai 1', 'Lapangan BRI'];
let masterPic = ['Budi', 'Siti', 'Andi', 'Dewi', 'Rina', 'Agus'];
let masterInstansi = ['Mahasiswa', 'Guru', 'Dosen', 'Masyarakat', 'Instansi Pemerintah', 'Perusahaan Swasta', 'Lembaga Non-Profit'];

// ============================================
// DATA JADWAL (4 Jenis)
// ============================================

// 1. Data Jadwal Kunjungan (dengan jumlahPengunjung)
let kunjunganData = [
    { id: 1, nama: 'Budi Santoso', instansi: 'Mahasiswa', tanggal: '2026-06-26', waktu: '09:00 - 10:00', tujuan: 'Rapat Kerjasama', pic: 'Andi', jumlahPengunjung: 50 },
    { id: 2, nama: 'Siti Rahayu', instansi: 'Dosen', tanggal: '2026-06-26', waktu: '10:30 - 11:30', tujuan: 'Koordinasi Program', pic: 'Budi', jumlahPengunjung: 30 },
    { id: 3, nama: 'Ahmad Fauzi', instansi: 'Masyarakat', tanggal: '2026-06-26', waktu: '13:00 - 14:30', tujuan: 'Monitoring Proyek', pic: 'Siti', jumlahPengunjung: 100 },
    { id: 4, nama: 'Dewi Lestari', instansi: 'Instansi Pemerintah', tanggal: '2026-06-26', waktu: '14:00 - 15:00', tujuan: 'Sosialisasi Program', pic: 'Dewi', jumlahPengunjung: 25 },
    { id: 5, nama: 'Eko Prasetyo', instansi: 'Perusahaan Swasta', tanggal: '2026-06-26', waktu: '08:00 - 09:30', tujuan: 'Presentasi', pic: 'Rina', jumlahPengunjung: 15 },
    { id: 6, nama: 'Fitriani', instansi: 'Mahasiswa', tanggal: '2026-06-26', waktu: '09:00 - 11:00', tujuan: 'Studi Banding', pic: 'Andi', jumlahPengunjung: 40 },
];
let nextKunjunganId = 7;

// 2. Data Jadwal Pemakaian Ruang
let ruangData = [
    { id: 1, kegiatan: 'Rapat Koordinasi', ruangan: 'R. Meeting 1', tanggal: '2026-06-25', waktu: '08:00 - 09:30', kapasitas: 20, pic: 'Budi' },
    { id: 2, kegiatan: 'Workshop UI/UX', ruangan: 'Lab. Komputer', tanggal: '2026-06-26', waktu: '10:00 - 12:00', kapasitas: 15, pic: 'Siti' },
    { id: 3, kegiatan: 'Presentasi Client', ruangan: 'R. VIP', tanggal: '2026-06-27', waktu: '14:30 - 16:00', kapasitas: 10, pic: 'Dewi' },
];
let nextRuangId = 4;

// 3. Data Jadwal Balai BRI
let balaiData = [
    { id: 1, kegiatan: 'Rapat Direksi', jenis: 'Rapat Internal', tanggal: '2026-06-25', waktu: '09:00 - 11:00', ruangan: 'Aula Utama', pic: 'Andi' },
    { id: 2, kegiatan: 'Pelatihan Karyawan', jenis: 'Pelatihan', tanggal: '2026-06-26', waktu: '13:00 - 16:00', ruangan: 'Training Center', pic: 'Siti' },
    { id: 3, kegiatan: 'Sosialisasi Program', jenis: 'Sosialisasi', tanggal: '2026-06-27', waktu: '10:00 - 12:00', ruangan: 'Aula Lantai 2', pic: 'Budi' },
];
let nextBalaiId = 4;

// 4. Data Jadwal Per Program
let programData = [
    { id: 1, program: 'Pemberdayaan UMKM', kegiatan: 'Pelatihan Digital Marketing', tanggal: '2026-06-25', waktu: '09:00 - 12:00', lokasi: 'Aula Utama', pic: 'Dewi' },
    { id: 2, program: 'Program Kesehatan', kegiatan: 'Screening Kesehatan Gratis', tanggal: '2026-06-26', waktu: '08:00 - 14:00', lokasi: 'Lapangan BRI', pic: 'Andi' },
    { id: 3, program: 'Program Pendidikan', kegiatan: 'Beasiswa Prestasi', tanggal: '2026-06-27', waktu: '10:00 - 11:30', lokasi: 'R. VIP', pic: 'Siti' },
];
let nextProgramId = 4;

// ============================================
// DATA EVENT KALENDER
// ============================================
let eventData = [];
let nextEventId = 1;

// ============================================
// DATA CAPAIAN PENGUNJUNG (Dengan Kategori)
// ============================================
let capaianData = [
    { bulan: 'Jan', jumlah: 120, target: 200, mahasiswa: 54, dosen: 30, umum: 24, instansi: 12 },
    { bulan: 'Feb', jumlah: 150, target: 200, mahasiswa: 67, dosen: 37, umum: 30, instansi: 16 },
    { bulan: 'Mar', jumlah: 180, target: 200, mahasiswa: 81, dosen: 45, umum: 36, instansi: 18 },
    { bulan: 'Apr', jumlah: 170, target: 200, mahasiswa: 76, dosen: 42, umum: 34, instansi: 18 },
    { bulan: 'Mei', jumlah: 200, target: 200, mahasiswa: 90, dosen: 50, umum: 40, instansi: 20 },
    { bulan: 'Jun', jumlah: 220, target: 200, mahasiswa: 99, dosen: 55, umum: 44, instansi: 22 },
    { bulan: 'Jul', jumlah: 190, target: 200, mahasiswa: 85, dosen: 47, umum: 38, instansi: 20 },
    { bulan: 'Agu', jumlah: 210, target: 200, mahasiswa: 94, dosen: 52, umum: 42, instansi: 22 },
    { bulan: 'Sep', jumlah: 240, target: 200, mahasiswa: 108, dosen: 60, umum: 48, instansi: 24 },
    { bulan: 'Okt', jumlah: 260, target: 200, mahasiswa: 117, dosen: 65, umum: 52, instansi: 26 },
    { bulan: 'Nov', jumlah: 230, target: 200, mahasiswa: 103, dosen: 57, umum: 46, instansi: 24 },
    { bulan: 'Des', jumlah: 280, target: 200, mahasiswa: 126, dosen: 70, umum: 56, instansi: 28 },
];

// ============================================
// DATA CAPAIAN MINGGUAN (Dari Jadwal Kunjungan)
// ============================================
let capaianMingguanData = [];

// ============================================
// FUNGSI UNTUK GRAFIK
// ============================================
function getMonthlyData() {
    return {
        labels: capaianData.map(d => d.bulan),
        values: capaianData.map(d => d.jumlah)
    };
}

function getWeeklyData() {
    const weekLabels = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];
    const weekValues = [0, 0, 0, 0, 0, 0, 0];
    
    // Ambil data minggu ini
    const now = new Date();
    const startOfWeek = new Date(now);
    const day = now.getDay() || 7;
    startOfWeek.setDate(now.getDate() - day + 1);
    startOfWeek.setHours(0, 0, 0, 0);
    
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(endOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);
    
    capaianMingguanData.forEach(item => {
        const date = new Date(item.tanggal);
        if (date >= startOfWeek && date <= endOfWeek) {
            const dayIndex = date.getDay() || 7;
            weekValues[dayIndex - 1] += item.jumlah;
        }
    });
    
    return {
        labels: weekLabels,
        values: weekValues
    };
}

const yearlyData = {
    labels: ['2022', '2023', '2024', '2025', '2026'],
    values: [1800, 2100, 2450, 2800, 3100],
};

// ============================================
// DATA UNTUK GRAFIK PIE (Dinamis dari capaianData)
// ============================================

function getPieData() {
    let totalMahasiswa = 0;
    let totalDosen = 0;
    let totalUmum = 0;
    let totalInstansi = 0;

    capaianData.forEach(item => {
        totalMahasiswa += item.mahasiswa || 0;
        totalDosen += item.dosen || 0;
        totalUmum += item.umum || 0;
        totalInstansi += item.instansi || 0;
    });

    const total = totalMahasiswa + totalDosen + totalUmum + totalInstansi;

    if (total === 0) {
        return {
            labels: ['Belum ada data'],
            values: [1],
            colors: ['#e0e0e0']
        };
    }

    const labels = ['Mahasiswa', 'Dosen', 'Umum', 'Instansi'];
    const values = [totalMahasiswa, totalDosen, totalUmum, totalInstansi];
    const colors = ['#1a237e', '#3949ab', '#5c6bc0', '#9fa8da'];

    const filteredLabels = [];
    const filteredValues = [];
    const filteredColors = [];

    for (let i = 0; i < labels.length; i++) {
        if (values[i] > 0) {
            filteredLabels.push(labels[i]);
            filteredValues.push(values[i]);
            filteredColors.push(colors[i]);
        }
    }

    return {
        labels: filteredLabels.length > 0 ? filteredLabels : ['Belum ada data'],
        values: filteredLabels.length > 0 ? filteredValues : [1],
        colors: filteredLabels.length > 0 ? filteredColors : ['#e0e0e0'],
        total: total
    };
}

// ============================================
// SINKRONISASI KUNJUNGAN KE CAPAIAN MINGGUAN
// ============================================

function sinkronkanKunjunganKeCapaian() {
    // Reset data mingguan
    capaianMingguanData = [];
    
    // Ambil data kunjungan yang memiliki jumlahPengunjung
    const dataKunjungan = kunjunganData.filter(item => item.jumlahPengunjung && item.jumlahPengunjung > 0);
    
    dataKunjungan.forEach(item => {
        // Cek apakah sudah ada data untuk tanggal dan instansi yang sama
        const existing = capaianMingguanData.find(d => d.tanggal === item.tanggal && d.instansi === item.instansi);
        if (existing) {
            existing.jumlah += item.jumlahPengunjung;
        } else {
            capaianMingguanData.push({
                tanggal: item.tanggal,
                instansi: item.instansi,
                jumlah: item.jumlahPengunjung,
                pic: item.pic,
                nama: item.nama
            });
        }
    });
    
    // Update capaianData bulanan berdasarkan capaianMingguanData
    updateCapaianBulanan();
    
    // Refresh grafik
    updateAllCharts();
}

function updateCapaianBulanan() {
    const bulanMap = {};
    const bulanNames = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
    
    capaianMingguanData.forEach(item => {
        const tanggal = new Date(item.tanggal);
        const bulan = bulanNames[tanggal.getMonth()];
        const instansi = item.instansi;
        
        if (!bulanMap[bulan]) {
            bulanMap[bulan] = { total: 0, mahasiswa: 0, dosen: 0, umum: 0, instansi: 0 };
        }
        
        bulanMap[bulan].total += item.jumlah;
        
        if (instansi === 'Mahasiswa' || instansi === 'mahasiswa') {
            bulanMap[bulan].mahasiswa += item.jumlah;
        } else if (instansi === 'Dosen' || instansi === 'dosen') {
            bulanMap[bulan].dosen += item.jumlah;
        } else if (instansi === 'Umum' || instansi === 'umum' || instansi === 'Masyarakat' || instansi === 'masyarakat') {
            bulanMap[bulan].umum += item.jumlah;
        } else {
            bulanMap[bulan].instansi += item.jumlah;
        }
    });
    
    // Update capaianData - tambahkan data dari kunjungan
    capaianData = capaianData.map(item => {
        const bulanData = bulanMap[item.bulan];
        if (bulanData && bulanData.total > 0) {
            return {
                ...item,
                jumlah: Math.max(item.jumlah, bulanData.total),
                mahasiswa: Math.max(item.mahasiswa || 0, bulanData.mahasiswa),
                dosen: Math.max(item.dosen || 0, bulanData.dosen),
                umum: Math.max(item.umum || 0, bulanData.umum),
                instansi: Math.max(item.instansi || 0, bulanData.instansi)
            };
        }
        return item;
    });
}

// ============================================
// GET DATA BERDASARKAN PERIODE
// ============================================

function getDataByPeriod(period) {
    switch(period) {
        case 'mingguan':
            return getWeeklyData();
        case 'bulanan':
            return getMonthlyData();
        case 'tahunan':
            return yearlyData;
        default:
            return getMonthlyData();
    }
}

// ============================================
// LOCALSTORAGE
// ============================================
// Pastikan fungsi simpanSemuaData() dipanggil di semua CRUD
function simpanSemuaData() {
    try {
        localStorage.setItem('masterRuangan', JSON.stringify(masterRuangan));
        localStorage.setItem('masterTempat', JSON.stringify(masterTempat));
        localStorage.setItem('masterPic', JSON.stringify(masterPic));
        localStorage.setItem('masterInstansi', JSON.stringify(masterInstansi));
        localStorage.setItem('kunjunganData', JSON.stringify(kunjunganData));
        localStorage.setItem('ruangData', JSON.stringify(ruangData));
        localStorage.setItem('balaiData', JSON.stringify(balaiData));
        localStorage.setItem('programData', JSON.stringify(programData));
        localStorage.setItem('eventData', JSON.stringify(eventData));
        localStorage.setItem('capaianData', JSON.stringify(capaianData));
        localStorage.setItem('capaianMingguanData', JSON.stringify(capaianMingguanData));
        localStorage.setItem('nextKunjunganId', String(nextKunjunganId));
        localStorage.setItem('nextRuangId', String(nextRuangId));
        localStorage.setItem('nextBalaiId', String(nextBalaiId));
        localStorage.setItem('nextProgramId', String(nextProgramId));
        localStorage.setItem('nextEventId', String(nextEventId));
        
        console.log('💾 Data disimpan ke localStorage');
    } catch (e) {
        console.log('Gagal menyimpan data:', e);
    }
}

function muatSemuaData() {
    try {
        const savedRuangan = localStorage.getItem('masterRuangan');
        const savedTempat = localStorage.getItem('masterTempat');
        const savedPic = localStorage.getItem('masterPic');
        const savedInstansi = localStorage.getItem('masterInstansi');
        const savedKunjungan = localStorage.getItem('kunjunganData');
        const savedRuang = localStorage.getItem('ruangData');
        const savedBalai = localStorage.getItem('balaiData');
        const savedProgram = localStorage.getItem('programData');
        const savedEvent = localStorage.getItem('eventData');
        const savedCapaian = localStorage.getItem('capaianData');
        const savedCapaianMingguan = localStorage.getItem('capaianMingguanData');
        const savedNextKunjunganId = localStorage.getItem('nextKunjunganId');
        const savedNextRuangId = localStorage.getItem('nextRuangId');
        const savedNextBalaiId = localStorage.getItem('nextBalaiId');
        const savedNextProgramId = localStorage.getItem('nextProgramId');
        const savedNextEventId = localStorage.getItem('nextEventId');

        if (savedRuangan) masterRuangan = JSON.parse(savedRuangan);
        if (savedTempat) masterTempat = JSON.parse(savedTempat);
        if (savedPic) masterPic = JSON.parse(savedPic);
        if (savedInstansi) masterInstansi = JSON.parse(savedInstansi);
        if (savedKunjungan) kunjunganData = JSON.parse(savedKunjungan);
        if (savedRuang) ruangData = JSON.parse(savedRuang);
        if (savedBalai) balaiData = JSON.parse(savedBalai);
        if (savedProgram) programData = JSON.parse(savedProgram);
        if (savedEvent) eventData = JSON.parse(savedEvent);
        if (savedCapaian) capaianData = JSON.parse(savedCapaian);
        if (savedCapaianMingguan) capaianMingguanData = JSON.parse(savedCapaianMingguan);
        if (savedNextKunjunganId) nextKunjunganId = parseInt(savedNextKunjunganId) || 4;
        if (savedNextRuangId) nextRuangId = parseInt(savedNextRuangId) || 4;
        if (savedNextBalaiId) nextBalaiId = parseInt(savedNextBalaiId) || 4;
        if (savedNextProgramId) nextProgramId = parseInt(savedNextProgramId) || 4;
        if (savedNextEventId) nextEventId = parseInt(savedNextEventId) || 1;
    } catch (e) {
        console.log('Gagal memuat data:', e);
    }
}

// ============================================
// SINKRONISASI JADWAL KE KALENDER
// ============================================
function sinkronkanJadwalKeKalender() {
    eventData = eventData.filter(e => !e.dariJadwal);

    kunjunganData.forEach(item => {
        const tanggal = parseInt(item.tanggal.split('-')[2]) || 1;
        eventData.push({
            id: nextEventId++,
            tanggal: tanggal,
            nama: `📋 ${item.nama}`,
            waktu: item.waktu,
            ruangan: item.ruangan || '-',
            tempat: item.instansi || '-',
            pic: item.pic,
            dariJadwal: true,
            sumber: 'Kunjungan',
            sumberId: item.id
        });
    });

    ruangData.forEach(item => {
        const tanggal = parseInt(item.tanggal.split('-')[2]) || 1;
        eventData.push({
            id: nextEventId++,
            tanggal: tanggal,
            nama: `🏢 ${item.kegiatan}`,
            waktu: item.waktu,
            ruangan: item.ruangan,
            tempat: item.ruangan,
            pic: item.pic,
            dariJadwal: true,
            sumber: 'Pemakaian Ruang',
            sumberId: item.id
        });
    });

    balaiData.forEach(item => {
        const tanggal = parseInt(item.tanggal.split('-')[2]) || 1;
        eventData.push({
            id: nextEventId++,
            tanggal: tanggal,
            nama: `🏛️ ${item.kegiatan}`,
            waktu: item.waktu,
            ruangan: item.ruangan,
            tempat: item.ruangan,
            pic: item.pic,
            dariJadwal: true,
            sumber: 'Balai BRI',
            sumberId: item.id
        });
    });

    programData.forEach(item => {
        const tanggal = parseInt(item.tanggal.split('-')[2]) || 1;
        eventData.push({
            id: nextEventId++,
            tanggal: tanggal,
            nama: `📊 ${item.program}`,
            waktu: item.waktu,
            ruangan: item.lokasi || '-',
            tempat: item.lokasi || '-',
            pic: item.pic,
            dariJadwal: true,
            sumber: 'Per Program',
            sumberId: item.id
        });
    });

    renderCalendar(currentMonth, currentYear);
    renderCalendarFull(currentMonthFull, currentYearFull);
    renderDashboardEvents();
    simpanSemuaData();
}

// ============================================
// SIDEBAR TOGGLE
// ============================================
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const hamburger = document.getElementById('hamburgerBtn');

    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
    hamburger.classList.toggle('active');

    if (window.innerWidth <= 768) {
        sidebar.style.transform = sidebar.classList.contains('open') ? 'translateX(0)' : 'translateX(-100%)';
    }
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const hamburger = document.getElementById('hamburgerBtn');

    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    hamburger.classList.remove('active');

    if (window.innerWidth <= 768) {
        sidebar.style.transform = 'translateX(-100%)';
    }
}

document.addEventListener('click', function(e) {
    const sidebar = document.getElementById('sidebar');
    const hamburger = document.getElementById('hamburgerBtn');

    if (window.innerWidth <= 768 && sidebar.classList.contains('open')) {
        if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
            closeSidebar();
        }
    }
});

window.addEventListener('resize', function() {
    const sidebar = document.getElementById('sidebar');
    if (window.innerWidth > 768) {
        sidebar.style.transform = '';
        sidebar.classList.remove('open');
        document.getElementById('overlay').classList.remove('active');
        document.getElementById('hamburgerBtn').classList.remove('active');
    } else {
        if (!sidebar.classList.contains('open')) {
            sidebar.style.transform = 'translateX(-100%)';
        }
    }
});

// ============================================
// NAVIGASI
// ============================================
const pageTitles = {
    dashboard: { title: 'Dashboard', subtitle: 'Selamat datang, Admin 👋' },
    jadwal: { title: 'Jadwal Harian', subtitle: 'Kelola semua jadwal kegiatan' },
    kalender: { title: 'Kalender Kegiatan', subtitle: 'Kelola event per tanggal' },
    capaian: { title: 'Capaian Pengunjung', subtitle: 'Kelola data capaian pengunjung' },
    laporan: { title: 'Laporan', subtitle: 'Download laporan lengkap' },
    pengaturan: { title: 'Pengaturan', subtitle: 'Konfigurasi sistem' },
};

function switchMenu(page) {
    const link = document.querySelector(`.menu a[data-page="${page}"]`);
    if (link) link.click();
}

function switchTab(tab) {
    setTimeout(() => {
        const tabBtn = document.querySelector(`.tab-btn[data-tab="${tab}"]`);
        if (tabBtn) tabBtn.click();
    }, 200);
}

document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelectorAll('.menu a').forEach(a => a.classList.remove('active'));
        this.classList.add('active');

        document.querySelectorAll('.page-content').forEach(page => page.classList.remove('active'));

        const page = this.dataset.page;
        const targetPage = document.getElementById(`page-${page}`);
        if (targetPage) targetPage.classList.add('active');

        const titleData = pageTitles[page] || pageTitles.dashboard;
        document.getElementById('pageTitle').textContent = titleData.title;
        document.getElementById('pageSubtitle').textContent = titleData.subtitle;

        if (window.innerWidth <= 768) closeSidebar();

        if (page === 'capaian') {
            setTimeout(() => {
                renderCapaianTable();
                updateAllCharts();
            }, 100);
        }
        if (page === 'kalender') {
            setTimeout(() => {
                renderCalendarFull(currentMonthFull, currentYearFull);
            }, 100);
        }
        if (page === 'jadwal') {
            renderKunjunganTable();
            renderRuangTable();
            renderBalaiTable();
            renderProgramTable();
            updateDropdowns();
        }
        if (page === 'laporan') setTimeout(generateLaporan, 100);
    });
});

// ============================================
// FUNGSI UPDATE DROPDOWN
// ============================================
function updateDropdowns() {
    const ruanganSelects = document.querySelectorAll('#fRuangan, #eventRuangan');
    ruanganSelects.forEach(select => {
        const currentVal = select.value;
        select.innerHTML = '<option value="">Pilih Ruangan</option>';
        masterRuangan.forEach(item => {
            const opt = document.createElement('option');
            opt.value = item;
            opt.textContent = item;
            select.appendChild(opt);
        });
        if (currentVal && masterRuangan.includes(currentVal)) {
            select.value = currentVal;
        }
    });

    const tempatSelects = document.querySelectorAll('#fTempat, #eventTempat');
    tempatSelects.forEach(select => {
        const currentVal = select.value;
        select.innerHTML = '<option value="">Pilih Tempat</option>';
        masterTempat.forEach(item => {
            const opt = document.createElement('option');
            opt.value = item;
            opt.textContent = item;
            select.appendChild(opt);
        });
        if (currentVal && masterTempat.includes(currentVal)) {
            select.value = currentVal;
        }
    });

    const picSelects = document.querySelectorAll('#fPic, #eventPic');
    picSelects.forEach(select => {
        const currentVal = select.value;
        select.innerHTML = '<option value="">Pilih PIC</option>';
        masterPic.forEach(item => {
            const opt = document.createElement('option');
            opt.value = item;
            opt.textContent = item;
            select.appendChild(opt);
        });
        if (currentVal && masterPic.includes(currentVal)) {
            select.value = currentVal;
        }
    });

    const instansiSelects = document.querySelectorAll('#fInstansi');
    instansiSelects.forEach(select => {
        const currentVal = select.value;
        select.innerHTML = '<option value="">Pilih Instansi</option>';
        masterInstansi.forEach(item => {
            const opt = document.createElement('option');
            opt.value = item;
            opt.textContent = item;
            select.appendChild(opt);
        });
        if (currentVal && masterInstansi.includes(currentVal)) {
            select.value = currentVal;
        }
    });
}

// ============================================
// TAB NAVIGASI JADWAL
// ============================================
let currentTab = 'kunjungan';

function switchTab(tab) {
    currentTab = tab;

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.tab === tab) {
            btn.classList.add('active');
        }
    });

    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`tab-${tab}`).classList.add('active');

    renderJadwalTab(tab);
}

function renderJadwalTab(tab) {
    switch(tab) {
        case 'kunjungan':
            renderKunjunganTable();
            break;
        case 'ruang':
            renderRuangTable();
            break;
        case 'balai':
            renderBalaiTable();
            break;
        case 'program':
            renderProgramTable();
            break;
        default:
            break;
    }
}

// ============================================
// RENDER TABEL KUNJUNGAN
// ============================================
function renderKunjunganTable() {
    const tbody = document.getElementById('kunjunganTableBody');
    if (!tbody) return;
    
    if (kunjunganData.length === 0) {
        tbody.innerHTML = `<tr><td colspan="9" style="text-align:center;color:#888;padding:20px;">Belum ada data kunjungan</td></tr>`;
        return;
    }
    
    tbody.innerHTML = kunjunganData.map((item, index) => `
        <tr>
            <td>${index + 1}</td>
            <td><strong>${item.nama || '-'}</strong></td>
            <td>${item.instansi || '-'}</td>
            <td>${item.tanggal || '-'}</td>
            <td>${item.waktu || '-'}</td>
            <td>${item.jumlahPengunjung || 0}</td>
            <td>${item.tujuan || '-'}</td>
            <td>${item.pic || '-'}</td>
            <td>
                <button class="btn-edit" onclick="editJadwal('kunjungan', ${item.id})">✏️</button>
                <button style="background:#f44336;color:#fff;border:none;padding:4px 12px;border-radius:6px;cursor:pointer;" onclick="hapusJadwal('kunjungan', ${item.id})">🗑️</button>
            </td>
        </tr>
    `).join('');
}

// ============================================
// RENDER TABEL PEMAKAIAN RUANG
// ============================================
function renderRuangTable() {
    const tbody = document.getElementById('ruangTableBody');
    tbody.innerHTML = ruangData.map((item, index) => `
        <tr>
            <td>${index + 1}</td>
            <td><strong>${item.kegiatan}</strong></td>
            <td>${item.ruangan}</td>
            <td>${item.tanggal}</td>
            <td>${item.waktu}</td>
            <td>${item.kapasitas} orang</td>
            <td>${item.pic}</td>
            <td>
                <button class="btn-edit" onclick="editJadwal('ruang', ${item.id})">✏️</button>
                <button style="background:#f44336;color:#fff;border:none;padding:4px 12px;border-radius:6px;cursor:pointer;" onclick="hapusJadwal('ruang', ${item.id})">🗑️</button>
            </td>
        </tr>
    `).join('');
}

// ============================================
// RENDER TABEL BALAI BRI
// ============================================
function renderBalaiTable() {
    const tbody = document.getElementById('balaiTableBody');
    tbody.innerHTML = balaiData.map((item, index) => `
        <tr>
            <td>${index + 1}</td>
            <td><strong>${item.kegiatan}</strong></td>
            <td>${item.jenis}</td>
            <td>${item.tanggal}</td>
            <td>${item.waktu}</td>
            <td>${item.ruangan}</td>
            <td>${item.pic}</td>
            <td>
                <button class="btn-edit" onclick="editJadwal('balai', ${item.id})">✏️</button>
                <button style="background:#f44336;color:#fff;border:none;padding:4px 12px;border-radius:6px;cursor:pointer;" onclick="hapusJadwal('balai', ${item.id})">🗑️</button>
            </td>
        </tr>
    `).join('');
}

// ============================================
// RENDER TABEL PER PROGRAM
// ============================================
function renderProgramTable() {
    const tbody = document.getElementById('programTableBody');
    tbody.innerHTML = programData.map((item, index) => `
        <tr>
            <td>${index + 1}</td>
            <td><strong>${item.program}</strong></td>
            <td>${item.kegiatan}</td>
            <td>${item.tanggal}</td>
            <td>${item.waktu}</td>
            <td>${item.lokasi}</td>
            <td>${item.pic}</td>
            <td>
                <button class="btn-edit" onclick="editJadwal('program', ${item.id})">✏️</button>
                <button style="background:#f44336;color:#fff;border:none;padding:4px 12px;border-radius:6px;cursor:pointer;" onclick="hapusJadwal('program', ${item.id})">🗑️</button>
            </td>
        </tr>
    `).join('');
}

// ============================================
// RINGKASAN 4 JADWAL DI BERANDA
// ============================================
// ============================================
// RINGKASAN 4 JADWAL DI BERANDA (FIX)
// ============================================
function renderRingkasanJadwal() {
    const today = new Date().toISOString().split('T')[0];
    
    console.log('📋 Render Ringkasan - Hari ini:', today);
    console.log('📊 Data Kunjungan:', kunjunganData);
    console.log('📊 Data Ruang:', ruangData);
    console.log('📊 Data Balai:', balaiData);
    console.log('📊 Data Program:', programData);

    // ===== KUNJUNGAN =====
    const kunjunganHariIni = kunjunganData.filter(item => item.tanggal === today);
    const tbodyKunjungan = document.getElementById('ringkasanKunjungan');
    if (!tbodyKunjungan) return;
    
    if (kunjunganHariIni.length === 0) {
        tbodyKunjungan.innerHTML = `<tr><td colspan="4" style="text-align:center;color:#888;padding:10px;">Tidak ada kunjungan hari ini</td></tr>`;
    } else {
        tbodyKunjungan.innerHTML = kunjunganHariIni.map((item, index) => `
            <tr>
                <td>${index + 1}</td>
                <td><strong>${item.nama || '-'}</strong></td>
                <td>${item.waktu || '-'}</td>
                <td>${item.pic || '-'}</td>
            </tr>
        `).join('');
    }

    // ===== PEMAKAIAN RUANG =====
    const ruangHariIni = ruangData.filter(item => item.tanggal === today);
    const tbodyRuang = document.getElementById('ringkasanRuang');
    if (!tbodyRuang) return;
    
    if (ruangHariIni.length === 0) {
        tbodyRuang.innerHTML = `<tr><td colspan="4" style="text-align:center;color:#888;padding:10px;">Tidak ada pemakaian ruang hari ini</td></tr>`;
    } else {
        tbodyRuang.innerHTML = ruangHariIni.map((item, index) => `
            <tr>
                <td>${index + 1}</td>
                <td><strong>${item.kegiatan || '-'}</strong></td>
                <td>${item.waktu || '-'}</td>
                <td>${item.ruangan || '-'}</td>
            </tr>
        `).join('');
    }

    // ===== BALAI BRI =====
    const balaiHariIni = balaiData.filter(item => item.tanggal === today);
    const tbodyBalai = document.getElementById('ringkasanBalai');
    if (!tbodyBalai) return;
    
    if (balaiHariIni.length === 0) {
        tbodyBalai.innerHTML = `<tr><td colspan="4" style="text-align:center;color:#888;padding:10px;">Tidak ada kegiatan Balai BRI hari ini</td></tr>`;
    } else {
        tbodyBalai.innerHTML = balaiHariIni.map((item, index) => `
            <tr>
                <td>${index + 1}</td>
                <td><strong>${item.kegiatan || '-'}</strong></td>
                <td>${item.waktu || '-'}</td>
                <td>${item.ruangan || '-'}</td>
            </tr>
        `).join('');
    }

    // ===== PER PROGRAM =====
    const programHariIni = programData.filter(item => item.tanggal === today);
    const tbodyProgram = document.getElementById('ringkasanProgram');
    if (!tbodyProgram) return;
    
    if (programHariIni.length === 0) {
        tbodyProgram.innerHTML = `<tr><td colspan="4" style="text-align:center;color:#888;padding:10px;">Tidak ada kegiatan program hari ini</td></tr>`;
    } else {
        tbodyProgram.innerHTML = programHariIni.map((item, index) => `
            <tr>
                <td>${index + 1}</td>
                <td><strong>${item.program || '-'}</strong></td>
                <td>${item.waktu || '-'}</td>
                <td>${item.lokasi || '-'}</td>
            </tr>
        `).join('');
    }
}

// ============================================
// CRUD JADWAL (UMUM)
// ============================================


function editJadwal(jenis, id) {
    let data, title;
    switch(jenis) {
        case 'kunjungan':
            data = kunjunganData.find(d => d.id === id);
            title = 'Edit Jadwal Kunjungan';
            document.getElementById('formJenis').value = 'kunjungan';
            document.getElementById('fNamaTamu').value = data.nama;
            document.getElementById('fInstansi').value = data.instansi;
            document.getElementById('fJumlahPengunjung').value = data.jumlahPengunjung || 0;
            document.getElementById('fTujuan').value = data.tujuan;
            break;
        case 'ruang':
            data = ruangData.find(d => d.id === id);
            title = 'Edit Jadwal Pemakaian Ruang';
            document.getElementById('formJenis').value = 'ruang';
            document.getElementById('fKegiatanRuang').value = data.kegiatan;
            document.getElementById('fKapasitas').value = data.kapasitas;
            break;
        case 'balai':
            data = balaiData.find(d => d.id === id);
            title = 'Edit Jadwal Balai BRI';
            document.getElementById('formJenis').value = 'balai';
            document.getElementById('fKegiatanBalai').value = data.kegiatan;
            document.getElementById('fJenisKegiatan').value = data.jenis;
            break;
        case 'program':
            data = programData.find(d => d.id === id);
            title = 'Edit Jadwal Per Program';
            document.getElementById('formJenis').value = 'program';
            document.getElementById('fNamaProgram').value = data.program;
            document.getElementById('fKegiatanProgram').value = data.kegiatan;
            break;
        default:
            return;
    }

    document.getElementById('modalJadwalTitle').textContent = title;
    document.getElementById('jadwalId').value = id;
    document.getElementById('jadwalJenis').value = jenis;
    document.getElementById('fTanggal').value = data.tanggal;
    document.getElementById('fWaktu').value = data.waktu;
    document.getElementById('fRuangan').value = data.ruangan || data.lokasi || '';
    document.getElementById('fTempat').value = data.tempat || data.lokasi || '';
    document.getElementById('fPic').value = data.pic;
    document.getElementById('btnDeleteJadwal').style.display = 'inline-block';

    updateDropdowns();
    ubahFormJadwal();
    document.getElementById('jadwalModal').classList.add('active');
}

// ============================================
// FUNGSI ORIGINAL SAVE (AKAN DI OVERRIDE)
// ============================================
function saveJadwal(e) {
    // Ini akan di-override oleh script di HTML
    console.log('⚠️ saveJadwal original dipanggil - akan di-override');
}

function saveEvent(e) {
    // Ini akan di-override oleh script di HTML
    console.log('⚠️ saveEvent original dipanggil - akan di-override');
}

function saveCapaian(e) {
    // Ini akan di-override oleh script di HTML
    console.log('⚠️ saveCapaian original dipanggil - akan di-override');
}

function hapusJadwal(jenis, id) {
    if (confirm('Yakin ingin menghapus jadwal ini?')) {
        switch(jenis) {
            case 'kunjungan':
                kunjunganData = kunjunganData.filter(d => d.id !== id);
                renderKunjunganTable();
                break;
            case 'ruang':
                ruangData = ruangData.filter(d => d.id !== id);
                renderRuangTable();
                break;
            case 'balai':
                balaiData = balaiData.filter(d => d.id !== id);
                renderBalaiTable();
                break;
            case 'program':
                programData = programData.filter(d => d.id !== id);
                renderProgramTable();
                break;
            default:
                return;
        }
        renderRingkasanJadwal();
        updateStats();
        sinkronkanJadwalKeKalender();
        sinkronkanKunjunganKeCapaian();
        simpanSemuaData();
        alert('✅ Jadwal berhasil dihapus!');
    }
}

function hapusJadwalFromModal() {
    const id = document.getElementById('jadwalId').value;
    const jenis = document.getElementById('jadwalJenis').value || document.getElementById('formJenis').value;
    if (!id) return;
    if (confirm('Yakin ingin menghapus jadwal ini?')) {
        hapusJadwal(jenis, parseInt(id));
        closeJadwalModal();
    }
}

function closeJadwalModal() {
    const modal = document.getElementById('jadwalModal');
    if (modal) {
        modal.classList.remove('active');
        modal.style.display = 'none';
    }
}

function ubahFormJadwal() {
    const jenis = document.getElementById('formJenis').value;
    
    // Sembunyikan semua field
    document.getElementById('fieldKunjungan').style.display = 'none';
    document.getElementById('fieldRuang').style.display = 'none';
    document.getElementById('fieldBalai').style.display = 'none';
    document.getElementById('fieldProgram').style.display = 'none';
    
    // Tampilkan sesuai jenis
    if (jenis === 'kunjungan') {
        document.getElementById('fieldKunjungan').style.display = 'block';
    } else if (jenis === 'ruang') {
        document.getElementById('fieldRuang').style.display = 'block';
    } else if (jenis === 'balai') {
        document.getElementById('fieldBalai').style.display = 'block';
    } else if (jenis === 'program') {
        document.getElementById('fieldProgram').style.display = 'block';
    }
}

// ============================================
// RENDER RINGKASAN 4 TABEL (MIRIP ADMIN)
// ============================================
function renderRingkasan() {
    const today = new Date().toISOString().split('T')[0];
    
    // Kunjungan
    const kunjunganHariIni = (data.kunjunganData || []).filter(item => item.tanggal === today);
    const tbodyKunjungan = document.getElementById('ringkasanKunjungan');
    if (tbodyKunjungan) {
        if (kunjunganHariIni.length === 0) {
            tbodyKunjungan.innerHTML = `<tr><td colspan="4" style="text-align:center;color:#888;padding:8px;">Tidak ada kunjungan</td></tr>`;
        } else {
            tbodyKunjungan.innerHTML = kunjunganHariIni.map((item, index) => `
                <tr>
                    <td>${index + 1}</td>
                    <td><strong>${item.nama || '-'}</strong></td>
                    <td>${item.waktu || '-'}</td>
                    <td>${item.pic || '-'}</td>
                </tr>
            `).join('');
        }
    }
    // Update link "Lihat semua" untuk kunjungan
    const linkKunjungan = document.querySelector('.jadwal-card:nth-child(1) .lihat-semua a');
    if (linkKunjungan) {
        linkKunjungan.setAttribute('onclick', `lihatSemua('kunjungan', '${today}'); return false;`);
        linkKunjungan.href = '#';
    }

    // Ruang
    const ruangHariIni = (data.ruangData || []).filter(item => item.tanggal === today);
    const tbodyRuang = document.getElementById('ringkasanRuang');
    if (tbodyRuang) {
        if (ruangHariIni.length === 0) {
            tbodyRuang.innerHTML = `<tr><td colspan="4" style="text-align:center;color:#888;padding:8px;">Tidak ada pemakaian ruang</td></tr>`;
        } else {
            tbodyRuang.innerHTML = ruangHariIni.map((item, index) => `
                <tr>
                    <td>${index + 1}</td>
                    <td><strong>${item.kegiatan || '-'}</strong></td>
                    <td>${item.waktu || '-'}</td>
                    <td>${item.ruangan || '-'}</td>
                </tr>
            `).join('');
        }
    }
    const linkRuang = document.querySelector('.jadwal-card:nth-child(2) .lihat-semua a');
    if (linkRuang) {
        linkRuang.setAttribute('onclick', `lihatSemua('ruang', '${today}'); return false;`);
        linkRuang.href = '#';
    }

    // Balai
    const balaiHariIni = (data.balaiData || []).filter(item => item.tanggal === today);
    const tbodyBalai = document.getElementById('ringkasanBalai');
    if (tbodyBalai) {
        if (balaiHariIni.length === 0) {
            tbodyBalai.innerHTML = `<tr><td colspan="4" style="text-align:center;color:#888;padding:8px;">Tidak ada kegiatan Balai BRI</td></tr>`;
        } else {
            tbodyBalai.innerHTML = balaiHariIni.map((item, index) => `
                <tr>
                    <td>${index + 1}</td>
                    <td><strong>${item.kegiatan || '-'}</strong></td>
                    <td>${item.waktu || '-'}</td>
                    <td>${item.ruangan || '-'}</td>
                </tr>
            `).join('');
        }
    }
    const linkBalai = document.querySelector('.jadwal-card:nth-child(3) .lihat-semua a');
    if (linkBalai) {
        linkBalai.setAttribute('onclick', `lihatSemua('balai', '${today}'); return false;`);
        linkBalai.href = '#';
    }

    // Program
    const programHariIni = (data.programData || []).filter(item => item.tanggal === today);
    const tbodyProgram = document.getElementById('ringkasanProgram');
    if (tbodyProgram) {
        if (programHariIni.length === 0) {
            tbodyProgram.innerHTML = `<tr><td colspan="4" style="text-align:center;color:#888;padding:8px;">Tidak ada kegiatan program</td></tr>`;
        } else {
            tbodyProgram.innerHTML = programHariIni.map((item, index) => `
                <tr>
                    <td>${index + 1}</td>
                    <td><strong>${item.program || '-'}</strong></td>
                    <td>${item.waktu || '-'}</td>
                    <td>${item.lokasi || '-'}</td>
                </tr>
            `).join('');
        }
    }
    const linkProgram = document.querySelector('.jadwal-card:nth-child(4) .lihat-semua a');
    if (linkProgram) {
        linkProgram.setAttribute('onclick', `lihatSemua('program', '${today}'); return false;`);
        linkProgram.href = '#';
    }
}

// ============================================
// FUNGSI LIHAT SEMUA - MENAMPILKAN MODAL
// ============================================
// ============================================
// LIHAT SEMUA - MENAMPILKAN SEMUA DATA PER HARI
// ============================================
function lihatSemua(jenis, tanggal) {
    const modal = document.getElementById('modalLihatSemua');
    const title = document.getElementById('modalLihatSemuaTitle');
    const thead = document.getElementById('modalLihatSemuaThead');
    const tbody = document.getElementById('modalLihatSemuaTbody');
    const total = document.getElementById('modalTotalData');

    let dataList = [];
    let headers = [];
    let titleText = '';

    // Ambil SEMUA data untuk tanggal tersebut dari semua sumber
    const semuaKunjungan = (data.kunjunganData || []).filter(item => item.tanggal === tanggal);
    const semuaRuang = (data.ruangData || []).filter(item => item.tanggal === tanggal);
    const semuaBalai = (data.balaiData || []).filter(item => item.tanggal === tanggal);
    const semuaProgram = (data.programData || []).filter(item => item.tanggal === tanggal);

    if (jenis === 'kunjungan') {
        // Tampilkan SEMUA kunjungan hari itu
        dataList = semuaKunjungan;
        headers = ['No', 'Nama Tamu', 'Instansi', 'Waktu', 'Jumlah', 'Tujuan', 'PIC'];
        titleText = `📋 Semua Kunjungan - ${formatTanggal(tanggal)} (${dataList.length} data)`;
    } else if (jenis === 'ruang') {
        // Tampilkan SEMUA pemakaian ruang hari itu
        dataList = semuaRuang;
        headers = ['No', 'Kegiatan', 'Ruangan', 'Waktu', 'Kapasitas', 'PIC'];
        titleText = `🏢 Semua Pemakaian Ruang - ${formatTanggal(tanggal)} (${dataList.length} data)`;
    } else if (jenis === 'balai') {
        // Tampilkan SEMUA balai BRI hari itu
        dataList = semuaBalai;
        headers = ['No', 'Kegiatan', 'Jenis', 'Waktu', 'Ruangan', 'PIC'];
        titleText = `🏛️ Semua Balai BRI - ${formatTanggal(tanggal)} (${dataList.length} data)`;
    } else if (jenis === 'program') {
        // Tampilkan SEMUA program hari itu
        dataList = semuaProgram;
        headers = ['No', 'Program', 'Kegiatan', 'Waktu', 'Lokasi', 'PIC'];
        titleText = `📊 Semua Per Program - ${formatTanggal(tanggal)} (${dataList.length} data)`;
    }

    // Buat header
    let headerHtml = '<tr>';
    headers.forEach(h => {
        headerHtml += `<th>${h}</th>`;
    });
    headerHtml += '</tr>';
    thead.innerHTML = headerHtml;

    // Buat body
    if (dataList.length === 0) {
        tbody.innerHTML = `<tr><td colspan="${headers.length}" style="text-align:center;color:#888;padding:20px;">📭 Tidak ada data untuk hari ini</td></tr>`;
    } else {
        let bodyHtml = '';
        dataList.forEach((item, index) => {
            bodyHtml += '<tr>';
            bodyHtml += `<td>${index + 1}</td>`;
            
            if (jenis === 'kunjungan') {
                bodyHtml += `<td><strong>${item.nama || '-'}</strong></td>`;
                bodyHtml += `<td>${item.instansi || '-'}</td>`;
                bodyHtml += `<td>${item.waktu || '-'}</td>`;
                bodyHtml += `<td>${item.jumlahPengunjung || 0}</td>`;
                bodyHtml += `<td>${item.tujuan || '-'}</td>`;
                bodyHtml += `<td>${item.pic || '-'}</td>`;
            } else if (jenis === 'ruang') {
                bodyHtml += `<td><strong>${item.kegiatan || '-'}</strong></td>`;
                bodyHtml += `<td>${item.ruangan || '-'}</td>`;
                bodyHtml += `<td>${item.waktu || '-'}</td>`;
                bodyHtml += `<td>${item.kapasitas || 0} orang</td>`;
                bodyHtml += `<td>${item.pic || '-'}</td>`;
            } else if (jenis === 'balai') {
                bodyHtml += `<td><strong>${item.kegiatan || '-'}</strong></td>`;
                bodyHtml += `<td>${item.jenis || '-'}</td>`;
                bodyHtml += `<td>${item.waktu || '-'}</td>`;
                bodyHtml += `<td>${item.ruangan || '-'}</td>`;
                bodyHtml += `<td>${item.pic || '-'}</td>`;
            } else if (jenis === 'program') {
                bodyHtml += `<td><strong>${item.program || '-'}</strong></td>`;
                bodyHtml += `<td>${item.kegiatan || '-'}</td>`;
                bodyHtml += `<td>${item.waktu || '-'}</td>`;
                bodyHtml += `<td>${item.lokasi || '-'}</td>`;
                bodyHtml += `<td>${item.pic || '-'}</td>`;
            }
            
            bodyHtml += '</tr>';
        });
        tbody.innerHTML = bodyHtml;
    }

    title.textContent = titleText;
    total.textContent = dataList.length;
    modal.classList.add('active');
    modal.style.display = 'flex';
}

// ============================================
// LIHAT SEMUA LENGKAP - SEMUA ACARA HARI ITU
// ============================================
function lihatSemuaLengkap(jenis, tanggal) {
    const modal = document.getElementById('modalLihatSemua');
    const title = document.getElementById('modalLihatSemuaTitle');
    const thead = document.getElementById('modalLihatSemuaThead');
    const tbody = document.getElementById('modalLihatSemuaTbody');
    const total = document.getElementById('modalTotalData');

    // Ambil SEMUA data untuk tanggal tersebut dari semua sumber
    const semuaKunjungan = (data.kunjunganData || []).filter(item => item.tanggal === tanggal);
    const semuaRuang = (data.ruangData || []).filter(item => item.tanggal === tanggal);
    const semuaBalai = (data.balaiData || []).filter(item => item.tanggal === tanggal);
    const semuaProgram = (data.programData || []).filter(item => item.tanggal === tanggal);

    // Gabungkan semua data dengan label jenis
    let dataList = [];
    
    semuaKunjungan.forEach(item => {
        dataList.push({
            jenis: '📋 Kunjungan',
            nama: item.nama || '-',
            detail1: item.instansi || '-',
            detail2: item.waktu || '-',
            detail3: item.jumlahPengunjung || 0,
            detail4: item.tujuan || '-',
            pic: item.pic || '-'
        });
    });
    
    semuaRuang.forEach(item => {
        dataList.push({
            jenis: '🏢 Pemakaian Ruang',
            nama: item.kegiatan || '-',
            detail1: item.ruangan || '-',
            detail2: item.waktu || '-',
            detail3: item.kapasitas || 0,
            detail4: '-',
            pic: item.pic || '-'
        });
    });
    
    semuaBalai.forEach(item => {
        dataList.push({
            jenis: '🏛️ Balai BRI',
            nama: item.kegiatan || '-',
            detail1: item.jenis || '-',
            detail2: item.waktu || '-',
            detail3: item.ruangan || '-',
            detail4: '-',
            pic: item.pic || '-'
        });
    });
    
    semuaProgram.forEach(item => {
        dataList.push({
            jenis: '📊 Per Program',
            nama: item.program || '-',
            detail1: item.kegiatan || '-',
            detail2: item.waktu || '-',
            detail3: item.lokasi || '-',
            detail4: '-',
            pic: item.pic || '-'
        });
    });

    // Header untuk semua jenis
    const headers = ['No', 'Jenis', 'Nama', 'Detail 1', 'Waktu', 'Detail 2', 'Detail 3', 'PIC'];
    const titleText = `📋 Semua Kegiatan - ${formatTanggal(tanggal)} (${dataList.length} data)`;

    // Buat header
    let headerHtml = '<tr>';
    headers.forEach(h => { headerHtml += `<th>${h}</th>`; });
    headerHtml += '</tr>';
    thead.innerHTML = headerHtml;

    // Buat body
    if (dataList.length === 0) {
        tbody.innerHTML = `<tr><td colspan="${headers.length}" style="text-align:center;color:#888;padding:20px;">📭 Tidak ada kegiatan hari ini</td></tr>`;
    } else {
        let bodyHtml = '';
        dataList.forEach((item, index) => {
            bodyHtml += `<tr>
                <td>${index + 1}</td>
                <td>${item.jenis}</td>
                <td><strong>${item.nama}</strong></td>
                <td>${item.detail1}</td>
                <td>${item.detail2}</td>
                <td>${item.detail3}</td>
                <td>${item.detail4}</td>
                <td>${item.pic}</td>
            </tr>`;
        });
        tbody.innerHTML = bodyHtml;
    }

    title.textContent = titleText;
    total.textContent = dataList.length;
    modal.classList.add('active');
    modal.style.display = 'flex';
}
// ============================================
// FUNGSI FORMAT TANGGAL
// ============================================
function formatTanggal(tanggal) {
    if (!tanggal) return '-';
    const parts = tanggal.split('-');
    const bulanNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    return `${parseInt(parts[2])} ${bulanNames[parseInt(parts[1]) - 1]} ${parts[0]}`;
}

// ============================================
// CLOSE MODAL
// ============================================
function closeModalLihatSemua() {
    const modal = document.getElementById('modalLihatSemua');
    modal.classList.remove('active');
    modal.style.display = 'none';
}

// Tutup modal jika klik di luar
document.addEventListener('click', function(e) {
    const modal = document.getElementById('modalLihatSemua');
    if (e.target === modal) {
        closeModalLihatSemua();
    }
});


// ============================================
// FUNGSI TAMBAH MASTER CEPAT (DARI FORM)
// ============================================

function tambahMasterRuanganCepat() {
    const val = prompt('Masukkan nama ruangan baru:');
    if (!val) return;
    if (masterRuangan.includes(val)) { alert('Ruangan sudah ada!'); return; }
    masterRuangan.push(val);
    updateDropdowns();
    renderMasterData();
    simpanSemuaData();
    alert('✅ Ruangan berhasil ditambahkan!');
}

function tambahMasterTempatCepat() {
    const val = prompt('Masukkan nama tempat baru:');
    if (!val) return;
    if (masterTempat.includes(val)) { alert('Tempat sudah ada!'); return; }
    masterTempat.push(val);
    updateDropdowns();
    renderMasterData();
    simpanSemuaData();
    alert('✅ Tempat berhasil ditambahkan!');
}

function tambahMasterPicCepat() {
    const val = prompt('Masukkan nama PIC baru:');
    if (!val) return;
    if (masterPic.includes(val)) { alert('PIC sudah ada!'); return; }
    masterPic.push(val);
    updateDropdowns();
    renderMasterData();
    simpanSemuaData();
    alert('✅ PIC berhasil ditambahkan!');
}

function tambahMasterInstansiCepat() {
    const val = prompt('Masukkan nama instansi baru:');
    if (!val) return;
    if (masterInstansi.includes(val)) { alert('Instansi sudah ada!'); return; }
    masterInstansi.push(val);
    updateDropdowns();
    renderMasterData();
    simpanSemuaData();
    alert('✅ Instansi berhasil ditambahkan!');
}

// ============================================
// MASTER DATA CRUD
// ============================================
function bukaMasterData() {
    document.getElementById('masterModal').classList.add('active');
    renderMasterData();
}

function closeMasterModal() {
    document.getElementById('masterModal').classList.remove('active');
}

let currentMasterTab = 'ruangan';

function switchMasterTab(tab) {
    currentMasterTab = tab;
    
    document.querySelectorAll('.master-tab').forEach(el => {
        el.classList.remove('active');
        el.style.display = 'none';
    });
    
    document.querySelectorAll('#masterModal .tab-btn').forEach(el => {
        el.classList.remove('active');
    });
    
    const targetTab = document.getElementById(`master-${tab}`);
    if (targetTab) {
        targetTab.classList.add('active');
        targetTab.style.display = 'block';
    }
    
    const targetBtn = document.querySelector(`#masterModal .tab-btn[onclick="switchMasterTab('${tab}')"]`);
    if (targetBtn) {
        targetBtn.classList.add('active');
    }
    
    renderMasterData();
}

function renderMasterData() {
    // ===== RUANGAN =====
    const listRuangan = document.getElementById('listRuangan');
    if (listRuangan) {
        if (masterRuangan.length === 0) {
            listRuangan.innerHTML = '<p style="color:#888;font-size:13px;padding:8px 0;">Belum ada data ruangan</p>';
        } else {
            listRuangan.innerHTML = masterRuangan.map(item => `
                <span class="master-item">
                    ${item}
                    <button onclick="hapusMaster('ruangan', '${item}')">✕</button>
                </span>
            `).join('');
        }
    }

    // ===== TEMPAT =====
    const listTempat = document.getElementById('listTempat');
    if (listTempat) {
        if (masterTempat.length === 0) {
            listTempat.innerHTML = '<p style="color:#888;font-size:13px;padding:8px 0;">Belum ada data tempat</p>';
        } else {
            listTempat.innerHTML = masterTempat.map(item => `
                <span class="master-item">
                    ${item}
                    <button onclick="hapusMaster('tempat', '${item}')">✕</button>
                </span>
            `).join('');
        }
    }

    // ===== PIC =====
    const listPic = document.getElementById('listPic');
    if (listPic) {
        if (masterPic.length === 0) {
            listPic.innerHTML = '<p style="color:#888;font-size:13px;padding:8px 0;">Belum ada data PIC</p>';
        } else {
            listPic.innerHTML = masterPic.map(item => `
                <span class="master-item">
                    ${item}
                    <button onclick="hapusMaster('pic', '${item}')">✕</button>
                </span>
            `).join('');
        }
    }

    // ===== INSTANSI =====
    const listInstansi = document.getElementById('listInstansi');
    if (listInstansi) {
        if (masterInstansi.length === 0) {
            listInstansi.innerHTML = '<p style="color:#888;font-size:13px;padding:8px 0;">Belum ada data instansi</p>';
        } else {
            listInstansi.innerHTML = masterInstansi.map(item => `
                <span class="master-item">
                    ${item}
                    <button onclick="hapusMaster('instansi', '${item}')">✕</button>
                </span>
            `).join('');
        }
    }
}

function tambahMasterRuangan() {
    const input = document.getElementById('inputRuangan');
    const val = input.value.trim();
    if (!val) { alert('Masukkan nama ruangan!'); return; }
    if (masterRuangan.includes(val)) { alert('Ruangan sudah ada!'); return; }
    masterRuangan.push(val);
    input.value = '';
    renderMasterData();
    updateDropdowns();
    simpanSemuaData();
    alert('✅ Ruangan berhasil ditambahkan!');
}

function tambahMasterTempat() {
    const input = document.getElementById('inputTempat');
    const val = input.value.trim();
    if (!val) { alert('Masukkan nama tempat!'); return; }
    if (masterTempat.includes(val)) { alert('Tempat sudah ada!'); return; }
    masterTempat.push(val);
    input.value = '';
    renderMasterData();
    updateDropdowns();
    simpanSemuaData();
    alert('✅ Tempat berhasil ditambahkan!');
}

function tambahMasterPic() {
    const input = document.getElementById('inputPic');
    const val = input.value.trim();
    if (!val) { alert('Masukkan nama PIC!'); return; }
    if (masterPic.includes(val)) { alert('PIC sudah ada!'); return; }
    masterPic.push(val);
    input.value = '';
    renderMasterData();
    updateDropdowns();
    simpanSemuaData();
    alert('✅ PIC berhasil ditambahkan!');
}

function tambahMasterInstansi() {
    const input = document.getElementById('inputInstansi');
    const val = input.value.trim();
    if (!val) { alert('Masukkan nama instansi!'); return; }
    if (masterInstansi.includes(val)) { alert('Instansi sudah ada!'); return; }
    masterInstansi.push(val);
    input.value = '';
    renderMasterData();
    updateDropdowns();
    simpanSemuaData();
    alert('✅ Instansi berhasil ditambahkan!');
}

function hapusMaster(jenis, value) {
    if (!confirm(`Hapus "${value}" dari master ${jenis}?`)) return;
    switch(jenis) {
        case 'ruangan':
            masterRuangan = masterRuangan.filter(item => item !== value);
            break;
        case 'tempat':
            masterTempat = masterTempat.filter(item => item !== value);
            break;
        case 'pic':
            masterPic = masterPic.filter(item => item !== value);
            break;
        case 'instansi':
            masterInstansi = masterInstansi.filter(item => item !== value);
            break;
        default:
            return;
    }
    renderMasterData();
    updateDropdowns();
    simpanSemuaData();
    alert('✅ Data master berhasil dihapus!');
}

// ============================================
// PRINT JADWAL
// ============================================
function printJadwal() {
    const now = new Date();
    document.getElementById('printDate').textContent = now.toLocaleDateString('id-ID', {
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
        hour: '2-digit', minute: '2-digit'
    });
    window.print();
}

// ============================================
// DASHBOARD EVENT LIST
// ============================================
function renderDashboardEvents() {
    const container = document.getElementById('dashboardEventList');
    const badge = document.getElementById('eventCountBadge');
    if (!container) return;

    const sortedEvents = [...eventData].sort((a, b) => a.tanggal - b.tanggal);
    const totalEvents = sortedEvents.length;

    if (badge) {
        badge.textContent = `${totalEvents} Kegiatan`;
    }

    if (totalEvents === 0) {
        container.innerHTML = `
            <div class="dashboard-empty-event">
                📭 Belum ada kegiatan bulan ini
            </div>
        `;
        return;
    }

    let html = '';
    sortedEvents.forEach(e => {
        html += `
            <div class="dashboard-event-item">
                <span class="event-date">${e.tanggal}</span>
                <span class="event-name">${e.nama}</span>
                <span class="event-time">🕐 ${e.waktu || '--:--'}</span>
                <span class="event-pic">👤 ${e.pic}</span>
            </div>
        `;
    });

    container.innerHTML = html;
}

// ============================================
// KALENDER DASHBOARD
// ============================================
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function renderCalendar(month, year) {
    const grid = document.getElementById('calendarGrid');
    const monthYear = document.getElementById('monthYear');

    const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    monthYear.textContent = `${monthNames[month]} ${year}`;

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date().getDate();
    const todayMonth = new Date().getMonth();
    const todayYear = new Date().getFullYear();

    let html = '';
    const dayNames = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
    dayNames.forEach(name => {
        html += `<div class="day-name">${name}</div>`;
    });

    for (let i = 0; i < firstDay; i++) {
        html += `<div class="day empty"></div>`;
    }

    for (let d = 1; d <= daysInMonth; d++) {
        const hasEvent = eventData.some(e => e.tanggal === d);
        const isToday = (d === today && month === todayMonth && year === todayYear);
        let className = 'day';
        if (hasEvent) className += ' has-event';
        if (isToday) className += ' today';
        if (!hasEvent && !isToday) className += ' no-event';
        html += `<div class="${className}">${d}</div>`;
    }

    grid.innerHTML = html;
    renderDashboardEvents();
}

document.getElementById('prevMonth').addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) { currentMonth = 11;
        currentYear--; }
    renderCalendar(currentMonth, currentYear);
});

document.getElementById('nextMonth').addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) { currentMonth = 0;
        currentYear++; }
    renderCalendar(currentMonth, currentYear);
});

// ============================================
// KALENDER FULL
// ============================================
let currentMonthFull = new Date().getMonth();
let currentYearFull = new Date().getFullYear();

function renderCalendarFull(month, year) {
    const grid = document.getElementById('calendarGridFull');
    const monthYear = document.getElementById('monthYearFull');

    const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    monthYear.textContent = `${monthNames[month]} ${year}`;

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date().getDate();
    const todayMonth = new Date().getMonth();
    const todayYear = new Date().getFullYear();

    let html = '';
    const dayNames = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
    dayNames.forEach(name => {
        html += `<div class="day-name">${name}</div>`;
    });

    for (let i = 0; i < firstDay; i++) {
        html += `<div class="day empty"></div>`;
    }

    for (let d = 1; d <= daysInMonth; d++) {
        const hasEvent = eventData.some(e => e.tanggal === d);
        const isToday = (d === today && month === todayMonth && year === todayYear);
        let className = 'day';
        if (hasEvent) className += ' has-event';
        if (isToday) className += ' today';
        if (!hasEvent && !isToday) className += ' no-event';
        html += `<div class="${className}" onclick="showEventDetail(${d})">${d}</div>`;
    }

    grid.innerHTML = html;
    showEventDetail(null);
    renderDashboardEvents();
}

function showEventDetail(tanggal) {
    const container = document.getElementById('eventListFull');
    const events = tanggal ? eventData.filter(e => e.tanggal === tanggal) : eventData;

    if (events.length === 0) {
        if (tanggal) {
            container.innerHTML = `
                <div style="padding:12px;background:#fff;border-radius:8px;text-align:center;color:#888;">
                    Tidak ada event pada tanggal ${tanggal}
                    <br><button class="btn-add" onclick="tambahEventTanggal(${tanggal})" style="margin-top:8px;">+ Tambah Event</button>
                </div>
            `;
        } else {
            container.innerHTML = `<p style="color:#888;">Klik tanggal untuk melihat & mengelola event</p>`;
        }
        return;
    }

    container.innerHTML = events.map(e => `
        <div style="padding:8px 12px;background:#fff;border-radius:8px;margin-bottom:6px;border-left:4px solid #1a237e;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
            <div>
                <strong>${e.nama}</strong> - ${e.waktu} (${e.ruangan}) - PIC: ${e.pic}
                ${e.dariJadwal ? '<span style="font-size:10px;color:#888;margin-left:8px;">📌 dari Jadwal</span>' : ''}
            </div>
            <div style="display:flex;gap:6px;">
                ${e.dariJadwal ? 
                    `<button class="btn-edit" onclick="alert('Event ini berasal dari jadwal ${e.sumber}. Edit di halaman Jadwal.')">🔗 Lihat Sumber</button>` :
                    `<button class="btn-edit" onclick="editEvent(${e.id})">✏️ Edit</button>
                    <button style="background:#f44336;color:#fff;border:none;padding:4px 12px;border-radius:6px;cursor:pointer;" onclick="hapusEventById(${e.id})">🗑️</button>`
                }
            </div>
        </div>
    `).join('');
}

function tambahEvent() {
    document.getElementById('modalEventTitle').textContent = 'Tambah Event';
    document.getElementById('eventId').value = '';
    document.getElementById('eventTanggal').value = '';
    document.getElementById('eventNama').value = '';
    document.getElementById('eventWaktu').value = '';
    document.getElementById('eventRuangan').value = '';
    document.getElementById('eventTempat').value = '';
    document.getElementById('eventPic').value = '';
    document.getElementById('btnDeleteEvent').style.display = 'none';
    updateDropdowns();
    document.getElementById('eventModal').classList.add('active');
}

function tambahEventTanggal(tanggal) {
    tambahEvent();
    document.getElementById('eventTanggal').value = tanggal;
}

function editEvent(id) {
    const event = eventData.find(e => e.id === id);
    if (!event) return;

    document.getElementById('modalEventTitle').textContent = 'Edit Event';
    document.getElementById('eventId').value = event.id;
    document.getElementById('eventTanggal').value = event.tanggal;
    document.getElementById('eventNama').value = event.nama;
    document.getElementById('eventWaktu').value = event.waktu;
    document.getElementById('eventRuangan').value = event.ruangan;
    document.getElementById('eventTempat').value = event.tempat;
    document.getElementById('eventPic').value = event.pic;
    document.getElementById('btnDeleteEvent').style.display = 'inline-block';
    updateDropdowns();
    document.getElementById('eventModal').classList.add('active');
}

function hapusEvent() {
    const id = document.getElementById('eventId').value;
    if (!id) return;
    if (confirm('Yakin ingin menghapus event ini?')) {
        eventData = eventData.filter(e => e.id !== parseInt(id));
        closeEventModal();
        renderCalendarFull(currentMonthFull, currentYearFull);
        renderCalendar(currentMonth, currentYear);
        simpanSemuaData();
        alert('✅ Event berhasil dihapus!');
    }
}

function hapusEventById(id) {
    if (confirm('Yakin ingin menghapus event ini?')) {
        eventData = eventData.filter(e => e.id !== id);
        renderCalendarFull(currentMonthFull, currentYearFull);
        renderCalendar(currentMonth, currentYear);
        simpanSemuaData();
        alert('✅ Event berhasil dihapus!');
    }
}

function closeEventModal() {
    document.getElementById('eventModal').classList.remove('active');
}

function refreshKalenderFull() {
    renderCalendarFull(currentMonthFull, currentYearFull);
    alert('🔄 Kalender berhasil direfresh!');
}

document.getElementById('prevMonthFull').addEventListener('click', () => {
    currentMonthFull--;
    if (currentMonthFull < 0) { currentMonthFull = 11;
        currentYearFull--; }
    renderCalendarFull(currentMonthFull, currentYearFull);
});

document.getElementById('nextMonthFull').addEventListener('click', () => {
    currentMonthFull++;
    if (currentMonthFull > 11) { currentMonthFull = 0;
        currentYearFull++; }
    renderCalendarFull(currentMonthFull, currentYearFull);
});

// ============================================
// CAPAIAN CRUD
// ============================================
function tambahCapaian() {
    document.getElementById('modalCapaianTitle').textContent = 'Tambah Data Capaian';
    document.getElementById('capaianIndex').value = '';
    document.getElementById('capaianBulan').value = 'Jan';
    document.getElementById('capaianJumlah').value = '';
    document.getElementById('capaianTarget').value = '200';
    document.getElementById('capaianMahasiswa').value = '';
    document.getElementById('capaianDosen').value = '';
    document.getElementById('capaianUmum').value = '';
    document.getElementById('capaianInstansi').value = '';
    document.getElementById('btnDeleteCapaian').style.display = 'none';
    document.getElementById('capaianModal').classList.add('active');
}

function editCapaian(index) {
    const data = capaianData[index];
    if (!data) return;

    document.getElementById('modalCapaianTitle').textContent = 'Edit Data Capaian';
    document.getElementById('capaianIndex').value = index;
    document.getElementById('capaianBulan').value = data.bulan;
    document.getElementById('capaianJumlah').value = data.jumlah;
    document.getElementById('capaianTarget').value = data.target;
    document.getElementById('capaianMahasiswa').value = data.mahasiswa || 0;
    document.getElementById('capaianDosen').value = data.dosen || 0;
    document.getElementById('capaianUmum').value = data.umum || 0;
    document.getElementById('capaianInstansi').value = data.instansi || 0;
    document.getElementById('btnDeleteCapaian').style.display = 'inline-block';
    document.getElementById('capaianModal').classList.add('active');
}

function hapusCapaian() {
    const index = document.getElementById('capaianIndex').value;
    if (index === '') return;
    if (confirm('Yakin ingin menghapus data capaian ini?')) {
        capaianData.splice(parseInt(index), 1);
        closeCapaianModal();
        renderCapaianTable();
        updateAllCharts();
        simpanSemuaData();
        alert('✅ Data capaian berhasil dihapus!');
    }
}

function hapusCapaianByIndex(index) {
    if (confirm('Yakin ingin menghapus data capaian ini?')) {
        capaianData.splice(index, 1);
        renderCapaianTable();
        updateAllCharts();
        simpanSemuaData();
        alert('✅ Data capaian berhasil dihapus!');
    }
}

function closeCapaianModal() {
    document.getElementById('capaianModal').classList.remove('active');
}

function refreshCapaian() {
    renderCapaianTable();
    updateAllCharts();
    alert('🔄 Data capaian berhasil direfresh!');
}

// ============================================
// RENDER TABEL CAPAIAN (Dengan Progress Bar & Persentase)
// ============================================
function renderCapaianTable() {
    const tbody = document.getElementById('capaianTableBody');

    tbody.innerHTML = capaianData.map((item, index) => {
        const persentase = Math.round((item.jumlah / item.target) * 100);
        let status = '';
        let statusClass = '';

        if (persentase >= 100) {
            status = '✅ Tercapai';
            statusClass = 'status-success';
        } else if (persentase >= 75) {
            status = '⚠️ Mendekati';
            statusClass = 'status-warning';
        } else {
            status = '❌ Belum Tercapai';
            statusClass = 'status-danger';
        }

        const progressWidth = Math.min(persentase, 100);
        let barColor = '#f44336';
        if (persentase >= 75) barColor = '#ff9800';
        if (persentase >= 100) barColor = '#4caf50';

        const kategoriDetail = (item.mahasiswa || item.dosen || item.umum || item.instansi) ? 
            `📊 M:${item.mahasiswa || 0} D:${item.dosen || 0} U:${item.umum || 0} I:${item.instansi || 0}` : '';

        return `
            <tr>
                <td>${index + 1}</td>
                <td><strong>${item.bulan}</strong></td>
                <td>${item.jumlah}</td>
                <td>${item.target}</td>
                <td>
                    <div style="display:flex;align-items:center;gap:8px;">
                        <div style="flex:1;background:#e0e0e0;border-radius:10px;height:8px;max-width:100px;">
                            <div style="width:${progressWidth}%;background:${barColor};border-radius:10px;height:8px;transition:width 0.5s;"></div>
                        </div>
                        <span style="font-weight:700;color:#1a237e;min-width:45px;font-size:14px;">${persentase}%</span>
                    </div>
                    ${kategoriDetail ? `<div style="font-size:10px;color:#888;margin-top:2px;">${kategoriDetail}</div>` : ''}
                </td>
                <td><span class="${statusClass}">${status}</span></td>
                <td>
                    <button class="btn-edit" onclick="editCapaian(${index})">✏️ Edit</button>
                    <button style="background:#f44336;color:#fff;border:none;padding:4px 12px;border-radius:6px;cursor:pointer;" onclick="hapusCapaianByIndex(${index})">🗑️</button>
                </td>
            </tr>
        `;
    }).join('');
}

// ============================================
// UPDATE STATS
// ============================================
function updateStats() {
    document.getElementById('totalKunjungan').textContent = kunjunganData ? kunjunganData.length : 0;
    document.getElementById('totalRuang').textContent = ruangData ? ruangData.length : 0;
    document.getElementById('totalBalai').textContent = balaiData ? balaiData.length : 0;
    document.getElementById('totalProgram').textContent = programData ? programData.length : 0;
}

// ============================================
// UPDATE ALL CHARTS
// ============================================
let currentPeriod = 'mingguan';
let currentPeriodFull = 'mingguan';
let currentLaporanPeriod = 'mingguan';

function updateAllCharts() {
    initBarChart(currentPeriod || 'mingguan');
    initBarChartFull(currentPeriodFull || 'mingguan');
    initBarChartLaporan(currentLaporanPeriod || 'mingguan');
    initPieChart();
    initPieChartFull();
    initPieChartLaporan();
}

// ============================================
// GRAFIK PIE (Dashboard) - Dinamis dari capaianData
// ============================================
let pieChartInstance = null;

function initPieChart() {
    const ctx = document.getElementById('pieChart').getContext('2d');
    if (pieChartInstance) pieChartInstance.destroy();

    const pieData = getPieData();
    const total = pieData.values.reduce((a, b) => a + b, 0);

    if (total === 0 || pieData.labels[0] === 'Belum ada data') {
        pieChartInstance = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Belum ada data'],
                datasets: [{
                    data: [1],
                    backgroundColor: ['#e0e0e0'],
                    borderWidth: 2,
                    borderColor: '#fff',
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 14,
                            usePointStyle: true,
                            pointStyle: 'circle',
                            font: { size: 13 }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function() {
                                return 'Belum ada data capaian';
                            }
                        }
                    }
                }
            }
        });
        return;
    }

    pieChartInstance = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: pieData.labels,
            datasets: [{
                data: pieData.values,
                backgroundColor: pieData.colors,
                borderWidth: 2,
                borderColor: '#fff',
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 14,
                        usePointStyle: true,
                        pointStyle: 'circle',
                        font: { size: 13 }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : 0;
                            return `${label}: ${percentage}% (${value} orang)`;
                        }
                    }
                }
            }
        }
    });
}

// ============================================
// GRAFIK PIE (Halaman Capaian) - Dinamis dari capaianData
// ============================================
let pieChartFullInstance = null;

function initPieChartFull() {
    const ctx = document.getElementById('pieChartFull').getContext('2d');
    if (pieChartFullInstance) pieChartFullInstance.destroy();

    const pieData = getPieData();
    const total = pieData.values.reduce((a, b) => a + b, 0);

    if (total === 0 || pieData.labels[0] === 'Belum ada data') {
        pieChartFullInstance = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Belum ada data'],
                datasets: [{
                    data: [1],
                    backgroundColor: ['#e0e0e0'],
                    borderWidth: 2,
                    borderColor: '#fff',
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 14,
                            usePointStyle: true,
                            pointStyle: 'circle',
                            font: { size: 13 }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function() {
                                return 'Belum ada data capaian';
                            }
                        }
                    }
                }
            }
        });
        return;
    }

    pieChartFullInstance = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: pieData.labels,
            datasets: [{
                data: pieData.values,
                backgroundColor: pieData.colors,
                borderWidth: 2,
                borderColor: '#fff',
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 14,
                        usePointStyle: true,
                        pointStyle: 'circle',
                        font: { size: 13 }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : 0;
                            return `${label}: ${percentage}% (${value} orang)`;
                        }
                    }
                }
            }
        }
    });
}

// ============================================
// GRAFIK PIE (Laporan) - Dinamis dari capaianData
// ============================================
let pieChartLaporanInstance = null;

function initPieChartLaporan() {
    const ctx = document.getElementById('pieChartLaporan').getContext('2d');
    if (pieChartLaporanInstance) pieChartLaporanInstance.destroy();

    const pieData = getPieData();
    const total = pieData.values.reduce((a, b) => a + b, 0);

    if (total === 0 || pieData.labels[0] === 'Belum ada data') {
        pieChartLaporanInstance = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Belum ada data'],
                datasets: [{
                    data: [1],
                    backgroundColor: ['#e0e0e0'],
                    borderWidth: 3,
                    borderColor: '#fff',
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 16,
                            usePointStyle: true,
                            pointStyle: 'circle',
                            font: { size: 13 }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function() {
                                return 'Belum ada data capaian';
                            }
                        }
                    }
                }
            }
        });
        return;
    }

    pieChartLaporanInstance = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: pieData.labels,
            datasets: [{
                data: pieData.values,
                backgroundColor: pieData.colors,
                borderWidth: 3,
                borderColor: '#fff',
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 16,
                        usePointStyle: true,
                        pointStyle: 'circle',
                        font: { size: 13 }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : 0;
                            return `${label}: ${percentage}% (${value} orang)`;
                        }
                    }
                }
            }
        }
    });
}

// ============================================
// GRAFIK BATANG (Dashboard)
// ============================================
let barChartInstance = null;

function initBarChart(period) {
    const ctx = document.getElementById('barChart').getContext('2d');
    if (barChartInstance) barChartInstance.destroy();

    const data = getDataByPeriod(period);
    const labelMap = {
        'mingguan': 'Pengunjung per Hari (Minggu Ini)',
        'bulanan': 'Jumlah Pengunjung per Bulan',
        'tahunan': 'Jumlah Pengunjung per Tahun'
    };
    const colorMap = {
        'mingguan': '#ff9800',
        'bulanan': '#1a237e',
        'tahunan': '#ffca28'
    };

    barChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.labels,
            datasets: [{
                label: labelMap[period] || 'Jumlah Pengunjung',
                data: data.values,
                backgroundColor: colorMap[period] || '#1a237e',
                borderColor: period === 'bulanan' ? '#0d1445' : '#e6b800',
                borderWidth: 1,
                borderRadius: 4,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: true, position: 'top', labels: { usePointStyle: true, pointStyle: 'circle', padding: 16 } }
            },
            scales: {
                y: { beginAtZero: true, grid: { color: '#eee' } },
                x: { grid: { display: false } }
            }
        }
    });
}

// ============================================
// GRAFIK BATANG (Halaman Capaian)
// ============================================
let barChartFullInstance = null;

function initBarChartFull(period) {
    const ctx = document.getElementById('barChartFull').getContext('2d');
    if (barChartFullInstance) barChartFullInstance.destroy();

    const data = getDataByPeriod(period);
    const labelMap = {
        'mingguan': 'Pengunjung per Hari (Minggu Ini)',
        'bulanan': 'Jumlah Pengunjung per Bulan',
        'tahunan': 'Jumlah Pengunjung per Tahun'
    };
    const colorMap = {
        'mingguan': '#ff9800',
        'bulanan': '#1a237e',
        'tahunan': '#ffca28'
    };

    barChartFullInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.labels,
            datasets: [{
                label: labelMap[period] || 'Jumlah Pengunjung',
                data: data.values,
                backgroundColor: colorMap[period] || '#1a237e',
                borderColor: period === 'bulanan' ? '#0d1445' : '#e6b800',
                borderWidth: 1,
                borderRadius: 4,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: true, position: 'top', labels: { usePointStyle: true, pointStyle: 'circle', padding: 16 } }
            },
            scales: {
                y: { beginAtZero: true, grid: { color: '#eee' } },
                x: { grid: { display: false } }
            }
        }
    });
}

// ============================================
// GRAFIK BATANG (Laporan)
// ============================================
let barChartLaporanInstance = null;

function initBarChartLaporan(period) {
    const ctx = document.getElementById('barChartLaporan').getContext('2d');
    if (barChartLaporanInstance) barChartLaporanInstance.destroy();

    const data = getDataByPeriod(period);
    const labelMap = {
        'mingguan': 'Pengunjung per Hari (Minggu Ini)',
        'bulanan': 'Jumlah Pengunjung per Bulan',
        'tahunan': 'Jumlah Pengunjung per Tahun'
    };
    const colorMap = {
        'mingguan': '#ff9800',
        'bulanan': '#1a237e',
        'tahunan': '#ffca28'
    };

    barChartLaporanInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.labels,
            datasets: [{
                label: labelMap[period] || 'Jumlah Pengunjung',
                data: data.values,
                backgroundColor: colorMap[period] || '#1a237e',
                borderColor: period === 'bulanan' ? '#0d1445' : '#e6b800',
                borderWidth: 2,
                borderRadius: 6,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: true, position: 'top', labels: { usePointStyle: true, pointStyle: 'circle', padding: 16, font: { size: 13 } } }
            },
            scales: {
                y: { beginAtZero: true, grid: { color: '#eee' }, ticks: { font: { size: 12 } } },
                x: { grid: { display: false }, ticks: { font: { size: 12 } } }
            }
        }
    });
}

// ============================================
// FUNGSI UBAH GRAFIK CAPAIAN
// ============================================
function ubahGrafikCapaian(period) {
    currentPeriodFull = period;
    document.querySelectorAll('#page-capaian .filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.period === period) btn.classList.add('active');
    });
    initBarChartFull(period);
    renderCapaianTable();
}

// ============================================
// FUNGSI UBAH GRAFIK LAPORAN
// ============================================
function ubahGrafikLaporan(period) {
    currentLaporanPeriod = period;
    document.querySelectorAll('#page-laporan .filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.period === period) btn.classList.add('active');
    });
    initBarChartLaporan(period);
}

// ============================================
// FILTER DROPDOWN DASHBOARD
// ============================================
document.querySelectorAll('#page-dashboard .filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const parent = this.closest('.chart-filter');
        parent.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        const period = this.dataset.period;
        currentPeriod = period;
        initBarChart(period);
        initPieChart();
    });
});

// ============================================
// LAPORAN
// ============================================
function toggleDateRange() {
    const periode = document.getElementById('laporanPeriode').value;
    document.getElementById('dateRangeGroup').style.display = periode === 'custom' ? 'flex' : 'none';
}

function generateLaporan() {
    const jenis = document.getElementById('laporanJenis').value;

    document.getElementById('lapTotalKunjungan').textContent = kunjunganData.length;
    document.getElementById('lapTotalRuang').textContent = ruangData.length;
    document.getElementById('lapTotalBalai').textContent = balaiData.length;
    document.getElementById('lapTotalProgram').textContent = programData.length;

    const now = new Date();
    document.getElementById('lapPeriode').textContent = now.toLocaleDateString('id-ID', {
        month: 'long', year: 'numeric'
    });
    document.getElementById('lapTanggalCetak').textContent = now.toLocaleDateString('id-ID', {
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
        hour: '2-digit', minute: '2-digit'
    });

    const jenisText = document.getElementById('laporanJenis').options[document.getElementById('laporanJenis').selectedIndex].text;
    document.getElementById('lapJenisLaporan').textContent = jenisText;

    renderLaporanTable(jenis);
    initBarChartLaporan(currentLaporanPeriod || 'mingguan');
    initPieChartLaporan();

    const totalData = kunjunganData.length + ruangData.length + balaiData.length + programData.length;
    document.getElementById('lapJumlahData').textContent = `${totalData} Data`;
}

function renderLaporanTable(jenis) {
    const tbody = document.getElementById('laporanTableBody');
    const thead = document.getElementById('laporanThead');

    let headers = [];
    let rows = [];

    if (jenis === 'all' || jenis === 'kunjungan') {
        headers = ['No', 'Jenis', 'Nama Tamu', 'Instansi', 'Tanggal', 'Waktu', 'Jumlah', 'Tujuan', 'PIC'];
        rows = kunjunganData.map((item, index) => ({
            no: index + 1,
            jenis: '📋 Kunjungan',
            nama: item.nama,
            instansi: item.instansi,
            tanggal: item.tanggal,
            waktu: item.waktu,
            jumlah: item.jumlahPengunjung || 0,
            tujuan: item.tujuan,
            pic: item.pic
        }));
    }

    if (jenis === 'all' || jenis === 'ruang') {
        rows = rows.concat(ruangData.map((item, index) => ({
            no: rows.length + index + 1,
            jenis: '🏢 Ruang',
            nama: item.kegiatan,
            instansi: item.ruangan,
            tanggal: item.tanggal,
            waktu: item.waktu,
            jumlah: `${item.kapasitas} orang`,
            tujuan: '-',
            pic: item.pic
        })));
    }

    if (jenis === 'all' || jenis === 'balai') {
        rows = rows.concat(balaiData.map((item, index) => ({
            no: rows.length + index + 1,
            jenis: '🏛️ Balai',
            nama: item.kegiatan,
            instansi: item.jenis,
            tanggal: item.tanggal,
            waktu: item.waktu,
            jumlah: '-',
            tujuan: item.ruangan,
            pic: item.pic
        })));
    }

    if (jenis === 'all' || jenis === 'program') {
        rows = rows.concat(programData.map((item, index) => ({
            no: rows.length + index + 1,
            jenis: '📊 Program',
            nama: item.program,
            instansi: item.kegiatan,
            tanggal: item.tanggal,
            waktu: item.waktu,
            jumlah: '-',
            tujuan: item.lokasi,
            pic: item.pic
        })));
    }

    if (jenis === 'capaian') {
        headers = ['No', 'Bulan', 'Jumlah', 'Target', 'Pencapaian', 'Status'];
        rows = capaianData.map((item, index) => {
            const persentase = Math.round((item.jumlah / item.target) * 100);
            let status = item.jumlah >= item.target ? '✅ Tercapai' : 
                         item.jumlah >= (item.target * 0.75) ? '⚠️ Mendekati' : '❌ Belum';
            return {
                no: index + 1,
                bulan: item.bulan,
                jumlah: item.jumlah,
                target: item.target,
                pencapaian: `${persentase}%`,
                status: status
            };
        });
    }

    if (jenis === 'kalender') {
        headers = ['No', 'Tanggal', 'Kegiatan', 'Waktu', 'Ruangan', 'Tempat', 'PIC'];
        rows = eventData.map((item, index) => ({
            no: index + 1,
            tanggal: item.tanggal,
            kegiatan: item.nama,
            waktu: item.waktu,
            ruangan: item.ruangan,
            tempat: item.tempat,
            pic: item.pic
        }));
    }

    if (rows.length === 0) {
        tbody.innerHTML = `<tr><td colspan="10" style="text-align:center;color:#888;padding:40px;">📂 Tidak ada data</td></tr>`;
        return;
    }

    let headerHtml = '<tr>';
    headers.forEach(h => { headerHtml += `<th>${h}</th>`; });
    headerHtml += '</tr>';
    thead.innerHTML = headerHtml;

    let bodyHtml = '';
    rows.forEach(row => {
        bodyHtml += '<tr>';
        Object.values(row).forEach(val => {
            if (typeof val === 'string' && (val.includes('✅') || val.includes('⚠️'))) {
                const isSuccess = val.includes('✅');
                bodyHtml += `<td><span style="background:${isSuccess ? '#4caf50' : '#ff9800'};color:#fff;padding:2px 12px;border-radius:12px;font-size:12px;">${val}</span></td>`;
            } else {
                bodyHtml += `<td>${val}</td>`;
            }
        });
        bodyHtml += '</tr>';
    });
    tbody.innerHTML = bodyHtml;
}


// tambahJadwal
// ============================================
// TAMBAH JADWAL - BUKA MODAL
// ============================================
function tambahJadwal() {
    console.log('🟢 tambahJadwal dipanggil!');
    
    try {
        // Ambil modal
        const modal = document.getElementById('jadwalModal');
        if (!modal) {
            console.error('❌ Modal jadwal tidak ditemukan!');
            alert('Error: Modal tidak ditemukan!');
            return;
        }
        
        // Set judul
        document.getElementById('modalJadwalTitle').textContent = 'Tambah Jadwal';
        
        // Reset ID (untuk tambah baru)
        document.getElementById('jadwalId').value = '';
        document.getElementById('jadwalJenis').value = '';
        document.getElementById('btnDeleteJadwal').style.display = 'none';
        
        // Reset semua field
        document.getElementById('fNamaTamu').value = '';
        document.getElementById('fInstansi').value = '';
        document.getElementById('fJumlahPengunjung').value = '';
        document.getElementById('fTujuan').value = '';
        document.getElementById('fKegiatanRuang').value = '';
        document.getElementById('fKapasitas').value = '';
        document.getElementById('fKegiatanBalai').value = '';
        document.getElementById('fJenisKegiatan').value = '';
        document.getElementById('fNamaProgram').value = '';
        document.getElementById('fKegiatanProgram').value = '';
        
        // Set tanggal ke hari ini
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('fTanggal').value = today;
        document.getElementById('fWaktu').value = '';
        document.getElementById('fRuangan').value = '';
        document.getElementById('fTempat').value = '';
        document.getElementById('fPic').value = '';
        
        // Set default jenis ke kunjungan
        document.getElementById('formJenis').value = 'kunjungan';
        
        // Update dropdowns
        updateDropdowns();
        
        // Tampilkan field kunjungan
        ubahFormJadwal();
        
        // Tampilkan modal
        modal.classList.add('active');
        modal.style.display = 'flex';
        
        console.log('✅ Modal jadwal dibuka!');
        
    } catch(e) {
        console.error('❌ Error di tambahJadwal:', e);
        alert('Terjadi error: ' + e.message);
    }
}
// ============================================
// EXPORT FUNCTIONS
// ============================================
function exportPDF() {
    alert('📄 Download PDF\n\nGunakan tombol "Cetak" dan pilih "Save as PDF"');
}

function exportExcel() {
    const table = document.getElementById('laporanTable');
    let csv = '';
    const headers = document.querySelectorAll('#laporanThead th');
    headers.forEach(th => { csv += th.textContent + ','; });
    csv += '\n';
    const rows = document.querySelectorAll('#laporanTableBody tr');
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        cells.forEach(cell => {
            let text = cell.textContent.trim();
            text = text.replace(/[^\w\s,.]/g, '').trim();
            csv += '"' + text + '",';
        });
        csv += '\n';
    });
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Laporan_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    alert('✅ File Excel (CSV) berhasil didownload!');
}

function printLaporan() {
    generateLaporan();
    setTimeout(() => { window.print(); }, 300);
}

function exportWord() {
    alert('📝 Download Word\n\nCopy data dari tabel dan paste ke Word.');
}

// ============================================
// TANGGAL SEKARANG
// ============================================
function setCurrentDate() {
    const now = new Date();
    document.getElementById('currentDate').textContent = now.toLocaleDateString('id-ID', {
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    });
}

// ============================================
// HAPUS SEMUA DATA
// ============================================
function resetAllData() {
    if (confirm('⚠️ Yakin ingin menghapus SEMUA data? Ini tidak bisa dibatalkan!')) {
        localStorage.clear();
        location.reload();
    }
}

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    muatSemuaData();

    renderKunjunganTable();
    renderRuangTable();
    renderBalaiTable();
    renderProgramTable();
    renderRingkasanJadwal();
    renderCalendar(currentMonth, currentYear);
    renderCalendarFull(currentMonthFull, currentYearFull);
    renderDashboardEvents();
    updateStats();
    setCurrentDate();
    renderCapaianTable();
    updateDropdowns();

    sinkronkanJadwalKeKalender();
    sinkronkanKunjunganKeCapaian();

    initBarChart('mingguan');
    initPieChart();
    initBarChartFull('mingguan');
    initPieChartFull();
    initBarChartLaporan('mingguan');
    initPieChartLaporan();

    generateLaporan();
    simpanSemuaData();

    if (window.innerWidth <= 768) {
        document.getElementById('sidebar').style.transform = 'translateX(-100%)';
    }

    console.log('✅ Data berhasil dimuat dari localStorage!');
    console.log('📋 Kunjungan:', kunjunganData.length, 'data');
    console.log('🏢 Ruang:', ruangData.length, 'data');
    console.log('🏛️ Balai:', balaiData.length, 'data');
    console.log('📊 Program:', programData.length, 'data');
    console.log('📅 Event:', eventData.length, 'data');
    console.log('📊 Capaian:', capaianData.length, 'data');
    console.log('📊 Capaian Mingguan:', capaianMingguanData.length, 'data');
    console.log('📋 Master Ruangan:', masterRuangan.length, 'data');
    console.log('📋 Master Tempat:', masterTempat.length, 'data');
    console.log('📋 Master PIC:', masterPic.length, 'data');
    console.log('📋 Master Instansi:', masterInstansi.length, 'data');
});

console.log('💡 Untuk mereset semua data, ketik: resetAllData()');

// ============================================
// OVERRIDE FUNGSI SAVE (DARI HTML)
// ============================================

// Fungsi ini akan di-override oleh script di HTML
// Biarkan kosong, akan diisi dari script di HTML
window.saveJadwal = function() {
    console.log('⚠️ saveJadwal akan dijalankan dari HTML');
};

window.saveEvent = function() {
    console.log('⚠️ saveEvent akan dijalankan dari HTML');
};

window.saveCapaian = function() {
    console.log('⚠️ saveCapaian akan dijalankan dari HTML');
};

console.log('✅ Override save functions siap!');