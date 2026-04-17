import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MiniAdventuresUI } from '../index';

const slug = 'generator-petualangan-mini';
const title = 'Generator Petualangan Mini: Keluar dari Rutinitas';
const description = 'Generator tantangan harian acak untuk memecah kemonotonan dan menjelajahi lingkungan sekitar Anda.';

const ui: MiniAdventuresUI = {
  title: "Petualangan Mini",
  homeTitle: "Petualangan Mini",
  homeDesc: "Buat hari ini sedikit berbeda. Apakah Anda siap untuk menjelajah?",
  generateBtn: "BUAT PETUALANGAN",
  anotherBtn: "YANG LAIN",
  doneBtn: "SELESAI",
  shareBtn: "BAGIKAN",
  categories: {
    exploration: { id: "exploration", label: "Eksplorasi", icon: "mdi:map-marker-path", color: "#10b981", styling: "border-emerald-500/30 text-emerald-400 bg-emerald-500/5" },
    food: { id: "food", label: "Gastronomi", icon: "mdi:food-variant", color: "#f59e0b", styling: "border-amber-500/30 text-amber-400 bg-amber-500/5" },
    learning: { id: "learning", label: "Belajar", icon: "mdi:school", color: "#6366f1", styling: "border-indigo-500/30 text-indigo-400 bg-indigo-500/5" },
    creativity: { id: "creativity", label: "Kreativitas", icon: "mdi:palette", color: "#ec4899", styling: "border-pink-500/30 text-pink-400 bg-pink-500/5" },
    social: { id: "social", label: "Sosial", icon: "mdi:account-group", color: "#0ea5e9", styling: "border-sky-500/30 text-sky-400 bg-sky-500/5" },
    observation: { id: "observation", label: "Observasi", icon: "mdi:eye", color: "#8b5cf6", styling: "border-violet-500/30 text-violet-400 bg-violet-500/5" },
    wellness: { id: "wellness", label: "Kesejahteraan", icon: "mdi:heart-pulse", color: "#f43f5e", styling: "border-rose-500/30 text-rose-400 bg-rose-500/5" }
  },
  adventures: [
    { id: 1, text: "Cobalah kopi atau minuman di tempat yang belum pernah Anda masuki sebelumnya.", categoryId: "food" },
    { id: 2, text: "Berjalanlah selama 10 menit ke arah yang biasanya tidak Anda ambil saat meninggalkan rumah.", categoryId: "exploration" },
    { id: 3, text: "Pelajari cara mengucapkan 'Terima kasih' dalam tiga bahasa berbeda yang tidak Anda ketahui.", categoryId: "learning" },
    { id: 4, text: "Ambil foto detail arsitektur yang menarik perhatian Anda di jalan Anda.", categoryId: "creativity" },
    { id: 5, text: "Beli buah yang belum pernah Anda coba dan temukan rasanya.", categoryId: "food" },
    { id: 6, text: "Cari plakat peringatan di lingkungan Anda dan baca cerita yang disampaikannya.", categoryId: "exploration" },
    { id: 7, text: "Gambar sesuatu yang ada di depan Anda dalam waktu kurang dari 60 detik.", categoryId: "creativity" },
    { id: 8, text: "Sapa tetangga yang biasanya tidak Anda ajak bicara.", categoryId: "social" },
    { id: 9, text: "Dengarkan genre musik yang biasanya tidak Anda sukai selama 5 menit.", categoryId: "learning" },
    { id: 10, text: "Kunjungi toko barang antik atau barang bekas dan temukan benda yang paling aneh.", categoryId: "exploration" },
    { id: 11, text: "Duduklah di taman dan hitung berapa banyak jenis burung yang Anda lihat.", categoryId: "observation" },
    { id: 12, text: "Tulis catatan positif dan tinggalkan di dalam buku di perpustakaan umum.", categoryId: "social" },
    { id: 13, text: "Buat daftar 5 hal yang Anda syukuri hari ini.", categoryId: "wellness" },
    { id: 14, text: "Cobalah memasak resep baru hanya menggunakan apa yang Anda miliki di dapur.", categoryId: "food" },
    { id: 15, text: "Luangkan waktu 20 menit tanpa melihat layar apa pun (ponsel, TV, PC).", categoryId: "wellness" },
    { id: 16, text: "Temukan pohon di dekat rumah Anda dan cobalah untuk mengidentifikasi spesiesnya.", categoryId: "learning" },
    { id: 300, text: "Buat rencana untuk mengunjungi kota terdekat akhir pekan ini.", categoryId: "exploration" },
    { id: 301, text: "Pelajari apa sebutan jari tangan dalam bahasa Latin.", categoryId: "learning" },
    { id: 302, text: "Temukan rima untuk setiap kata dalam kalimat ini.", categoryId: "creativity" },
    { id: 303, text: "Berterima kasih kepada seorang teman untuk sesuatu yang terjadi sudah lama sekali.", categoryId: "social" }
  ],
  achievements: [
    { id: "g1", milestone: 1, label: "Kebangkitan", categoryId: "global", icon: "mdi:footprint", description: "Petualangan mini pertama Anda selesai." },
    { id: "g10", milestone: 10, label: "Kebiasaan Menakjubkan", categoryId: "global", icon: "mdi:sparkles", description: "Anda telah memecah rutinitas sebanyak 10 kali." },
    { id: "g50", milestone: 50, label: "Kolektor Hari", categoryId: "global", icon: "mdi:calendar-star", description: "50 hari membuat yang biasa menjadi luar biasa." },
    { id: "g150", milestone: 150, label: "Master Peluang", categoryId: "global", icon: "mdi:trophy-variant", description: "Anda telah menyelesaikan setengah dari katalog petualangan." },
    { id: "g300", milestone: 300, label: "Jiwa Bebas", categoryId: "global", icon: "mdi:ghost", description: "Anda telah menguasai seni petualangan harian." },
    { id: "e3", milestone: 3, label: "Turis di Rumah", categoryId: "exploration", icon: "mdi:map-marker-outline", description: "3 sudut baru ditemukan." },
    { id: "e15", milestone: 15, label: "Kartografer Kota", categoryId: "exploration", icon: "mdi:map-check", description: "Anda tahu kode pos Anda lebih baik dari siapa pun." },
    { id: "f3", milestone: 3, label: "Langit-langit Tak Tenang", categoryId: "food", icon: "mdi:silverware-clean", description: "Anda telah mencoba 3 rasa yang tidak Anda ketahui." },
    { id: "f15", milestone: 15, label: "Alkemis Gourmet", categoryId: "food", icon: "mdi:silverware-variant", description: "Dapur Anda adalah paspor ke dunia." },
    { id: "l3", milestone: 3, label: "Magang Segalanya", categoryId: "learning", icon: "mdi:book-open-page-variant", description: "Anda telah mempelajari 3 keingintahuan dunia." },
    { id: "l15", milestone: 15, label: "Perpustakaan Berjalan", categoryId: "learning", icon: "mdi:head-cog", description: "Keingintahuan Anda tidak mengenal batas." },
    { id: "c3", milestone: 3, label: "Tangan Menggambar", categoryId: "creativity", icon: "mdi:palette-outline", description: "Anda telah meninggalkan jejak pada 3 tantangan kecil." },
    { id: "c15", milestone: 15, label: "Avant-Garde Lokal", categoryId: "creativity", icon: "mdi:palette-swatch", description: "Anda melihat seni di mana orang lain hanya melihat jalan." },
    { id: "s3", milestone: 3, label: "Jembatan Manusia", categoryId: "social", icon: "mdi:account-voice", description: "Anda telah terhubung dengan 3 orang hari ini." },
    { id: "s15", milestone: 15, label: "Jiwa Jalanan", categoryId: "social", icon: "mdi:account-group", description: "Anda telah mengubah orang asing menjadi cerita." },
    { id: "o3", milestone: 3, label: "Berorientasi Detail", categoryId: "observation", icon: "mdi:magnify", description: "Anda telah melihat 3 hal yang tidak diperhatikan orang lain." },
    { id: "o15", milestone: 15, label: "Mata Sineas", categoryId: "observation", icon: "mdi:telescope", description: "Tatap Anda adalah lensa dari film hebat." },
    { id: "w3", milestone: 3, label: "Jeda Sadar", categoryId: "wellness", icon: "mdi:leaf", description: "Anda telah mendedikasikan 3 momen untuk kedamaian mental Anda." },
    { id: "w15", milestone: 15, label: "Keseimbangan Total", categoryId: "wellness", icon: "mdi:spa", description: "Tubuh dan pikiran Anda berterima kasih." }
  ],
  stats: {
    adventures: "Petualangan",
    badges: "Lencana",
    progress: "Kemajuan Anda",
    trophies: "Koleksi Trofi"
  },
  shareTemplate: "Saya baru saja mendapatkan Petualangan Mini!\n\n\"{text}\"\n\nApakah Anda berani? Buat milik Anda di sini: {url}"
};

const seo: ToolLocaleContent<MiniAdventuresUI>['seo'] = [
  { type: "title", text: "Petualangan Mini: Seni dari Keseharian", level: 2 },
  { type: "paragraph", html: "Temukan bagaimana petualangan mikro dapat mengubah jaringan otak Anda, melawan rutinitas, dan membangkitkan keingintahuan alami Anda. Rutinitas adalah musuh kreativitas. Dengan memperkenalkan variasi kecil ke dalam kehidupan sehari-hari, kita memaksa otak kita untuk membentuk koneksi saraf baru." },
  { type: "title", text: "Neuroplastisitas dalam Aksi", level: 3 },
  { type: "paragraph", html: "Rutinitas adalah musuh kreativitas. Dengan memperkenalkan variasi kecil ke dalam kehidupan sehari-hari kita —seperti mencoba rasa baru atau berjalan menyusuri jalan yang tidak dikenal— kita memaksa otak kita untuk membentuk koneksi saraf baru. Petualangan mikro ini bertindak sebagai gym mental yang menjaga pikiran tetap lincah dan terbuka terhadap kemungkinan-kemungkinan baru." },
  { type: "title", text: "Kesejahteraan Emosional", level: 3 },
  { type: "paragraph", html: "Perasaan stagnan sering kali muncul dari keterprediksian yang mutlak. Keacakan yang terkendali dari generator petualangan memperkenalkan elemen 'kejutan positif', melepaskan dopamin dan memperbaiki suasana hati secara alami. Anda tidak perlu perjalanan transoseanik untuk merasakan sensasi penemuan." },
  { type: "title", text: "Jelajahi apa yang sudah Anda ketahui: Filosofi Lokal", level: 2 },
  { type: "paragraph", html: "Kita hidup dikelilingi oleh cerita dan detail yang tidak disadari. Tujuan dari perkiraan ini adalah untuk melatih mata Anda melihat yang luar biasa dalam yang biasa. Jangan mencari momen yang sempurna; carilah momen yang memungkinkan." },
  {
    type: "grid",
    columns: 2
  },
  { type: "card", icon: "mdi:clock-fast", title: "Tanpa Alasan", html: "Petualangan yang membutuhkan kurang dari 15 menit dan nol rupiah. Waktu bukanlah penghalang bagi keingintahuan." },
  { type: "card", icon: "mdi:lock-outline", title: "Privasi Total", html: "Anda tidak perlu mendaftar atau membagikan data Anda. Kemajuan dan petualangan yang diselesaikan hanya disimpan di perangkat Anda." },
  { type: "card", icon: "mdi:share-variant", title: "Viralitas Sehat", html: "Bagikan tantangan yang menginspirasi orang lain untuk keluar dari gelembung mereka, alih-alih memicu perbandingan media sosial yang konstan." },
  { type: "card", icon: "mdi:trophy-outline", title: "Gamifikasi", html: "Kumpulkan lencana eksklusif untuk setiap kategori tantangan yang diselesaikan." }
];

const faq: ToolLocaleContent<MiniAdventuresUI>['faq'] = [
  { question: "Apa itu petualangan mikro?", answer: "Ini adalah petualangan yang singkat, lokal, murah, dan sederhana. Istilah ini (dipopulerkan oleh Alastair Humphreys) berusaha menunjukkan bahwa Anda tidak perlu pergi ke sisi lain dunia untuk menjalani pengalaman yang mengasyikkan." },
  { question: "Untuk apa generator ini?", answer: "Ini berfungsi untuk melawan kelumpuhan analisis. Terkadang kita ingin melakukan sesuatu yang berbeda tetapi tidak tahu apa. Simulator ini memilih tantangan acak untuk Anda, menghilangkan beban mental dalam memutuskan." },
  { question: "Apakah saya harus mendaftarkan petualangan saya?", answer: "Tidak. Ini adalah alat privasi total. Tantangan dihasilkan secara acak di browser Anda dan kami tidak menyimpan catatan apa pun tentang apa yang Anda lakukan atau ke mana Anda pergi." },
  { question: "Bisakah saya mengusulkan petualangan baru?", answer: "Tentu saja! Kode untuk alat ini bersifat terbuka. Jika Anda memiliki ide untuk tantangan menyenangkan yang tidak memerlukan banyak anggaran atau waktu, Anda dapat menyarankannya melalui repositori di GitHub." }
];

const bibliography: ToolLocaleContent<MiniAdventuresUI>['bibliography'] = [
  { name: "Alastair Humphreys: Microadventures", url: "https://alastairhumphreys.com/blog/microadventures-3/" },
  { name: "Rob Walker: The Art of Noticing", url: "https://www.goodreads.com/es/book/show/41552704-the-art-of-noticing" }
];

const howTo: ToolLocaleContent<MiniAdventuresUI>['howTo'] = [
  { name: "Buat", text: "Tekan tombol buat untuk menerima tantangan acak." },
  { name: "Lakukan", text: "Cobalah untuk menyelesaikan tantangan sebelum hari berakhir." },
  { name: "Selesaikan", text: "Tandai tantangan sebagai selesai untuk mendapatkan lencana dan kemajuan." }
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
  applicationCategory: 'TravelApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'id',
};

export const content: ToolLocaleContent<MiniAdventuresUI> = {
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
  howToTitle: "Cara kerjanya",
  schemas: [faqSchema, howToSchema, appSchema],
};
