import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TipCalculatorUI } from '../index';

const slug = 'international-tip-calculator';
const title = '世界のチップ計算機';
const description = '旅行先で必要なチップの金額を計算します。50カ国以上の比率ガイドとマナーを掲載。支払いで困ることはもうありません！';

const ui: TipCalculatorUI = {
  title: "チップ計算機",
  badge: "国際チップツール",
  billLabel: "請求額",
  countryLabel: "国・地域の慣習",
  tipLabel: "チップの割合 (%)",
  splitLabel: "割り勘人数",
  summaryTip: "チップ合計",
  summarySubtotal: "小計",
  summaryTotalPerson: "一人あたりの合計",
  protocolTitle: "チップのマナー",
  placeholderAmount: "0.00",
  placeholderFilter: "国を検索...",
  placeholderSelect: "国を選択してください",
  countries: [
    {
      id: "usa",
      name: "アメリカ・カナダ",
      min: 18,
      max: 25,
      default: 20,
      culture: "ウェイターの給与にとってチップは不可欠です。18%から25%が期待されます。チップを払わないことは、北米文化において重大なエチケット違反とみなされます。",
    },
    {
      id: "esp",
      name: "スペイン",
      min: 0,
      max: 10,
      default: 5,
      culture: "任意です。お釣りの端数を残すか、サービスが良かった場合の夕食で5-10%を置くのが一般的です。",
    },
    {
      id: "jpn",
      name: "日本",
      min: 0,
      max: 0,
      default: 0,
      culture: "チップの習慣はありません。プロ意識に対する侮辱ととられることもあります。お金を置いたままにすると、忘れ物として追いかけてくる可能性が高いです。",
    },
    {
      id: "ita",
      name: "イタリア",
      min: 0,
      max: 10,
      default: 0,
      culture: "「コペルト (coperto)」は席料、パン、カトラリー代であり、チップではありません。5-10%の追加チップは喜ばれますが、完全に任意です。",
    },
    {
      id: "fra",
      name: "フランス",
      min: 0,
      max: 10,
      default: 5,
      culture: "法律によりサービス料が含まれています。「プウルボワール (pourboire)」という少額の追加チップは、格別のサービスを受けた場合にのみ渡します。",
    },
    {
      id: "gbr",
      name: "イギリス",
      min: 0,
      max: 12.5,
      default: 10,
      culture: "任意で12.5%のサービス料が最初から請求書に含まれていることが多いです。含まれていない場合、レストランでは10%が標準です。",
    },
    {
      id: "mex",
      name: "メキシコ",
      min: 10,
      max: 15,
      default: 12,
      culture: "10-15%の「プロピーナ (propina)」が期待されます。サービス業界で働く人々にとって、経済的に非常に重要な部分を占めています。",
    },
    {
      id: "arg",
      name: "アルゼンチン",
      min: 0,
      max: 10,
      default: 10,
      culture: "標準は10%です。サービスが普通、あるいは良かった場合にはほぼ常に渡されます。",
    },
    {
      id: "bra",
      name: "ブラジル",
      min: 0,
      max: 10,
      default: 10,
      culture: "通常、サービス料10%が「セルヴィッソ (Serviço)」として請求書に含まれています。任意ですが、ほとんどの人が支払います。",
    },
    {
      id: "deu",
      name: "ドイツ",
      min: 5,
      max: 10,
      default: 7,
      culture: "端数を切り上げるか、5-10%を上乗せするのが一般的です。支払いの際に「チップを含めた合計額」を店員に伝えます。",
    },
    {
      id: "tur",
      name: "トルコ",
      min: 5,
      max: 10,
      default: 10,
      culture: "観光地では現金で10%が期待されます。クレジットカードにチップ分を追加することは通常できません。",
    },
    {
      id: "aus",
      name: "オーストラリア",
      min: 0,
      max: 10,
      default: 0,
      culture: "期待されていません。給与水準が高いためです。高級な食事の際には10%を置くこともあります。",
    },
    {
      id: "chn",
      name: "中国",
      min: 0,
      max: 0,
      default: 0,
      culture: "歴史的にチップの習慣はなく、多くの場所で禁止されているか、奇妙なことだと思われます。",
    },
    {
      id: "prt",
      name: "ポルトガル",
      min: 0,
      max: 10,
      default: 5,
      culture: "お釣りを置くか、端数を切り上げるのが慣習です。観光地では5-10%が一般的です。",
    },
    {
      id: "grc",
      name: "ギリシャ",
      min: 0,
      max: 10,
      default: 5,
      culture: "請求額を切り上げるだけで十分です。5-10%の追加チップは非常に感謝されますが、義務ではありません。",
    },
  ]
};

const seo: ToolLocaleContent<TipCalculatorUI>['seo'] = [
  {
    type: "title",
    text: "世界のチップガイド：マナーと比率の最新版 (2026年)",
    level: 2,
  },
  {
    type: "summary",
    title: "世界中どこでも、現地の人のようにチップを渡せるようになろう",
    items: [
      "主要な観光地で期待されるチップの比率に関する完全ガイド。",
      "小計または税込み合計額から素早くチップを計算する方法。",
      "サービス料、席料 (コペルト)、および任意のチップの違いについて。",
      "タクシー、ホテル、ツアーガイドなどの特別な場面でのマナー。",
    ],
  },
  {
    type: "paragraph",
    html: "海外旅行で最もストレスを感じる瞬間の一つは、テーブルに請求書が届いた時ではないでしょうか。私たちの<strong>国際チップ計算機</strong>は、そのような不安を解消するために設計されました。",
  }
];

const faq: ToolLocaleContent<TipCalculatorUI>['faq'] = [
  {
    question: "アメリカでチップを払うのは義務ですか？",
    answer: "法律上の義務ではありませんが、社会的な義務といえます。店員はチップを前提とした給与体系になっています。18%から25%を払うのが一般的です。",
  },
  {
    question: "チップを払うと失礼になる国はどこですか？",
    answer: "主に日本や韓国です。良いサービスを提供することは職務の一環と考えられており、追加の報酬は必要ないとされています。",
  },
  {
    question: "サービスが悪かった場合でもチップを払うべきですか？",
    answer: "欧州や豪州など、チップが任意の国々では、何も払わないのが最も正しい対応です。",
  },
  {
    question: "チップは税込み額、税抜き額のどちらで計算しますか？",
    answer: "北米では通常、小計 (税抜き額) で計算します。欧州や中南米では、常に請求書の総額 (税込み額) で計算されます。",
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
    name: "請求額を入力する",
    text: "チップを適用する前の、請求書に記載された総額を入力してください。",
  },
  {
    name: "国を選択する",
    text: "目的地を選択すると、文化的なアドバイスと標準的な比率が自動的に読み込まれます。",
  },
  {
    name: "調整と割り勘",
    text: "複数人の場合は人数を入力して、一人あたりがチップを含めていくら支払うべきかを確認します。",
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
  inLanguage: 'ja',
};

export const content: ToolLocaleContent<TipCalculatorUI> = {
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
  howToTitle: "計算機の使い方",
  schemas: [faqSchema, howToSchema, appSchema],
};
