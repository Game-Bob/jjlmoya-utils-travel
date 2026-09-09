import type { ToolLocaleContent } from '../../../types';
import type { AirportConnectionBufferUI } from '../ui';
import { createAirportContent } from './shared';

const ui: AirportConnectionBufferUI = {
  flightDataHeading: 'Schnelle Flugdaten-Eingabe', flightNumberLabel: 'Flugnummer',
  flightNumberHint: 'Ankunftsflug: Code eingeben oder den ersten Bordkartenabschnitt scannen',
  connectionFlightLabel: 'Anschlussflug', connectionFlightHint: 'Optional: den Weiterflug separat eingeben',
  scanFileButton: 'Bild oder PDF scannen', scanCameraButton: 'Mit Kamera scannen', stopCameraButton: 'Kamera stoppen',
  scannerStatus: 'Lokaler Scanner: Bild auswählen oder Kamerazugriff erlauben.', airportLabel: 'Umsteigeflughafen (IATA)',
  arrivalAirportLabel: 'Ankunftsflughafen', departureAirportLabel: 'Abflughafen', terminalLabel: 'Terminal',
  arrivalTerminalLabel: 'Ankunftsterminal', departureTerminalLabel: 'Abflugterminal',
  airportManualHint: 'Lokalen Katalog nutzen, wenn ein belegter Transfer vorhanden ist, sonst Route selbst prüfen.',
  arrivalLabel: 'Ankunftszeit', arrivalHint: 'Wann der Zubringer planmäßig landet', departureLabel: 'Nächster Abflug',
  departureHint: 'Wann der Weiterflug startet', baggageHeading: 'Gepäck und Ticketart', baggageHand: 'Nur Handgepäck',
  baggageChecked: 'Durchgechecktes Gepäck', baggageSelfTransfer: 'Separate Tickets / Self-Transfer', routeRuleHeading: 'Routenregeln',
  routeDomestic: 'Inland zu Inland', routeSchengen: 'Nicht-Schengen zu Schengen', routeUsInternational: 'Internationaler Umstieg in den USA',
  routeCustom: 'Benutzerdefiniert', deplaningLabel: 'Zubringer verlassen', deplaningHint: 'Aussteigen, Fluggastbrücke und Ausgang',
  transferLabel: 'Terminaltransfer', transferHint: 'Zu Fuß, Bus, Zug oder Gatewechsel', controlLabel: 'Sicherheits- oder Passkontrolle',
  controlHint: 'Jeden erforderlichen Kontrollpunkt einrechnen', baggageLabel: 'Gepäck und Check-in',
  baggageHint: 'Bei durchgechecktem Gepäck null verwenden', personalBufferLabel: 'Persönlicher Puffer', personalBufferHint: 'Gewünschte Zeit vor dem Boarding',
  gateCloseLabel: 'Gate schließt vor Abflug', gateCloseHint: 'Mit dieser Frist statt mit dem Start vergleichen', mctLabel: 'MCT zum Vergleich',
  mctHint: 'Offiziellen Wert eintragen; 0 lässt ihn unbekannt', localDataLabel: 'Lokale Transferdaten', localDataKnown: 'Belegte lokale Schätzung',
  localDataUnknown: 'Manuelle Prüfung erforderlich', sourceLabel: 'Quelle und Grenzen', advancedSettingsLabel: 'Erweiterte Einstellungen',
  advancedSettingsHint: 'Annahmen für Wege, Kontrollen, Gepäck, Gate und MCT anpassen', delayHeading: 'Simulator für Verspätungsketten',
  delayLabel: 'Verspätungstest', delayHint: 'Zusätzliche Ankunftsverspätung prüfen', delayZero: '+0 Min.', delayFifteen: '+15 Min.',
  delayThirty: '+30 Min.', delayFortyFive: '+45 Min.', presetsLabel: 'Mit einem Routentyp starten', presetShort: 'Kurzer Umstieg',
  presetStandard: 'Typischer Umstieg', presetLong: 'Langer Umstieg', resultHeading: 'Umsteigepuffer', windowLabel: 'Flugzeitfenster',
  plannedLabel: 'Geplante Schritte', gateWindowLabel: 'Bis zum Gateschluss', mctLabelResult: 'MCT-Prüfung',
  mctUnknown: 'Kein offizieller MCT eingegeben; dies ist kein belegtes Ja oder Nein.', stressLabel: 'Mit Testverspätung',
  marginLabel: 'Puffer unter Stress', statusComfortable: 'Positiver Puffer', statusTight: 'Knappes Zeitfenster', statusMissed: 'Zeit reicht nicht',
  timelineArrival: 'Landen', timelineExit: 'Flugzeug verlassen', timelineTransfer: 'Weitergehen', timelineControl: 'Kontrolle',
  timelineGate: 'Gate-Frist', timelineDeparture: 'Abflug', marginStatement: '{minutes} bleiben nach den geplanten Umsteigeschritten.',
  stressStatement: '{minutes} bleiben nach dem zusätzlichen Verspätungstest.', invalidStatement: 'Gültige, unterschiedliche Ankunfts- und Abflugzeiten eingeben, um das Zeitfenster zu sehen.',
  mctStatement: 'Das eingegebene Zeitfenster wird mit dem angegebenen MCT verglichen.',
  sourceStatement: 'Transferzeiten sind lokale Schätzungen; Kontrollen, Warteschlangen, Gatewechsel und Airline-Fristen können das Ergebnis ändern.',
  sampleButton: 'Typischen Umstieg laden', resetButton: 'Zurücksetzen', minuteUnit: 'Min.',
};

const content: ToolLocaleContent<AirportConnectionBufferUI> = createAirportContent({
  locale: 'de', slug: 'flughafen-umsteigezeit-puffer-rechner', title: 'Rechner für den Puffer bei Flughafenumstiegen',
  description: 'Schätze einen Flughafen-Umstieg mit lokalem Bordkartenscan, Terminalwegen, Gepäckarten, Gateschluss, Routenkontrollen, Verspätungstest und transparenter MCT-Prüfung.', ui,
  seo: [
    { type: 'title', text: 'Was dieser Rechner misst', level: 2 },
    { type: 'paragraph', html: 'Ein Anschlussflug bietet ein Zeitfenster, aber keine Garantie. Der Rechner zieht deine erwarteten Schritte von der geplanten Zeit bis zum Gateschluss ab.' },
    { type: 'paragraph', html: 'Scanne ein Bordkartenbild, wenn der Browser PDF417 oder Aztec lokal unterstützt, oder wähle Flughafen und Terminals manuell aus.' },
    { type: 'title', text: 'So entsteht eine brauchbare Schätzung', level: 2 },
    { type: 'list', items: ['Ankunft und Weiterflug aus dem Reiseplan eingeben.', 'Terminalweg, Shuttle oder Zug einrechnen.', 'Kontrollen sowie Gepäck- und Check-in-Schritte ergänzen.', 'Einen persönlichen Puffer für Gate und Boarding lassen.', 'Mit dem Verspätungstest prüfen, wie schnell der Puffer verschwindet.'] },
    { type: 'tip', title: 'Ein positiver Puffer ist keine Flughafengarantie', html: 'Airline, Terminal, Boarding-Frist, Passregeln und Gepäckvorgaben bleiben maßgeblich. Live-Warteschlangen und Gatewechsel kennt der Rechner nicht.' },
  ],
  faq: [
    { question: 'Kennt der Rechner die offizielle Minimum Connecting Time?', answer: 'Nur wenn du den offiziellen Wert selbst einträgst. Der MCT hängt von Flughafen, Airline, Route, Ticket und Kontrollen ab. Ein leeres Feld bleibt unbekannt.' },
    { question: 'Was gehört in den Terminaltransfer?', answer: 'Rechne Fußweg, Zug, Bus, Shuttle und Gatebewegung zwischen Ankunft und Weiterflug ein. Bei Unsicherheit konservativ schätzen und die Flughafenhinweise prüfen.' },
    { question: 'Wozu dient der Verspätungstest?', answer: 'Er zeigt transparent, wie eine angenommene Ankunftsverspätung den verbleibenden Puffer verändert. Er sagt keine Verspätungswahrscheinlichkeit voraus.' },
    { question: 'Was ändert der Self-Transfer-Modus?', answer: 'Er ergänzt eine stärkere Annahme für Gepäckabholung, Check-in und zusätzliche Wege bei getrennten Tickets. Die genaue Verbindung muss trotzdem geprüft werden.' },
  ],
  howTo: [
    { name: 'Flugzeitfenster eingeben', text: 'Ankunft und Abflug des Weiterflugs eintragen. Eine frühere Uhrzeit gilt als Abflug am Folgetag.' },
    { name: 'Umsteigeschritte ergänzen', text: 'Terminalweg, Sicherheits- oder Passkontrolle, Gepäck, Check-in und gewünschten persönlichen Puffer eintragen.' },
    { name: 'Verspätung testen', text: 'Eine Ankunftsverspätung wählen und den normalen mit dem belasteten Puffer vergleichen.' },
    { name: 'Annahmen prüfen', text: 'Offizielle Hinweise zu Terminals, Kontrollen, Gepäck, Boarding-Fristen und Ticketbedingungen prüfen.' },
  ],
  howToTitle: 'So schätzt du den Puffer für einen Anschlussflug',
});

export { content };
