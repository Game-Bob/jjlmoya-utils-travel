import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SchengenCalculatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'kalkulator-tinggal-schengen-90-180';
const title = 'Kalkulator Kepatuhan Visa Schengen 90 180 Hari';
const description =
  'Periksa kepatuhan perjalanan Eropa Anda dengan aturan visa 90/180 hari. Hitung sisa hari izin tinggal dan hindari denda overstay di wilayah Schengen.';

const ui: SchengenCalculatorUI = {
  verdictSafeTitle: 'Perjalanan Sah dan Aman (Sesuai Batas)',
  verdictWarningTitle: 'Perhatian: Mendekati Batas 90 Hari',
  verdictOverstayTitle: 'Pelanggaran Izin Tinggal (Overstay) Terdeteksi',
  daysRemainingSub: 'Sisa Hari yang Diizinkan',
  daysUsedSub: 'Hari Digunakan dalam 180 Hari',
  maxStaySub: 'Tinggal Berkelanjutan Maksimum',
  fullResetSub: 'Tanggal Reset Total 90 Hari',
  plannerHeading: '1. Periksa Tanggal Sasaran',
  plannerEntryLabel: 'Tanggal Masuk atau Rencana Penerbangan',
  quickDatesLabel: 'Lompat ke Tanggal',
  presetToday: 'Hari Ini',
  presetPlus7: '+1 Minggu',
  presetPlus14: '+2 Minggu',
  presetPlus30: '+1 Bulan',
  tripsHeading: '2. Riwayat Perjalanan Schengen (Lalu & Rencana)',
  addTripBtn: '+ Tambah Perjalanan',
  emptyTripsMsg: 'Belum ada perjalanan ditambahkan. Masukkan kunjungan masa lalu atau rencana Anda ke wilayah Schengen.',
  colArrival: 'Masuk (Kedatangan)',
  colDeparture: 'Keluar (Keberangkatan)',
  colDestination: 'Negara / Catatan',
  colDays: 'Hari',
  sampleBtn: 'Muat Contoh Nomaden',
  clearBtn: 'Hapus Semua',
  timelineTitle: 'Jendela Bergulir 180 Hari',
  legendInSchengen: 'Di Schengen',
  legendOutside: 'Di Luar',
  legendOverstay: 'Overstay',
  bannerSafe: 'Pada {date}, Anda telah menggunakan {used} ({rem} tersedia).',
  bannerWarning: 'Pada {date}, Anda telah menggunakan {used} (hanya sisa {rem}).',
  bannerOverstay: 'Pelanggaran overstay terdeteksi mulai {date}. Rencana Anda melebihi batas legal sebesar {days}.',
  unitDays: 'hari',
  notesPlaceholder: 'contoh: Prancis, Spanyol',
  sampleNotes1: 'Tur Italia (20 hari)',
  sampleNotes2: 'Jerman & Austria (20 hari)',
  sampleNotesDefault: 'Prancis & Spanyol',
};

const seo: ToolLocaleContent<SchengenCalculatorUI>['seo'] = [
  {
    type: 'title',
    text: 'Cara Kerja Sebenarnya Aturan 90 180 di Wilayah Schengen',
    level: 2,
  },
  {
    type: 'summary',
    title: 'Prinsip Dasar Sistem Jendela Bergulir Schengen',
    items: [
      'Warga negara non-Uni Eropa dapat tinggal hingga 90 hari dalam periode 180 hari bergulir mana pun.',
      'Jendela 180 hari bergerak maju setiap hari dan terus memantau 179 hari sebelumnya.',
      'Hari kedatangan dan hari keberangkatan keduanya dihitung sebagai hari penuh kehadiran fisik.',
      'Keluar dari Eropa tidak mereset kuota 90 hari Anda tanpa jeda 90 hari berturut-turut di luar wilayah.',
    ],
  },
  {
    type: 'paragraph',
    html: 'Wilayah Schengen menerapkan batas ketat <strong>maksimal 90 hari tinggal dalam jendela 180 hari apa pun</strong> bagi wisatawan bebas visa atau pemegang visa kunjungan singkat tipe C berdasarkan Pasal 6(1) <em>Kode Perbatasan Schengen (Regulasi UE 2016/399)</em>. Pada setiap hari kunjungan Anda di Eropa, petugas imigrasi menghitung total hari yang dihabiskan di 29 negara anggota selama 179 hari sebelumnya ditambah hari berjalan.',
  },
  {
    type: 'title',
    text: 'Metrik Utama dan Standar Pengawasan Imigrasi',
    level: 2,
  },
  {
    type: 'stats',
    items: [
      {
        value: '90 Hari',
        label: 'Maksimum Total Tinggal',
      },
      {
        value: '180 Hari',
        label: 'Jendela Pemeriksaan Bergulir',
      },
      {
        value: 'Kedua Hari',
        label: 'Penghitungan Perbatasan Inklusif',
      },
      {
        value: '29 Negara',
        label: 'Wilayah Bersama Schengen',
      },
    ],
  },
  {
    type: 'title',
    text: 'Kuota Tahun Kalender Tetap vs Jendela Bergulir Dinamis',
    level: 2,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Kekeliruan Tahun Kalender',
        description:
          'Banyak pelancong salah mengira bahwa 90 hari mereka diperbarui otomatis pada 1 Januari atau setelah keluar sebentar dari Eropa. Kesalahpahaman ini kerap memicu pelanggaran overstay dan denda di bandara.',
      },
      {
        title: 'Mekanisme Sejati Jendela Bergulir',
        description:
          'Setiap hari di wilayah Schengen dicatat pada garis waktu berkelanjutan. Seiring berjalannya waktu, hari-hari terlama keluar dari jendela 180 hari dan secara bertahap membuka kembali hak izin tinggal baru.',
      },
    ],
  },
  {
    type: 'title',
    text: 'Profil Perjalanan Umum dan Evaluasi Hukum',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Pola Perjalanan', 'Contoh', 'Status Hukum', 'Rekomendasi'],
    rows: [
      [
        'Kunjungan Tunggal Berkelanjutan',
        'Masuk 1 Juni, keluar 29 Agustus (90 hari)',
        'Sah',
        'Harus keluar tepat pada hari ke-90 dan tinggal di luar Schengen selama 90 hari berturut-turut.',
      ],
      [
        'Pelancong Kerap Multi-Trip',
        'Tiga perjalanan 30 hari dengan jeda 30 hari di luar',
        'Sah',
        'Setiap perjalanan harus diverifikasi dalam jendela 180 hari ke belakangnya sendiri.',
      ],
      [
        'Nomaden Digital Selang-Seling',
        'Bergantian 60 hari di Schengen dan 30 hari di luar',
        'Risiko Kritis Overstay',
        'Jeda 30 hari hanya memulihkan hari yang terjadi 180 hari sebelumnya; berisiko ditolak masuk di perbatasan.',
      ],
      [
        'Reset Penuh 90 Hari',
        'Ketidakhadiran tanpa henti selama 90 hari di luar Schengen',
        'Pulih Sepenuhnya',
        'Menjamin pemulihan penuh kuota 90 hari saat kedatangan berikutnya.',
      ],
    ],
  },
  {
    type: 'title',
    text: 'Tips Strategis Menghindari Pelanggaran Imigrasi',
    level: 2,
  },
  {
    type: 'tip',
    title: 'Sediakan Hari Cadangan',
    html: 'Jangan pernah menjadwalkan penerbangan pulang tepat pada hari ke-90. Pembatalan penerbangan atau keadaan darurat medis dapat menunda kepulangan ke hari ke-91, yang otomatis tercatat dalam Sistem Masuk/Keluar (EES) Eropa dan memicu pencekalan.',
  },
  {
    type: 'card',
    title: 'Simpan Bukti Keberadaan di Luar Schengen',
    html: 'Simpan boarding pass, tagihan akomodasi, dan cap paspor dari negara non-Schengen (seperti Inggris, Irlandia, Siprus, Montenegro, atau Albania) untuk membuktikan ketidakhadiran Anda secara sah.',
  },
  {
    type: 'title',
    text: 'Glosarium Istilah Perbatasan Eropa',
    level: 2,
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'Overstay (Tinggal Melebihi Izin)',
        definition:
          'Tinggal di wilayah Schengen lebih dari 90 hari dalam periode 180 hari, berakibat denda finansial, deportasi, atau larangan masuk.',
      },
      {
        term: 'EES (Entry Exit System)',
        definition:
          'Sistem otomatis Uni Eropa yang menggantikan cap paspor manual dengan pemindaian biometrik digital bagi pelancong non-UE.',
      },
      {
        term: 'Warga Negara Pihak Ketiga',
        definition:
          'Setiap individu yang bukan warga negara dari negara anggota Uni Eropa atau negara EFTA.',
      },
    ],
  },
];

const faq: ToolLocaleContent<SchengenCalculatorUI>['faq'] = [
  {
    question: 'Apa sebenarnya aturan 90 180 di wilayah Schengen?',
    answer:
      'Aturan ini memperbolehkan warga negara non-Uni Eropa tanpa visa tinggal jangka panjang untuk berada di 29 negara Schengen maksimal 90 hari dalam periode 180 hari bergulir mana pun.',
  },
  {
    question: 'Apakah kuota 90 hari akan direset saat keluar dari Eropa?',
    answer:
      'Tidak. Keluar dari wilayah Schengen tidak langsung mereset hitungan. Jendela 180 hari terus bergulir; reset penuh baru terjadi setelah Anda berada 90 hari berturut-turut di luar wilayah Schengen.',
  },
  {
    question: 'Apakah hari kedatangan dan keberangkatan dihitung penuh?',
    answer:
      'Ya. Menurut Pasal 6 Kode Perbatasan Schengen, hari saat Anda melintasi gerbang masuk dan hari saat Anda keluar dihitung sebagai hari penuh keberadaan fisik.',
  },
  {
    question: 'Negara mana saja yang termasuk wilayah Schengen dalam perhitungan ini?',
    answer:
      'Mencakup 29 negara: Austria, Belanda, Belgia, Bulgaria, Ceko, Denmark, Estonia, Finlandia, Hongaria, Islandia, Italia, Jerman, Kroasia, Latvia, Liechtenstein, Lituania, Luksemburg, Malta, Norwegia, Polandia, Portugal, Prancis, Rumania, Slowakia, Slovenia, Spanyol, Swedia, Swiss, dan Yunani. Britania Raya dan Irlandia tidak termasuk.',
  },
];

const howTo: ToolLocaleContent<SchengenCalculatorUI>['howTo'] = [
  {
    name: 'Pilih Tanggal Penilaian',
    text: 'Tentukan tanggal penerbangan Anda berikutnya untuk memeriksa sisa hari legal yang tersedia saat itu.',
  },
  {
    name: 'Masukkan Riwayat Perjalanan',
    text: 'Tambahkan tanggal masuk dan keluar untuk seluruh kunjungan ke negara Schengen dalam beberapa bulan terakhir.',
  },
  {
    name: 'Tinjau Sisa Hari dan Batas Aman',
    text: 'Periksa pengukur sisa hari, durasi maksimum tinggal berkelanjutan, dan tanggal reset penuh.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'TravelApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'id',
};

export const content: ToolLocaleContent<SchengenCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  howTo,
  howToTitle: 'Cara menghitung izin tinggal Schengen',
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography: bibliographyEntries,
};
