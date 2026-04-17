import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { OptimalRoutesUI } from '../index';

const slug = 'calculateur-itineraire-optimal';
const title = 'Calculateur d\'Itinéraire Optimal | Réorganisation Intelligente des Arrêts';
const description = 'Optimisez vos itinéraires de livraison ou de voyage gratuitement. Notre outil réorganise automatiquement vos arrêts pour trouver le chemin le plus court et le plus efficace.';

const ui: OptimalRoutesUI = {
  title: "Itinéraires Optimaux",
  sidebar: {
    title: "Plan de Route",
    addPoint: "Ajouter un arrêt (cliquer sur la carte)",
    pointsList: "Vos arrêts",
    emptyState: "Cliquez sur la carte pour ajouter des arrêts à votre itinéraire.",
    optimizeBtn: "Optimiser la Séquence",
    clearBtn: "Tout Effacer",
    stats: {
      distance: "Distance totale :",
      time: "Temps estimé :"
    }
  },
  map: {
    placeholder: "Chargement de la carte...",
    attribution: "© Contributeurs OpenStreetMap"
  },
  errors: {
    minPoints: "Au moins deux points sont nécessaires pour calculer un itinéraire.",
    calcError: "Erreur lors du calcul de l'itinéraire optimal. Veuillez réessayer."
  },
  labels: {
    origin: "Départ",
    destination: "Arrivée",
    stop: "Arrêt",
    loading: "Calcul..."
  }
};

const seo: ToolLocaleContent<OptimalRoutesUI>['seo'] = [
  { type: "title", text: "Optimisation Intelligente d'Itinéraire", level: 2 },
  { type: "paragraph", html: "Utilisez des algorithmes avancés pour résoudre le problème du voyageur de commerce (TSP) en quelques secondes. Idéal pour la logistique, les livraisons ou simplement pour économiser du carburant pendant vos voyages." },
  { type: "title", text: "Pourquoi l'Ordre des Arrêts est Crucial", level: 3 },
  { type: "paragraph", html: "Un mauvais ordonnancement de vos arrêts peut augmenter considérablement le temps de trajet et la consommation de carburant. Notre optimiseur analyse des millions de possibilités pour vous montrer le chemin le plus direct, en évitant les détours inutiles et les chevauchements." }
];

const faq: ToolLocaleContent<OptimalRoutesUI>['faq'] = [
  { question: "Comment fonctionne l'optimisation ?", answer: "Nous analysons tous vos arrêts et déterminons l'ordre séquentiel qui minimise la distance totale parcourue." },
  { question: "Puis-je l'utiliser sur mon mobile ?", answer: "Oui, l'outil est entièrement responsive et vous permet d'ouvrir l'itinéraire résultant directement dans des applications de navigation." },
  { question: "Y a-t-il une limite au nombre d'arrêts ?", answer: "Pour la version gratuite, vous pouvez optimiser efficacement jusqu'à 25 arrêts, ce qui est parfait pour les livraisons quotidiennes ou les road trips." }
];

const howTo: ToolLocaleContent<OptimalRoutesUI>['howTo'] = [
  { name: "Ajouter", text: "Cliquez sur la carte pour fixer votre point de départ et vos arrêts intermédiaires." },
  { name: "Optimiser", text: "Appuyez sur le bouton d'optimisation pour que le système réorganise les arrêts efficacement." },
  { name: "Naviguer", text: "Utilisez le plan généré pour suivre l'itinéraire suggéré." }
];

const bibliography: ToolLocaleContent<OptimalRoutesUI>['bibliography'] = [
  { name: "Problème du voyageur de commerce (TSP)", url: "https://fr.wikipedia.org/wiki/Probl%C3%A8me_du_voyageur_de_commerce" },
  { name: "Optimisation de tournée", url: "https://fr.wikipedia.org/wiki/Optimisation_de_tourn%C3%A9e" }
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
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<OptimalRoutesUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: "Foire Aux Questions",
  bibliography,
  bibliographyTitle: "Sources et Références",
  howTo,
  howToTitle: "Comment l'utiliser",
  schemas: [faqSchema, howToSchema, appSchema],
};
