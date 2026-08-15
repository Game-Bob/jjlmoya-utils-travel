import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SchengenCalculatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'calculateur-sejour-schengen-90-180';
const title = 'Calculateur de Séjour Schengen 90 180 Jours';
const description =
  'Vérifiez la conformité de votre voyage en Europe avec la règle 90/180 jours. Calculez vos jours restants autorisés et évitez les dépassements de séjour Schengen.';

const ui: SchengenCalculatorUI = {
  verdictSafeTitle: 'Séjour Légal et Conforme (Dans la Limite)',
  verdictWarningTitle: 'Attention: Proche de la Limite des 90 Jours',
  verdictOverstayTitle: 'Dépassement Illégal de Séjour Détecté',
  daysRemainingSub: 'Jours Restants Autorisés',
  daysUsedSub: 'Jours Utilisés sur 180 Jours',
  maxStaySub: 'Séjour Continu Maximal',
  fullResetSub: 'Date de Réinitialisation à 90 Jours',
  plannerHeading: '1. Vérifier la Date Cible',
  plannerEntryLabel: 'Date d Entrée ou Vol Prévu',
  quickDatesLabel: 'Aller à la Date',
  presetToday: 'Aujourd hui',
  presetPlus7: '+1 Semaine',
  presetPlus14: '+2 Semaines',
  presetPlus30: '+1 Mois',
  tripsHeading: '2. Historique et Projets de Voyage en Europe',
  addTripBtn: '+ Ajouter un Séjour',
  emptyTripsMsg: 'Aucun séjour enregistré. Ajoutez vos voyages passés ou prévus dans l espace Schengen.',
  colArrival: 'Entrée (Arrivée)',
  colDeparture: 'Sortie (Départ)',
  colDestination: 'Pays / Notes',
  colDays: 'Jours',
  sampleBtn: 'Charger Exemple Nomade',
  clearBtn: 'Tout Effacer',
  timelineTitle: 'Fenêtre Glissante de 180 Jours',
  legendInSchengen: 'Dans Schengen',
  legendOutside: 'En Dehors',
  legendOverstay: 'Dépassement',
  bannerSafe: 'Le {date}, vous aurez utilisé {used} ({rem} disponibles).',
  bannerWarning: 'Le {date}, vous aurez utilisé {used} (seulement {rem} restants).',
  bannerOverstay: 'Dépassement illégal détecté dès le {date}. Votre itinéraire dépasse la limite de {days}.',
  unitDays: 'jours',
  notesPlaceholder: 'ex. France, Espagne',
  sampleNotes1: 'Circuit en Italie (20 jours)',
  sampleNotes2: 'Allemagne et Autriche (20 jours)',
  sampleNotesDefault: 'France et Espagne',
};

const seo: ToolLocaleContent<SchengenCalculatorUI>['seo'] = [
  {
    type: 'title',
    text: 'Fonctionnement Réel de la Règle 90 180 dans l Espace Schengen',
    level: 2,
  },
  {
    type: 'summary',
    title: 'Principes Fondamentaux de la Fenêtre Glissante Schengen',
    items: [
      'Les ressortissants de pays tiers peuvent séjourner jusqu à 90 jours sur toute période glissante de 180 jours.',
      'La fenêtre de 180 jours avance chaque jour et regarde 179 jours en arrière en continu.',
      'Le jour d arrivée et le jour de départ comptent chacun comme des journées entières de présence.',
      'Quitter l espace Schengen ne réinitialise pas votre compteur à 90 jours sans une absence continue de 90 jours.',
    ],
  },
  {
    type: 'paragraph',
    html: 'L espace Schengen applique une limite stricte de <strong>90 jours de séjour maximum sur toute période de 180 jours</strong> pour les voyageurs exemptés de visa ou titulaires d un visa uniforme de court séjour type C, conformément à l article 6(1) du <em>Code frontières Schengen (Règlement UE 2016/399)</em>. À chaque jour de votre présence en Europe, la police aux frontières calcule le nombre total de jours passés dans les 29 pays membres au cours des 179 jours précédents plus le jour actuel.',
  },
  {
    type: 'title',
    text: 'Indicateurs Réglementaires et Normes Frontalières',
    level: 2,
  },
  {
    type: 'stats',
    items: [
      {
        value: '90 Jours',
        label: 'Durée Maximale Autorisée',
      },
      {
        value: '180 Jours',
        label: 'Fenêtre Glissante de Référence',
      },
      {
        value: 'Deux Extrémités',
        label: 'Calcul Frontalier Inclusif',
      },
      {
        value: '29 Pays',
        label: 'Territoire Commun Schengen',
      },
    ],
  },
  {
    type: 'title',
    text: 'Quotas Annuels Fixes vs Fenêtres Glissantes Dynamiques',
    level: 2,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Erreur Courante de l Année Civile',
        description:
          'De nombreux voyageurs supposent à tort que leurs 90 jours se renouvellent le 1er janvier ou après une courte sortie du territoire. Cette confusion entraîne de lourdes amendes et des interdictions de territoire.',
      },
      {
        title: 'Système Réel de la Fenêtre Glissante',
        description:
          'Chaque journée passée dans l espace Schengen est inscrite sur une ligne temporelle continue. Avec le temps, les jours les plus anciens sortent de la fenêtre des 180 jours et libèrent progressivement de nouveaux droits.',
      },
    ],
  },
  {
    type: 'title',
    text: 'Profils de Voyageurs et Évaluation de Conformité',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Profil de Séjour', 'Exemple', 'Statut Légal', 'Recommandation'],
    rows: [
      [
        'Séjour Continu Unique',
        'Entrée le 1er juin, sortie le 29 août (90 jours)',
        'Conforme',
        'Doit quitter le territoire au 90e jour exact et rester 90 jours d affilée en dehors pour récupérer le quota entier.',
      ],
      [
        'Voyageur Fréquent Multi-Séjours',
        'Trois voyages de 30 jours espacés de 30 jours de pause',
        'Conforme',
        'Chaque voyage doit être vérifié sur sa propre fenêtre rétrospective de 180 jours.',
      ],
      [
        'Nomade Numérique Alterné',
        '60 jours Schengen et 30 jours hors Schengen en alternance',
        'Risque Critique d Overstay',
        'Une pause de 30 jours ne libère que les jours datant d il y a 180 jours, risquant un refus d entrée immédiat.',
      ],
      [
        'Réinitialisation Complète',
        'Absence ininterrompue de 90 jours hors de la zone Schengen',
        'Quota Récupéré',
        'Garantit la récupération intégrale du capital de 90 jours lors de la prochaine entrée.',
      ],
    ],
  },
  {
    type: 'title',
    text: 'Conseils Stratégiques pour Traverser les Frontières',
    level: 2,
  },
  {
    type: 'tip',
    title: 'Prévoyez une Marge de Sécurité',
    html: 'Ne réservez jamais votre vol retour pour le 90e jour exact. Un vol annulé ou une urgence médicale peut repousser votre départ au 91e jour, provoquant un enregistrement automatique d infraction dans le système européen d entrée/sortie (EES).',
  },
  {
    type: 'card',
    title: 'Conservez les Justificatifs de Séjour Hors Schengen',
    html: 'Gardez précieusement cartes d embarquement, factures d hébergement et tampons des pays non-Schengen (comme le Royaume-Uni, l Irlande, Chypre, le Monténégro ou l Albanie) pour prouver votre présence hors zone.',
  },
  {
    type: 'title',
    text: 'Glossaire des Termes Frontaliers Européens',
    level: 2,
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'Overstay (Dépassement)',
        definition:
          'Le fait de rester dans l espace Schengen au-delà des 90 jours autorisés sur 180 jours, entraînant amendes, expulsion ou interdictions de retour.',
      },
      {
        term: 'EES (Système Entrée/Sortie)',
        definition:
          'Le système numérique automatisé de l UE enregistrant les données biométriques des voyageurs non-européens à chaque frontière.',
      },
      {
        term: 'Ressortissant de Pays Tiers',
        definition:
          'Toute personne n ayant pas la citoyenneté d un État membre de l UE ou de l AELE.',
      },
    ],
  },
];

const faq: ToolLocaleContent<SchengenCalculatorUI>['faq'] = [
  {
    question: 'Qu est ce que la règle 90 180 dans l espace Schengen ?',
    answer:
      'Elle autorise les citoyens non-européens voyageant sans visa de long séjour à rester un maximum de 90 jours sur toute période mobile de 180 jours dans les 29 pays membres.',
  },
  {
    question: 'Le quota de 90 jours se remet il à zéro en sortant d Europe ?',
    answer:
      'Non. Quitter l espace Schengen ne remet pas le compteur à zéro. La période de 180 jours est glissante. La réinitialisation totale n a lieu qu après 90 jours continus passés à l extérieur.',
  },
  {
    question: 'Les jours d arrivée et de départ comptent ils pour des jours complets ?',
    answer:
      'Oui. Conformément à l article 6 du Code frontières Schengen, le jour d entrée et le jour de départ sont tous deux comptabilisés comme des journées entières de séjour.',
  },
  {
    question: 'Quels pays font partie de l espace Schengen pour ce calcul ?',
    answer:
      'L espace regroupe 29 pays: Allemagne, Autriche, Belgique, Bulgarie, Croatie, Danemark, Espagne, Estonie, Finlande, France, Grèce, Hongrie, Islande, Italie, Lettonie, Liechtenstein, Lituanie, Luxembourg, Malte, Norvège, Pays-Bas, Pologne, Portugal, République tchèque, Roumanie, Slovaquie, Slovénie, Suède et Suisse. Le Royaume-Uni et l Irlande n en font pas partie.',
  },
];

const howTo: ToolLocaleContent<SchengenCalculatorUI>['howTo'] = [
  {
    name: 'Sélectionnez la Date à Évaluer',
    text: 'Indiquez la date de votre prochain voyage pour connaître le solde exact de jours dont vous disposez.',
  },
  {
    name: 'Renseignez vos Voyages Passés et Prévus',
    text: 'Indiquez les dates d entrée et de sortie de tous vos séjours Schengen des derniers mois.',
  },
  {
    name: 'Analysez vos Droits et Marges de Sécurité',
    text: 'Vérifiez la jauge de jours restants, la durée de séjour continu autorisée et la date de réinitialisation complète.',
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
  description,
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
  description,
  applicationCategory: 'TravelApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<SchengenCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  howTo,
  howToTitle: 'Comment calculer votre séjour Schengen',
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography: bibliographyEntries,
};
