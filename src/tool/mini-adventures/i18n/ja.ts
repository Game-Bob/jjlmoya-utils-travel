import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MiniAdventuresUI } from '../index';

const slug = 'mini-adventure-forecast';
const title = 'ミニアドベンチャー予測：日常からの脱却';
const description = 'マンネリを打破し、周囲を探索するためのランダムなデイリーチャレンジ・ジェネレーター。';

const ui: MiniAdventuresUI = {
  title: "ミニアドベンチャー",
  homeTitle: "ミニアドベンチャー",
  homeDesc: "今日をいつもと少し違う一日に。探索する準備はできていますか？",
  generateBtn: "アドベンチャーを生成",
  anotherBtn: "別のもの",
  doneBtn: "完了",
  shareBtn: "共有",
  categories: {
    exploration: { id: "exploration", label: "探索", icon: "mdi:map-marker-path", color: "#10b981", styling: "border-emerald-500/30 text-emerald-400 bg-emerald-500/5" },
    food: { id: "food", label: "グルメ", icon: "mdi:food-variant", color: "#f59e0b", styling: "border-amber-500/30 text-amber-400 bg-amber-500/5" },
    learning: { id: "learning", label: "学習", icon: "mdi:school", color: "#6366f1", styling: "border-indigo-500/30 text-indigo-400 bg-indigo-500/5" },
    creativity: { id: "creativity", label: "創造性", icon: "mdi:palette", color: "#ec4899", styling: "border-pink-500/30 text-pink-400 bg-pink-500/5" },
    social: { id: "social", label: "ソーシャル", icon: "mdi:account-group", color: "#0ea5e9", styling: "border-sky-500/30 text-sky-400 bg-sky-500/5" },
    observation: { id: "observation", label: "観察", icon: "mdi:eye", color: "#8b5cf6", styling: "border-violet-500/30 text-violet-400 bg-violet-500/5" },
    wellness: { id: "wellness", label: "ウェルネス", icon: "mdi:heart-pulse", color: "#f43f5e", styling: "border-rose-500/30 text-rose-400 bg-rose-500/5" }
  },
  adventures: [
    { id: 1, text: "入ったことのない場所でコーヒーや飲み物を楽しんでみる。", categoryId: "food" },
    { id: 2, text: "家を出る時、普段は選ばない方向に10分間歩いてみる。", categoryId: "exploration" },
    { id: 3, text: "知らない3つの言語で「ありがとう」の言い方を覚えてみる。", categoryId: "learning" },
    { id: 4, text: "自分の通りにある、目に留まった建築のディテールを写真に撮る。", categoryId: "creativity" },
    { id: 5, text: "食べたことのない果物を買って、その味を体験してみる。", categoryId: "food" },
    { id: 6, text: "近所の記念碑や案内板を探して、そこに記された歴史を読んでみる。", categoryId: "exploration" },
    { id: 7, text: "目の前にあるものを60秒以内で描いてみる。", categoryId: "creativity" },
    { id: 8, text: "普段あまり話さない近所の人に挨拶してみる。", categoryId: "social" },
    { id: 9, text: "普段聴かないジャンルの音楽を5分間聴いてみる。", categoryId: "learning" },
    { id: 10, text: "骨董品店やリサイクルショップを訪れて、一番奇妙なものを見つけてみる。", categoryId: "exploration" },
    { id: 11, text: "公園に座って、何種類の鳥が見えるか数えてみる。", categoryId: "observation" },
    { id: 12, text: "ポジティブなメッセージを書いて、公共図書館の本の中にそっと挟んでおく。", categoryId: "social" },
    { id: 13, text: "今日感謝していることを5つリストアップしてみる。", categoryId: "wellness" },
    { id: 14, text: "パントリーにあるものだけで、新しいレシピの料理を作ってみる。", categoryId: "food" },
    { id: 15, text: "画面（スマホ、テレビ、PC）を全く見ずに20分間過ごしてみる。", categoryId: "wellness" },
    { id: 16, text: "家の近くの木を見つけて、その種類を調べてみる。", categoryId: "learning" },
    { id: 300, text: "今週末、近くの町を訪れる計画を立ててみる。", categoryId: "exploration" },
    { id: 301, text: "手の指がラテン語で何と呼ばれているか調べてみる。", categoryId: "learning" },
    { id: 302, text: "この文章の各単語に対して韻を踏む言葉を探してみる。", categoryId: "creativity" },
    { id: 303, text: "ずっと前の出来事について、友人に感謝を伝えてみる。", categoryId: "social" }
  ],
  achievements: [
    { id: "g1", milestone: 1, label: "目覚め", categoryId: "global", icon: "mdi:footprint", description: "最初のミニアドベンチャーを完了。" },
    { id: "g10", milestone: 10, label: "驚きの習慣", categoryId: "global", icon: "mdi:sparkles", description: "マンネリを10回打破しました。" },
    { id: "g50", milestone: 50, label: "日々のコレクター", categoryId: "global", icon: "mdi:calendar-star", description: "普通を特別に変えて50日が経過。" },
    { id: "g150", milestone: 150, label: "偶然のマスター", categoryId: "global", icon: "mdi:trophy-variant", description: "アドベンチャー・カタログの半分を達成。" },
    { id: "g300", milestone: 300, label: "自由な精神", categoryId: "global", icon: "mdi:ghost", description: "日々の冒険術を極めました。" },
    { id: "e3", milestone: 3, label: "地元観光客", categoryId: "exploration", icon: "mdi:map-marker-outline", description: "3つの新しい場所を発見。" },
    { id: "e15", milestone: 15, label: "都市地図製作者", categoryId: "exploration", icon: "mdi:map-check", description: "誰よりも自分の郵便番号周辺に詳しくなりました。" },
    { id: "f3", milestone: 3, label: "好奇心旺盛な味覚", categoryId: "food", icon: "mdi:silverware-clean", description: "知らない味を3つ体験。" },
    { id: "f15", milestone: 15, label: "グルメな錬金術師", categoryId: "food", icon: "mdi:silverware-variant", description: "パントリーは世界へのパスポート。" },
    { id: "l3", milestone: 3, label: "万物の見習い", categoryId: "learning", icon: "mdi:book-open-page-variant", description: "世界の3つの豆知識を習得。" },
    { id: "l15", milestone: 15, label: "歩く図書館", categoryId: "learning", icon: "mdi:head-cog", description: "好奇心に限界はありません。" },
    { id: "c3", milestone: 3, label: "ドローイング・ハンド", categoryId: "creativity", icon: "mdi:palette-outline", description: "3つの小さな挑戦に足跡を残しました。" },
    { id: "c15", milestone: 15, label: "ローカル・アヴァンギャルド", categoryId: "creativity", icon: "mdi:palette-swatch", description: "他人がただの道を見る場所に、あなたは芸術を見ます。" },
    { id: "s3", milestone: 3, label: "ヒューマン・ブリッジ", categoryId: "social", icon: "mdi:account-voice", description: "今日3人とつながりを持ちました。" },
    { id: "s15", milestone: 15, label: "通りの魂", categoryId: "social", icon: "mdi:account-group", description: "見知らぬ人を物語に変えました。" },
    { id: "o3", milestone: 3, label: "ディテール志向", categoryId: "observation", icon: "mdi:magnify", description: "誰も気づかない3つのことを見つけました。" },
    { id: "o15", milestone: 15, label: "映画監督の眼", categoryId: "observation", icon: "mdi:telescope", description: "あなたの眼差しは名作映画のレンズ。" },
    { id: "w3", milestone: 3, label: "マインドフルな休息", categoryId: "wellness", icon: "mdi:leaf", description: "心の安らぎのために3つの時間を捧げました。" },
    { id: "w15", milestone: 15, label: "トータルバランス", categoryId: "wellness", icon: "mdi:spa", description: "体と心があなたに感謝しています。" }
  ],
  stats: {
    adventures: "アドベンチャー",
    badges: "バッジ",
    progress: "現在の進捗",
    trophies: "トロフィー・コレクション"
  },
  shareTemplate: "ミニアドベンチャーを手に入れました！\n\n「{text}」\n\nあなたも挑戦してみる？ ここから生成： {url}"
};

const seo: ToolLocaleContent<MiniAdventuresUI>['seo'] = [
  { type: "title", text: "ミニアドベンチャー：日常の中の芸術", level: 2 },
  { type: "paragraph", html: "マイクロアドベンチャーがどのように脳を活性化し、マンネリと闘い、生まれ持った好奇心を呼び覚ますかを発見してください。ルーチンは創造性の敵です。日常生活に小さな変化を取り入れることで、脳に新しい神経接続を形成させ、活性化させることができます。" },
  { type: "title", text: "神経可塑性の実践", level: 3 },
  { type: "paragraph", html: "ルーチンは創造性の敵です。新しい味を試したり、知らない道を歩いたりといった、日常生活に小さな変化を取り入れることで、脳に新しい神経接続を強制的に形成させることができます。これらのマイクロアドベンチャーは、心を機敏に保ち、新しい可能性に対してオープンにするための「心のジム」として機能します。" },
  { type: "title", text: "心のウェルビーイング", level: 3 },
  { type: "paragraph", html: "停滞しているという感覚は、多くの場合、完全な予測可能性から生じます。アドベンチャー・ジェネレーターによるコントロールされたランダム性は「ポジティブな驚き」の要素を導入し、ドーパミンを放出させて気分を自然に向上させます。発見の醍醐味を感じるために、海を越えた大旅行は必要ありません。" },
  { type: "title", text: "既知の場所を探索する：ローカルの哲学", level: 2 },
  { type: "paragraph", html: "私たちは、気づかれない物語やディテールに囲まれて生きています。この予測ツールの目的は、日常の中にある「非日常」を見るための目を養うことです。完璧な瞬間を探すのではなく、可能な瞬間を探しましょう。" },
  {
    type: "grid",
    columns: 2
  },
  { type: "card", icon: "mdi:clock-fast", title: "言い訳は不要", html: "15分以内、かつ費用ゼロでできるアドベンチャーです。時間は好奇心の障壁にはなりません。" },
  { type: "card", icon: "mdi:lock-outline", title: "プライバシーを保護", html: "登録やデータの共有は不要です。進捗状況や完了したアドベンチャーはお使いのデバイスにのみ保存されます。" },
  { type: "card", icon: "mdi:share-variant", title: "健全な拡散性", html: "SNSでの絶え間ない比較を助長するのではなく、他人が自分の殻を破るきっかけとなるような挑戦を共有しましょう。" },
  { type: "card", icon: "mdi:trophy-outline", title: "ゲーミフィケーション", html: "完了したチャレンジのカテゴリごとに、限定バッジを集めることができます。" }
];

const faq: ToolLocaleContent<MiniAdventuresUI>['faq'] = [
  { question: "マイクロアドベンチャーとは何ですか？", answer: "短期間で、地元で、安価で、シンプルな冒険のことです。（アラスター・ハンフリーズによって普及した）この言葉は、刺激的な体験をするために世界の裏側まで行く必要はないということを示そうとしています。" },
  { question: "このジェネレーターは何のためにありますか？", answer: "分析麻痺（考えすぎて動けない状態）と闘うためのものです。何か違うことをしたいけれど、何をすればいいかわからないことがあります。このシミュレーターはあなたのためにランダムに挑戦を選び、決定するという精神的な負担を取り除きます。" },
  { question: "アドベンチャーを登録する必要がありますか？", answer: "いいえ。これは完全なプライバシーを重視したツールです。チャレンジはブラウザ内でランダムに生成され、あなたが何をしたか、どこへ行ったかについての記録は一切保存しません。" },
  { question: "新しいアドベンチャーを提案できますか？", answer: "もちろんです！このツールのコードは公開されています。予算や時間をあまり必要としない楽しいチャレンジのアイデアがあれば、GitHubのリポジトリを通じて提案することができます。" }
];

const howTo: ToolLocaleContent<MiniAdventuresUI>['howTo'] = [
  { name: "生成", text: "生成ボタンを押して、ランダムなチャレンジを受け取ります。" },
  { name: "実行", text: "その日のうちにチャレンジを完了するように努めましょう。" },
  { name: "完了", text: "チャレンジを完了としてマークし、バッジと進捗を獲得します。" }
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
  inLanguage: 'ja',
};

export const content: ToolLocaleContent<MiniAdventuresUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: "よくある質問",
  bibliography: "出典とリファレンス",
  howTo,
  howToTitle: "使い方",
  schemas: [faqSchema, howToSchema, appSchema],
};
