import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { OptimalRoutesUI } from '../index';

const slug = 'optimal-rutt-kalkylator-intelligent-stopp-omorganisering';
const title = 'Optimal rutt-kalkylator | Intelligent omorganisering av stopp';
const description = 'Optimera dina leverans- eller reserutter gratis. Vårt verktyg sorterar om dina stopp automatiskt för att hitta den kortaste och mest effektiva vägen.';

const ui: OptimalRoutesUI = {
  title: "Optimala Rutter",
  sidebar: {
    title: "Ruttplan",
    addPoint: "Lägg till stopp (klicka på kartan)",
    pointsList: "Dina stopp",
    emptyState: "Klicka på kartan för att lägga till stopp till din rutt.",
    optimizeBtn: "Optimera sekvens",
    clearBtn: "Rensa allt",
    stats: {
      distance: "Total distans:",
      time: "Beräknad tid:"
    }
  },
  map: {
    placeholder: "Laddar karta...",
    attribution: "© OpenStreetMap-bidragsgivare"
  },
  errors: {
    minPoints: "Minst två punkter behövs för att beräkna en rutt.",
    calcError: "Fel vid beräkning av den optimala rutten. Försök igen."
  },
  labels: {
    origin: "Start",
    destination: "Slut",
    stop: "Stopp",
    loading: "Beräknar..."
  }
};

const seo: ToolLocaleContent<OptimalRoutesUI>['seo'] = [
  { type: "title", text: "Intelligent ruttoptimering", level: 2 },
  { type: "paragraph", html: "Använd avancerade algoritmer för att lösa handelsresandeproblemet (TSP) på några sekunder. Idealiskt för logistik, leveranser eller helt enkelt för att spara bränsle på dina resor." },
  { type: "title", text: "Varför ordningen på stoppen är avgörande", level: 3 },
  { type: "paragraph", html: "Felaktig ordning på dina stopp kan öka restiden och bränsleförbrukningen avsevärt. Vår optimerare analyserar miljontals möjligheter för att visa dig den mest direkta vägen, genom att undvika onödiga omvägar och överlappningar." }
];

const faq: ToolLocaleContent<OptimalRoutesUI>['faq'] = [
  { question: "Hur fungerar optimeringen?", answer: "Vi analyserar alla dina stopp och fastställer den sekventiella ordning som minimerar den totala tillryggalagda distansen." },
  { question: "Kan jag använda det på mobilen?", answer: "Ja, verktyget är fullt responsivt och gör att du kan öppna den resulterande rutten direkt i navigeringsappar." },
  { question: "Finns det en gräns för antal stopp?", answer: "För gratisversionen kan du optimera upp till 25 stopp effektivt, vilket är perfekt för dagliga leveranser eller roadtrips." }
];

const howTo: ToolLocaleContent<OptimalRoutesUI>['howTo'] = [
  { name: "Lägg till", text: "Klicka på kartan för att markera din startpunkt och dina delstopp." },
  { name: "Optimera", text: "Tryck på optimeringsknappen så att systemet sorterar om stoppen på ett effektivt sätt." },
  { name: "Navigera", text: "Använd den genererade planen för att följa den föreslagna rutten." }
];

const bibliography: ToolLocaleContent<OptimalRoutesUI>['bibliography'] = [
  { name: "Handelsresandeproblemet (TSP)", url: "https://sv.wikipedia.org/wiki/Handelsresandeproblemet" },
  { name: "Logistik och ruttplanering", url: "https://sv.wikipedia.org/wiki/Logistik" }
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
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<OptimalRoutesUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: "Vanliga frågor",
  bibliography,
  bibliographyTitle: "Källor och referenser",
  howTo,
  howToTitle: "Så använder du den",
  schemas: [faqSchema, howToSchema, appSchema],
};
