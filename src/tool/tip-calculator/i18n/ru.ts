import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TipCalculatorUI } from '../index';

const slug = 'mezhdunarodnyy-kalkulyator-chaevykh';
const title = 'Международный калькулятор чаевых';
const description = 'Рассчитайте, сколько чаевых оставить в поездках. Включает руководство по процентам и правила этикета для более чем 50 стран. Не ошибитесь при оплате!';

const ui: TipCalculatorUI = {
  title: "Калькулятор чаевых",
  badge: "Международный инструмент",
  billLabel: "Сумма счета",
  countryLabel: "Страна / Местные обычаи",
  tipLabel: "Процент чаевых",
  splitLabel: "Разделить счет",
  summaryTip: "Итого чаевых",
  summarySubtotal: "Сумма без чаевых",
  summaryTotalPerson: "Итого на человека",
  protocolTitle: "Этикет",
  placeholderAmount: "0.00",
  placeholderFilter: "Поиск страны...",
  placeholderSelect: "Выберите страну",
  countries: [
    {
      id: "usa",
      name: "США и Канада",
      min: 18,
      max: 25,
      default: 20,
      culture: "Чаевые критически важны для зарплаты официантов. Ожидается от 18% до 25%. Не оставить их считается серьезным нарушением североамериканской культуры.",
    },
    {
      id: "esp",
      name: "Испания",
      min: 0,
      max: 10,
      default: 5,
      culture: "Необязательно. Принято округлять сдачу или оставлять 5-10% после ужина, если обслуживание было качественным.",
    },
    {
      id: "jpn",
      name: "Япония",
      min: 0,
      max: 0,
      default: 0,
      culture: "Без чаевых. Это считается оскорблением профессионализма. Если вы оставите деньги, скорее всего, вас догонят, чтобы их вернуть.",
    },
    {
      id: "ita",
      name: "Италия",
      min: 0,
      max: 10,
      default: 0,
      culture: "Плата 'coperto' включает обслуживание за столиком, хлеб и приборы, но это не сами чаевые. Оставить дополнительные 5-10% — жест ценный, но полностью добровольный.",
    },
    {
      id: "fra",
      name: "Франция",
      min: 0,
      max: 10,
      default: 5,
      culture: "Плата за обслуживание включена по закону. Оставляйте 'pourboire' (небольшую прибавку) только за исключительное отношение.",
    },
    {
      id: "gbr",
      name: "Великобритания",
      min: 0,
      max: 12.5,
      default: 10,
      culture: "В счет часто добавляется необязательный сбор 12,5%. Если его нет, стандартом в ресторанах считается 10%.",
    },
    {
      id: "mex",
      name: "Мексика",
      min: 10,
      max: 15,
      default: 12,
      culture: "Ожидается 'propina' в размере 10-15%. Это важная часть дохода для работников сектора.",
    },
    {
      id: "arg",
      name: "Аргентина",
      min: 0,
      max: 10,
      default: 10,
      culture: "Стандарт — 10%. Обычно их оставляют, когда обслуживание нормальное или хорошее.",
    },
    {
      id: "bra",
      name: "Бразилия",
      min: 0,
      max: 10,
      default: 10,
      culture: "Обычно 10% включаются в счет как 'Serviço'. Это необязательно, но большинство оплачивает.",
    },
    {
      id: "deu",
      name: "Германия",
      min: 5,
      max: 10,
      default: 7,
      culture: "Принято округлять сумму или добавлять 5-10%. При оплате назовите официанту общую сумму, включая чаевые.",
    },
    {
      id: "tur",
      name: "Турция",
      min: 5,
      max: 10,
      default: 10,
      culture: "В туристических зонах ожидается 10% наличными. Обычно добавить их в терминал по карте нельзя.",
    },
    {
      id: "aus",
      name: "Австралия",
      min: 0,
      max: 10,
      default: 0,
      culture: "Не ожидается. Зарплаты высокие. В элитных ресторанах можно оставить 10%.",
    },
    {
      id: "chn",
      name: "Китай",
      min: 0,
      max: 0,
      default: 0,
      culture: "Исторически чаевые не оставляют, во многих местах это запрещено или считается странным.",
    },
    {
      id: "prt",
      name: "Португалия",
      min: 0,
      max: 10,
      default: 5,
      culture: "Принято оставлять сдачу или округлять сумму. В туристических зонах 5-10% — обычное дело.",
    },
    {
      id: "grc",
      name: "Греция",
      min: 0,
      max: 10,
      default: 5,
      culture: "Обычно достаточно округлить счет. Дополнительные 5-10% приветствуются, но не обязательны.",
    },
  ]
};

const seo: ToolLocaleContent<TipCalculatorUI>['seo'] = [
  {
    type: "title",
    text: "Международный гид по чаевым: этикет и проценты 2026",
    level: 2,
  },
  {
    type: "summary",
    title: "Научитесь оставлять чаевые как местный житель в любой точке мира",
    items: [
      "Полный справочник ожидаемых процентов чаевых в основных туристических направлениях.",
      "Как быстро рассчитать чаевые от суммы без налогов или от общего итога.",
      "Разница между платой за обслуживание, 'coperto' и добровольными чаевыми.",
      "Правила этикета для особых ситуаций: такси, отели и гиды.",
    ],
  },
  {
    type: "paragraph",
    html: "Один из самых напряженных моментов любой заграничной поездки наступает, когда на стол приносят счет. Наш <strong>международный калькулятор чаевых</strong> создан, чтобы избавить вас от этой неопределенности.",
  }
];

const faq: ToolLocaleContent<TipCalculatorUI>['faq'] = [
  {
    question: "Обязательно ли оставлять чаевые в США?",
    answer: "Юридически нет, но социально — обязательно. Зарплата официантов зависит от чаевых. Нормой считается от 18% до 25%.",
  },
  {
    question: "В каких странах оставлять чаевые оскорбительно?",
    answer: "В основном в Японии и Южной Корее. Качественный сервис считается частью профессионального долга и не требует дополнительной оплаты.",
  },
  {
    question: "Нужно ли давать чаевые при плохом обслуживании?",
    answer: "В странах, где это необязательно (Европа, Австралия), правильнее будет не оставлять ничего.",
  },
  {
    question: "Как считаются чаевые: до или после налогов?",
    answer: "В Северной Америке обычно считают от суммы до налогов. В Европе и Латинской Америке — всегда от полной суммы счета.",
  },
];

const bibliography: ToolLocaleContent<TipCalculatorUI>['bibliography'] = [
  {
    name: "Condé Nast Traveler: Tipping Etiquette Guide",
    url: "https://www.cntraveler.com/stories/2008-11-11/etiquette-101-tipping-guide",
  },
  {
    name: "Lonely Planet: Этикет и чаевые в Европе",
    url: "https://www.lonelyplanet.com/articles/tipping-customs-europe",
  },
  {
    name: "Western Union: Global Tipping Guide",
    url: "https://www.westernunion.com/blog/en/global-tipping-guide/",
  },
];

const howTo: ToolLocaleContent<TipCalculatorUI>['howTo'] = [
  {
    name: "Введите сумму счета",
    text: "Укажите общую сумму, указанную в чеке перед добавлением чаевых.",
  },
  {
    name: "Выберите страну",
    text: "Выберите место назначения, чтобы автоматически загрузить культурные рекомендации и стандартный процент.",
  },
  {
    name: "Настройте и разделите",
    text: "Если вас несколько человек, укажите количество людей, чтобы узнать долю каждого с учетом чаевых.",
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'ru',
};

export const content: ToolLocaleContent<TipCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: "Часто задаваемые вопросы",
  bibliography,
  bibliographyTitle: "Источники и ссылки",
  howTo,
  howToTitle: "Как пользоваться калькулятором",
  schemas: [faqSchema, howToSchema, appSchema],
};
