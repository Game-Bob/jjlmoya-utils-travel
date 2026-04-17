import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MiniAdventuresUI } from '../index';

const slug = 'generator-mini-priklyuchenij-vyrvis-iz-rutiny';
const title = 'Генератор мини приключений : Вырвись из рутины';
const description = 'Генератор случайных ежедневных заданий, чтобы победить монотонность и исследовать мир вокруг себя.';

const ui: MiniAdventuresUI = {
  title: "Мини приключения",
  homeTitle: "Мини-приключения",
  homeDesc: "Сделай сегодняшний день чуточку другим. Готов к исследованиям?",
  generateBtn: "СОЗДАТЬ ПРИКЛЮЧЕНИЕ",
  anotherBtn: "ДРУГОЕ",
  doneBtn: "ГОТОВО",
  shareBtn: "ПОДЕЛИТЬСЯ",
  categories: {
    exploration: { id: "exploration", label: "Исследование", icon: "mdi:map-marker-path", color: "#10b981", styling: "border-emerald-500/30 text-emerald-400 bg-emerald-500/5" },
    food: { id: "food", label: "Гастрономия", icon: "mdi:food-variant", color: "#f59e0b", styling: "border-amber-500/30 text-amber-400 bg-amber-500/5" },
    learning: { id: "learning", label: "Обучение", icon: "mdi:school", color: "#6366f1", styling: "border-indigo-500/30 text-indigo-400 bg-indigo-500/5" },
    creativity: { id: "creativity", label: "Творчество", icon: "mdi:palette", color: "#ec4899", styling: "border-pink-500/30 text-pink-400 bg-pink-500/5" },
    social: { id: "social", label: "Общение", icon: "mdi:account-group", color: "#0ea5e9", styling: "border-sky-500/30 text-sky-400 bg-sky-500/5" },
    observation: { id: "observation", label: "Наблюдение", icon: "mdi:eye", color: "#8b5cf6", styling: "border-violet-500/30 text-violet-400 bg-violet-500/5" },
    wellness: { id: "wellness", label: "Благополучие", icon: "mdi:heart-pulse", color: "#f43f5e", styling: "border-rose-500/30 text-rose-400 bg-rose-500/5" }
  },
  adventures: [
    { id: 1, text: "Попробуй кофе или напиток в месте, куда ты никогда раньше не заходил.", categoryId: "food" },
    { id: 2, text: "Пройдись 10 минут в направлении, которое ты обычно не выбираешь, выходя из дома.", categoryId: "exploration" },
    { id: 3, text: "Узнай, как сказать «Спасибо» на трех разных языках, которых ты не знаешь.", categoryId: "learning" },
    { id: 4, text: "Сфотографируй архитектурную деталь на своей улице, которая приковала твой взгляд.", categoryId: "creativity" },
    { id: 5, text: "Купи фрукт, который ты никогда не пробовал, и познай его вкус.", categoryId: "food" },
    { id: 6, text: "Найди мемориальную доску в своем районе и прочитай историю, которую она рассказывает.", categoryId: "exploration" },
    { id: 7, text: "Нарисуй то, что находится перед тобой, менее чем за 60 секунд.", categoryId: "creativity" },
    { id: 8, text: "Поздоровайся с соседом, с которым ты обычно не разговариваешь.", categoryId: "social" },
    { id: 9, text: "Послушай 5 минут музыкальный жанр, который тебе обычно не нравится.", categoryId: "learning" },
    { id: 10, text: "Зайди в антикварный магазин или секонд-хенд и найди самый странный предмет.", categoryId: "exploration" },
    { id: 11, text: "Присядь в парке и подсчитай, сколько разных видов птиц ты увидишь.", categoryId: "observation" },
    { id: 12, text: "Напиши позитивную записку и оставь ее в книге в публичной библиотеке.", categoryId: "social" },
    { id: 13, text: "Составь список из 5 вещей, за которые ты благодарен сегодня.", categoryId: "wellness" },
    { id: 14, text: "Попробуй приготовить новое блюдо, используя только то, что есть в кладовой.", categoryId: "food" },
    { id: 15, text: "Проведи 20 минут, не глядя ни в какой экран (телефон, ТВ, ПК).", categoryId: "wellness" },
    { id: 16, text: "Найди дерево рядом со своим домом и попробуй определить его вид.", categoryId: "learning" },
    { id: 300, text: "Запланируй поездку в соседний город на эти выходные.", categoryId: "exploration" },
    { id: 301, text: "Узнай, как называются пальцы руки на латыни.", categoryId: "learning" },
    { id: 302, text: "Найди рифму к каждому слову в этом предложении.", categoryId: "creativity" },
    { id: 303, text: "Поблагодари друга за то, что произошло давным-давно.", categoryId: "social" }
  ],
  achievements: [
    { id: "g1", milestone: 1, label: "Пробуждение", categoryId: "global", icon: "mdi:footprint", description: "Твое первое выполненное мини-приключение." },
    { id: "g10", milestone: 10, label: "Привычка удивляться", categoryId: "global", icon: "mdi:sparkles", description: "Ты разорвал рутину 10 раз." },
    { id: "g50", milestone: 50, label: "Коллекционер дней", categoryId: "global", icon: "mdi:calendar-star", description: "50 дней превращения обыденного в необычайное." },
    { id: "g150", milestone: 150, label: "Мастер случая", categoryId: "global", icon: "mdi:trophy-variant", description: "Ты выполнил половину каталога приключений." },
    { id: "g300", milestone: 300, label: "Свободный дух", categoryId: "global", icon: "mdi:ghost", description: "Ты овладел искусством ежедневных приключений." },
    { id: "e3", milestone: 3, label: "Турист дома", categoryId: "exploration", icon: "mdi:map-marker-outline", description: "Открыто 3 новых уголка." },
    { id: "e15", milestone: 15, label: "Городской картограф", categoryId: "exploration", icon: "mdi:map-check", description: "Ты знаешь свой почтовый индекс лучше любого другого." },
    { id: "f3", milestone: 3, label: "Неугомонный вкус", categoryId: "food", icon: "mdi:silverware-clean", description: "Ты попробовал 3 вкуса, которых не знал." },
    { id: "f15", milestone: 15, label: "Гурман-алхимик", categoryId: "food", icon: "mdi:silverware-variant", description: "Твоя кладовая — это паспорт в мир." },
    { id: "l3", milestone: 3, label: "Подмастерье всего", categoryId: "learning", icon: "mdi:book-open-page-variant", description: "Ты узнал 3 мировых любопытных факта." },
    { id: "l15", milestone: 15, label: "Ходячая библиотека", categoryId: "learning", icon: "mdi:head-cog", description: "Твое любопытство не знает границ." },
    { id: "c3", milestone: 3, label: "Рисующая рука", categoryId: "creativity", icon: "mdi:palette-outline", description: "Ты оставил свой след в 3 малых испытаниях." },
    { id: "c15", milestone: 15, label: "Местный авангард", categoryId: "creativity", icon: "mdi:palette-swatch", description: "Ты видишь искусство там, где другие видят только улицу." },
    { id: "s3", milestone: 3, label: "Человек-мост", categoryId: "social", icon: "mdi:account-voice", description: "Сегодня ты наладил контакт с 3 людьми." },
    { id: "s15", milestone: 15, label: "Душа улицы", categoryId: "social", icon: "mdi:account-group", description: "Ты превратил незнакомцев в истории." },
    { id: "o3", milestone: 3, label: "Внимание к деталям", categoryId: "observation", icon: "mdi:magnify", description: "Ты увидел 3 вещи, которых никто другой не замечает." },
    { id: "o15", milestone: 15, label: "Глаз кинорежиссера", categoryId: "observation", icon: "mdi:telescope", description: "Твой взгляд — это объектив великого фильма." },
    { id: "w3", milestone: 3, label: "Осознанная пауза", categoryId: "wellness", icon: "mdi:leaf", description: "Ты посвятил 3 момента своему душевному спокойствию." },
    { id: "w15", milestone: 15, label: "Полный баланс", categoryId: "wellness", icon: "mdi:spa", description: "Твое тело и разум благодарят тебя." }
  ],
  stats: {
    adventures: "Приключения",
    badges: "Значки",
    progress: "Твой прогресс",
    trophies: "Коллекция трофеев"
  },
  shareTemplate: "Я только что получил мини-приключение!\n\n«{text}»\n\nА ты осмелишься? Создай свое здесь: {url}"
};

const seo: ToolLocaleContent<MiniAdventuresUI>['seo'] = [
  { type: "title", text: "Мини-приключения: Искусство повседневности", level: 2 },
  { type: "paragraph", html: "Узнайте, как микроприключения могут перестроить ваш мозг, побороть рутину и пробудить врожденное любопытство. Рутина — враг творчества. Привнося небольшие изменения в нашу повседневную жизнь, мы заставляем наш мозг выстраивать новые нейронные связи." },
  { type: "title", text: "Нейропластичность в действии", level: 3 },
  { type: "paragraph", html: "Рутина — враг творчества. Привнося небольшие изменения в нашу повседневную жизнь — например, пробуя новый вкус или прогуливаясь по неизвестной улице — мы заставляем наш мозг выстраивать новые нейронные связи. Эти микроприключения действуют как ментальный тренажерный зал, который сохраняет гибкость ума и открытость новым возможностям." },
  { type: "title", text: "Эмоциональное благополучие", level: 3 },
  { type: "paragraph", html: "Чувство застоя часто возникает из-за абсолютной предсказуемости. Контролируемая случайность генератора приключений вносит элемент «позитивного сюрприза», высвобождая дофамин и естественным образом улучшая настроение. Вам не нужно трансокеанское путешествие, чтобы почувствовать трепет открытия." },
  { type: "title", text: "Исследуйте то, что уже знаете: Локальная философия", level: 2 },
  { type: "paragraph", html: "Мы живем в окружении историй и деталей, которые остаются незамеченными. Цель этого прогноза — натренировать ваш взгляд видеть необычное в обычном. Не ищите идеальный момент; ищите возможный момент." },
  {
    type: "grid",
    columns: 2
  },
  { type: "card", icon: "mdi:clock-fast", title: "Без оправданий", html: "Приключения, которые требуют менее 15 минут и ноль затрат. Время не является барьером для любопытства." },
  { type: "card", icon: "mdi:lock-outline", title: "Полная приватность", html: "Вам не нужно регистрироваться или делиться своими данными. Ваш прогресс и выполненные приключения сохраняются только на вашем устройстве." },
  { type: "card", icon: "mdi:share-variant", title: "Здоровая виральность", html: "Делитесь испытаниями, которые вдохновляют других выйти из своего пузыря, вместо того чтобы подпитывать постоянное сравнение в социальных сетях." },
  { type: "card", icon: "mdi:trophy-outline", title: "Геймификация", html: "Собирайте эксклюзивные значки за каждую выполненную категорию испытаний." }
];

const faq: ToolLocaleContent<MiniAdventuresUI>['faq'] = [
  { question: "Что такое микроприключение?", answer: "Это короткое, локальное, дешевое и простое приключение. Этот термин (популяризированный Алистером Хамфрисом) призван показать, что вам не нужно ехать на другой конец света, чтобы пережить захватывающие впечатления." },
  { question: "Для чего нужен этот генератор?", answer: "Он служит для борьбы с параличом анализа. Иногда мы хотим сделать что-то необычное, но не знаем, что именно. Этот симулятор выбирает для вас случайное испытание, снимая ментальную нагрузку при принятии решения." },
  { question: "Нужно ли мне регистрировать свои приключения?", answer: "Нет. Это инструмент полной приватности. Испытания генерируются случайным образом в вашем браузере, и мы не сохраняем никаких записей о том, что вы делаете или куда идете." },
  { question: "Могу ли я предложить новые приключения?", answer: "Конечно! Код этого инструмента открыт. Если у вас есть идеи для забавных испытаний, не требующих большого бюджета или времени, вы можете предложить их через репозиторий на GitHub." }
];

const bibliography: ToolLocaleContent<MiniAdventuresUI>['bibliography'] = [
  { name: "Алистер Хамфрис: Microadventures", url: "https://alastairhumphreys.com/blog/microadventures-3/" },
  { name: "Роб Уокер: Искусство замечать", url: "https://www.goodreads.com/es/book/show/41552704-the-art-of-noticing" }
];

const howTo: ToolLocaleContent<MiniAdventuresUI>['howTo'] = [
  { name: "Создать", text: "Нажмите кнопку создания, чтобы получить случайное испытание." },
  { name: "Сделать", text: "Постарайтесь завершить испытание до конца дня." },
  { name: "Выполнить", text: "Отметьте испытание как выполненное, чтобы заработать значки и прогресс." }
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
  applicationCategory: 'TravelApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'ru',
};

export const content: ToolLocaleContent<MiniAdventuresUI> = {
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
  howToTitle: "Как это работает",
  schemas: [faqSchema, howToSchema, appSchema],
};
