import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SuitcaseChecklistUI } from '../index';

const slug = 'koffer-packliste-generator';
const title = 'Koffer Packliste Generator : Erstellen Sie Ihre Packliste';
const description = 'Das ultimative Online-Tool zur Organisation Ihres Gepäcks basierend auf Reiseart, Ziel und Dauer. Vergessen Sie nie wieder Ihre Reiseutensilien.';

const ui: SuitcaseChecklistUI = {
  title: "Packplaner",
  form: {
    destTitle: "Zielort & Klima",
    destTypes: [
      { id: "playa", name: "Strand / Küste", icon: "mdi:beach" },
      { id: "ciudad", name: "Stadt / Urban", icon: "mdi:city" },
      { id: "montana", name: "Berge / Ländlich", icon: "mdi:pine-tree" },
      { id: "frio", name: "Kalt / Schnee", icon: "mdi:snowflake" }
    ],
    daysTitle: "Wie viele Tage?",
    intlTitle: "Internationale Reise?",
    intlLabel: "Ja, Grenzübertritt",
    reasonTitle: "Reisezweck",
    reasons: [
      { id: "ocio", name: "Freizeit / Vergnügen", icon: "mdi:party-popper" },
      { id: "negocios", name: "Geschäftlich", icon: "mdi:tie" }
    ],
    submitBtn: "Ideale Tasche konfigurieren"
  },
  results: {
    title: "Ihre Packliste",
    editBtn: "Bearbeiten",
    printBtn: "PDF speichern",
    tipsTitle: "Reisetipps",
    progressText: "Abgeschlossen"
  },
  itemsDb: {
    essentials: {
      id: "essentials",
      title: "Dokumente & Basics",
      icon: "mdi:passport",
      items: [
        { label: "Personalausweis / Reisepass" },
        { label: "Bankkarten" },
        { label: "Barmittel" },
        { label: "Tickets (Flug/Zug)" },
        { label: "Buchungsbestätigungen" },
        { label: "Hausschlüssel" },
        { label: "Internationale Dokumente", dynamicId: "item-internacional" }
      ]
    },
    technology: {
      id: "technology",
      title: "Technik",
      icon: "mdi:laptop",
      items: [
        { label: "Mobiltelefon" },
        { label: "Handy-Ladegerät" },
        { label: "Kopfhörer" },
        { label: "Powerbank" },
        { label: "Netzadapter", dynamicId: "item-adaptador" }
      ]
    },
    toiletries: {
      id: "toiletries",
      title: "Körperpflege",
      icon: "mdi:toothbrush",
      items: [
        { label: "Zahnbürste & Zahnpasta" },
        { label: "Deodorant" },
        { label: "Duschgel & Shampoo" },
        { label: "Kamm / Bürste" },
        { label: "Kleine Reiseapotheke" },
        { label: "Persönliche Medikamente" }
      ]
    },
    clothing_base: {
      id: "clothing_base",
      title: "Alltagskleidung",
      icon: "mdi:tshirt-crew",
      items: [
        { label: "Unterwäsche", dynamicId: "qty-ropa-interior" },
        { label: "T-Shirts / Oberteile", dynamicId: "qty-camisetas" },
        { label: "Hosen", dynamicId: "qty-pantalones" },
        { label: "Socken", dynamicId: "qty-calcetines" },
        { label: "Schlafanzug" },
        { label: "Leichte Jacke" },
        { label: "Bequeme Alltagsschuhe" }
      ]
    }
  },
  specificItems: {
    destType: {
      playa: {
        id: "dest-playa",
        title: "Für die Küste",
        icon: "mdi:beach",
        items: [
          { label: "Badekleidung" },
          { label: "Strandtuch" },
          { label: "Sonnenschutz" },
          { label: "Sonnenbrille" },
          { label: "Flip-Flops" },
          { label: "Hut oder Kappe" }
        ]
      },
      ciudad: {
        id: "dest-ciudad",
        title: "Urban",
        icon: "mdi:city",
        items: [
          { label: "Sneaker zum Laufen" },
          { label: "Kleiner sicherer Rucksack" },
          { label: "Taschenregenschirm" },
          { label: "Stadtführer" }
        ]
      },
      montana: {
        id: "dest-montana",
        title: "Berge",
        icon: "mdi:pine-tree",
        items: [
          { label: "Wanderschuhe" },
          { label: "Windjacke" },
          { label: "Trekkinghosen" },
          { label: "Wasserflasche" },
          { label: "Wanderrucksack" }
        ]
      },
      frio: {
        id: "dest-frio",
        title: "Kaltes Klima",
        icon: "mdi:snowflake",
        items: [
          { label: "Dicker Mantel" },
          { label: "Mützen & Handschuhe" },
          { label: "Winterstiefel" },
          { label: "Thermalshirts" },
          { label: "Schal" }
        ]
      }
    },
    travelType: {
      negocios: {
        id: "travel-negocios",
        title: "Geschäftlich",
        icon: "mdi:tie",
        items: [
          { label: "Anzug / Formelle Kleidung" },
          { label: "Hemden" },
          { label: "Elegante Schuhe" },
          { label: "Laptop" },
          { label: "Laptop-Ladegerät" },
          { label: "Arbeitsunterlagen" }
        ]
      },
      ocio: {
        id: "travel-ocio",
        title: "Freizeit",
        icon: "mdi:camera",
        items: [
          { label: "Kleidung zum Ausgehen" },
          { label: "Kamera (Optional)" },
          { label: "Buch / Unterhaltung" }
        ]
      }
    }
  },
  tips: {
    military: "'Military Style' Rollen der Kleidung hilft sehr gegen Falten und spart Platz.",
    longTravel: "Sie reisen länger als eine Woche. Planen Sie ein, Ihre Basics zwischendurch zu waschen.",
    intlPassport: "Internationale Reise: Prüfen Sie noch heute, ob Ihr Reisepass noch mindestens 6 Monate gültig ist.",
    intlBank: "Prüfen Sie notwendige Visa oder ob Ihre Bank Gebühren für Auslandstransaktionen erhebt.",
    intlAdapter: "Vergessen Sie Ihren Universaladapter nicht, wenn die Steckdosen am Zielort anders sind!",
    coldLayers: "Bei kaltem Wetter im Zwiebelprinzip kleiden: Thermoschicht, Isolierung und wasserdichte Außenschicht.",
    coldHeavyOn: "Tragen Sie Ihre sperrigsten/schwersten Stücke im Flugzeug, um Platz im Koffer zu sparen.",
    beachWet: "Packen Sie mehr als eine Badehose/Bikini ein; hohe Luftfeuchtigkeit kann das Trocknen über Nacht verhindern."
  }
};

const seo: ToolLocaleContent<SuitcaseChecklistUI>['seo'] = [
  { type: "title", text: "Koffer Packliste Generator: Ihr idealer Reisebegleiter", level: 2 },
  { type: "paragraph", html: "Den Koffer zu packen ist oft einer der stressigsten Momente vor einer Reise. Die Angst, etwas Wichtiges zu vergessen, Zweifel am Wetter am Zielort oder die Ungewissheit über die Menge des Gepäcks können die Tage vor dem lang ersehnten Urlaub trüben. Hier wird ein <strong>Koffer-Packliste-Generator</strong> zu Ihrem besten Verbündeten." },
  {
    type: "summary",
    title: "Vorteile der Nutzung unseres Listenerstellers",
    items: [
      "Absolute Personalisierung angepasst an das Klima Ihres Ziels (Strand, Gebirge, Stadt oder Schnee).",
      "Automatische Berechnung der Kleidung basierend auf der Dauer Ihres Aufenthalts.",
      "Drastische Reduzierung des logistischen Stresses durch eine interaktive Checkliste zum Abhaken.",
      "Optimierung des Kofferplatzes, Vermeidung des 'Für alle Fälle'-Syndroms."
    ]
  },
  { type: "title", text: "Warum Gepäckplanung fundamental ist", level: 3 },
  { type: "paragraph", html: "Reisen ist eine transformative Erfahrung, aber schlechte Planung kann unnötiges Kopfzerbrechen bereiten. Durch die Nutzung unseres intelligenten Tools automatisieren Sie einen Prozess, der sonst Stunden an Kalkulation und Gedächtnisleistung erfordern würde. Effiziente Organisation ist das Fundament jedes erfolgreichen Abenteuers." }
];

const faq: ToolLocaleContent<SuitcaseChecklistUI>['faq'] = [
  { question: "Kann ich die generierte Liste speichern?", answer: "Sie können Elemente auf Ihrer Liste an- und abhaken sowie den Button zum Drucken nutzen oder sie als PDF-Datei auf Ihrem Gerät speichern." },
  { question: "Wie werden die Kleidungsmengen berechnet?", answer: "Unser Tool schätzt Kleidungsgarnituren basierend auf der gewählten Reisedauer, fördert leichtes Reisen und optimiert Ihr Gepäck." },
  { question: "Funktioniert es für kaltes Wetter und Schnee?", answer: "Ja, Sie können das Ziel 'Kaltes Klima' wählen, damit die Checkliste automatisch unverzichtbare Artikel für diese Bedingungen enthält." },
  { question: "Ist das Tool kostenlos?", answer: "Ja, unser Koffer-Packliste-Generator ist zu 100 % kostenlos und erfordert keine Registrierung oder zusätzliche App-Downloads." }
];

const howTo: ToolLocaleContent<SuitcaseChecklistUI>['howTo'] = [
  { name: "Reise definieren", text: "Wählen Sie Klima, Grund und Dauer Ihres Aufenthalts." },
  { name: "Liste generieren", text: "Drücken Sie den Button und erhalten Sie sofort alle notwendigen Artikel, von Kosmetik bis Technik." },
  { name: "Koffer packen", text: "Haken Sie Artikel ab, während Sie sie einpacken, damit Sie nichts Wesentliches vergessen." }
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'de',
};

export const content: ToolLocaleContent<SuitcaseChecklistUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: "Häufig gestellte Fragen",
  bibliography: "Quellen und Referenzen",
  howTo,
  howToTitle: "Wie man den Koffer packt",
  schemas: [faqSchema, howToSchema, appSchema],
};
