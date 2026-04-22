import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TipCalculatorUI } from '../index';

const slug = 'uluslararasi-bahsis-hesaplayici';
const title = 'Uluslararası Bahşiş Hesaplayıcı';
const description = 'Seyahatlerinizde ne kadar bahşiş bırakacağınızı hesaplayın. 50\'den fazla ülke için yüzde kılavuzu ve görgü kurallarını içerir. Ödeme yaparken hata yapmayın!';

const ui: TipCalculatorUI = {
  title: "Bahşiş Hesaplayıcı",
  badge: "Uluslararası Bahşiş Aracı",
  billLabel: "Fatura Tutarı",
  countryLabel: "Ülke / Yerel Adetler",
  tipLabel: "Bahşiş Yüzdesi",
  splitLabel: "Hesabı Böl",
  summaryTip: "Toplam Bahşiş",
  summarySubtotal: "Ara Toplam",
  summaryTotalPerson: "Kişi Başı Toplam",
  protocolTitle: "Görgü Kuralları",
  placeholderAmount: "0.00",
  placeholderFilter: "Ülke ara...",
  placeholderSelect: "Bir ülke seçin",
  countries: [
    {
      id: "usa",
      name: "ABD & Kanada",
      min: 18,
      max: 25,
      default: 20,
      culture: "Garson maaşları için bahşiş esastır. %18 ile %25 arası beklenir. Bahşiş bırakmamak, Kuzey Amerika kültüründe ciddi bir saygısızlık olarak kabul edilir.",
    },
    {
      id: "esp",
      name: "İspanya",
      min: 0,
      max: 10,
      default: 5,
      culture: "İsteğe bağlıdır. Genellikle para üstünü yuvarlamak veya hizmet kaliteli ise akşam yemeklerinde %5-10 bırakmak yaygındır.",
    },
    {
      id: "jpn",
      name: "Japonya",
      min: 0,
      max: 0,
      default: 0,
      culture: "Bahşiş verilmez. Profesyonelliğe hakaret olarak kabul edilir. Para bırakırsanız, muhtemelen iade etmek için peşinizden gelirler.",
    },
    {
      id: "ita",
      name: "İtalya",
      min: 0,
      max: 10,
      default: 0,
      culture: "'Coperto', masa servisi, ekmek ve örtü ücretidir, bahşişin kendisi değildir. Ekstra %5-10 bırakmak takdir edilen ancak tamamen isteğe bağlı bir jesttir.",
    },
    {
      id: "fra",
      name: "Fransa",
      min: 0,
      max: 10,
      default: 5,
      culture: "Servis ücreti kanunen dahildir. 'Pourboire'u (küçük ekstra) sadece olağanüstü hizmet için bırakın.",
    },
    {
      id: "gbr",
      name: "Birleşik Krallık",
      min: 0,
      max: 12.5,
      default: 10,
      culture: "Faturaya genellikle %12,5 oranında isteğe bağlı bir servis ücreti eklenir. Eğer eklenmemişse, restoranlarda %10 standarttır.",
    },
    {
      id: "mex",
      name: "Meksika",
      min: 10,
      max: 15,
      default: 12,
      culture: "%10-15 'propina' beklenir. Sektördeki çalışanlar için ekonominin hayati bir parçasıdır.",
    },
    {
      id: "arg",
      name: "Arjantin",
      min: 0,
      max: 10,
      default: 10,
      culture: "Standart %10'dur. Hizmet normal veya iyiyse neredeyse her zaman bırakılır.",
    },
    {
      id: "bra",
      name: "Brezilya",
      min: 0,
      max: 10,
      default: 10,
      culture: "Normalde faturaya 'Serviço' olarak %10 ücret eklenir. İsteğe bağlıdır ancak çoğu kişi öder.",
    },
    {
      id: "deu",
      name: "Almanya",
      min: 5,
      max: 10,
      default: 7,
      culture: "Tutarı yuvarlamak veya %5-10 eklemek yaygındır. Ödeme yaparken garsona bahşiş dahil toplam tutarı söyleyin.",
    },
    {
      id: "tur",
      name: "Türkiye",
      min: 5,
      max: 10,
      default: 10,
      culture: "Turistik bölgelerde nakit olarak %10 beklenir. Genellikle kredi kartına bahşiş eklenemez.",
    },
    {
      id: "aus",
      name: "Avustralya",
      min: 0,
      max: 10,
      default: 0,
      culture: "Beklenmez. Maaşlar yüksektir. Şık restoranlarda %10 bırakılabilir.",
    },
    {
      id: "chn",
      name: "Çin",
      min: 0,
      max: 0,
      default: 0,
      culture: "Tarihsel olarak bahşiş bırakılmaz ve birçok yerde yasaktır veya garip karşılanır.",
    },
    {
      id: "prt",
      name: "Portekiz",
      min: 0,
      max: 10,
      default: 5,
      culture: "Para üstünü bırakmak veya tutarı yuvarlamak adettendir. Turistik bölgelerde %5-10 yaygındır.",
    },
    {
      id: "grc",
      name: "Yunanistan",
      min: 0,
      max: 10,
      default: 5,
      culture: "Faturayı yuvarlamak genellikle yeterlidir. Ekstra %5-10 çok takdir edilir ancak zorunlu değildir.",
    },
  ]
};

const seo: ToolLocaleContent<TipCalculatorUI>['seo'] = [
  {
    type: "title",
    text: "Uluslararası Bahşiş Rehberi: Görgü Kuralları ve Yüzdeler 2026",
    level: 2,
  },
  {
    type: "summary",
    title: "Dünyanın her yerinde yerel biri gibi bahşiş bırakmayı öğrenin",
    items: [
      "Büyük turistik yerlerde beklenen bahşiş yüzdeleri hakkında tam kılavuz.",
      "Ara toplamdan veya vergiler dahil toplamdan bahşişi hızlıca hesaplama yolları.",
      "Servis ücretleri, kuver (coperto) ve gönüllü bahşiş arasındaki fark.",
      "Özel durumlar için görgü kuralları: taksiler, oteller ve tur rehberleri.",
    ],
  },
  {
    type: "paragraph",
    html: "Uluslararası bir seyahatin en stresli anlarından biri, faturanın masaya geldiği andır. <strong>Uluslararası bahşiş hesaplayıcımız</strong> bu belirsizliği ortadan kaldırmak için tasarlanmıştır.",
  }
];

const faq: ToolLocaleContent<TipCalculatorUI>['faq'] = [
  {
    question: "Amerika Birleşik Devletleri'nde bahşiş bırakmak zorunlu mu?",
    answer: "Yasal olarak hayır, ancak sosyal olarak zorunludur. Garsonlar asgari ücrete ulaşmak için bahşişlere güvenirler. %18 ile %25 arası bırakılması normaldir.",
  },
  {
    question: "Hangi ülkelerde bahşiş bırakmak saldırganlık kabul edilir?",
    answer: "Genellikle Japonya ve Güney Kore'de. İyi hizmet görevin bir parçası olarak kabul edilir ve ekstra ödül gerektirmez.",
  },
  {
    question: "Hizmet kötüyse bahşiş vermeli miyim?",
    answer: "İsteğe bağlı olduğu ülkelerde (Avrupa, Avustralya), en doğrusu hiçbir şey bırakmamaktır.",
  },
  {
    question: "Bahşiş vergiden önce mi yoksa sonra mı hesaplanır?",
    answer: "Kuzey Amerika'da genellikle ara toplam (vergi öncesi) üzerinden hesaplanır. Avrupa ve Latin Amerika'da her zaman faturanın toplamı üzerinden hesaplanır.",
  },
];

const howTo: ToolLocaleContent<TipCalculatorUI>['howTo'] = [
  {
    name: "Fatura toplamını girin",
    text: "Bahşişi uygulamadan önce faturanızda görünen toplam tutarı yazın.",
  },
  {
    name: "Ülkeyi seçin",
    text: "Kültürel öneriyi ve standart yüzdeyi otomatik olarak yüklemek için varış noktanızı seçin.",
  },
  {
    name: "Ayarlayın ve bölün",
    text: "Eğer birden fazla kişiyseniz, bahşiş dahil her birinin ne kadar ödemesi gerektiğini öğrenmek için kişi sayısını belirtin.",
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY' },
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<TipCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: "Sıkça Sorulan Sorular",
  bibliography: "Kaynaklar ve Referanslar",
  howTo,
  howToTitle: "Hesaplayıcı nasıl kullanılır",
  schemas: [faqSchema, howToSchema, appSchema],
};
