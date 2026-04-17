import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MiniAdventuresUI } from '../index';

const slug = 'mini-avonturen-voorspelling';
const title = 'Mini Avonturen Voorspelling - Doorbeak de sleur';
const description = 'Willekeurige dagelijkse uitdagingen generator om de monotonie te doorbreken en je omgeving te verkennen.';

const ui: MiniAdventuresUI = {
  title: "Mini Avonturen",
  homeTitle: "Mini Avonturen",
  homeDesc: "Maak vandaag een beetje anders. Ben je klaar om op ontdekking te gaan?",
  generateBtn: "GENEREER AVONTUUR",
  anotherBtn: "NOG EEN",
  doneBtn: "KLAAR",
  shareBtn: "DELEN",
  categories: {
    exploration: { id: "exploration", label: "Verkenning", icon: "mdi:map-marker-path", color: "#10b981", styling: "border-emerald-500/30 text-emerald-400 bg-emerald-500/5" },
    food: { id: "food", label: "Gastronomie", icon: "mdi:food-variant", color: "#f59e0b", styling: "border-amber-500/30 text-amber-400 bg-amber-500/5" },
    learning: { id: "learning", label: "Leren", icon: "mdi:school", color: "#6366f1", styling: "border-indigo-500/30 text-indigo-400 bg-indigo-500/5" },
    creativity: { id: "creativity", label: "Creativiteit", icon: "mdi:palette", color: "#ec4899", styling: "border-pink-500/30 text-pink-400 bg-pink-500/5" },
    social: { id: "social", label: "Sociaal", icon: "mdi:account-group", color: "#0ea5e9", styling: "border-sky-500/30 text-sky-400 bg-sky-500/5" },
    observation: { id: "observation", label: "Observatie", icon: "mdi:eye", color: "#8b5cf6", styling: "border-violet-500/30 text-violet-400 bg-violet-500/5" },
    wellness: { id: "wellness", label: "Welzijn", icon: "mdi:heart-pulse", color: "#f43f5e", styling: "border-rose-500/30 text-rose-400 bg-rose-500/5" }
  },
  adventures: [
    { id: 1, text: "Probeer een koffie of drankje op een plek waar je nog nooit bent binnengestapt.", categoryId: "food" },
    { id: 2, text: "Wandel 10 minuten in een richting die je normaal gesproken niet neemt als je van huis gaat.", categoryId: "exploration" },
    { id: 3, text: "Leer hoe je 'Dank je wel' zegt in drie verschillende talen die je niet kent.", categoryId: "learning" },
    { id: 4, text: "Maak een foto van een architectonisch detail in je straat dat je opvalt.", categoryId: "creativity" },
    { id: 5, text: "Koop een stuk fruit dat je nog nooit hebt geprobeerd en ontdek de smaak.", categoryId: "food" },
    { id: 6, text: "Zoek naar een gedenkplaat in je buurt en lees het verhaal dat het vertelt.", categoryId: "exploration" },
    { id: 7, text: "Teken iets wat voor je staat in minder dan 60 seconden.", categoryId: "creativity" },
    { id: 8, text: "Groet een buurman of buurvrouw met wie je normaal gesproken niet praat.", categoryId: "social" },
    { id: 9, text: "Luister 5 minuten lang naar een muziekgenre dat je normaal gesproken niet waardeert.", categoryId: "learning" },
    { id: 10, text: "Bezoek een antiek- of tweedehandswinkel en zoek het vreemdste object.", categoryId: "exploration" },
    { id: 11, text: "Ga in een park zitten en tel hoeveel verschillende soorten vogels je ziet.", categoryId: "observation" },
    { id: 12, text: "Schrijf een positieve notitie en laat deze achter in een boek in een openbare bibliotheek.", categoryId: "social" },
    { id: 13, text: "Maak een lijst van 5 dingen waar je vandaag dankbaar voor bent.", categoryId: "wellness" },
    { id: 14, text: "Probeer een nieuw recept te koken met alleen wat je in de voorraadkast hebt staan.", categoryId: "food" },
    { id: 15, text: "Breng 20 minuten door zonder naar een scherm (mobiel, TV, PC) te kijken.", categoryId: "wellness" },
    { id: 16, text: "Zoek een boom in de buurt van je huis en probeer de soort te identificeren.", categoryId: "learning" },
    { id: 300, text: "Maak een plan om dit weekend een nabijgelegen dorp of stad te bezoeken.", categoryId: "exploration" },
    { id: 301, text: "Leer hoe de vingers van de hand in het Latijn worden genoemd.", categoryId: "learning" },
    { id: 302, text: "Zoek een rijm voor elk woord in deze zin.", categoryId: "creativity" },
    { id: 303, text: "Bedank een vriend voor iets wat lang geleden is gebeurd.", categoryId: "social" }
  ],
  achievements: [
    { id: "g1", milestone: 1, label: "Het Ontwaken", categoryId: "global", icon: "mdi:footprint", description: "Je eerste mini avontuur voltooid." },
    { id: "g10", milestone: 10, label: "Gewoonte van Verwondering", categoryId: "global", icon: "mdi:sparkles", description: "Je hebt de sleur 10 keer doorbroken." },
    { id: "g50", milestone: 50, label: "Dagenverzamelaar", categoryId: "global", icon: "mdi:calendar-star", description: "50 dagen waarin het gewone buitengewoon werd." },
    { id: "g150", milestone: 150, label: "Meester van het Toeval", categoryId: "global", icon: "mdi:trophy-variant", description: "Je hebt de helft van de avonturencatalogus voltooid." },
    { id: "g300", milestone: 300, label: "Vrije Geest", categoryId: "global", icon: "mdi:ghost", description: "Je beheerst de kunst van het dagelijkse avontuur." },
    { id: "e3", milestone: 3, label: "Toerist in Eigen Huis", categoryId: "exploration", icon: "mdi:map-marker-outline", description: "3 nieuwe hoekjes ontdekt." },
    { id: "e15", milestone: 15, label: "Stadskartograaf", categoryId: "exploration", icon: "mdi:map-check", description: "Je kent je postcode beter dan wie dan ook." },
    { id: "f3", milestone: 3, label: "Rusteloze Smaakpapillen", categoryId: "food", icon: "mdi:silverware-clean", description: "Je hebt 3 smaken geprobeerd die je niet kende." },
    { id: "f15", milestone: 15, label: "Gourmet Alchemist", categoryId: "food", icon: "mdi:silverware-variant", description: "Je voorraadkast is een paspoort naar de wereld." },
    { id: "l3", milestone: 3, label: "Leerling van Alles", categoryId: "learning", icon: "mdi:book-open-page-variant", description: "Je hebt 3 wereldcuriosa geleerd." },
    { id: "l15", milestone: 15, label: "Wandelende Bibliotheek", categoryId: "learning", icon: "mdi:head-cog", description: "Je nieuwsgierigheid kent geen grenzen." },
    { id: "c3", milestone: 3, label: "Tekende Hand", categoryId: "creativity", icon: "mdi:palette-outline", description: "Je hebt je sporen nagelaten bij 3 kleine uitdagingen." },
    { id: "c15", milestone: 15, label: "Lokale Avant-Garde", categoryId: "creativity", icon: "mdi:palette-swatch", description: "Je ziet kunst waar anderen alleen de straat zien." },
    { id: "s3", milestone: 3, label: "Menselijke Brug", categoryId: "social", icon: "mdi:account-voice", description: "Je hebt vandaag contact gemaakt met 3 mensen." },
    { id: "s15", milestone: 15, label: "Ziel van de Straat", categoryId: "social", icon: "mdi:account-group", description: "Je hebt vreemden in verhalen veranderd." },
    { id: "o3", milestone: 3, label: "Oog voor Detail", categoryId: "observation", icon: "mdi:magnify", description: "Je hebt 3 dingen gezien die niemand anders opvallen." },
    { id: "o15", milestone: 15, label: "Regisseursoog", categoryId: "observation", icon: "mdi:telescope", description: "Je blik is de lens van een geweldige film." },
    { id: "w3", milestone: 3, label: "Mindful Pauze", categoryId: "wellness", icon: "mdi:leaf", description: "Je hebt 3 momenten gewijd aan je mentale rust." },
    { id: "w15", milestone: 15, label: "Totale Balans", categoryId: "wellness", icon: "mdi:spa", description: "Je lichaam en geest danken je." }
  ],
  stats: {
    adventures: "Avonturen",
    badges: "Badges",
    progress: "Je Voortgang",
    trophies: "Trofeeëncollectie"
  },
  shareTemplate: "Ik heb net een Mini Avontuur gekregen!\n\n\"{text}\"\n\nDurf jij? Genereer die van jou hier: {url}"
};

const seo: ToolLocaleContent<MiniAdventuresUI>['seo'] = [
  { type: "title", text: "Mini Avonturen: De Kunst van het Alledaagse", level: 2 },
  { type: "paragraph", html: "Ontdek hoe micro-avonturen je hersenen kunnen herprogrammeren, de sleur bestrijden en je aangeboren nieuwsgierigheid wekken. Routine is de vijand van creativiteit. Door kleine variaties in ons dagelijks leven aan te brengen, dwingen we onze hersenen om nieuwe neurale verbindingen te smeden." },
  { type: "title", text: "Neuroplasticiteit in Actie", level: 3 },
  { type: "paragraph", html: "Routine is de vijand van creativiteit. Door kleine variaties in ons dagelijks leven aan te brengen —zoals het proberen van een nieuwe smaak of het wandelen door een onbekende straat— dwingen we onze hersenen om nieuwe neurale verbindingen te smeden. Deze micro-avonturen fungeren als een mentale sportschool die de geest alert houdt en openstelt voor nieuwe mogelijkheden." },
  { type: "title", text: "Emotioneel Welzijn", level: 3 },
  { type: "paragraph", html: "Het gevoel van stagnatie komt vaak voort uit absolute voorspelbaarheid. De gecontroleerde willekeur van een avonturengenerator introduceert het element van 'positieve verrassing', waardoor dopamine vrijkomt en de stemming op natuurlijke wijze verbetert. Je hebt geen transoceanische reis nodig om de sensatie van ontdekking te voelen." },
  { type: "title", text: "Verken wat je al kent: Lokale Filosofie", level: 2 },
  { type: "paragraph", html: "We leven omringd door verhalen en details die onopgemerkt blijven. Het doel van deze voorspelling is om je oog te trainen om het buitengewone in het gewone te zien. Zoek niet naar het perfecte moment; zoek naar het mogelijke moment." },
  {
    type: "grid",
    columns: 2
  },
  { type: "card", icon: "mdi:clock-fast", title: "Geen Excuses", html: "Avonturen die minder dan 15 minuten en nul euro vereisen. Tijd is geen barrière voor nieuwsgierigheid." },
  { type: "card", icon: "mdi:lock-outline", title: "Totale Privacy", html: "Je hoeft je niet te registreren of je gegevens te delen. Je voortgang en voltooide avonturen worden alleen op je apparaat opgeslagen." },
  { type: "card", icon: "mdi:share-variant", title: "Gezonde Viraliteit", html: "Deel uitdagingen die anderen inspireren om uit hun bubbel te stappen, in plaats van de constante vergelijking op sociale media te voeden." },
  { type: "card", icon: "mdi:trophy-outline", title: "Gamificatie", html: "Verzamel exclusieve badges voor elke voltooide uitdagingscategorie." }
];

const faq: ToolLocaleContent<MiniAdventuresUI>['faq'] = [
  { question: "Wat is een micro-avontuur?", answer: "Het is een kort, lokaal, goedkoop en eenvoudig avontuur. De term (gepopulariseerd door Alastair Humphreys) probeert te laten zien dat je niet naar de andere kant van de wereld hoeft te reizen om spannende ervaringen te beleven." },
  { question: "Waarvoor dient deze generator?", answer: "Het dient om analyse-paralyse te bestrijden. Soms willen we iets anders doen, maar weten we niet wat. Deze simulator kiest een willekeurige uitdaging voor je, waardoor de mentale last van het beslissen wordt weggenomen." },
  { question: "Moet ik mijn avonturen registreren?", answer: "Nee. Dit is een tool die volledige privacy respecteert. Uitdagingen worden willekeurig in je browser gegenereerd en we slaan geen enkel record op van wat je doet of waar je naartoe gaat." },
  { question: "Kan ik nieuwe avonturen voorstellen?", answer: "Natuurlijk! De code voor deze tool is open. Als je ideeën hebt voor leuke uitdagingen die niet veel budget of tijd vereisen, kun je ze voorstellen via de repository op GitHub." }
];

const bibliography: ToolLocaleContent<MiniAdventuresUI>['bibliography'] = [
  { name: "Alastair Humphreys: Microadventures", url: "https://alastairhumphreys.com/blog/microadventures-3/" },
  { name: "Rob Walker: The Art of Noticing", url: "https://www.goodreads.com/es/book/show/41552704-the-art-of-noticing" }
];

const howTo: ToolLocaleContent<MiniAdventuresUI>['howTo'] = [
  { name: "Genereer", text: "Druk op de genereerknop om een willekeurige uitdaging te ontvangen." },
  { name: "Doe het", text: "Probeer de uitdaging te voltooien voor het einde van de dag." },
  { name: "Voltooi", text: "Markeer de uitdaging als gedaan om badges en voortgang te verdienen." }
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
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<MiniAdventuresUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: "Veelgestelde Vragen",
  bibliography,
  bibliographyTitle: "Bronnen en Referenties",
  howTo,
  howToTitle: "Hoe het werkt",
  schemas: [faqSchema, howToSchema, appSchema],
};
