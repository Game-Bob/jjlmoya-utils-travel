import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TripExpenseSplitterUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'calculadora-dividir-despesas-viagem-grupo';
const title = "Calculadora para Dividir Despesas de Viagem em Grupo";
const description = "Divida as despesas de viagem entre amigos, veja quem pagou a mais ou a menos e liquide as contas com o mínimo de transferências.";

const ui: TripExpenseSplitterUI = {
  "tripNameLabel": "Nome da viagem",
  "tripNamePlaceholder": "Dê um nome a esta viagem",
  "currencyLabel": "Moeda",
  "travelersHeading": "Viajantes",
  "travelerPlaceholder": "Viajante",
  "addTraveler": "Adicionar viajante",
  "removeTraveler": "Remover",
  "expensesHeading": "Registo de despesas",
  "expenseDescriptionPlaceholder": "Em que se gastou?",
  "amountLabel": "Valor",
  "payerLabel": "Pago por",
  "participantsLabel": "Dividir por",
  "allTravelers": "viajantes",
  "addExpense": "Adicionar despesa",
  "emptyExpenses": "O registo está vazio. Adicione a primeira despesa partilhada.",
  "resultHeading": "Transferências sugeridas",
  "totalSpent": "Gasto total do grupo",
  "transferCount": "transferências",
  "noTransfers": "Todos estão com as contas em dia. Sem pagamentos.",
  "owes": "deve",
  "receives": "recebe",
  "from": "de",
  "to": "a",
  "eachPays": "Cada pessoa paga",
  "eachReceives": "Cada pessoa recebe",
  "settlementHint": "O plano mostra os viajantes e a rota de pagamento simplificada.",
  "copyLink": "Copiar hiperligação",
  "copied": "Hiperligação copiada",
  "exportJson": "Exportar JSON",
  "reset": "Recomeçar",
  "removeExpense": "Remover despesa",
  "deleteTrip": "Reiniciar viagem",
  "intro": "Introduza as despesas do grupo. O plano abaixo gera o acerto de contas mais simples.",
  "statusBalanced": "Viagem acertada",
  "statusSettle": "Pronto para acertar",
  "statusReady": "A aguardar despesas",
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
    }
  ],
  "defaultTripName": "Fim de semana na montanha",
  "defaultTravelerNames": [
    "Maya",
    "Alex",
    "Sam"
  ],
  "defaultExpenseNames": [
    "Chalé",
    "Bilhetes de comboio"
  ]
};

const seo: ToolLocaleContent<TripExpenseSplitterUI>['seo'] = [
  {
    "type": "title",
    "text": "Como acertar as contas de uma viagem em grupo sem complicações",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Acertar as contas de uma viagem em grupo é simples quando cada despesa tem um pagador claro e participantes definidos. Esta calculadora soma os adiantamentos de cada um, divide os custos e gera o plano com o menor número de transferências."
  },
  {
    "type": "title",
    "text": "Como é calculado o saldo de cada viajante",
    "level": 2
  },
  {
    "type": "table",
    "headers": [
      "Etapa",
      "Cálculo aplicado",
      "Objetivo"
    ],
    "rows": [
      [
        "Total pago",
        "Soma das despesas adiantadas por cada pessoa",
        "Regista o dinheiro pago inicialmente"
      ],
      [
        "Parte justa",
        "Divisão da despesa pelos seus participantes",
        "Atribui o custo a quem usufruiu"
      ],
      [
        "Saldo líquido",
        "Total pago menos a parte justa",
        "Indica quem deve receber ou pagar"
      ],
      [
        "Acerto",
        "Cruzamento entre dívidas e créditos maiores",
        "Reduz ao mínimo o número de transferências"
      ]
    ]
  },
  {
    "type": "tip",
    "title": "Selecione com precisão os participantes de cada despesa",
    "html": "O alojamento é normalmente dividido por todos, mas uma refeição separada ou bilhete específico aplica-se apenas a alguns."
  },
  {
    "type": "title",
    "text": "Simplifique o acerto final do grupo",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Utilize as transferências sugeridas como a forma mais rápida de acertar as contas."
  }
];

const faq = [
  {
    "question": "Como funciona a calculadora de despesas em grupo?",
    "answer": "Introduza viajantes, despesas, pagador e participantes. A calculadora obtém os saldos líquidos e sugere as transferências mínimas."
  },
  {
    "question": "É possível dividir uma despesa apenas por algumas pessoas?",
    "answer": "Sim. Selecione apenas os participantes de cada despesa."
  },
  {
    "question": "Os meus dados são guardados num servidor?",
    "answer": "Não. Tudo permanece guardado localmente no seu navegador."
  },
  {
    "question": "Por que motivo há menos transferências do que despesas?",
    "answer": "A ferramenta compensa dívidas cruzadas para liquidar a conta com o menor número de operações."
  }
];

const howTo = [
  {
    "name": "Adicione os viajantes",
    "text": "Insira os nomes de todos os elementos do grupo."
  },
  {
    "name": "Registe as despesas",
    "text": "Indique a descrição, valor, quem pagou e quem beneficiou."
  },
  {
    "name": "Siga o plano de acerto",
    "text": "Consulte as transferências sugeridas e liquide a viagem."
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

export const content: ToolLocaleContent<TripExpenseSplitterUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  howTo,
  howToTitle: "Como dividir despesas partilhadas numa viagem",
  schemas: [appSchema, faqSchema, howToSchema],
  bibliography: bibliographyEntries,
};
