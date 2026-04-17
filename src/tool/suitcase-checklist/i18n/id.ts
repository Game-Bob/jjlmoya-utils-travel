import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SuitcaseChecklistUI } from '../index';

const slug = 'generator-daftar-periksa-koper';
const title = 'Generator Daftar Periksa Koper | Buat daftar kemas Anda';
const description = 'Alat online terbaik untuk mengatur barang bawaan Anda berdasarkan jenis perjalanan, tujuan, dan durasi. Jangan pernah melupakan esensial perjalanan Anda lagi.';

const ui: SuitcaseChecklistUI = {
  title: "Perencana Kemas",
  form: {
    destTitle: "Tujuan & Iklim",
    destTypes: [
      { id: "playa", name: "Pantai / Pesisir", icon: "mdi:beach" },
      { id: "ciudad", name: "Kota / Perkotaan", icon: "mdi:city" },
      { id: "montana", name: "Gunung / Pedesaan", icon: "mdi:pine-tree" },
      { id: "frio", name: "Dingin / Salju", icon: "mdi:snowflake" }
    ],
    daysTitle: "Berapa hari?",
    intlTitle: "Perjalanan Internasional?",
    intlLabel: "Ya, melintasi perbatasan",
    reasonTitle: "Tujuan Perjalanan",
    reasons: [
      { id: "ocio", name: "Rekreasi / Kesenangan", icon: "mdi:party-popper" },
      { id: "negocios", name: "Bisnis", icon: "mdi:tie" }
    ],
    submitBtn: "Konfigurasi Tas Ideal"
  },
  results: {
    title: "Daftar Kemas Anda",
    editBtn: "Edit",
    printBtn: "Simpan PDF",
    tipsTitle: "Tips Perjalanan",
    progressText: "Selesai"
  },
  itemsDb: {
    essentials: {
      id: "essentials",
      title: "Dokumen & Dasar",
      icon: "mdi:passport",
      items: [
        { label: "KTP / Paspor" },
        { label: "Kartu bank" },
        { label: "Uang tunai" },
        { label: "Tiket (Pesawat/Kereta)" },
        { label: "Konfirmasi pemesanan" },
        { label: "Kunci rumah" },
        { label: "Dokumen internasional", dynamicId: "item-internacional" }
      ]
    },
    technology: {
      id: "technology",
      title: "Teknologi",
      icon: "mdi:laptop",
      items: [
        { label: "Ponsel" },
        { label: "Pengisi daya ponsel" },
        { label: "Headphone" },
        { label: "Power bank" },
        { label: "Adaptor daya", dynamicId: "item-adaptador" }
      ]
    },
    toiletries: {
      id: "toiletries",
      title: "Peralatan Mandi",
      icon: "mdi:toothbrush",
      items: [
        { label: "Sikat & pasta gigi" },
        { label: "Deodoran" },
        { label: "Gel & sampo" },
        { label: "Sisir / Sikat" },
        { label: "Kotak P3K mini" },
        { label: "Obat-obatan pribadi" }
      ]
    },
    clothing_base: {
      id: "clothing_base",
      title: "Pakaian Harian",
      icon: "mdi:tshirt-crew",
      items: [
        { label: "Pakaian dalam", dynamicId: "qty-ropa-interior" },
        { label: "Kaus / Atasan", dynamicId: "qty-camisetas" },
        { label: "Celana", dynamicId: "qty-pantalones" },
        { label: "Kaus kaki", dynamicId: "qty-calcetines" },
        { label: "Piyama" },
        { label: "Jaket ringan" },
        { label: "Sepatu harian yang nyaman" }
      ]
    }
  },
  specificItems: {
    destType: {
      playa: {
        id: "dest-playa",
        title: "Untuk Pesisir",
        icon: "mdi:beach",
        items: [
          { label: "Pakaian renang" },
          { label: "Handuk pantai" },
          { label: "Tabir surya" },
          { label: "Kacamata hitam" },
          { label: "Sandal jepit" },
          { label: "Topi" }
        ]
      },
      ciudad: {
        id: "dest-ciudad",
        title: "Perkotaan",
        icon: "mdi:city",
        items: [
          { label: "Sepatu kets untuk jalan" },
          { label: "Ransel kecil yang aman" },
          { label: "Payung lipat" },
          { label: "Panduan kota" }
        ]
      },
      montana: {
        id: "dest-montana",
        title: "Gunung",
        icon: "mdi:pine-tree",
        items: [
          { label: "Sepatu hiking" },
          { label: "Jaket penahan angin" },
          { label: "Celana trekking" },
          { label: "Botol minum" },
          { label: "Ransel gunung" }
        ]
      },
      frio: {
        id: "dest-frio",
        title: "Iklim Dingin",
        icon: "mdi:snowflake",
        items: [
          { label: "Mantel tebal" },
          { label: "Topi & sarung tangan" },
          { label: "Alas kaki musim dingin" },
          { label: "Kaus termal" },
          { label: "Syal" }
        ]
      }
    },
    travelType: {
      negocios: {
        id: "travel-negocios",
        title: "Bisnis",
        icon: "mdi:tie",
        items: [
          { label: "Setelan / Pakaian formal" },
          { label: "Kemeja" },
          { label: "Sepatu formal" },
          { label: "Laptop" },
          { label: "Pengisi daya laptop" },
          { label: "Dokumen kerja" }
        ]
      },
      ocio: {
        id: "travel-ocio",
        title: "Rekreasi",
        icon: "mdi:camera",
        items: [
          { label: "Pakaian untuk keluar malam" },
          { label: "Kamera (Opsional)" },
          { label: "Buku / Hiburan" }
        ]
      }
    }
  },
  tips: {
    military: "Menggulung pakaian 'gaya militer' sangat membantu mencegah kerutan dan menghemat ruang.",
    longTravel: "Anda akan pergi lebih dari seminggu. Rencanakan untuk mencuci pakaian dasar Anda di tengah perjalanan.",
    intlPassport: "Perjalanan Internasional: Periksa hari ini apakah paspor Anda masih berlaku setidaknya selama 6 bulan.",
    intlBank: "Periksa visa yang diperlukan atau apakah bank Anda mengenakan biaya luar negeri.",
    intlAdapter: "Jangan lupakan adaptor universal Anda jika colokan di tempat tujuan berbeda!",
    coldLayers: "Untuk cuaca dingin, berpakaianlah berlapis: lapisan dasar termal, isolasi, dan lapisan luar tahan air.",
    coldHeavyOn: "Kenakan pakaian yang paling tebal/berat di pesawat untuk menghemat ruang di bagasi.",
    beachWet: "Kemas lebih dari satu pakaian renang; kelembapan dapat mencegahnya kering semalaman."
  }
};

const seo: ToolLocaleContent<SuitcaseChecklistUI>['seo'] = [
  { type: "title", text: "Generator Daftar Periksa Koper: Pendamping Perjalanan Ideal Anda", level: 2 },
  { type: "paragraph", html: "Mengemas koper sering kali menjadi salah satu saat yang paling menegangkan sebelum perjalanan. Ketakutan akan melupakan sesuatu yang penting, keraguan tentang cuaca di tempat tujuan, atau ketidakpastian tentang berapa banyak barang bawaan yang harus dibawa dapat merusak hari-hari sebelum liburan yang dinanti-nantikan. Di sinilah <strong>generator daftar periksa koper</strong> menjadi sekutu terbaik Anda." },
  {
    type: "summary",
    title: "Manfaat menggunakan pembuat daftar kami",
    items: [
      "Personalisasi mutlak yang disesuaikan dengan iklim tujuan Anda (pantai, gunung, kota, atau salju).",
      "Perhitungan otomatis pakaian berdasarkan durasi liburan Anda.",
      "Pengurangan drastis stres logistik dengan daftar periksa interaktif yang dapat Anda centang.",
      "Optimalisasi ruang bagasi, menghindari sindrom 'siapa tahu butuh'."
    ]
  },
  { type: "title", text: "Mengapa perencanaan bagasi itu mendasar?", level: 3 },
  { type: "paragraph", html: "Perjalanan adalah pengalaman yang transformatif, tetapi perencanaan yang buruk dapat membawa sakit kepala yang tidak perlu. Dengan menggunakan alat cerdas kami, Anda mengotomatiskan proses yang jika tidak akan memakan waktu berjam-jam perhitungan dan hafalan. Organisasi yang efisien adalah fondasi dari setiap petualangan yang sukses." }
];

const faq: ToolLocaleContent<SuitcaseChecklistUI>['faq'] = [
  { question: "Bisakah saya menyimpan daftar yang dihasilkan?", answer: "Anda dapat mencentang dan menghapus centang pada daftar Anda, serta menggunakan tombol untuk mencetaknya atau menyimpannya sebagai file PDF di perangkat Anda." },
  { question: "Bagaimana jumlah pakaian dihitung?", answer: "Alat kami memperkirakan set pakaian berdasarkan durasi perjalanan yang dipilih, mempromosikan perjalanan ringan dan mengoptimalkan bagasi Anda." },
  { question: "Apakah ini berfungsi untuk cuaca dingin dan salju?", answer: "Ya, Anda dapat memilih tujuan iklim dingin agar daftar periksa secara otomatis menyertakan item yang sangat diperlukan untuk kondisi tersebut." },
  { question: "Apakah alat ini gratis?", answer: "Ya, generator daftar periksa koper kami 100% gratis dan tidak memerlukan registrasi atau unduhan aplikasi tambahan." }
];

const bibliography: ToolLocaleContent<SuitcaseChecklistUI>['bibliography'] = [
  { name: "KonMari - Cara Mengemas Koper ala KonMari", url: "https://konmari.com/how-to-konmari-a-suitcase/" },
  { name: "Eagle Creek - Apa yang Harus Dikemas: Daftar Periksa Kemas Perjalanan Terbaik", url: "https://eaglecreek.com/blogs/articles/what-pack-ultimate-travel-packing-checklist" }
];

const howTo: ToolLocaleContent<SuitcaseChecklistUI>['howTo'] = [
  { name: "Tentukan perjalanan Anda", text: "Pilih iklim, alasan, dan durasi liburan Anda." },
  { name: "Buat daftar", text: "Tekan tombol dan dapatkan secara instan semua item yang diperlukan, dari kosmetik hingga teknologi." },
  { name: "Kemas tas Anda", text: "Centang item saat Anda mengemasnya agar tidak ada esensial yang terlupakan." }
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
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'id',
};

export const content: ToolLocaleContent<SuitcaseChecklistUI> = {
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
  howToTitle: "Cara mengemas koper Anda",
  schemas: [faqSchema, howToSchema, appSchema],
};
