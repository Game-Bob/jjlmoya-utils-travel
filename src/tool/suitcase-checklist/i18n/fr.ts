import type { ToolLocaleContent } from '../../../types';
import type { SuitcaseChecklistUI } from '../index';

export const content: ToolLocaleContent<SuitcaseChecklistUI> = {
  slug: 'generateur-liste-valise',
  title: 'Générateur de Liste de Valise | Préparez vos bagages',
  description: 'Organisez vos bagages selon votre destination, la durée et le type de voyage. Ne rien oublier n\'a jamais été aussi simple.',
  ui: {
    title: "Planificateur de Bagages",
    form: {
      destTitle: "Destination & Climat",
      destTypes: [
        { id: "playa", name: "Plage / Côte", icon: "mdi:beach" },
        { id: "ciudad", name: "Ville / Urbain", icon: "mdi:city" },
        { id: "montana", name: "Montagne / Rural", icon: "mdi:pine-tree" },
        { id: "frio", name: "Froid / Neige", icon: "mdi:snowflake" }
      ],
      daysTitle: "Combien de jours ?",
      intlTitle: "Voyage international ?",
      intlLabel: "Oui, passage de frontière",
      reasonTitle: "Raison du voyage",
      reasons: [
        { id: "ocio", name: "Loisir / Vacances", icon: "mdi:party-popper" },
        { id: "negocios", name: "Affaires", icon: "mdi:tie" }
      ],
      submitBtn: "Générer la liste idéale"
    },
    results: {
      title: "Votre Liste de Bagages",
      editBtn: "Modifier",
      printBtn: "Enregistrer PDF",
      tipsTitle: "Conseils de Voyage",
      progressText: "Terminé"
    },
    itemsDb: {
      essentials: {
        id: "essentials",
        title: "Docs & Essentiels",
        icon: "mdi:passport",
        items: [
          { label: "Passeport / CNI" },
          { label: "Cartes bancaires" },
          { label: "Espèces" },
          { label: "Billets (Avion/Train)" },
          { label: "Réservations" },
          { label: "Clés de maison" },
          { label: "Docs internationaux", dynamicId: "item-internacional" }
        ]
      },
      technology: {
        id: "technology",
        title: "Technologie",
        icon: "mdi:laptop",
        items: [
          { label: "Téléphone portable" },
          { label: "Chargeur téléphone" },
          { label: "Écouteurs" },
          { label: "Batterie externe" },
          { label: "Adaptateur secteur", dynamicId: "item-adaptador" }
        ]
      },
      toiletries: {
        id: "toiletries",
        title: "Toilette",
        icon: "mdi:toothbrush",
        items: [
          { label: "Brose à dents & dentifrice" },
          { label: "Déodorant" },
          { label: "Gel douche & shampooing" },
          { label: "Brosse / Peigne" },
          { label: "Petite trousse pharmacie" },
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
            title: "Pour la côte",
            icon: "mdi:beach",
            items: [
              { label: "Maillot de bain" },
              { label: "Serviette de plage" },
              { label: "Crème solaire" },
              { label: "Lunettes de soleil" },
              { label: "Tongs" },
              { label: "Chapeau ou casquette" }
            ]
          },
          ciudad: {
            id: "dest-ciudad",
            title: "Urbain",
            icon: "mdi:city",
            items: [
              { label: "Baskets de marche" },
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
              { label: "Coupe-vent" },
              { label: "Pantalons de trekking" },
              { label: "Gourde" },
              { label: "Sac à dos de montagne" }
            ]
          },
          frio: {
            id: "dest-frio",
            title: "Climat Froid",
            icon: "mdi:snowflake",
            items: [
              { label: "Manteau chaud" },
              { label: "Bonnet & gants" },
              { label: "Chaussures d'hiver" },
              { label: "Vêtements thermiques" },
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
              { label: "Chemises" },
              { label: "Chaussures de ville" },
              { label: "Ordinateur portable" },
              { label: "Chargeur ordinateur" },
              { label: "Documents de travail" }
            ]
          },
          ocio: {
            id: "travel-ocio",
            title: "Loisirs",
            icon: "mdi:camera",
            items: [
              { label: "Tenue de soirée" },
              { label: "Appareil photo" },
              { label: "Livre / Divertissement" }
            ]
          }
        }
      },
    tips: {
      military: "Rouler les vêtements 'style militaire' permet d'économiser de la place et d'éviter les plis.",
      longTravel: "Voyage de plus d'une semaine. Prévoyez de faire une lessive à mi-parcours.",
      intlPassport: "Voyage international : vérifiez la validité de votre passeport (min. 6 mois).",
      intlBank: "Vérifiez les frais bancaires à l'étranger et les éventuels visas nécessaires.",
      intlAdapter: "N'oubliez pas l'adaptateur universel si les prises sont différentes !",
      coldLayers: "Pour le froid, privilégiez le système des 3 couches.",
      coldHeavyOn: "Portez vos vêtements les plus lourds sur vous pour gagner de la place en cabine.",
      beachWet: "Prévoyez plusieurs maillots de bain, l'humidité peut gêner le séchage."
    }
  },
  seo: [
    { type: "title", text: "Générateur de Liste de Valise : Votre Compagnon de Voyage", level: 2 },
    { type: "paragraph", html: "Faire son sac est souvent source de stress. Notre <strong>générateur de liste de valise</strong> est là pour vous aider." }
  ],
  faq: [
    { question: "Puis-je enregistrer la liste ?", answer: "Oui, vous pouvez imprimer ou enregistrer en PDF." }
  ],
  bibliography: [
    { name: "KonMari - How to KonMari a Suitcase", url: "https://konmari.com/how-to-konmari-a-suitcase/" },
    { name: "Eagle Creek - What to Pack: Ultimate Travel Packing Checklist", url: "https://eaglecreek.com/blogs/articles/what-pack-ultimate-travel-packing-checklist" }
  ],
  howTo: [
    { name: "Définissez votre voyage", text: "Sélectionnez le climat, la raison et la durée." }
  ],
  schemas: []
};
