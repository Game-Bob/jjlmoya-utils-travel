import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SchengenCalculatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'schengen-calculator';
const title = 'シェンゲン協定 90 180日 滞在日数計算ツール';
const description =
  'シェンゲン圏の90/180日ローリングルールに基づく短期滞在日数を即座に計算。残存可能日数の把握やオーバーステイ違反の防止に役立ちます。';

const ui: SchengenCalculatorUI = {
  verdictSafeTitle: '合法的な滞在（制限日数以内）',
  verdictWarningTitle: '注意: 90日制限の上限に近づいています',
  verdictOverstayTitle: '不法オーバーステイ（滞在日数超過）が検出されました',
  daysRemainingSub: '残り利用可能日数',
  daysUsedSub: '180日枠内の消化日数',
  maxStaySub: '連続滞在可能日数',
  fullResetSub: '90日間完全リセット予定日',
  plannerHeading: '1. 渡航予定日のステータス判定',
  plannerEntryLabel: '入国予定日 / 判定対象日',
  quickDatesLabel: '日付ジャンプ',
  presetToday: '本日',
  presetPlus7: '+1週間',
  presetPlus14: '+2週間',
  presetPlus30: '+1ヶ月',
  tripsHeading: '2. 渡航履歴（過去の滞在および今後の計画）',
  addTripBtn: '+ 渡航日程を追加',
  emptyTripsMsg: '渡航履歴が登録されていません。過去または今後のシェンゲン圏滞在日程を追加してください。',
  colArrival: '入国日（到着）',
  colDeparture: '出国日（出発）',
  colDestination: '訪問国 / メモ',
  colDays: '日数',
  sampleBtn: 'サンプル渡航データを読み込む',
  clearBtn: 'すべて消去',
  timelineTitle: '180日間の移動監視ウィンドウ',
  legendInSchengen: 'シェンゲン圏内',
  legendOutside: '圏外',
  legendOverstay: '超過（不法滞在）',
  bannerSafe: '{date}時点で、使用済み日数は{used}です（残り利用可能：{rem}）。',
  bannerWarning: '{date}時点で、使用済み日数は{used}です（残りわずか：{rem}）。',
  bannerOverstay: '{date}からオーバーステイ（不法滞在）違反が検出されました。旅程が制限を{days}超過しています。',
  unitDays: '日',
  notesPlaceholder: '例: フランス、スペイン',
  sampleNotes1: 'イタリア周遊 (20日間)',
  sampleNotes2: 'ドイツ・オーストリア (20日間)',
  sampleNotesDefault: 'フランス・スペイン',
};

const seo: ToolLocaleContent<SchengenCalculatorUI>['seo'] = [
  {
    type: 'title',
    text: 'シェンゲン協定 90 180日ルールの正確な仕組み',
    level: 2,
  },
  {
    type: 'summary',
    title: 'ローリングウィンドウ監視システムの基本原則',
    items: [
      'EU圏外の渡航者は、いかなる180日間の枠内でも最大90日までシェンゲン域内に滞在可能です。',
      '180日間の計算枠は毎日1日ずつ前進し、常に過去179日間を遡って監視します。',
      '入国日と出国日は、どちらも1日分の完全な滞在日としてカウントされます。',
      '圏外への一時的な出国では日数はリセットされず、完全なリセットには連続90日間の圏外滞在が必要です。',
    ],
  },
  {
    type: 'paragraph',
    html: 'シェンゲン協定加盟国では、<em>シェンゲン国境規則（EU規則2016/399）</em>第6条(1)に基づき、短期滞在査証免除者およびCビザ保持者に対して<strong>あらゆる180日間の期間において最大90日以内</strong>という厳格な滞在制限を課しています。欧州域内に滞在するすべての日において、入国管理局はその日を含む過去180日間に29の加盟国で過ごした日数の合計を判定します。',
  },
  {
    type: 'title',
    text: '主要指標と国境管理基準',
    level: 2,
  },
  {
    type: 'stats',
    items: [
      {
        value: '90日間',
        label: '最大滞在許可日数',
      },
      {
        value: '180日間',
        label: '遡及監視ウィンドウ',
      },
      {
        value: '両端日含む',
        label: '入出国日算入基準',
      },
      {
        value: '29ヶ国',
        label: 'シェンゲン適用領域',
      },
    ],
  },
  {
    type: 'title',
    text: '固定暦年枠とローリングウィンドウの違い',
    level: 2,
  },
  {
    type: 'comparative',
    items: [
      {
        title: '暦年枠という一般的な誤解',
        description:
          '1月1日になると日数が全回復する、あるいは一度欧州を出れば日数がゼロに戻ると誤解する旅行者が後を絶ちません。この誤解は意図せぬオーバーステイと高額な罰金の原因となります。',
      },
      {
        title: '実際の動的ローリング計算',
        description:
          'シェンゲン圏での滞在日は連続したタイムライン上に記録されます。時間の経過とともに、180日以上前に終了した過去の滞在が計算枠から外れ、新たな滞在可能枠が順次回復します。',
      },
    ],
  },
  {
    type: 'title',
    text: '典型的な渡航パターンと適法性判定',
    level: 2,
  },
  {
    type: 'table',
    headers: ['渡航パターン', '具体例', '適法性ステータス', '運用上のアドバイス'],
    rows: [
      [
        '単一の連続滞在',
        '6月1日入国、8月29日出国（90日間）',
        '適法',
        '90日目ちょうどに出国し、枠を完全回復させるには圏外で連続90日間過ごす必要があります。',
      ],
      [
        '頻繁な分割渡航',
        '30日間の滞在を30日間の圏外休止を挟んで3回実施',
        '適法',
        '各渡航の入国日と出国日において、それぞれの過去180日枠で上限超過がないか確認が必要です。',
      ],
      [
        'デジタルノマド往復滞在',
        '圏内60日と圏外30日を交互に繰り返す',
        '違反リスク極大',
        '30日間の圏外滞在では180日前の滞在分しか枠が空かず、入国拒否となる可能性が非常に高くなります。',
      ],
      [
        '完全90日リセット',
        'シェンゲン圏外に連続して90日間滞在',
        '全枠回復',
        '次回の入国時に最大90日間の滞在可能枠が完全に利用可能となります。',
      ],
    ],
  },
  {
    type: 'title',
    text: '国境トラブルを防ぐための実践的戦略',
    level: 2,
  },
  {
    type: 'tip',
    title: '安全マージン日数を確保する',
    html: '決して90日目ちょうどの帰国便を予約しないでください。フライトの欠航や急病により出国が91日目になると、欧州出入国システム（EES）に自動的に不法滞在記録が登録され、将来の入国禁止処分の対象となります。',
  },
  {
    type: 'card',
    title: '圏外滞在を証明する記録を保存する',
    html: 'シェンゲン非加盟国（イギリス、アイルランド、キプロス、モンテネグロ、アルバニアなど）の搭乗券、ホテル領収書、パスポートスタンプを保管し、監査時に圏外にいた事実を確実に証明できるようにしてください。',
  },
  {
    type: 'title',
    text: '欧州国境管理の基本用語集',
    level: 2,
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'オーバーステイ（不法滞在）',
        definition:
          '180日の枠内で許可された90日を超えてシェンゲン域内に滞在すること。罰金、強制退去、将来の入国禁止の対象。',
      },
      {
        term: 'EES（出入国システム）',
        definition:
          'パスポートへの手押しスタンプを廃止し、非EU渡航者の生体認証情報をデジタル登録するEUの自動管理システム。',
      },
      {
        term: '第三国国民',
        definition: 'EU加盟国またはEFTA加盟国の国籍を持たないすべての渡航者。',
      },
    ],
  },
];

const faq: ToolLocaleContent<SchengenCalculatorUI>['faq'] = [
  {
    question: 'シェンゲン協定の90 180日ルールとは何ですか？',
    answer:
      'EU域外の旅行者が、長期ビザなしでシェンゲン協定加盟29ヶ国に滞在する場合、あらゆる180日間の枠内で最大90日まで滞在できるという共通規則です。',
  },
  {
    question: '一度欧州を出れば90日の計算はリセットされますか？',
    answer:
      'いいえ。一時的な出国ではリセットされません。180日間の枠は毎日移動するため、完全な90日枠の回復にはシェンゲン圏外で連続して90日間過ごす必要があります。',
  },
  {
    question: '入国日と出国日は滞在日数にカウントされますか？',
    answer:
      'はい。シェンゲン国境規則第6条により、入国審査を通過した日と出国審査を通過した日は、時間帯に関わらずそれぞれ丸1日として計算されます。',
  },
  {
    question: 'この計算に含まれるシェンゲン加盟国はどこですか？',
    answer:
      'アイスランド、イタリア、エストニア、オーストリア、オランダ、ギリシャ、クロアチア、スイス、スウェーデン、スペイン、スロバキア、スロベニア、チェコ、デンマーク、ドイツ、ノルウェー、ハンガリー、フィンランド、フランス、ブルガリア、ベルギー、ポーランド、ポルトガル、マルタ、ラトビア、リトアニア、リヒテンシュタイン、ルーマニア、ルクセンブルクの29ヶ国です。英国とアイルランドは含まれません。',
  },
];

const howTo: ToolLocaleContent<SchengenCalculatorUI>['howTo'] = [
  {
    name: '判定対象日を選択',
    text: '残存可能日数を確認したい渡航予定日や入国日を指定します。',
  },
  {
    name: '過去および今後の渡航日程を入力',
    text: '直近数ヶ月間にシェンゲン圏に滞在した入国日と出国日をすべて登録します。',
  },
  {
    name: '残存日数と安全マージンを確認',
    text: '残存日数ゲージ、連続滞在可能日数、完全リセット日を確認して適法性を確認します。',
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
  inLanguage: 'ja',
};

export const content: ToolLocaleContent<SchengenCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  howTo,
  howToTitle: 'シェンゲン滞在日数の計算方法',
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography: bibliographyEntries,
};
