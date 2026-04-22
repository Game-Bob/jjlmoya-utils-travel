import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TipCalculatorUI } from '../index';

const slug = 'calculateur-pourboire-international';
const title = 'Calculateur de Pourboire International';
const description = 'Gérez vos pourboires en toute confiance lors de vos voyages. Guide complet des pourcentages et de l\'étiquette par pays.';

const ui: TipCalculatorUI = {
  title: "Calculateur de Pourboires",
  badge: "Outil International",
  billLabel: "Montant de l'addition",
  countryLabel: "Pays / Coutume locale",
  tipLabel: "Pourcentage du pourboire",
  splitLabel: "Partager l'addition",
  summaryTip: "Pourboire Total",
  summarySubtotal: "Sous-total",
  summaryTotalPerson: "Total par Personne",
  protocolTitle: "Protocole",
  placeholderAmount: "0.00",
  placeholderFilter: "Rechercher un pays...",
  placeholderSelect: "Sélectionnez un pays",
  countries: [
    {
      id: "usa",
      name: "États-Unis et Canada",
      min: 18,
      max: 25,
      default: 20,
      culture: "Le pourboire est essentiel. Prévoir entre 18% et 25%. Ne pas laisser de pourboire est considéré como une faute grave.",
    },
    {
      id: "esp",
      name: "Espagne",
      min: 0,
      max: 10,
      default: 5,
      culture: "Optionnel. Il est courant d'arrondir ou de laisser 5 à 10% pour un bon service.",
    },
    {
      id: "jpn",
      name: "Japon",
      min: 0,
      max: 0,
      default: 0,
      culture: "Pas de pourboire. Cela peut être perçu comme impoli ou offensant.",
    },
    {
      id: "ita",
      name: "Italie",
      min: 0,
      max: 10,
      default: 0,
      culture: "Le 'coperto' est un frais pour le service de table, le pain et le couvert. Un pourboire de 5-10% est apprécié mais optionnel.",
    },
    {
      id: "fra",
      name: "France",
      min: 0,
      max: 10,
      default: 5,
      culture: "Le service est légalement inclus. On laisse un petit extra (pourboire) pour un service exceptionnel.",
    },
    {
      id: "gbr",
      name: "Royaume-Uni",
      min: 0,
      max: 12.5,
      default: 10,
      culture: "Prévoyez environ 10% si le service n'est pas déjà inclus dans l'addition.",
    },
    {
      id: "mex",
      name: "Mexique",
      min: 10,
      max: 15,
      default: 12,
      culture: "Un pourboire de 10-15% ('propina') est attendu. C'est crucial pour les travailleurs du secteur.",
    },
    {
      id: "arg",
      name: "Argentine",
      min: 0,
      max: 10,
      default: 10,
      culture: "La norme est de 10%. On le laisse presque toujours si le service était correct.",
    },
    {
      id: "bra",
      name: "Brésil",
      min: 0,
      max: 10,
      default: 10,
      culture: "Souvent, 10% de 'Serviço' sont inclus dans l'addition. C'est optionnel mais la plupart le paient.",
    },
    {
      id: "deu",
      name: "Allemagne",
      min: 5,
      max: 10,
      default: 7,
      culture: "Il est courant d'arrondir ou d'ajouter 5-10%. Annoncez le montant total incluant le pourboire au serveur.",
    },
    {
      id: "tur",
      name: "Turquie",
      min: 5,
      max: 10,
      default: 10,
      culture: "Dans les zones touristiques, 10% en espèces sont attendus. Rarement payable par carte.",
    },
    {
      id: "aus",
      name: "Australie",
      min: 0,
      max: 10,
      default: 0,
      culture: "Pas attendu grâce aux salaires minimums élevés. On peut laisser 10% dans les restaurants gastronomiques.",
    },
    {
      id: "chn",
      name: "Chine",
      min: 0,
      max: 0,
      default: 0,
      culture: "Historiquement, aucun pourboire. Dans certains endroits, c'est même interdit.",
    },
    {
      id: "prt",
      name: "Portugal",
      min: 0,
      max: 10,
      default: 5,
      culture: "L'usage est de laisser la monnaie ou d'arrondir. 5-10% dans les zones touristiques.",
    },
    {
      id: "grc",
      name: "Grèce",
      min: 0,
      max: 10,
      default: 5,
      culture: "Arrondir l'addition suffit généralement. 5-10% supplémentaires sont très appréciés.",
    },
  ]
};

const seo: ToolLocaleContent<TipCalculatorUI>['seo'] = [
  {
    type: "title",
    text: "Guide International du Pourboire : Étiquette et Pourcentages 2026",
    level: 2,
  },
  {
    type: "summary",
    title: "Apprenez à donner un pourboire comme un local partout dans le monde",
    items: [
      "Guide complet sur le pourcentage de pourboire attendu dans les principales destinations touristiques.",
      "Comment calculer rapidement le pourboire à partir du sous-total ou du total incluant les taxes.",
      "Différence entre frais de service, couvert (coperto) et pourboire volontaire.",
      "Règles d'étiquette pour les situations spéciales : taxis, hôtels et guides touristiques.",
    ],
  },
  {
    type: "paragraph",
    html: "L'un des moments les plus stressants de tout voyage international survient lorsque l'addition arrive à table. Notre <strong>calculateur de pourboire international</strong> est conçu pour éliminer cette incertitude.",
  }
];

const faq: ToolLocaleContent<TipCalculatorUI>['faq'] = [
  {
    question: "Le pourboire est-il obligatoire aux États-Unis ?",
    answer: "Légalement non, mais socialement oui. Prévoyez entre 18% et 25%.",
  },
  {
    question: "Dans quels pays le pourboire est-il offensant ?",
    answer: "Principalement au Japon et en Corée du Sud. Un bon service est considéré como un devoir.",
  },
  {
    question: "Dois-je donner un pourboire si le service était mauvais ?",
    answer: "Dans les pays où c'est optionnel, le plus correct est de ne rien laisser.",
  },
  {
    question: "Le pourboire est-il calculé avant ou après taxes ?",
    answer: "En Amérique du Nord, il est calculé sur le sous-total. En Europe, il est calculé sur le total.",
  },
];

const howTo: ToolLocaleContent<TipCalculatorUI>['howTo'] = [
  {
    name: "Saisissez le montant",
    text: "Entrez le montant total de votre facture avant le pourboire.",
  },
  {
    name: "Sélectionnez le pays",
    text: "Choisissez votre destination pour charger automatiquement la recommandation.",
  },
  {
    name: "Ajustez et partagez",
    text: "Indiquez le nombre de personnes pour diviser la note.",
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
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<TipCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: "Questions Fréquentes",
  bibliography: "Sources et Références",
  howTo,
  howToTitle: "Comment utiliser le calculateur",
  schemas: [faqSchema, howToSchema, appSchema],
};
