import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SuitcaseChecklistUI } from '../index';

const slug = 'koffer-checklist-generator';
const title = 'Koffer Checklist Generator | Maak je eigen inpaklijst';
const description = 'De ultieme online tool om je bagage te organiseren op basis van trip type, bestemming en duur. Vergeet nooit meer je reisessentials.';

const ui: SuitcaseChecklistUI = {
  title: "Inpakplanner",
  form: {
    destTitle: "Bestemming & Klimaat",
    destTypes: [
      { id: "playa", name: "Strand / Kust", icon: "mdi:beach" },
      { id: "ciudad", name: "Stad / Stedelijk", icon: "mdi:city" },
      { id: "montana", name: "Bergen / Platteland", icon: "mdi:pine-tree" },
      { id: "frio", name: "Koud / Sneeuw", icon: "mdi:snowflake" }
    ],
    daysTitle: "Hoeveel dagen?",
    intlTitle: "Internationale Reis?",
    intlLabel: "Ja, grensoverschrijdend",
    reasonTitle: "Reisdoel",
    reasons: [
      { id: "ocio", name: "Vrije tijd / Plezier", icon: "mdi:party-popper" },
      { id: "negocios", name: "Zakelijk", icon: "mdi:tie" }
    ],
    submitBtn: "Ideale Tas Configureren"
  },
  results: {
    title: "Je Inpaklijst",
    editBtn: "Bewerken",
    printBtn: "PDF Opslaan",
    tipsTitle: "Reistips",
    progressText: "Voltooid"
  },
  itemsDb: {
    essentials: {
      id: "essentials",
      title: "Docs & Basics",
      icon: "mdi:passport",
      items: [
        { label: "ID / Paspoort" },
        { label: "Bankpasjes" },
        { label: "Contant geld" },
        { label: "Tickets (Vlucht/Trein)" },
        { label: "Boekingsbevestigingen" },
        { label: "Huissleutels" },
        { label: "Internationale documenten", dynamicId: "item-internacional" }
      ]
    },
    technology: {
      id: "technology",
      title: "Technologie",
      icon: "mdi:laptop",
      items: [
        { label: "Mobiele telefoon" },
        { label: "Oplader telefoon" },
        { label: "Koptelefoon" },
        { label: "Powerbank" },
        { label: "Stroomadapter", dynamicId: "item-adaptador" }
      ]
    },
    toiletries: {
      id: "toiletries",
      title: "Toiletartikelen",
      icon: "mdi:toothbrush",
      items: [
        { label: "Tandenborstel & pasta" },
        { label: "Deodorant" },
        { label: "Gel & shampoo" },
        { label: "Kam / Borstel" },
        { label: "Mini EHBO-kit" },
        { label: "Persoonlijke medicatie" }
      ]
    },
    clothing_base: {
      id: "clothing_base",
      title: "Dagelijkse Kleding",
      icon: "mdi:tshirt-crew",
      items: [
        { label: "Ondergoed", dynamicId: "qty-ropa-interior" },
        { label: "T-shirts / Tops", dynamicId: "qty-camisetas" },
        { label: "Broeken", dynamicId: "qty-pantalones" },
        { label: "Sokken", dynamicId: "qty-calcetines" },
        { label: "Pyjama" },
        { label: "Licht jack" },
        { label: "Comfortabele dagschoenen" }
      ]
    }
  },
  specificItems: {
    destType: {
      playa: {
        id: "dest-playa",
        title: "Voor de Kust",
        icon: "mdi:beach",
        items: [
          { label: "Zwemkleding" },
          { label: "Strandlaken" },
          { label: "Zonnebrandcrème" },
          { label: "Zonnebril" },
          { label: "Slippers" },
          { label: "Hoed of Pet" }
        ]
      },
      ciudad: {
        id: "dest-ciudad",
        title: "Stedelijk",
        icon: "mdi:city",
        items: [
          { label: "Wandelsneakers" },
          { label: "Kleine veilige rugzak" },
          { label: "Compacte paraplu" },
          { label: "Stadsgids" }
        ]
      },
      montana: {
        id: "dest-montana",
        title: "Bergen",
        icon: "mdi:pine-tree",
        items: [
          { label: "Wandelschoenen" },
          { label: "Windjack" },
          { label: "Trekkingbroek" },
          { label: "Waterfles" },
          { label: "Bergroupzak" }
        ]
      },
      frio: {
        id: "dest-frio",
        title: "Koud Klimaat",
        icon: "mdi:snowflake",
        items: [
          { label: "Dikke jas" },
          { label: "Mutsen & handschoenen" },
          { label: "Winterschoeisel" },
          { label: "Thermo shirts" },
          { label: "Sjaal" }
        ]
      }
    },
    travelType: {
      negocios: {
        id: "travel-negocios",
        title: "Zakelijk",
        icon: "mdi:tie",
        items: [
          { label: "Pak / Formele kleding" },
          { label: "Overhemden" },
          { label: "Nette schoenen" },
          { label: "Laptop" },
          { label: "Laptop oplader" },
          { label: "Werkdocumenten" }
        ]
      },
      ocio: {
        id: "travel-ocio",
        title: "Vrije tijd",
        icon: "mdi:camera",
        items: [
          { label: "Kleding voor uitgaan" },
          { label: "Camera (Optioneel)" },
          { label: "Boek / Entertainment" }
        ]
      }
    }
  },
  tips: {
    military: "Kleding oprollen op de 'militaire manier' helpt enorm tegen kreukels en bespaart ruimte.",
    longTravel: "Je gaat langer dan een week weg. Plan om je basics halverwege de reis te wassen.",
    intlPassport: "Internationale Reis: Controleer vandaag of je paspoort nog minstens 6 maanden geldig is.",
    intlBank: "Controleer of er visa nodig zijn of dat je bank buitenlandse kosten in rekening brengt.",
    intlAdapter: "Vergeet je universele adapter niet als de stopcontacten op de bestemming anders zijn!",
    coldLayers: "Bij koud weer in laagjes kleden: thermo-onderlaag, isolatie en een waterdichte buitenlaag.",
    coldHeavyOn: "Draag je dikste/zwaarste items in het vliegtuig om ruimte in je bagage te besparen.",
    beachWet: "Pak meer dan één set zwemkleding in; de luchtvochtigheid kan voorkomen dat ze 's nachts drogen."
  }
};

const seo: ToolLocaleContent<SuitcaseChecklistUI>['seo'] = [
  { type: "title", text: "Koffer Checklist Generator: Je ideale reispartner", level: 2 },
  { type: "paragraph", html: "Het inpakken van je koffer is vaak een van de meest stressvolle momenten voor een reis. De angst om iets belangrijks te vergeten, twijfels over het weer op de bestemming of onzekerheid over de hoeveelheid bagage kunnen de dagen voor je langverwachte vakantie verpesten. Dit is waar een <strong>koffer checklist generator</strong> je beste bondgenoot wordt." },
  {
    type: "summary",
    title: "Voordelen van het gebruik van onze lijstmaker",
    items: [
      "Absolute personalisatie aangepast aan het klimaat van je bestemming (strand, bergen, stad of sneeuw).",
      "Automatische berekening van kleding op basis van de duur van je uitje.",
      "Drastische vermindering van logistieke stress met een interactieve checklist die je kunt afvinken.",
      "Optimalisatie van bagageruimte, vermijdt het 'voor de zekerheid'-syndroom."
    ]
  },
  { type: "title", text: "Waarom bagageplanning fundamenteel is", level: 3 },
  { type: "paragraph", html: "Reizen is een transformerende ervaring, maar een slechte planning kan onnodige hoofdpijn veroorzaken. Door onze slimme tool te gebruiken, automatiseer je een proces dat anders uren aan berekening en onthouden zou kosten. Efficiënte organisatie is de basis van elk succesvol avontuur." }
];

const faq: ToolLocaleContent<SuitcaseChecklistUI>['faq'] = [
  { question: "Kan ik de gegenereerde lijst opslaan?", answer: "Je kunt items op je lijst aanvinken en uitvinken, en de knop gebruiken om de lijst te printen of als PDF-bestand op je apparaat op te slaan." },
  { question: "Hoe worden kledinghoeveelheden berekend?", answer: "Onze tool schat kledingsets op basis van de geselecteerde reisduur, bevordert licht reizen en optimaliseert je bagage." },
  { question: "Werkt het voor koud weer en sneeuw?", answer: "Ja, je kunt de bestemming koud klimaat selecteren zodat de checklist automatisch onmisbare items voor die omstandigheden bevat." },
  { question: "Is de tool gratis?", answer: "Ja, onze koffer checklist generator is 100% gratis en vereist geen registratie of extra app-downloads." }
];

const bibliography: ToolLocaleContent<SuitcaseChecklistUI>['bibliography'] = [
  { name: "KonMari - Hoe een koffer in te pakken volgens KonMari", url: "https://konmari.com/how-to-konmari-a-suitcase/" },
  { name: "Eagle Creek - Wat in te pakken: De ultieme reis checklist", url: "https://eaglecreek.com/blogs/articles/what-pack-ultimate-travel-packing-checklist" }
];

const howTo: ToolLocaleContent<SuitcaseChecklistUI>['howTo'] = [
  { name: "Definieer je reis", text: "Selecteer het klimaat, de reden en de duur van je reis." },
  { name: "Genereer lijst", text: "Druk op de knop en krijg direct alle benodigde items te zien, van cosmetica tot technologie." },
  { name: "Pak je tas in", text: "Vink items af terwijl je ze inpakt, zodat je niets essentieels vergeet." }
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
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<SuitcaseChecklistUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: "Veelgestelde Vragen",
  bibliography,
  bibliographyTitle: "Bronnen en Referenties",
  howTo,
  howToTitle: "Hoe je koffer in te pakken",
  schemas: [faqSchema, howToSchema, appSchema],
};
