import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SchengenCalculatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'schengen-aufenthaltsrechner-90-180';
const title = 'Schengen 90 180 Tage Aufenthaltsrechner';
const description =
  'Berechnen Sie Ihre zulässigen Aufenthaltstage im Schengen-Raum nach der rollierenden 90/180-Tage-Regel. Vermeiden Sie Überziehungen und Grenzstrafen in Europa.';

const ui: SchengenCalculatorUI = {
  verdictSafeTitle: 'Reise Gesetzeskonform (Im Zulässigen Rahmen)',
  verdictWarningTitle: 'Achtung: Annäherung an das 90-Tage-Limit',
  verdictOverstayTitle: 'Illegale Überziehung (Overstay) Festgestellt',
  daysRemainingSub: 'Verbleibende Erlaubte Tage',
  daysUsedSub: 'Verbrauchte Tage (180-Tage-Fenster)',
  maxStaySub: 'Max. Durchgehender Aufenthalt Ab Datum',
  fullResetSub: 'Datum des Vollständigen 90-Tage-Resets',
  plannerHeading: '1. Zieldatum Überprüfen',
  plannerEntryLabel: 'Einreisedatum / Geplanter Flug',
  quickDatesLabel: 'Direktsprung',
  presetToday: 'Heute',
  presetPlus7: '+1 Woche',
  presetPlus14: '+2 Wochen',
  presetPlus30: '+1 Monat',
  tripsHeading: '2. Schengen Reisetagebuch (Vergangen & Geplant)',
  addTripBtn: '+ Reise Hinzufügen',
  emptyTripsMsg: 'Keine Reisen eingetragen. Fügen Sie Ihre vergangenen oder geplanten Europa-Aufenthalte hinzu.',
  colArrival: 'Einreise (Ankunft)',
  colDeparture: 'Ausreise (Abflug)',
  colDestination: 'Land / Notizen',
  colDays: 'Tage',
  sampleBtn: 'Beispiel-Reisen Laden',
  clearBtn: 'Alles Löschen',
  timelineTitle: '180-Tage Rollierendes Zeitfenster',
  legendInSchengen: 'Im Schengen-Raum',
  legendOutside: 'Außerhalb',
  legendOverstay: 'Überziehung',
  bannerSafe: 'Am {date} haben Sie {used} verbraucht ({rem} verfügbar).',
  bannerWarning: 'Am {date} haben Sie {used} verbraucht (nur noch {rem} verfügbar).',
  bannerOverstay: 'Illegale Überziehung ab dem {date} festgestellt. Ihre Reise überschreitet das Limit um {days}.',
  unitDays: 'Tage',
  notesPlaceholder: 'z.B. Frankreich, Spanien',
  sampleNotes1: 'Italien Rundreise (20 Tage)',
  sampleNotes2: 'Deutschland & Österreich (20 Tage)',
  sampleNotesDefault: 'Frankreich & Spanien',
};

const seo: ToolLocaleContent<SchengenCalculatorUI>['seo'] = [
  {
    type: 'title',
    text: 'Funktionsweise der 90 180 Schengen Regel im Detail',
    level: 2,
  },
  {
    type: 'summary',
    title: 'Grundprinzipien des Rollierenden Schengen Zeitfensters',
    items: [
      'Drittstaatsangehörige dürfen sich innerhalb eines Zeitraums von 180 Tagen maximal 90 Tage im Schengen-Raum aufhalten.',
      'Das 180-Tage-Fenster bewegt sich kontinuierlich mit jedem Tag mit und blickt 179 Tage zurück.',
      'Sowohl der Tag der Einreise als auch der Tag der Ausreise zählen als volle Aufenthaltstage.',
      'Eine kurze Ausreise setzt das 90-Tage-Kontingent nicht zurück; ein voller Reset erfordert 90 ununterbrochene Tage außerhalb.',
    ],
  },
  {
    type: 'paragraph',
    html: 'Der Schengen-Raum schreibt gemäß Artikel 6 Absatz 1 des <em>Schengen-Grenzkodex (Verordnung EU 2016/399)</em> eine strikte Obergrenze von <strong>maximal 90 Tagen innerhalb jedes 180-Tage-Zeitraums</strong> für visumbefreite Reisende und Inhaber von Schengen-Visa der Kategorie C vor. An jedem einzelnen Kalendertag des Aufenthalts ermitteln die Grenzbehörden die Gesamtzahl der in den vorangegangenen 179 Tagen im Schengen-Gebiet verbrachten Tage zuzüglich des aktuellen Tages.',
  },
  {
    type: 'title',
    text: 'Wichtige Kennzahlen und Grenzstandards',
    level: 2,
  },
  {
    type: 'stats',
    items: [
      {
        value: '90 Tage',
        label: 'Maximaler Gesamtaufenthalt',
      },
      {
        value: '180 Tage',
        label: 'Rollierender Prüfungszeitraum',
      },
      {
        value: 'Beide Tage',
        label: 'Inklusive Grenzzählung',
      },
      {
        value: '29 Staaten',
        label: 'Gemeinsames Schengen-Gebiet',
      },
    ],
  },
  {
    type: 'title',
    text: 'Feste Jahresquoten vs Rollierende Zeitfenster',
    level: 2,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Irrglaube des Kalenderjahres',
        description:
          'Viele Reisende nehmen fälschlicherweise an, dass sich ihre 90 Tage am 1. Januar automatisch erneuern oder nach einer kurzen Ausreise zurückgesetzt werden. Dies führt regelmäßig zu unabsichtlichen Aufenthaltsüberziehungen und hohen Bußgeldern.',
      },
      {
        title: 'Tatsächliches Rollierendes System',
        description:
          'Jeder im Schengen-Raum verbrachte Tag wird auf einer kontinuierlichen Zeitachse erfasst. Mit dem Fortschreiten der Zeit fallen ältere Tage nach 180 Tagen automatisch aus dem Berechnungsfenster heraus und geben neue Tage frei.',
      },
    ],
  },
  {
    type: 'title',
    text: 'Typische Reiseprofile und Rechtliche Bewertung',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Reisemuster', 'Beispielablauf', 'Status', 'Handlungsempfehlung'],
    rows: [
      [
        'Einmaliger Durchgehender Aufenthalt',
        'Einreise 1. Juni, Ausreise 29. August (90 Tage)',
        'Konform',
        'Muss am 90. Tag ausreisen und 90 aufeinanderfolgende Tage außerhalb bleiben, um das volle Kontingent wiederzuerlangen.',
      ],
      [
        'Mehrfachreisender',
        'Drei getrennte 30-Tage-Reisen mit jeweils 30 Tagen Pause',
        'Konform',
        'Jeder Reiseabschnitt muss für sich im 180-Tage-Rückblick überprüft werden.',
      ],
      [
        'Digital Nomad Hopping',
        '60 Tage Schengen, 30 Tage Pause im Wechsel',
        'Hohes Overstay-Risiko',
        'Eine 30-Tage-Pause regeneriert nur Tage, die exakt 180 Tage zurückliegen; Einreiseverweigerung droht.',
      ],
      [
        'Vollständiger 90-Tage-Reset',
        'Ununterbrochene 90-Tage-Abwesenheit außerhalb Europas',
        'Voll Regeneriert',
        'Garantiert die vollständige Wiederherstellung des maximalen 90-Tage-Kontingents bei der nächsten Einreise.',
      ],
    ],
  },
  {
    type: 'title',
    text: 'Strategische Praxistipps für Grenzübertritte',
    level: 2,
  },
  {
    type: 'tip',
    title: 'Puffertage Einplanen',
    html: 'Buchen Sie Ihren Rückflug niemals exakt auf den 90. Tag. Flugausfälle, Streiks oder medizinische Notfälle können Ihre Ausreise auf den 91. Tag verschieben, was eine automatische Erfassung im europäischen Einreise-/Ausreisesystem (EES) und Einreiseverbote nach sich ziehen kann.',
  },
  {
    type: 'card',
    title: 'Nachweise über Aufenthalte Außerhalb des Schengen Gebiets',
    html: 'Bewahren Sie Bordkarten, Hotelrechnungen und Reisepassstempel aus Nicht-Schengen-Ländern (wie Großbritannien, Irland, Zypern, Montenegro oder Albanien) sorgfältig auf, um Ihre Abwesenheit bei Grenzkontrollen lückenlos nachzuweisen.',
  },
  {
    type: 'title',
    text: 'Glossar Europäischer Grenzbegriffe',
    level: 2,
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'Overstay (Aufenthaltsüberziehung)',
        definition:
          'Das Verweilen im Schengen-Gebiet über die zulässigen 90 Tage innerhalb von 180 Tagen hinaus, was Geldbußen, Ausweisung oder mehrjährige Einreisesperren zur Folge hat.',
      },
      {
        term: 'EES (Entry/Exit System)',
        definition:
          'Das automatisierte IT-System der EU zur Registrierung von Ein- und Ausreisedaten sowie biometrischen Merkmalen von Nicht-EU-Bürgern.',
      },
      {
        term: 'Drittstaatsangehöriger',
        definition:
          'Jede Person, die weder die Staatsangehörigkeit eines EU-Mitgliedstaates noch eines EFTA-Staates besitzt.',
      },
    ],
  },
];

const faq: ToolLocaleContent<SchengenCalculatorUI>['faq'] = [
  {
    question: 'Was besagt die 90 180 Regel im Schengen-Raum genau?',
    answer:
      'Sie erlaubt Staatsangehörigen von Nicht-EU-Ländern, sich ohne nationales Visum maximal 90 Tage innerhalb eines beweglichen 180-Tage-Zeitraums in den 29 Schengen-Staaten aufzuhalten.',
  },
  {
    question: 'Wird das 90-Tage-Kontingent bei der Ausreise zurückgesetzt?',
    answer:
      'Nein. Eine Ausreise setzt den Zähler nicht automatisch zurück. Das 180-Tage-Fenster wandert täglich mit. Ein vollständiger Reset tritt erst nach 90 zusammenhängenden Tagen außerhalb des Schengen-Raums ein.',
  },
  {
    question: 'Zählen Einreise- und Ausreisetag als volle Aufenthaltstage?',
    answer:
      'Ja. Nach Artikel 6 des Schengen-Grenzkodex gelten sowohl der Ankunftstag als auch der Abreisetag als vollständige Tage im Schengen-Gebiet.',
  },
  {
    question: 'Welche Länder gehören zum Schengen-Raum für diese Berechnung?',
    answer:
      'Dazu gehören 29 Staaten: Belgien, Bulgarien, Dänemark, Deutschland, Estland, Finnland, Frankreich, Griechenland, Island, Italien, Kroatien, Lettland, Liechtenstein, Litauen, Luxemburg, Malta, Niederlande, Norwegen, Österreich, Polen, Portugal, Rumänien, Schweden, Schweiz, Slowakei, Slowenien, Spanien, Tschechien und Ungarn. Großbritannien und Irland gehören nicht dazu.',
  },
];

const howTo: ToolLocaleContent<SchengenCalculatorUI>['howTo'] = [
  {
    name: 'Auswertungsdatum Auswählen',
    text: 'Wählen Sie das Datum Ihres nächsten Fluges oder den Tag, für den Sie Ihre verbleibenden Tage berechnen möchten.',
  },
  {
    name: 'Bisherige und Geplante Reisen Eintragen',
    text: 'Fügen Sie das Einreise- und Ausreisedatum für jeden Aufenthalt im Schengen-Raum der letzten Monate hinzu.',
  },
  {
    name: 'Tage und Fristen Überprüfen',
    text: 'Prüfen Sie die Anzeige der verbleibenden Tage, die maximal zulässige durchgehende Aufenthaltsdauer und das Reset-Datum.',
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
  inLanguage: 'de',
};

export const content: ToolLocaleContent<SchengenCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  howTo,
  howToTitle: 'So berechnen Sie Ihren Schengen-Aufenthalt',
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography: bibliographyEntries,
};
