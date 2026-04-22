import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SuitcaseChecklistUI } from '../index';

const slug = 'generatore-lista-valigia';
const title = 'Generatore Lista Valigia Crea la tua lista per fare i bagagli';
const description = 'Lo strumento online definitivo per organizzare il tuo bagaglio in base al tipo di viaggio, alla destinazione e alla durata. Non dimenticare mai più gli elementi essenziali per il tuo viaggio.';

const ui: SuitcaseChecklistUI = {
  title: "Pianificatore Bagagli",
  form: {
    destTitle: "Destinazione e Clima",
    destTypes: [
      { id: "playa", name: "Spiaggia / Costa", icon: "mdi:beach" },
      { id: "ciudad", name: "Città / Urbano", icon: "mdi:city" },
      { id: "montana", name: "Montagna / Rurale", icon: "mdi:pine-tree" },
      { id: "frio", name: "Freddo / Neve", icon: "mdi:snowflake" }
    ],
    daysTitle: "Quanti giorni?",
    intlTitle: "Viaggio Internazionale?",
    intlLabel: "Sì, attraverso i confini",
    reasonTitle: "Scopo del Viaggio",
    reasons: [
      { id: "ocio", name: "Tempo libero / Piacere", icon: "mdi:party-popper" },
      { id: "negocios", name: "Affari", icon: "mdi:tie" }
    ],
    submitBtn: "Configura Borsa Ideale"
  },
  results: {
    title: "La Tua Lista Bagagli",
    editBtn: "Modifica",
    printBtn: "Salva PDF",
    tipsTitle: "Consigli di Viaggio",
    progressText: "Completato"
  },
  itemsDb: {
    essentials: {
      id: "essentials",
      title: "Documenti e Base",
      icon: "mdi:passport",
      items: [
        { label: "Documento d'identità / Passaporto" },
        { label: "Carte bancarie" },
        { label: "Contanti" },
        { label: "Biglietti (Volo/Treno)" },
        { label: "Conferme di prenotazione" },
        { label: "Chiavi di casa" },
        { label: "Documenti internazionali", dynamicId: "item-internacional" }
      ]
    },
    technology: {
      id: "technology",
      title: "Tecnologia",
      icon: "mdi:laptop",
      items: [
        { label: "Telefono cellulare" },
        { label: "Caricabatterie telefono" },
        { label: "Cuffie" },
        { label: "Power bank" },
        { label: "Adattatore di corrente", dynamicId: "item-adaptador" }
      ]
    },
    toiletries: {
      id: "toiletries",
      title: "Articoli da Toeletta",
      icon: "mdi:toothbrush",
      items: [
        { label: "Spazzolino e dentifricio" },
        { label: "Deodorante" },
        { label: "Gel e shampoo" },
        { label: "Pettine / Spazzola" },
        { label: "Mini kit di pronto soccorso" },
        { label: "Medicine personali" }
      ]
    },
    clothing_base: {
      id: "clothing_base",
      title: "Abbigliamento Quotidiano",
      icon: "mdi:tshirt-crew",
      items: [
        { label: "Biancheria intima", dynamicId: "qty-ropa-interior" },
        { label: "T-shirt / Top", dynamicId: "qty-camisetas" },
        { label: "Pantaloni", dynamicId: "qty-pantalones" },
        { label: "Calzini", dynamicId: "qty-calcetines" },
        { label: "Pigiama" },
        { label: "Giacca leggera" },
        { label: "Scarpe comode quotidiane" }
      ]
    }
  },
  specificItems: {
    destType: {
      playa: {
        id: "dest-playa",
        title: "Per la Costa",
        icon: "mdi:beach",
        items: [
          { label: "Costume da bagno" },
          { label: "Asciugamano da spiaggia" },
          { label: "Crema solare" },
          { label: "Occhiali da sole" },
          { label: "Infradito" },
          { label: "Cappello o berretto" }
        ]
      },
      ciudad: {
        id: "dest-ciudad",
        title: "Urbano",
        icon: "mdi:city",
        items: [
          { label: "Sneaker per camminare" },
          { label: "Piccolo zaino sicuro" },
          { label: "Ombrello compatto" },
          { label: "Guida della città" }
        ]
      },
      montana: {
        id: "dest-montana",
        title: "Montagna",
        icon: "mdi:pine-tree",
        items: [
          { label: "Scarponi da trekking" },
          { label: "Giacca a vento" },
          { label: "Pantaloni da trekking" },
          { label: "Borraccia" },
          { label: "Zaino da montagna" }
        ]
      },
      frio: {
        id: "dest-frio",
        title: "Clima Freddo",
        icon: "mdi:snowflake",
        items: [
          { label: "Cappotto pesante" },
          { label: "Berretti e guanti" },
          { label: "Calzature invernali" },
          { label: "Maglie termiche" },
          { label: "Sciarpa" }
        ]
      }
    },
    travelType: {
      negocios: {
        id: "travel-negocios",
        title: "Affari",
        icon: "mdi:tie",
        items: [
          { label: "Abito / Abbigliamento formale" },
          { label: "Camicie eleganti" },
          { label: "Scarpe formali" },
          { label: "Laptop" },
          { label: "Caricabatterie laptop" },
          { label: "Documenti di lavoro" }
        ]
      },
      ocio: {
        id: "travel-ocio",
        title: "Tempo Libero",
        icon: "mdi:camera",
        items: [
          { label: "Vestiti per uscire la sera" },
          { label: "Fotocamera (Opzionale)" },
          { label: "Libro / Intrattenimento" }
        ]
      }
    }
  },
  tips: {
    military: "Arrotolare i vestiti in 'stile militare' aiuta molto contro le pieghe e fa risparmiare spazio.",
    longTravel: "Starai via per più di una settimana. Pianifica di lavare i tuoi capi base a metà viaggio.",
    intlPassport: "Viaggio Internazionale: Controlla oggi stesso se il tuo passaporto è valido per almeno 6 mesi.",
    intlBank: "Controlla i visti necessari o se la tua banca applica commissioni per l'estero.",
    intlAdapter: "Non dimenticare il tuo adattatore universale se le prese della destinazione sono diverse!",
    coldLayers: "Per il clima freddo, vestiti a strati: base termica, isolamento e strato esterno impermeabile.",
    coldHeavyOn: "Indossa i capi più ingombranti/pesanti sull'aereo per risparmiare spazio nel bagaglio.",
    beachWet: "Porta più di un costume da bagno; l'umidità potrebbe impedire loro di asciugarsi durante la notte."
  }
};

const seo: ToolLocaleContent<SuitcaseChecklistUI>['seo'] = [
  { type: "title", text: "Generatore Lista Valigia: Il tuo compagno di viaggio ideale", level: 2 },
  { type: "paragraph", html: "Preparare la valigia è spesso uno dei momenti più stressanti prima di un viaggio. La paura di dimenticare qualcosa di importante, i dubbi sul tempo a destinazione o l'incertezza su quanto bagaglio portare possono rovinare i giorni che precedono l'attesissima vacanza. È qui che un <strong>generatore di liste per la valigia</strong> diventa il tuo migliore alleato." },
  {
    type: "summary",
    title: "Vantaggi dell'utilizzo del nostro creatore di liste",
    items: [
      "Personalizzazione assoluta adattata al clima della tua destinazione (spiaggia, montagna, città o neve).",
      "Calcolo automatico dell'abbigliamento in base alla durata del tuo soggiorno.",
      "Riduzione drastica dello stress logistico con una checklist interattiva che puoi spuntare.",
      "Ottimizzazione dello spazio nel bagaglio, evitando la sindrome del 'non si sa mai'."
    ]
  },
  { type: "title", text: "Perché la pianificazione del bagaglio è fondamentale?", level: 3 },
  { type: "paragraph", html: "Il viaggio è un'esperienza trasformativa, ma una scarsa pianificazione può causare inutili grattacapi. Utilizzando il nostro strumento intelligente, automatizzi un processo che altrimenti richiederebbe ore di calcoli e memorizzazione. Un'organizzazione efficiente è la base di ogni avventura di successo." }
];

const faq: ToolLocaleContent<SuitcaseChecklistUI>['faq'] = [
  { question: "Posso salvare la lista generata?", answer: "Puoi spuntare e deselezionare le voci sulla tua lista, oltre a usare il pulsante per stamparla o salvarla come file PDF sul tuo dispositivo." },
  { question: "Come vengono calcolate le quantità di vestiti?", answer: "Il nostro strumento stima i set di vestiti in base alla durata del viaggio selezionata, promuovendo il viaggio leggero e ottimizzando il tuo bagaglio." },
  { question: "Funziona per il clima freddo e la neve?", answer: "Sì, puoi selezionare la destinazione con clima freddo affinché la checklist includa automaticamente gli articoli indispensabili per quelle condizioni." },
  { question: "Lo strumento è gratuito?", answer: "Sì, il nostro generatore di liste per la valigia è gratuito al 100% e non richiede registrazione o download di app aggiuntive." }
];

const howTo: ToolLocaleContent<SuitcaseChecklistUI>['howTo'] = [
  { name: "Definisci il tuo viaggio", text: "Seleziona il clima, il motivo e la durata del tuo soggiorno." },
  { name: "Genera lista", text: "Premi il pulsante e ottieni istantaneamente tutti gli articoli necessari, dai cosmetici alla tecnologia." },
  { name: "Fai la valigia", text: "Spunta gli articoli mentre li metti in valigia per non dimenticare nulla di essenziale." }
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
  inLanguage: 'it',
};

export const content: ToolLocaleContent<SuitcaseChecklistUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: "Domande Frequenti",
  bibliography: "Fonti e Riferimenti",
  howTo,
  howToTitle: "Come preparare la valigia",
  schemas: [faqSchema, howToSchema, appSchema],
};
