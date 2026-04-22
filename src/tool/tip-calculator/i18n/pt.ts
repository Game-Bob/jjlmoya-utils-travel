import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TipCalculatorUI } from '../index';

const slug = 'calculadora-gorjetas-internacional';
const title = 'Calculadora de Gorjetas Internacional';
const description = 'Calcule quanto deixar de gorjeta nas suas viagens. Inclui guia de percentagens e regras de etiqueta para mais de 50 países. Não se engane ao pagar!';

const ui: TipCalculatorUI = {
  title: "Calculadora de Gorjetas",
  badge: "Ferramenta de Gorjetas Internacional",
  billLabel: "Valor da Fatura",
  countryLabel: "País / Costumes Locais",
  tipLabel: "Percentagem de Gorjeta",
  splitLabel: "Dividir Conta",
  summaryTip: "Gorjeta Total",
  summarySubtotal: "Subtotal",
  summaryTotalPerson: "Total por Pessoa",
  protocolTitle: "Protocolo",
  placeholderAmount: "0.00",
  placeholderFilter: "Procurar país...",
  placeholderSelect: "Selecione um país",
  countries: [
    {
      id: "usa",
      name: "EUA & Canadá",
      min: 18,
      max: 25,
      default: 20,
      culture: "A gorjeta é essencial para o salário dos empregados. Espera-se entre 18% e 25%. Não a deixar é considerado uma grave falta de respeito na cultura norte-americana.",
    },
    {
      id: "esp",
      name: "Espanha",
      min: 0,
      max: 10,
      default: 5,
      culture: "Opcional. É comum arredondar o troco ou deixar 5-10% em jantares se o serviço tiver sido de qualidade.",
    },
    {
      id: "jpn",
      name: "Japão",
      min: 0,
      max: 0,
      default: 0,
      culture: "Sem gorjetas. É considerada um insulto ao profissionalismo. Se deixar dinheiro, é provável que o sigam para o devolver.",
    },
    {
      id: "ita",
      name: "Itália",
      min: 0,
      max: 10,
      default: 0,
      culture: "O 'coperto' é uma taxa pelo serviço de mesa, pão e talheres, não é a gorjeta em si. Deixar uns 5-10% extra é um gesto apreciado mas inteiramente facultativo.",
    },
    {
      id: "fra",
      name: "França",
      min: 0,
      max: 10,
      default: 5,
      culture: "O serviço está incluído por lei. Deixe o 'pourboire' (pequeno extra) apenas por um tratamento excecional.",
    },
    {
      id: "gbr",
      name: "Reino Unido",
      min: 0,
      max: 12.5,
      default: 10,
      culture: "Frequentemente é adicionado um valor opcional de 12,5% à conta. Se não estiver lá, 10% é o padrão em restaurantes.",
    },
    {
      id: "mex",
      name: "México",
      min: 10,
      max: 15,
      default: 12,
      culture: "Espera-se uma 'propina' de 10-15%. É uma parte vital da economia para os trabalhadores do setor.",
    },
    {
      id: "arg",
      name: "Argentina",
      min: 0,
      max: 10,
      default: 10,
      culture: "O padrão é 10%. É quase sempre deixada se o serviço tiver sido normal ou bom.",
    },
    {
      id: "bra",
      name: "Brasil",
      min: 0,
      max: 10,
      default: 10,
      culture: "Normalmente é incluída uma taxa de 10% na conta como 'Serviço'. É opcional mas a maioria paga.",
    },
    {
      id: "deu",
      name: "Alemanha",
      min: 5,
      max: 10,
      default: 7,
      culture: "É comum arredondar ou somar 5-10%. Diga ao empregado o total incluindo a gorjeta ao pagar.",
    },
    {
      id: "tur",
      name: "Turquia",
      min: 5,
      max: 10,
      default: 10,
      culture: "Em áreas turísticas, espera-se 10% em dinheiro. Normalmente não pode ser adicionado ao cartão de crédito.",
    },
    {
      id: "aus",
      name: "Austrália",
      min: 0,
      max: 10,
      default: 0,
      culture: "Não é esperada. Os salários são altos. Em restaurantes de luxo, pode-se deixar 10%.",
    },
    {
      id: "chn",
      name: "China",
      min: 0,
      max: 0,
      default: 0,
      culture: "Historicamente, não se deixam gorjetas e em muitos locais é proibido ou considerado estranho.",
    },
    {
      id: "prt",
      name: "Portugal",
      min: 0,
      max: 10,
      default: 5,
      culture: "É costume deixar o troco ou arredondar. Em zonas turísticas, 5-10% é comum.",
    },
    {
      id: "grc",
      name: "Grécia",
      min: 0,
      max: 10,
      default: 5,
      culture: "Geralmente basta arredondar a conta. Um extra de 5-10% é muito apreciado mas não obrigatório.",
    },
  ]
};

const seo: ToolLocaleContent<TipCalculatorUI>['seo'] = [
  {
    type: "title",
    text: "Guia Internacional de Gorjetas: Etiqueta e Percentagens 2026",
    level: 2,
  },
  {
    type: "summary",
    title: "Aprenda a deixar gorjeta como um local em qualquer parte do mundo",
    items: [
      "Guia completo sobre a percentagem de gorjeta esperada nos principais destinos turísticos.",
      "Como calcular rapidamente a gorjeta a partir do subtotal ou do total incluindo taxas.",
      "Diferença entre taxas de serviço, couvert (coperto) e gorjeta voluntária.",
      "Regras de etiqueta para situações especiais: táxis, hotéis e guias turísticos.",
    ],
  },
  {
    type: "paragraph",
    html: "Um dos momentos mais stressantes de qualquer viagem internacional ocorre quando a conta chega à mesa. A nossa <strong>calculadora de gorjetas internacional</strong> foi desenhada para eliminar essa incerteza.",
  }
];

const faq: ToolLocaleContent<TipCalculatorUI>['faq'] = [
  {
    question: "É obrigatório deixar gorjeta nos Estados Unidos?",
    answer: "Legalmente não, mas socialmente é obrigatório. Os empregados dependem das gorjetas para atingir o salário mínimo. É normal deixar entre 18% e 25%.",
  },
  {
    question: "Em que países é ofensivo deixar gorjeta?",
    answer: "Principalmente no Japão e na Coreia do Sul. O bom serviço é considerado parte do dever e não requer compensação extra.",
  },
  {
    question: "Devo deixar gorjeta se o serviço tiver sido mau?",
    answer: "Em países onde é opcional (Europa, Austrália), o mais correto é não deixar nada.",
  },
  {
    question: "A gorjeta é calculada antes ou depois das taxas?",
    answer: "Na América do Norte costuma calcular-se sobre o subtotal (antes de taxas). Na Europa e América Latina, calcula-se sempre sobre o total da conta.",
  },
];

const howTo: ToolLocaleContent<TipCalculatorUI>['howTo'] = [
  {
    name: "Introduza o total da conta",
    text: "Escreva o valor total que aparece na sua fatura antes de aplicar a gorjeta.",
  },
  {
    name: "Selecione o país",
    text: "Escolha o seu destino para carregar automaticamente a recomendação cultural e a percentagem padrão.",
  },
  {
    name: "Ajuste e divida",
    text: "Se forem várias pessoas, indique o número de pessoas para saber quanto deve pagar cada uma incluindo a gorjeta.",
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
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<TipCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: "Perguntas Frequentes",
  bibliography: "Fontes e Referências",
  howTo,
  howToTitle: "Como usar a calculadora",
  schemas: [faqSchema, howToSchema, appSchema],
};
