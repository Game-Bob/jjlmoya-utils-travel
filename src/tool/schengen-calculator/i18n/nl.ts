import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SchengenCalculatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'schengen-verblijfscalculator-90-180';
const title = 'Schengen 90 180 Dagen Verblijfscalculator';
const description =
  'Controleer of uw reis naar Europa voldoet aan de 90/180-dagenvisumregel. Bereken uw resterende verblijfsdagen en voorkom overstay in het Schengengebied.';

const ui: SchengenCalculatorUI = {
  verdictSafeTitle: 'Reis Legaal en Veilig (Binnen Limiet)',
  verdictWarningTitle: 'Let Op: Dichtbij de 90-Dagenlimiet',
  verdictOverstayTitle: 'Illegale Overstay Gedetecteerd',
  daysRemainingSub: 'Toegestane Dagen Resterend',
  daysUsedSub: 'Gebruikte Dagen in 180 Dagen',
  maxStaySub: 'Maximaal Aaneengesloten Verblijf',
  fullResetSub: 'Datum van Volledige 90-Dagen Reset',
  plannerHeading: '1. Controleer Doeldatum',
  plannerEntryLabel: 'Inreisdatum of Geplande Vlucht',
  quickDatesLabel: 'Ga naar Datum',
  presetToday: 'Vandaag',
  presetPlus7: '+1 Week',
  presetPlus14: '+2 Weken',
  presetPlus30: '+1 Maand',
  tripsHeading: '2. Schengen Reisgeschiedenis (Verleden & Gepland)',
  addTripBtn: '+ Reis Toevoegen',
  emptyTripsMsg: 'Nog geen reizen toegevoegd. Voeg uw eerdere of geplande verblijven in het Schengengebied toe.',
  colArrival: 'Inreis (Aankomst)',
  colDeparture: 'Uitbreis (Vertrek)',
  colDestination: 'Land / Notities',
  colDays: 'Dagen',
  sampleBtn: 'Voorbeeld Reizen Laden',
  clearBtn: 'Alles Wissen',
  timelineTitle: '180-Dagen Rollend Tijdvenster',
  legendInSchengen: 'In Schengen',
  legendOutside: 'Buiten',
  legendOverstay: 'Overstay',
  bannerSafe: 'Op {date} heeft u {used} verbruikt ({rem} beschikbaar).',
  bannerWarning: 'Op {date} heeft u {used} verbruikt (slechts {rem} resterend).',
  bannerOverstay: 'Illegale overstay gedetecteerd vanaf {date}. Uw reis overschrijdt de limiet met {days}.',
  unitDays: 'dagen',
  notesPlaceholder: 'bijv. Frankrijk, Spanje',
  sampleNotes1: 'Italië Rondreis (20 dagen)',
  sampleNotes2: 'Duitsland & Oostenrijk (20 dagen)',
  sampleNotesDefault: 'Frankrijk & Spanje',
};

const seo: ToolLocaleContent<SchengenCalculatorUI>['seo'] = [
  {
    type: 'title',
    text: 'Hoe de 90 180 Schengen Regel Werkelijk Functioneert',
    level: 2,
  },
  {
    type: 'summary',
    title: 'Kernprincipes van het Rollende Schengen Tijdvenster',
    items: [
      'Niet-EU-burgers mogen maximaal 90 dagen binnen een willekeurig rollend tijdvak van 180 dagen in het Schengengebied verblijven.',
      'Het 180-dagenvenster schuift elke dag mee naar voren en kijkt continu 179 dagen terug.',
      'Zowel de aankomstdatum als de vertrekdatum tellen als volledige verblijfsdagen in Europa.',
      'Het verlaten van Europa reset uw 90-dagenlimiet niet tenzij u 90 aaneengesloten dagen buiten de zone verblijft.',
    ],
  },
  {
    type: 'paragraph',
    html: 'Het Schengengebied hanteert op basis van Artikel 6(1) van de <em>Schengenbuitengrenscode (Verordening EU 2016/399)</em> een strikte limiet van <strong>maximaal 90 dagen verblijf binnen een periode van 180 dagen</strong> voor visumvrije reizigers en houders van een Schengenvisum type C. Op elke afzonderlijke verblijfsdag berekenen de grensautoriteiten het totale aantal dagen dat in de voorgaande 179 dagen in de 29 aangesloten landen is doorgebracht plus de huidige dag.',
  },
  {
    type: 'title',
    text: 'Belangrijke Indicatoren en Grensstandaarden',
    level: 2,
  },
  {
    type: 'stats',
    items: [
      {
        value: '90 Dagen',
        label: 'Maximaal Totaal Verblijf',
      },
      {
        value: '180 Dagen',
        label: 'Rollend Controlevenster',
      },
      {
        value: 'Beide Dagen',
        label: 'Inclusieve Grenstelling',
      },
      {
        value: '29 Landen',
        label: 'Gezamenlijk Schengengebied',
      },
    ],
  },
  {
    type: 'title',
    text: 'Vaste Kalenderquota vs Dynamische Rollende Vensters',
    level: 2,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Misvatting van het Kalenderjaar',
        description:
          'Veel reizigers denken ten onrechte dat hun 90 dagen op 1 januari automatisch vernieuwen of na een kort uitstapje buiten de zone resetten. Dit misverstand leidt tot onbedoelde overstays en hoge boetes bij paspoortcontroles.',
      },
      {
        title: 'Echte Werking van het Rollende Venster',
        description:
          'Elke dag in het Schengengebied wordt geregistreerd op een doorlopende tijdslijn. Naarmate de tijd vordert, vallen de oudste dagen na 180 dagen uit het berekeningsvenster, waardoor stapsgewijs nieuwe verblijfsdagen vrijkomen.',
      },
    ],
  },
  {
    type: 'title',
    text: 'Veelvoorkomende Reispatronen en Juridische Beoordeling',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Reispatroon', 'Voorbeeld', 'Status', 'Advies'],
    rows: [
      [
        'Eenmalig Aaneengesloten Verblijf',
        'Inreis 1 juni, vertrek 29 augustus (90 dagen)',
        'Legaal',
        'Moet op de 90e dag exact vertrekken en 90 opeenvolgende dagen buiten het gebied blijven.',
      ],
      [
        'Frequente Reiziger met Meerdere Reizen',
        'Drie losse reizen van 30 dagen met 30 dagen tussenpauze',
        'Legaal',
        'Elk reisdeel moet worden gecontroleerd binnen zijn eigen 180-dagen terugblikvenster.',
      ],
      [
        'Digitale Nomade Wisselverblijf',
        'Afwisselend 60 dagen Schengen en 30 dagen buiten Schengen',
        'Hoog Overstay-Risico',
        'Een pauze van 30 dagen herstelt alleen dagen die 180 dagen geleden plaatsvonden, kans op inreisweigering.',
      ],
      [
        'Volledige 90-Dagen Reset',
        'Onafgebroken afwezigheid van 90 dagen buiten Europa',
        'Volledig Hersteld',
        'Garandeert het volledige herstel van de maximale 90 dagen bij de eerstvolgende inreis.',
      ],
    ],
  },
  {
    type: 'title',
    text: 'Strategische Tips voor Zorgeloze Grensoverschrijding',
    level: 2,
  },
  {
    type: 'tip',
    title: 'Bouw Veiligheidsmarge In',
    html: 'Boek uw terugvlucht nooit precies op dag 90. Een geannuleerde vlucht of medisch noodgeval kan uw vertrek verschuiven naar dag 91, met een automatische registratie in het nieuwe Europese Inreis/Uit-reissysteem (EES) en een inreisverbod tot gevolg.',
  },
  {
    type: 'card',
    title: 'Bewaar Bewijs van Verblijf Buiten Schengen',
    html: 'Bewaar instapkaarten, hotelrekeningen en stempels van niet-Schengenlanden (zoals het Verenigd Koninkrijk, Ierland, Cyprus, Montenegro of Albanië) om uw afwezigheid sluitend te kunnen bewijzen bij controles.',
  },
  {
    type: 'title',
    text: 'Glossarium van Europese Grenstermen',
    level: 2,
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'Overstay (Verblijfsoverschrijding)',
        definition:
          'Het overschrijden van de toegestane 90 dagen binnen een termijn van 180 dagen, wat kan leiden tot geldboetes, uitzetting of inreisverboden.',
      },
      {
        term: 'EES (Inreis Uit-reissysteem)',
        definition:
          'Het geautomatiseerde digitale systeem van de EU dat fysieke stempels vervangt door biometrische registratie van niet-EU-reizigers.',
      },
      {
        term: 'Onderdaan van een Derde Land',
        definition:
          'Elke reiziger die geen staatsburger is van een EU-lidstaat of van een EFTA-land.',
      },
    ],
  },
];

const faq: ToolLocaleContent<SchengenCalculatorUI>['faq'] = [
  {
    question: 'Wat houdt de 90 180 regel in het Schengengebied precies in?',
    answer:
      'Deze regel staat reizigers van buiten de EU zonder langverblijfvisum toe om maximaal 90 dagen binnen een bewegend tijdvak van 180 dagen in de 29 Schengenlanden te verblijven.',
  },
  {
    question: 'Wordt het 90-dagenquotum gereset als ik Europa verlaat?',
    answer:
      'Nee. Het verlaten van het Schengengebied reset de teller niet automatisch. Het 180-dagenvenster schuift continu mee; een volledige reset ontstaat pas na 90 opeenvolgende dagen buiten het Schengengebied.',
  },
  {
    question: 'Tellen de dag van aankomst en vertrek als volle dagen?',
    answer:
      'Ja. Volgens Artikel 6 van de Schengenbuitengrenscode worden zowel de dag van binnenkomst als de dag van uitreis als volledige verblijfsdagen meegeteld.',
  },
  {
    question: 'Welke landen behoren tot het Schengengebied voor deze berekening?',
    answer:
      'Het gebied omvat 29 landen: België, Bulgarije, Denemarken, Duitsland, Estland, Finland, Frankrijk, Griekenland, Hongarije, IJsland, Italië, Kroatië, Letland, Liechtenstein, Litouwen, Luxemburg, Malta, Nederland, Noorwegen, Oostenrijk, Polen, Portugal, Roemenië, Slovenië, Slowakije, Spanje, Tsjechië, Zweden en Zwitserland. Het Verenigd Koninkrijk en Ierland vallen hierbuiten.',
  },
];

const howTo: ToolLocaleContent<SchengenCalculatorUI>['howTo'] = [
  {
    name: 'Kies uw Evaluatiedatum',
    text: 'Selecteer de datum van uw volgende vlucht om direct te zien hoeveel toegestane dagen u op dat moment over heeft.',
  },
  {
    name: 'Vul Eerdere en Geplande Reizen In',
    text: 'Voer de inreis- en vertrekdatum in van alle verblijven in Schengenlanden over de afgelopen maanden.',
  },
  {
    name: 'Controleer uw Resterende Dagen',
    text: 'Bekijk de meter met resterende dagen, het maximaal aaneengesloten verblijf en de datum van volledige reset.',
  },
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
  description,
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
  description,
  applicationCategory: 'TravelApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<SchengenCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  howTo,
  howToTitle: 'Hoe u uw Schengen-verblijf berekent',
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography: bibliographyEntries,
};
