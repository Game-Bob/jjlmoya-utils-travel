import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { OptimalRoutesUI } from '../index';

const slug = 'calcolatore-percorsi-ottimali';
const title = 'Calcolatore Percorsi Ottimali | Riordino Intelligente delle Tappe';
const description = 'Ottimizza i tuoi percorsi di consegna o di viaggio gratuitamente. Il nostro strumento riordina automaticamente le tue tappe per trovare il percorso più breve ed efficiente.';

const ui: OptimalRoutesUI = {
  title: "Percorsi Ottimali",
  sidebar: {
    title: "Piano di Viaggio",
    addPoint: "Aggiungi tappa (clicca sulla mappa)",
    pointsList: "Le tue tappe",
    emptyState: "Clicca sulla mappa per aggiungere tappe al tuo percorso.",
    optimizeBtn: "Ottimizza Sequenza",
    clearBtn: "Cancella Tutto",
    stats: {
      distance: "Distanza totale:",
      time: "Tempo stimato:"
    }
  },
  map: {
    placeholder: "Caricamento mappa...",
    attribution: "© contributori di OpenStreetMap"
  },
  errors: {
    minPoints: "Sono necessari almeno due punti per calcolare un percorso.",
    calcError: "Errore nel calcolo del percorso ottimale. Per favore riprova."
  },
  labels: {
    origin: "Inizio",
    destination: "Fine",
    stop: "Tappa",
    loading: "Calcolo..."
  }
};

const seo: ToolLocaleContent<OptimalRoutesUI>['seo'] = [
  { type: "title", text: "Ottimizzazione Intelligente dei Percorsi", level: 2 },
  { type: "paragraph", html: "Utilizza algoritmi avanzati per risolvere il Problema del Commesso Viaggiatore (TSP) in pochi secondi. Ideale per logistica, consegne o semplicemente per risparmiare carburante durante i tuoi viaggi." },
  { type: "title", text: "Perché l'Ordine delle Tappe è Fondamentale", level: 3 },
  { type: "paragraph", html: "Un ordinamento errato delle tue tappe può aumentare significativamente i tempi di percorrenza e il consumo di carburante. Il nostro ottimizzatore analizza milioni di possibilità per mostrarti la strada più diretta, evitando deviazioni e sovrapposizioni inutili." }
];

const faq: ToolLocaleContent<OptimalRoutesUI>['faq'] = [
  { question: "Come funziona l'ottimizzazione?", answer: "Analizziamo tutte le tue tappe e determiniom l'ordine sequenziale che minimizza la distanza totale percorsa." },
  { question: "Posso usarlo sul cellulare?", answer: "Sì, lo strumento è completamente responsivo e ti permette di aprire il percorso risultante direttamente nelle app di navigazione." },
  { question: "C'è un limite al numero di tappe?", answer: "Per la versione gratuita, puoi ottimizzare in modo efficiente fino a 25 tappe, perfetto per consegne giornaliere o road trip." }
];

const howTo: ToolLocaleContent<OptimalRoutesUI>['howTo'] = [
  { name: "Aggiungi", text: "Clicca sulla mappa per fissare il punto di partenza e le tappe intermedie." },
  { name: "Ottimizza", text: "Premi il pulsante ottimizza affinché il sistema riordini le tappe in modo efficiente." },
  { name: "Naviga", text: "Usa il piano generato per seguire il percorso suggerito." }
];

const bibliography: ToolLocaleContent<OptimalRoutesUI>['bibliography'] = [
  { name: "Problema del commesso viaggiatore (TSP)", url: "https://it.wikipedia.org/wiki/Problema_del_commesso_viaggiatore" },
  { name: "Ottimizzazione dei percorsi", url: "https://it.wikipedia.org/wiki/Logistica" }
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
  applicationCategory: 'MapApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'it',
};

export const content: ToolLocaleContent<OptimalRoutesUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: "Domande Frequenti",
  bibliography,
  bibliographyTitle: "Fonti e Riferimenti",
  howTo,
  howToTitle: "Come usarlo",
  schemas: [faqSchema, howToSchema, appSchema],
};
