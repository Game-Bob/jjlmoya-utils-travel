import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FuelCostCalculatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'kalkulyator-stoimosti-topliva-poezdka';
const title = "Калькулятор Стоимости Топлива для Поездок";
const description = "Рассчитайте примерные расходы на топливо для автопоездки на основе расстояния, расхода машины, цены за литр, количества пассажиров и маршрута туда и обратно.";

const ui: FuelCostCalculatorUI = {
  "metricLabel": "Метрическая",
  "imperialLabel": "Имперская",
  "routeHeading": "Настройка маршрута",
  "distanceLabel": "Расстояние в одну сторону",
  "distanceHint": "Каково расстояние до цели?",
  "consumptionLabel": "Расход топлива",
  "consumptionHint": "Введите расход вашего авто",
  "priceLabel": "Цена топлива",
  "priceHint": "Введите текущую цену за литр",
  "passengersLabel": "Пассажиры",
  "roundTripLabel": "Туда и обратно",
  "currencyLabel": "Валюта",
  "presetsLabel": "Быстрые маршруты",
  "presetCommute": "Ежедневный маршрут",
  "presetWeekend": "Поездка на выходные",
  "presetRoadTrip": "Большое путешествие",
  "resultHeading": "Прогноз расхода топлива",
  "totalDistanceLabel": "Общее расстояние",
  "fuelUsedLabel": "Необходимое топливо",
  "totalCostLabel": "Общая стоимость топлива",
  "perPersonLabel": "Каждый пассажир платит",
  "routeStatement": "{distance} {unit} туда и обратно, на {passengers} чел.",
  "routeOneWayStatement": "{distance} {unit} в одну сторону, на {passengers} чел.",
  "statusLight": "Небольшие расходы",
  "statusMedium": "Отличная поездка для совместной оплаты",
  "statusHigh": "Долгий путь",
  "sampleButton": "Загрузить пример",
  "resetButton": "Сбросить",
  "litersUnit": "л",
  "gallonsUnit": "гал",
  "distanceMetricUnit": "км",
  "distanceImperialUnit": "миль",
  "consumptionMetricUnit": "л/100 км",
  "consumptionImperialUnit": "mpg",
  "priceMetricUnit": "за литр",
  "priceImperialUnit": "за галлон",
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
    "text": "Как точно рассчитать бюджет на бензин или дизель перед выездом",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Для точного расчета расходов на топливо необходимы четыре параметра: расстояние в одну сторону, средний расход автомобиля, стоимость топлива за литр и число пассажиров. Калькулятор удваивает путь при выборе поездки туда и обратно и делит итоговую сумму поровну."
  },
  {
    "type": "title",
    "text": "Формула расчета расходов на топливо",
    "level": 2
  },
  {
    "type": "table",
    "headers": [
      "Шаг",
      "Применяемый расчет",
      "Итоговый результат"
    ],
    "rows": [
      [
        "Общее расстояние",
        "Расстояние в одну сторону x 2 при поездке туда и обратно",
        "Реальный пробег в км или милях"
      ],
      [
        "Израсходованное топливо",
        "Общее расстояние x Расход / 100",
        "Всего литров топлива на маршрут"
      ],
      [
        "Общая стоимость",
        "Израсходованное топливо x Цена за литр",
        "Примерные затраты на топливо"
      ],
      [
        "Стоимость на человека",
        "Общая стоимость / Число пассажиров",
        "Справедливая доля каждого участника"
      ]
    ]
  },
  {
    "type": "tip",
    "title": "Указывайте реальную цену с АЗС",
    "html": "Цены на топливо зависят от заправки и страны. Вводите точную стоимость за литр, которую планируете оплатить, для получения корректного расчета."
  },
  {
    "type": "title",
    "text": "Метрические и имперские единицы",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Метрический режим использует километры и литры на 100 км, а имперский - мили и mpg. Смена единиц измерения не меняет общие итоговые затраты."
  },
  {
    "type": "list",
    "items": [
      "Добавьте небольшой запас на объезды и поиск парковки.",
      "Используйте реальный расход автомобиля, а не паспортые данные.",
      "Для дальних поездок с несколькими заправками считайте каждый этап отдельно."
    ]
  }
];

const faq = [
  {
    "question": "Как рассчитать стоимость топлива для поездки?",
    "answer": "Умножьте общее расстояние на средний расход машины, разделите на 100 для л/100 км и умножьте на цену за литр. Разделите итоговую сумму на количество пассажиров."
  },
  {
    "question": "Учитывает ли калькулятор обратную дорогу?",
    "answer": "Да. Включите опцию Туда и обратно, и калькулятор автоматически удвоит расстояние перед расчетом."
  },
  {
    "question": "Использует ли калькулятор цены на топливо в реальном времени?",
    "answer": "Нет. Вы вводите цену вручную для прозрачного и точного расчета на любой заправке."
  },
  {
    "question": "Можно ли вести расчет в милях и галлонах?",
    "answer": "Да. Переключитесь на имперскую систему для ввода данных в милях и mpg."
  }
];

const howTo = [
  {
    "name": "Выберите систему единиц",
    "text": "Выберите Метрическую для км и л/100км или Имперскую для миль и mpg."
  },
  {
    "name": "Введите данные поездки",
    "text": "Укажите расстояние в одну сторону, расход машины, цену за литр и число пассажиров."
  },
  {
    "name": "Проверьте распределение расходов",
    "text": "Включите обратную дорогу при необходимости, выберите валюту и посмотрите итог на человека."
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

export const content: ToolLocaleContent<FuelCostCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  howTo,
  howToTitle: "Как рассчитать стоимость топлива для поездки",
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography: bibliographyEntries,
};
