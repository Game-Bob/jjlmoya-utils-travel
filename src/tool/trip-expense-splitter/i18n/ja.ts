import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TripExpenseSplitterUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'trip-expense-splitter';
const title = "旅行立替金・割り勘計算ツール";
const description = "旅行中に各自が立替えた費用を入力し、誰がいくら支払い・受け取るべきかを自動計算。最小限の送金回数でスマートに割り勘精算します。";

const ui: TripExpenseSplitterUI = {
  "tripNameLabel": "旅行タイトル",
  "tripNamePlaceholder": "旅行の名前を入力",
  "currencyLabel": "通貨",
  "travelersHeading": "参加メンバー",
  "travelerPlaceholder": "メンバー名",
  "addTraveler": "メンバーを追加",
  "removeTraveler": "削除",
  "expensesHeading": "立替・支払い履歴",
  "expenseDescriptionPlaceholder": "何に使った費用？",
  "amountLabel": "金額",
  "payerLabel": "立替えた人",
  "participantsLabel": "対象メンバー",
  "allTravelers": "全員",
  "addExpense": "支出を追加",
  "emptyExpenses": "履歴がありません。最初の立替費用を追加してください。",
  "resultHeading": "おすすめ清算プラン",
  "totalSpent": "グループ総支出",
  "transferCount": "送金回数",
  "noTransfers": "全員清算済みです。送金の必要はありません。",
  "owes": "が支払う",
  "receives": "を受け取る",
  "from": "から",
  "to": "へ",
  "eachPays": "1人あたりの支払額",
  "eachReceives": "1人あたりの受取額",
  "settlementHint": "以下のルートに従うことで、最小限の送金回数で清算できます。",
  "copyLink": "共有リンクをコピー",
  "copied": "コピーしました",
  "exportJson": "JSON出力",
  "reset": "やり直す",
  "removeExpense": "支出を削除",
  "deleteTrip": "旅行をリセット",
  "intro": "グループの立替費用を入力してください。最小限の送金リストを作成します。",
  "statusBalanced": "清算完了",
  "statusSettle": "清算可能",
  "statusReady": "支出入力待ち",
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
  ],
  "defaultTripName": "週末旅行",
  "defaultTravelerNames": [
    "マヤ",
    "アレックス",
    "サム"
  ],
  "defaultExpenseNames": [
    "コテージ代",
    "電車チケット"
  ]
};

const seo: ToolLocaleContent<TripExpenseSplitterUI>['seo'] = [
  {
    "type": "title",
    "text": "グループ旅行の複雑な割り勘を簡単清算する方法",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "複数人でのグループ旅行では、各自が立て替えた費用をまとめて公平に精算するのが大変です。このツールを使えば、立替えた人と対象メンバーを記録するだけで、最小限の送金ステップで全員の精算を完了できます。"
  },
  {
    "type": "title",
    "text": "精算金額の計算ロジック",
    "level": 2
  },
  {
    "type": "table",
    "headers": [
      "ステップ",
      "計算方法",
      "目的"
    ],
    "rows": [
      [
        "立替合計",
        "各自が支払った金額の合計",
        "誰がいくら先払いしたかを記録"
      ],
      [
        "実質負担額",
        "各支出を対象者数で割った金額",
        "実際に消費した分の本来負担額"
      ],
      [
        "差額収支",
        "立替合計 － 実質負担額",
        "受け取るべきか支払うべきかを算出"
      ],
      [
        "最適化清算",
        "大きな貸し借りを優先して相殺",
        "銀行送金や手渡しの回数を最小化"
      ]
    ]
  },
  {
    "type": "tip",
    "title": "支出ごとに参加メンバーを正しく選択",
    "html": "宿代は全員で割り勘、特定のお土産やカフェ代は一部のメンバーのみ選択することで、正確で不満のない精算ができます。"
  },
  {
    "type": "title",
    "text": "旅行最後の清算をスムーズに",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "算出された送金プランに沿ってやり取りするだけで、相殺計算の手間が省けます。"
  }
];

const faq = [
  {
    "question": "旅行の割り勘計算ツールはどのように機能しますか？",
    "answer": "メンバー、支出額、立替者、対象者を登録すると、差額収支を計算し、最小限の送金ルートを提案します。"
  },
  {
    "question": "一部のメンバーだけの費用も計算できますか？",
    "answer": "はい。支出ごとに負担する対象メンバーを個別選択できます。"
  },
  {
    "question": "データはサーバーに送信されますか？",
    "answer": "いいえ。すべてのデータはお使いのブラウザ内にのみ保存されます。"
  },
  {
    "question": "なぜ支払いの回数が支出の数より少ないのですか？",
    "answer": "貸し借りを自動で相殺（ネッティング）し、送金回数が最小限になるよう最適化しているためです。"
  }
];

const howTo = [
  {
    "name": "メンバーを追加",
    "text": "旅行に参加した全員の名前を入力します。"
  },
  {
    "name": "立替費用を登録",
    "text": "名目、金額、立替えた人、対象メンバーを選択します。"
  },
  {
    "name": "清算プランに沿って送金",
    "text": "提案された最小送金リストに従って精算を行います。"
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

export const content: ToolLocaleContent<TripExpenseSplitterUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  howTo,
  howToTitle: "旅行の割り勘・立替金の計算方法",
  schemas: [appSchema, faqSchema, howToSchema],
  bibliography: bibliographyEntries,
};
