import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SuitcaseChecklistUI } from '../index';

const slug = 'yeohaeng-gabang-mochimono-check-list-generator';
const title = '여행 가방 짐 싸기 체크리스트 생성기 | 완벽한 여행 준비';
const description = '여행 유형, 목적지, 기간을 바탕으로 짐을 정리하는 최고의 온라인 도구입니다. 여행 필수품을 다시는 잊지 마세요.';

const ui: SuitcaseChecklistUI = {
  title: "패킹 플래너",
  form: {
    destTitle: "목적지 및 기후Split",
    destTypes: [
      { id: "playa", name: "해변 / 해안", icon: "mdi:beach" },
      { id: "ciudad", name: "도시 / 시가지", icon: "mdi:city" },
      { id: "montana", name: "산 / 농촌", icon: "mdi:pine-tree" },
      { id: "frio", name: "추움 / 눈", icon: "mdi:snowflake" }
    ],
    daysTitle: "며칠 동안인가요?",
    intlTitle: "해외 여행인가요?",
    intlLabel: "네, 국경을 넘습니다",
    reasonTitle: "여행 목적",
    reasons: [
      { id: "ocio", name: "레저 / 관광", icon: "mdi:party-popper" },
      { id: "negocios", name: "비즈니스", icon: "mdi:tie" }
    ],
    submitBtn: "이상적인 가방 구성하기"
  },
  results: {
    title: "나의 짐 싸기 리스트",
    editBtn: "편집",
    printBtn: "PDF로 저장",
    tipsTitle: "여행 팁",
    progressText: "완료"
  },
  itemsDb: {
    essentials: {
      id: "essentials",
      title: "서류 및 기본 품목",
      icon: "mdi:passport",
      items: [
        { label: "신분증 / 여권" },
        { label: "은행 카드" },
        { label: "현금Split" },
        { label: "티켓 (비행기/기차)" },
        { label: "예약 확인서" },
        { label: "집 열쇠" },
        { label: "해외 여행용 서류", dynamicId: "item-internacional" }
      ]
    },
    technology: {
      id: "technology",
      title: "테크놀로지",
      icon: "mdi:laptop",
      items: [
        { label: "휴대전화" },
        { label: "전화기 충전기" },
        { label: "헤드폰" },
        { label: "보조 배터리" },
        { label: "전원 어댑터", dynamicId: "item-adaptador" }
      ]
    },
    toiletries: {
      id: "toiletries",
      title: "세면도구",
      icon: "mdi:toothbrush",
      items: [
        { label: "칫솔 및 치약" },
        { label: "데오도란트" },
        { label: "젤 및 샴푸" },
        { label: "빗 / 브러시" },
        { label: "미니 구급상자" },
        { label: "상비약" }
      ]
    },
    clothing_base: {
      id: "clothing_base",
      title: "일상복",
      icon: "mdi:tshirt-crew",
      items: [
        { label: "속옷", dynamicId: "qty-ropa-interior" },
        { label: "티셔츠 / 상의", dynamicId: "qty-camisetas" },
        { label: "바지 / 하의", dynamicId: "qty-pantalones" },
        { label: "양말", dynamicId: "qty-calcetines" },
        { label: "잠옷" },
        { label: "가벼운 재킷" },
        { label: "편한 신발" }
      ]
    }
  },
  specificItems: {
    destType: {
      playa: {
        id: "dest-playa",
        title: "해안용",
        icon: "mdi:beach",
        items: [
          { label: "수영복" },
          { label: "비치 타월" },
          { label: "자외선 차단제" },
          { label: "선글라스" },
          { label: "플립플롭 (슬리퍼)" },
          { label: "모자" }
        ]
      },
      ciudad: {
        id: "dest-ciudad",
        title: "도시용",
        icon: "mdi:city",
        items: [
          { label: "걷기 편한 운동화" },
          { label: "보안 기능이 있는 작은 백팩" },
          { label: "휴대용 우산" },
          { label: "도시 가이드" }
        ]
      },
      montana: {
        id: "dest-montana",
        title: "산악용",
        icon: "mdi:pine-tree",
        items: [
          { label: "등산화" },
          { label: "윈드브레이커 (바람막이)" },
          { label: "트레킹 바지" },
          { label: "물병" },
          { label: "등산용 백팩" }
        ]
      },
      frio: {
        id: "dest-frio",
        title: "한랭지용",
        icon: "mdi:snowflake",
        items: [
          { label: "두꺼운 코트" },
          { label: "모자 및 장갑" },
          { label: "겨울용 신발" },
          { label: "기능성 내의" },
          { label: "스카프 / 목도리" }
        ]
      }
    },
    travelType: {
      negocios: {
        id: "travel-negocios",
        title: "비즈니스",
        icon: "mdi:tie",
        items: [
          { label: "정장 / 예복" },
          { label: "드레스 셔츠" },
          { label: "구두" },
          { label: "노트북" },
          { label: "노트북 충전기" },
          { label: "업무용 서류" }
        ]
      },
      ocio: {
        id: "travel-ocio",
        title: "레저",
        icon: "mdi:camera",
        items: [
          { label: "외출복" },
          { label: "카메라 (선택 사항)" },
          { label: "책 / 엔터테인먼트" }
        ]
      }
    }
  },
  tips: {
    military: "옷을 '밀리터리 스타일'로 돌돌 말면 주름을 방지하고 공간을 크게 절약할 수 있습니다.",
    longTravel: "1주일 이상의 여행이네요. 도중에 기본 의류를 세탁할 계획을 세우세요.",
    intlPassport: "해외 여행: 여권 유효기간이 최소 6개월 이상 남았는지 오늘 확인하세요.",
    intlBank: "필요한 비자를 확인하고 은행의 해외 수수료 발생 여부를 체크하세요.",
    intlAdapter: "목적지의 플러그 모양이 다른 경우 멀티 어댑터를 잊지 마세요!",
    coldLayers: "추운 날씨에는 겹쳐 입으세요: 기능성 내의, 보온층, 그리고 방수 겉옷 순입니다.",
    coldHeavyOn: "기내 공간을 절약하기 위해 가장 부피가 크거나 무거운 옷은 비행기를 탈 때 입으세요.",
    beachWet: "수영복은 여러 개 챙기세요. 습도가 높으면 하룻밤 사이에 마르지 않을 수 있습니다."
  }
};

const seo: ToolLocaleContent<SuitcaseChecklistUI>['seo'] = [
  { type: "title", text: "여행 가방 체크리스트 생성기: 당신의 이상적인 여정 파트너", level: 2 },
  { type: "paragraph", html: "여행 가방을 싸는 것은 여행 전 가장 스트레스 받는 순간 중 하나입니다. 중요한 것을 잊어버릴지 모른다는 두려움, 목적지 날씨에 대한 불안, 또는 짐을 얼마나 챙겨야 할지에 대한 불확실성이 기다려온 휴가 전 며칠을 망칠 수 있습니다. 이때 <strong>여행 가방 체크리스트 생성기</strong>가 당신의 훌륭한 조력자가 됩니다." },
  {
    type: "summary",
    title: "리스트 생성기 사용의 장점",
    items: [
      "목적지의 기후(해변, 산, 도시 또는 눈)에 맞춘 완벽한 개인화.",
      "여행 기간에 따른 의류 수량 자동 계산.",
      "체크 가능한 대화형 리스트를 통한 물류 스트레스의 획기적인 감소.",
      "'혹시 몰라' 증후군을 피하고 짐 공간 최적화."
    ]
  },
  { type: "title", text: "짐 짜기 계획이 근본적인 이유", level: 3 },
  { type: "paragraph", html: "여행은 변화를 주는 경험이지만, 계획이 부실하면 불필요한 골칫거리가 생길 수 있습니다. 저희 스마트 도구를 사용하면 원래라면 계산과 기억에 몇 시간이 걸릴 프로세스를 자동화할 수 있습니다. 효율적인 정리는 모든 성공적인 모험의 기초입니다." }
];

const faq: ToolLocaleContent<SuitcaseChecklistUI>['faq'] = [
  { question: "생성된 리스트를 저장할 수 있나요?", answer: "리스트 항목을 체크하거나 해제할 수 있으며, 인쇄 버튼이나 장치에 PDF 파일로 저장하는 버튼을 사용할 수 있습니다." },
  { question: "의류 수량은 어떻게 계산되나요?", answer: "저희 도구는 선택한 여행 기간을 바탕으로 의류 세트 수를 추정하여, 가벼운 여행을 권장하고 짐을 최적화합니다." },
  { question: "추운 날씨나 눈이 오는 곳에서도 작동하나요?", answer: "네, 한랭지 목적지를 선택하면 체크리스트에 해당 조건에 필수적인 항목들이 자동으로 포함됩니다." },
  { question: "도구는 무료인가요?", answer: "네, 저희 여행 가방 체크리스트 생성기는 100% 무료이며 등록이나 추가 앱 다운로드가 필요 없습니다." }
];

const bibliography: ToolLocaleContent<SuitcaseChecklistUI>['bibliography'] = [
  { name: "こんまり - 곤마리식 여행 가방 정리법", url: "https://konmari.com/how-to-konmari-a-suitcase/" },
  { name: "Eagle Creek - 짐 싸기: 궁극의 여행용 체크리스트", url: "https://eaglecreek.com/blogs/articles/what-pack-ultimate-travel-packing-checklist" }
];

const howTo: ToolLocaleContent<SuitcaseChecklistUI>['howTo'] = [
  { name: "여행 정의하기", text: "목적지 기후, 목적 및 여행 기간을 선택합니다." },
  { name: "리스트 생성", text: "버튼을 누르면 화장품부터 테크놀로지까지 필요한 모든 항목이 즉시 표시됩니다." },
  { name: "가방 싸기", text: "짐을 챙길 때 필수품을 잊지 않도록 항목을 체크하세요." }
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
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<SuitcaseChecklistUI> = {
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
  howToTitle: "여행 가방 싸는 법",
  schemas: [faqSchema, howToSchema, appSchema],
};
