import type { LuggageCalculatorUI, LuggageCalculatorLocaleContent } from '../index';

const slug = 'calculateur-bagages-cabine';
const title = 'Calculateur de Bagages Cabine : Mesures par Compagnie 2026';
const description = 'Consultez les dimensions et le poids autorisés pour votre bagage cabine et votre accessoire personnel sur toutes les compagnies aériennes.';

const ui: LuggageCalculatorUI = {
  title: "Mesures par Compagnie",
  searchLabel: 'Recherchez votre compagnie',
  searchPlaceholder: 'Recherchez votre compagnie...',
  personalItemTitle: 'Petit Sac',
  cabinBagTitle: 'Valise Cabine',
  weightLabel: 'Poids',
  noResults: 'Nous n\'avons pas trouvé cette compagnie. Essayez la recherche globale.',
  modalNoteTitle: 'Note importante :',
  modalNoteText: 'Certaines compagnies low-cost n\'autorisent la valise cabine que sous le siège si le service "Priorité" n\'a pas été souscrit.',
  personalItemDetail: 'Sac sous le siège',
  cabinBagDetail: 'Bagage à main',
  airlines: [
    {
      name: "Ryanair",
      personal: "40 x 20 x 25 cm",
      personalWeight: "Sans limite",
      cabin: "55 x 40 x 20 cm",
      cabinWeight: "10 kg",
      icon: "mdi:airplane",
    },
    {
      name: "Vueling",
      personal: "40 x 20 x 30 cm",
      personalWeight: "Sans limite",
      cabin: "55 x 40 x 20 cm",
      cabinWeight: "10 kg",
      icon: "mdi:airplane",
    },
    {
      name: "Iberia",
      personal: "40 x 30 x 15 cm",
      personalWeight: "Sans limite",
      cabin: "56 x 40 x 25 cm",
      cabinWeight: "10 kg",
      icon: "mdi:airplane",
    },
    {
      name: "EasyJet",
      personal: "45 x 36 x 20 cm",
      personalWeight: "15 kg",
      cabin: "56 x 45 x 25 cm",
      cabinWeight: "15 kg",
      icon: "mdi:airplane",
    },
    {
      name: "Air France",
      personal: "40 x 30 x 15 cm",
      personalWeight: "12 kg (total)",
      cabin: "55 x 35 x 25 cm",
      cabinWeight: "12 kg (total)",
      icon: "mdi:airplane",
    },
    {
      name: "Lufthansa",
      personal: "40 x 30 x 10 cm",
      personalWeight: "Sans limite",
      cabin: "55 x 40 x 23 cm",
      cabinWeight: "8 kg",
      icon: "mdi:airplane",
    },
    {
      name: "British Airways",
      personal: "40 x 30 x 15 cm",
      personalWeight: "23 kg",
      cabin: "56 x 45 x 25 cm",
      cabinWeight: "23 kg",
      icon: "mdi:airplane",
    },
    {
      name: "Emirates",
      personal: "Inclus en cabine",
      personalWeight: "-",
      cabin: "55 x 38 x 20 cm",
      cabinWeight: "7 kg",
      icon: "mdi:airplane",
    },
  ],
};

const faq: LuggageCalculatorLocaleContent['faq'] = [
  {
    question: "Que se passe-t-il si ma valise dépasse les mesures de 1 ou 2 cm ?",
    answer: "Cela dépend de la compagnie et du personnel de porte. Les compagnies low-cost utilisent souvent un gabarit métallique ; si la valise n'y entre pas librement, vous devrez payer un supplément en porte, généralement entre 45€ et 65€.",
  },
  {
    question: "Puis-je emporter un sac à dos et une valise cabine gratuitement ?",
    answer: "Sur des compagnies comme Air France ou Lufthansa, oui. Sur des compagnies comme Ryanair ou Vueling (tarif de base), vous ne pouvez emporter qu'un petit sac sous le siège.",
  },
];

const howTo: LuggageCalculatorLocaleContent['howTo'] = [
  {
    name: "Recherchez votre compagnie",
    text: "Utilisez notre moteur de recherche pour voir les limites spécifiques de votre transporteur.",
  },
];

const bibliography: LuggageCalculatorLocaleContent['bibliography'] = [
  {
    name: "AENA: Passengers and Baggage",
    url: "https://www.aena.es/es/pasajeros/pasajeros.html",
  },
  {
    name: "Air Passenger Rights - EU",
    url: "https://europa.eu/youreurope/citizens/travel/passenger-rights/air/index_es.htm",
  },
  {
    name: "IATA: Passenger Baggage Rules",
    url: "https://www.iata.org/en/programs/ops-infra/baggage/passenger-baggage-rules/",
  },
];

export const content: LuggageCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo: [
    {
        type: "title",
        text: "Guide Complet des Dimensions des Bagages Cabine 2026",
        level: 2,
    },
    {
        type: "summary",
        title: "Tout ce qu'il faut savoir avant de s'envoler",
        items: [
            "Guide actualisé des dimensions pour l'accessoire personnel et la valise cabine.",
            "Comparaison des poids autorisés par compagnie (de 7kg à 23kg).",
            "Différence entre article personnel, bagage à main et bagage enregistré.",
            "Conseils pour éviter les suppléments à la porte d'embarquement.",
        ],
    },
    {
        type: "paragraph",
        html: "Voyager aujourd'hui est devenu un véritable puzzle logistique. Ce qui était autrefois un standard universel (le sac de 10 kg) est devenu une jungle de mesures qui varient de quelques centimètres d'une compagnie à l'autre. Notre <strong>calculateur de bagages</strong> est né pour répondre à la question la plus répétée dans les aéroports : \"Vais-je payer un supplément pour ce sac ?\".",
    },
    {
        type: "title",
        text: "Article Personnel vs. Bagage Cabine",
        level: 3,
    },
    {
        type: "paragraph",
        html: "Comprendre la hiérarchie moderne des bagages est vital. Depuis que le modèle *Low Cost* s'est imposé, la plupart des compagnies ont fragmenté ce que vous pouvez emporter dans l'avion. L'<strong>article personnel</strong> (petit sac à dos, sac à main ou sac d'ordinateur) est généralement le seul qui soit gratuit sur les tarifs de base, tandis que le <strong>bagage cabine</strong> (le trolley traditionnel) nécessite souvent un supplément.",
    },
    {
        type: "comparative",
        items: [
            {
                title: "Compagnies Low Cost",
                description: "Règles strictes, n'autorisant généralement qu'un petit sac sous le siège gratuitement.",
                icon: "mdi:tag-outline",
                points: [
                    "Ryanair/Vueling : Bagage cabine payant",
                    "Dimensions surveillées avec gabarit",
                    "Poids maximum entre 8kg et 10kg",
                    "Suppléments élevés si vous dépassez la taille",
                ],
            },
            {
                title: "Compagnies Traditionnelles",
                description: "Politiques plus flexibles, incluant généralement un bagage cabine dans presque tous les tarifs.",
                icon: "mdi:airplane-takeoff",
                highlight: true,
                points: [
                    "Air France/Lufthansa : Bagage cabine inclus",
                    "Limites de poids plus élevées (jusqu'à 23kg chez BA)",
                    "Combinaison article personnel + bagage",
                    "Service d'enregistrement gratuit en porte si le vol est complet",
                ],
            },
        ],
    },
    {
        type: "title",
        text: "Dimensions par Compagnie : Tableau Récapitulatif",
        level: 3,
    },
    {
        type: "table",
        headers: ["Compagnie", "Petit Sac (Sous le siège)", "Bagage Cabine (Main)"],
        rows: [
            ["<strong>Air France</strong>", "40 x 30 x 15 cm", "55 x 35 x 25 cm (Inclus)"],
            ["<strong>Ryanair</strong>", "40 x 20 x 25 cm", "55 x 40 x 20 cm (Payant)"],
            ["<strong>Vueling</strong>", "40 x 20 x 30 cm", "55 x 40 x 20 cm (Payant)"],
            ["<strong>Iberia</strong>", "40 x 30 x 15 cm", "56 x 40 x 25 cm (Inclus)"],
            ["<strong>Lufthansa</strong>", "40 x 30 x 10 cm", "55 x 40 x 23 cm (Inclus)"],
        ],
    },
    {
        type: "tip",
        title: "L'Astuce du Poids",
        html: "<p>De nombreuses compagnies comme Emirates ou Qatar sont très strictes sur le poids (7kg) mais plus détendues sur les mesures. D'autres comme British Airways autorisent jusqu'à 23kg tant que vous pouvez soulever le bagage vous-même. Pesez-le toujours chez vous !</p>",
    },
    {
        type: "title",
        text: "Conclusion : Voyagez sans Stress",
        level: 3,
    },
    {
        type: "paragraph",
        html: "Vérifier les mesures de vos bagages avant de partir pour l'aéroport vous fera économiser non seulement de l'argent (les frais de porte dépassent souvent 50€), mais aussi le stress de commencer vos vacances par une dispute au comptoir.",
    },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [],
};
