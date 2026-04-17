import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MiniAdventuresUI } from '../index';

const slug = 'mini-adeubencheo-yetsang-ilsang-talchul-gyesangi';
const title = '미니 어드벤처 예측기: 일상의 틀에서 벗어나기';
const description = '단조로움을 깨고 주변을 탐험하기 위한 무작위 데일리 챌린지 생성기입니다.';

const ui: MiniAdventuresUI = {
  title: "미니 어드벤처",
  homeTitle: "미니 어드벤처",
  homeDesc: "오늘을 평소와 조금 다르게 만들어보세요. 탐험할 준비가 되셨나요?",
  generateBtn: "어드벤처 생성하기",
  anotherBtn: "다른 것",
  doneBtn: "완료",
  shareBtn: "공유하기",
  categories: {
    exploration: { id: "exploration", label: "탐험", icon: "mdi:map-marker-path", color: "#10b981", styling: "border-emerald-500/30 text-emerald-400 bg-emerald-500/5" },
    food: { id: "food", label: "미식", icon: "mdi:food-variant", color: "#f59e0b", styling: "border-amber-500/30 text-amber-400 bg-amber-500/5" },
    learning: { id: "learning", label: "학습", icon: "mdi:school", color: "#6366f1", styling: "border-indigo-500/30 text-indigo-400 bg-indigo-500/5" },
    creativity: { id: "creativity", label: "창의성", icon: "mdi:palette", color: "#ec4899", styling: "border-pink-500/30 text-pink-400 bg-pink-500/5" },
    social: { id: "social", label: "소셜", icon: "mdi:account-group", color: "#0ea5e9", styling: "border-sky-500/30 text-sky-400 bg-sky-500/5" },
    observation: { id: "observation", label: "관찰", icon: "mdi:eye", color: "#8b5cf6", styling: "border-violet-500/30 text-violet-400 bg-violet-500/5" },
    wellness: { id: "wellness", label: "웰니습", icon: "mdi:heart-pulse", color: "#f43f5e", styling: "border-rose-500/30 text-rose-400 bg-rose-500/5" }
  },
  adventures: [
    { id: 1, text: "한 번도 가본 적 없는 곳에서 커피나 음료를 즐겨보세요.", categoryId: "food" },
    { id: 2, text: "집을 나설 때 평소에 가지 않는 방향으로 10분 동안 걸어보세요.", categoryId: "exploration" },
    { id: 3, text: "모르는 언어 세 가지로 '감사합니다'라고 말하는 법을 배워보세요.", categoryId: "learning" },
    { id: 4, text: "거리에서 눈에 띄는 건축물의 디테일을 사진으로 찍어보세요.", categoryId: "creativity" },
    { id: 5, text: "한 번도 먹어보지 않은 과일을 사서 그 맛을 경험해보세요.", categoryId: "food" },
    { id: 6, text: "동네에서 기념비를 찾아 그곳에 담긴 이야기를 읽어보세요.", categoryId: "exploration" },
    { id: 7, text: "앞에 있는 물건을 60초 안에 그려보세요.", categoryId: "creativity" },
    { id: 8, text: "평소에 말을 나누지 않던 이웃에게 인사를 건네보세요.", categoryId: "social" },
    { id: 9, text: "평소 즐기지 않던 장르의 음악을 5분 동안 들어보세요.", categoryId: "learning" },
    { id: 10, text: "골동품점이나 중고 매장을 방문해 가장 기이한 물건을 찾아보세요.", categoryId: "exploration" },
    { id: 11, text: "공원에 앉아 몇 종류의 새가 보이는지 세어보세요.", categoryId: "observation" },
    { id: 12, text: "긍정적인 쪽지를 써서 공공 도서관 책 속에 몰래 넣어두세요.", categoryId: "social" },
    { id: 13, text: "오늘 감사한 일 5가지를 리스트로 적어보세요.", categoryId: "wellness" },
    { id: 14, text: "주방에 있는 재료만으로 새로운 레시피의 요리를 만들어보세요.", categoryId: "food" },
    { id: 15, text: "화면(휴대폰, TV, PC)을 전혀 보지 않고 20분 동안 시간을 보내보세요.", categoryId: "wellness" },
    { id: 16, text: "집 근처에서 나무를 찾아 그 종이 무엇인지 알아맞혀 보세요.", categoryId: "learning" },
    { id: 300, text: "이번 주말에 근처 마을을 방문할 계획을 세워보세요.", categoryId: "exploration" },
    { id: 301, text: "손가락의 이름이 라틴어로 무엇인지 배워보세요.", categoryId: "learning" },
    { id: 302, text: "이 문장의 각 단어에 어울리는 라임을 찾아보세요.", categoryId: "creativity" },
    { id: 303, text: "오래전에 있었던 일에 대해 친구에게 고마움을 전해보세요.", categoryId: "social" }
  ],
  achievements: [
    { id: "g1", milestone: 1, label: "각성", categoryId: "global", icon: "mdi:footprint", description: "첫 번째 미니 어드벤처를 완료했습니다." },
    { id: "g10", milestone: 10, label: "경이로운 습관", categoryId: "global", icon: "mdi:sparkles", description: "일상의 틀을 10번 깨뜨렸습니다." },
    { id: "g50", milestone: 50, label: "하루 수집가", categoryId: "global", icon: "mdi:calendar-star", description: "평범함을 특별함으로 바꾼 지 50일째." },
    { id: "g150", milestone: 150, label: "우연의 마스터", categoryId: "global", icon: "mdi:trophy-variant", description: "어드벤처 카탈로그의 절반을 완료했습니다." },
    { id: "g300", milestone: 300, label: "자유로운 영혼", categoryId: "global", icon: "mdi:ghost", description: "매일의 모험술을 마스터했습니다." },
    { id: "e3", milestone: 3, label: "집 근처 관광객", categoryId: "exploration", icon: "mdi:map-marker-outline", description: "3개의 새로운 장소를 발견했습니다." },
    { id: "e15", milestone: 15, label: "도시 지도 제작자", categoryId: "exploration", icon: "mdi:map-check", description: "누구보다 자신의 동네를 잘 알게 되었습니다." },
    { id: "f3", milestone: 3, label: "호기심 많은 입맛", categoryId: "food", icon: "mdi:silverware-clean", description: "몰랐던 맛 3가지를 경험했습니다." },
    { id: "f15", milestone: 15, label: "식도락 연금술사", categoryId: "food", icon: "mdi:silverware-variant", description: "식료품 저장실이 세계로 통하는 여권입니다." },
    { id: "l3", milestone: 3, label: "만물의 견습생", categoryId: "learning", icon: "mdi:book-open-page-variant", description: "세상의 흥미로운 사실 3가지를 배웠습니다." },
    { id: "l15", milestone: 15, label: "걸어 다니는 도서관", categoryId: "learning", icon: "mdi:head-cog", description: "호기심에는 끝이 없습니다." },
    { id: "c3", milestone: 3, label: "손그림의 달인", categoryId: "creativity", icon: "mdi:palette-outline", description: "3개의 작은 도전에 발자취를 남겼습니다." },
    { id: "c15", milestone: 15, label: "로컬 아방가르드", categoryId: "creativity", icon: "mdi:palette-swatch", description: "남들이 길로만 보는 곳에서 당신은 예술을 봅니다." },
    { id: "s3", milestone: 3, label: "인간 가교", categoryId: "social", icon: "mdi:account-voice", description: "오늘 3명의 사람과 유대감을 가졌습니다." },
    { id: "s15", milestone: 15, label: "거리의 영혼", categoryId: "social", icon: "mdi:account-group", description: "낯선 사람들을 이야기로 바꾸어 놓았습니다." },
    { id: "o3", milestone: 3, label: "디테일 지향", categoryId: "observation", icon: "mdi:magnify", description: "아무도 눈치채지 못한 3가지를 보았습니다." },
    { id: "o15", milestone: 15, label: "영화감독의 눈", categoryId: "observation", icon: "mdi:telescope", description: "당신의 시선은 위대한 영화의 렌즈입니다." },
    { id: "w3", milestone: 3, label: "마음 챙김 휴식", categoryId: "wellness", icon: "mdi:leaf", description: "정신적 평화를 위해 3번의 시간을 투자했습니다." },
    { id: "w15", milestone: 15, label: "토털 밸런스", categoryId: "wellness", icon: "mdi:spa", description: "몸과 마음이 당신에게 감사해합니다." }
  ],
  stats: {
    adventures: "어드벤처",
    badges: "배지",
    progress: "나의 성취도",
    trophies: "트로피 컬렉션"
  },
  shareTemplate: "방금 미니 어드벤처를 하나 얻었습니다!\n\n\"{text}\"\n\n도전해보시겠어요? 여기서 생성하세요: {url}"
};

const seo: ToolLocaleContent<MiniAdventuresUI>['seo'] = [
  { type: "title", text: "미니 어드벤처: 일상의 예술", level: 2 },
  { type: "paragraph", html: "마이크로 어드벤처가 어떻게 뇌를 활성화하고, 지루한 일상에 맞서며, 내면의 호기심을 깨우는지 알아보세요. 루틴은 창의성의 적입니다. 일상생활에 작은 변화를 도입함으로써, 우리는 뇌가 새로운 신경망을 형성하도록 자극할 수 있습니다." },
  { type: "title", text: "신경 가소성의 실천", level: 3 },
  { type: "paragraph", html: "루틴은 창의성의 적입니다. 새로운 맛을 시도하거나 낯선 길을 걷는 것과 같이 일상생활에 작은 변화를 도입함으로써, 뇌에 새로운 신경망을 형성하도록 강제할 수 있습니다. 이러한 마이크로 어드벤처는 정신을 민첩하게 유지하고 새로운 가능성에 마음을 열어주는 '정신 건강 체육관' 역할을 합니다." },
  { type: "title", text: "정서적 웰빙", level: 3 },
  { type: "paragraph", html: "정체된 느낌은 종종 절대적인 예측 가능성에서 비롯됩니다. 어드벤처 생성기의 통제된 무작위성은 '긍정적인 놀라움'이라는 요소를 도입하여 도파민을 분출시키고 기분을 자연스럽게 개선합니다. 발견의 전율을 느끼기 위해 대서양을 횡단하는 여행을 떠날 필요는 없습니다." },
  { type: "title", text: "이미 아는 곳을 탐험하라: 로컬 철학", level: 2 },
  { type: "paragraph", html: "우리는 눈에 띄지 않는 이야기와 디테일에 둘러싸여 살고 있습니다. 이 예측의 목표는 평범함 속에서 비범함을 발견하도록 시각을 훈련하는 것입니다. 완벽한 순간을 찾지 마세요. 가능한 순간을 찾으세요." },
  {
    type: "grid",
    columns: 2
  },
  { type: "card", icon: "mdi:clock-fast", title: "변명은 그만", html: "15분 미만, 비용은 0원으로 할 수 있는 어드벤처입니다. 시간은 호기심의 장벽이 될 수 없습니다." },
  { type: "card", icon: "mdi:lock-outline", title: "철저한 프라이버시", html: "가입하거나 데이터를 공유할 필요가 없습니다. 성취도와 완료된 어드벤처는 오직 사용자의 기기에만 저장됩니다." },
  { type: "card", icon: "mdi:share-variant", title: "건강한 바이럴", html: "끊임없이 타인과 비교하는 SNS 대신, 다른 사람들도 자신의 틀에서 벗어나도록 영감을 주는 챌린지를 공유하세요." },
  { type: "card", icon: "mdi:trophy-outline", title: "게이미피케이션", html: "완료한 챌린지 카테고리별로 독점 배지를 수집하세요." }
];

const faq: ToolLocaleContent<MiniAdventuresUI>['faq'] = [
  { question: "마이크로 어드벤처란 무엇인가요?", answer: "짧고, 가깝고, 저렴하며 단순한 모험을 말합니다. 앨러스터 험프리스(Alastair Humphreys)에 의해 대중화된 이 용어는 흥미진진한 경험을 하기 위해 지구 반대편으로 갈 필요가 없음을 보여줍니다." },
  { question: "이 생성기는 무엇을 위한 것인가요?", answer: "분석 마비(결정 장애)에 대처하기 위한 도구입니다. 때때로 우리는 뭔가 다른 것을 하고 싶지만 무엇을 해야 할지 모를 때가 있습니다. 이 시뮬레이터는 무작위로 챌린지를 선택해줌으로써 결정에 대한 정신적 부담을 덜어줍니다." },
  { question: "어드벤처를 등록해야 하나요?", answer: "아니요. 이것은 철저히 프라이버시를 보호하는 도구입니다. 챌린지는 브라우저에서 무작위로 생성되며 사용자가 무엇을 하는지, 어디를 가는지에 대한 어떠한 기록도 저장하지 않습니다." },
  { question: "새로운 어드벤처를 제안할 수 있나요?", answer: "물론입니다! 이 도구의 코드는 공개되어 있습니다. 예산이나 시간이 많이 들지 않는 재미있는 챌린지 아이디어가 있다면 GitHub 저장소를 통해 제안해주실 수 있습니다." }
];

const bibliography: ToolLocaleContent<MiniAdventuresUI>['bibliography'] = [
  { name: "앨러스터 험프리스: 마이크로어드벤처", url: "https://alastairhumphreys.com/blog/microadventures-3/" },
  { name: "롭 워커: 관찰의 기술", url: "https://www.goodreads.com/es/book/show/41552704-the-art-of-noticing" }
];

const howTo: ToolLocaleContent<MiniAdventuresUI>['howTo'] = [
  { name: "생성하기", text: "생성 버튼을 눌러 무작위 챌린지를 받습니다." },
  { name: "실천하기", text: "하루가 끝나기 전에 챌린지를 완료하도록 노력해보세요." },
  { name: "완료하기", text: "완료로 표시하여 배지를 얻고 성취도를 높이세요." }
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
  applicationCategory: 'TravelApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<MiniAdventuresUI> = {
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
