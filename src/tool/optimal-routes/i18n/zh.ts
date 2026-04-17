import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { OptimalRoutesUI } from '../index';

const slug = 'choe-shia-lu-xian-ji-suan-qi-ji-hua-ting-kao-dian-pai-xu';
const title = '最佳路线计算器 | 智能停靠点重排';
const description = '免费优化您的送货或旅行路线。我们的工具会自动重新排列您的停靠点，以找到最短、最高效的路径。';

const ui: OptimalRoutesUI = {
  title: "最佳路线",
  sidebar: {
    title: "路线规划",
    addPoint: "增加停靠点（点击地图）",
    pointsList: "您的停靠点",
    emptyState: "点击地图以在您的路线上添加停靠点。",
    optimizeBtn: "优化顺序",
    clearBtn: "全部清除",
    stats: {
      distance: "总距离:",
      time: "预计时间:"
    }
  },
  map: {
    placeholder: "正加载地图...",
    attribution: "© OpenStreetMap 贡献者"
  },
  errors: {
    minPoints: "计算路线至少需要两个点。",
    calcError: "计算最佳路线时出错。请重试。"
  },
  labels: {
    origin: "起点",
    destination: "终点",
    stop: "停靠点",
    loading: "计算中..."
  }
};

const seo: ToolLocaleContent<OptimalRoutesUI>['seo'] = [
  { type: "title", text: "智能路径优化", level: 2 },
  { type: "paragraph", html: "使用先进算法在几秒钟内解决旅行推销员问题 (TSP)。非常适合物流、送货或仅仅是为了在旅行中节省燃油。" },
  { type: "title", text: "为什么停靠点顺序至关重要", level: 3 },
  { type: "paragraph", html: "停靠点顺序错误可能会显著增加旅行时间和燃油消耗。我们的优化器分析数百万种可能性，为您展示最直接的路径，避免不必要的绕路和重叠。" }
];

const faq: ToolLocaleContent<OptimalRoutesUI>['faq'] = [
  { question: "优化是如何工作的？", answer: "我们分析您的所有停靠点，并确定使总行程距离最小化的顺序。" },
  { question: "我可以在手机上使用它吗？", answer: "可以，该工具完全采用响应式设计，允许您直接在导航应用中打开生成的路线。" },
  { question: "停靠点数量有限制吗？", answer: "对于免费版本，您可以高效优化多达25个停靠点，这对于日常送货或公路旅行来说非常完美。" }
];

const howTo: ToolLocaleContent<OptimalRoutesUI>['howTo'] = [
  { name: "添加", text: "点击地图以确定您的起点和中间停靠点。" },
  { name: "优化", text: "按下优化按钮，让系统高效地重新排列停靠点。" },
  { name: "导航", text: "使用生成的计划按照建议的路线行驶。" }
];

const bibliography: ToolLocaleContent<OptimalRoutesUI>['bibliography'] = [
  { name: "旅行推销员问题 (TSP)", url: "https://zh.wikipedia.org/wiki/%E6%97%85%E8%A1%8C%E6%8E%A8%E9%94%80%E5%91%98%E9%97%AE%E9%A2%98" },
  { name: "路徑優化", url: "https://zh.wikipedia.org/wiki/%E6%9C%80%E4%BD%B3%E5%8C%96" }
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
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<OptimalRoutesUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: "常见问题",
  bibliography,
  bibliographyTitle: "来源与参考",
  howTo,
  howToTitle: "如何使用",
  schemas: [faqSchema, howToSchema, appSchema],
};
