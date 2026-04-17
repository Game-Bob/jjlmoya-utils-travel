import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { OptimalRoutesUI } from '../index';

const slug = 'calculadora-rotas-otimas-reordenar-paragens';
const title = 'Calculadora de Rotas Ótimas | Reordenamento Inteligente de Paragens';
const description = 'Otimize as suas rotas de entrega ou de viagem gratuitamente. A nossa ferramenta reordena as suas paragens automaticamente para encontrar o caminho mais curto e eficiente.';

const ui: OptimalRoutesUI = {
  title: "Rotas Ótimas",
  sidebar: {
    title: "Plano de Rota",
    addPoint: "Adicionar paragem (clicar no mapa)",
    pointsList: "As suas paragens",
    emptyState: "Clique no mapa para adicionar paragens à sua rota.",
    optimizeBtn: "Otimizar Sequência",
    clearBtn: "Limpar Tudo",
    stats: {
      distance: "Distância total:",
      time: "Tempo estimado:"
    }
  },
  map: {
    placeholder: "A carregar mapa...",
    attribution: "© colaboradores do OpenStreetMap"
  },
  errors: {
    minPoints: "São necessários pelo menos dois pontos para calcular uma rota.",
    calcError: "Erro ao calcular a rota ótima. Por favor, tente novamente."
  },
  labels: {
    origin: "Início",
    destination: "Fim",
    stop: "Paragem",
    loading: "A calcular..."
  }
};

const seo: ToolLocaleContent<OptimalRoutesUI>['seo'] = [
  { type: "title", text: "Otimização Inteligente de Rotas", level: 2 },
  { type: "paragraph", html: "Utilize algoritmos avançados para resolver o Problema do Caixeiro Viajante (TSP) em segundos. Ideal para logística, entregas ou simplesmente para poupar combustível nas suas viagens." },
  { type: "title", text: "Porque é que a Ordem das Paragens é Vital", level: 3 },
  { type: "paragraph", html: "Um ordenamento incorreto das suas paragens pode aumentar significativamente o tempo de viagem e o consumo de combustível. O nosso otimizador analisa milhões de possibilidades para lhe mostrar o caminho mais direto, evitando desvios e sobreposições desnecessárias." }
];

const faq: ToolLocaleContent<OptimalRoutesUI>['faq'] = [
  { question: "Como funciona a otimização?", answer: "Analisamos todas as suas paragens e determinamos a ordem sequencial que minimiza a distância total percorrida." },
  { question: "Posso usá-lo no telemóvel?", answer: "Sim, a ferramenta é totalmente responsiva e permite abrir a rota resultante diretamente em aplicações de navegação." },
  { question: "Existe um limite para o número de paragens?", answer: "Para a versão gratuita, pode otimizar de forma eficiente até 25 paragens, o que é perfeito para entregas diárias ou road trips." }
];

const howTo: ToolLocaleContent<OptimalRoutesUI>['howTo'] = [
  { name: "Adicionar", text: "Clique no mapa para fixar o seu ponto de partida e as paragens intermédias." },
  { name: "Otimizar", text: "Prima o botão de otimizar para que o sistema reordene as paragens de forma eficiente." },
  { name: "Navegar", text: "Use o plano gerado para seguir a rota sugerida." }
];

const bibliography: ToolLocaleContent<OptimalRoutesUI>['bibliography'] = [
  { name: "Problema do caixeiro-viajante (TSP)", url: "https://pt.wikipedia.org/wiki/Problema_do_caixeiro-viajante" },
  { name: "Otimização de rotas", url: "https://pt.wikipedia.org/wiki/Log%C3%ADstica" }
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
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<OptimalRoutesUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: "Perguntas Frequentes",
  bibliography,
  bibliographyTitle: "Fontes e Referências",
  howTo,
  howToTitle: "Como usar",
  schemas: [faqSchema, howToSchema, appSchema],
};
