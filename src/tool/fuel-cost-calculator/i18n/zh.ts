import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FuelCostCalculatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'fuel-cost-calculator';
const title = "自驾游燃油费油费计算器 Tool";
const description = "根据单程距离、车辆油耗、加油站单价、同行人数及是否往返，快速估算自驾出行所需的总油费与人均分摊费用。";

const ui: FuelCostCalculatorUI = {
  "metricLabel": "公制",
  "imperialLabel": "英制",
  "routeHeading": "调整行程参数",
  "distanceLabel": "单程距离",
  "distanceHint": "目的地距离有多远？",
  "consumptionLabel": "车辆油耗",
  "consumptionHint": "输入您爱车的平均油耗",
  "priceLabel": "油价单价",
  "priceHint": "输入当前加油站油价",
  "passengersLabel": "同行人数",
  "roundTripLabel": "往返行程",
  "currencyLabel": "货币",
  "presetsLabel": "快捷预设",
  "presetCommute": "日常通勤",
  "presetWeekend": "周末郊游",
  "presetRoadTrip": "长途自驾",
  "resultHeading": "燃油费用预测",
  "totalDistanceLabel": "总行驶距离",
  "fuelUsedLabel": "预计所需燃油",
  "totalCostLabel": "预计总油费",
  "perPersonLabel": "每人应付费用",
  "routeStatement": "往返 {distance} {unit}，由 {passengers} 人 AA 分摊",
  "routeOneWayStatement": "单程 {distance} {unit}，由 {passengers} 人 AA 分摊",
  "statusLight": "轻松短途",
  "statusMedium": "适合 AA 的中途自驾",
  "statusHigh": "长途旅程",
  "sampleButton": "加载示例",
  "resetButton": "重置",
  "litersUnit": "升",
  "gallonsUnit": "加仑",
  "distanceMetricUnit": "公里",
  "distanceImperialUnit": "英里",
  "consumptionMetricUnit": "升/百公里",
  "consumptionImperialUnit": "mpg",
  "priceMetricUnit": "元/升",
  "priceImperialUnit": "元/加仑",
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
  ]
};

const seo: ToolLocaleContent<FuelCostCalculatorUI>['seo'] = [
  {
    "type": "title",
    "text": "如何在自驾出行前精准计算油费预算",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "准确计算自驾出行的油费预算需要四个核心数据：单程距离、车辆平均油耗、加油站油价单价以及同行分摊人数。本计算器在勾选往返时会自动将距离翻倍，并精准计算所需升数与人均 AA 费用。"
  },
  {
    "type": "title",
    "text": "燃油费用计算公式",
    "level": 2
  },
  {
    "type": "table",
    "headers": [
      "步骤",
      "计算公式",
      "可获得的数据"
    ],
    "rows": [
      [
        "总行驶距离",
        "单程距离 x 2（选择往返时）",
        "全程实际行驶的公里或英里数"
      ],
      [
        "消耗燃油量",
        "总距离 x 油耗 / 100",
        "全程预计需要的燃油升数"
      ],
      [
        "预计总油费",
        "消耗燃油量 x 油价单价",
        "整个行程的预计总加油支出"
      ],
      [
        "人均分摊费用",
        "预计总油费 / 同行人数",
        "每位同行人员应分摊的金额"
      ]
    ]
  },
  {
    "type": "tip",
    "title": "请输入实际油价单价",
    "html": "不同地区、不同加油站及油品规格的油价存在差异。手动输入您预期的加油单价，可以获得最具参考价值的预算结果。"
  },
  {
    "type": "title",
    "text": "公制与英制单位切换",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "支持使用公里与百公里升数的公制单位，以及英里与 mpg 的英制单位。切换单位不会改变行程本身的经济性估算。"
  },
  {
    "type": "list",
    "items": [
      "建议预留少许冗余距离以应对绕路或寻找停车场。",
      "请尽量使用车辆的实际平均油耗而非官方宣传数据。",
      "如为跨省长途自驾且需多次加油，建议分段计算。"
    ]
  }
];

const faq = [
  {
    "question": "自驾油费是如何计算的？",
    "answer": "将总行程距离乘以车辆油耗算出所需总油量，再乘以每升油价得到总费用。如果有同行人员，最后除以人数即可得到人均费用。"
  },
  {
    "question": "计算器支持计算往返吗？",
    "answer": "支持。勾选往返选项后，计算器会在计算油耗前自动将单程距离乘以 2。"
  },
  {
    "question": "计算器是否实时获取油价？",
    "answer": "否。由用户手动输入油价，这样可以确保计算结果透明，且能灵活适应任何国家或特定加油站的实际价格。"
  },
  {
    "question": "可以使用英里和加仑计算吗？",
    "answer": "可以。切换到英制模式（Imperial）即可使用英里和 mpg 进行计算。"
  }
];

const howTo = [
  {
    "name": "选择单位系统",
    "text": "使用公里和百公里升数请选公制（Metric），使用英里请选英制（Imperial）。"
  },
  {
    "name": "输入行程与车辆参数",
    "text": "填入单程距离、车辆油耗、加油单价及同行人数。"
  },
  {
    "name": "查看分摊结果",
    "text": "根据需要勾选往返，选择货币符号，即可查阅总油费及人均 AA 费用。"
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

export const content: ToolLocaleContent<FuelCostCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  howTo,
  howToTitle: "如何计算自驾出行的燃油费用",
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography: bibliographyEntries,
};
