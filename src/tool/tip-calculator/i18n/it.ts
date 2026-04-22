import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TipCalculatorUI } from '../index';

const slug = 'calcolatore-mancia-internazionale';
const title = 'Calcolatore Mancia Internazionale';
const description = 'Calcola quanto lasciare di mancia durante i tuoi viaggi. Include una guida alle percentuali e alle regole di etichetta per oltre 50 paesi. Non sbagliare al momento di pagare!';

const ui: TipCalculatorUI = {
  title: "Calcolatore Mancia",
  badge: "Strumento Mancia Internazionale",
  billLabel: "Importo Totale",
  countryLabel: "Paese / Usanze Locali",
  tipLabel: "Percentuale Mancia",
  splitLabel: "Dividi Conto",
  summaryTip: "Mancia Totale",
  summarySubtotal: "Subtotale",
  summaryTotalPerson: "Totale per Persona",
  protocolTitle: "Protocollo",
  placeholderAmount: "0.00",
  placeholderFilter: "Cerca paese...",
  placeholderSelect: "Seleziona un paese",
  countries: [
    {
      id: "usa",
      name: "USA & Canada",
      min: 18,
      max: 25,
      default: 20,
      culture: "La mancia è essenziale per il salario dei camerieri. Ci si aspetta tra il 18% e il 25%. Non lasciarla è considerato una grave mancanza di rispetto verso la cultura nordamericana.",
    },
    {
      id: "esp",
      name: "Spagna",
      min: 0,
      max: 10,
      default: 5,
      culture: "Opzionale. È comune arrotondare il resto o lasciare il 5-10% a cena se il servizio è stato di qualità.",
    },
    {
      id: "jpn",
      name: "Giappone",
      min: 0,
      max: 0,
      default: 0,
      culture: "Niente mancia. È considerata un insulto alla professionalità. Se lasci dei soldi, è probabile che ti inseguano per restituirteli.",
    },
    {
      id: "ita",
      name: "Italia",
      min: 0,
      max: 10,
      default: 0,
      culture: "Il 'coperto' è un costo per il servizio al tavolo, pane e posate, non è la mancia vera e propria. Lasciare un extra del 5-10% è un gesto apprezzato ma del tutto facoltativo.",
    },
    {
      id: "fra",
      name: "Francia",
      min: 0,
      max: 10,
      default: 5,
      culture: "Il servizio è incluso per legge. Lascia la 'pourboire' (piccola mancia extra) solo per un trattamento eccezionale.",
    },
    {
      id: "gbr",
      name: "Regno Unito",
      min: 0,
      max: 12.5,
      default: 10,
      culture: "Spesso al conto viene aggiunto un 12,5% opzionale. Se non c'è, il 10% è lo standard nei ristoranti.",
    },
    {
      id: "mex",
      name: "Messico",
      min: 10,
      max: 15,
      default: 12,
      culture: "È prevista una 'propina' del 10-15%. È una parte vitale dell'economia per i lavoratori del settore.",
    },
    {
      id: "arg",
      name: "Argentina",
      min: 0,
      max: 10,
      default: 10,
      culture: "Lo standard è il 10%. Viene quasi sempre lasciata se il servizio è stato normale o buono.",
    },
    {
      id: "bra",
      name: "Brasile",
      min: 0,
      max: 10,
      default: 10,
      culture: "Normalmente nel conto viene incluso un 10% come 'Serviço'. È facoltativo ma la maggior parte delle persone lo paga.",
    },
    {
      id: "deu",
      name: "Germania",
      min: 5,
      max: 10,
      default: 7,
      culture: "È comune arrotondare o aggiungere il 5-10%. Comunica al cameriere il totale comprensivo di mancia al momento del pagamento.",
    },
    {
      id: "tur",
      name: "Turchia",
      min: 5,
      max: 10,
      default: 10,
      culture: "Nelle zone turistiche è previsto il 10% in contanti. Di solito non può essere aggiunto alla carta di credito.",
    },
    {
      id: "aus",
      name: "Australia",
      min: 0,
      max: 10,
      default: 0,
      culture: "Non prevista. Gli stipendi sono alti. Nei ristoranti di lusso si può lasciare il 10%.",
    },
    {
      id: "chn",
      name: "Cina",
      min: 0,
      max: 0,
      default: 0,
      culture: "Storicamente non si lascia mancia e in molti posti è vietato o considerato strano.",
    },
    {
      id: "prt",
      name: "Portogallo",
      min: 0,
      max: 10,
      default: 5,
      culture: "È consuetudine lasciare il resto o arrotondare. Nelle zone turistiche il 5-10% è comune.",
    },
    {
      id: "grc",
      name: "Grecia",
      min: 0,
      max: 10,
      default: 5,
      culture: "Di solito è sufficiente arrotondare il conto. Un extra del 5-10% è molto apprezzato ma non obbligatorio.",
    },
  ]
};

const seo: ToolLocaleContent<TipCalculatorUI>['seo'] = [
  {
    type: "title",
    text: "Guida Internazionale alla Mancia: Etichetta e Percentuali 2026",
    level: 2,
  },
  {
    type: "summary",
    title: "Impara a lasciare la mancia come un locale ovunque nel mondo",
    items: [
      "Guida completa sulla percentuale di mancia prevista nelle principali destinazioni turistiche.",
      "Come calcolare rapidamente la mancia partendo dal subtotale o dal totale comprensivo di tasse.",
      "Differenza tra costi di servizio, coperto e mancia volontaria.",
      "Regole di etichetta per situazioni speciali: taxi, hotel e guide turistiche.",
    ],
  },
  {
    type: "paragraph",
    html: "Uno dei momenti più stressanti di qualsiasi viaggio internazionale si verifica quando il conto arriva al tavolo. Il nostro <strong>calcolatore di mancia internazionale</strong> è progettato per eliminare tale incertezza.",
  }
];

const faq: ToolLocaleContent<TipCalculatorUI>['faq'] = [
  {
    question: "È obbligatorio lasciare la mancia negli Stati Uniti?",
    answer: "Legalmente no, ma socialmente è obbligatorio. I camerieri dipendono dalle mance per raggiungere il salario minimo. È normale lasciare tra il 18% e il 25%.",
  },
  {
    question: "In quali paesi è offensivo lasciare la mancia?",
    answer: "Principalmente in Giappone e Corea del Sud. Il buon servizio è considerato parte del dovere professionale e non richiede compensi extra.",
  },
  {
    question: "Devo lasciare la mancia se il servizio è stato scarso?",
    answer: "Nei paesi in cui è facoltativa (Europa, Australia), la cosa più corretta è non lasciare nulla.",
  },
  {
    question: "La mancia si calcola prima o dopo le tasse?",
    answer: "In Nord America di solito si calcola sul subtotale (al netto delle tasse). In Europa e America Latina, si calcola sempre sul totale del conto.",
  },
];

const howTo: ToolLocaleContent<TipCalculatorUI>['howTo'] = [
  {
    name: "Inserisci il totale del conto",
    text: "Digita l'importo totale che appare sulla fattura prima di applicare la mancia.",
  },
  {
    name: "Seleziona il paese",
    text: "Scegli la tua destinazione per caricare automaticamente la raccomandazione culturale e la percentuale standard.",
  },
  {
    name: "Regola e dividi",
    text: "Se siete in più persone, indica il numero di persone per sapere quanto deve pagare ognuno comprensivo di mancia.",
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
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'it',
};

export const content: ToolLocaleContent<TipCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: "Domande Frequenti",
  bibliography: "Fonti e Riferimenti",
  howTo,
  howToTitle: "Come usare il calcolatore",
  schemas: [faqSchema, howToSchema, appSchema],
};
