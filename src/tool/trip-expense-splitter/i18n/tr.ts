import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TripExpenseSplitterUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'grup-gezi-masraf-paylasimi-hesaplama';
const title = "Grup Gezisi Masraf Paylaşımı Hesaplayıcı";
const description = "Arkadaşlarınızla yaptığınız gezinin ortak masraflarını paylaşın, kimin fazla veya eksik ödediğini görün ve en az sayıda transferle hesapları kapatın.";

const ui: TripExpenseSplitterUI = {
  "tripNameLabel": "Gezi adı",
  "tripNamePlaceholder": "Bu geziye bir isim verin",
  "currencyLabel": "Para birimi",
  "travelersHeading": "Gezginler",
  "travelerPlaceholder": "Gezgin",
  "addTraveler": "Kişi ekle",
  "removeTraveler": "Kaldır",
  "expensesHeading": "Masraf defteri",
  "expenseDescriptionPlaceholder": "Ne için ödeme yapıldı?",
  "amountLabel": "Tutar",
  "payerLabel": "Ödeyen kişi",
  "participantsLabel": "Paylaşacak kişiler",
  "allTravelers": "gezginler",
  "addExpense": "Masraf ekle",
  "emptyExpenses": "Masraf defteriniz boş. İlk ortak harcamayı ekleyin.",
  "resultHeading": "Önerilen transferler",
  "totalSpent": "Grup toplam harcaması",
  "transferCount": "transfer",
  "noTransfers": "Herkes ödeşmiş durumda. Transfer gerekmiyor.",
  "owes": "borçlu",
  "receives": "alacaklı",
  "from": "kişisinden",
  "to": "kişisine",
  "eachPays": "Kişi başı ödenen",
  "eachReceives": "Kişi başı alınan",
  "settlementHint": "Rota, gruptaki kişileri ve en kısa hesap kapatma yolunu gösterir.",
  "copyLink": "Bağlantıyı kopyala",
  "copied": "Bağlantı kopyalandı",
  "exportJson": "JSON olarak dışa aktar",
  "reset": "Yeniden başla",
  "removeExpense": "Masrafı sil",
  "deleteTrip": "Geziyi sıfırla",
  "intro": "Grubun harcamalarını girin. Aşağıdaki rota harcamaları en kısa ödeşme planına dönüştürür.",
  "statusBalanced": "Hesaplar kapatıldı",
  "statusSettle": "Ödeşmeye hazır",
  "statusReady": "Harcama bekleniyor",
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
  ],
  "defaultTripName": "Hafta sonu tatili",
  "defaultTravelerNames": [
    "Maya",
    "Alex",
    "Sam"
  ],
  "defaultExpenseNames": [
    "Dağ evi",
    "Tren biletleri"
  ]
};

const seo: ToolLocaleContent<TripExpenseSplitterUI>['seo'] = [
  {
    "type": "title",
    "text": "Grup gezisi hesaplarını sorunsuz ve adil kapatma rehberi",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Bir grup gezisinin hesaplarını kapatmak, her harcamanın ödeyen kişisi ve katılanları belli olduğunda çok kolaylaşır. Bu hesaplayıcı herkesin yaptığı ödemeleri toplar, harcamaları ilgili kişilere böler ve en az transfer içeren planı sunar."
  },
  {
    "type": "title",
    "text": "Kişi başı net bakiye nasıl hesaplanır",
    "level": 2
  },
  {
    "type": "table",
    "headers": [
      "Aşama",
      "Uygulanan Hesaplama",
      "Amaç"
    ],
    "rows": [
      [
        "Ödenen toplam",
        "Kişinin cebinden çıkan toplam harcama",
        "Peşin ödenen parayı kaydeder"
      ],
      [
        "Adil pay",
        "Harcamanın katılan kişilere bölünmesi",
        "Maliyeti gerçek kullanıcılara atar"
      ],
      [
        "Net bakiye",
        "Ödenen toplam eksi adil pay",
        "Kimin alacaklı veya borçlu olduğunu gösterir"
      ],
      [
        "Hesap kapatma",
        "En büyük borç ve alacakların eşleşmesi",
        "Para transferi sayısını en aza indirir"
      ]
    ]
  },
  {
    "type": "tip",
    "title": "Her harcamanın katılımcılarını doğru seçin",
    "html": "Konaklama genellikle herkesi kapsar, ancak özel bir yemek veya müze bileti sadece katılan kişilere yazılmalıdır."
  },
  {
    "type": "title",
    "text": "Son hesap kapatma sürecini basitleştirin",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Önerilen transferleri takip ederek grubu en kısa yoldan ödeştirin."
  }
];

const faq = [
  {
    "question": "Grup masraf paylaşımı hesaplayıcısı nasıl çalışır?",
    "answer": "Gezginleri, harcamaları, ödeyen ve katılan kişileri girin. Araç net bakiyeleri hesaplar ve en kısa transfer listesini sunar."
  },
  {
    "question": "Bir harcama sadece bazı kişilere yazılabilir mi?",
    "answer": "Evet. Her harcamada sadece ilgili katılımcıları seçebilirsiniz."
  },
  {
    "question": "Verilerim bir sunucuya yükleniyor mu?",
    "answer": "Hayır. Tüm veriler yalnızca tarayıcınızda yeral olarak saklanır."
  },
  {
    "question": "Neden harcama sayısından daha az transfer var?",
    "answer": "Araç, kişilerin karşılıklı borç ve alacaklarını mahsuplaştırarak işlem sayısını en aza indirir."
  }
];

const howTo = [
  {
    "name": "Gezginleri ekleyin",
    "text": "Gruba dahil olan tüm kişilerin isimlerini yazın."
  },
  {
    "name": "Harcamaları kaydedin",
    "text": "Açıklama, tutar, ödeyen ve katılan kişileri belirtin."
  },
  {
    "name": "Ödeşme planını uygulayın",
    "text": "Önerilen transferleri gerçekleştirerek hesapları kapatın."
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

export const content: ToolLocaleContent<TripExpenseSplitterUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  howTo,
  howToTitle: "Grup gezisi ortak masrafları nasıl paylaşılır",
  schemas: [appSchema, faqSchema, howToSchema],
  bibliography: bibliographyEntries,
};
