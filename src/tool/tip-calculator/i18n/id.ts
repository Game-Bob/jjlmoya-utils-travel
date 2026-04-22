import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TipCalculatorUI } from '../index';

const slug = 'kalkulator-tip-internasional';
const title = 'Kalkulator Tip Internasional';
const description = 'Hitung berapa banyak tip yang harus diberikan saat bepergian. Termasuk panduan persentase dan aturan etika untuk lebih dari 50 negara. Jangan sampai keliru saat membayar!';

const ui: TipCalculatorUI = {
  title: "Kalkulator Tip",
  badge: "Alat Tip Internasional",
  billLabel: "Jumlah Tagihan",
  countryLabel: "Negara / Kebiasaan Lokal",
  tipLabel: "Persentase Tip",
  splitLabel: "Bagi Tagihan",
  summaryTip: "Total Tip",
  summarySubtotal: "Subtotal",
  summaryTotalPerson: "Total per Orang",
  protocolTitle: "Protokol",
  placeholderAmount: "0.00",
  placeholderFilter: "Cari negara...",
  placeholderSelect: "Pilih negara",
  countries: [
    {
      id: "usa",
      name: "AS & Kanada",
      min: 18,
      max: 25,
      default: 20,
      culture: "Tip sangat penting bagi gaji pelayan. Antara 18% dan 25% sangat diharapkan. Tidak memberikan tip dianggap sebagai pelanggaran serius terhadap budaya Amerika Utara.",
    },
    {
      id: "esp",
      name: "Spanyol",
      min: 0,
      max: 10,
      default: 5,
      culture: "Opsional. Umumnya dilakukan dengan membulatkan uang kembalian atau memberikan 5-10% saat makan malam jika layanannya berkualitas.",
    },
    {
      id: "jpn",
      name: "Jepang",
      min: 0,
      max: 0,
      default: 0,
      culture: "Tanpa tip. Ini dianggap sebagai penghinaan terhadap profesionalisme. Jika Anda meninggalkan uang, mereka kemungkinan besar akan mengejar Anda untuk mengembalikannya.",
    },
    {
      id: "ita",
      name: "Italia",
      min: 0,
      max: 10,
      default: 0,
      culture: "'Coperto' adalah biaya untuk layanan meja, roti, dan penutup, itu bukan tip. Memberikan tambahan 5-10% adalah tindakan yang dihargai tetapi sepenuhnya opsional.",
    },
    {
      id: "fra",
      name: "Prancis",
      min: 0,
      max: 10,
      default: 5,
      culture: "Biaya layanan sudah termasuk dalam undang-undang. Berikan 'pourboire' (tambahan kecil) hanya untuk perlakuan yang luar biasa.",
    },
    {
      id: "gbr",
      name: "Inggris Raya",
      min: 0,
      max: 12.5,
      default: 10,
      culture: "Opsional 12,5% sering ditambahkan ke tagihan. Jika tidak ada, 10% adalah standar di restoran.",
    },
    {
      id: "mex",
      name: "Meksiko",
      min: 10,
      max: 15,
      default: 12,
      culture: "'Propina' sebesar 10-15% sangat diharapkan. Ini adalah bagian penting dari ekonomi bagi pekerja di sektor ini.",
    },
    {
      id: "arg",
      name: "Argentina",
      min: 0,
      max: 10,
      default: 10,
      culture: "Standarnya adalah 10%. Hampir selalu diberikan jika layanannya normal atau baik.",
    },
    {
      id: "bra",
      name: "Brasil",
      min: 0,
      max: 10,
      default: 10,
      culture: "Biasanya biaya 10% sudah termasuk dalam tagihan sebagai 'Serviço'. Ini opsional tetapi sebagian besar orang membayarnya.",
    },
    {
      id: "deu",
      name: "Jerman",
      min: 5,
      max: 10,
      default: 7,
      culture: "Umumnya dilakukan dengan pembulatan atau menambahkan 5-10%. Beritahu pelayan jumlah total termasuk tip saat membayar.",
    },
    {
      id: "tur",
      name: "Turki",
      min: 5,
      max: 10,
      default: 10,
      culture: "Di daerah wisata, 10% dalam bentuk tunai sangat diharapkan. Tip biasanya tidak dapat ditambahkan ke kartu kredit.",
    },
    {
      id: "aus",
      name: "Australia",
      min: 0,
      max: 10,
      default: 0,
      culture: "Tidak diharapkan. Gaji karyawan sudah tinggi. Di restoran mewah, 10% bisa diberikan.",
    },
    {
      id: "chn",
      name: "Tiongkok",
      min: 0,
      max: 0,
      default: 0,
      culture: "Secara historis, pemberian tip tidak dilakukan dan di banyak tempat hal ini dilarang atau dianggap aneh.",
    },
    {
      id: "prt",
      name: "Portugal",
      min: 0,
      max: 10,
      default: 5,
      culture: "Merupakan kebiasaan untuk memberikan kembalian atau membulatkannya. Di daerah wisata, 5-10% adalah hal yang umum.",
    },
    {
      id: "grc",
      name: "Yunani",
      min: 0,
      max: 10,
      default: 5,
      culture: "Menggenapi tagihan biasanya sudah cukup. Tambahan 5-10% sangat dihargai tetapi tidak wajib.",
    },
  ]
};

const seo: ToolLocaleContent<TipCalculatorUI>['seo'] = [
  {
    type: "title",
    text: "Panduan Tip Internasional: Etika dan Persentase 2026",
    level: 2,
  },
  {
    type: "summary",
    title: "Belajar memberikan tip seperti penduduk lokal di mana pun di dunia",
    items: [
      "Panduan lengkap mengenai persentase tip yang diharapkan di destinasi wisata utama.",
      "Cara menghitung tip dengan cepat mulai dari subtotal atau total termasuk pajak.",
      "Perbedaan antara biaya layanan, cover (coperto), dan pemberian tip sukarela.",
      "Aturan etika untuk situasi khusus: taksi, hotel, dan pemandu wisata.",
    ],
  },
  {
    type: "paragraph",
    html: "Salah satu momen paling menegangkan dalam setiap perjalanan internasional terjadi ketika tagihan tiba di meja. <strong>Kalkulator tip internasional</strong> kami dirancang untuk menghilangkan ketidakpastian tersebut.",
  }
];

const faq: ToolLocaleContent<TipCalculatorUI>['faq'] = [
  {
    question: "Apakah wajib memberikan tip di Amerika Serikat?",
    answer: "Secara hukum tidak, tetapi secara sosial wajib. Pelayan bergantung pada tip untuk mencapai upah minimum. Umumnya memberikan antara 18% hingga 25%.",
  },
  {
    question: "Di negara mana pemberian tip dianggap menyinggung?",
    answer: "Utamanya di Jepang dan Korea Selatan. Layanan yang baik dianggap sebagai bagian dari kewajiban dan tidak memerlukan kompensasi ekstra.",
  },
  {
    question: "Haruskah saya memberikan tip jika layanannya buruk?",
    answer: "Di negara-negara yang bersifat opsional (Eropa, Australia), tindakan yang paling tepat adalah tidak memberikan apa-apa.",
  },
  {
    question: "Apakah tip dihitung sebelum atau sesudah pajak?",
    answer: "Di Amerika Utara biasanya dihitung berdasarkan subtotal (sebelum pajak). Di Eropa dan Amerika Latin, selalu dihitung berdasarkan total tagihan.",
  },
];

const howTo: ToolLocaleContent<TipCalculatorUI>['howTo'] = [
  {
    name: "Masukkan total tagihan",
    text: "Ketik jumlah total yang tertera pada faktur Anda sebelum menerapkan tip.",
  },
  {
    name: "Pilih negara",
    text: "Pilih destinasi Anda untuk memuat rekomendasi budaya dan persentase standar secara otomatis.",
  },
  {
    name: "Sesuaikan dan bagi",
    text: "Jika ada beberapa orang, sebutkan jumlah orang untuk mengetahui berapa banyak yang harus dibayar masing-masing termasuk tip.",
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
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'id',
};

export const content: ToolLocaleContent<TipCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: "Pertanyaan yang Sering Diajukan",
  bibliography: "Sumber dan Referensi",
  howTo,
  howToTitle: "Cara menggunakan kalkulator",
  schemas: [faqSchema, howToSchema, appSchema],
};
