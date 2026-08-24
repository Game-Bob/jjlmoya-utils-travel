import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TripExpenseSplitterUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'trip-expense-splitter';
const title = "여행 동승·그룹 정산 및 정산금 계산기 Tool";
const description = "친구들과의 여행 중 선결제한 비용을 입력하고, 누가 얼마를 내거나 받아야 하는지 최소 송금 횟수로 간편하게 정산하세요.";

const ui: TripExpenseSplitterUI = {
  "tripNameLabel": "여행 이름",
  "tripNamePlaceholder": "여행 이름 입력",
  "currencyLabel": "통화",
  "travelersHeading": "참여 멤버",
  "travelerPlaceholder": "멤버 이름",
  "addTraveler": "멤버 추가",
  "removeTraveler": "삭제",
  "expensesHeading": "지출 내역",
  "expenseDescriptionPlaceholder": "어디에 사용한 비용인가요?",
  "amountLabel": "금액",
  "payerLabel": "결제한 사람",
  "participantsLabel": "정산 대상",
  "allTravelers": "전원",
  "addExpense": "지출 추가",
  "emptyExpenses": "지출 내역이 없습니다. 첫 공동 지출을 추가해보세요.",
  "resultHeading": "추천 정산 송금안",
  "totalSpent": "그룹 총 지출액",
  "transferCount": "회 송금",
  "noTransfers": "모두 정산이 완료되었습니다. 송금이 필요 없습니다.",
  "owes": "이(가) 지불",
  "receives": "이(가) 수령",
  "from": "에게서",
  "to": "에게",
  "eachPays": "1인당 부담금",
  "eachReceives": "1인당 수령금",
  "settlementHint": "아래 경로를 따르면 최소한의 송금 횟수로 정산을 마칠 수 있습니다.",
  "copyLink": "공유 링크 복사",
  "copied": "링크 복사됨",
  "exportJson": "JSON 내보내기",
  "reset": "다시 시작",
  "removeExpense": "지출 삭제",
  "deleteTrip": "여행 초기화",
  "intro": "그룹 지출을 입력하세요. 가장 간단한 송금 경로로 정산안을 만들어 드립니다.",
  "statusBalanced": "정산 완료",
  "statusSettle": "정산 가능",
  "statusReady": "지출 입력 대기",
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
      "code": "GBP",
      "symbol": "£"
    }
  ],
  "defaultTripName": "주말 여행",
  "defaultTravelerNames": [
    "마야",
    "알렉스",
    "샘"
  ],
  "defaultExpenseNames": [
    "숙소 결제",
    "기차표"
  ]
};

const seo: ToolLocaleContent<TripExpenseSplitterUI>['seo'] = [
  {
    "type": "title",
    "text": "복잡한 그룹 여행 비용을 깔끔하게 정산하는 방법",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "여러 명이 함께한 여행 후 비용을 정산할 때, 선결제한 사람과 실제 이용한 멤버를 기록하면 손쉽게 정산할 수 있습니다. 이 계산기는 개인별 선결제액과 실제 부담액을 계산하여 최소 송금 횟수의 정산안을 제시합니다."
  },
  {
    "type": "title",
    "text": "정산 금액 계산 방식",
    "level": 2
  },
  {
    "type": "table",
    "headers": [
      "단계",
      "계산 방식",
      "목적"
    ],
    "rows": [
      [
        "총 결제액",
        "개인이 선결제한 금액의 합계",
        "먼저 지불한 돈을 기록"
      ],
      [
        "실제 부담액",
        "각 지출을 이용한 인원수로 나눈 금액",
        "실제 이용자의 원래 부담금 산정"
      ],
      [
        "순 정산액",
        "총 결제액 minus 실제 부담액",
        "받거나 내야 할 금액 산출"
      ],
      [
        "송금 최적화",
        "큰 채권·채무 간 우선 상쇄",
        "송금 및 계좌이체 횟수 최소화"
      ]
    ]
  },
  {
    "type": "tip",
    "title": "지출별 참여 멤버를 정확히 선택하세요",
    "html": "숙소비는 전체 정산, 특정 식사나 입장료는 해당 멤버만 선택하여 억울함 없는 공정한 정산을 진행하세요."
  },
  {
    "type": "title",
    "text": "여행 마무리 정산을 간편하게",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "계산기가 제안하는 경로를 따라 송금하면 복잡한 주고받기 과정이 크게 줄어듭니다."
  }
];

const faq = [
  {
    "question": "여행 정산 계산기는 어떻게 작동하나요?",
    "answer": "참여 멤버, 지출액, 결제자, 이용 멤버를 입력하면 순 정산액을 계산해 최소 송금 경로를 제안합니다."
  },
  {
    "question": "일부 멤버만의 지출도 계산 가능한가요?",
    "answer": "네. 지출 항목마다 참여한 멤버만 따로 선택할 수 있습니다."
  },
  {
    "question": "내 데이터가 서버에 저장되나요?",
    "answer": "아니요. 모든 데이터는 사용자의 브라우저에만 저장됩니다."
  },
  {
    "question": "지출 항목 수보다 송금 횟수가 적은 이유는 무엇인가요?",
    "answer": "멤버 간 얽힌 채권과 채무를 서로 상쇄(네팅)하여 송금 횟수를 최소화하기 때문입니다."
  }
];

const howTo = [
  {
    "name": "참여 멤버 추가",
    "text": "여행에 함께한 모든 사람의 이름을 입력합니다."
  },
  {
    "name": "지출 내역 등록",
    "text": "항목, 금액, 결제자, 이용 멤버를 입력합니다."
  },
  {
    "name": "송금안에 따라 정산",
    "text": "제안된 최소 송금 경로대로 이체하여 정산을 완료합니다."
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

export const content: ToolLocaleContent<TripExpenseSplitterUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  howTo,
  howToTitle: "여행 공동 지출 정산 방법",
  schemas: [appSchema, faqSchema, howToSchema],
  bibliography: bibliographyEntries,
};
