import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MiniAdventuresUI } from '../index';

const slug = 'mini-aventures-quotidiennes';
const title = 'Prévision de Mini Aventures Quotidiennes';
const description = 'Échappez à la routine avec des micro-défis quotidiens qui transformeront votre quotidien en aventure.';

const ui: MiniAdventuresUI = {
  title: "Mini Aventures",
  homeTitle: "Prêt pour l'aventure ?",
  homeDesc: "Découvrez votre défi du jour et transformez l'ordinaire en extraordinaire.",
  generateBtn: "Générer mon défi",
  anotherBtn: "Un autre défi",
  doneBtn: "J'ai réussi !",
  shareBtn: "Partager l'aventure",
  categories: {
    exploration: { id: "exploration", label: "Exploration", icon: "mdi:map-marker-path", color: "#10b981", styling: "border-emerald-500/30 text-emerald-400 bg-emerald-500/5" },
    food: { id: "food", label: "Gastronomie", icon: "mdi:food-variant", color: "#f59e0b", styling: "border-amber-500/30 text-amber-400 bg-amber-500/5" },
    learning: { id: "learning", label: "Apprentissage", icon: "mdi:school", color: "#6366f1", styling: "border-indigo-500/30 text-indigo-400 bg-indigo-500/5" },
    creativity: { id: "creativity", label: "Créativité", icon: "mdi:palette", color: "#ec4899", styling: "border-pink-500/30 text-pink-400 bg-pink-500/5" },
    social: { id: "social", label: "Social", icon: "mdi:account-group", color: "#0ea5e9", styling: "border-sky-500/30 text-sky-400 bg-sky-500/5" },
    observation: { id: "observation", label: "Observation", icon: "mdi:eye", color: "#8b5cf6", styling: "border-violet-500/30 text-violet-400 bg-violet-500/5" },
    wellness: { id: "wellness", label: "Bien-être", icon: "mdi:heart-pulse", color: "#f43f5e", styling: "border-rose-500/30 text-rose-400 bg-rose-500/5" }
  },
  adventures: [
    { id: 1, text: "Essayez un café ou une boisson dans un endroit où vous n'êtes jamais entré auparavant.", categoryId: "food" },
    { id: 2, text: "Marchez 10 minutes dans une direction que vous ne prenez pas habituellement en sortant de chez vous.", categoryId: "exploration" },
    { id: 3, text: "Apprenez à dire 'Merci' dans trois langues différentes que vous ne connaissez pas.", categoryId: "learning" },
    { id: 4, text: "Prenez une photo d'un détail architectural qui attire votre attention dans votre rue.", categoryId: "creativity" },
    { id: 5, text: "Achetez un fruit que vous n'avez jamais goûté et découvrez sa saveur.", categoryId: "food" },
    { id: 6, text: "Cherchez une plaque commémorative dans votre quartier et lisez l'histoire qu'elle raconte.", categoryId: "exploration" },
    { id: 300, text: "Faites un plan pour visiter un village voisin le week-end.", categoryId: "exploration" },
    { id: 301, text: "Apprenez comment s'appellent les doigts de la main en latin.", categoryId: "learning" },
    { id: 302, text: "Trouvez une rime pour chaque mot de cette phrase.", categoryId: "creativity" },
    { id: 303, text: "Remerciez un ami pour quelque chose qui est arrivé il y a longtemps.", categoryId: "social" }
  ],
  achievements: [
    { id: "g1", milestone: 1, label: "L'Éveil", categoryId: "global", icon: "mdi:footprint", description: "Votre première mini aventure réussie." },
    { id: "g10", milestone: 10, label: "Habitude d'Émerveillement", categoryId: "global", icon: "mdi:sparkles", description: "Vous avez brisé la routine 10 fois." },
    { id: "g50", milestone: 50, label: "Collectionneur de Jours", categoryId: "global", icon: "mdi:calendar-star", description: "50 jours à rendre l'ordinaire extraordinaire." },
    { id: "g150", milestone: 150, label: "Maître du Hasard", categoryId: "global", icon: "mdi:trophy-variant", description: "Vous avez complété la moitié du catalogue d'aventures." },
    { id: "g300", milestone: 300, label: "Esprit Libre", categoryId: "global", icon: "mdi:ghost", description: "Vous avez maîtrisé l'art de l'aventure quotidienne." },
    { id: "e3", milestone: 3, label: "Touriste chez Soi", categoryId: "exploration", icon: "mdi:map-marker-outline", description: "3 nouveaux coins découverts." },
    { id: "e15", milestone: 15, label: "Cartographe Urbain", categoryId: "exploration", icon: "mdi:map-check", description: "Vous connaissez votre code postal mieux que personne." },
    { id: "f3", milestone: 3, label: "Palais Inquiet", categoryId: "food", icon: "mdi:silverware-clean", description: "Vous avez goûté 3 saveurs que vous ne connaissiez pas." },
    { id: "f15", milestone: 15, label: "Alchimiste Gourmet", categoryId: "food", icon: "mdi:silverware-variant", description: "Votre garde-manger est un passeport pour le monde." },
    { id: "l3", milestone: 3, label: "Apprenti de Tout", categoryId: "learning", icon: "mdi:book-open-page-variant", description: "Vous avez appris 3 curiosités du monde." },
    { id: "l15", milestone: 15, label: "Bibliothèque Ambulante", categoryId: "learning", icon: "mdi:head-cog", description: "Votre curiosité ne connaît pas de limites." },
    { id: "c3", milestone: 3, label: "Main qui Dessine", categoryId: "creativity", icon: "mdi:palette-outline", description: "Vous avez laissé votre empreinte dans 3 petits défis." },
    { id: "c15", milestone: 15, label: "Avant-gardiste Local", categoryId: "creativity", icon: "mdi:palette-swatch", description: "Vous voyez l'art là où d'autres ne voient que la rue." },
    { id: "s3", milestone: 3, label: "Pont Humain", categoryId: "social", icon: "mdi:account-voice", description: "Vous vous êtes connecté avec 3 personnes aujourd'hui." },
    { id: "s15", milestone: 15, label: "Âme de la Rue", categoryId: "social", icon: "mdi:account-group", description: "Vous avez transformé des inconnus en histoires." },
    { id: "o3", milestone: 3, label: "Détailliste", categoryId: "observation", icon: "mdi:magnify", description: "Vous avez vu 3 choses que personne d'autre ne remarque." },
    { id: "o15", milestone: 15, label: "Œil de Cineaste", categoryId: "observation", icon: "mdi:telescope", description: "Votre regard est l'objectif d'un grand film." },
    { id: "w3", milestone: 3, label: "Pause Consciente", categoryId: "wellness", icon: "mdi:leaf", description: "Vous avez dédié 3 moments à votre paix mentale." },
    { id: "w15", milestone: 15, label: "Équilibre Total", categoryId: "wellness", icon: "mdi:spa", description: "Votre corps et votre esprit vous remercient." }
  ],
  stats: {
    adventures: "Aventures",
    badges: "Badges",
    progress: "Votre Progrès",
    trophies: "Collection de Trophées"
  },
  shareTemplate: "Je viens de relever un défi !\n\n\"{text}\"\n\nOserez-vous ? Générez le vôtre ici : {url}"
};

const seo: ToolLocaleContent<MiniAdventuresUI>['seo'] = [
  { type: "title", text: "Mini Aventures : L'Art du Quotidien", level: 2 },
  { type: "paragraph", html: "Découvrez comment les micro-aventures peuvent reprogrammer votre cerveau, combattre la routine et éveiller votre curiosité innée. La routine est l'ennemie de la créativité. En introduisant de petites variations dans notre vie quotidienne, nous forçons notre cerveau à forger de nouvelles connexions neuronales." },
  { type: "title", text: "Neuroplasticité en Action", level: 3 },
  { type: "paragraph", html: "En essayant une nouvelle saveur ou en marchant dans une rue inconnue, vous forcez votre cerveau à s'adapter. Ces micro-aventures agissent comme un gymnase mental." },
  {
    type: "grid",
    columns: 2
  },
  { type: "card", icon: "mdi:clock-fast", title: "Pas d'excuses", html: "Des aventures qui demandent moins de 15 minutes et zéro euro. Le temps n'est pas une barrière à la curiosité." },
  { type: "card", icon: "mdi:lock-outline", title: "Confidentialité Totale", html: "Vos progrès sont sauvegardés uniquement sur votre appareil." }
];

const faq: ToolLocaleContent<MiniAdventuresUI>['faq'] = [
  { question: "Qu'est-ce qu'une micro-aventure ?", answer: "C'est une petite aventure proche de chez vous, peu coûteuse et simple. Le terme cherche à démontrer qu'il n'est pas nécessaire d'aller à l'autre bout du monde pour vivre des expériences passionnantes." },
  { question: "À quoi sert ce générateur ?", answer: "Il sert à combattre la paralysie de l'analyse. Parfois, nous voulons faire quelque chose de différent mais nous ne savons pas quoi." },
  { question: "Dois-je m'enregistrer ?", answer: "Non. C'est un outil de confidentialité totale. Les défis sont générés localement." }
];

const howTo: ToolLocaleContent<MiniAdventuresUI>['howTo'] = [
  { name: "Générez", text: "Appuyez sur le bouton pour recevoir votre défi." },
  { name: "Réalisez", text: "Essayez de relever le défi avant la fin de la journée." },
  { name: "Complétez", text: "Marquez le défi comme réussi pour gagner des badges." }
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
  applicationCategory: 'TravelApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<MiniAdventuresUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: "Questions Fréquentes",
  bibliography: "Sources et Références",
  howTo,
  howToTitle: "Comment ça marche",
  schemas: [faqSchema, howToSchema, appSchema],
};
