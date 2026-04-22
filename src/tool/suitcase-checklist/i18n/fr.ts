import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SuitcaseChecklistUI } from '../index';

const slug = 'generateur-checklist-valise';
const title = 'Générateur de Checklist de Valise Préparez vos bagages';
const description = 'L\'outil en ligne ultime pour organiser vos bagages en fonction de votre type de voyage, destination et durée. N\'oubliez plus jamais vos essentiels de voyage.';

const ui: SuitcaseChecklistUI = {
  title: "Planificateur de Bagages",
  form: {
    destTitle: "Destination et Climat",
    destTypes: [
      { id: "playa", name: "Plage / Côte", icon: "mdi:beach" },
      { id: "ciudad", name: "Ville / Urbain", icon: "mdi:city" },
      { id: "montana", name: "Montagne / Rural", icon: "mdi:pine-tree" },
      { id: "frio", name: "Climat Froid / Neige", icon: "mdi:snowflake" }
    ],
    daysTitle: "Combien de jours ?",
    intlTitle: "Voyage International ?",
    intlLabel: "Oui, je traverse des frontières",
    reasonTitle: "Motif du Voyage",
    reasons: [
      { id: "ocio", name: "Loisir / Plaisir", icon: "mdi:party-popper" },
      { id: "negocios", name: "Affaires", icon: "mdi:tie" }
    ],
    submitBtn: "Configurer ma Valise Idéale"
  },
  results: {
    title: "Votre Liste de Voyage",
    editBtn: "Modifier",
    printBtn: "Enregistrer PDF",
    tipsTitle: "Conseils pour votre Voyage",
    progressText: "Complété"
  },
  itemsDb: {
    essentials: {
      id: "essentials",
      title: "Documents et Base",
      icon: "mdi:passport",
      items: [
        { label: "CNI / Passeport" },
        { label: "Cartes bancaires" },
        { label: "Espèces" },
        { label: "Billets (Avion/Train)" },
        { label: "Réservations d'hébergement" },
        { label: "Clés de maison" },
        { label: "Documents internationaux", dynamicId: "item-internacional" }
      ]
    },
    technology: {
      id: "technology",
      title: "Technologie",
      icon: "mdi:laptop",
      items: [
        { label: "Téléphone portable" },
        { label: "Chargeur de téléphone" },
        { label: "Écouteurs / Casque" },
        { label: "Batterie externe" },
        { label: "Adaptateur de prise", dynamicId: "item-adaptador" }
      ]
    },
    toiletries: {
      id: "toiletries",
      title: "Trousse de Toilette",
      icon: "mdi:toothbrush",
      items: [
        { label: "Brosse à dents et dentifrice" },
        { label: "Déodorant" },
        { label: "Gel douche et shampoing" },
        { label: "Peigne / Brosse" },
        { label: "Mini trousse de secours" },
        { label: "Médicaments personnels" }
      ]
    },
    clothing_base: {
      id: "clothing_base",
      title: "Vêtements Quotidiens",
      icon: "mdi:tshirt-crew",
      items: [
        { label: "Sous-vêtements", dynamicId: "qty-ropa-interior" },
        { label: "T-shirts / Hauts", dynamicId: "qty-camisetas" },
        { label: "Pantalons / Bas", dynamicId: "qty-pantalones" },
        { label: "Chaussettes", dynamicId: "qty-calcetines" },
        { label: "Pyjama" },
        { label: "Veste légère" },
        { label: "Chaussures confortables" }
      ]
    }
  },
  specificItems: {
    destType: {
      playa: {
        id: "dest-playa",
        title: "Pour la Côte",
        icon: "mdi:beach",
        items: [
          { label: "Maillots de bain" },
          { label: "Serviette de plage" },
          { label: "Crème solaire" },
          { label: "Lunettes de soleil" },
          { label: "Tongs" },
          { label: "Chapeau ou Casquette" }
        ]
      },
      ciudad: {
        id: "dest-ciudad",
        title: "Urbain",
        icon: "mdi:city",
        items: [
          { label: "Baskets pour marcher" },
          { label: "Petit sac à dos sécurisé" },
          { label: "Parapluie compact" },
          { label: "Guide de la ville" }
        ]
      },
      montana: {
        id: "dest-montana",
        title: "Montagne",
        icon: "mdi:pine-tree",
        items: [
          { label: "Chaussures de randonnée" },
          { label: "Coupe-vent déperlant" },
          { label: "Pantalons de trekking" },
          { label: "Gourde" },
          { label: "Sac à dos de montagne" }
        ]
      },
      frio: {
        id: "dest-frio",
        title: "Clima Froid",
        icon: "mdi:snowflake",
        items: [
          { label: "Manteau épais" },
          { label: "Bonnet et gants" },
          { label: "Chaussures d'hiver" },
          { label: "T-shirts thermiques" },
          { label: "Écharpe" }
        ]
      }
    },
    travelType: {
      negocios: {
        id: "travel-negocios",
        title: "Affaires",
        icon: "mdi:tie",
        items: [
          { label: "Costume / Tenue formelle" },
          { label: "Chemises habillées" },
          { label: "Chaussures de ville" },
          { label: "Ordinateur portable" },
          { label: "Chargeur d'ordinateur" },
          { label: "Documents de travail" }
        ]
      },
      ocio: {
        id: "travel-ocio",
        title: "Loisir",
        icon: "mdi:camera",
        items: [
          { label: "Vêtements pour sortir" },
          { label: "Appareil photo (Optionnel)" },
          { label: "Livre / Divertissement" }
        ]
      }
    }
  },
  tips: {
    military: "Rouler ses vêtements style 'militaire' aide énormément à éviter les plis et gagne de la place.",
    longTravel: "Vous partez plus d'une semaine. Au lieu d'emporter des kilos de linge, prévoyez de laver vos basiques à mi-parcours.",
    intlPassport: "Voyage International : Vérifiez dès aujourd'hui que votre passeport est valide au moins 6 mois, car de nombreux pays l'exigent.",
    intlBank: "Consultez si des visas sont nécessaires ou si votre banque applique des frais à l'étranger.",
    intlAdapter: "N'oubliez pas votre adaptateur universel si les prises du pays de destination sont différentes !",
    coldLayers: "Pour le froid, la clé est de s'habiller en couches : une base thermique, une couche isolante et un bon manteau imperméable.",
    coldHeavyOn: "Portez les vêtements les plus volumineux et lourds sur vous dans l'avion pour gagner de la place en cabine.",
    beachWet: "Prévoyez plusieurs maillots de bain ; l'humidité empêche parfois le séchage pour le lendemain."
  }
};

const seo: ToolLocaleContent<SuitcaseChecklistUI>['seo'] = [
  { type: "title", text: "Générateur de Checklist de Valise : Votre Compagnon de Voyage Idéal", level: 2 },
  { type: "paragraph", html: "Préparer sa valise est souvent l'un des moments les plus stressants avant un voyage. Le peur d'oublier quelque chose d'important, le doute sur la météo ou l'incertitude sur la quantité de bagages peuvent gâcher l'excitation du départ. C'est ici qu'un <strong>générateur de checklist de valise</strong> devient votre meilleur allié." },
  {
    type: "summary",
    title: "Avantages de notre créateur de listes",
    items: [
      "Personnalisation absolue adaptée au climat (plage, montagne, ville ou neige).",
      "Calcul automatique de la quantité de vêtements selon la durée de votre séjour.",
      "Réduction drastique du stress logistique avec une checklist interactive.",
      "Optimisation de l'espace pour éviter le syndrome du 'au cas où'."
    ]
  }
];

const faq: ToolLocaleContent<SuitcaseChecklistUI>['faq'] = [
  { question: "Puis-je enregistrer la liste générée ?", answer: "Vous pouvez cocher les éléments de votre liste et utiliser le bouton pour l'imprimer ou l'enregistrer en format PDF sur votre appareil." },
  { question: "Comment sont calculées les quantités de vêtements ?", answer: "Notre outil estime le nombre de rechanges selon la durée du voyage sélectionnée, favorisant un voyage léger." },
  { question: "Cela fonctionne-t-il pour les climats froids ?", answer: "Oui, vous pouvez sélectionner la destination de climat froid pour que la checklist inclue automatiquement les articles indispensables pour ces températures." },
  { question: "L'outil est-il payant ?", answer: "Non, notre générateur de listes est 100% gratuit et ne nécessite aucune inscription ou téléchargement." }
];

const howTo: ToolLocaleContent<SuitcaseChecklistUI>['howTo'] = [
  { name: "Définissez votre voyage", text: "Sélectionnez le climat, le motif et la durée de votre escapade." },
  { name: "Générez la liste", text: "Cliquez sur le bouton et obtenez instantanément tout le nécessaire." },
  { name: "Préparez votre valise", text: "Cochez les articles au fur et à mesure pour ne rien oublier d'essentiel." }
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
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<SuitcaseChecklistUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: "Questions Fréquentes",
  bibliography: "Sources et Références",
  howTo,
  howToTitle: "Comment planifier sa valise",
  schemas: [faqSchema, howToSchema, appSchema],
};
