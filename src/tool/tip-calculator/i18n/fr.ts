import type { ToolLocaleContent } from '../../../types';
import type { TipCalculatorUI } from '../index';

export const content: ToolLocaleContent<TipCalculatorUI> = {
  slug: 'calculateur-pourboire-international',
  title: 'Calculateur de Pourboire International',
  description: 'Gérez vos pourboires en toute confiance lors de vos voyages. Guide complet des pourcentages et de l\'étiquette par pays.',
  ui: {
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
            culture: "Le pourboire est essentiel. Prévoir entre 18% et 25%. Ne pas laisser de pourboire est considéré comme une faute grave.",
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
  },
  seo: [
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
      html: "L'un des moments les plus stressants de tout voyage international survient lorsque l'addition arrive à table. Doit-on laisser un supplément ? Combien est-ce normal d'offrir ? Sera-t-on offensé si l'on laisse trop peu ou trop ? Notre <strong>calculateur de pourboire international</strong> est conçu pour éliminer cette incertitude, en vous fournissant non seulement le calcul mathématique, mais aussi le guide culturel nécessaire pour chaque destination.",
    },
    {
      type: "title",
      text: "Pourquoi les pourboires varient-ils autant entre les pays ?",
      level: 3,
    },
    {
      type: "paragraph",
      html: "La réponse courte est : le salaire de base et la législation du travail. Dans des pays comme les États-Unis, le salaire minimum pour les travailleurs recevant des pourboires peut être de seulement quelques dollars par heure, sous le principe que le client complétera ses revenus. En revanche, dans une grande partie de l'Europe et de l'Océanie, les serveurs ont des contrats avec des salaires complets qui ne dépendent pas de la générosité du client.",
    },
    {
      type: "comparative",
      columns: 2,
      items: [
        {
          title: "Culture du Pourboire Attendu (USA, Canada, Mexique)",
          description: "Dans ces pays, le pourboire n'est pas une récompense pour un service exceptionnel, mais une partie fondamentale du salaire du travailleur.",
          icon: "mdi:currency-usd",
          points: [
            "USA : Le standard est de 18% à 25% dans les restaurants.",
            "Mexique : On attend entre 10% et 15% (la 'propina').",
            "Ne pas laisser de pourboire peut entraîner une confrontation ou un malaise visible.",
            "Généralement calculé sur le total avant taxes.",
          ],
        },
        {
          title: "Culture de l'Arrondi (Europe, Australie)",
          description: "Le service est généralement inclus dans le prix, le pourboire est donc un extra pour un excellent traitement.",
          icon: "mdi:currency-eur",
          highlight: true,
          points: [
            "Espagne/Italie : Arrondir à l'euro supérieur ou laisser 5-10%.",
            "Royaume-Uni : Des frais de service facultatifs de 12,5% sont souvent inclus.",
            "Australie : Pas attendu en raison des salaires minimums locaux élevés.",
            "France : Le service est déjà compris dans votre facture par la loi.",
          ],
        },
      ],
    },
    {
      type: "title",
      text: "Tableau des Pourboires par Région",
      level: 3,
    },
    {
        type: "table",
        headers: ["Région", "Pourcentage Habituel", "Est-ce obligatoire ?"],
        rows: [
            ["<strong>Amérique du Nord (USA/Canada)</strong>", "18% - 25%", "Pratiquement obligatoire"],
            ["<strong>Europe de l'Ouest</strong>", "5% - 10% / Arrondi", "Optionnel et volontaire"],
            ["<strong>Asie du Sud-Est</strong>", "0% - 10%", "Uniquement zones touristiques"],
            ["<strong>Amérique Latine</strong>", "10% - 15%", "Socialement attendu"],
            ["<strong>Japon / Corée du Sud</strong>", "0%", "Peut être offensant"],
        ]
    },
    {
        type: "tip",
        title: "L'Astuce des 10%",
        html: "<p>Si vous êtes dans un pays dont vous ne connaissez pas la norme et que le service était bon, laisser 10% est généralement un pari sûr partout dans le monde (sauf au Japon).</p>"
    },
    {
      type: "title",
      text: "Conclusion",
      level: 3,
    },
    {
        type: "paragraph",
        html: "Notre <strong>Guide International du Pourboire</strong> n'est pas seulement un outil mathématique, c'est un pont culturel. Voyager avec respect implique de comprendre les normes sociales du lieu qui nous accueille.",
    },
  ],
  faq: [
    {
        question: "Le pourboire est-il obligatoire aux États-Unis ?",
        answer: "Légalement non, mais socialement oui. Prévoyez entre 18% et 25%.",
    },
    {
        question: "Dans quels pays le pourboire est-il offensant ?",
        answer: "Principalement au Japon et en Corée du Sud. Un bon service est considéré comme un devoir.",
    },
  ],
  bibliography: [
    {
        name: "Condé Nast Traveler: Tipping Etiquette Guide",
        url: "https://www.cntraveler.com/stories/2008-11-11/etiquette-101-tipping-guide",
    },
    {
        name: "Lonely Planet: Tipping and Etiquette in Europe",
        url: "https://www.lonelyplanet.com/articles/tipping-customs-europe",
    },
    {
        name: "Western Union: Global Tipping Guide",
        url: "https://www.westernunion.com/blog/en/global-tipping-guide/",
    },
  ],
  howTo: [
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
  ],
  schemas: [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Calculateur de Pourboire International",
      "description": "Calculez les pourboires selon la coutume locale de chaque pays.",
      "applicationCategory": "TravelApplication",
      "operatingSystem": "All"
    }
  ]
};
