import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TripExpenseSplitterUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'calculateur-partage-depenses-voyage-groupe';
const title = "Calculateur del Partage de Dépenses de Voyage";
const description = "Partagez les dépenses de voyage entre amis, découvrez qui a trop ou pas assez payé, et réglez les comptes avec le minimum de virements.";

const ui: TripExpenseSplitterUI = {
  "tripNameLabel": "Nom du voyage",
  "tripNamePlaceholder": "Nommez ce voyage",
  "currencyLabel": "Devise",
  "travelersHeading": "Voyageurs",
  "travelerPlaceholder": "Voyageur",
  "addTraveler": "Ajouter un voyageur",
  "removeTraveler": "Supprimer",
  "expensesHeading": "Livre des comptes",
  "expenseDescriptionPlaceholder": "C était pour quoi ?",
  "amountLabel": "Montant",
  "payerLabel": "Payé par",
  "participantsLabel": "Partagé entre",
  "allTravelers": "voyageurs",
  "addExpense": "Ajouter une dépense",
  "emptyExpenses": "Votre livre des comptes est vide. Ajoutez la première dépense.",
  "resultHeading": "Virements suggérés",
  "totalSpent": "Dépense totale du groupe",
  "transferCount": "virements",
  "noTransfers": "Tout le monde est quitte. Aucun virement nécessaire.",
  "owes": "doit",
  "receives": "reçoit",
  "from": "de",
  "to": "à",
  "eachPays": "Chaque personne paie",
  "eachReceives": "Chaque personne reçoit",
  "settlementHint": "Le plan indique les personnes et la route de remboursement la plus courte.",
  "copyLink": "Copier le lien",
  "copied": "Lien copié",
  "exportJson": "Exporter en JSON",
  "reset": "Recommencer",
  "removeExpense": "Supprimer dépense",
  "deleteTrip": "Réinitialiser voyage",
  "intro": "Entrez les achats du groupe. Le plan ci-dessous convertit vos dépenses en remboursements simples.",
  "statusBalanced": "Voyage équilibré",
  "statusSettle": "Prêt à régler",
  "statusReady": "En attente de dépenses",
  "currencyOptions": [
    {
      "code": "EUR",
      "symbol": "€"
    },
    {
      "code": "USD",
      "symbol": "$"
    },
    {
      "code": "GBP",
      "symbol": "£"
    }
  ],
  "defaultTripName": "Week-end à la montagne",
  "defaultTravelerNames": [
    "Maya",
    "Alex",
    "Sam"
  ],
  "defaultExpenseNames": [
    "Chalet",
    "Billets de train"
  ]
};

const seo: ToolLocaleContent<TripExpenseSplitterUI>['seo'] = [
  {
    "type": "title",
    "text": "Comment régler les comptes de voyage sans prise de tête",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Faire les comptes d un voyage en groupe devient très simple quand chaque dépense associe un payeur et des participants précis. Ce calculateur additionne les avances de chacun, attribue les coûts réels et génère le plan de remboursement le plus court."
  },
  {
    "type": "title",
    "text": "Calcul des soldes du groupe",
    "level": 2
  },
  {
    "type": "table",
    "headers": [
      "Étape",
      "Calcul appliqué",
      "Objectif"
    ],
    "rows": [
      [
        "Total payé",
        "Somme des dépenses réglées par chaque personne",
        "Enregistre l argent avancé"
      ],
      [
        "Part juste",
        "Division de la dépense par ses participants",
        "Attribue le coût aux utilisateurs réels"
      ],
      [
        "Solde net",
        "Total payé moins la part juste",
        "Indique qui doit recevoir ou payer"
      ],
      [
        "Règlement",
        "Compensation des dettes et des créances",
        "Réduit au minimum le nombre de virements"
      ]
    ]
  },
  {
    "type": "tip",
    "title": "Sélectionnez bien les participants",
    "html": "Le logement concerne souvent tout le monde, mais un repas séparé ou une activité spécifique ne doit être attribué qu à ses participants."
  },
  {
    "type": "title",
    "text": "Simplifiez la conversation de fin de séjour",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Le résultat sert de guide clair et équitable. Vérifiez le livre des comptes ensemble et utilisez les remboursements suggérés."
  }
];

const faq = [
  {
    "question": "Comment fonctionne le partage de dépenses de voyage ?",
    "answer": "Indiquez les voyageurs, les dépenses, le payeur et les participants. Le calculateur évalue les soldes nets et liste les remboursements optimisés."
  },
  {
    "question": "Peut-on attribuer une dépense à certaines personnes seulement ?",
    "answer": "Oui. Choisissez les participants pour chaque dépense afin que le coût soit réparti équitablement."
  },
  {
    "question": "Mes données sont-elles envoyées sur un serveur ?",
    "answer": "Non. Tout reste stocké localement dans votre navigateur."
  },
  {
    "question": "Pourquoi y a-t-il moins de virements que de dépenses ?",
    "answer": "Le calculateur compense les dettes croisées pour équilibrer le groupe avec un minimum de transactions."
  }
];

const howTo = [
  {
    "name": "Ajoutez les voyageurs",
    "text": "Entrez les prénoms de tous les participants du voyage."
  },
  {
    "name": "Saisissez les dépenses",
    "text": "Indiquez le motif, le montant, qui a payé et qui en a profité."
  },
  {
    "name": "Suivez le plan de règlement",
    "text": "Consultez les remboursements suggérés pour équilibrer le groupe."
  }
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'TravelApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<TripExpenseSplitterUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  howTo,
  howToTitle: "Comment partager les dépenses de voyage en groupe",
  schemas: [appSchema, faqSchema, howToSchema],
  bibliography: bibliographyEntries,
};
