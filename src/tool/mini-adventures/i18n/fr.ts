import type { ToolLocaleContent } from '../../../types';
import type { MiniAdventuresUI } from '../index';

export const content: ToolLocaleContent<MiniAdventuresUI> = {
  slug: 'mini-aventures-quotidiennes',
  title: 'Prévision de Mini Aventures Quotidiennes',
  description: 'Échappez à la routine avec des micro-défis quotidiens qui transformeront votre quotidien en aventure.',
  ui: {
    title: "Mini Aventures",
    homeTitle: "Prêt pour l'aventure ?",
    homeDesc: "Découvrez votre défi du jour et transformez l'ordinaire en extraordinaire.",
    generateBtn: "Générer mon défi",
    anotherBtn: "Un autre défi",
    doneBtn: "J'ai réussi !",
    shareBtn: "Partager l'aventure",
    categories: {
      discovery: { id: "discovery", label: "Découverte", icon: "mdi:compass-outline", color: "#6366f1", styling: "theme-blue" },
      sensory: { id: "sensory", label: "Sensorial", icon: "mdi:eye-outline", color: "#ec4899", styling: "theme-pink" },
      social: { id: "social", label: "Social", icon: "mdi:account-group-outline", color: "#10b981", styling: "theme-green" },
      creative: { id: "creative", label: "Créatif", icon: "mdi:palette-outline", color: "#f59e0b", styling: "theme-orange" }
    },
    adventures: [
      { id: 1, text: "Prenez un chemin différent pour rentrer chez vous aujourd'hui.", categoryId: "discovery" },
      { id: 2, text: "Essayez un nouveau fruit ou légume au marché.", categoryId: "sensory" },
      { id: 3, text: "Finsissez un livre que vous avez laissé de côté.", categoryId: "creative" },
      { id: 4, text: "Saluez trois personnes que vous croisez régulièrement mais à qui vous ne parlez jamais.", categoryId: "social" }
    ],
    achievements: [
      { id: "awakening", milestone: 1, label: "L'Éveil", categoryId: "global", icon: "mdi:star-outline", description: "Votre première mini aventure réussie." },
      { id: "explorer", milestone: 5, label: "Explorateur Urbain", categoryId: "global", icon: "mdi:map-marker-outline", description: "5 aventures terminées." }
    ],
    stats: {
      adventures: "Aventures",
      badges: "Badges",
      progress: "Votre Progrès",
      trophies: "Collection de Trophées"
    },
    shareTemplate: "Je viens de relever un défi !\n\n\"{text}\"\n\nOserez-vous ? Générez le vôtre ici : {url}"
  },
  seo: [
    { type: "title", text: "Mini Aventures : L'Art du Quotidien", level: 2 },
    { type: "paragraph", html: "Découvrez comment les micro-aventures peuvent reprogrammer votre cerveau et combattre la routine." }
  ],
  faq: [
    { question: "Qu'est-ce qu'une micro-aventure ?", answer: "C'est une petite aventure proche de chez vous, peu coûteuse et simple." }
  ],
  bibliography: [
    { name: "Alastair Humphreys: Microadventures", url: "https://alastairhumphreys.com/blog/microadventures-3/" },
    { name: "Rob Walker: The Art of Noticing", url: "https://www.goodreads.com/es/book/show/41552704-the-art-of-noticing" }
  ],
  howTo: [
    { name: "Générez", text: "Appuyez sur le bouton pour recevoir votre défi." }
  ],
  schemas: []
};
