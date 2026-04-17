import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TipCalculatorUI } from '../index';

const slug = 'international-tip-calculator';
const title = '세계 팁 계산기';
const description = '여행 중 팁을 얼마를 내야 할지 계산해 보세요. 50개국 이상의 국적별 비율 가이드와 에티켓 규칙이 포함되어 있습니다. 결제 시 당황하지 마세요!';

const ui: TipCalculatorUI = {
  title: "팁 계산기",
  badge: "국제 팁 도구",
  billLabel: "결제 금액",
  countryLabel: "국가 / 현지 관습",
  tipLabel: "팁 비율 (%)",
  splitLabel: "금액 나누기 (인원)",
  summaryTip: "팁 합계",
  summarySubtotal: "소계",
  summaryTotalPerson: "1인당 합계",
  protocolTitle: "에티켓 규칙",
  placeholderAmount: "0.00",
  placeholderFilter: "국가 검색...",
  placeholderSelect: "국가를 선택하세요",
  countries: [
    {
      id: "usa",
      name: "미국 및 캐나다",
      min: 18,
      max: 25,
      default: 20,
      culture: "웨이터의 급여에 팁은 필수적입니다. 18%에서 25% 사이가 기대됩니다. 팁을 남기지 않는 것은 북미 문화에 대한 심각한 결례로 간주됩니다.",
    },
    {
      id: "esp",
      name: "스페인",
      min: 0,
      max: 10,
      default: 5,
      culture: "선택 사항입니다. 품질 좋은 서비스를 받았다면 잔돈을 남기거나 저녁 식사 금액의 5~10%를 남기는 것이 일반적입니다.",
    },
    {
      id: "jpn",
      name: "일본",
      min: 0,
      max: 0,
      default: 0,
      culture: "팁 문화가 없습니다. 전문성에 대한 모욕으로 간주되기도 합니다. 돈을 남겨두면 돌려주기 위해 따라올 가능성이 높습니다.",
    },
    {
      id: "ita",
      name: "이탈리아",
      min: 0,
      max: 10,
      default: 0,
      culture: "'코페르토(coperto)'는 테이블 서비스, 빵, 식기 세팅 비용이며 팁 자체는 아닙니다. 추가로 5~10%를 남기는 것은 높이 평가되지만 전적으로 선택 사항입니다.",
    },
    {
      id: "fra",
      name: "프랑스",
      min: 0,
      max: 10,
      default: 5,
      culture: "서비스 비용이 법적으로 포함되어 있습니다. 예외적인 대우를 받았을 때만 '푸르보아르(pourboire, 잔돈)'를 남기세요.",
    },
    {
      id: "gbr",
      name: "영국",
      min: 0,
      max: 12.5,
      default: 10,
      culture: "종종 12.5%의 선택적 서비스 요금이 청구서에 추가됩니다. 그렇지 않은 경우 일반 레스토랑에서는 10%가 표준입니다.",
    },
    {
      id: "mex",
      name: "멕시코",
      min: 10,
      max: 15,
      default: 12,
      culture: "10~15%의 '프로피나(propina)'가 기대됩니다. 이는 해당 분야 근로자들에게 경제적으로 매우 중요한 부분입니다.",
    },
    {
      id: "arg",
      name: "아르헨티나",
      min: 0,
      max: 10,
      default: 10,
      culture: "표준은 10%입니다. 서비스가 평범하거나 좋았다면 거의 항상 남깁니다.",
    },
    {
      id: "bra",
      name: "브라질",
      min: 0,
      max: 10,
      default: 10,
      culture: "보통 '세르비수(Serviço)'라는 명목으로 10% 요금이 청구서에 포함됩니다. 선택 사항이지만 대부분 지불합니다.",
    },
    {
      id: "deu",
      name: "독일",
      min: 5,
      max: 10,
      default: 7,
      culture: "금액을 올림하거나 5~10%를 더하는 것이 일반적입니다. 지불할 때 웨이터에게 팁을 포함한 총액을 말씀해 주세요.",
    },
    {
      id: "tur",
      name: "터키",
      min: 5,
      max: 10,
      default: 10,
      culture: "관광지에서는 현금으로 10%를 기대합니다. 보통 신용카드 결제 시 팁을 추가할 수 없습니다.",
    },
    {
      id: "aus",
      name: "호주",
      min: 0,
      max: 10,
      default: 0,
      culture: "기대되지 않습니다. 임금 수준이 높기 때문입니다. 파인 다이닝의 경우 10%를 남길 수 있습니다.",
    },
    {
      id: "chn",
      name: "중국",
      min: 0,
      max: 0,
      default: 0,
      culture: "역사적으로 팁을 남기지 않으며, 많은 곳에서 금지되거나 이상하게 여겨집니다.",
    },
    {
      id: "prt",
      name: "포르투갈",
      min: 0,
      max: 10,
      default: 5,
      culture: "잔돈을 남기거나 금액을 올림하는 것이 관습입니다. 관광지에서는 5~10%가 흔합니다.",
    },
    {
      id: "grc",
      name: "그리스",
      min: 0,
      max: 10,
      default: 5,
      culture: "금액을 올림하는 것으로 충분한 경우가 많습니다. 추가적인 5~10%는 매우 고마운 일이지만 필수는 아닙니다.",
    },
  ]
};

const seo: ToolLocaleContent<TipCalculatorUI>['seo'] = [
  {
    type: "title",
    text: "국제 팁 가이드: 에티켓 및 비율 2026",
    level: 2,
  },
  {
    type: "summary",
    title: "세계 어디에서나 현지인처럼 팁을 주는 법을 배워보세요",
    items: [
      "주요 관광지별 기대 팁 비율에 대한 완전한 가이드.",
      "소계 또는 세금 포함 총액에서 팁을 빠르게 계산하는 법.",
      "서비스 요금, 테이블 차지(코페르토) 및 자발적 팁의 차이.",
      "택시, 호텔, 여행 가이드 등 특별한 상황에 대한 에티켓 규칙.",
    ],
  },
  {
    type: "paragraph",
    html: "해외 여행 중 가장 스트레스 받는 순간 중 하나는 계산서가 테이블에 도착했을 때입니다. 저희의 <strong>세계 팁 계산기</strong>는 그러한 불확실성을 없애기 위해 설계되었습니다.",
  }
];

const faq: ToolLocaleContent<TipCalculatorUI>['faq'] = [
  {
    question: "미국에서 팁을 주는 것이 의무인가요?",
    answer: "법적으로는 아니지만 사회적으로는 의무입니다. 웨이터들은 최저 임금에 도달하기 위해 팁에 의존합니다. 보통 18%에서 25% 사이를 남깁니다.",
  },
  {
    question: "어느 국가에서 팁을 남기는 것이 무례한 행동인가요?",
    answer: "주로 일본과 한국입니다. 좋은 서비스는 직무의 일부로 간주되며 별도의 보상을 필요로 하지 않는다고 생각합니다.",
  },
  {
    question: "서비스가 좋지 않았을 때도 팁을 주어야 하나요?",
    answer: "팁이 선택 사항인 국가들(유럽, 호주)에서는 아무것도 남기지 않는 것이 가장 올바른 행동입니다.",
  },
  {
    question: "팁은 세전 금액인가요, 세후 금액인가요?",
    answer: "북미에서는 보통 소계(세전)를 기준으로 계산합니다. 유럽과 라틴 아메리카에서는 항상 청구서의 총액(세후)을 기준으로 계산합니다.",
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
    name: "청구서 총액 입력",
    text: "팁을 적용하기 전, 영수증에 기재된 총 금액을 입력하세요.",
  },
  {
    name: "국가 선택",
    text: "목적지를 선택하면 문화적 권장 사항과 표준 비율이 자동으로 로드됩니다.",
  },
  {
    name: "조정 및 나누기",
    text: "여러 명인 경우 인원수를 입력하여 팁을 포함해 각자 얼마씩 내야 하는지 확인하세요.",
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<TipCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: "자주 묻는 질문",
  bibliography,
  bibliographyTitle: "출처 및 참고",
  howTo,
  howToTitle: "계산기 사용 방법",
  schemas: [faqSchema, howToSchema, appSchema],
};
