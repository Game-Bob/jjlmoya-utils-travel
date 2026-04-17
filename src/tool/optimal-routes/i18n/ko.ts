import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { OptimalRoutesUI } from '../index';

const slug = 'choejeok-gyeongno-gyesangi-gyeongyuji-sae-daeyeol';
const title = '최적 경로 계산기 | 경유지 지능형 재배열';
const description = '배송 또는 여행 경로를 무료로 최적화하세요. 저희 도구는 최단 경로와 가장 효율적인 길을 찾기 위해 경유지를 자동으로 재배열합니다.';

const ui: OptimalRoutesUI = {
  title: "최적 경로",
  sidebar: {
    title: "경로 계획",
    addPoint: "경유지 추가 (지도 클릭)",
    pointsList: "나의 경유지",
    emptyState: "지도를 클릭하여 경로에 경유지를 추가하세요.",
    optimizeBtn: "순서 최적화",
    clearBtn: "모두 지우기",
    stats: {
      distance: "총 거리:",
      time: "예상 시간:"
    }
  },
  map: {
    placeholder: "지도 로딩 중...",
    attribution: "© OpenStreetMap 기여자"
  },
  errors: {
    minPoints: "경로를 계산하려면 최소 두 개의 지점이 필요합니다.",
    calcError: "최적 경로를 계산하는 중 오류가 발생했습니다. 다시 시도해 주세요."
  },
  labels: {
    origin: "출발",
    destination: "도착",
    stop: "경유지",
    loading: "계산 중..."
  }
};

const seo: ToolLocaleContent<OptimalRoutesUI>['seo'] = [
  { type: "title", text: "지능형 경로 최적화", level: 2 },
  { type: "paragraph", html: "고급 알고리즘을 사용하여 외판원 문제(TSP)를 수초 만에 해결합니다. 물류, 배송 또는 여행 중 연료 절약에 이상적입니다." },
  { type: "title", text: "경유지 순서가 중요한 이유", level: 3 },
  { type: "paragraph", html: "경유지 순서가 잘못되면 이동 시간과 연료 소비가 크게 늘어날 수 있습니다. 저희 최적화 도구는 수백만 개의 가능성을 분석하여 불필요한 우회와 중복을 피해 가장 직접적인 경로를 제시합니다." }
];

const faq: ToolLocaleContent<OptimalRoutesUI>['faq'] = [
  { question: "최적화는 어떻게 작동하나요?", answer: "모든 경유지를 분석하여 총 이동 거리를 최소화하는 순차적 순서를 결정합니다." },
  { question: "모바일에서도 사용할 수 있나요?", answer: "네, 이 도구는 완벽하게 반응형이며 생성된 경로를 네비게이션 앱에서 직접 열 수 있습니다." },
  { question: "경유지 수에 제한이 있나요?", answer: "무료 버전에서는 최대 25개의 경유지를 효율적으로 최적화할 수 있으며, 이는 일일 배송이나 로드트립에 완벽합니다." }
];

const howTo: ToolLocaleContent<OptimalRoutesUI>['howTo'] = [
  { name: "추가", text: "지도를 클릭하여 출발점과 중간 경유지를 설정합니다." },
  { name: "최적화", text: "최적화 버튼을 누르면 시스템이 경유지를 효율적으로 재배열합니다." },
  { name: "내비게이션", text: "생성된 계획을 사용하여 제안된 경로를 따라 이동하세요." }
];

const bibliography: ToolLocaleContent<OptimalRoutesUI>['bibliography'] = [
  { name: "외판원 문제 (TSP)", url: "https://ko.wikipedia.org/wiki/%EC%9Wait%ED%8C%90%EC%9B%90_%EB%AC%B8%EC%Wait%9C" },
  { name: "경로 최적화", url: "https://ko.wikipedia.org/wiki/%EC%Wait%B5%EC%Wait%9C%ED% Wait%94" }
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
  applicationCategory: 'MapApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<OptimalRoutesUI> = {
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
  howToTitle: "사용 방법",
  schemas: [faqSchema, howToSchema, appSchema],
};
