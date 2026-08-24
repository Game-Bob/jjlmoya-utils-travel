import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TripExpenseSplitterUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'kalkulyator-razdela-rasxodov-poezdki-gruppy';
const title = "Калькулятор Разделения Расходов в Поездке";
const description = "Разделите совместные расходы на поездку между друзьями, узнайте кто переплатил или недоплатил, и расплатитесь минимальным числом переводов.";

const ui: TripExpenseSplitterUI = {
  "tripNameLabel": "Название поездки",
  "tripNamePlaceholder": "Назовите эту поездку",
  "currencyLabel": "Валюта",
  "travelersHeading": "Участники",
  "travelerPlaceholder": "Участник",
  "addTraveler": "Добавить участника",
  "removeTraveler": "Удалить",
  "expensesHeading": "Журнал расходов",
  "expenseDescriptionPlaceholder": "На что потрачено?",
  "amountLabel": "Сумма",
  "payerLabel": "Оплатил",
  "participantsLabel": "Разделить на",
  "allTravelers": "участников",
  "addExpense": "Добавить расход",
  "emptyExpenses": "Журнал пуст. Добавьте первый совместный расход.",
  "resultHeading": "Рекомендуемые переводы",
  "totalSpent": "Общие расходы группы",
  "transferCount": "переводов",
  "noTransfers": "Все в расчете. Переводы не требуются.",
  "owes": "должен",
  "receives": "получает",
  "from": "от",
  "to": "для",
  "eachPays": "Каждый платит",
  "eachReceives": "Каждый получает",
  "settlementHint": "Маршрут показывает участников и кратчайший план взаиморасчетов.",
  "copyLink": "Скопировать ссылку",
  "copied": "Ссылка скопирована",
  "exportJson": "Экспорт в JSON",
  "reset": "Начать заново",
  "removeExpense": "Удалить расход",
  "deleteTrip": "Сбросить поездку",
  "intro": "Введите расходы группы. План ниже превратит их в кратчайшую схему взаиморасчетов.",
  "statusBalanced": "Расходы сбалансированы",
  "statusSettle": "Готово к расчету",
  "statusReady": "Ожидание расходов",
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
  "defaultTripName": "Выходные в горах",
  "defaultTravelerNames": [
    "Майя",
    "Алекс",
    "Сэм"
  ],
  "defaultExpenseNames": [
    "Домик",
    "Билеты на поезд"
  ]
};

const seo: ToolLocaleContent<TripExpenseSplitterUI>['seo'] = [
  {
    "type": "title",
    "text": "Как легко расплатиться за совместную поездку с друзьями",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Подвести итоги совместной поездки просто, когда у каждого расхода указан покупатель и список участников. Калькулятор суммирует внесенные деньги, делит затраты и формирует самый короткий список переводов."
  },
  {
    "type": "title",
    "text": "Как рассчитывается баланс каждого участника",
    "level": 2
  },
  {
    "type": "table",
    "headers": [
      "Этап",
      "Расчет",
      "Цель"
    ],
    "rows": [
      [
        "Всего оплачено",
        "Сумма расходов, внесенных каждым человеком",
        "Фиксирует внесенные деньги"
      ],
      [
        "Честная доля",
        "Деление расхода на его участников",
        "Определяет реальные затраты каждого"
      ],
      [
        "Чистый баланс",
        "Оплачено минус честная доля",
        "Показывает кто должен получить или отдать"
      ],
      [
        "Расчет",
        "Сопоставление крупных долгов и кредитов",
        "Минимизирует количество переводов"
      ]
    ]
  },
  {
    "type": "tip",
    "title": "Точно выбирайте участников каждого расхода",
    "html": "Проживание обычно делится на всех, а личный обед или билет в музей - только на тех, кто там был."
  },
  {
    "type": "title",
    "text": "Упростите финальные взаиморасчеты",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Используйте предложенный план переводов для быстрого закрытия долгов."
  }
];

const faq = [
  {
    "question": "Как работает калькулятор совместных расходов?",
    "answer": "Введите участников, траты, кто платил и кто пользовался. Калькулятор определит баланс и предложит минимальные переводы."
  },
  {
    "question": "Можно ли разделить расход только на часть группы?",
    "answer": "Да. Отметьте нужных участников при добавлении расхода."
  },
  {
    "question": "Отправляются ли мои данные на сервер?",
    "answer": "Нет. Все данные хранятся только локально в вашем браузере."
  },
  {
    "question": "Почему переводов меньше, чем покупок?",
    "answer": "Калькулятор взаимно зачитывает долги, чтобы провести расчет с минимальным числом транзакций."
  }
];

const howTo = [
  {
    "name": "Добавьте участников",
    "text": "Введите имена всех членов группы."
  },
  {
    "name": "Зафиксируйте расходы",
    "text": "Укажите описание, сумму, кто платил и кто участвовал."
  },
  {
    "name": "Совершите переводы",
    "text": "Выполните рекомендуемые переводы для окончательного расчета."
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
  inLanguage: 'ru',
};

export const content: ToolLocaleContent<TripExpenseSplitterUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  howTo,
  howToTitle: "Как разделить совместные расходы в поездке",
  schemas: [appSchema, faqSchema, howToSchema],
  bibliography: bibliographyEntries,
};
