import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SchengenCalculatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'schengen-calculator';
const title = '솅겐 90 180 체류 일수 계산기';
const description =
  '솅겐 지역 90/180일 롤링 룰에 따른 유럽 체류 허용 일수를 즉시 계산하세요. 잔여 가능 일수를 파악하고 불법 체류 및 입국 거부를 방지합니다.';

const ui: SchengenCalculatorUI = {
  verdictSafeTitle: '합법적 체류 (허용 한도 이내)',
  verdictWarningTitle: '주의: 90일 허용 한도에 근접함',
  verdictOverstayTitle: '불법 체류 초과 위반(Overstay) 감지됨',
  daysRemainingSub: '남은 허용 일수',
  daysUsedSub: '180일 기준 사용 일수',
  maxStaySub: '최대 연속 체류 가능 일수',
  fullResetSub: '90일 전액 초기화 예정일',
  plannerHeading: '1. 평가 대상 날짜 확인',
  plannerEntryLabel: '입국 예정일 / 평가 기준일',
  quickDatesLabel: '날짜 이동',
  presetToday: '오늘',
  presetPlus7: '+1주',
  presetPlus14: '+2주',
  presetPlus30: '+1개월',
  tripsHeading: '2. 솅겐 여행 기록 (과거 및 예정 일정)',
  addTripBtn: '+ 여행 일정 추가',
  emptyTripsMsg: '등록된 여행 일정이 없습니다. 과거 또는 향후 솅겐 구역 체류 일정을 입력하세요.',
  colArrival: '입국일 (도착)',
  colDeparture: '출국일 (출발)',
  colDestination: '방문 국가 / 메모',
  colDays: '일수',
  sampleBtn: '샘플 여행 일정 불러오기',
  clearBtn: '전체 삭제',
  timelineTitle: '180일 이동 모니터링 윈도우',
  legendInSchengen: '솅겐 구역 내',
  legendOutside: '구역 외',
  legendOverstay: '불법체류 (Overstay)',
  bannerSafe: '{date} 기준, 사용 일수는 {used}입니다 (남은 일수: {rem}).',
  bannerWarning: '{date} 기준, 사용 일수는 {used}입니다 (남은 일수: 단 {rem}).',
  bannerOverstay: '{date}부터 불법 체류 초과 위반이 감지되었습니다. 일정이 법적 한도를 {days} 초과합니다.',
  unitDays: '일',
  notesPlaceholder: '예: 프랑스, 스페인',
  sampleNotes1: '이탈리아 여행 (20일)',
  sampleNotes2: '독일 및 오스트리아 (20일)',
  sampleNotesDefault: '프랑스 및 스페인',
};

const seo: ToolLocaleContent<SchengenCalculatorUI>['seo'] = [
  {
    type: 'title',
    text: '솅겐 90 180일 규정의 실제 계산 방식',
    level: 2,
  },
  {
    type: 'summary',
    title: '롤링 윈도우 모니터링 시스템의 기본 원칙',
    items: [
      '비EU 국가 여행자는 어떤 180일 기간 내에서도 최대 90일까지만 체류할 수 있습니다.',
      '180일의 계산 창은 매일 하루씩 전진하며, 항상 과거 179일을 소급하여 누적 일수를 확인합니다.',
      '입국 심사를 통과한 날과 출국 심사를 통과한 날은 모두 온전한 하루 체류로 인정됩니다.',
      '유럽을 떠난다고 해서 일수가 자동 초기화되지 않으며, 연속 90일 이상 구역 외에 머물러야 완전 초기화됩니다.',
    ],
  },
  {
    type: 'paragraph',
    html: '솅겐 협약 회원국은 <em>솅겐 국경 규정(EU 규정 2016/399)</em> 제6조(1)에 따라 무비자 여행자 및 C타입 단기 비자 소지자에게 <strong>어떠한 180일 기간 내에서도 최대 90일 체류</strong>라는 엄격한 한도를 적용합니다. 유럽 영토에 머무는 모든 날에 대해 국경 당국은 이전 179일과 당일을 포함한 총 체류 일수를 계산합니다.',
  },
  {
    type: 'title',
    text: '주요 국경 지표 및 규제 표준',
    level: 2,
  },
  {
    type: 'stats',
    items: [
      {
        value: '90일',
        label: '최대 허용 체류 기간',
      },
      {
        value: '180일',
        label: '소급 심사 모니터링 창',
      },
      {
        value: '양단 포함',
        label: '입출국일 전일 산정 기준',
      },
      {
        value: '29개국',
        label: '공동 솅겐 협약 적용국',
      },
    ],
  },
  {
    type: 'title',
    text: '고정 연도 쿼터와 이동 모니터링 창의 비교',
    level: 2,
  },
  {
    type: 'comparative',
    items: [
      {
        title: '달력 연도 기준이라는 오해',
        description:
          '1월 1일이 되면 90일이 전액 복원된다거나, 유럽 밖으로 잠깐 나갔다 오면 일수가 0일로 리셋된다고 잘못 생각하는 여행자가 많습니다. 이러한 오해는 공항에서의 비자 위반과 벌금으로 이어집니다.',
      },
      {
        title: '실제 이동 윈도우 계산 방식',
        description:
          '솅겐 내 모든 체류일은 연속 타임라인에 기록됩니다. 시간이 지남에 따라 180일 이전의 과거 체류분이 윈도우 밖으로 밀려나며 새로운 합법적 체류 가능 일수가 점진적으로 확보됩니다.',
      },
    ],
  },
  {
    type: 'title',
    text: '전형적인 여행 패턴과 합법성 평가',
    level: 2,
  },
  {
    type: 'table',
    headers: ['여행 패턴', '구체적 사례', '법적 상태', '실무 권고'],
    rows: [
      [
        '단일 연속 체류',
        '6월 1일 입국, 8월 29일 출국 (90일)',
        '합법',
        '정확히 90일째 출국해야 하며, 완전한 90일 회복을 위해 구역 외에서 연속 90일을 체류해야 합니다.',
      ],
      [
        '자주 방문하는 분할 여행자',
        '30일 체류 후 30일 구역 외 휴식을 3회 반복',
        '합법',
        '각 여행의 입국일과 출국일 시점마다 해당 180일 소급 윈도우에서 위반 여부를 각각 검증해야 합니다.',
      ],
      [
        '디지털 노마드 왕복 체류',
        '솅겐 내 60일 체류 후 구역 외 30일 교대 반복',
        '불법 체류 위험 극대',
        '30일간의 휴식은 180일 전 체류분만 복원하므로 국경에서 입국이 거부될 확률이 매우 높습니다.',
      ],
      [
        '완전한 90일 리셋',
        '솅겐 구역 외에서 연속 90일 이상 체류',
        '전액 복원',
        '다음 입국 시 90일의 최대 허용 한도를 온전히 확보할 수 있습니다.',
      ],
    ],
  },
  {
    type: 'title',
    text: '국경 위반을 방지하기 위한 핵심 조언',
    level: 2,
  },
  {
    type: 'tip',
    title: '안전 완충 일수를 확보하세요',
    html: '귀국 항공편을 정확히 90일째로 잡지 마세요. 항공편 결항이나 응급 의료 상황으로 출국이 91일째로 밀리면 유럽 출입국 시스템(EES)에 위반 기록이 자동 등재되어 향후 입국 금지 조치를 받을 수 있습니다.',
  },
  {
    type: 'card',
    title: '솅겐 구역 외 체류 증빙 자료를 보관하세요',
    html: '영국, 아일랜드, 키프로스, 몬테네그로, 알바니아 등 비솅겐 국가에서의 탑승권, 호텔 영수증, 여권 도장을 보관하여 국경 심사 시 부재 사실을 명확히 입증할 수 있도록 준비하세요.',
  },
  {
    type: 'title',
    text: '유럽 국경 관리 주요 용어 정리',
    level: 2,
  },
  {
    type: 'glossary',
    items: [
      {
        term: '오버스케이 (Overstay)',
        definition:
          '180일 기간 중 허용된 90일을 초과하여 체류하는 행위로 벌금, 강제 퇴거 또는 입국 금지 처분을 받습니다.',
      },
      {
        term: 'EES (출입국 시스템)',
        definition:
          '여권 수기 도장 대신 비EU 여행자의 생체 정보를 디지털로 자동 등록하는 유럽연합 국경 관리 IT 시스템입니다.',
      },
      {
        term: '제3국 국민',
        definition: 'EU 회원국이나 EFTA 국가의 국적을 보유하지 않은 모든 여행자를 의미합니다.',
      },
    ],
  },
];

const faq: ToolLocaleContent<SchengenCalculatorUI>['faq'] = [
  {
    question: '솅겐 지역 90 180일 규정이란 무엇인가요?',
    answer:
      '비EU 국적자가 장기 비자 없이 29개 솅겐 협약국에 머물 때, 어떠한 180일 기간 내에서도 최대 90일까지만 합법적으로 체류할 수 있도록 제한하는 규정입니다.',
  },
  {
    question: '유럽을 떠나면 90일 체류 일수가 즉시 초기화되나요?',
    answer:
      '아닙니다. 일시적 출국으로는 일수가 리셋되지 않습니다. 180일 계산 창은 매일 이동하므로, 완전한 90일 한도를 다시 얻으려면 솅겐 구역 외에서 연속 90일을 보내야 합니다.',
  },
  {
    question: '입국일과 출국일도 하루 전체 체류로 포함되나요?',
    answer:
      '네. 솅겐 국경 규정 제6조에 따라 출입국 심사를 통과한 날은 시간과 무관하게 각각 온전한 1일의 체류로 계산됩니다.',
  },
  {
    question: '이 계산에 포함되는 솅겐 협약국은 어디인가요?',
    answer:
      '그리스, 네덜란드, 노르웨이, 덴마크, 독일, 라트비아, 루마니아, 룩셈부르크, 리투아니아, 리히텐슈타인, 몰타, 벨기에, 불가리아, 스웨덴, 스위스, 스페인, 슬로바키아, 슬로베니아, 아이슬란드, 에스토니아, 오스트리아, 이탈리아, 체코, 크로아티아, 포르투갈, 폴란드, 프랑스, 핀란드, 헝가리 등 29개국입니다. 영국과 아일랜드는 포함되지 않습니다.',
  },
];

const howTo: ToolLocaleContent<SchengenCalculatorUI>['howTo'] = [
  {
    name: '평가 대상 날짜 선택',
    text: '잔여 일수를 확인하고자 하는 향후 비행 일정이나 입국 일자를 지정합니다.',
  },
  {
    name: '과거 및 예정 여행 일정 입력',
    text: '최근 몇 달 동안의 모든 솅겐 체류 건에 대해 입국일과 출국일을 입력합니다.',
  },
  {
    name: '잔여 일수와 안전 마진 검토',
    text: '남은 일수 게이지, 최대 연속 체류 기간, 완전 초기화 일자를 확인하여 일정을 조정합니다.',
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
  description,
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
  description,
  applicationCategory: 'TravelApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<SchengenCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  howTo,
  howToTitle: '솅겐 체류 일수 계산 방법',
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography: bibliographyEntries,
};
