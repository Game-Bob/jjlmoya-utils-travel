import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SchengenCalculatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'calcolatore-soggiorno-schengen-90-180';
const title = 'Calcolatore Soggiorno Schengen 90 180 Giorni';
const description =
  'Verifica la conformità del tuo viaggio in Europa con la regola 90/180 giorni. Calcola i giorni di soggiorno disponibili ed evita irregolarità nell area Schengen.';

const ui: SchengenCalculatorUI = {
  verdictSafeTitle: 'Viaggio Conforme e Sicuro (Entro i Limiti)',
  verdictWarningTitle: 'Attenzione: Vicino al Limite dei 90 Giorni',
  verdictOverstayTitle: 'Soggiorno Irregolare Rilevato (Overstay)',
  daysRemainingSub: 'Giorni Consentiti Rimanenti',
  daysUsedSub: 'Giorni Usati in 180 Giorni',
  maxStaySub: 'Soggiorno Continuo Massimo',
  fullResetSub: 'Data di Ripristino Totale a 90 Giorni',
  plannerHeading: '1. Verifica Data di Ingresso',
  plannerEntryLabel: 'Data di Ingresso o Volo Previsto',
  quickDatesLabel: 'Vai alla Data',
  presetToday: 'Oggi',
  presetPlus7: '+1 Settimana',
  presetPlus14: '+2 Settimane',
  presetPlus30: '+1 Mese',
  tripsHeading: '2. Storico Viaggi Schengen (Passati e Futuri)',
  addTripBtn: '+ Aggiungi Viaggio',
  emptyTripsMsg: 'Nessun viaggio registrato. Aggiungi i tuoi soggiorni passati o pianificati nell area Schengen.',
  colArrival: 'Ingresso (Arrivo)',
  colDeparture: 'Uscita (Partenza)',
  colDestination: 'Paese / Note',
  colDays: 'Giorni',
  sampleBtn: 'Carica Esempio Nomade',
  clearBtn: 'Cancella Tutto',
  timelineTitle: 'Finestra Mobile di 180 Giorni',
  legendInSchengen: 'In Schengen',
  legendOutside: 'Fuori',
  legendOverstay: 'Soggiorno Irregolare',
  bannerSafe: 'Il {date}, avrai utilizzato {used} ({rem} disponibili).',
  bannerWarning: 'Il {date}, avrai utilizzato {used} (solo {rem} rimanenti).',
  bannerOverstay: 'Soggiorno irregolare rilevato a partire dal {date}. Il tuo itinerario supera il limite di {days}.',
  unitDays: 'giorni',
  notesPlaceholder: 'es. Francia, Spagna',
  sampleNotes1: 'Viaggio in Italia (20 giorni)',
  sampleNotes2: 'Germania e Austria (20 giorni)',
  sampleNotesDefault: 'Francia e Spagna',
};

const seo: ToolLocaleContent<SchengenCalculatorUI>['seo'] = [
  {
    type: 'title',
    text: 'Come Funziona Davvero la Regola 90 180 nell Area Schengen',
    level: 2,
  },
  {
    type: 'summary',
    title: 'Principi Fondamentali della Finestra Mobile Schengen',
    items: [
      'I cittadini extra-UE possono soggiornare fino a 90 giorni in qualsiasi periodo mobile di 180 giorni.',
      'La finestra di 180 giorni si sposta in avanti ogni giorno e guarda indietro di 179 giorni.',
      'Sia il giorno di arrivo che quello di partenza contano come intere giornate di presenza fisica.',
      'Uscire dall Europa non azzera il conteggio dei 90 giorni senza un assenza continua di 90 giorni.',
    ],
  },
  {
    type: 'paragraph',
    html: 'L area Schengen impone un limite massimo di <strong>90 giorni di soggiorno in qualsiasi finestra di 180 giorni</strong> per i cittadini di paesi terzi che viaggiano senza visto o con visto uniforme di tipo C, in base all articolo 6(1) del <em>Codice Frontiere Schengen (Regolamento UE 2016/399)</em>. Ogni giorno di presenza sul territorio europeo, la polizia di frontiera calcola i giorni trascorsi nei 29 paesi membri nell arco dei 179 giorni precedenti più il giorno corrente.',
  },
  {
    type: 'title',
    text: 'Indicatori Chiave e Standard di Controllo Frontaliero',
    level: 2,
  },
  {
    type: 'stats',
    items: [
      {
        value: '90 Giorni',
        label: 'Soggiorno Massimo Consentito',
      },
      {
        value: '180 Giorni',
        label: 'Finestra Mobile di Controllo',
      },
      {
        value: 'Entrambi i Giorni',
        label: 'Conteggio Frontaliero Inclusivo',
      },
      {
        value: '29 Paesi',
        label: 'Territorio Comune Schengen',
      },
    ],
  },
  {
    type: 'title',
    text: 'Quote di Anno Solare vs Finestre Mobili Continue',
    level: 2,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Errore dell Anno Solare Fisso',
        description:
          'Molti viaggiatori credono che i 90 giorni si azzerino il 1° gennaio o dopo una breve uscita dai confini europei. Questo errore causa frequenti violazioni di overstay e sanzioni pecuniarie ai controlli aeroportuali.',
      },
      {
        title: 'Reale Funzionamento della Finestra Mobile',
        description:
          'Ogni giorno trascorso in Europa scorre su una linea temporale continua. Con il passare dei giorni, le presenze più vecchie escono dalla finestra dei 180 giorni, liberando progressivamente nuove giornate autorizzate.',
      },
    ],
  },
  {
    type: 'title',
    text: 'Profili di Viaggio Comuni e Analisi di Legalita',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Profilo di Viaggio', 'Esempio', 'Stato Legale', 'Consiglio Operativo'],
    rows: [
      [
        'Soggiorno Singolo Continuo',
        'Ingresso 1 giugno, uscita 29 agosto (90 giorni)',
        'Conforme',
        'Deve lasciare l area al 90° giorno esatto e rimanere fuori per 90 giorni consecutivi prima di rientrare.',
      ],
      [
        'Viaggiatore Frequente Multi-Tratta',
        'Tre viaggi da 30 giorni intervallati da 30 giorni di pausa',
        'Conforme',
        'Ogni ingresso deve essere verificato rispetto alla finestra mobile retrospettiva di 180 giorni.',
      ],
      [
        'Nomade Digitale Alternato',
        'Alternare 60 giorni in Schengen e 30 giorni fuori',
        'Rischio Critico di Overstay',
        'Una pausa di 30 giorni recupera solo i giorni trascorsi 180 giorni prima, rischiando il respingimento alla frontiera.',
      ],
      [
        'Ripristino Totale 90 Giorni',
        'Assenza ininterrotta di 90 giorni fuori da Schengen',
        'Completamente Ripristinato',
        'Garantisce il recupero integrale dei 90 giorni al momento del successivo ingresso.',
      ],
    ],
  },
  {
    type: 'title',
    text: 'Consigli Strategici per Evitare Sanzioni Frontaliere',
    level: 2,
  },
  {
    type: 'tip',
    title: 'Pianifica Giorni di Sicurezza',
    html: 'Non programmare mai il volo di ritorno esattamente per il 90° giorno. Una cancellazione improvvisa del volo o un imprevisto sanitario può far slittare la partenza al giorno 91, causando una registrazione di soggiorno illegale nel nuovo sistema biometrico europeo EES.',
  },
  {
    type: 'card',
    title: 'Conserva le Prove di Soggiorno Fuori da Schengen',
    html: 'Conserva con cura carte d imbarco, timbri sul passaporto e ricevute alberghiere di paesi non Schengen (come Regno Unito, Irlanda, Cipro, Montenegro o Albania) per dimostrare documentalmente la tua assenza in caso di controlli.',
  },
  {
    type: 'title',
    text: 'Glossario dei Termini di Frontiera Europea',
    level: 2,
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'Overstay (Soggiorno Irregolare)',
        definition:
          'Il superamento del limite legale di 90 giorni in un periodo di 180 giorni, punito con multe pecuniarie, espulsione o divieto di reingresso.',
      },
      {
        term: 'EES (Entry Exit System)',
        definition:
          'Il sistema informatico automatizzato dell UE che registra i dati biometrici dei viaggiatori non comunitari in entrata e in uscita.',
      },
      {
        term: 'Cittadino di Paese Terzo',
        definition:
          'Qualsiasi individuo che non sia cittadino di uno Stato membro dell Unione Europea o dell EFTA.',
      },
    ],
  },
];

const faq: ToolLocaleContent<SchengenCalculatorUI>['faq'] = [
  {
    question: 'Che cos e esattamente la regola 90 180 nell area Schengen ?',
    answer:
      'Consente ai cittadini extra-UE senza visto di lungo soggiorno di rimanere nei 29 paesi dell area Schengen per un massimo di 90 giorni in qualsiasi periodo mobile di 180 giorni.',
  },
  {
    question: 'I 90 giorni si azzerano quando si esce dall Europa ?',
    answer:
      'No. Uscire dall area Schengen non azzera il conteggio. Il periodo di 180 giorni è una finestra mobile; il ripristino totale dei 90 giorni avviene solo dopo 90 giorni consecutivi trascorsi fuori dall area Schengen.',
  },
  {
    question: 'I giorni di arrivo e partenza contano come giorni interi ?',
    answer:
      'Sì. Ai sensi dell articolo 6 del Codice Frontiere Schengen, sia il giorno di ingresso che il giorno di uscita sono conteggiati come giorni interi di soggiorno.',
  },
  {
    question: 'Quali paesi fanno parte dell area Schengen per questo calcolo ?',
    answer:
      'Comprende 29 paesi: Austria, Belgio, Bulgaria, Croazia, Danimarca, Estonia, Finlandia, Francia, Germania, Grecia, Islanda, Italia, Lettonia, Liechtenstein, Lituania, Lussemburgo, Malta, Norvegia, Paesi Bassi, Polonia, Portogallo, Repubblica Ceca, Romania, Slovacchia, Slovenia, Spagna, Svezia, Svizzera e Ungheria. Regno Unito e Irlanda non fanno parte di Schengen.',
  },
];

const howTo: ToolLocaleContent<SchengenCalculatorUI>['howTo'] = [
  {
    name: 'Seleziona la Data di Riferimento',
    text: 'Scegli la data del tuo prossimo viaggio per verificare il saldo dei giorni legali a tua disposizione.',
  },
  {
    name: 'Inserisci i Viaggi Passati e Futuri',
    text: 'Aggiungi le date di arrivo e partenza per tutti i soggiorni effettuati in paesi Schengen negli ultimi mesi.',
  },
  {
    name: 'Esamina il Margine di Sicurezza',
    text: 'Controlla l indicatore dei giorni rimanenti, la durata massima del soggiorno continuo e la data di ripristino.',
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
  inLanguage: 'it',
};

export const content: ToolLocaleContent<SchengenCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  howTo,
  howToTitle: 'Come calcolare il soggiorno Schengen',
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography: bibliographyEntries,
};
