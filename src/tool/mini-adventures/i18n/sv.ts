import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MiniAdventuresUI } from '../index';

const slug = 'mini-aventyrs-generator-bryt-rutinen';
const title = 'Mini äventyrsgenerator : Bryt vardagslunken';
const description = 'Slumpmässig generator för dagliga utmaningar för att bryta monotonin och utforska din omgivning.';

const ui: MiniAdventuresUI = {
  title: "Mini äventyr",
  homeTitle: "Mini-äventyr",
  homeDesc: "Gör dagen idag lite annorlunda. Är du redo att utforska?",
  generateBtn: "GENERERA ÄVENTYR",
  anotherBtn: "ETT TILL",
  doneBtn: "KLART",
  shareBtn: "DELA",
  categories: {
    exploration: { id: "exploration", label: "Utforskning", icon: "mdi:map-marker-path", color: "#10b981", styling: "border-emerald-500/30 text-emerald-400 bg-emerald-500/5" },
    food: { id: "food", label: "Gastronomi", icon: "mdi:food-variant", color: "#f59e0b", styling: "border-amber-500/30 text-amber-400 bg-amber-500/5" },
    learning: { id: "learning", label: "Lärande", icon: "mdi:school", color: "#6366f1", styling: "border-indigo-500/30 text-indigo-400 bg-indigo-500/5" },
    creativity: { id: "creativity", label: "Kreativitet", icon: "mdi:palette", color: "#ec4899", styling: "border-pink-500/30 text-pink-400 bg-pink-500/5" },
    social: { id: "social", label: "Socialt", icon: "mdi:account-group", color: "#0ea5e9", styling: "border-sky-500/30 text-sky-400 bg-sky-500/5" },
    observation: { id: "observation", label: "Observation", icon: "mdi:eye", color: "#8b5cf6", styling: "border-violet-500/30 text-violet-400 bg-violet-500/5" },
    wellness: { id: "wellness", label: "Välbefinnande", icon: "mdi:heart-pulse", color: "#f43f5e", styling: "border-rose-500/30 text-rose-400 bg-rose-500/5" }
  },
  adventures: [
    { id: 1, text: "Prova en kaffe eller dryck på ett ställe där du aldrig har gått in förut.", categoryId: "food" },
    { id: 2, text: "Gå i 10 minuter i en riktning som du normalt inte tar när du lämnar hemmet.", categoryId: "exploration" },
    { id: 3, text: "Lär dig hur man säger 'Tack' på tre olika språk som du inte kan.", categoryId: "learning" },
    { id: 4, text: "Ta ett foto av en arkitektonisk detalj som fångar din uppmärksamhet på din gata.", categoryId: "creativity" },
    { id: 5, text: "Köp en frukt som du aldrig har provat och upptäck dess smak.", categoryId: "food" },
    { id: 6, text: "Leta efter en minnesplakett i ditt grannskap och läs historien den berättar.", categoryId: "exploration" },
    { id: 7, text: "Rita något du har framför dig på under 60 sekunder.", categoryId: "creativity" },
    { id: 8, text: "Hälsa på en granne som du normalt inte pratar med.", categoryId: "social" },
    { id: 9, text: "Lyssna på en musikgenre som du normalt inte gillar i 5 minuter.", categoryId: "learning" },
    { id: 10, text: "Besök en antik- eller secondhandbutik och hitta det märkligaste föremålet.", categoryId: "exploration" },
    { id: 11, text: "Sätt dig i en park och räkna hur många olika typer av fåglar du ser.", categoryId: "observation" },
    { id: 12, text: "Skriv en positiv lapp och lämna den inuti en bok på ett folkbibliotek.", categoryId: "social" },
    { id: 13, text: "Gör en lista på 5 saker som du är tacksam för idag.", categoryId: "wellness" },
    { id: 14, text: "Försök att laga ett nytt recept med enbart det du har i skafferiet.", categoryId: "food" },
    { id: 15, text: "Tillbringa 20 minuter utan att titta på någon skärm (mobil, TV, PC).", categoryId: "wellness" },
    { id: 16, text: "Hitta ett träd nära ditt hus och försök att identifiera dess art.", categoryId: "learning" },
    { id: 300, text: "Gör en plan för att besöka en närliggande ort i helgen.", categoryId: "exploration" },
    { id: 301, text: "Lär dig vad fingrarna på handen heter på latin.", categoryId: "learning" },
    { id: 302, text: "Hitta ett rim för varje ord i den här meningen.", categoryId: "creativity" },
    { id: 303, text: "Tacka en vän för något som hände för länge sedan.", categoryId: "social" }
  ],
  achievements: [
    { id: "g1", milestone: 1, label: "Uppvaknandet", categoryId: "global", icon: "mdi:footprint", description: "Ditt första mini-äventyr slutfört." },
    { id: "g10", milestone: 10, label: "Förundransvana", categoryId: "global", icon: "mdi:sparkles", description: "Du har brutit rutinen 10 gånger." },
    { id: "g50", milestone: 50, label: "Dagsamlare", categoryId: "global", icon: "mdi:calendar-star", description: "50 dagar av att göra det vardagliga extraordinärt." },
    { id: "g150", milestone: 150, label: "Slumpens mästare", categoryId: "global", icon: "mdi:trophy-variant", description: "Du har slutfört hälften av äventyrskatalogen." },
    { id: "g300", milestone: 300, label: "Fri ande", categoryId: "global", icon: "mdi:ghost", description: "Du har bemästrat konsten att genomföra dagliga äventyr." },
    { id: "e3", milestone: 3, label: "Turist hemma", categoryId: "exploration", icon: "mdi:map-marker-outline", description: "3 nya hörn upptäckta." },
    { id: "e15", milestone: 15, label: "Stadskartograf", categoryId: "exploration", icon: "mdi:map-check", description: "Du känner ditt postnummer bättre än någon annan." },
    { id: "f3", milestone: 3, label: "Rastlös gom", categoryId: "food", icon: "mdi:silverware-clean", description: "Du har provat 3 smaker du inte kände till." },
    { id: "f15", milestone: 15, label: "Gourmetalchemist", categoryId: "food", icon: "mdi:silverware-variant", description: "Ditt skafferi är ett pass till världen." },
    { id: "l3", milestone: 3, label: "Allt-i-allo-lärling", categoryId: "learning", icon: "mdi:book-open-page-variant", description: "Du har lärt dig 3 kuriositeter om världen." },
    { id: "l15", milestone: 15, label: "Vandrande bibliotek", categoryId: "learning", icon: "mdi:head-cog", description: "Din nyfikenhet känner inga gränser." },
    { id: "c3", milestone: 3, label: "Tecknande hand", categoryId: "creativity", icon: "mdi:palette-outline", description: "Du har satt ditt avtryck i 3 små utmaningar." },
    { id: "c15", milestone: 15, label: "Lokal avantgarde", categoryId: "creativity", icon: "mdi:palette-swatch", description: "Du ser konst där andra bara ser en gata." },
    { id: "s3", milestone: 3, label: "Mänsklig bro", categoryId: "social", icon: "mdi:account-voice", description: "Du har knutit an till 3 personer idag." },
    { id: "s15", milestone: 15, label: "Gatans själ", categoryId: "social", icon: "mdi:account-group", description: "Du har förvandlat främlingar till berättelser." },
    { id: "o3", milestone: 3, label: "Detaljorienterad", categoryId: "observation", icon: "mdi:magnify", description: "Du har sett 3 saker som ingen annan märker." },
    { id: "o15", milestone: 15, label: "Filmmakaröga", categoryId: "observation", icon: "mdi:telescope", description: "Din blick är linsen i en storfilm." },
    { id: "w3", milestone: 3, label: "Medveten paus", categoryId: "wellness", icon: "mdi:leaf", description: "Du har ägnat 3 stunder åt din mentala frid." },
    { id: "w15", milestone: 15, label: "Total balans", categoryId: "wellness", icon: "mdi:spa", description: "Din kropp och ditt sinne tackar dig." }
  ],
  stats: {
    adventures: "Äventyr",
    badges: "Märken",
    progress: "Dina framsteg",
    trophies: "Trofésamling"
  },
  shareTemplate: "Jag fick precis ett mini-äventyr!\n\n\"{text}\"\n\nVågar du? Generera ditt här: {url}"
};

const seo: ToolLocaleContent<MiniAdventuresUI>['seo'] = [
  { type: "title", text: "Mini-äventyr: Vardagens konst", level: 2 },
  { type: "paragraph", html: "Upptäck hur mikroäventyr kan koppla om din hjärna, bekämpa rutin och väcka din inneboende nyfikenhet. Rutin är kreativitetens fiende. Genom att introducera små variationer i vårt dagliga liv tvingar vi vår hjärna att skapa nya neurala kopplingar." },
  { type: "title", text: "Neuroplasticitet i handling", level: 3 },
  { type: "paragraph", html: "Rutin är kreativitetens fiende. Genom att introducera små variationer i vårt dagliga liv — som att prova en ny smak eller gå på en okänd gata — tvingar vi vår hjärna att skapa nya neurala kopplingar. Dessa mikroäventyr fungerar som ett mentalt gym som håller sinnet rörligt och öppet för nya möjligheter." },
  { type: "title", text: "Emotionellt välbefinnande", level: 3 },
  { type: "paragraph", html: "Känslan av stagnation kommer ofta från absolut förutsägbarhet. Den kontrollerade slumpmässigheten hos en äventyrsgenerator introducerar elementet av 'positiv överraskning', vilket frigör dopamin och förbättrar humöret naturligt. Du behöver inte en transoceanisk resa för att känna spänningen i att upptäcka något nytt." },
  { type: "title", text: "Utforska det du redan känner till: Lokal filosofi", level: 2 },
  { type: "paragraph", html: "Vi lever omgivna av berättelser och detaljer som går obemärkta förbi. Målet med den här prognosen är att träna ditt öga att se det extraordinära i det ordinära. Leta inte efter det perfekta ögonblicket; leta efter det möjliga ögonblicket." },
  {
    type: "grid",
    columns: 2
  },
  { type: "card", icon: "mdi:clock-fast", title: "Inga ursäkter", html: "Äventyr som kräver mindre än 15 minuter och noll kronor. Tid är inte ett hinder för nyfikenhet." },
  { type: "card", icon: "mdi:lock-outline", title: "Total integritet", html: "Du behöver inte registrera dig eller dela dina data. Dina framsteg och slutförda äventyr sparas enbart på din enhet." },
  { type: "card", icon: "mdi:share-variant", title: "Hälsosam viralitet", html: "Dela utmaningar som inspirerar andra att kliva ut ur sin bubbla, istället för att elda på den konstanta jämförelsen på sociala medier." },
  { type: "card", icon: "mdi:trophy-outline", title: "Gamifiering", html: "Samla exklusiva märken för varje slutförd utmaningskategori." }
];

const faq: ToolLocaleContent<MiniAdventuresUI>['faq'] = [
  { question: "Vad är ett mikroäventyr?", answer: "Det är ett kort, lokalt, billigt och enkelt äventyr. Termen (gjord känd av Alastair Humphreys) syftar till att visa att du inte behöver åka till andra sidan jorden för att uppleva spännande saker." },
  { question: "Vad är den här generatorn till för?", answer: "Den tjänar till att bekämpa analysförlamning. Ibland vill vi göra något annorlunda men vet inte vad. Den här simulatorn väljer en slumpmässig utmaning åt dig, vilket tar bort den mentala bördan av att behöva bestämma sig." },
  { question: "Måste jag registrera mina äventyr?", answer: "Nej. Detta är ett verktyg med total integritet. Utmaningar genereras slumpmässigt i din webbläsare och vi spara inte någon form av register över vad du gör eller vart du går." },
  { question: "Kan jag föreslå nya äventyr?", answer: "Självklart! Koden för det här verktyget är öppen. Om du har idéer på roliga utmaningar som inte kräver så mycket budget eller tid, kan du föreslå dem via repot på GitHub." }
];

const howTo: ToolLocaleContent<MiniAdventuresUI>['howTo'] = [
  { name: "Generera", text: "Tryck på generera-knappen för att få en slumpmässig utmaning." },
  { name: "Gör det", text: "Försök att slutföra utmaningen innan dagen är slut." },
  { name: "Slutför", text: "Markera utmaningen som klar för att tjäna märken och framsteg." }
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
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<MiniAdventuresUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: "Vanliga frågor",
  bibliography: "Källor och referenser",
  howTo,
  howToTitle: "Så fungerar det",
  schemas: [faqSchema, howToSchema, appSchema],
};
