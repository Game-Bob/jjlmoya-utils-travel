import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TripExpenseSplitterUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'kalkulator-bagi-biaya-patungan-liburan-kelompok';
const title = "Kalkulator Bagi Biaya Patungan Liburan Kelompok";
const description = "Bagi biaya perjalanan bersama teman, lihat siapa yang membayar lebih atau kurang, dan selesaikan patungan dengan jumlah transfer paling minimal.";

const ui: TripExpenseSplitterUI = {
  "tripNameLabel": "Nama perjalanan",
  "tripNamePlaceholder": "Beri nama perjalanan ini",
  "currencyLabel": "Mata uang",
  "travelersHeading": "Anggota",
  "travelerPlaceholder": "Nama anggota",
  "addTraveler": "Tambah anggota",
  "removeTraveler": "Hapus",
  "expensesHeading": "Catatan pengeluaran",
  "expenseDescriptionPlaceholder": "Untuk pembayaran apa?",
  "amountLabel": "Jumlah",
  "payerLabel": "Dibayar oleh",
  "participantsLabel": "Bagi ke",
  "allTravelers": "semua anggota",
  "addExpense": "Tambah pengeluaran",
  "emptyExpenses": "Catatan masih kosong. Tambahkan pengeluaran patungan pertama.",
  "resultHeading": "Saran transfer pelunasan",
  "totalSpent": "Total pengeluaran kelompok",
  "transferCount": "transfer",
  "noTransfers": "Semua sudah lunas. Tidak perlu ada transfer.",
  "owes": "berutang",
  "receives": "menerima",
  "from": "dari",
  "to": "ke",
  "eachPays": "Tiap orang membayar",
  "eachReceives": "Tiap orang menerima",
  "settlementHint": "Rute ini menampilkan daftar anggota dan rencana transfer tersingkat.",
  "copyLink": "Salin tautan",
  "copied": "Tautan disalin",
  "exportJson": "Ekspor JSON",
  "reset": "Mulai ulang",
  "removeExpense": "Hapus pengeluaran",
  "deleteTrip": "Reset perjalanan",
  "intro": "Masukkan pengeluaran kelompok. Rute di bawah akan mengurutkan saran pelunasan tersingkat.",
  "statusBalanced": "Patungan lunas",
  "statusSettle": "Siap dilunasi",
  "statusReady": "Menunggu pengeluaran",
  "currencyOptions": [
    {
      "code": "EUR",
      "symbol": "€"
    },
    {
      "code": "USD",
      "symbol": "$"
    },
    {
      "code": "GBP",
      "symbol": "£"
    }
  ],
  "defaultTripName": "Liburan Akhir Pekan",
  "defaultTravelerNames": [
    "Maya",
    "Alex",
    "Sam"
  ],
  "defaultExpenseNames": [
    "Sewa Penginapan",
    "Tiket Kereta"
  ]
};

const seo: ToolLocaleContent<TripExpenseSplitterUI>['seo'] = [
  {
    "type": "title",
    "text": "Cara menghitung patungan liburan secara adil dan praktis",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Menyelesaikan patungan liburan kelompok menjadi sangat mudah jika setiap pengeluaran memiliki pembayar yang jelas dan daftar peserta yang sesuai. Kalkulator ini menjumlahkan uang yang telah ditalangi, membagi biaya ke tiap orang, dan memberikan saran transfer paling sedikit."
  },
  {
    "type": "title",
    "text": "Cara kalkulator menghitung saldo patungan",
    "level": 2
  },
  {
    "type": "table",
    "headers": [
      "Tahap",
      "Perhitungan",
      "Tujuan"
    ],
    "rows": [
      [
        "Total dibayar",
        "Jumlah pengeluaran yang ditalangi tiap orang",
        "Mencatat total talangan awal"
      ],
      [
        "Bagian adil",
        "Membagi pengeluaran ke peserta yang memilihnya",
        "Menentukan biaya riil tiap orang"
      ],
      [
        "Saldo bersih",
        "Total dibayar dikurangi bagian adil",
        "Menunjukkan siapa yang menerima/membayar"
      ],
      [
        "Pelunasan",
        "Mencocokkan utang dan piutang terbesar",
        "Meminimalkan jumlah transaksi transfer"
      ]
    ]
  },
  {
    "type": "tip",
    "title": "Tentukan peserta tiap pengeluaran dengan tepat",
    "html": "Gunakan pilihan peserta. Penginapan umumnya dibagi ke semua orang, sedangkan tiket atau makan pribadi hanya untuk peserta terkait."
  },
  {
    "type": "title",
    "text": "Selesaikan patungan tanpa perdebatan",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Hasil kalkulator ini adalah panduan rencana pelunasan tersingkat untuk kelompok Anda."
  }
];

const faq = [
  {
    "question": "Bagaimana cara kerja kalkulator patungan liburan?",
    "answer": "Masukkan nama anggota, pengeluaran, pembayar, dan pesertanya. Kalkulator menghitung saldo bersih dan menyusun daftar transfer paling efektif."
  },
  {
    "question": "Apakah pengeluaran bisa dibagi ke beberapa orang saja?",
    "answer": "Bisa. Pilih peserta spesifik pada tiap pengeluaran."
  },
  {
    "question": "Apakah data pengeluaran saya diunggah ke server?",
    "answer": "Tidak. Semua data tersimpan lokal di peramban Anda."
  },
  {
    "question": "Mengapa jumlah transfer lebih sedikit dari jumlah pengeluaran?",
    "answer": "Kalkulator memperhitungkan utang piutang antar anggota secara langsung untuk meminimalkan transaksi."
  }
];

const howTo = [
  {
    "name": "Tambah nama anggota",
    "text": "Masukkan semua orang yang ikut dalam perjalanan kelompok."
  },
  {
    "name": "Catat pengeluaran",
    "text": "Isi deskripsi, nominal, pembayar, dan anggota yang terlibat."
  },
  {
    "name": "Lakukan pelunasan",
    "text": "Gunakan saran transfer tersingkat untuk melunasi patungan."
  }
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
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

export const content: ToolLocaleContent<TripExpenseSplitterUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  howTo,
  howToTitle: "Cara membagi biaya patungan perjalanan kelompok",
  schemas: [appSchema, faqSchema, howToSchema],
  bibliography: bibliographyEntries,
};
