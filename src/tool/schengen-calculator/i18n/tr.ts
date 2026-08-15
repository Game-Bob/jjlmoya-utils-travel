import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SchengenCalculatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'schengen-kalis-suresi-hesaplayici-90-180';
const title = 'Schengen 90 180 Gün Kalış Süresi Hesaplayıcı';
const description =
  'Avrupa seyahatinizin 90/180 gün kuralına uygunluğunu denetleyin. Kalan yasal kalış günlerinizi hesaplayın ve Schengen bölgesinde vize ihlallerini önleyin.';

const ui: SchengenCalculatorUI = {
  verdictSafeTitle: 'Yasal ve Güvenli Seyahat (Limit Dahilinde)',
  verdictWarningTitle: 'Dikkat: 90 Gün Sınırına Yaklaşıldı',
  verdictOverstayTitle: 'Yasa Dışı Kalış İhlali (Overstay) Tespit Edildi',
  daysRemainingSub: 'Kalan İzin Verilen Gün',
  daysUsedSub: '180 Günlük Dönemde Kullanılan',
  maxStaySub: 'Maksimum Kesintisiz Kalış Süresi',
  fullResetSub: '90 Günün Tamamen Sıfırlanma Tarihi',
  plannerHeading: '1. Hedef Tarihi Denetleyin',
  plannerEntryLabel: 'Giriş Tarihi veya Planlanan Uçuş',
  quickDatesLabel: 'Tarihe Git',
  presetToday: 'Bugün',
  presetPlus7: '+1 Hafta',
  presetPlus14: '+2 Hafta',
  presetPlus30: '+1 Ay',
  tripsHeading: '2. Schengen Seyahat Geçmişi (Geçmiş ve Gelecek)',
  addTripBtn: '+ Seyahat Ekle',
  emptyTripsMsg: 'Henüz seyahat eklenmedi. Schengen bölgesindeki geçmiş veya planlanan konaklamalarınızı girin.',
  colArrival: 'Giriş (Varış)',
  colDeparture: 'Çıkış (Ayrılış)',
  colDestination: 'Ülke / Notlar',
  colDays: 'Gün',
  sampleBtn: 'Örnek Seyahatleri Yükle',
  clearBtn: 'Tümünü Temizle',
  timelineTitle: '180 Günlük Kayan Pencere',
  legendInSchengen: 'Schengen İçi',
  legendOutside: 'Dışarıda',
  legendOverstay: 'Kalış İhlali',
  bannerSafe: '{date} tarihinde {used} kullanmış olacaksınız ({rem} kullanılabilir).',
  bannerWarning: '{date} tarihinde {used} kullanmış olacaksınız (yalnızca {rem} kaldı).',
  bannerOverstay: '{date} tarihinden itibaren yasa dışı kalış ihlali tespit edildi. Planınız sınırı {days} aşıyor.',
  unitDays: 'gün',
  notesPlaceholder: 'ör. Fransa, İspanya',
  sampleNotes1: 'İtalya Gezisi (20 gün)',
  sampleNotes2: 'Almanya ve Avusturya (20 gün)',
  sampleNotesDefault: 'Fransa ve İspanya',
};

const seo: ToolLocaleContent<SchengenCalculatorUI>['seo'] = [
  {
    type: 'title',
    text: 'Schengen 90 180 Kuralı Pratikte Nasıl Çalışır',
    level: 2,
  },
  {
    type: 'summary',
    title: 'Kayan Schengen Pencere Sisteminin Temel İlkeleri',
    items: [
      'AB dışı ülke vatandaşları herhangi bir 180 günlük dönemde en fazla 90 gün kalabilir.',
      '180 günlük pencere her gün bir gün ileri kayar ve geriye dönük 179 günü denetler.',
      'Hem ülkeye giriş günü hem de çıkış günü tam gün olarak hesaba katılır.',
      'Avrupa dan çıkmak, 90 gün kesintisiz dışarıda kalınmadığı sürece süreyi otomatik sıfırlamaz.',
    ],
  },
  {
    type: 'paragraph',
    html: 'Schengen Bölgesi, <em>Schengen Sınırları Yasası (AB Tüzüğü 2016/399)</em> Madde 6(1) uyarınca vizesiz seyahat eden veya C tipi kısa süreli vizeye sahip üçüncü ülke vatandaşları için <strong>herhangi bir 180 günlük zaman diliminde en fazla 90 gün</strong> kalış kuralını sıkı şekilde uygular. Avrupa da bulunduğunuz her gün, sınır görevlileri son 179 gün içinde 29 üye ülkede geçirdiğiniz toplam gün sayısını ve geçerli günü toplar.',
  },
  {
    type: 'title',
    text: 'Temel Göstergeler ve Sınır Standartları',
    level: 2,
  },
  {
    type: 'stats',
    items: [
      {
        value: '90 Gün',
        label: 'Maksimum Toplam Kalış',
      },
      {
        value: '180 Gün',
        label: 'Kayan İnceleme Penceresi',
      },
      {
        value: 'Her İki Gün',
        label: 'Kapsayıcı Sınır Sayımı',
      },
      {
        value: '29 Ülke',
        label: 'Ortak Schengen Alanı',
      },
    ],
  },
  {
    type: 'title',
    text: 'Sabit Takvim Yılı Kotaları ile Kayan Pencerelerin Karşılaştırması',
    level: 2,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Takvim Yılı Yanılgısı',
        description:
          'Birçok yolcu 90 günlük hakkın her 1 Ocak ta veya kısa süreliğine Avrupa dışına çıkıldığında sıfırlandığını düşünür. Bu yanılgı istenmeyen vize ihlallerine ve sınırlarda yüksek para cezalarına yol açar.',
      },
      {
        title: 'Kayan Pencerenin Gerçek İşleyişi',
        description:
          'Schengen de geçirilen her gün kesintisiz bir zaman çizgisine kaydedilir. Zaman ilerledikçe 180 gün öncesinde kalan eski günler pencereden çıkar ve kademeli olarak yeni kalış hakkı tanır.',
      },
    ],
  },
  {
    type: 'title',
    text: 'Tipik Seyahat Profilleri ve Yasal Değerlendirme',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Seyahat Modeli', 'Örnek', 'Yasal Durum', 'Tavsiye'],
    rows: [
      [
        'Tek Seferlik Kesintisiz Kalış',
        'Giriş 1 Haziran, çıkış 29 Ağustos (90 gün)',
        'Yasal',
        'Tam 90. günde çıkmalı ve hakkını yenilemek için 90 gün kesintisiz Schengen dışında kalmalıdır.',
      ],
      [
        'Çoklu Giriş Yapan Seyyah',
        'Aralarında 30 gün boşluk olan üç ayrı 30 günlük seyahat',
        'Yasal',
        'Her seyahat geriye dönük 180 günlük kayan penceresinde ayrı ayrı denetlenmelidir.',
      ],
      [
        'Dönüşümlü Dijital Göçebe',
        '60 gün Schengen, 30 gün dışarıda dönüşümlü',
        'Kritik Overstay Riski',
        '30 günlük mola yalnızca 180 gün önce yapılmış günleri geri kazandırır; sınırda ret riski yüksektir.',
      ],
      [
        'Tam 90 Günlük Sıfırlama',
        'Schengen dışında kesintisiz 90 gün kalış',
        'Tamamen Yenilendi',
        'Bir sonraki girişte 90 günlük tam yasal sürenin kullanılabilir olmasını garanti eder.',
      ],
    ],
  },
  {
    type: 'title',
    text: 'Sınır Kapılarında Sorun Yaşamamak İçin İpuçları',
    level: 2,
  },
  {
    type: 'tip',
    title: 'Güvenlik Marjı Bırakın',
    html: 'Dönüş uçuşunuzu asla tam 90. güne ayarlamayın. İptal edilen bir uçuş veya acil bir sağlık durumu çıkışınızı 91. güne erteleyebilir ve Avrupa Giriş/Çıkış Sistemi (EES) üzerinde otomatik ihlal kaydına neden olabilir.',
  },
  {
    type: 'card',
    title: 'Schengen Dışında Kaldığınızın Kanıtlarını Saklayın',
    html: 'Olası sınır denetimlerinde yokluğunuzu kanıtlamak için Schengen dışı ülkelerdeki (İngiltere, İrlanda, Karadağ, Arnavutluk gibi) biniş kartlarını, otel faturalarını ve pasaport damgalarını saklayın.',
  },
  {
    type: 'title',
    text: 'Avrupa Sınır Terimleri Sözlüğü',
    level: 2,
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'Overstay (Kalış İhlali)',
        definition:
          '180 günlük bir dönemde izin verilen 90 günden fazla Schengen alanında kalmak; para cezası, sınır dışı veya ülkeye giriş yasağı doğurur.',
      },
      {
        term: 'EES (Giriş Çıkış Sistemi)',
        definition:
          'AB üyesi olmayan yolcuların biyometrik verilerini sınırlarda otomatik olarak kaydeden dijital sistem.',
      },
      {
        term: 'Üçüncü Ülke Vatandaşı',
        definition:
          'AB üyesi bir devletin veya EFTA ülkesinin vatandaşı olmayan herhangi bir birey.',
      },
    ],
  },
];

const faq: ToolLocaleContent<SchengenCalculatorUI>['faq'] = [
  {
    question: 'Schengen bölgesinde 90 180 kuralı tam olarak nedir?',
    answer:
      'AB dışı ülke vatandaşlarının 29 üye ülkede uzun dönemli vize olmadan herhangi bir 180 günlük dönemde en fazla 90 gün kalabilmelerine izin veren genel kuraldır.',
  },
  {
    question: 'Avrupa dan çıkınca 90 günlük süre sıfırlanır mı?',
    answer:
      'Hayır. Schengen bölgesinden çıkmak sayacı sıfırlamaz. 180 günlük pencere süreklidir; tam sıfırlama yalnızca Schengen alanı dışında kesintisiz 90 gün geçirildikten sonra gerçekleşir.',
  },
  {
    question: 'Giriş ve çıkış günleri tam gün olarak mı sayılır?',
    answer:
      'Evet. Schengen Sınırlar Yasası Madde 6 gereğince ülkeye giriş yaptığınız gün de ayrıldığınız gün de tam kalış günü olarak hesaplanır.',
  },
  {
    question: 'Bu hesaplamaya hangi ülkeler dahildir?',
    answer:
      '29 ülke dahildir: Almanya, Avusturya, Belçika, Bulgaristan, Çekya, Danimarka, Estonya, Finlandiya, Fransa, Hırvatistan, Hollanda, İspanya, İsveç, İsviçre, İtalya, İzlanda, Letonya, Lihtenştayn, Litvanya, Lüksemburg, Macaristan, Malta, Norveç, Polonya, Portekiz, Romanya, Slovakya, Slovenya ve Yunanistan. Birleşik Krallık ve İrlanda dahil değildir.',
  },
];

const howTo: ToolLocaleContent<SchengenCalculatorUI>['howTo'] = [
  {
    name: 'İnceleme Tarihini Seçin',
    text: 'Kalan yasal günlerinizi öğrenmek istediğiniz yaklaşan uçuş tarihinizi veya bugünü belirtin.',
  },
  {
    name: 'Geçmiş ve Gelecek Seyahatlerinizi Ekleyin',
    text: 'Son aylardaki tüm Schengen konaklamalarınızın giriş ve çıkış tarihlerini girin.',
  },
  {
    name: 'Sürenizi ve Güvenlik Marjınızı İnceleyin',
    text: 'Kalan gün sayacını, maksimum kesintisiz kalış süresini ve tam sıfırlanma tarihini kontrol edin.',
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
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<SchengenCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  howTo,
  howToTitle: 'Schengen kalış süresi nasıl hesaplanır',
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography: bibliographyEntries,
};
