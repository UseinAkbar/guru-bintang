import book from './asset/icon/book.svg';
import profile from './asset/icon/profile.svg';
import calendar from './asset/icon/calendar.svg';
import pen from './asset/icon/ruler&pen.svg';
import learning from './asset/icon/learning.svg';
import video from './asset/icon/video.svg';
import test from './asset/icon/test.svg';
import faq from './asset/icon/faq.svg';
import chat from './asset/icon/chat.svg';
import certificate from './asset/icon/certificate.svg';
import kelas_1 from './asset/images/kelas_1.png';
import kelas_2 from './asset/images/kelas_2.png';
import sertif1 from './asset/images/sertif1.png';
import sertif2 from './asset/images/sertif2.png';
import itemTransaksi from './asset/images/item-transaksi.png';
import kelasDashboard1 from './asset/images/kelas-dashboard1.png';
import kelasDashboard2 from './asset/images/kelas-dashboard2.png';
import profilTestimoni from './asset/images/testimoni.png'
import pengenalan_kelas from './asset/images/pengenalan_kelas.png';

const perks = [
    {
        title: 'Waktu Fleksibel',
        desc: 'Kurikulum dan Program yang telah dirancang khusus.',
        icon: calendar
    },
    {
        title: 'Output Keahlian',
        desc: 'Kurikulum dan Program yang telah dirancang khusus.',
        icon: pen
    },
    {
        title: 'Mentor Professional',
        desc: 'Kurikulum dan Program yang telah dirancang khusus.',
        icon: profile
    },
    {
        title: 'Materi Up to Date',
        desc: 'Kurikulum dan Program yang telah dirancang khusus.',
        icon: book
    }
]

class Kelas {
    constructor(banner, title, materi, isPurchased, harga_asli = 'Rp 105.000', harga_coret = 'Rp 125.000', desc = 'Penanaman nilai mengajar bagi guru untuk menerapkan metode belajar mengajar yang Baik dan Kreatif.', total_materi = '13 Materi', kategori = 'Filosofis') {
        this.banner = banner
        this.title = title
        this.materi = materi
        this.isPurchased = isPurchased
        this.desc = desc
        this.total_materi = total_materi
        this.kategori = kategori
        this.harga_coret = harga_coret
        this.harga_asli = harga_asli
    }
}

class Testimoni {
    constructor(jabatan, nama) {
        this.text = '"Menurut aku ini program yang bagus banget yah apalagi buat yang mau ikut lomba KTI gitu. Apalagi mentornya baik banget mau balesin 24/7 buat kalian yang mau ikut lomba bisa sekaligus minta minta saran. Pokoknya sukses terus Guru Bintang."'
        this.img = profilTestimoni
        this.nama = nama
        this.jabatan = jabatan
    }
}

class Review {
    constructor(jabatan, nama) {
        this.text = '"Kelasnya mudah untuk dipelajari, mentor menjelaskan dengan baik dan sangat interaktif. Overall puas dengan kelas yang ada."'
        this.img = profilTestimoni
        this.nama = nama
        this.jabatan = jabatan
    }
}

class FAQ {
    constructor(question) {
        this.question = question
        this.answer = 'Akses materi yang berupa Modul, Video Pembelajaran, Quiz, Pre-Test, dan Post Test yang lengkap dalam satu platform. Pelajari sekarang di kelas online Guru Bintang.'
    }
}

class Fasilitas {
    constructor(icon, desc) {
        this.icon = icon
        this.desc = desc
    }
}

class Sertifikat {
    constructor(thumbnail, judul) {
        this.thumbnail = thumbnail
        this.judul = judul
    }
}

class DashboardKelas {
    constructor(thumbnail, judul, progress, state) {
        this.thumbnail = thumbnail
        this.judul = judul
        this.state = state
        this.progress = progress
    }
}

class Transaksi {
    constructor(thumbnail, judul, tanggal, jam, invoice, harga_coret, harga_asli, status) {
        this.thumbnail = thumbnail
        this.judul = judul
        this.tanggal = tanggal
        this.jam = jam
        this.invoice = invoice
        this.harga_coret = harga_coret
        this.harga_asli = harga_asli
        this.status = status
    }
}

class Materi {
    constructor(judul_materi, isi_materi) {
        this.judul_materi = judul_materi
        this.isi_materi = isi_materi
    }
}

const listMateri = [
   new Materi('Pengenalan Kelas', {content: pengenalan_kelas}),
   new Materi('Standar Kompetensi Guru', {content: 'Kompetensi pedagogik adalah suatu kemampuan yang harus dimiliki guru dalam mengelola pembelajaran peserta didik, termasuk menguasai dan memahami karakter mereka. Dalam standar kompetensi guru ini, guru juga harus mampu membuat rancangan pembelajaran yang sesuai dengan kebutuhan peserta didik dan kurikulum yang sedang berjalan.', title_content: 'Kompetensi Pedagogik'}),
   new Materi('Filosofi Pendidikan Ki Hajar Dewantara', {content: 'Ki Hadjar menjelaskan bahwa tujuan pendidikan yaitu: “menuntun segala kodrat yang ada pada anak-anak, agar mereka dapat mencapai keselamatan dan kebahagiaan yang setinggi-tingginya baik sebagai manusia maupun sebagai anggota masyarakat. Oleh sebab itu, pendidik itu hanya dapat  menuntun tumbuh atau hidupnya kekuatan kodrat yang ada pada anak-anak, agar dapat memperbaiki lakunya (bukan dasarnya) hidup dan  tumbuhnya kekuatan kodrat anak”', title_content: 'Dasar Dasar Pendidikan'}),
   new Materi('POST TEST', {content: 'https://bit.ly/postTests'}),
   new Materi('LINK FEEDBACK, SERTIFIKAT, DAN KOMUNITAS', {content: '#'}),
]

const listDashboardSertif = [
    new Sertifikat(sertif1, 'Filosofi Mengajar untuk Guru')
]

const listDashboardKelas = [
    new DashboardKelas(kelasDashboard1, 'Kelas Filosofi Mengajar untuk Guru', '100', 'selesai'),
    new DashboardKelas(kelasDashboard2, 'Teknologi & Pengajar', '50', 'progress')
]

const listTransaksi = [
    new Transaksi(itemTransaksi, 'Kelas Filosofi Mengajar untuk Guru', '20 Mei 2022', '11.20 WIB', 'ORD-ckfw0zds9plu00861l8edtm9i', 'Rp 300.000', 'Rp 120.000', 'berhasil'),
    new Transaksi(itemTransaksi, 'Kelas Teknologi & Pengajar', '27 Mei 2022', '15.45 WIB', 'ORD-ckfw0zds9plu00861l8desj6w', 'Rp 300.000', 'Rp 120.000', 'berhasil')
]

const listKelas = [
    new Kelas(kelas_1, 'Kelas Filosofi Mengajar untuk Guru', listMateri, false, 'GRATIS'),
    new Kelas(kelas_2, 'Kelas Teknologi untuk Pengajar', listMateri, false),
    new Kelas(kelas_1, 'Kelas Filosofi Mengajar untuk Guru', listMateri, false), 
    new Kelas(kelas_2, 'Kelas Teknologi untuk Pengajar', listMateri, false)
]

const listTestimoni = [
    new Testimoni('CEO Hello Coding', 'Putri Wijayaningsih'),
    new Testimoni('CEO Upbanx', 'Alya Nurhidayat')
]

const listReview = [
    new Review('CEO Upbanx', 'Alya Nurhidayat'),
    new Review('CEO Upbanx', 'Alya Nurhidayat'),
    new Review('CEO Upbanx', 'Alya Nurhidayat')
]

const listFAQ = [
    new FAQ('Apa itu Guru Bintang?'),
    new FAQ('Bagaimana saya dapat belajar di Guru Bintang?'),
    new FAQ('Apa saya akan dibantu untuk masuk atau dimudahkan dalam seleksi PNS?'),
    new FAQ('Apakah materi yang ada di kelas Guru Bintang berguna untuk mendaftar PNS?'),
]

const listFasilitas = [
    new Fasilitas(learning, '6 E-Modul Materi Manajemen Referensi'),
    new Fasilitas(video, '6 video Materi Manajemen Referensi'),
    new Fasilitas(test, 'Post Test'),
    new Fasilitas(faq, 'Konsultasi dengan Mentor (selama 30 hari)'),
    new Fasilitas(chat, 'Akses ke Komunitas Pengajar'),
    new Fasilitas(certificate, 'E-Sertifikat')
]

const langkahBayar = [
    'Masukkan kartu ATM dan PIN',
    'Pilih menu "Bayar/Beli"',
    'Pilih menu "Lainnya", hingga menemukan menu "Multipayment"',
    'Masukkan Kode Biller Tokopedia (88708), lalu pilih Benar',
    'Masukkan "Nomor Virtual Account" Tokopedia, lalu pilih tombol Benar',
    'Masukkan Angka "1" untuk memilih tagihan, lalu pilih tombol Ya',
    'Akan muncul konfirmasi pembayaran, lalu pilih tombol Ya',
    'Simpan struk sebagai bukti pembayaran Anda'
]

export {perks, listKelas, listTestimoni, listFAQ, listFasilitas, listReview, langkahBayar, listDashboardKelas, listDashboardSertif, listTransaksi, listMateri}