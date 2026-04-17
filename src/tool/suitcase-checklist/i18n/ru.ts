import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SuitcaseChecklistUI } from '../index';

const slug = 'generator-spiska-veshey-v-dorogu';
const title = 'Генератор списка вещей в чемодан Составьте свой план сборов';
const description = 'Лучший онлайн-инструмент для организации багажа в зависимости от типа поездки, направления и длительности. Больше вы ничего не забудете.';

const ui: SuitcaseChecklistUI = {
  title: "Планировщик сборов",
  form: {
    destTitle: "Направление и климат",
    destTypes: [
      { id: "playa", name: "Пляж / Побережье", icon: "mdi:beach" },
      { id: "ciudad", name: "Город / Урбан", icon: "mdi:city" },
      { id: "montana", name: "Горы / Природа", icon: "mdi:pine-tree" },
      { id: "frio", name: "Холод / Снег", icon: "mdi:snowflake" }
    ],
    daysTitle: "На сколько дней?",
    intlTitle: "За границу?",
    intlLabel: "Да, пересекаю границу",
    reasonTitle: "Цель поездки",
    reasons: [
      { id: "ocio", name: "Отдых / Развлечения", icon: "mdi:party-popper" },
      { id: "negocios", name: "Бизнес / Работа", icon: "mdi:tie" }
    ],
    submitBtn: "Сформировать идеальный чемодан"
  },
  results: {
    title: "Ваш список вещей",
    editBtn: "Изменить",
    printBtn: "Сохранить PDF",
    tipsTitle: "Советы путешественникам",
    progressText: "Собрано"
  },
  itemsDb: {
    essentials: {
      id: "essentials",
      title: "Документы и основы",
      icon: "mdi:passport",
      items: [
        { label: "Паспорт / ID" },
        { label: "Банковские карты" },
        { label: "Наличные" },
        { label: "Билеты (самолет/поезд)" },
        { label: "Подтверждение бронирования" },
        { label: "Ключи от дома" },
        { label: "Международные документы", dynamicId: "item-internacional" }
      ]
    },
    technology: {
      id: "technology",
      title: "Технологии",
      icon: "mdi:laptop",
      items: [
        { label: "Мобильный телефон" },
        { label: "Зарядка для телефона" },
        { label: "Наушники" },
        { label: "Повербанк" },
        { label: "Адаптер питания", dynamicId: "item-adaptador" }
      ]
    },
    toiletries: {
      id: "toiletries",
      title: "Личная гигиена",
      icon: "mdi:toothbrush",
      items: [
        { label: "Зубная щетка и паста" },
        { label: "Дезодорант" },
        { label: "Гель и шампунь" },
        { label: "Расческа" },
        { label: "Мини-аптечка" },
        { label: "Личные лекарства" }
      ]
    },
    clothing_base: {
      id: "clothing_base",
      title: "Повседневная одежда",
      icon: "mdi:tshirt-crew",
      items: [
        { label: "Нижнее белье", dynamicId: "qty-ropa-interior" },
        { label: "Футболки / Топы", dynamicId: "qty-camisetas" },
        { label: "Брюки / Джинсы", dynamicId: "qty-pantalones" },
        { label: "Носки", dynamicId: "qty-calcetines" },
        { label: "Пижама" },
        { label: "Легкая куртка" },
        { label: "Удобная обувь на каждый день" }
      ]
    }
  },
  specificItems: {
    destType: {
      playa: {
        id: "dest-playa",
        title: "Для побережья",
        icon: "mdi:beach",
        items: [
          { label: "Купальник / Плавки" },
          { label: "Пляжное полотенце" },
          { label: "Солнцезащитный крем" },
          { label: "Солнцезащитные очки" },
          { label: "Шлепанцы" },
          { label: "Шляпа или кепка" }
        ]
      },
      ciudad: {
        id: "dest-ciudad",
        title: "Город",
        icon: "mdi:city",
        items: [
          { label: "Кроссовки для прогулок" },
          { label: "Маленький надежный рюкзак" },
          { label: "Компактный зонт" },
          { label: "Путеводитель" }
        ]
      },
      montana: {
        id: "dest-montana",
        title: "Горы",
        icon: "mdi:pine-tree",
        items: [
          { label: "Трекинговые ботинки" },
          { label: "Ветровка" },
          { label: "Походные брюки" },
          { label: "Бутылка для воды" },
          { label: "Горный рюкзак" }
        ]
      },
      frio: {
        id: "dest-frio",
        title: "Холодный климат",
        icon: "mdi:snowflake",
        items: [
          { label: "Теплое пальто / Пуховик" },
          { label: "Шапка и перчатки" },
          { label: "Зимняя обувь" },
          { label: "Термобелье" },
          { label: "Шарф" }
        ]
      }
    },
    travelType: {
      negocios: {
        id: "travel-negocios",
        title: "Бизнес",
        icon: "mdi:tie",
        items: [
          { label: "Костюм / Формальная одежда" },
          { label: "Рубашки" },
          { label: "Классическая обувь" },
          { label: "Ноутбук" },
          { label: "Зарядка для ноутбука" },
          { label: "Рабочие документы" }
        ]
      },
      ocio: {
        id: "travel-ocio",
        title: "Отдых",
        icon: "mdi:camera",
        items: [
          { label: "Одежда для вечернего выхода" },
          { label: "Камера (опционально)" },
          { label: "Книга / Развлечения" }
        ]
      }
    }
  },
  tips: {
    military: "Сворачивание одежды валиком (армейский стиль) помогает избежать складок и экономит место.",
    longTravel: "Вы едете больше чем на неделю. Запланируйте стирку базовых вещей в середине поездки.",
    intlPassport: "Заграничная поездка: проверьте сегодня, действителен ли ваш паспорт еще минимум 6 месяцев.",
    intlBank: "Проверьте необходимость виз и комиссии вашего банка за границей.",
    intlAdapter: "Не забудьте универсальный адаптер, если розетки в месте назначения отличаются!",
    coldLayers: "Для холодной погоды одевайтесь слоями: термобелье, утеплитель и непромокаемый верхний слой.",
    coldHeavyOn: "Наденьте самые объемные и тяжелые вещи на себя в самолет, чтобы сэкономить место в сумке.",
    beachWet: "Возьмите больше одного купальника; из-за влажности они могут не высохнуть за ночь."
  }
};

const seo: ToolLocaleContent<SuitcaseChecklistUI>['seo'] = [
  { type: "title", text: "Генератор списка вещей в чемодан: ваш идеальный помощник в путешествии", level: 2 },
  { type: "paragraph", html: "Сборы чемодана часто становятся одним из самых стрессовых моментов перед поездкой. Страх забыть что-то важное, сомнения насчет погоды или неуверенность в объеме багажа могут омрачить ожидание отпуска. Здесь <strong>генератор списка вещей</strong> становится вашим лучшим союзником." },
  {
    type: "summary",
    title: "Преимущества нашего конструктора списков",
    items: [
      "Полная персонализация под климат (пляж, горы, город или снег).",
      "Автоматический расчет количества одежды в зависимости от длительности поездки.",
      "Радикальное снижение логистического стресса с интерактивным списком.",
      "Оптимизация места в багаже, избавление от синдрома «на всякий случай»."
    ]
  },
  { type: "title", text: "Почему планирование багажа имеет решающее значение?", level: 3 },
  { type: "paragraph", html: "Путешествие — это трансформирующий опыт, но плохая подготовка может вызвать ненужную головную боль. Используя наш умный инструмент, вы автоматизируете процесс, который иначе занял бы часы расчетов. Эффективная организация — основа любого успешного приключения." }
];

const faq: ToolLocaleContent<SuitcaseChecklistUI>['faq'] = [
  { question: "Можно ли сохранить созданный список?", answer: "Вы можете отмечать пункты в списке, а также использовать кнопку для печати или сохранения его в формате PDF на вашем устройстве." },
  { question: "Как рассчитывается количество одежды?", answer: "Наш инструмент оценивает комплекты одежды на основе выбранной длительности поездки, поощряя путешествия налегке и оптимизацию багажа." },
  { question: "Подходит ли это для холодной погоды и снега?", answer: "Да, вы можете выбрать направление с холодным климатом, чтобы список автоматически включил необходимые вещи для этих условий." },
  { question: "Инструмент бесплатный?", answer: "Да, наш генератор списков вещей на 100% бесплатен и не требует регистрации или загрузки приложений." }
];

const bibliography: ToolLocaleContent<SuitcaseChecklistUI>['bibliography'] = [
  { name: "KonMari - Как собрать чемодан по методу КонМари", url: "https://konmari.com/how-to-konmari-a-suitcase/" },
  { name: "Eagle Creek - Что взять с собой: полный список вещей в дорогу", url: "https://eaglecreek.com/blogs/articles/what-pack-ultimate-travel-packing-checklist" }
];

const howTo: ToolLocaleContent<SuitcaseChecklistUI>['howTo'] = [
  { name: "Опишите поездку", text: "Выберите климат, цель и длительность вашего путешествия." },
  { name: "Создайте список", text: "Нажмите кнопку и мгновенно получите список всего необходимого, от косметики до техники." },
  { name: "Соберите сумку", text: "Отмечайте пункты по мере сборки, чтобы ничего не забыть." }
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'ru',
};

export const content: ToolLocaleContent<SuitcaseChecklistUI> = {
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
  howToTitle: "Как собрать чемодан",
  schemas: [faqSchema, howToSchema, appSchema],
};
