import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SuitcaseChecklistUI } from '../index';

const slug = 'valiz-hazirlama-listesi-olusturucu';
const title = 'Valiz Hazırlama Listesi Oluşturucu Seyahat listenizi oluşturun';
const description = 'Seyahat türü, varış noktası ve süreye göre bagajınızı düzenlemek için en iyi çevrimiçi araç. Seyahat ihtiyaçlarınızı bir daha asla unutmayın.';

const ui: SuitcaseChecklistUI = {
  title: "Paketleme Planlayıcı",
  form: {
    destTitle: "Varış Noktası ve İklim",
    destTypes: [
      { id: "playa", name: "Plaj / Sahil", icon: "mdi:beach" },
      { id: "ciudad", name: "Şehir / Kent", icon: "mdi:city" },
      { id: "montana", name: "Dağ / Kırsal", icon: "mdi:pine-tree" },
      { id: "frio", name: "Soğuk / Kar", icon: "mdi:snowflake" }
    ],
    daysTitle: "Kaç gün?",
    intlTitle: "Uluslararası Seyahat mi?",
    intlLabel: "Evet, sınırları aşıyorum",
    reasonTitle: "Seyahat Amacı",
    reasons: [
      { id: "ocio", name: "Eğlence / Tatil", icon: "mdi:party-popper" },
      { id: "negocios", name: "İş", icon: "mdi:tie" }
    ],
    submitBtn: "İdeal Çantayı Yapılandır"
  },
  results: {
    title: "Hazırlık Listeniz",
    editBtn: "Düzenle",
    printBtn: "PDF Kaydet",
    tipsTitle: "Seyahat İpuçları",
    progressText: "Tamamlandı"
  },
  itemsDb: {
    essentials: {
      id: "essentials",
      title: "Belgeler ve Temel Bilgiler",
      icon: "mdi:passport",
      items: [
        { label: "Kimlik / Pasaport" },
        { label: "Banka kartları" },
        { label: "Nakit para" },
        { label: "Biletler (Uçak/Tren)" },
        { label: "Rezervasyon onayları" },
        { label: "Ev anahtarları" },
        { label: "Uluslararası belgeler", dynamicId: "item-internacional" }
      ]
    },
    technology: {
      id: "technology",
      title: "Teknoloji",
      icon: "mdi:laptop",
      items: [
        { label: "Cep telefonu" },
        { label: "Telefon şarj cihazı" },
        { label: "Kulaklık" },
        { label: "Taşınabilir güç kaynağı (Power bank)" },
        { label: "Güç adaptörü", dynamicId: "item-adaptador" }
      ]
    },
    toiletries: {
      id: "toiletries",
      title: "Kişisel Bakım",
      icon: "mdi:toothbrush",
      items: [
        { label: "Diş fırçası ve macunu" },
        { label: "Deodorant" },
        { label: "Jel ve şampuan" },
        { label: "Tarak / Fırça" },
        { label: "Mini ilk yardım kiti" },
        { label: "Kişisel ilaçlar" }
      ]
    },
    clothing_base: {
      id: "clothing_base",
      title: "Günlük Kıyafetler",
      icon: "mdi:tshirt-crew",
      items: [
        { label: "İç çamaşırı", dynamicId: "qty-ropa-interior" },
        { label: "Tişörtler / Üstler", dynamicId: "qty-camisetas" },
        { label: "Pantolonlar / Altlar", dynamicId: "qty-pantalones" },
        { label: "Çoraplar", dynamicId: "qty-calcetines" },
        { label: "Pijama" },
        { label: "Hafif ceket" },
        { label: "Rahat günlük ayakkabılar" }
      ]
    }
  },
  specificItems: {
    destType: {
      playa: {
        id: "dest-playa",
        title: "Sahil İçin",
        icon: "mdi:beach",
        items: [
          { label: "Mayo / Bikini" },
          { label: "Plaj havlusu" },
          { label: "Güneş kremi" },
          { label: "Güneş gözlüğü" },
          { label: "Terlik" },
          { label: "Şapka veya Kep" }
        ]
      },
      ciudad: {
        id: "dest-ciudad",
        title: "Şehir",
        icon: "mdi:city",
        items: [
          { label: "Yürüyüş ayakkabısı" },
          { label: "Küçük güvenli sırt çantası" },
          { label: "Kompakt şemsiye" },
          { label: "Şehir rehberi" }
        ]
      },
      montana: {
        id: "dest-montana",
        title: "Dağ",
        icon: "mdi:pine-tree",
        items: [
          { label: "Yürüyüş botları" },
          { label: "Rüzgarlık" },
          { label: "Yürüyüş pantolonu" },
          { label: "Su şişesi" },
          { label: "Dağ sırt çantası" }
        ]
      },
      frio: {
        id: "dest-frio",
        title: "Soğuk İklim",
        icon: "mdi:snowflake",
        items: [
          { label: "Ağır palto / Mont" },
          { label: "Şapka ve eldiven" },
          { label: "Kışlık ayakkabı" },
          { label: "Termal üstler" },
          { label: "Atkı" }
        ]
      }
    },
    travelType: {
      negocios: {
        id: "travel-negocios",
        title: "İş",
        icon: "mdi:tie",
        items: [
          { label: "Takım elbise / Resmi kıyafet" },
          { label: "Resmi gömlekler" },
          { label: "Resmi ayakkabılar" },
          { label: "Dizüstü bilgisayar" },
          { label: "Dizüstü şarj cihazı" },
          { label: "İş belgeleri" }
        ]
      },
      ocio: {
        id: "travel-ocio",
        title: "Eğlence",
        icon: "mdi:camera",
        items: [
          { label: "Gece kıyafetleri" },
          { label: "Kamera (Opsiyonel)" },
          { label: "Kitap / Eğlence" }
        ]
      }
    }
  },
  tips: {
    military: "Kıyafetleri 'askeri usul' rulo yaparak katlamak kırışıklıkları önler ve yerden tasarruf sağlar.",
    longTravel: "Bir haftadan uzun süreliğine gidiyorsunuz. Yolun yarısında temel eşyalarınızı yıkamayı planlayın.",
    intlPassport: "Uluslararası Seyahat: Bugün pasaportunuzun en az 6 ay geçerli olup olmadığını kontrol edin.",
    intlBank: "Gerekli vizeleri veya bankanızın yurt dışı ücretlerini kontrol edin.",
    intlAdapter: "Gideceğiniz yerin prizleri farklıysa üniversal adaptörünüzü unutmayın!",
    coldLayers: "Soğuk hava için kat kat giyinin: termal alt, yalıtım ve su geçirmez dış katman.",
    coldHeavyOn: "Kabin alanından tasarruf etmek için en hacimli/ağır eşyaları uçakta üzerinize giyin.",
    beachWet: "Birden fazla mayo paketleyin; nem bir gecede kurumasını engelleyebilir."
  }
};

const seo: ToolLocaleContent<SuitcaseChecklistUI>['seo'] = [
  { type: "title", text: "Valiz Hazırlama Listesi Oluşturucu: İdeal Seyahat Arkadaşınız", level: 2 },
  { type: "paragraph", html: "Valiz hazırlamak genellikle bir seyahat öncesindeki en stresli anlardan biridir. Önemli bir şeyi unutma korkusu, varış noktasındaki hava durumuyla ilgili şüpheler veya ne kadar bagaj getireceğiniz konusundaki belirsizlik, uzun zamandır beklediğiniz tatilden önceki günlerinizi gölgeleyebilir. İşte burada bir <strong>valiz hazırlama listesi oluşturucu</strong> en iyi yardımcınız olur." },
  {
    type: "summary",
    title: "Liste oluşturucumuzu kullanmanın faydaları",
    items: [
      "Varış noktanızın iklimine (plaj, dağ, şehir veya kar) uyarlanmış mutlak kişiselleştirme.",
      "Kaçamak sürenize bağlı olarak kıyafetlerin otomatik hesaplanması.",
      "İşaretleyebileceğiniz etkileşimli bir kontrol listesiyle lojistik stresin büyük ölçüde azaltılması.",
      "Bagaj alanı optimizasyonu, 'her ihtimale karşı' sendromundan kaçınma."
    ]
  },
  { type: "title", text: "Bagaj planlaması neden temeldir?", level: 3 },
  { type: "paragraph", html: "Seyahat dönüştürücü bir deneyimdir ancak kötü planlama gereksiz baş ağrılarına neden olabilir. Akıllı aracımızı kullanarak, normalde saatlerce hesaplama ve ezberleme gerektiren bir süreci otomatikleştirirsiniz. Verimli organizasyon, her başarılı maceranın temelidir." }
];

const faq: ToolLocaleContent<SuitcaseChecklistUI>['faq'] = [
  { question: "Oluşturulan listeyi kaydedebilir miyim?", answer: "Listenizdeki öğeleri işaretleyebilir ve işaretini kaldırabilir, ayrıca yazdırmak veya cihazınıza PDF dosyası olarak kaydetmek için düğmeyi kullanabilirsiniz." },
  { question: "Kıyafet miktarları nasıl hesaplanıyor?", answer: "Aracımız, seçilen seyahat süresine göre kıyafet takımlarını tahmin ederek hafif seyahat etmeyi ve bagajınızı optimize etmeyi teşvik eder." },
  { question: "Soğuk hava ve kar için işe yarıyor mu?", answer: "Evet, listenin bu koşullar için vazgeçilmez öğeleri otomatik olarak içermesi için soğuk iklim varış noktasını seçebilirsiniz." },
  { question: "Araç ücretsiz mi?", answer: "Evet, valiz hazırlama listesi oluşturucumuz %100 ücretsizdir ve kayıt veya ek uygulama indirme gerektirmez." }
];

const howTo: ToolLocaleContent<SuitcaseChecklistUI>['howTo'] = [
  { name: "Seyahatinizi tanımlayın", text: "Kaçamağınızın iklimini, nedenini ve süresini seçin." },
  { name: "Liste oluşturun", text: "Düğmeye basın ve kozmetikten teknolojiye kadar tüm gerekli eşyaları anında alın." },
  { name: "Çantanızı hazırlayın", text: "Eşyaları paketledikçe işaretleyin, böylece temel hiçbir şeyi unutmazsınız." }
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
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<SuitcaseChecklistUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: "Sıkça Sorulan Sorular",
  bibliography: "Kaynaklar ve Referanslar",
  howTo,
  howToTitle: "Valiziniz nasıl hazırlanır",
  schemas: [faqSchema, howToSchema, appSchema],
};
