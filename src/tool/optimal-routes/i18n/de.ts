import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { OptimalRoutesUI } from '../index';

const slug = 'optimaler-routenplaner';
const title = 'Optimaler Routenplaner | Intelligente Stopp-Reihenfolge';
const description = 'Optimieren Sie Ihre Liefer- oder Reiserouten kostenlos. Unser Tool ordnet Ihre Stopps automatisch neu, um den kürzesten und effizientesten Weg zu finden.';

const ui: OptimalRoutesUI = {
  title: "Optimale Routen",
  sidebar: {
    title: "Routenplan",
    addPoint: "Stopp hinzufügen (Klick auf Karte)",
    pointsList: "Ihre Stopps",
    emptyState: "Klicken Sie auf die Karte, um Stopps zu Ihrer Route hinzuzufügen.",
    optimizeBtn: "Sequenz optimieren",
    clearBtn: "Alles löschen",
    stats: {
      distance: "Gesamtstrecke:",
      time: "Geschätzte Zeit:"
    }
  },
  map: {
    placeholder: "Karte wird geladen...",
    attribution: "© OpenStreetMap Mitwirkende"
  },
  errors: {
    minPoints: "Es werden mindestens zwei Punkte benötigt, um eine Route zu berechnen.",
    calcError: "Fehler bei der Berechnung der optimalen Route. Bitte versuchen Sie es erneut."
  },
  labels: {
    origin: "Start",
    destination: "Ende",
    stop: "Stopp",
    loading: "Berechnung..."
  }
};

const seo: ToolLocaleContent<OptimalRoutesUI>['seo'] = [
  { type: "title", text: "Intelligente Routenoptimierung", level: 2 },
  { type: "paragraph", html: "Verwenden Sie fortschrittliche Algorithmen, um das Problem des Handlungsreisenden (TSP) in Sekundenschnelle zu lösen. Ideal für Logistik, Lieferungen oder einfach nur, um auf Ihren Reisen Benzin zu sparen." },
  { type: "title", text: "Warum die Stopp-Reihenfolge wichtig ist", level: 3 },
  { type: "paragraph", html: "Eine falsche Reihenfolge Ihrer Stopps kann die Reisezeit und den Kraftstoffverbrauch erheblich erhöhen. Unser Optimierer analysiert Millionen von Möglichkeiten, um Ihnen den direktesten Weg zu zeigen, indem er unnötige Umwege und Überschneidungen vermeidet." }
];

const faq: ToolLocaleContent<OptimalRoutesUI>['faq'] = [
  { question: "Wie funktioniert die Optimierung?", answer: "Wir analysieren alle Ihre Stopps und ermitteln die sequenzielle Reihenfolge, die die zurückgelegte Gesamtstrecke minimiert." },
  { question: "Kann ich es auf dem Handy benutzen?", answer: "Ja, das Tool ist voll responsiv und ermöglicht es Ihnen, die resultierende Route direkt in Navigations-Apps zu öffnen." },
  { question: "Gibt es ein Limit für die Anzahl der Stopps?", answer: "Für die kostenlose Version können Sie bis zu 25 Stopps effizient optimieren, was perfekt für tägliche Lieferungen oder Roadtrips ist." }
];

const howTo: ToolLocaleContent<OptimalRoutesUI>['howTo'] = [
  { name: "Hinzufügen", text: "Klicken Sie auf die Karte, um Ihren Startpunkt und Ihre Zwischenstopps festzulegen." },
  { name: "Optimieren", text: "Drücken Sie die Optimierungstaste, damit das System die Stopps effizient neu ordnet." },
  { name: "Navigieren", text: "Verwenden Sie den generierten Plan, um der vorgeschlagenen Route zu folgen." }
];

const bibliography: ToolLocaleContent<OptimalRoutesUI>['bibliography'] = [
  { name: "Problem des Handlungsreisenden (TSP)", url: "https://de.wikipedia.org/wiki/Problem_des_Handlungsreisenden" },
  { name: "Routenplanung und Logistik", url: "https://www.logistik-lexikon.de/" }
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
  inLanguage: 'de',
};

export const content: ToolLocaleContent<OptimalRoutesUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: "Häufig gestellte Fragen",
  bibliography,
  bibliographyTitle: "Quellen und Referenzen",
  howTo,
  howToTitle: "Wie man es benutzt",
  schemas: [faqSchema, howToSchema, appSchema],
};
