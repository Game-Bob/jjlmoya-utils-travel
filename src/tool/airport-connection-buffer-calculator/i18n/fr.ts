import type { ToolLocaleContent } from '../../../types';
import type { AirportConnectionBufferUI } from '../ui';
import { createAirportContent } from './shared';

const ui: AirportConnectionBufferUI = {
  flightDataHeading: 'Saisie rapide des données du vol', flightNumberLabel: 'Numéro de vol', flightNumberHint: 'Vol d arrivée: saisissez le code ou scannez le premier segment de la carte d embarquement',
  connectionFlightLabel: 'Vol en correspondance', connectionFlightHint: 'Facultatif: ajoutez séparément le vol suivant', scanFileButton: 'Scanner une image ou un PDF', scanCameraButton: 'Scanner avec la caméra', stopCameraButton: 'Arrêter la caméra', scannerStatus: 'Scanner local: choisissez une image ou autorisez la caméra.',
  airportLabel: 'Aéroport de correspondance (IATA)', arrivalAirportLabel: 'Aéroport d arrivée', departureAirportLabel: 'Aéroport de départ', terminalLabel: 'Terminal', arrivalTerminalLabel: 'Terminal d arrivée', departureTerminalLabel: 'Terminal de départ', airportManualHint: 'Utilisez le catalogue local lorsqu un transfert sourcé existe; sinon vérifiez vous-même l itinéraire.',
  arrivalLabel: 'Heure d arrivée', arrivalHint: 'Heure prévue d atterrissage du vol entrant', departureLabel: 'Départ suivant', departureHint: 'Heure de départ du vol en correspondance', baggageHeading: 'Bagages et type de billet', baggageHand: 'Bagage cabine uniquement', baggageChecked: 'Bagage enregistré jusqu à destination', baggageSelfTransfer: 'Billets séparés / self-transfer', routeRuleHeading: 'Règles de l itinéraire', routeDomestic: 'National vers national', routeSchengen: 'Hors Schengen vers Schengen', routeUsInternational: 'Correspondance internationale aux États-Unis', routeCustom: 'Personnalisé',
  deplaningLabel: 'Quitter l avion entrant', deplaningHint: 'Débarquement, passerelle et sortie', transferLabel: 'Transfert entre terminaux', transferHint: 'À pied, bus, train ou changement de porte', controlLabel: 'Contrôle de sûreté ou des passeports', controlHint: 'Ajoutez chaque contrôle obligatoire', baggageLabel: 'Bagages et enregistrement', baggageHint: 'Utilisez zéro si le bagage est enregistré jusqu à destination', personalBufferLabel: 'Votre marge personnelle', personalBufferHint: 'Temps souhaité avant l embarquement', gateCloseLabel: 'Fermeture de la porte avant le départ', gateCloseHint: 'Comparez avec cette échéance, pas avec le décollage', mctLabel: 'MCT à comparer', mctHint: 'Saisissez une valeur officielle; 0 la laisse inconnue', localDataLabel: 'Données locales de transfert', localDataKnown: 'Estimation locale sourcée', localDataUnknown: 'Vérification manuelle nécessaire', sourceLabel: 'Sources et limites', advancedSettingsLabel: 'Réglages avancés', advancedSettingsHint: 'Ajustez les hypothèses de marche, contrôles, bagages, porte et MCT', delayHeading: 'Simulateur de retards en cascade', delayLabel: 'Test de retard', delayHint: 'Retard d arrivée supplémentaire à tester', delayZero: '+0 min', delayFifteen: '+15 min', delayThirty: '+30 min', delayFortyFive: '+45 min',
  presetsLabel: 'Commencer avec un type de trajet', presetShort: 'Correspondance courte', presetStandard: 'Correspondance typique', presetLong: 'Correspondance longue', resultHeading: 'Marge de correspondance', windowLabel: 'Fenêtre entre les vols', plannedLabel: 'Étapes prévues', gateWindowLabel: 'Jusqu à la fermeture de la porte', mctLabelResult: 'Vérification MCT', mctUnknown: 'Aucun MCT officiel saisi; ceci ne constitue pas un résultat sourcé.', stressLabel: 'Avec le retard testé', marginLabel: 'Marge sous stress', statusComfortable: 'Marge positive', statusTight: 'Marge serrée', statusMissed: 'Temps insuffisant', timelineArrival: 'Atterrir', timelineExit: 'Quitter l avion', timelineTransfer: 'Se déplacer', timelineControl: 'Passer le contrôle', timelineGate: 'Échéance de porte', timelineDeparture: 'Décoller', marginStatement: 'Il reste {minutes} après les étapes prévues.', stressStatement: 'Il reste {minutes} après l ajout du retard testé.', invalidStatement: 'Saisissez des heures d arrivée et de départ valides et différentes pour voir la fenêtre.', mctStatement: 'La fenêtre saisie est comparée au MCT indiqué.', sourceStatement: 'Les temps de transfert sont des estimations locales; contrôles, files, changements de porte et limites de la compagnie peuvent modifier le résultat.', sampleButton: 'Charger une correspondance typique', resetButton: 'Réinitialiser', minuteUnit: 'min',
};

const content: ToolLocaleContent<AirportConnectionBufferUI> = createAirportContent({
  locale: 'fr', slug: 'calculateur-marge-correspondance-aeroport', title: 'Calculateur de marge pour une correspondance aéroportuaire',
  description: 'Estimez une correspondance avec scan local de carte d embarquement, transfert entre terminaux, bagages, fermeture de porte, contrôles, retards et vérification MCT.', ui,
  seo: [
    { type: 'title', text: 'Ce que mesure ce calculateur', level: 2 },
    { type: 'paragraph', html: 'Une correspondance offre une fenêtre de temps, pas une garantie. Le calculateur soustrait les étapes prévues entre l arrivée et la fermeture de la porte.' },
    { type: 'paragraph', html: 'Scannez une image de carte d embarquement si le navigateur propose un détecteur PDF417 ou Aztec local, ou choisissez manuellement l aéroport IATA et les terminaux.' },
    { type: 'title', text: 'Construire une estimation utile', level: 2 },
    { type: 'list', items: ['Saisir les horaires prévus d arrivée et de départ.', 'Ajouter le trajet réel entre terminaux ou portes.', 'Inclure contrôles, bagages et enregistrement concernés.', 'Garder une marge personnelle pour trouver la porte.', 'Tester un retard pour voir disparaître la marge.'] },
    { type: 'tip', title: 'Une marge positive ne garantit pas la correspondance', html: 'Vérifiez les consignes de la compagnie et de l aéroport, les contrôles, les bagages et l heure limite d embarquement. Les files et changements de porte en direct sont inconnus.' },
  ],
  faq: [
    { question: 'Le calculateur connaît-il le temps minimum officiel de correspondance?', answer: 'Seulement si vous saisissez vous-même la valeur officielle. Le MCT dépend de l aéroport, du terminal, de la compagnie, de l itinéraire, du billet et des contrôles. Un champ vide reste inconnu.' },
    { question: 'Que faut-il inclure dans le transfert entre terminaux?', answer: 'Comptez marche, train, bus, navette et déplacement jusqu à la porte suivante. En cas de doute, choisissez une estimation prudente et consultez les indications de l aéroport.' },
    { question: 'À quoi sert le test de retard?', answer: 'C est un scénario transparent: ajoutez un retard d arrivée et comparez la marge avec et sans ce retard. Il ne prédit pas la probabilité d un retard.' },
    { question: 'Que change le mode self-transfer?', answer: 'Il ajoute une hypothèse plus large pour récupérer les bagages, refaire l enregistrement et parcourir le trajet avec des billets séparés. Vérifiez les étapes exactes de votre voyage.' },
  ],
  howTo: [
    { name: 'Saisir la fenêtre de vol', text: 'Ajoutez l heure d arrivée et le départ du vol suivant. Un départ plus tôt sur l horloge est traité comme le lendemain.' },
    { name: 'Ajouter les étapes', text: 'Indiquez le trajet, les contrôles, les bagages, l enregistrement et la marge souhaitée avant l embarquement.' },
    { name: 'Tester un retard', text: 'Choisissez un retard d arrivée et comparez la marge normale à la marge sous stress.' },
    { name: 'Vérifier les hypothèses', text: 'Consultez les informations officielles sur les terminaux, contrôles, bagages, limites d embarquement et conditions du billet.' },
  ],
  howToTitle: 'Comment estimer la marge d une correspondance aérienne',
});

export { content };
