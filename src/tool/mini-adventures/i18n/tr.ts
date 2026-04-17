import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MiniAdventuresUI } from '../index';

const slug = 'mini-macera-tahmini-siradanliktan-kurtulun';
const title = 'Mini Macera Tahmini: Rutinden Kurtulun';
const description = 'Monotonluğu kırmak ve çevrenizi keşfetmek için rastgele günlük görev oluşturucu.';

const ui: MiniAdventuresUI = {
  title: "Mini Maceralar",
  homeTitle: "Mini Maceralar",
  homeDesc: "Bugünü biraz farklı kılın. Keşfetmeye hazır mısınız?",
  generateBtn: "MACERA OLUŞTUR",
  anotherBtn: "BAŞKA",
  doneBtn: "TAMAMLANDI",
  shareBtn: "PAYLAŞ",
  categories: {
    exploration: { id: "exploration", label: "Keşif", icon: "mdi:map-marker-path", color: "#10b981", styling: "border-emerald-500/30 text-emerald-400 bg-emerald-500/5" },
    food: { id: "food", label: "Gastronomi", icon: "mdi:food-variant", color: "#f59e0b", styling: "border-amber-500/30 text-amber-400 bg-amber-500/5" },
    learning: { id: "learning", label: "Öğrenme", icon: "mdi:school", color: "#6366f1", styling: "border-indigo-500/30 text-indigo-400 bg-indigo-500/5" },
    creativity: { id: "creativity", label: "Yaratıcılık", icon: "mdi:palette", color: "#ec4899", styling: "border-pink-500/30 text-pink-400 bg-pink-500/5" },
    social: { id: "social", label: "Sosyal", icon: "mdi:account-group", color: "#0ea5e9", styling: "border-sky-500/30 text-sky-400 bg-sky-500/5" },
    observation: { id: "observation", label: "Gözlem", icon: "mdi:eye", color: "#8b5cf6", styling: "border-violet-500/30 text-violet-400 bg-violet-500/5" },
    wellness: { id: "wellness", label: "Esenlik", icon: "mdi:heart-pulse", color: "#f43f5e", styling: "border-rose-500/30 text-rose-400 bg-rose-500/5" }
  },
  adventures: [
    { id: 1, text: "Daha önce hiç girmediğiniz bir yerde kahve veya içecek deneyin.", categoryId: "food" },
    { id: 2, text: "Evden çıkarken normalde almadığınız bir yöne doğru 10 dakika yürüyün.", categoryId: "exploration" },
    { id: 3, text: "Bilmediğiniz üç farklı dilde 'Teşekkür ederim' demeyi öğrenin.", categoryId: "learning" },
    { id: 4, text: "Sokağınızda gözünüze çarpan bir mimari detayın fotoğrafını çekin.", categoryId: "creativity" },
    { id: 5, text: "Daha önce hiç denemediğiniz bir meyve satın alın ve tadını keşfedin.", categoryId: "food" },
    { id: 6, text: "Mahallenizde bir anıt levhası arayın ve anlattığı hikayeyi okuyun.", categoryId: "exploration" },
    { id: 7, text: "Önünüzdeki bir şeyi 60 saniyeden kısa sürede çizin.", categoryId: "creativity" },
    { id: 8, text: "Normalde konuşmadığınız bir komşunuza selam verin.", categoryId: "social" },
    { id: 9, text: "Normalde hoşlanmadığınız bir müzik türünü 5 dakika dinleyin.", categoryId: "learning" },
    { id: 10, text: "Bir antikacı veya ikinci el dükkanını ziyaret edin ve en tuhaf nesneyi bulun.", categoryId: "exploration" },
    { id: 11, text: "Bir parkta oturun ve kaç farklı kuş türü gördüğünüzü sayın.", categoryId: "observation" },
    { id: 12, text: "Olumlu bir not yazın ve bunu halk kütüphanesindeki bir kitabın içine bırakın.", categoryId: "social" },
    { id: 13, text: "Bugün minnettar olduğunuz 5 şeyin listesini yapın.", categoryId: "wellness" },
    { id: 14, text: "Sadece kilerinizde bulunan malzemeleri kullanarak yeni bir tarif pişirmeyi deneyin.", categoryId: "food" },
    { id: 15, text: "Herhangi bir ekrana (mobil, TV, PC) bakmadan 20 dakika geçirin.", categoryId: "wellness" },
    { id: 16, text: "Evinizin yakınında bir ağaç bulun ve türünü teşhis etmeye çalışın.", categoryId: "learning" },
    { id: 300, text: "Bu hafta sonu yakındaki bir şehri ziyaret etmek için bir plan yapın.", categoryId: "exploration" },
    { id: 301, text: "Elin parmaklarının Latince'de ne dendiğini öğrenin.", categoryId: "learning" },
    { id: 302, text: "Bu cümledeki her kelime için bir kafiye bulun.", categoryId: "creativity" },
    { id: 303, text: "Çok uzun zaman önce olan bir şey için bir arkadaşınıza teşekkür edin.", categoryId: "social" }
  ],
  achievements: [
    { id: "g1", milestone: 1, label: "Uyanış", categoryId: "global", icon: "mdi:footprint", description: "İlk mini maceranız tamamlandı." },
    { id: "g10", milestone: 10, label: "Merak Alışkanlığı", categoryId: "global", icon: "mdi:sparkles", description: "Rutini 10 kez kırdınız." },
    { id: "g50", milestone: 50, label: "Gün Koleksiyoncusu", categoryId: "global", icon: "mdi:calendar-star", description: "Sıradanı sıra dışı kıldığınız 50 gün." },
    { id: "g150", milestone: 150, label: "Şansın Efendisi", categoryId: "global", icon: "mdi:trophy-variant", description: "Macera kataloğunun yarısını tamamladınız." },
    { id: "g300", milestone: 300, label: "Özgür Ruh", categoryId: "global", icon: "mdi:ghost", description: "Günlük macera sanatında ustalaştınız." },
    { id: "e3", milestone: 3, label: "Evdeki Turist", categoryId: "exploration", icon: "mdi:map-marker-outline", description: "3 yeni köşe keşfedildi." },
    { id: "e15", milestone: 15, label: "Şehir Kartografı", categoryId: "exploration", icon: "mdi:map-check", description: "Posta kodunuzu herkesten iyi biliyorsunuz." },
    { id: "f3", milestone: 3, label: "Huzursuz Damak", categoryId: "food", icon: "mdi:silverware-clean", description: "Bilmediğiniz 3 tat denediniz." },
    { id: "f15", milestone: 15, label: "Gurme Simyacı", categoryId: "food", icon: "mdi:silverware-variant", description: "Kileriniz dünyaya açılan bir pasaporttur." },
    { id: "l3", milestone: 3, label: "Her Şeyin Çırağı", categoryId: "learning", icon: "mdi:book-open-page-variant", description: "Dünyadan 3 ilginç bilgi öğrendiniz." },
    { id: "l15", milestone: 15, label: "Yürüyen Kütüphane", categoryId: "learning", icon: "mdi:head-cog", description: "Merakınız sınır tanımıyor." },
    { id: "c3", milestone: 3, label: "Çizen El", categoryId: "creativity", icon: "mdi:palette-outline", description: "3 küçük görevde izinizi bıraktınız." },
    { id: "c15", milestone: 15, label: "Yerel Avangart", categoryId: "creativity", icon: "mdi:palette-swatch", description: "Başkalarının sadece sokak gördüğü yerde siz sanat görüyorsunuz." },
    { id: "s3", milestone: 3, label: "İnsan Köprüsü", categoryId: "social", icon: "mdi:account-voice", description: "Bugün 3 kişiyle bağlantı kurdunuz." },
    { id: "s15", milestone: 15, label: "Sokağın Ruhu", categoryId: "social", icon: "mdi:account-group", description: "Yabancıları hikayelere dönüştürdünüz." },
    { id: "o3", milestone: 3, label: "Detay Odaklı", categoryId: "observation", icon: "mdi:magnify", description: "Başkalarının fark etmediği 3 şey gördünüz." },
    { id: "o15", milestone: 15, label: "Yönetmen Gözü", categoryId: "observation", icon: "mdi:telescope", description: "Bakışınız harika bir filmin merceğidir." },
    { id: "w3", milestone: 3, label: "Farkındalık Molası", categoryId: "wellness", icon: "mdi:leaf", description: "Zihinsel huzurunuz için 3 an ayırdınız." },
    { id: "w15", milestone: 15, label: "Tam Denge", categoryId: "wellness", icon: "mdi:spa", description: "Vücudunuz ve zihniniz size teşekkür ediyor." }
  ],
  stats: {
    adventures: "Maceralar",
    badges: "Rozetler",
    progress: "Gelişiminiz",
    trophies: "Kupa Koleksiyonu"
  },
  shareTemplate: "Yeni bir Mini Macera aldım!\n\n\"{text}\"\n\nCesaretin var mı? Seninkini burada oluştur: {url}"
};

const seo: ToolLocaleContent<MiniAdventuresUI>['seo'] = [
  { type: "title", text: "Mini Maceralar: Gündelik Yaşamın Sanatı", level: 2 },
  { type: "paragraph", html: "Mikro maceraların beyninizi nasıl yeniden yapılandırabileceğini, rutinle nasıl savaşabileceğini ve doğuştan gelen merakınızı nasıl uyandırabileceğini keşfedin. Rutin yaratıcılığın düşmanıdır. Günlük hayatımıza küçük varyasyonlar getirerek beynimizi yeni nöral bağlantılar kurmaya zorlarız." },
  { type: "title", text: "Eylem Halinde Nöroplastisite", level: 3 },
  { type: "paragraph", html: "Rutin yaratıcılığın düşmanıdır. Yeni bir tadı denemek veya bilinmeyen bir sokakta yürümek gibi günlük hayatımıza küçük varyasyonlar getirerek beynimizi yeni nöral bağlantılar kurmaya zorlarız. Bu mikro maceralar, zihni çevik tutan ve yeni olasılıklara açık kılan bir zihinsel spor salonu görevi görür." },
  { type: "title", text: "Duygusal Esenlik", level: 3 },
  { type: "paragraph", html: "Durağanlık hissi genellikle mutlak öngörülebilirlikten kaynaklanır. Bir macera oluşturucunun kontrollü rastgeleliği, dopamin salgılayan ve ruh halini doğal olarak iyileştiren 'pozitif sürpriz' unsurunu tanıtır. Keşfetmenin heyecanını hissetmek için okyanus ötesi bir seyahate ihtiyacınız yok." },
  { type: "title", text: "Zaten bildiğiniz yeri keşfedin: Yerel Felsefe", level: 2 },
  { type: "paragraph", html: "Fark edilmeyen hikayeler ve detaylarla çevrili yaşıyoruz. Bu tahminin amacı, gözünüzü sıradandaki sıra dışılığı görmesi için eğitmektir. Mükemmel anı aramayın; olası anı arayın." },
  {
    type: "grid",
    columns: 2
  },
  { type: "card", icon: "mdi:clock-fast", title: "Bahane Yok", html: "15 dakikadan az süren ve sıfır lira gerektiren maceralar. Zaman merak için bir engel değildir." },
  { type: "card", icon: "mdi:lock-outline", title: "Tam Gizlilik", html: "Kaydolmanıza veya verilerinizi paylaşmanıza gerek yok. İlerlemeniz ve tamamlanan maceralarınız yalnızca cihazınıza kaydedilir." },
  { type: "card", icon: "mdi:share-variant", title: "Sağlıklı Virallik", html: "Sürekli sosyal medya karşılaştırmalarını beslemek yerine başkalarına kendi balonlarından çıkmaları için ilham veren zorlukları paylaşın." },
  { type: "card", icon: "mdi:trophy-outline", title: "Oyunlaştırma", html: "Tamamlanan her zorluk kategorisi için özel rozetler toplayın." }
];

const faq: ToolLocaleContent<MiniAdventuresUI>['faq'] = [
  { question: "Mikro macera nedir?", answer: "Kısa, yerel, ucuz ve basit bir maceradır. (Alastair Humphreys tarafından popüler hale getirilen) bu terim, heyecan verici deneyimler yaşamak için dünyanın öbür ucuna gitmenize gerek olmadığını göstermeyi amaçlar." },
  { question: "bu oluşturucu ne işe yarar?", answer: "Analiz felciyle savaşmaya yarar. Bazen farklı bir şey yapmak isteriz ama ne yapacağımızı bilemeyiz. Bu simülatör sizin için rastgele bir zorluk seçerek karar verme zihinsel yükünü ortadan kaldırır." },
  { question: "Maceralarımı kaydetmem gerekiyor mu?", answer: "Hayır. Bu tam bir gizlilik aracıdır. Zorluklar tarayıcınızda rastgele oluşturulur ve ne yaptığınıza veya nereye gittiğinize dair hiçbir kayıt tutmayız." },
  { question: "Yeni maceralar önerebilir miyim?", answer: "Tabii ki! Bu aracın kodu açıktır. Fazla bütçe veya zaman gerektirmeyen eğlenceli zorluk fikirleriniz varsa, bunları GitHub'daki depo aracılığıyla önerebilirsiniz." }
];

const bibliography: ToolLocaleContent<MiniAdventuresUI>['bibliography'] = [
  { name: "Alastair Humphreys: Microadventures", url: "https://alastairhumphreys.com/blog/microadventures-3/" },
  { name: "Rob Walker: The Art of Noticing", url: "https://www.goodreads.com/es/book/show/41552704-the-art-of-noticing" }
];

const howTo: ToolLocaleContent<MiniAdventuresUI>['howTo'] = [
  { name: "Oluştur", text: "Rastgele bir görev almak için oluştur düğmesine basın." },
  { name: "Yap", text: "Görevi gün bitmeden tamamlamaya çalışın." },
  { name: "Tamamla", text: "Rozetler ve ilerleme kazanmak için görevi yapıldı olarak işaretleyin." }
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
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<MiniAdventuresUI> = {
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
  howToTitle: "Nasıl çalışır",
  schemas: [faqSchema, howToSchema, appSchema],
};
