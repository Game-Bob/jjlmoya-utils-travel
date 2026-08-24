import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FuelCostCalculatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'fuel-cost-calculator';
const title = "ドライブ旅行燃料費・ガソリン代計算ツール";
const description = "移動距離、車の燃費、ガソリン単価、乗車人数、往復・片道ルートから旅行の燃料費を簡単にシミュレーション計算します。";

const ui: FuelCostCalculatorUI = {
  "metricLabel": "メートル法",
  "imperialLabel": "ヤード・ポンド法",
  "routeHeading": "ルート条件の設定",
  "distanceLabel": "片道距離",
  "distanceHint": "目的地までの距離は？",
  "consumptionLabel": " vehicle 燃費",
  "consumptionHint": "愛車の燃費を入力",
  "priceLabel": "燃料単価",
  "priceHint": "現在のガソリン単価を入力",
  "passengersLabel": "乗车人数",
  "roundTripLabel": "往復ルート",
  "currencyLabel": "通貨",
  "presetsLabel": "クイック設定",
  "presetCommute": "毎日の移動",
  "presetWeekend": "週末ドライブ",
  "presetRoadTrip": "ロングドライブ",
  "resultHeading": "燃料費の試算結果",
  "totalDistanceLabel": "総走行距離",
  "fuelUsedLabel": "必要燃料量",
  "totalCostLabel": "合計燃料費",
  "perPersonLabel": "1人あたりの負担額",
  "routeStatement": "往復 {distance} {unit} （{passengers} 人で割り勘）",
  "routeOneWayStatement": "片道 {distance} {unit} （{passengers} 人で割り勘）",
  "statusLight": "お手頃ドライブ",
  "statusMedium": "割り勘に最適な距離",
  "statusHigh": "長距離ドライブ",
  "sampleButton": "サンプルを読み込む",
  "resetButton": "リセット",
  "litersUnit": "L",
  "gallonsUnit": "gal",
  "distanceMetricUnit": "km",
  "distanceImperialUnit": "mi",
  "consumptionMetricUnit": "L/100 km",
  "consumptionImperialUnit": "mpg",
  "priceMetricUnit": "円/L",
  "priceImperialUnit": "円/gal",
  "currencyOptions": [
    {
      "code": "JPY",
      "symbol": "¥"
    },
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
  ]
};

const seo: ToolLocaleContent<FuelCostCalculatorUI>['seo'] = [
  {
    "type": "title",
    "text": "ドライブ前にガソリン代を正確に計算する方法",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "ドライブ旅行のガソリン代を正確にシミュレーションするには、片道距離、平均燃費、ガソリン単価、割り勘人数の4つの情報が必要です。往復を選択すると自動で走行距離が2倍になり、1人あたりの負担額まで一瞬で算出できます。"
  },
  {
    "type": "title",
    "text": "燃料費計算の計算式",
    "level": 2
  },
  {
    "type": "table",
    "headers": [
      "ステップ",
      "計算式",
      "算出できる内容"
    ],
    "rows": [
      [
        "総走行距離",
        "片道距離 x 2（往復の場合）",
        "実際に走行する全体の距離"
      ],
      [
        "必要燃料量",
        "総走行距離 x 燃費換算",
        "ルート全体で消費するガソリンL数"
      ],
      [
        "合計燃料費",
        "必要燃料量 x ガソリン単価",
        "ドライブ全体のガソリン代試算"
      ],
      [
        "1人あたりの費用",
        "合計燃料費 / 乗車人数",
        "グループでの公平な割り勘金額"
      ]
    ]
  },
  {
    "type": "tip",
    "title": "実際のガソリン単価を入力",
    "html": "ガソリン価格は地域やガソリンスタンドによって変動します。給油予定の実際の単価を手入力することで、精度の高い計画を立てることができます。"
  },
  {
    "type": "title",
    "text": "単位系の切替について",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "kmとL/100kmを使用するメートル法と、マイルとmpgを使用するヤード・ポンド法の両方に対応しています。単位を切り替えても試算される金額の経済性は維持されます。"
  },
  {
    "type": "list",
    "items": [
      "渋滞や寄り道、駐車場探しの走行分として少し余裕を持たせましょう。",
      "カタログ数値ではなく、愛車の実際の平均燃費を入力してください。",
      "途中で複数回給油する長距離旅行は区間ごとに計算するとより正確です。"
    ]
  }
];

const faq = [
  {
    "question": "ガソリン代はどのように計算されますか？",
    "answer": "総走行距離に車の燃費率を掛け合わせて必要燃料量を算出し、それにガソリン単価を掛けます。同乗者がいる場合は人数で割って1人あたりの金額を出します。"
  },
  {
    "question": "往復計算にも対応していますか？",
    "answer": "はい。往復オプションを有効にすると、自動的に走行距離を2倍にして試算します。"
  },
  {
    "question": "リアルタイムのガソリン価格を取得していますか？",
    "answer": "いいえ。手入力方式を採用しているため、どこのガソリンスタンドや地域の価格でも柔軟に計算できます。"
  },
  {
    "question": "マイル表記での計算も可能ですか？",
    "answer": "はい。ヤード・ポンド法（Imperial）に切り替えることでマイルとmpgでの入力に対応します。"
  }
];

const howTo = [
  {
    "name": "単位系を選択",
    "text": "km表記はメートル法、マイル表記はヤード・ポンド法を選択します。"
  },
  {
    "name": "ルートと車両情報を入力",
    "text": "片道距離、車の燃費、ガソリン単価、同乗人数を入力します。"
  },
  {
    "name": "計算結果を確認",
    "text": "必要に応じて往復を選択し、合計燃料費と1人あたりの負担額を確認します。"
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
  inLanguage: 'ja',
};

export const content: ToolLocaleContent<FuelCostCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  howTo,
  howToTitle: "ドライブの燃料費計算方法",
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography: bibliographyEntries,
};
