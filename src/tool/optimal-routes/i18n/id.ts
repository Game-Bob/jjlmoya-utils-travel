import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { OptimalRoutesUI } from '../index';

const slug = 'kalkulator-rute-optimal';
const title = 'Kalkulator Rute Optimal | Pengurutan Ulang Perhentian Cerdas';
const description = 'Optimalkan rute pengiriman atau perjalanan Anda secara gratis. Alat kami mengurutkan ulang perhentian Anda secara otomatis untuk menemukan jalur terpendek dan paling efisien.';

const ui: OptimalRoutesUI = {
  title: "Rute Optimal",
  sidebar: {
    title: "Rencana Rute",
    addPoint: "Tambah perhentian (klik peta)",
    pointsList: "Perhentian Anda",
    emptyState: "Klik pada peta untuk menambahkan perhentian ke rute Anda.",
    optimizeBtn: "Optimalkan Urutan",
    clearBtn: "Hapus Semua",
    stats: {
      distance: "Total jarak:",
      time: "Estimasi waktu:"
    }
  },
  map: {
    placeholder: "Memuat peta...",
    attribution: "© kontributor OpenStreetMap"
  },
  errors: {
    minPoints: "Setidaknya dua titik diperlukan untuk menghitung rute.",
    calcError: "Kesalahan saat menghitung rute optimal. Silakan coba lagi."
  },
  labels: {
    origin: "Mulai",
    destination: "Selesai",
    stop: "Perhentian",
    loading: "Menghitung..."
  }
};

const seo: ToolLocaleContent<OptimalRoutesUI>['seo'] = [
  { type: "title", text: "Optimalisasi Rute Cerdas", level: 2 },
  { type: "paragraph", html: "Gunakan algoritma canggih untuk menyelesaikan Masalah Penjual Keliling (TSP) dalam hitungan detik. Ideal untuk logistik, pengiriman, atau sekadar menghemat bahan bakar dalam perjalanan Anda." },
  { type: "title", text: "Mengapa Urutan Perhentian Itu Penting", level: 3 },
  { type: "paragraph", html: "Urutan perhentian yang salah dapat meningkatkan waktu perjalanan dan konsumsi bahan bakar secara signifikan. Pengoptimalkan kami menganalisis jutaan kemungkinan untuk menunjukkan kepada Anda jalur paling langsung, menghindari jalan memutar dan tumpang tindih yang tidak perlu." }
];

const faq: ToolLocaleContent<OptimalRoutesUI>['faq'] = [
  { question: "Bagaimana cara kerja optimalisasi ini?", answer: "Kami menganalisis semua perhentian Anda dan menentukan urutan sekuensial yang meminimalkan total jarak tempuh." },
  { question: "Bisakah saya menggunakannya di ponsel?", answer: "Ya, alat ini sepenuhnya responsif dan memungkinkan Anda membuka rute yang dihasilkan langsung di aplikasi navigasi." },
  { question: "Apakah ada batasan jumlah perhentian?", answer: "Untuk versi gratis, Anda dapat mengoptimalkan hingga 25 perhentian secara efisien, yang sempurna untuk pengiriman harian atau perjalanan darat." }
];

const howTo: ToolLocaleContent<OptimalRoutesUI>['howTo'] = [
  { name: "Tambah", text: "Klik pada peta untuk menetapkan titik awal dan perhentian antara Anda." },
  { name: "Optimalkan", text: "Tekan tombol optimalkan agar sistem mengatur ulang perhentian secara efisien." },
  { name: "Navigasi", text: "Gunakan rencana yang dihasilkan untuk mengikuti rute yang disarankan." }
];

const bibliography: ToolLocaleContent<OptimalRoutesUI>['bibliography'] = [
  { name: "Masalah Penjual Keliling (TSP)", url: "https://id.wikipedia.org/wiki/Masalah_penjual_keliling" },
  { name: "Optimasi Jaringan", url: "https://id.wikipedia.org/wiki/Optimasi_jaringan" }
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
  description: description,
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
  description: description,
  applicationCategory: 'MapApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'id',
};

export const content: ToolLocaleContent<OptimalRoutesUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: "Pertanyaan yang Sering Diajukan",
  bibliography,
  bibliographyTitle: "Sumber dan Referensi",
  howTo,
  howToTitle: "Cara menggunakannya",
  schemas: [faqSchema, howToSchema, appSchema],
};
