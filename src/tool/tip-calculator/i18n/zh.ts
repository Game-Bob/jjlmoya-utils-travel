import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TipCalculatorUI } from '../index';

const slug = 'guo-ji-xiao-fei-ji-suan-qi';
const title = '国际小费计算器';
const description = '计算您在旅行中应当支付的小费金额。包含针对 50 多个国家的百分比指南和礼仪规则。结账时不再感到困惑！';

const ui: TipCalculatorUI = {
  title: "小费计算器",
  badge: "国际小费工具",
  billLabel: "账单金额",
  countryLabel: "国家 / 当地习俗",
  tipLabel: "小费百分比",
  splitLabel: "拆分账单",
  summaryTip: "小费总计",
  summarySubtotal: "不含小费总计",
  summaryTotalPerson: "人均总计",
  protocolTitle: "礼仪说明",
  placeholderAmount: "0.00",
  placeholderFilter: "搜索国家...",
  placeholderSelect: "选择一个国家",
  countries: [
    {
      id: "usa",
      name: "美国与加拿大",
      min: 18,
      max: 25,
      default: 20,
      culture: "小费是服务员薪资的重要组成部分。通常期待 18% 到 25% 的小费。不给小费被视为对北美文化的严重失礼。",
    },
    {
      id: "esp",
      name: "西班牙",
      min: 0,
      max: 10,
      default: 5,
      culture: "可选。通常做法是找零时取整，或者如果服务质量好，在晚餐时留下 5-10% 的小费。",
    },
    {
      id: "jpn",
      name: "日本",
      min: 0,
      max: 0,
      default: 0,
      culture: "不收小费。这被视为是对其专业精神的一种侮辱。如果您留下钱，他们很可能会跟着您并将其归还。",
    },
    {
      id: "ita",
      name: "意大利",
      min: 0,
      max: 10,
      default: 0,
      culture: "“Coperto”是座位费、面包和餐具费，并非小费本身。额外留下 5-10% 会被赞赏，但完全是自愿的。",
    },
    {
      id: "fra",
      name: "法国",
      min: 0,
      max: 10,
      default: 5,
      culture: "服务费已依法包含在内。仅在获得卓越服务时才留下“pourboire”（额外的小额奖励）。",
    },
    {
      id: "gbr",
      name: "英国",
      min: 0,
      max: 12.5,
      default: 10,
      culture: "账单中通常会加入 12.5% 的可选服务费。如果没有加入，餐厅的标准通常是 10%。",
    },
    {
      id: "mex",
      name: "墨西哥",
      min: 10,
      max: 15,
      default: 12,
      culture: "期待 10-15% 的“propina”。这是该行业从业者收入的重要组成部分。",
    },
    {
      id: "arg",
      name: "阿根廷",
      min: 0,
      max: 10,
      default: 10,
      culture: "标准是 10%。如果服务正常或较好，几乎总会留下小费。",
    },
    {
      id: "bra",
      name: "巴西",
      min: 0,
      max: 10,
      default: 10,
      culture: "通常账单中会包含 10% 的“Serviço”费用。这是可选的，但大多数人都会支付。",
    },
    {
      id: "deu",
      name: "德国",
      min: 5,
      max: 10,
      default: 7,
      culture: "通常做法是取整或增加 5-10%。结账时请告知服务员包含小费在内的总金额。",
    },
    {
      id: "tur",
      name: "土耳其",
      min: 5,
      max: 10,
      default: 10,
      culture: "在旅游区，通常期待 10% 的现金。一般无法在信用卡刷卡时添加小费。",
    },
    {
      id: "aus",
      name: "澳大利亚",
      min: 0,
      max: 10,
      default: 0,
      culture: "不期待。由于薪资较高，仅在高级餐饮场所可以留下 10% 的小费。",
    },
    {
      id: "chn",
      name: "中国",
      min: 0,
      max: 0,
      default: 0,
      culture: "历史上没有给小费的习惯，在许多地方这甚至是被禁止的或被认为很奇怪。",
    },
    {
      id: "prt",
      name: "葡萄牙",
      min: 0,
      max: 10,
      default: 5,
      culture: "习惯做法是留下零钱或取整。在旅游区，5-10% 的小费很常见。",
    },
    {
      id: "grc",
      name: "希腊",
      min: 0,
      max: 10,
      default: 5,
      culture: "账单金额取整通常就足够了。额外 5-10% 的小费会很受欢迎，但并非强制性。",
    },
  ]
};

const seo: ToolLocaleContent<TipCalculatorUI>['seo'] = [
  {
    type: "title",
    text: "国际小费指南：2026 年礼仪与百分比",
    level: 2,
  },
  {
    type: "summary",
    title: "学习像当地人一样在全球各地支付小费",
    items: [
      "主要旅游目的地预期小费百分比的完整指南。",
      "如何从小计或含税总额快速计算小费。",
      "服务费、座位费 (coperto) 与自愿小费的区别。",
      "特殊情况下的礼仪规则：出租车、酒店和导游。",
    ],
  },
  {
    type: "paragraph",
    html: "任何国际旅行中最令人紧张的时刻之一就是当账单送到桌上时。我们的<strong>国际小费计算器</strong>旨在消除这种不确定性。",
  }
];

const faq: ToolLocaleContent<TipCalculatorUI>['faq'] = [
  {
    question: "在美国支付小费是强制性的吗？",
    answer: "法律上并非强制，但社交上是必须的。服务员依靠小费来达到最低工资标准。通常会留下 18% 到 25% 之间的小费。",
  },
  {
    question: "在哪些国家支付小费会被视为冒犯？",
    answer: "主要是在日本和韩国。提供优质服务被视为职责的一部分，不需要额外的补偿。",
  },
  {
    question: "如果服务不好，我还需要给小费吗？",
    answer: "在小费可选的国家（欧洲、澳大利亚），最正确的做法是不给小费。",
  },
  {
    question: "小费是按税前还是税后金额计算的？",
    answer: "在北美，通常按小计（税前）计算。在欧洲和拉丁美洲，始终按账单总额计算。",
  },
];

const bibliography: ToolLocaleContent<TipCalculatorUI>['bibliography'] = [
  {
    name: "Condé Nast Traveler: Tipping Etiquette Guide",
    url: "https://www.cntraveler.com/stories/2008-11-11/etiquette-101-tipping-guide",
  },
  {
    name: "Lonely Planet: Tipping and Etiquette in Europe",
    url: "https://www.lonelyplanet.com/articles/tipping-customs-europe",
  },
  {
    name: "Western Union: Global Tipping Guide",
    url: "https://www.westernunion.com/blog/en/global-tipping-guide/",
  },
];

const howTo: ToolLocaleContent<TipCalculatorUI>['howTo'] = [
  {
    name: "输入账单总额",
    text: "在应用小费之前，输入发票上显示的原始总金额。",
  },
  {
    name: "选择国家",
    text: "选择您的目的地，系统将自动加载文化建议和标准百分比。",
  },
  {
    name: "调整与拆分",
    text: "如果有几个人，请指明人数，以便了解每人（包括小费在内）应当支付的金额。",
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<TipCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: "常见问题",
  bibliography,
  bibliographyTitle: "来源与参考文献",
  howTo,
  howToTitle: "如何使用计算器",
  schemas: [faqSchema, howToSchema, appSchema],
};
