import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MiniAdventuresUI } from '../index';

const slug = 'mini-adventure-forecast';
const title = '微冒险预测器：脱离常规生活';
const description = '随机每日挑战生成器，打破单调，探索您的周围环境。';

const ui: MiniAdventuresUI = {
  title: "微冒险",
  homeTitle: "微冒险",
  homeDesc: "让今天变得有点不同。您准备好去探索了吗？",
  generateBtn: "生成冒险",
  anotherBtn: "换一个",
  doneBtn: "已完成",
  shareBtn: "分享",
  categories: {
    exploration: { id: "exploration", label: "探索", icon: "mdi:map-marker-path", color: "#10b981", styling: "border-emerald-500/30 text-emerald-400 bg-emerald-500/5" },
    food: { id: "food", label: "美食", icon: "mdi:food-variant", color: "#f59e0b", styling: "border-amber-500/30 text-amber-400 bg-amber-500/5" },
    learning: { id: "learning", label: "学习", icon: "mdi:school", color: "#6366f1", styling: "border-indigo-500/30 text-indigo-400 bg-indigo-500/5" },
    creativity: { id: "creativity", label: "创意", icon: "mdi:palette", color: "#ec4899", styling: "border-pink-500/30 text-pink-400 bg-pink-500/5" },
    social: { id: "social", label: "社交", icon: "mdi:account-group", color: "#0ea5e9", styling: "border-sky-500/30 text-sky-400 bg-sky-500/5" },
    observation: { id: "observation", label: "观察", icon: "mdi:eye", color: "#8b5cf6", styling: "border-violet-500/30 text-violet-400 bg-violet-500/5" },
    wellness: { id: "wellness", label: "健康", icon: "mdi:heart-pulse", color: "#f43f5e", styling: "border-rose-500/30 text-rose-400 bg-rose-500/5" }
  },
  adventures: [
    { id: 1, text: "在您从未进入过的地方尝试一杯咖啡或饮料。", categoryId: "food" },
    { id: 2, text: "出门时朝着您平时不走的方向走10分钟。", categoryId: "exploration" },
    { id: 3, text: "学习用三种您不会的语言说“谢谢”。", categoryId: "learning" },
    { id: 4, text: "拍一张您街道上吸引您注意力的建筑细节照片。", categoryId: "creativity" },
    { id: 5, text: "买一种您从未尝试过的水果并发现它的味道。", categoryId: "food" },
    { id: 6, text: "在您的社区寻找一块纪念牌，并阅读它讲述的故事。", categoryId: "exploration" },
    { id: 7, text: "在60秒内画出您面前的某样东西。", categoryId: "creativity" },
    { id: 8, text: "向您平时不打交道的邻居问好。", categoryId: "social" },
    { id: 9, text: "听5分钟您平时不喜欢的音乐流派。", categoryId: "learning" },
    { id: 10, text: "参观一家古董店或二手店，寻找最奇特的物品。", categoryId: "exploration" },
    { id: 11, text: "坐在公园里，数数您看到了多少种不同的鸟类。", categoryId: "observation" },
    { id: 12, text: "写一张积极的便条，并把它留给公共图书馆的一本书里。", categoryId: "social" },
    { id: 13, text: "列出今天让您感激的5件事。", categoryId: "wellness" },
    { id: 14, text: "尝试只用食品柜里有的东西煮一道新菜。", categoryId: "food" },
    { id: 15, text: "花20分钟不看任何屏幕（手机、电视、电脑）。", categoryId: "wellness" },
    { id: 16, text: "在您家附近找一棵树，尝试识别它的品种。", categoryId: "learning" },
    { id: 300, text: "计划本周末去附近的一个城镇游玩。", categoryId: "exploration" },
    { id: 301, text: "学习拉丁语中手指的名称。", categoryId: "learning" },
    { id: 302, text: "为这句话中的每个词找一个押韵的词。", categoryId: "creativity" },
    { id: 303, text: "为很久以前发生的一件事感谢一位朋友。", categoryId: "social" }
  ],
  achievements: [
    { id: "g1", milestone: 1, label: "觉醒", categoryId: "global", icon: "mdi:footprint", description: "完成您的第一次微冒险。" },
    { id: "g10", milestone: 10, label: "奇迹习惯", categoryId: "global", icon: "mdi:sparkles", description: "您已经打破常规10次了。" },
    { id: "g50", milestone: 50, label: "日子收集者", categoryId: "global", icon: "mdi:calendar-star", description: "50天让平凡变得非凡。" },
    { id: "g150", milestone: 150, label: "机缘大师", categoryId: "global", icon: "mdi:trophy-variant", description: "您已经完成了冒险目录的一半。" },
    { id: "g300", milestone: 300, label: "自由灵魂", categoryId: "global", icon: "mdi:ghost", description: "您已经掌握了每日冒险的艺术。" },
    { id: "e3", milestone: 3, label: "身边的游客", categoryId: "exploration", icon: "mdi:map-marker-outline", description: "发现了3个新的角落。" },
    { id: "e15", milestone: 15, label: "城市制图师", categoryId: "exploration", icon: "mdi:map-check", description: "您比任何人都更了解您的邮政编码地区。" },
    { id: "f3", milestone: 3, label: "好奇的味蕾", categoryId: "food", icon: "mdi:silverware-clean", description: "尝试了3种您不知道的味道。" },
    { id: "f15", milestone: 15, label: "美食炼金术士", categoryId: "food", icon: "mdi:silverware-variant", description: "您的食品柜是通往世界的护照。" },
    { id: "l3", milestone: 3, label: "万物学徒", categoryId: "learning", icon: "mdi:book-open-page-variant", description: "学习了3个世界趣闻。" },
    { id: "l15", milestone: 15, label: "行走图书馆", categoryId: "learning", icon: "mdi:head-cog", description: "您的好奇心无止境。" },
    { id: "c3", milestone: 3, label: "绘图之手", categoryId: "creativity", icon: "mdi:palette-outline", description: "在3个小挑战中留下了您的印记。" },
    { id: "c15", milestone: 15, label: "本地先锋", categoryId: "creativity", icon: "mdi:palette-swatch", description: "在别人只看到街道的地方，您看到了艺术。" },
    { id: "s3", milestone: 3, label: "人间桥梁", categoryId: "social", icon: "mdi:account-voice", description: "今天您与3个人建立了联系。" },
    { id: "s15", milestone: 15, label: "街道之魂", categoryId: "social", icon: "mdi:account-group", description: "您把陌生人变成了故事。" },
    { id: "o3", milestone: 3, label: "细节导向", categoryId: "observation", icon: "mdi:magnify", description: "您看到了3个别人都没注意到的细节。" },
    { id: "o15", milestone: 15, label: "导演之眼", categoryId: "observation", icon: "mdi:telescope", description: "您的目光是大片的镜头。" },
    { id: "w3", milestone: 3, label: "正念停顿", categoryId: "wellness", icon: "mdi:leaf", description: "您为内心的平静奉献了3个时刻。" },
    { id: "w15", milestone: 15, label: "身心平衡", categoryId: "wellness", icon: "mdi:spa", description: "您的身体和心灵感谢您。" }
  ],
  stats: {
    adventures: "冒险",
    badges: "勋章",
    progress: "您的进度",
    trophies: "奖杯收藏"
  },
  shareTemplate: "我刚获得了一个微冒险挑战！\n\n“{text}”\n\n你敢挑战吗？在这里生成你的： {url}"
};

const seo: ToolLocaleContent<MiniAdventuresUI>['seo'] = [
  { type: "title", text: "微冒险：日常生活的艺术", level: 2 },
  { type: "paragraph", html: "发现微冒险如何重塑您的脑回路，对抗平淡的常规，并唤醒您天生的好奇心。常规是创造力的敌人。通过在日常生活中引入微小的变化，我们迫使大脑建立新的神经连接。" },
  { type: "title", text: "行动中的神经可塑性", level: 3 },
  { type: "paragraph", html: "常规是创造力的敌人。通过在日常生活中引入微小的变化——比如尝试一种新口味或走一条未知的街道——我们迫使大脑建立新的神经连接。这些微冒险充当了精神健身房，保持思维敏捷并对新的可能性保持开放。" },
  { type: "title", text: "情感健康", level: 3 },
  { type: "paragraph", html: "停滞感往往源于绝对的可预测性。冒险生成器受控的随机性引入了“积极惊喜”的元素，释放多巴胺并自然地改善情绪。您不需要跨洋旅行就能感受到发现的快感。" },
  { type: "title", text: "探索您已知的领域：本地哲学", level: 2 },
  { type: "paragraph", html: "我们生活在被忽视的故事和细节中。这个预测器的目标是训练您的眼睛在平凡中发现非凡。不要寻找完美的时刻；寻找可能的时刻。" },
  {
    type: "grid",
    columns: 2
  },
  { type: "card", icon: "mdi:clock-fast", title: "没有借口", html: "只需不到15分钟且花费为零的冒险。时间不是好奇心的障碍。" },
  { type: "card", icon: "mdi:lock-outline", title: "绝对隐私", html: "您无需注册或分享您的数据。您的进度和完成的冒险仅保存在您的设备上。" },
  { type: "card", icon: "mdi:share-variant", title: "健康的病毒式传播", html: "分享挑战，激励他人走出自己的舒适圈，而不是助长社交媒体上不断的攀比。" },
  { type: "card", icon: "mdi:trophy-outline", title: "游戏化", html: "为完成的每个挑战类别收集专属勋章。" }
];

const faq: ToolLocaleContent<MiniAdventuresUI>['faq'] = [
  { question: "什么是微冒险？", answer: "这是一种短期的、本地的、廉价且简单的冒险。这个术语（由 Alastair Humphreys 推广）旨在表明您不需要去世界的另一端就能体验令人兴奋的经历。" },
  { question: "这个生成器是用来做什么的？", answer: "它用于对抗分析瘫痪。有时我们想做点不同的事情但不知道做什么。这个模拟器为您随机选择一个挑战，减轻了决策的精神负担。" },
  { question: "我需要记录我的冒险吗？", answer: "不。这是一个绝对隐私的工具。挑战在您的浏览器中随机生成，我们不保存您做了什么或去了哪里的任何记录。" },
  { question: "我可以提议新的冒险吗？", answer: "当然可以！此工具的代码是开源的。如果您有不需要太多预算或时间的有趣挑战想法，可以通过 GitHub 上的仓库建议它们。" }
];

const howTo: ToolLocaleContent<MiniAdventuresUI>['howTo'] = [
  { name: "生成", text: "按下生成按钮以接收随机挑战。" },
  { name: "执行", text: "尝试在一天结束前完成挑战。" },
  { name: "完成", text: "将挑战标记为已完成，以获得勋章和进度。" }
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
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<MiniAdventuresUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: "常见问题",
  bibliography: "来源与参考",
  howTo,
  howToTitle: "工作原理",
  schemas: [faqSchema, howToSchema, appSchema],
};
