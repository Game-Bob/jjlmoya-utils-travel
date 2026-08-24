import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FuelCostCalculatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'kalkulator-biaya-bahan-bakar-perjalanan';
const title = "Kalkulator Biaya Bahan Bakar Perjalanan";
const description = "Hitung estimasi biaya bahan bakar perjalanan berdasarkan jarak, konsumsi kendaraan, harga bahan bakar per liter, jumlah penumpang, dan rute sekali jalan atau pulang pergi.";

const ui: FuelCostCalculatorUI = {
  "metricLabel": "Metrik",
  "imperialLabel": "Imperial",
  "routeHeading": "Atur rute Anda",
  "distanceLabel": "Jarak sekali jalan",
  "distanceHint": "Berapa jarak ke lokasi tujuan?",
  "consumptionLabel": "Konsumsi bahan bakar",
  "consumptionHint": "Masukkan angka konsumsi kendaraan Anda",
  "priceLabel": "Harga bahan bakar",
  "priceHint": "Masukkan harga bahan bakar saat ini",
  "passengersLabel": "Penumpang",
  "roundTripLabel": "Pulang pergi",
  "currencyLabel": "Mata uang",
  "presetsLabel": "Rute cepat",
  "presetCommute": "Perjalanan harian",
  "presetWeekend": "Liburan akhir pekan",
  "presetRoadTrip": "Perjalanan jauh",
  "resultHeading": "Prakiraan bahan bakar",
  "totalDistanceLabel": "Total jarak",
  "fuelUsedLabel": "Bahan bakar dibutuhkan",
  "totalCostLabel": "Total biaya bahan bakar",
  "perPersonLabel": "Setiap penumpang membayar",
  "routeStatement": "{distance} {unit} pulang pergi, dibagi {passengers} orang",
  "routeOneWayStatement": "{distance} {unit} sekali jalan, dibagi {passengers} orang",
  "statusLight": "Biaya ringan",
  "statusMedium": "Cocok untuk patungan",
  "statusHigh": "Perjalanan jauh",
  "sampleButton": "Muat contoh",
  "resetButton": "Reset",
  "litersUnit": "L",
  "gallonsUnit": "gal",
  "distanceMetricUnit": "km",
  "distanceImperialUnit": "mi",
  "consumptionMetricUnit": "L/100 km",
  "consumptionImperialUnit": "mpg",
  "priceMetricUnit": "per liter",
  "priceImperialUnit": "per galon",
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
    },
    {
      "code": "JPY",
      "symbol": "¥"
    }
  ]
};

const seo: ToolLocaleContent<FuelCostCalculatorUI>['seo'] = [
  {
    "type": "title",
    "text": "Cara mengestimasi anggaran bahan bakar sebelum bepergian",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Estimasi biaya bahan bakar yang akurat memerlukan empat data utama: jarak sekali jalan, rata-rata konsumsi kendaraan, harga bahan bakar per liter, dan jumlah penumpang yang berbagi biaya. Kalkulator ini secara otomatis menggandakan jarak untuk rute pulang pergi dan membagi total biaya secara merata."
  },
  {
    "type": "title",
    "text": "Rumus perhitungan biaya bahan bakar",
    "level": 2
  },
  {
    "type": "table",
    "headers": [
      "Langkah",
      "Perhitungan",
      "Hasil yang diperoleh"
    ],
    "rows": [
      [
        "Total jarak",
        "Jarak sekali jalan x 2 untuk pulang pergi",
        "Jarak tempuh nyata dalam km atau mil"
      ],
      [
        "Bahan bakar terpakai",
        "Total jarak x Konsumsi / 100",
        "Total liter bahan bakar yang dibutuhkan"
      ],
      [
        "Total biaya",
        "Bahan bakar terpakai x Harga per liter",
        "Estimasi total pengeluaran bahan bakar"
      ],
      [
        "Biaya per orang",
        "Total biaya / Jumlah penumpang",
        "Bagian pembayaran fair untuk tiap orang"
      ]
    ]
  },
  {
    "type": "tip",
    "title": "Gunakan harga bahan bakar aktual",
    "html": "Harga BBM bervariasi tergantung lokasi dan jenis bahan bakar. Masukkan harga aktual yang Anda perkirakan di SPBU untuk mendapatkan hasil perencanaan yang presisi."
  },
  {
    "type": "title",
    "text": "Satuan metrik dan imperial",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Mode metrik menggunakan kilometer dan liter per 100 km, sedangkan mode imperial menggunakan mil dan mpg. Mengubah opsi satuan tidak mempengaruhi total nilai ekonomi perjalanan."
  },
  {
    "type": "list",
    "items": [
      "Berikan sedikit ruang ekstra untuk kemacetan atau pencarian tempat parkir.",
      "Gunakan angka konsumsi riil kendaraan Anda bukan angka brosur terbaik.",
      "Untuk perjalanan jauh dengan beberapa kali isi BBM, hitung tiap rute secara terpisah."
    ]
  }
];

const faq = [
  {
    "question": "Bagaimana cara menghitung biaya bahan bakar perjalanan?",
    "answer": "Kalikan total jarak perjalanan dengan konsumsi bahan bakar kendaraan, bagi 100 untuk satuan L/100 km, lalu kalikan dengan harga BBM per liter. Bagi hasil akhir dengan jumlah penumpang jika berbagi biaya."
  },
  {
    "question": "Apakah kalkulator ini menghitung rute pulang pergi?",
    "answer": "Ya. Aktifkan opsi Pulang pergi dan kalkulator akan menggandakan total jarak sebelum menghitung konsumsi BBM."
  },
  {
    "question": "Apakah kalkulator menggunakan harga BBM real-time?",
    "answer": "Tidak. Anda memasukkan harga BBM sendiri agar estimasi tetap transparan dan dapat disesuaikan dengan SPBU mana pun."
  },
  {
    "question": "Apakah saya bisa menggunakan satuan mil dan galon?",
    "answer": "Bisa. Ubah ke mode Imperial untuk memasukkan mil dan mil per galon (mpg)."
  }
];

const howTo = [
  {
    "name": "Pilih sistem satuan",
    "text": "Pilih Metrik untuk km dan L/100km atau Imperial untuk mil dan mpg."
  },
  {
    "name": "Masukkan data rute dan kendaraan",
    "text": "Isi jarak sekali jalan, konsumsi BBM, harga BBM per liter, serta jumlah penumpang."
  },
  {
    "name": "Tinjau pembagian biaya",
    "text": "Aktifkan opsi pulang pergi jika perlu, pilih mata uang, lalu lihat total biaya dan patungan per orang."
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

export const content: ToolLocaleContent<FuelCostCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  howTo,
  howToTitle: "Cara menghitung biaya bahan bakar perjalanan Anda",
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography: bibliographyEntries,
};
