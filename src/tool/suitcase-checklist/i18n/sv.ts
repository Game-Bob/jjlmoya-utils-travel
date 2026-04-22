import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SuitcaseChecklistUI } from '../index';

const slug = 'generator-for-packlista';
const title = 'Packlista Generator Skapa din packlista online';
const description = 'Det ultimata onlineverktyget för att organisera ditt bagage baserat på resetyp, destination och varaktighet. Glöm aldrig dina nödvändigheter igen.';

const ui: SuitcaseChecklistUI = {
  title: "Packplanerare",
  form: {
    destTitle: "Destination & Klimat",
    destTypes: [
      { id: "playa", name: "Strand / Kust", icon: "mdi:beach" },
      { id: "ciudad", name: "Stad / Urban", icon: "mdi:city" },
      { id: "montana", name: "Berg / Landsbygd", icon: "mdi:pine-tree" },
      { id: "frio", name: "Kyla / Snö", icon: "mdi:snowflake" }
    ],
    daysTitle: "Hur många dagar?",
    intlTitle: "Utlandsresa?",
    intlLabel: "Ja, korsar gränser",
    reasonTitle: "Resans Syfte",
    reasons: [
      { id: "ocio", name: "Fritid / Nöje", icon: "mdi:party-popper" },
      { id: "negocios", name: "Affärsresa", icon: "mdi:tie" }
    ],
    submitBtn: "Konfigurera Idealisk Väska"
  },
  results: {
    title: "Din Packlista",
    editBtn: "Redigera",
    printBtn: "Spara PDF",
    tipsTitle: "Resetips",
    progressText: "Slutförd"
  },
  itemsDb: {
    essentials: {
      id: "essentials",
      title: "Dokument & Basartiklar",
      icon: "mdi:passport",
      items: [
        { label: "ID / Pass" },
        { label: "Bankkort" },
        { label: "Kontanter" },
        { label: "Biljetter (Flyg/Tåg)" },
        { label: "Bokningsbekräftelser" },
        { label: "Hemnycklar" },
        { label: "Internationella dok", dynamicId: "item-internacional" }
      ]
    },
    technology: {
      id: "technology",
      title: "Teknik",
      icon: "mdi:laptop",
      items: [
        { label: "Mobiltelefon" },
        { label: "Mobilladdare" },
        { label: "Hörlurar" },
        { label: "Powerbank" },
        { label: "Reseadapter", dynamicId: "item-adaptador" }
      ]
    },
    toiletries: {
      id: "toiletries",
      title: "Toalettartiklar",
      icon: "mdi:toothbrush",
      items: [
        { label: "Tandborste & pasta" },
        { label: "Deodorant" },
        { label: "Gel & schampo" },
        { label: "Kam / Borste" },
        { label: "Litet första hjälpen-kit" },
        { label: "Personliga mediciner" }
      ]
    },
    clothing_base: {
      id: "clothing_base",
      title: "Vardagskläder",
      icon: "mdi:tshirt-crew",
      items: [
        { label: "Underkläder", dynamicId: "qty-ropa-interior" },
        { label: "T-shirtar / Toppar", dynamicId: "qty-camisetas" },
        { label: "Byxor / Nederdelar", dynamicId: "qty-pantalones" },
        { label: "Strumpor", dynamicId: "qty-calcetines" },
        { label: "Pyjamas" },
        { label: "Lätt jacka" },
        { label: "Bekväma vardagsskor" }
      ]
    }
  },
  specificItems: {
    destType: {
      playa: {
        id: "dest-playa",
        title: "För Kusten",
        icon: "mdi:beach",
        items: [
          { label: "Badkläder" },
          { label: "Strandhandduk" },
          { label: "Solkräm" },
          { label: "Solglasögon" },
          { label: "Flip-flops" },
          { label: "Hatt eller Keps" }
        ]
      },
      ciudad: {
        id: "dest-ciudad",
        title: "Urban",
        icon: "mdi:city",
        items: [
          { label: "Promenadskor" },
          { label: "Liten säker ryggsäck" },
          { label: "Kompakt paraply" },
          { label: "Stadsguide" }
        ]
      },
      montana: {
        id: "dest-montana",
        title: "Berg",
        icon: "mdi:pine-tree",
        items: [
          { label: "Vandringskängor" },
          { label: "Vindjacka" },
          { label: "Friluftsbyxor" },
          { label: "Vattenflaska" },
          { label: "Bergsryggsäck" }
        ]
      },
      frio: {
        id: "dest-frio",
        title: "Kallt Klimat",
        icon: "mdi:snowflake",
        items: [
          { label: "Tjock jacka" },
          { label: "Mössa & handskar" },
          { label: "Vinterskor" },
          { label: "Underställ" },
          { label: "Halsduk" }
        ]
      }
    },
    travelType: {
      negocios: {
        id: "travel-negocios",
        title: "Business",
        icon: "mdi:tie",
        items: [
          { label: "Kostym / Formella kläder" },
          { label: "Skjortor" },
          { label: "Finskor" },
          { label: "Laptop" },
          { label: "Laptopladdare" },
          { label: "Arbetsdokument" }
        ]
      },
      ocio: {
        id: "travel-ocio",
        title: "Fritid",
        icon: "mdi:camera",
        items: [
          { label: "Kläder för kvällen" },
          { label: "Kamera (Valfritt)" },
          { label: "Bok / Underhållning" }
        ]
      }
    }
  },
  tips: {
    military: "Att rulla kläderna 'military style' hjälper mycket mot rynkor och sparar plats.",
    longTravel: "Du ska vara borta mer än en vecka. Planera att tvätta dina basplagg halvvägs.",
    intlPassport: "Utlandsresa: Kontrollera idag om ditt pass är giltigt i minst 6 månader till.",
    intlBank: "Kontrollera behov av visum eller om din bank tar ut avgifter utomlands.",
    intlAdapter: "Glöm inte din universaladapter om destinationens uttag är annorlunda!",
    coldLayers: "För kallt väder, klä dig i lager: underställ, isolering och vattentätt ytterlager.",
    coldHeavyOn: "Bär dina mest skrymmande/tyngsta plagg på planet för att spara plats i kabinen.",
    beachWet: "Packa mer än en baddräkt; luftfuktighet kan hindra dem från att torka över natten."
  }
};

const seo: ToolLocaleContent<SuitcaseChecklistUI>['seo'] = [
  { type: "title", text: "Packlista Generator: Din Idealiska Resekamrat", level: 2 },
  { type: "paragraph", html: "Att packa resväskan är ofta ett av de mest stressiga ögonblicken före en resa. Rädslan för att glömma något viktigt, tvivel om vädret på destinationen eller osäkerhet om hur mycket bagage man ska ta med kan dämpa dagarna före din efterlängtade semester. Det är här en <strong>packlista-generator</strong> blir din bästa vän." },
  {
    type: "summary",
    title: "Fördelar med att använda vår listskapare",
    items: [
      "Total personlig anpassning för din destinations klimat (strand, berg, stad eller snö).",
      "Automatisk beräkning av klädmängd baserat på resans varaktighet.",
      "Drastisk minskning av logistisk stress med en interaktiv checklista.",
      "Optimering av bagageutrymme, undvik 'utifall att'-syndromet."
    ]
  },
  { type: "title", text: "Varför är bagageplanering grundläggande?", level: 3 },
  { type: "paragraph", html: "Resor är en transformativ upplevelse, men dålig planering kan medföra onödig huvudvärk. Genom att använda vårt smarta verktyg automatiserar du en process som annars skulle ta timmar av beräkning och memorering. Effektiv organisering är grunden för alla lyckade äventyr." }
];

const faq: ToolLocaleContent<SuitcaseChecklistUI>['faq'] = [
  { question: "Kan jag spara den genererade listan?", answer: "Du kan bocka i och ur objekt på din lista, samt använda knappen för att skriva ut den eller spara den som en PDF-fil på din enhet." },
  { question: "Hur beräknas klädmängden?", answer: "Vårt verktyg uppskattar antal uppsättningar kläder baserat på vald reslängd, vilket uppmuntrar till att resa lätt och optimera ditt bagage." },
  { question: "Fungerar det för kallt väder och snö?", answer: "Ja, du kan välja destination med kallt klimat så att checklistan automatiskt inkluderar oumbärliga föremål för de förhållandena." },
  { question: "Är verktyget gratis?", answer: "Ja, vår packlista-generator är 100 % gratis och kräver ingen registrering eller nedladdning av appar." }
];

const howTo: ToolLocaleContent<SuitcaseChecklistUI>['howTo'] = [
  { name: "Definiera din resa", text: "Välj klimat, syfte och varaktighet för din resa." },
  { name: "Generera lista", text: "Tryck på knappen och få direkt fram alla nödvändiga föremål, från hygienartiklar till teknik." },
  { name: "Packa väskan", text: "Bocka av objekt allt eftersom du packar dem så att du inte glömmer något viktigt." }
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<SuitcaseChecklistUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: "Vanliga frågor",
  bibliography: "Källor och referenser",
  howTo,
  howToTitle: "Hur du packar din väska",
  schemas: [faqSchema, howToSchema, appSchema],
};
