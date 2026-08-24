import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FuelCostCalculatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'fuel-cost-calculator';
const title = "여행 연료비·유류비 계산기 Tool";
const description = "이동 거리, 차량 연비, 주유 단가, 탑승 인원, 왕복 여부를 바탕으로 드라이브 여행의 예상 유류비를 간편하게 계산하세요.";

const ui: FuelCostCalculatorUI = {
  "metricLabel": "미터법",
  "imperialLabel": "야드·파운드법",
  "routeHeading": "경로 조건 설정",
  "distanceLabel": "편도 거리",
  "distanceHint": "목적지까지의 거리는 얼마인가요?",
  "consumptionLabel": "차량 연비",
  "consumptionHint": "내 차의 평균 연비 입력",
  "priceLabel": "주유 단가",
  "priceHint": "현재 리터당 주유 가격 입력",
  "passengersLabel": "탑승 인원",
  "roundTripLabel": "왕복 경로",
  "currencyLabel": "통화",
  "presetsLabel": "빠른 설정",
  "presetCommute": "매일 출퇴근",
  "presetWeekend": "주말 드라이브",
  "presetRoadTrip": "장거리 여행",
  "resultHeading": "연료비 예상 결과",
  "totalDistanceLabel": "총 주행 거리",
  "fuelUsedLabel": "필요 연료량",
  "totalCostLabel": "총 예상 유류비",
  "perPersonLabel": "1인당 정산 금액",
  "routeStatement": "왕복 {distance} {unit} （{passengers} 명 정산）",
  "routeOneWayStatement": "편도 {distance} {unit} （{passengers} 명 정산）",
  "statusLight": "가벼운 주행",
  "statusMedium": "정산하기 좋은 거리",
  "statusHigh": "장거리 운전",
  "sampleButton": "샘플 불러오기",
  "resetButton": "초기화",
  "litersUnit": "L",
  "gallonsUnit": "gal",
  "distanceMetricUnit": "km",
  "distanceImperialUnit": "mi",
  "consumptionMetricUnit": "L/100 km",
  "consumptionImperialUnit": "mpg",
  "priceMetricUnit": "원/L",
  "priceImperialUnit": "원/gal",
  "currencyOptions": [
    {
      "code": "KRW",
      "symbol": "₩"
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
      "code": "JPY",
      "symbol": "¥"
    }
  ]
};

const seo: ToolLocaleContent<FuelCostCalculatorUI>['seo'] = [
  {
    "type": "title",
    "text": "드라이브 출발 전 유류비를 정확하게 계산하는 방법",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "드라이브 여행 전 유류비를 정확히 예상하려면 편도 거리, 차량 연비, 리터당 주유 가격, 정산 인원의 4가지 데이터가 필요합니다. 왕복을 선택하면 자동으로 주행 거리가 2배로 계산되며 1인당 정산 금액까지 손쉽게 확인할 수 있습니다."
  },
  {
    "type": "title",
    "text": "유류비 계산 공식",
    "level": 2
  },
  {
    "type": "table",
    "headers": [
      "단계",
      "적용 계산식",
      "확인할 수 있는 내용"
    ],
    "rows": [
      [
        "총 주행 거리",
        "편도 거리 x 2 (왕복 선택 시)",
        "실제 주행하는 전체 거리"
      ],
      [
        "필요 연료량",
        "총 주행 거리 x 연비 환산",
        "전체 경로에서 소비되는 리터 수"
      ],
      [
        "총 유류비",
        "필요 연료량 x 주유 단가",
        "여행 전체 예상 주유 비용"
      ],
      [
        "1인당 금액",
        "총 유류비 / 탑승 인원",
        "동승자 간 공정한 분담 금액"
      ]
    ]
  },
  {
    "type": "tip",
    "title": "실제 주유 단가를 직접 입력하세요",
    "html": "주유소 및 지역에 따라 기름값이 다릅니다. 방문 예정인 주유소의 실제 가격을 직접 입력하면 훨씬 정확한 여행 예산을 세울 수 있습니다."
  },
  {
    "type": "title",
    "text": "단위계 전환 안내",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "km와 L/100km 기준의 미터법 및 마일과 mpg 기준의 야드·파운드법을 모두 지원합니다. 단위를 변경해도 계산되는 전체 유류비의 경제성은 동일하게 유지됩니다."
  },
  {
    "type": "list",
    "items": [
      "우회 도로나 주차장 탐색을 고려해 약간의 여유 거리를 두세요.",
      "공인 연비보다 내 차의 실제 평균 연비를 입력하는 것이 좋습니다.",
      "여러 번 주유하는 장거리 여행은 구간별로 나누어 계산하세요."
    ]
  }
];

const faq = [
  {
    "question": "유류비는 어떻게 계산되나요?",
    "answer": "총 주행 거리에 차량 연비를 적용해 필요 연료량을 구한 뒤, 리터당 주유 단가를 곱해 총 비용을 계산합니다. 동승자가 있다면 인원수로 나누어 1인당 금액을 구합니다."
  },
  {
    "question": "왕복 계산도 지원하나요?",
    "answer": "네. 왕복 옵션을 체크하면 자동으로 거리를 2배로 계산하여 연료량과 비용을 산출합니다."
  },
  {
    "question": "실시간 기름값을 가져오나요?",
    "answer": "아니요. 직접 주유 단가를 입력하는 방식을 통해 어느 지역, 어느 주유소에서나 유연하게 계산할 수 있습니다."
  },
  {
    "question": "마일 단위로도 계산이 가능한가요?",
    "answer": "네. Imperial(야드·파운드법) 모드로 전환하면 마일과 mpg 단위로 계산할 수 있습니다."
  }
];

const howTo = [
  {
    "name": "단위계 선택",
    "text": "km 기준은 미터법, 마일 기준은 Imperial을 선택합니다."
  },
  {
    "name": "경로 및 차량 정보 입력",
    "text": "편도 거리, 차량 연비, 리터당 주유 단가, 탑승 인원을 입력합니다."
  },
  {
    "name": "결과 확인 및 정산",
    "text": "필요 시 왕복을 선택하고 총 유류비와 1인당 정산 금액을 확인합니다."
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
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<FuelCostCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  howTo,
  howToTitle: "여행 유류비 계산 방법",
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography: bibliographyEntries,
};
