import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { OptimalRoutesUI } from '../index';

const slug = 'kalkulyator-optimalnyh-marshrutov-umnaya-pereplanirovka';
const title = 'Калькулятор оптимальных маршрутов | Умная перепланировка остановок';
const description = 'Оптимизируйте свои маршруты доставки или путешествий бесплатно. Наш инструмент автоматически переупорядочит ваши остановки, чтобы найти кратчайший и наиболее эффективный путь.';

const ui: OptimalRoutesUI = {
  title: "Оптимальные маршруты",
  sidebar: {
    title: "План маршрута",
    addPoint: "Добавить остановку (клик по карте)",
    pointsList: "Ваши остановки",
    emptyState: "Кликните по карте, чтобы добавить остановки в ваш маршрут.",
    optimizeBtn: "Оптимизировать порядок",
    clearBtn: "Очистить все",
    stats: {
      distance: "Общее расстояние:",
      time: "Оценочное время:"
    }
  },
  map: {
    placeholder: "Загрузка карты...",
    attribution: "© участники OpenStreetMap"
  },
  errors: {
    minPoints: "Для расчета маршрута необходимо как минимум две точки.",
    calcError: "Ошибка при расчете оптимального маршрута. Пожалуйста, попробуйте еще раз."
  },
  labels: {
    origin: "Начало",
    destination: "Конец",
    stop: "Остановка",
    loading: "Расчет..."
  }
};

const seo: ToolLocaleContent<OptimalRoutesUI>['seo'] = [
  { type: "title", text: "Умная оптимизация маршрутов", level: 2 },
  { type: "paragraph", html: "Используйте передовые алгоритмы для решения задачи коммивояжера (TSP) за считанные секунды. Идеально подходит для логистики, доставки или просто для экономии топлива во время поездок." },
  { type: "title", text: "Почему важен порядок остановок", level: 3 },
  { type: "paragraph", html: "Неправильный порядок остановок может значительно увеличить время в пути и расход топлива. Наш оптимизатор анализирует миллионы возможностей, чтобы показать вам самый прямой путь, избегая ненужных объездов и наложений маршрутов." }
];

const faq: ToolLocaleContent<OptimalRoutesUI>['faq'] = [
  { question: "Как работает оптимизация?", answer: "Мы анализируем все ваши остановки и определяем последовательный порядок, который минимизирует общее пройденное расстояние." },
  { question: "Могу ли я использовать его на мобильном телефоне?", answer: "Да, инструмент полностью адаптивен и позволяет открывать полученный маршрут непосредственно в навигационных приложениях." },
  { question: "Есть ли предел количества остановок?", answer: "В бесплатной версии вы можете эффективно оптимизировать до 25 остановок, что идеально подходит для ежедневных доставок или автопутешествий." }
];

const howTo: ToolLocaleContent<OptimalRoutesUI>['howTo'] = [
  { name: "Добавить", text: "Кликните по карте, чтобы зафиксировать начальную точку и промежуточные остановки." },
  { name: "Оптимизировать", text: "Нажмите кнопку оптимизации, чтобы система эффективно переупорядочила остановки." },
  { name: "Навигация", text: "Используйте созданный план, чтобы следовать предложенному маршруту." }
];

const bibliography: ToolLocaleContent<OptimalRoutesUI>['bibliography'] = [
  { name: "Задача коммивояжера (TSP)", url: "https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B4%D0%B0%D1%87%D0%B0_%D0%BA%D0%BE%D0%BC%D0%BC%D0%B8%D0%B2%D0%BE%D1%8F%D0%B6%D0%B5%D1%80%D0%B0" },
  { name: "Оптимизация маршрутов", url: "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%B3%D0%B8%D1%81%D1%82%D0%B8%D0%BA%D0%B0" }
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
  inLanguage: 'ru',
};

export const content: ToolLocaleContent<OptimalRoutesUI> = {
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
  howToTitle: "Как этим пользоваться",
  schemas: [faqSchema, howToSchema, appSchema],
};
