import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FuelCostCalculatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'calculateur-cout-carburant-trajet';
const title = "Calculateur del Coût de Carburant pour Voyages";
const description = "Estimez le coût en carburant de votre trajet selon la distance, la consommation du véhicule, le prix à la pompe, le nombre de passagers et le trajet aller-retour.";

const ui: FuelCostCalculatorUI = {
  "metricLabel": "Métrique",
  "imperialLabel": "Impérial",
  "routeHeading": "Ajuster votre trajet",
  "distanceLabel": "Distance aller",
  "distanceHint": "Quelle est la distance jusqu à destination ?",
  "consumptionLabel": "Consommation du véhicule",
  "consumptionHint": "Entrez la consommation de votre voiture",
  "priceLabel": "Prix du carburant",
  "priceHint": "Entrez le prix actuel à la pompe",
  "passengersLabel": "Passagers",
  "roundTripLabel": "Aller-retour",
  "currencyLabel": "Devise",
  "presetsLabel": "Trajets rapides",
  "presetCommute": "Trajet quotidien",
  "presetWeekend": "Escapade week-end",
  "presetRoadTrip": "Grand voyage",
  "resultHeading": "Prévision de carburant",
  "totalDistanceLabel": "Distance totale",
  "fuelUsedLabel": "Carburant nécessaire",
  "totalCostLabel": "Coût total du carburant",
  "perPersonLabel": "Chaque voyageur paie",
  "routeStatement": "{distance} {unit} aller-retour, partagé entre {passengers}",
  "routeOneWayStatement": "{distance} {unit} aller simple, partagé entre {passengers}",
  "statusLight": "Dépense modérée",
  "statusMedium": "Bon trajet à partager",
  "statusHigh": "Grand parcours",
  "sampleButton": "Charger un exemple",
  "resetButton": "Réinitialiser",
  "litersUnit": "L",
  "gallonsUnit": "gal",
  "distanceMetricUnit": "km",
  "distanceImperialUnit": "mi",
  "consumptionMetricUnit": "L/100 km",
  "consumptionImperialUnit": "mpg",
  "priceMetricUnit": "par litre",
  "priceImperialUnit": "par gallon",
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
    },
    {
      "code": "JPY",
      "symbol": "¥"
    }
  ]
};

const seo: ToolLocaleContent<FuelCostCalculatorUI>['seo'] = [
  {
    "type": "title",
    "text": "Comment estimer votre budget carburant avant un trajet",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Pour calculer précisément le budget carburant d un voyage, quatre éléments sont nécessaires: la distance aller, la consommation moyenne de votre véhicule, le prix au litre à la pompe et le nombre de passagers. Ce calculateur double la distance si vous cochez aller-retour, évalue les litres nécessaires et répartit le montant équitablement."
  },
  {
    "type": "title",
    "text": "Formule de calcul du coût en carburant",
    "level": 2
  },
  {
    "type": "table",
    "headers": [
      "Étape",
      "Calcul appliqué",
      "Résultat obtenu"
    ],
    "rows": [
      [
        "Distance totale",
        "Distance aller x 2 pour un aller-retour",
        "Distance réelle parcourue en km ou miles"
      ],
      [
        "Carburant consommé",
        "Distance totale x Consommation / 100",
        "Litres de carburant nécessaires"
      ],
      [
        "Coût total",
        "Litres consommés x Prix à la pompe",
        "Dépense totale estimée"
      ],
      [
        "Coût par personne",
        "Coût total / Nombre de passagers",
        "Part individuelle de chaque voyageur"
      ]
    ]
  },
  {
    "type": "tip",
    "title": "Utilisez un prix réel à la pompe",
    "html": "Le prix du carburant varie selon la station, le pays et la date. Entrez le prix exact que vous prévoyez de payer pour obtenir une estimation fiable."
  },
  {
    "type": "title",
    "text": "Unités métriques et impériales",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Le mode métrique utilise les kilomètres et litres aux 100 km, tandis que le mode impérial s appuie sur les miles et miles par gallon. Passer d un système à l autre n altère pas le coût final."
  },
  {
    "type": "list",
    "items": [
      "Prévoyez une marge pour les détours et la recherche de stationnement.",
      "Fiez-vous à la consommation réelle de votre véhicule plutôt qu aux chiffres théoriques.",
      "Pour les grands trajets avec plusieurs pleins, calculez chaque étape séparément."
    ]
  }
];

const faq = [
  {
    "question": "Comment calculer le coût en carburant d un voyage ?",
    "answer": "Multipliez la distance totale par la consommation moyenne de votre véhicule, divisez par 100 pour les L/100 km, puis multipliez par le prix au litre. Divisez ensuite le total par le nombre de passagers."
  },
  {
    "question": "Le calculateur prend-il en compte l aller-retour ?",
    "answer": "Oui. Cochez l option Aller-retour et le calculateur doublera automatiquement la distance avant d évaluer la consommation."
  },
  {
    "question": "Le calculateur utilise-t-il des prix en temps réel ?",
    "answer": "Non. Vous entrez le prix vous-même, ce qui garantit une estimation transparente et adaptable à toutes les stations."
  },
  {
    "question": "Puis-je calculer en miles et gallons ?",
    "answer": "Oui. Basculez en mode Impérial pour saisir vos données en miles et miles par gallon (mpg)."
  }
];

const howTo = [
  {
    "name": "Choisissez l unité",
    "text": "Sélectionnez Métrique pour les kilomètres et L/100km, ou Impérial pour les miles et mpg."
  },
  {
    "name": "Saisissez vos données",
    "text": "Indiquez la distance aller, la consommation du véhicule, le prix du carburant et le nombre de passagers."
  },
  {
    "name": "Consultez les résultats",
    "text": "Cochez aller-retour si besoin, choisissez votre devise et consultez la répartition des coûts."
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

export const content: ToolLocaleContent<FuelCostCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  howTo,
  howToTitle: "Comment calculer le coût en carburant de votre voyage",
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography: bibliographyEntries,
};
