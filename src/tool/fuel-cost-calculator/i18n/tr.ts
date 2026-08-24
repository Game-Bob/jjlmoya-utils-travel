import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FuelCostCalculatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'yakit-maliyeti-hesaplama-yolculuk';
const title = "Yolculuk için Yakıt Maliyeti Hesaplama";
const description = "Mesafe, araç yakıt tüketimi, litre fiyatı, yolcu sayısı ve tek yön veya gidiş-dönüş rotasına göre seyahatinizin tahmini yakıt masrafını hesaplayın.";

const ui: FuelCostCalculatorUI = {
  "metricLabel": "Metrik",
  "imperialLabel": "İngiliz (Imperial)",
  "routeHeading": "Rotanızı ayarlayın",
  "distanceLabel": "Tek yön mesafe",
  "distanceHint": "Varış noktası ne kadar uzaklıkta?",
  "consumptionLabel": "Araç yakıt tüketimi",
  "consumptionHint": "Aracınızın tüketim değerini girin",
  "priceLabel": "Yakıt litre fiyatı",
  "priceHint": "Pompadaki güncel yakıt fiyatını girin",
  "passengersLabel": "Yolcu sayısı",
  "roundTripLabel": "Gidiş-dönüş",
  "currencyLabel": "Para birimi",
  "presetsLabel": "Hızlı rotalar",
  "presetCommute": "Günlük yolculuk",
  "presetWeekend": "Hafta sonu kaçamağı",
  "presetRoadTrip": "Uzun yolculuk",
  "resultHeading": "Yakıt tahmini",
  "totalDistanceLabel": "Toplam mesafe",
  "fuelUsedLabel": "Gerekli yakıt miktarı",
  "totalCostLabel": "Toplam yakıt maliyeti",
  "perPersonLabel": "Kişi başı düşen tutar",
  "routeStatement": "{distance} {unit} gidiş-dönüş, {passengers} kişi arasında paylaştırıldı",
  "routeOneWayStatement": "{distance} {unit} tek yön, {passengers} kişi arasında paylaştırıldı",
  "statusLight": "Düşük masraf",
  "statusMedium": "Paylaşmak için uygun rota",
  "statusHigh": "Uzun yolculuk",
  "sampleButton": "Örnek yükle",
  "resetButton": "Sıfırla",
  "litersUnit": "L",
  "gallonsUnit": "gal",
  "distanceMetricUnit": "km",
  "distanceImperialUnit": "mi",
  "consumptionMetricUnit": "L/100 km",
  "consumptionImperialUnit": "mpg",
  "priceMetricUnit": "litre başı",
  "priceImperialUnit": "galon başı",
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
      "code": "TRY",
      "symbol": "₺"
    }
  ]
};

const seo: ToolLocaleContent<FuelCostCalculatorUI>['seo'] = [
  {
    "type": "title",
    "text": "Yola çıkmadan önce benzin ve motorin bütçesini hesaplama",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Doğru bir yakıt maliyeti tahmini için dört temel veriye ihtiyaç vardır: tek yön mesafe, aracın ortalama yakıt tüketimi, litre fiyatı ve masrafı paylaşan yolcu sayısı. Bu hesaplayıcı gidiş-dönüş seçeneğinde mesafeyi otomatik ikiye katlar ve tutarı kişiler arasında eşit böler."
  },
  {
    "type": "title",
    "text": "Yakıt maliyeti hesaplama formülü",
    "level": 2
  },
  {
    "type": "table",
    "headers": [
      "Adım",
      "Uygulanan Hesaplama",
      "Elde Edilen Sonuç"
    ],
    "rows": [
      [
        "Toplam mesafe",
        "Gidiş-dönüş için tek yön mesafe x 2",
        "Km veya mil cinsinden gerçek sürüş mesafesi"
      ],
      [
        "Tüketilen yakıt",
        "Toplam mesafe x Tüketim / 100",
        "Rota için gerekli toplam litre yakıt"
      ],
      [
        "Toplam maliyet",
        "Tüketilen yakıt x Litre fiyatı",
        "Tahmini toplam yakıt harcaması"
      ],
      [
        "Kişi başı maliyet",
        "Toplam maliyet / Yolcu sayısı",
        "Gruptaki her kişinin adil payı"
      ]
    ]
  },
  {
    "type": "tip",
    "title": "İstasyondaki güncel fiyatı girin",
    "html": "Yakıt fiyatları istasyona, ülkeye ve türe göre değişir. Gerçekçi bir planlama için ödemeyi beklediğiniz tutarı manuel olarak girin."
  },
  {
    "type": "title",
    "text": "Metrik ve imperial birimler",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Metrik mod kilometre ve 100 km başı litre kullanırken, imperial mod mil ve mpg birimlerini kullanır. Birimleri değiştirmek toplam yolculuk maliyetini etkilemez."
  },
  {
    "type": "list",
    "items": [
      "Trafik ve park yeri arama ihtimaline karşı küçük bir pay ekleyin.",
      "Katalog verileri yerine aracınızın gerçek yakıt tüketimini kullanın.",
      "Çoklu yakıt alımı içeren uzun seyahatlerde her etabı ayrı hesaplayın."
    ]
  }
];

const faq = [
  {
    "question": "Araba yolculuğu için yakıt maliyeti nasıl hesaplanır?",
    "answer": "Toplam mesafeyi aracın ortalama tüketimi ile çarpın, L/100 km için 100'e bölün ve litre fiyatı ile çarpın. Masrafı paylaşıyorsanız sonucu yolcu sayısına bölün."
  },
  {
    "question": "Hesaplayıcı gidiş-dönüşü kapsıyor mu?",
    "answer": "Evet. Gidiş-dönüş seçeneğini aktif hale getirdiğinizde mesafe otomatik olarak ikiye katlanır."
  },
  {
    "question": "Canlı yakıt fiyatları kullanılıyor mu?",
    "answer": "Hayır. Şeffaf ve her istasyona uyarlanabilir bir hesaplama için fiyatı kendiniz girersiniz."
  },
  {
    "question": "Mil ve galon ile hesaplama yapabilir miyim?",
    "answer": "Evet. Mil ve mpg ile değer girmek için Imperial moduna geçebilirsiniz."
  }
];

const howTo = [
  {
    "name": "Birim sistemini seçin",
    "text": "Km ve L/100km için Metrik, mil ve mpg için Imperial seçeneğini belirleyin."
  },
  {
    "name": "Rota ve araç verilerini girin",
    "text": "Tek yön mesafe, tüketim, litre fiyatı ve yolcu sayısını yazın."
  },
  {
    "name": "Maliyet dağılımını inceleyin",
    "text": "Gerekirse gidiş-dönüşü seçin, para birimini ayarlayın ve kişi başı düşen tutarı görün."
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
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<FuelCostCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  howTo,
  howToTitle: "Seyahatinizin yakıt maliyeti nasıl hesaplanır",
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography: bibliographyEntries,
};
