import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FuelCostCalculatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'calculadora-custo-combustivel-viagem';
const title = "Calculadora de Custo de Combustível para Viagens";
const description = "Calcule a despesa estimada de combustível da sua viagem com base na distância, consumo do veículo, preço por litro, passageiros e trajeto de ida ou volta.";

const ui: FuelCostCalculatorUI = {
  "metricLabel": "Métrico",
  "imperialLabel": "Imperial",
  "routeHeading": "Ajuste a sua rota",
  "distanceLabel": "Distância de ida",
  "distanceHint": "Qual a distância até ao destino?",
  "consumptionLabel": "Consumo do veículo",
  "consumptionHint": "Insira o consumo do seu carro",
  "priceLabel": "Preço do combustível",
  "priceHint": "Insira o preço atual por litro",
  "passengersLabel": "Passageiros",
  "roundTripLabel": "Ida e volta",
  "currencyLabel": "Moeda",
  "presetsLabel": "Rotas rápidas",
  "presetCommute": "Trajeto diário",
  "presetWeekend": "Escapadinha de fim de semana",
  "presetRoadTrip": "Grande viagem",
  "resultHeading": "Previsão de combustível",
  "totalDistanceLabel": "Distância total",
  "fuelUsedLabel": "Combustível necessário",
  "totalCostLabel": "Custo total de combustível",
  "perPersonLabel": "Cada passageiro paga",
  "routeStatement": "{distance} {unit} ida e volta, dividido por {passengers} pessoas",
  "routeOneWayStatement": "{distance} {unit} só ida, dividido por {passengers} pessoas",
  "statusLight": "Despesa reduzida",
  "statusMedium": "Boa viagem para partilhar",
  "statusHigh": "Percurso longo",
  "sampleButton": "Carregar exemplo",
  "resetButton": "Repor",
  "litersUnit": "L",
  "gallonsUnit": "gal",
  "distanceMetricUnit": "km",
  "distanceImperialUnit": "mi",
  "consumptionMetricUnit": "L/100 km",
  "consumptionImperialUnit": "mpg",
  "priceMetricUnit": "por litro",
  "priceImperialUnit": "por galão",
  "currencyOptions": [
    {
      "code": "EUR",
      "symbol": "€"
    },
    {
      "code": "USD",
      "symbol": "$"
    },
    {
      "code": "GBP",
      "symbol": "£"
    },
    {
      "code": "JPY",
      "symbol": "¥"
    }
  ]
};

const seo: ToolLocaleContent<FuelCostCalculatorUI>['seo'] = [
  {
    "type": "title",
    "text": "Como estimar o orçamento de combustível antes de viajar",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Para calcular com precisão os custos de combustível são necessários quatro dados: distância de ida, consumo médio do veículo, preço por litro e número de passageiros. Esta calculadora duplica a distância em trajetos de ida e volta e divide o valor final igualmente por todos."
  },
  {
    "type": "title",
    "text": "Fórmula de cálculo do custo de combustível",
    "level": 2
  },
  {
    "type": "table",
    "headers": [
      "Etapa",
      "Cálculo aplicado",
      "Resultado obtido"
    ],
    "rows": [
      [
        "Distância total",
        "Distância de ida x 2 para ida e volta",
        "Percurso real em km ou milhas"
      ],
      [
        "Combustível consumido",
        "Distância total x Consumo / 100",
        "Litros totais necessários"
      ],
      [
        "Custo total",
        "Litros consumidos x Preço por litro",
        "Gasto total estimado em combustível"
      ],
      [
        "Custo por pessoa",
        "Custo total / Número de passageiros",
        "Quota justa para cada passageiro"
      ]
    ]
  },
  {
    "type": "tip",
    "title": "Utilize o preço real do posto",
    "html": "O preço do combustível varia consoante o posto e o país. Insira o valor exato que prevê pagar para obter uma estimativa fidedigna."
  },
  {
    "type": "title",
    "text": "Unidades métricas e imperiais",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "O modo métrico utiliza quilómetros e litros por 100 km, enquanto o modo imperial utiliza milhas e mpg. A alteração de unidades não afeta o custo total."
  },
  {
    "type": "list",
    "items": [
      "Adicione uma pequena margem para desvios e procura de estacionamento.",
      "Utilize o consumo real do seu automóvel em vez dos dados de catálogo.",
      "Para viagens longas com vários reabastecimentos, calcule cada etapa separadamente."
    ]
  }
];

const faq = [
  {
    "question": "Como calcular o custo de combustível para uma viagem?",
    "answer": "Multiplique a distância total pelo consumo médio do carro, divida por 100 se usar L/100 km e multiplique pelo preço por litro. Divida o resultado pelo número de passageiros."
  },
  {
    "question": "A calculadora inclui ida e volta?",
    "answer": "Sim. Ative a opção Ida e volta e a distância será duplicada automaticamente antes do cálculo."
  },
  {
    "question": "Utiliza preços de combustível em tempo real?",
    "answer": "Não. O preço é inserido manualmente para garantir transparência e adaptação a qualquer posto."
  },
  {
    "question": "Posso calcular em milhas e galões?",
    "answer": "Sim. Mude para o modo Imperial para introduzir dados em milhas e mpg."
  }
];

const howTo = [
  {
    "name": "Escolha o sistema de unidades",
    "text": "Selecione Métrico para km e L/100km ou Imperial para milhas e mpg."
  },
  {
    "name": "Introduza os dados da viagem",
    "text": "Indique a distância de ida, o consumo do veículo, o preço por litro e os passageiros."
  },
  {
    "name": "Verifique a divisão de custos",
    "text": "Ative ida e volta se necessário, escolha a moeda e consulte o custo total e por pessoa."
  }
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'TravelApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<FuelCostCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  howTo,
  howToTitle: "Como calcular o custo de combustível da sua viagem",
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography: bibliographyEntries,
};
