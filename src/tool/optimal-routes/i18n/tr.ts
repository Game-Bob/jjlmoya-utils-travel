import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { OptimalRoutesUI } from '../index';

const slug = 'optimal-rota-hesaplayici-akilli-durak-siralamasi';
const title = 'Optimal Rota Hesaplayıcı | Akıllı Durak Yeniden Sıralama';
const description = 'Teslimat veya seyahat rotalarınızı ücretsiz olarak optimize edin. Aracımız, en kısa ve en verimli yolu bulmak için duraklarınızı otomatik olarak yeniden sıralar.';

const ui: OptimalRoutesUI = {
  title: "Optimal Rotalar",
  sidebar: {
    title: "Rota Planı",
    addPoint: "Durak ekle (haritaya tıkla)",
    pointsList: "Duraklarınız",
    emptyState: "Rotanıza durak eklemek için haritaya tıklayın.",
    optimizeBtn: "Sıralamayı Optimize Et",
    clearBtn: "Tümünü Temizle",
    stats: {
      distance: "Toplam mesafe:",
      time: "Tahmini süre:"
    }
  },
  map: {
    placeholder: "Harita yükleniyor...",
    attribution: "© OpenStreetMap katkıda bulunanlar"
  },
  errors: {
    minPoints: "Bir rota hesaplamak için en az iki nokta gereklidir.",
    calcError: "Optimal rota hesaplanırken hata oluştu. Lütfen tekrar deneyin."
  },
  labels: {
    origin: "Başlangıç",
    destination: "Bitiş",
    stop: "Durak",
    loading: "Hesaplanıyor..."
  }
};

const seo: ToolLocaleContent<OptimalRoutesUI>['seo'] = [
  { type: "title", text: "Akıllı Rota Optimizasyonu", level: 2 },
  { type: "paragraph", html: "Gezgin Satıcı Problemini (TSP) saniyeler içinde çözmek için gelişmiş algoritmalar kullanın. Lojistik, teslimat veya seyahatlerinizde yakıt tasarrufu yapmak için idealdir." },
  { type: "title", text: "Durak Sıralaması Neden Önemlidir?", level: 3 },
  { type: "paragraph", html: "Duraklarınızın yanlış sıralanması seyahat süresini ve yakıt tüketimini önemli ölçüde artırabilir. Optimize edicimiz, gereksiz sapmalardan ve çakışmalardan kaçınarak size en doğrudan yolu göstermek için milyonlarca olasılığı analiz eder." }
];

const faq: ToolLocaleContent<OptimalRoutesUI>['faq'] = [
  { question: "Optimizasyon nasıl çalışır?", answer: "Tüm duraklarınızı analiz ediyoruz ve kat edilen toplam mesafeyi en aza indiren sıralı düzeni belirliyoruz." },
  { question: "Mobilde kullanabilir miyim?", answer: "Evet, araç tamamen duyarlıdır ve sonuçlanan rotayı doğrudan navigasyon uygulamalarında açmanıza olanak tanır." },
  { question: "Durak sayısında bir sınır var mı?", answer: "Ücretsiz sürüm için, günlük teslimatlar veya yolculuklar için mükemmel olan 25 durağa kadar verimli bir şekilde optimize edebilirsiniz." }
];

const howTo: ToolLocaleContent<OptimalRoutesUI>['howTo'] = [
  { name: "Ekle", text: "Başlangıç noktanızı ve ara duraklarınızı sabitlemek için haritaya tıklayın." },
  { name: "Optimize Et", text: "Sistemin durakları verimli bir şekilde yeniden sıralaması için optimizasyon düğmesine basın." },
  { name: "Navigasyon", text: "Önerilen rotayı takip etmek için oluşturulan planı kullanın." }
];

const bibliography: ToolLocaleContent<OptimalRoutesUI>['bibliography'] = [
  { name: "Gezgin Satıcı Problemi (TSP)", url: "https://tr.wikipedia.org/wiki/Gezgin_sat%C4%B1c%C4%B1_problemi" },
  { name: "Rota Optimizasyonu", url: "https://tr.wikipedia.org/wiki/Lojistik" }
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
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<OptimalRoutesUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: "Sıkça Sorulan Sorular",
  bibliography,
  bibliographyTitle: "Kaynaklar ve Referanslar",
  howTo,
  howToTitle: "Nasıl kullanılır",
  schemas: [faqSchema, howToSchema, appSchema],
};
