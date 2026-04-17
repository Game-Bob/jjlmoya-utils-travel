import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { OptimalRoutesUI } from '../index';

const slug = 'saiteki-ruto-keisanki-teiryu-jo-no-saiseiretsu';
const title = '最適ルート計算機 | 立ち寄り先のインテリジェント再整列';
const description = '配送や旅行のルートを無料で最適化します。当ツールは立ち寄り先を自動的に再整列し、最短で最も効率的な経路を見つけ出します。';

const ui: OptimalRoutesUI = {
  title: "最適ルート",
  sidebar: {
    title: "ルート計画",
    addPoint: "経由地を追加（地図をクリック）",
    pointsList: "あなたの立ち寄り先",
    emptyState: "地図をクリックして、ルートに立ち寄り先を追加してください。",
    optimizeBtn: "順序を最適化",
    clearBtn: "すべて消去",
    stats: {
      distance: "総距離:",
      time: "推定時間:"
    }
  },
  map: {
    placeholder: "地図を読み込み中...",
    attribution: "© OpenStreetMap 協力者"
  },
  errors: {
    minPoints: "ルートを計算するには少なくとも2つの地点が必要です。",
    calcError: "最適ルートの計算中にエラーが発生しました。もう一度お試しください。"
  },
  labels: {
    origin: "スタート",
    destination: "ゴール",
    stop: "立ち寄り先",
    loading: "計算中..."
  }
};

const seo: ToolLocaleContent<OptimalRoutesUI>['seo'] = [
  { type: "title", text: "インテリジェント・ルート最適化", level: 2 },
  { type: "paragraph", html: "高度なアルゴリズムを使用して、巡回セールスマン問題（TSP）を数秒で解決します。物流、配送、または旅行中の燃料節約に最適です。" },
  { type: "title", text: "立ち寄り先の順序が重要な理由", level: 3 },
  { type: "paragraph", html: "立ち寄り先の順序を間違えると、移動時間と燃料消費が大幅に増加する可能性があります。当最適化ツールは何百万もの可能性を分析し、不要な回り道や重複を避けて、最も直接的な経路を提示します。" }
];

const faq: ToolLocaleContent<OptimalRoutesUI>['faq'] = [
  { question: "最適化はどのように機能しますか？", answer: "すべての立ち寄り先を分析し、総移動距離を最小限に抑える順次順序を決定します。" },
  { question: "モバイルでも使えますか？", answer: "はい、当ツールは完全にレスポンシブであり、生成されたルートをナビゲーションアプリで直接開くことができます。" },
  { question: "立ち寄り先の数に制限はありますか？", answer: "無料版では、最大25か所の立ち寄り先を効率的に最適化でき、毎日の配送やロードトリップに最適です。" }
];

const howTo: ToolLocaleContent<OptimalRoutesUI>['howTo'] = [
  { name: "追加", text: "地図をクリックして、出発点と途中の立ち寄り先を設定します。" },
  { name: "最適化", text: "最適化ボタンを押すと、システムが立ち寄り先を効率的に並べ替えます。" },
  { name: "ナビゲート", text: "生成された計画を使用して、提案されたルートに従ってください。" }
];

const bibliography: ToolLocaleContent<OptimalRoutesUI>['bibliography'] = [
  { name: "巡回セールスマン問題 (TSP)", url: "https://ja.wikipedia.org/wiki/%E5% patrol%E5%9B%9E%E3%82%BB%E3%83%BC%E3%83%AB%E3%82%B9%E3%83%9E%E3%83%B3%E5%95%8F%E9%A1%8C" },
  { name: "ルート最適化", url: "https://ja.wikipedia.org/wiki/%E6%9C%80%E9%81%A9%E5%8C%96" }
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
  inLanguage: 'ja',
};

export const content: ToolLocaleContent<OptimalRoutesUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: "よくある質問",
  bibliography,
  bibliographyTitle: "出典とリファレンス",
  howTo,
  howToTitle: "使い方",
  schemas: [faqSchema, howToSchema, appSchema],
};
