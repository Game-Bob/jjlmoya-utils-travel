import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MiniAdventuresUI } from '../index';

const slug = 'generatore-mini-avventure';
const title = 'Generatore di Mini Avventure: Esci dalla Routine';
const description = 'Generatore casuale di sfide quotidiane per rompere la monotonia ed esplorare ciò che ti circonda.';

const ui: MiniAdventuresUI = {
  title: "Mini Avventure",
  homeTitle: "Mini Avventure",
  homeDesc: "Rendi oggi un po' diverso dal solito. Sei pronto a esplorare?",
  generateBtn: "GENERA AVVENTURA",
  anotherBtn: "UN'ALTRA",
  doneBtn: "FATTO",
  shareBtn: "CONDIVIDI",
  categories: {
    exploration: { id: "exploration", label: "Esplorazione", icon: "mdi:map-marker-path", color: "#10b981", styling: "border-emerald-500/30 text-emerald-400 bg-emerald-500/5" },
    food: { id: "food", label: "Gastronomia", icon: "mdi:food-variant", color: "#f59e0b", styling: "border-amber-500/30 text-amber-400 bg-amber-500/5" },
    learning: { id: "learning", label: "Apprendimento", icon: "mdi:school", color: "#6366f1", styling: "border-indigo-500/30 text-indigo-400 bg-indigo-500/5" },
    creativity: { id: "creativity", label: "Creatività", icon: "mdi:palette", color: "#ec4899", styling: "border-pink-500/30 text-pink-400 bg-pink-500/5" },
    social: { id: "social", label: "Sociale", icon: "mdi:account-group", color: "#0ea5e9", styling: "border-sky-500/30 text-sky-400 bg-sky-500/5" },
    observation: { id: "observation", label: "Osservazione", icon: "mdi:eye", color: "#8b5cf6", styling: "border-violet-500/30 text-violet-400 bg-violet-500/5" },
    wellness: { id: "wellness", label: "Benessere", icon: "mdi:heart-pulse", color: "#f43f5e", styling: "border-rose-500/30 text-rose-400 bg-rose-500/5" }
  },
  adventures: [
    { id: 1, text: "Prova un caffè o una bibita in un posto dove non sei mai entrato prima.", categoryId: "food" },
    { id: 2, text: "Cammina per 10 minuti in una direzione che non prendi abitualmente quando esci di casa.", categoryId: "exploration" },
    { id: 3, text: "Impara a dire 'Grazie' in tre lingue diverse che non conosci.", categoryId: "learning" },
    { id: 4, text: "Scatta una foto a un dettaglio architettonico che attira la tua attenzione nella tua via.", categoryId: "creativity" },
    { id: 5, text: "Compra un frutto che non hai mai provato e scoprine il sapore.", categoryId: "food" },
    { id: 6, text: "Cerca una targa commemorativa nel tuo quartiere e leggi la storia che racconta.", categoryId: "exploration" },
    { id: 7, text: "Disegna qualcosa che hai davanti a te in meno di 60 secondi.", categoryId: "creativity" },
    { id: 8, text: "Saluta un vicino con cui normalmente non parli.", categoryId: "social" },
    { id: 9, text: "Ascolta un genere musicale che solitamente non ti piace per 5 minuti.", categoryId: "learning" },
    { id: 10, text: "Visita un negozio di antiquariato o di seconda mano e trova l'oggetto più strano.", categoryId: "exploration" },
    { id: 11, text: "Siediti in un parco e conta quanti tipi diversi di uccelli vedi.", categoryId: "observation" },
    { id: 12, text: "Scrivi un biglietto positivo e lascialo dentro un libro in una biblioteca pubblica.", categoryId: "social" },
    { id: 13, text: "Fai una lista di 5 cose per cui sei grato oggi.", categoryId: "wellness" },
    { id: 14, text: "Prova a cucinare una nuova ricetta usando solo quello che hai in dispensa.", categoryId: "food" },
    { id: 15, text: "Passa 20 minuti senza guardare alcuno schermo (cellulare, TV, PC).", categoryId: "wellness" },
    { id: 16, text: "Trova un albero vicino a casa tua e prova a identificarne la specie.", categoryId: "learning" },
    { id: 300, text: "Fai un piano per visitare un paese vicino questo fine settimana.", categoryId: "exploration" },
    { id: 301, text: "Impara come si chiamano le dita della mano in latino.", categoryId: "learning" },
    { id: 302, text: "Trova una rima per ogni parola di questa frase.", categoryId: "creativity" },
    { id: 303, text: "Ringrazia un amico per qualcosa che è successo molto tempo fa.", categoryId: "social" }
  ],
  achievements: [
    { id: "g1", milestone: 1, label: "Il Risveglio", categoryId: "global", icon: "mdi:footprint", description: "La tua prima mini avventura completata." },
    { id: "g10", milestone: 10, label: "Abitudine allo Stupore", categoryId: "global", icon: "mdi:sparkles", description: "Hai rotto la routine 10 volte." },
    { id: "g50", milestone: 50, label: "Collezionista di Giorni", categoryId: "global", icon: "mdi:calendar-star", description: "50 giorni passati a rendere lo straordinario ordinario." },
    { id: "g150", milestone: 150, label: "Maestro del Caso", categoryId: "global", icon: "mdi:trophy-variant", description: "Hai completato metà del catalogo delle avventure." },
    { id: "g300", milestone: 300, label: "Spirito Libero", categoryId: "global", icon: "mdi:ghost", description: "Hai imparato l'arte dell'avventura quotidiana." },
    { id: "e3", milestone: 3, label: "Turista a Casa", categoryId: "exploration", icon: "mdi:map-marker-outline", description: "3 nuovi angoli scoperti." },
    { id: "e15", milestone: 15, label: "Cartografo Urbano", categoryId: "exploration", icon: "mdi:map-check", description: "Conosci il tuo CAP meglio di chiunque altro." },
    { id: "f3", milestone: 3, label: "Palato Inquieto", categoryId: "food", icon: "mdi:silverware-clean", description: "Hai provato 3 sapori che non conoscevi." },
    { id: "f15", milestone: 15, label: "Alchimista Gourmet", categoryId: "food", icon: "mdi:silverware-variant", description: "La tua dispensa è un passaporto per il mondo." },
    { id: "l3", milestone: 3, label: "Apprendista di Tutto", categoryId: "learning", icon: "mdi:book-open-page-variant", description: "Hai imparato 3 curiosità dal mondo." },
    { id: "l15", milestone: 15, label: "Biblioteca Vivente", categoryId: "learning", icon: "mdi:head-cog", description: "La tua curiosità non ha confini." },
    { id: "c3", milestone: 3, label: "Mano da Disegno", categoryId: "creativity", icon: "mdi:palette-outline", description: "Hai lasciato il segno in 3 piccole sfide." },
    { id: "c15", milestone: 15, label: "Avanguardia Locale", categoryId: "creativity", icon: "mdi:palette-swatch", description: "Vedi l'arte dove gli altri vedono solo la strada." },
    { id: "s3", milestone: 3, label: "Ponte Umano", categoryId: "social", icon: "mdi:account-voice", description: "Oggi ti sei connesso con 3 persone." },
    { id: "s15", milestone: 15, label: "Anima della Strada", categoryId: "social", icon: "mdi:account-group", description: "Hai trasformato sconosciuti in storie." },
    { id: "o3", milestone: 3, label: "Attento ai Dettagli", categoryId: "observation", icon: "mdi:magnify", description: "Hai visto 3 cose che nessun altro nota." },
    { id: "o15", milestone: 15, label: "Occhio da Regista", categoryId: "observation", icon: "mdi:telescope", description: "Il tuo sguardo è l'obiettivo di un grande film." },
    { id: "w3", milestone: 3, label: "Pausa Consapevole", categoryId: "wellness", icon: "mdi:leaf", description: "Hai dedicato 3 momenti alla tua pace mentale." },
    { id: "w15", milestone: 15, label: "Equilibrio Totale", categoryId: "wellness", icon: "mdi:spa", description: "Il tuo corpo e la tua mente ti ringraziano." }
  ],
  stats: {
    adventures: "Avventure",
    badges: "Distintivi",
    progress: "Il Tuo Progresso",
    trophies: "Collezione Trofei"
  },
  shareTemplate: "Ho appena ottenuto una Mini Avventura!\n\n\"{text}\"\n\nTi va di provare? Genera la tua qui: {url}"
};

const seo: ToolLocaleContent<MiniAdventuresUI>['seo'] = [
  { type: "title", text: "Mini Avventure: L'Arte della Quotidianità", level: 2 },
  { type: "paragraph", html: "Scopri come le micro-avventure possono ricablare il tuo cervello, combattere la routine e risvegliare la tua curiosità innata. La routine è il nemico della creatività. Introducendo piccole variazioni nella nostra vita quotidiana, costringiamo il nostro cervello a forgiare nuove connessioni neurali." },
  { type: "title", text: "Neuroplasticità in Azione", level: 3 },
  { type: "paragraph", html: "La routine è il nemico della creatività. Introducendo piccole variazioni nella nostra vita quotidiana — come provare un nuovo sapore o camminare lungo una strada sconosciuta — costringiamo il nostro cervello a forgiare nuove connessioni neurali. Queste micro-avventure agiscono come una palestra mentale che mantiene la mente agile e aperta a nuove possibilità." },
  { type: "title", text: "Benessere Emotivo", level: 3 },
  { type: "paragraph", html: "La sensazione di ristagno deriva spesso dalla prevedibilità assoluta. La casualità controllata di un generatore di avventure introduce l'elemento della 'sorpresa positiva', rilasciando dopamina e migliorando l'umore in modo naturale. Non hai bisogno di un viaggio transoceanico per sentire l'emozione della scoperta." },
  { type: "title", text: "Esplora ciò che già conosci: Filosofia Locale", level: 2 },
  { type: "paragraph", html: "Viviamo circondati da storie e dettagli che passano inosservati. L'obiettivo di questa previsione è allenare il tuo occhio a vedere lo straordinario nell'ordinario. Non cercare il momento perfetto; cerca il momento possibile." },
  {
    type: "grid",
    columns: 2
  },
  { type: "card", icon: "mdi:clock-fast", title: "Nessuna Scusa", html: "Avventure che richiedono meno di 15 minuti e zero euro. Il tempo non è una barriera alla curiosità." },
  { type: "card", icon: "mdi:lock-outline", title: "Privacy Totale", html: "Non hai bisogno di registrarti o condividere i tuoi dati. I tuoi progressi e le avventure completate sono salvati solo sul tuo dispositivo." },
  { type: "card", icon: "mdi:share-variant", title: "Viralità Sana", html: "Condividi sfide che ispirano gli altri a uscire dalla propria bolla, invece di alimentare il costante confronto sui social media." },
  { type: "card", icon: "mdi:trophy-outline", title: "Gamification", html: "Colleziona distintivi esclusivi per ogni categoria di sfida completata." }
];

const faq: ToolLocaleContent<MiniAdventuresUI>['faq'] = [
  { question: "Cos'è una micro-avventura?", answer: "È un'avventura breve, locale, economica e semplice. Il termine (reso popolare da Alastair Humphreys) cerca di dimostrare che non è necessario andare dall'altra parte del mondo per vivere esperienze emozionanti." },
  { question: "A cosa serve questo generatore?", answer: "Serve a combattere la paralisi da analisi. A volte vogliamo fare qualcosa di diverso ma non sappiamo cosa. Questo simulatore sceglie una sfida casuale per te, togliendo il carico mentale di dover decidere." },
  { question: "Devo registrare le mie avventure?", answer: "No. Questo è uno strumento di privacy totale. Le sfide vengono generate casualmente nel tuo browser e non salviamo alcun tipo di record di ciò che fai o di dove vai." },
  { question: "Posso proporre nuove avventure?", answer: "Certamente! Il codice di questo strumento è aperto. Se hai idee per sfide divertenti che non richiedono molto budget o tempo, puoi suggerirle attraverso il repository su GitHub." }
];

const bibliography: ToolLocaleContent<MiniAdventuresUI>['bibliography'] = [
  { name: "Alastair Humphreys: Microadventures", url: "https://alastairhumphreys.com/blog/microadventures-3/" },
  { name: "Rob Walker: The Art of Noticing", url: "https://www.goodreads.com/es/book/show/41552704-the-art-of-noticing" }
];

const howTo: ToolLocaleContent<MiniAdventuresUI>['howTo'] = [
  { name: "Genera", text: "Premi il pulsante genera per ricevere una sfida casuale." },
  { name: "Falla", text: "Cerca di completare la sfida prima della fine della giornata." },
  { name: "Completa", text: "Segna la sfida come fatta per guadagnare distintivi e progredire." }
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
  inLanguage: 'it',
};

export const content: ToolLocaleContent<MiniAdventuresUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: "Domande Frequenti",
  bibliography,
  bibliographyTitle: "Fonti e Riferimenti",
  howTo,
  howToTitle: "Come funziona",
  schemas: [faqSchema, howToSchema, appSchema],
};
