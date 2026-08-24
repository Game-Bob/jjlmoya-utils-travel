import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TripExpenseSplitterUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'trip-expense-splitter';
const title = "旅行AA制记账与费用 AA 分摊计算器 Tool";
const description = "轻松记录多人自驾游或团队旅行垫付款项，自动计算谁多付或少付，并生成转账次数最少的极简 AA 结算方案。";

const ui: TripExpenseSplitterUI = {
  "tripNameLabel": "旅行名称",
  "tripNamePlaceholder": "为本次旅行命名",
  "currencyLabel": "货币",
  "travelersHeading": "参与成员",
  "travelerPlaceholder": "成员姓名",
  "addTraveler": "添加成员",
  "removeTraveler": "删除",
  "expensesHeading": "支出明细账本",
  "expenseDescriptionPlaceholder": "这项支出用于什么？",
  "amountLabel": "金额",
  "payerLabel": "垫付人",
  "participantsLabel": "分摊成员",
  "allTravelers": "所有人",
  "addExpense": "添加支出",
  "emptyExpenses": "账本为空。请添加第一笔共同支出。",
  "resultHeading": "推荐结算转账方案",
  "totalSpent": "团队总支出",
  "transferCount": "次转账",
  "noTransfers": "所有人均已结清，无需转账。",
  "owes": "需支付",
  "receives": "应接收",
  "from": "给",
  "to": "至",
  "eachPays": "每人应付",
  "eachReceives": "每人应收",
  "settlementHint": "按照下方路径转账，可用最少次数结清团队所有账目。",
  "copyLink": "复制分享链接",
  "copied": "链接已复制",
  "exportJson": "导出 JSON",
  "reset": "重新开始",
  "removeExpense": "删除支出",
  "deleteTrip": "重置旅行",
  "intro": "请输入团队垫付支出。下方路径将把账本转化为转账次数最少的结算方案。",
  "statusBalanced": "账目已结清",
  "statusSettle": "可进行结算",
  "statusReady": "等待输入支出",
  "currencyOptions": [
    {
      "code": "CNY",
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
  "defaultTripName": "周末高山之旅",
  "defaultTravelerNames": [
    "玛雅",
    "亚历克斯",
    "萨姆"
  ],
  "defaultExpenseNames": [
    "木屋住宿",
    "火车票"
  ]
};

const seo: ToolLocaleContent<TripExpenseSplitterUI>['seo'] = [
  {
    "type": "title",
    "text": "如何轻松结清多人旅行中的复杂账目",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "多人出行后结账时，只要明确每笔支出的垫付人和实际参与者，记账就会变得非常简单。本计算器汇总每人先垫付的金额与实际应分摊的金额，并生成转账笔数最少的结算路径。"
  },
  {
    "type": "title",
    "text": "AA 结算金额计算逻辑",
    "level": 2
  },
  {
    "type": "table",
    "headers": [
      "阶段",
      "计算公式",
      "目的"
    ],
    "rows": [
      [
        "垫付总额",
        "个人先垫付的所有支出汇总",
        "记录个人已先付出的资金"
      ],
      [
        "应分摊额",
        "每笔支出按参与人数平摊的金额",
        "算出个人实际享受消费的应付额"
      ],
      [
        "净结算额",
        "垫付总额 减去 应分摊额",
        "得出个人应收或应付的净差额"
      ],
      [
        "转账优化",
        "优先匹配大额债务与大额债权",
        "将团队转账和发红包次数降至最低"
      ]
    ]
  },
  {
    "type": "tip",
    "title": "准确选择每笔支出的参与成员",
    "html": "住宿费用通常由全员平摊，而单独的餐费或特定门票只需勾选实际参与的人员，避免不必要的误会。"
  },
  {
    "type": "title",
    "text": "让旅行收尾结账更加高效",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "按照计算器推荐的极简转账路径进行操作，无需反复互相转账。"
  }
];

const faq = [
  {
    "question": "旅行 AA 分摊计算器是如何工作的？",
    "answer": "输入成员、支出、垫付人及分摊人后，计算器算出每人的净应收/应付金额，并优化出转账次数最少的方案。"
  },
  {
    "question": "可以只让部分成员分摊某笔费用吗？",
    "answer": "可以。添加支出时勾选实际参与该项消费的成员即可。"
  },
  {
    "question": "我的账本数据会被上传到服务器吗？",
    "answer": "不会。所有数据仅储存在您的本地浏览器中。"
  },
  {
    "question": "为什么转账笔数比支出笔数少很多？",
    "answer": "计算器自动对成员之间的债权债务进行了抵销（Netting），从而大幅减少了转账次数。"
  }
];

const howTo = [
  {
    "name": "添加参与成员",
    "text": "输入所有同行人员的名字。"
  },
  {
    "name": "记录各项支出",
    "text": "填入名目、金额、垫付人及分摊成员。"
  },
  {
    "name": "按推荐方案转账",
    "text": "根据生成的极简转账路径完成团队结算。"
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
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<TripExpenseSplitterUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  howTo,
  howToTitle: "如何进行团队旅行费用 AA 结算",
  schemas: [appSchema, faqSchema, howToSchema],
  bibliography: bibliographyEntries,
};
