import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { OptimalRoutesUI } from '../index';

const slug = 'optimale-route-planner';
const title = 'Optimale Route Planner | Slimme Stop Reordering';
const description = 'Optimaliseer uw leverings- of reisroutes gratis. Onze tool herordent uw stops automatisch om het kortste en meest efficiënte pad te vinden.';

const ui: OptimalRoutesUI = {
  title: "Optimale Routes",
  sidebar: {
    title: "Routeplan",
    addPoint: "Stop toevoegen (klik op kaart)",
    pointsList: "Uw stops",
    emptyState: "Klik op de kaart om stops aan uw route toe te voegen.",
    optimizeBtn: "Optimaliseer Volgorde",
    clearBtn: "Alles Wissen",
    stats: {
      distance: "Totale afstand:",
      time: "Geschatte tijd:"
    }
  },
  map: {
    placeholder: "Kaart laden...",
    attribution: "© OpenStreetMap bijdragers"
  },
  errors: {
    minPoints: "Er zijn ten minste twee punten nodig om een route te berekenen.",
    calcError: "Fout bij het berekenen van de optimale route. Probeer het opnieuw."
  },
  labels: {
    origin: "Start",
    destination: "Einde",
    stop: "Stop",
    loading: "Berekenen..."
  }
};

const seo: ToolLocaleContent<OptimalRoutesUI>['seo'] = [
  { type: "title", text: "Slimme Route Optimalisatie", level: 2 },
  { type: "paragraph", html: "Gebruik geavanceerde algoritmen om het Handelsreizigersprobleem (TSP) in enkele seconden op te lossen. Ideaal voor logistiek, leveringen of gewoon om brandstof te besparen tijdens uw reizen." },
  { type: "title", text: "Waarom de Volgorde van Stops Belangrijk is", level: 3 },
  { type: "paragraph", html: "Een verkeerde volgorde van uw stops kan de reistijd en het brandstofverbruik aanzienlijk verhogen. Onze optimizer analyseert miljoenen mogelijkheden om u de meest directe weg te tonen, waarbij onnodige omwegen en overlappen worden vermeden." }
];

const faq: ToolLocaleContent<OptimalRoutesUI>['faq'] = [
  { question: "Hoe werkt de optimalisatie?", answer: "We analyseren al uw stops und bepalen de sequentiële volgorde die de totale afgelegde afstand minimaliseert." },
  { question: "Kan ik het op mijn mobiel gebruiken?", answer: "Ja, de tool is volledig responsief en stelt u in staat om de resulterende route direct in navigatie-apps te openen." },
  { question: "Is er een limiet aan het aantal stops?", answer: "Voor de gratis versie kunt u tot 25 stops efficiënt optimaliseren, wat perfect is voor dagelijkse leveringen of roadtrips." }
];

const howTo: ToolLocaleContent<OptimalRoutesUI>['howTo'] = [
  { name: "Toevoegen", text: "Klik op de kaart om uw startpunt und tussenstops vast te leggen." },
  { name: "Optimaliseren", text: "Druk op de optimalisatieknop zodat het systeem de stops efficiënt herordent." },
  { name: "Navigeren", text: "Gebruik het gegenereerde plan om de gesuggereerde route te volgen." }
];

const bibliography: ToolLocaleContent<OptimalRoutesUI>['bibliography'] = [
  { name: "Handelsreizigersprobleem (TSP)", url: "https://nl.wikipedia.org/wiki/Handelsreizigersprobleem" },
  { name: "Routeoptimalisatie", url: "https://nl.wikipedia.org/wiki/Logistiek" }
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
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<OptimalRoutesUI> = {
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
  howToTitle: "Hoe het te gebruiken",
  schemas: [faqSchema, howToSchema, appSchema],
};
