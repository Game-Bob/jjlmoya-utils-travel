import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SchengenCalculatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'schengen-vistelsekalkylator-90-180';
const title = 'Schengen 90 180 Dagar Vistelsekalkylator';
const description =
  'Kontrollera om din resa till Europa följer 90/180-dagarsregeln för visum. Beräkna tillåtna dagar och undvik överträdelser och böter i Schengenområdet.';

const ui: SchengenCalculatorUI = {
  verdictSafeTitle: 'Laglig och Säker Resa (Inom Tillåten Gräns)',
  verdictWarningTitle: 'Varning: Nära 90-Dagarsgränsen',
  verdictOverstayTitle: 'Olovlig Vistelse Upptäckt (Overstay)',
  daysRemainingSub: 'Återstående Tillåtna Dagar',
  daysUsedSub: 'Förbrukade Dagar (180-Dagarsfönster)',
  maxStaySub: 'Maximal Sammanhängande Vistelse',
  fullResetSub: 'Datum för Full 90-Dagars Återställning',
  plannerHeading: '1. Kontrollera Måldatum',
  plannerEntryLabel: 'Inresedatum eller Planerat Flyg',
  quickDatesLabel: 'Hoppa till Datum',
  presetToday: 'Idag',
  presetPlus7: '+1 Vecka',
  presetPlus14: '+2 Veckor',
  presetPlus30: '+1 Månad',
  tripsHeading: '2. Schengen Resehistorik (Tidigare & Planerade)',
  addTripBtn: '+ Lägg till Resa',
  emptyTripsMsg: 'Inga resor inlagda än. Lägg till dina tidigare eller planerade vistelser i Schengenområdet.',
  colArrival: 'Inresa (Ankomst)',
  colDeparture: 'Utresa (Avresa)',
  colDestination: 'Land / Anteckningar',
  colDays: 'Dagar',
  sampleBtn: 'Ladda Exempelresor',
  clearBtn: 'Rensa Allt',
  timelineTitle: '180-Dagars Rullande Fönster',
  legendInSchengen: 'I Schengen',
  legendOutside: 'Utanför',
  legendOverstay: 'Överträdelse',
  bannerSafe: 'Den {date} har du förbrukat {used} ({rem} tillgängliga).',
  bannerWarning: 'Den {date} har du förbrukat {used} (endast {rem} kvar).',
  bannerOverstay: 'Olovlig vistelse upptäckt från och med {date}. Din resa överskrider gränsen med {days}.',
  unitDays: 'dagar',
  notesPlaceholder: 't.ex. Frankrike, Spanien',
  sampleNotes1: 'Italienresa (20 dagar)',
  sampleNotes2: 'Tyskland och Österrike (20 dagar)',
  sampleNotesDefault: 'Frankrike och Spanien',
};

const seo: ToolLocaleContent<SchengenCalculatorUI>['seo'] = [
  {
    type: 'title',
    text: 'Hur 90 180 Schengenregeln Fungerar i Praktiken',
    level: 2,
  },
  {
    type: 'summary',
    title: 'Grundprinciper för det Rullande Schengenfönstret',
    items: [
      'Medborgare från tredjeland får vistas i Schengenområdet i högst 90 dagar under varje rullande 180-dagarsperiod.',
      '180-dagarsfönstret flyttas framåt varje dag och analyserar alltid 179 dagar bakåt i tiden.',
      'Både ankomstdagen och avresedagen räknas som hela vistelsedagar inom territoriet.',
      'Att lämna Europa återställer inte dina 90 dagar utan en sammanhängande frånvaro på 90 dagar.',
    ],
  },
  {
    type: 'paragraph',
    html: 'Schengenområdet tillämpar en strikt gräns på <strong>högst 90 dagars vistelse under varje 180-dagarsperiod</strong> för viseringsfria resenärer och innehavare av C-visering enligt artikel 6.1 i <em>kodexen om Schengengränserna (förordning EU 2016/399)</em>. För varje enskild dag du vistas i Europa beräknar gränspolisen det sammanlagda antalet dagar du tillbringat i de 29 medlemsstaterna under de föregående 179 dagarna plus innevarande dag.',
  },
  {
    type: 'title',
    text: 'Viktiga Mått och Gränskontrollstandarder',
    level: 2,
  },
  {
    type: 'stats',
    items: [
      {
        value: '90 Dagar',
        label: 'Maximal Total Vistelse',
      },
      {
        value: '180 Dagar',
        label: 'Rullande Kontrollfönster',
      },
      {
        value: 'Båda Dagarna',
        label: 'Inkluderande Gränsräkning',
      },
      {
        value: '29 Stater',
        label: 'Gemensamt Schengenområde',
      },
    ],
  },
  {
    type: 'title',
    text: 'Fasta Kalenderkvoter vs Dynamiska Rullande Fönster',
    level: 2,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Missuppfattningen om Kalenderår',
        description:
          'Många resenärer tror felaktigt att deras 90 dagar förnyas automatiskt den 1 januari eller efter en kort avstickare utanför Europa. Detta leder till oavsiktliga överträdelser och höga böter vid gränskontrollen.',
      },
      {
        title: 'Verkligt Rullande System',
        description:
          'Varje dag i Schengenområdet registreras på en kontinuerlig tidslinje. När tiden går faller äldre dagar ut ur 180-dagarsfönstret och låser successivt upp nya tillåtna dagar.',
      },
    ],
  },
  {
    type: 'title',
    text: 'Typiska Resemönster och Rättslig Bedömning',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Resemönster', 'Exempel', 'Status', 'Rekommendation'],
    rows: [
      [
        'Enstaka Sammanhängande Vistelse',
        'Inresa 1 juni, utresa 29 augusti (90 dagar)',
        'Laglig',
        'Måste lämna området på den 90:e dagen och stanna utanför 90 sammanhängande dagar för full återställning.',
      ],
      [
        'Frekvent Resenär med Flera Resor',
        'Tre resor om 30 dagar med 30 dagars mellanrum',
        'Laglig',
        'Varje delresa måste kontrolleras individuellt mot sitt eget 180-dagars bakåtblickande fönster.',
      ],
      [
        'Digital Nomad Växling',
        'Varva 60 dagar i Schengen med 30 dagar utanför',
        'Hög Risk för Överträdelse',
        'En 30-dagars paus återställer endast dagar som inträffade för 180 dagar sedan; risk för inresevägran.',
      ],
      [
        'Full 90-Dagars Återställning',
        'Oavbruten frånvaro i 90 dagar utanför Schengen',
        'Helt Återställt',
        'Garanterar att hela 90-dagarskvoten är tillgänglig vid nästa inresa.',
      ],
    ],
  },
  {
    type: 'title',
    text: 'Strategiska Tips för Smidiga Gränspassager',
    level: 2,
  },
  {
    type: 'tip',
    title: 'Planera med Säkerhetsmarginal',
    html: 'Boka aldrig din hemresa på exakt dag 90. Ett inställt flyg eller en akut sjukdom kan skjuta upp din avresa till dag 91, vilket leder till automatisk registrering i EU:s in- och utresesystem (EES) och framtida inreseförbud.',
  },
  {
    type: 'card',
    title: 'Spara Bevis på Vistelse Utanför Schengen',
    html: 'Spara boardingkort, hotellkvitton och passstämplar från icke-Schengenländer (som Storbritannien, Irland, Cypern, Montenegro eller Albanien) för att kunna bevisa din frånvaro vid eventuell kontroll.',
  },
  {
    type: 'title',
    text: 'Ordlista för Europeiska Gränsbegrepp',
    level: 2,
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'Overstay (Överträdelse)',
        definition:
          'Att stanna i Schengenområdet längre än de tillåtna 90 dagarna under en 180-dagarsperiod, vilket kan leda till böter, utvisning eller inreseförbud.',
      },
      {
        term: 'EES (In- och Utresesystem)',
        definition:
          'EU:s automatiserade IT-system som ersätter passstämplar med biometrisk registrering för resenärer utanför EU.',
      },
      {
        term: 'Tredjelandsmedborgare',
        definition:
          'Varje person som inte är medborgare i en EU-medlemsstat eller ett EFTA-land.',
      },
    ],
  },
];

const faq: ToolLocaleContent<SchengenCalculatorUI>['faq'] = [
  {
    question: 'Vad innebär 90 180 regeln i Schengenområdet?',
    answer:
      'Den tillåter medborgare från länder utanför EU att vistas utan visum för längre vistelse i upp till 90 dagar under varje rullande 180-dagarsperiod i de 29 medlemsländerna.',
  },
  {
    question: 'Nollställs de 90 dagarna när man lämnar Europa?',
    answer:
      'Nej. Att lämna Schengenområdet nollställer inte räknaren. 180-dagarsfönstret rör sig kontinuerligt; en fullständig återställning sker först efter 90 sammanhängande dagar utanför Schengenområdet.',
  },
  {
    question: 'Räknas ankomst- och avresedag som hela dagar?',
    answer:
      'Ja. Enligt artikel 6 i kodexen om Schengengränserna räknas både ankomstdagen och avresedagen som hela vistelsedagar i Schengenområdet.',
  },
  {
    question: 'Vilka länder ingår i Schengenområdet för denna beräkning?',
    answer:
      'Det omfattar 29 länder: Belgien, Bulgarien, Danmark, Estland, Finland, Frankrike, Grekland, Island, Italien, Kroatien, Lettland, Liechtenstein, Litauen, Luxemburg, Malta, Nederländerna, Norge, Polen, Portugal, Rumänien, Schweiz, Slovakien, Slovenien, Spanien, Sverige, Tjeckien, Tyskland, Ungern och Österrike. Storbritannien och Irland ingår inte.',
  },
];

const howTo: ToolLocaleContent<SchengenCalculatorUI>['howTo'] = [
  {
    name: 'Välj Måldatum',
    text: 'Ange datumet för din nästa resa för att kontrollera hur många tillåtna dagar du har till förfogande vid den tidpunkten.',
  },
  {
    name: 'Fyll i Tidigare och Planerade Resor',
    text: 'Ange inrese- och utresedatum för alla dina vistelser i Schengenländer under de senaste månaderna.',
  },
  {
    name: 'Granska Dagar och Marginaler',
    text: 'Kontrollera mätaren för återstående dagar, maximal sammanhängande vistelsetid och datum för full återställning.',
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
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<SchengenCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  howTo,
  howToTitle: 'Hur du beräknar din Schengenvistelse',
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography: bibliographyEntries,
};
